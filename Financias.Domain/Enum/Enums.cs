using System;
using System.Collections.Generic;
using System.Text;

namespace Financias.Domain.Enum
{
    public class Enums
    {
        public enum TipoGasto
        {
            Agua,
            Energia,
            Mercado,
            Casa,
            Outros
        };

        public enum TipoPagamento
        {
            CartaoCredito,
            CartaoDebito,
            Dinheiro
        };

        public enum SituacaoConta
        {
            Pendente,
            Pago
        }
    }
}
