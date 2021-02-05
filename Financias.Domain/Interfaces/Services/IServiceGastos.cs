using Financias.Domain.Dtos;
using Financias.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using static Financias.Domain.Enum.Enums;

namespace Financias.Domain.Interfaces.Services
{
    public interface IServiceGastos: IServiceBase<Gastos>
    {
        Task<List<GastosListaDto>> BuscarTodos(string mes);

        Task<GastoDto> BuscarPorId(int id);

        Task<Gastos> AtualizarSituacao(AtualizarSituacaoGastoDto atualizarSituacaoGastoDto);
    }
}
