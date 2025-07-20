import { type Account } from '../../../domain/account.entity.js';

import { type AccountRepositoryPort } from '../../ports/outbound/persistence/account-repository.port.js';

/**
 * Input parameters for the GetAccounts use case using domain value objects
 */
export interface GetAccountsParams {
    currency?: string;
}

/**
 * Result returned by GetAccountsUseCase containing the raw domain accounts and
 * additional pagination metadata.
 */
export interface GetAccountsResult {
    accounts: Account[];
}

export class GetAccountsUseCase {
    constructor(private readonly accountRepository: AccountRepositoryPort) {}

    async execute(params: GetAccountsParams): Promise<GetAccountsResult> {
        const { currency } = params;

        const accounts = await this.accountRepository.findMany({
            currency,
        });

        return { accounts };
    }
}
