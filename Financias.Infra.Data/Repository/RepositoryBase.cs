using Financias.Domain.Interfaces.Repository;
using Financias.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Financias.Infra.Data.Repository
{
    public class RepositoryBase<TEntity> : IRepositoryBase<TEntity> where TEntity : class
    {
        private readonly SqlContext _sqlContext;

        public RepositoryBase(SqlContext sqlContext)
        {
            _sqlContext = sqlContext;
        }
        public async Task<TEntity> Delete(int id)
        {
            try
            {
                if (id == 0)
                    throw new ArgumentException("Valor do id menor ou igual a 0.");

                TEntity obj = _sqlContext.Set<TEntity>().Find(id);

                _sqlContext.Entry(obj).State = EntityState.Deleted;
                await _sqlContext.SaveChangesAsync();

                return obj;
            }catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<TEntity> Save(TEntity entity)
        {
            try
            {
                _sqlContext.Set<TEntity>().Add(entity);
                await _sqlContext.SaveChangesAsync();

                return entity;
            }catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<TEntity> Update(TEntity entity)
        {
            try
            {
                _sqlContext.Entry(entity).State = EntityState.Modified;
                await _sqlContext.SaveChangesAsync();

                return entity;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
