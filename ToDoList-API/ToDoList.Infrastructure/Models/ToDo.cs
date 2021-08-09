using ToDoList.Infrastructure.Models;

namespace ToDoList.Models
{
    public class ToDo : BaseEntity
    {
        public string ToDoName { get; set; }

        public bool Checked { get; set; } = false;
    }
}
