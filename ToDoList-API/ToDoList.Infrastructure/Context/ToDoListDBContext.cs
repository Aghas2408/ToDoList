using Microsoft.EntityFrameworkCore;
using ToDoList.Infrastructure.Models;

namespace ToDoList.Models
{
    public class ToDoListDBContext : DbContext
    {
        public ToDoListDBContext(DbContextOptions<ToDoListDBContext> options) : base(options) { }

        public DbSet<ToDo> ToDos { get; set; }

        public DbSet<User> Users { get; set; }
    }
}