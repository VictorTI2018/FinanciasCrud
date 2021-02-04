using Financias.Domain.Dtos;
using Financias.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Financias.Domain.Interfaces.Repository
{
    public interface IRepositoryGastos : IRepositoryBase<Gastos>
    {
        Task<List<GastosListaDto>> BuscarTodos(string mes);
    }
}
