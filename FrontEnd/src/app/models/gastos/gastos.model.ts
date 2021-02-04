export interface Gastos {
    id?: number
    tipoGasto: TipoGasto
    tipoPagamento: TipoPagamento
    nomeCartao?: string
    mes: string,
    valor: number
}

export enum TipoGasto {
    Agua,
    Energia,
    Mercado,
    Casa,
    Outros
}

export enum TipoPagamento {
    CartaoCredito,
    CartaoDebito,
    Dinheiro
}