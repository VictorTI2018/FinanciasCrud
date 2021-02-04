using Financias.Domain.Entities;
using Financias.Domain.Interfaces.Repository;
using Financias.Infra.Data.Context;
using System;
using System.Collections.Generic;
using System.Text;

namespace Financias.Infra.Data.Repository
{
    public class RepositoryGastos: RepositoryBase<Gastos>, IRepositoryGastos
    {

        private readonly SqlContext _sqlContext;

        public RepositoryGastos(SqlContext sqlContext) : base(sqlContext)
        {
            _sqlContext = sqlContext;
        }
    }
}
