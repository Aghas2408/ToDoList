using Microsoft.EntityFrameworkCore;

namespace ToDoList.Models
{
    public class ToDoListDBContext : DbContext
    {
        public ToDoListDBContext(DbContextOptions<ToDoListDBContext> options) : base(options) { }

        public DbSet<ToDo> ToDos { get; set; }
    }
}
