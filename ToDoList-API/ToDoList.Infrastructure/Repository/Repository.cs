using System.Collections.Generic;
using ToDoList.Models;
using ToDoList.Infrastructure.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;

namespace ToDoList.Domain
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : BaseEntity
    {
        private readonly ToDoListDBContext _context;

        public Repository(ToDoListDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<TEntity>> GetAll(Func<TEntity, bool> predicate)
        {
            return await _context.Set<TEntity>().Where(predicate).AsQueryable().ToListAsync();
        }

        public async Task<TEntity> GetById(int id)
        {
            return await _context.Set<TEntity>().FirstOrDefaultAsync(e => e.Id == id);
        }


        public async Task<int> Update(TEntity entity)
        {
            _context.Set<TEntity>().Update(entity);
            return await _context.SaveChangesAsync();
        }

        public async Task Create(TEntity entity)
        {
            await _context.Set<TEntity>().AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var entity = await GetById(id);
            _context.Set<TEntity>().Remove(entity);

            await _context.SaveChangesAsync();
        }
    }
}