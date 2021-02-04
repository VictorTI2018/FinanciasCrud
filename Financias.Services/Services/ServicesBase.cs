using Financias.Domain.Interfaces.Repository;
using Financias.Domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Financias.Services.Services
{
    public class ServicesBase<TEntity> : IServiceBase<TEntity> where TEntity : class
    {
        private readonly IRepositoryBase<TEntity> _repositoryBase;

        public ServicesBase(IRepositoryBase<TEntity> repositoryBase)
        {
            _repositoryBase = repositoryBase;
        }

        public async Task<TEntity> Delete(int id)
        {
            return await _repositoryBase.Delete(id);
        }

        public async Task<TEntity> Save(TEntity entity)
        {
            return await _repositoryBase.Save(entity);
        }

        public async Task<TEntity> Update(TEntity entity)
        {
            return await _repositoryBase.Update(entity);
        }
    }
}
