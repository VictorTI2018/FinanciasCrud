using System;
using System.Collections.Generic;
using System.Text;
using static Financias.Domain.Enum.Enums;

namespace Financias.Domain.Dtos
{
    public class AtualizarSituacaoGastoDto
    {
        public int Id { get; set; }
        public SituacaoConta SituacaoConta { get; set; }
    }
}
