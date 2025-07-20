import { Account, type AccountProps } from '../../../../domain/account.entity.js';

// Defines the shape of an account record as it is stored in the in–memory database
export type InMemoryAccountRecord = AccountProps;

/**
 * Maps in-memory records to domain `Account` entities and vice versa. Keeping this logic
 * isolated makes it easier to swap the persistence layer later without touching
 * business logic.
 */
export class InMemoryAccountMapper {
    /**
     * Converts a raw persistence record to a domain `Account`.
     */
    public static toDomain(record: InMemoryAccountRecord): Account {
        return new Account(record);
    }

    /**
     * Converts a domain `Account` back to a plain persistence record.
     * Useful when we eventually implement create / update operations.
     */
    public static toPersistence(entity: Account): InMemoryAccountRecord {
        return {
            balance: entity.balance,
            bic: entity.bic,
            country: entity.country,
            currency: entity.currency,
            iban: entity.iban,
            name: entity.name,
        };
    }
}
