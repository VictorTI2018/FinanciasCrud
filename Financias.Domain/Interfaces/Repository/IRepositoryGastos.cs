using Financias.Domain.Dtos;
using Financias.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
using static Financias.Domain.Enum.Enums;

namespace Financias.Domain.Interfaces.Repository
{
    public interface IRepositoryGastos : IRepositoryBase<Gastos>
    {
        Task<List<GastosListaDto>> BuscarTodos(string mes);

        Task<GastoDto> BuscarPorId(int id);

        Task<Gastos> AtualizarSituacao(AtualizarSituacaoGastoDto atualizarSituacaoGastoDto);
    }
}
