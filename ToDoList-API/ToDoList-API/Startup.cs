using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;
using Mapster;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using ToDoList.Domain;
using ToDoList.Domain.Interfaces;
using ToDoList.Domain.Models;
using ToDoList.Domain.Services;
using ToDoList.Infrastructure;
using ToDoList.Infrastructure.Models;
using ToDoList.Models;

namespace ToDoList_API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            TypeAdapterConfig<ToDo, ToDoDTO>
                .NewConfig();
            TypeAdapterConfig<ToDoDTO, ToDo>
                .NewConfig();
            TypeAdapterConfig<User, UserDTO>
                .NewConfig();
            TypeAdapterConfig<UserDTO, User>
                .NewConfig();
            TypeAdapterConfig<AuthResponse, AuthResponseDTO>
                .NewConfig();

            AuthenticationConfiguration authenticationConfiguration = new AuthenticationConfiguration();
            Configuration.Bind("Authentication", authenticationConfiguration);

            services.AddCors(policies =>
            {
                policies.AddPolicy("MyPolicy", builder =>
                {
                    builder.WithOrigins(authenticationConfiguration.Audience)
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                });
            });

            services.AddDbContext<ToDoListDBContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddControllers();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ToDoList_API", Version = "v1" });
                c.AddSecurityDefinition(JwtBearerDefaults.AuthenticationScheme, new OpenApiSecurityScheme()
                {
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = JwtBearerDefaults.AuthenticationScheme,
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                    Description = "JWT Authorization header using the Bearer scheme. \r\n\r\n Enter 'Bearer' [space] and then your token in the text input below.\r\n\r\nExample: \"Bearer 12345abcdef\"",
                });
                c.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                          new OpenApiSecurityScheme
                            {
                                Reference = new OpenApiReference
                                {
                                    Type = ReferenceType.SecurityScheme,
                                    Id = "Bearer"
                                }
                            },
                            new string[] {}

                    }
                });
            });

            services.AddTransient(typeof(IRepository<>), typeof(Repository<>));
            services.AddTransient<IToDoListSerivce, ToDoListService>();
            services.AddTransient<IUserService, UserService>();
            services.AddSingleton(authenticationConfiguration);
            services.AddTransient<IRegisterService, RegisterService>();
            services.AddTransient<IAuthService, AuthService>();
            services.AddTransient<IPasswordHasherService, PasswordHasherService>();
            services.AddTransient<JWTHandler>();

            services.AddHttpContextAccessor();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(o =>
            {
                o.TokenValidationParameters = new TokenValidationParameters()
                {
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(authenticationConfiguration.AccessTokenSecret)),
                    ValidIssuer = authenticationConfiguration.Issuer,
                    ValidAudience = authenticationConfiguration.Audience,
                    ValidateIssuerSigningKey = true,
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ClockSkew = TimeSpan.Zero
                };
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors("MyPolicy");

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ToDoList_API v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}