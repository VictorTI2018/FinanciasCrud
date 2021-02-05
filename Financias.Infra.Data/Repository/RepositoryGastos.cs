using Financias.Domain.Dtos;
using Financias.Domain.Entities;
using Financias.Domain.Interfaces.Repository;
using Financias.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Financias.Infra.Data.Repository
{
    public class RepositoryGastos: RepositoryBase<Gastos>, IRepositoryGastos
    {

        private readonly SqlContext _sqlContext;

        public RepositoryGastos(SqlContext sqlContext) : base(sqlContext)
        {
            _sqlContext = sqlContext;
        }

        public async Task<List<GastosListaDto>> BuscarTodos(string mes)
        {
            return await _sqlContext.
                Gastos.
                Where(x => x.Mes == mes)
                .Select(GastosListaDto.Lista)
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<GastoDto> BuscarPorId(int id)
        {
            return await _sqlContext
                .Gastos.Where(x => x.Id == id)
                .Select(GastoDto.Gasto)
                .AsNoTracking()
                .FirstOrDefaultAsync();
        }
    }
}
