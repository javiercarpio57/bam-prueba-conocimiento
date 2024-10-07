export interface IDashboard {
    transaction_by_category: { categoria: string, mnt_trx_mm: number }[];
    top_clientes: { id: number, mnt_trx_mm: number }[];
}
