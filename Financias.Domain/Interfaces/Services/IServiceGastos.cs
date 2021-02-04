using Financias.Domain.Dtos;
using Financias.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Financias.Domain.Interfaces.Services
{
    public interface IServiceGastos: IServiceBase<Gastos>
    {
        Task<List<GastosListaDto>> BuscarTodos(string mes);
    }
}
