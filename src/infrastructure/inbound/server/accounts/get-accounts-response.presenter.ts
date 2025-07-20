import { type GetAccountsResult } from '../../../../application/use-cases/accounts/get-accounts.use-case.js';

import { type Account } from '../../../../domain/account.entity.js';

type HttpAccount = {
    balance: number;
    bic: string;
    country: string;
    currency: string;
    iban: string;
    name: string;
};

type HttpAccountResponse = {
    accounts: HttpAccount[];
};

/**
 * Handles response formatting for GET /accounts endpoint
 * Transforms domain objects to HTTP response format with clean account structure
 */
export class GetAccountsResponsePresenter {
    present(result: GetAccountsResult): HttpAccountResponse {
        const accounts: HttpAccount[] = result.accounts.map((account: Account) =>
            this.mapAccountToResponse(account),
        );

        return {
            accounts,
        };
    }

    private mapAccountToResponse(account: Account): HttpAccount {
        return {
            balance: account.balance,
            bic: account.bic,
            country: account.country,
            currency: account.currency,
            iban: account.iban,
            name: account.name,
        };
    }
}
