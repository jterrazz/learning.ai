import { beforeEach, describe, expect, it } from '@jterrazz/test';
import { type DeepMockProxy, mock } from 'vitest-mock-extended';

import { type AccountRepositoryPort } from '../../../ports/outbound/persistence/account-repository.port.js';

import { DeleteAccountUseCase } from '../delete-account.use-case.js';

describe('DeleteAccountUseCase', () => {
    let repository: DeepMockProxy<AccountRepositoryPort>;
    let useCase: DeleteAccountUseCase;

    beforeEach(() => {
        repository = mock<AccountRepositoryPort>();
        useCase = new DeleteAccountUseCase(repository);
        repository.delete.mockResolvedValue();
    });

    it('should delete account from repository', async () => {
        const id = 'ACC123';

        await useCase.execute({ id });

        expect(repository.delete).toHaveBeenCalledWith(id);
    });
});
