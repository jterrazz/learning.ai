import { Transaction, type TransactionCategory } from '../../../../domain/transaction.entity.js';

export type InMemoryTransactionRecord = {
    accountIban: string;
    amount: number;
    category?: TransactionCategory;
    currency: string;
    date: string;
    description: string;
    id: string;
};

export class InMemoryTransactionMapper {
    static toDomain(record: InMemoryTransactionRecord): Transaction {
        return new Transaction(record);
    }

    static toPersistence(transaction: Transaction): InMemoryTransactionRecord {
        return {
            accountIban: transaction.accountIban,
            amount: transaction.amount,
            category: transaction.category,
            currency: transaction.currency,
            date: transaction.date,
            description: transaction.description,
            id: transaction.id,
        };
    }
}
