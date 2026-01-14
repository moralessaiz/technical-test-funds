export type TransactionType = 'SUSCRIPCION' | 'CANCELATION';

export interface Transaction {
    id: number;
    fundId: number;
    fundName: string;
    type: TransactionType;
    amount: number;
    date: Date;
    notificationWay?: 'Email' | 'SMS';
}
