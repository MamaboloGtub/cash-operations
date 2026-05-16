export interface Transaction {
  transactionId: number;
  amount: number;
  description: string;
  transactionType: 'Deposit' | 'Withdrawal' | 'Transfer';
  dateCreated: string;
}

export interface TransactionCreate {
  amount: number;
  description: string;
  transactionType: 'Deposit' | 'Withdrawal' | 'Transfer';
}

export interface TransactionUpdate {
  amount: number;
  description: string;
  transactionType: 'Deposit' | 'Withdrawal' | 'Transfer';
}
