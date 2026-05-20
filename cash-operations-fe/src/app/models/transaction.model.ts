export interface Transaction {
  transactionId: number;
  amount: number;
  description: string;
  status: 'Created' | 'Completed';
  transactionType: 'Deposit' | 'Withdrawal' | 'Transfer';
  dateCreated: string;
}

export interface TransactionCreate {
  amount: number;
  description: string;
  status: 'Created' | 'Completed';
  transactionType: 'Deposit' | 'Withdrawal' | 'Transfer';
}

export interface TransactionUpdate {
  amount: number;
  description: string;
  status: 'Created' | 'Completed';
  transactionType: 'Deposit' | 'Withdrawal' | 'Transfer';
}
