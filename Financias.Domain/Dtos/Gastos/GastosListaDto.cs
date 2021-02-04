using Financias.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using static Financias.Domain.Enum.Enums;

namespace Financias.Domain.Dtos
{
    public class GastosListaDto
    {

        public int Id { get; set; }

        public TipoGasto TipoGasto { get; set; }

        public TipoPagamento TipoPagamento { get; set; }

        public string NomeCartao { get; set; }
        public string Mes { get; set; }

        public decimal Valor { get; set; }

        public static Expression<Func<Gastos, GastosListaDto>> Lista
        {
            get
            {
                return x => new GastosListaDto()
                {
                    Id = x.Id,
                    TipoGasto = x.TipoGasto,
                    TipoPagamento = x.TipoPagamento,
                    NomeCartao = x.NomeCartao,
                    Mes = x.Mes,
                    Valor = x.Valor
                };
            }
        }
    }
}
