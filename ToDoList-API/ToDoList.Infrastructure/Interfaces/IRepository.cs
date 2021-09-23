using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Models;

namespace ToDoList.Infrastructure.Models
{
    public interface IRepository<TEntity> where TEntity : class
    {
        Task<TEntity> GetById(int id);

        Task<IEnumerable<TEntity>> GetAll(Func<TEntity, bool> predicate);

        Task<IEnumerable<TEntity>> GetAll();

        Task<int> Update(TEntity entity);

        Task Create(TEntity entitys);

        Task Delete(int id);

    }
}