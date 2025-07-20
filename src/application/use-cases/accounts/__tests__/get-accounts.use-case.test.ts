import { beforeEach, describe, expect, it } from '@jterrazz/test';
import { type DeepMockProxy, mock } from 'vitest-mock-extended';

import { Account } from '../../../../domain/account.entity.js';

import { type AccountRepositoryPort } from '../../../ports/outbound/persistence/account-repository.port.js';

import { type GetAccountsParams, GetAccountsUseCase } from '../get-accounts.use-case.js';

describe('GetAccountsUseCase', () => {
    let repository: DeepMockProxy<AccountRepositoryPort>;
    let useCase: GetAccountsUseCase;

    const sampleAccounts = [
        new Account({
            balance: 1000,
            bic: 'REVOGB21',
            country: 'GB',
            currency: 'GBP',
            iban: 'GB29NWBK60161331926819',
            name: 'Personal',
        }),
        new Account({
            balance: 2000,
            bic: 'DEUTDEFF',
            country: 'DE',
            currency: 'EUR',
            iban: 'DE89370400440532013000',
            name: 'Savings',
        }),
    ];

    beforeEach(() => {
        repository = mock<AccountRepositoryPort>();
        useCase = new GetAccountsUseCase(repository);
        repository.findMany.mockResolvedValue(sampleAccounts);
    });

    const createParams = (overrides: Partial<GetAccountsParams> = {}): GetAccountsParams => ({
        currency: undefined,
        ...overrides,
    });

    it('should return accounts from repository', async () => {
        const result = await useCase.execute(createParams());

        expect(repository.findMany).toHaveBeenCalledWith({ currency: undefined });
        expect(result.accounts).toEqual(sampleAccounts);
    });

    it('should forward currency filter to repository', async () => {
        const currency = 'EUR';
        await useCase.execute(createParams({ currency }));

        expect(repository.findMany).toHaveBeenCalledWith({ currency });
    });
});
