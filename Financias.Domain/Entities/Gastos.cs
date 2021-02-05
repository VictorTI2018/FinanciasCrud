using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using static Financias.Domain.Enum.Enums;

namespace Financias.Domain.Entities
{
    public class Gastos
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public TipoGasto TipoGasto { get; set; }

        [Required]
        public TipoPagamento TipoPagamento { get; set; }

        public string NomeCartao { get; set; }

        [Required]
        public string Mes { get; set; }

        [Required]
        public decimal Valor { get; set; }

        public SituacaoConta SituacaoConta { get; set; }
    }
}
