import { type AccountRepositoryPort } from '../../ports/outbound/persistence/account-repository.port.js';

export interface DeleteAccountParams {
    id: string;
}

export class DeleteAccountUseCase {
    constructor(private readonly accountRepository: AccountRepositoryPort) {}

    async execute(params: DeleteAccountParams): Promise<void> {
        await this.accountRepository.delete(params.id);
    }
}
