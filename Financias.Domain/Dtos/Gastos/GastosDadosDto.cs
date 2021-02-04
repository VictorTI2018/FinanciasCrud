using System;
using System.Collections.Generic;
using System.Text;
using static Financias.Domain.Enum.Enums;

namespace Financias.Domain.Dtos
{
    public class GastosDadosDto
    {
       
        public int Id { get; set; }

        public TipoGasto TipoGasto { get; set; }


        public TipoPagamento TipoPagamento { get; set; }

        public string NomeCartao { get; set; }


        public string Mes { get; set; }

        public decimal Valor { get; set; }
    }
}
