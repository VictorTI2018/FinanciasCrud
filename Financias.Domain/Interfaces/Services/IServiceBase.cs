using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Financias.Domain.Interfaces.Services
{
    public interface IServiceBase<TEntity> where TEntity : class
    {
        Task<TEntity> Save(TEntity entity);

        Task<TEntity> Update(TEntity entity);

        Task<TEntity> Delete(int id);
    }
}
