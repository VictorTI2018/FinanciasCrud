using AutoMapper;
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
using static Financias.Domain.Enum.Enums;

namespace Financias.Infra.Data.Repository
{
    public class RepositoryGastos : RepositoryBase<Gastos>, IRepositoryGastos
    {

        private readonly SqlContext _sqlContext;
        private readonly IMapper _mapper;

        public RepositoryGastos(SqlContext sqlContext,
            IMapper mapper) : base(sqlContext)
        {
            _sqlContext = sqlContext;
            _mapper = mapper;
        }

        public async Task<List<GastosListaDto>> BuscarTodos(string mes)
        {

            var gastosListaDB = await _sqlContext.
                Gastos.
                Where(x => x.Mes == mes)
                .AsNoTracking()
                .ToListAsync();
            List<GastosListaDto> gastosListaDtos = new List<GastosListaDto>();
            foreach(var item in gastosListaDB)
            {
                GastosListaDto gastoAdd = new GastosListaDto()
                {
                    Id = item.Id,
                    TipoGasto = item.TipoGasto,
                    TipoPagamento = item.TipoPagamento,
                    Valor = item.Valor,
                    Mes = item.Mes,
                    SituacaoConta = item.SituacaoConta,
                    Descricao = item.Descricao,
                    Situacao = item.SituacaoConta != 0

                };

                gastosListaDtos.Add(gastoAdd);
            }
            return gastosListaDtos;
        }

        public async Task<GastoDto> BuscarPorId(int id)
        {
            return await _sqlContext
                .Gastos.Where(x => x.Id == id)
                .Select(GastoDto.Gasto)
                .AsNoTracking()
                .FirstOrDefaultAsync();
        }

        public async Task<Gastos> AtualizarSituacao(AtualizarSituacaoGastoDto atualizarSituacaoGastoDto)
        {
            Gastos gastoDB = _mapper.Map<
                GastoDto, Gastos>(await _sqlContext.
                Gastos.Where(x => x.Id == atualizarSituacaoGastoDto.Id)
                .Select(GastoDto.Gasto)
                .AsNoTracking()
                .FirstOrDefaultAsync());

            gastoDB.SituacaoConta = atualizarSituacaoGastoDto.SituacaoConta;
            _sqlContext.Entry(gastoDB).State = EntityState.Modified;
            await _sqlContext.SaveChangesAsync();

            return gastoDB;
        }
    }
}
