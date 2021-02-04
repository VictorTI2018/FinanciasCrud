using Financias.Domain.Entities;
using Financias.Domain.Interfaces.Repository;
using Financias.Domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace Financias.Services.Services
{
    public class ServicesGastos: ServicesBase<Gastos>, IServiceGastos
    {
        private readonly IRepositoryGastos _repositoryGastos;

        public ServicesGastos(IRepositoryGastos repositoryGastos) : base(repositoryGastos)
        {
            _repositoryGastos = repositoryGastos;
        }
    }
}
