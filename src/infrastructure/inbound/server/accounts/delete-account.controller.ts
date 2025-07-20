import { type DeleteAccountUseCase } from '../../../../application/use-cases/accounts/delete-account.use-case.js';

import { DeleteAccountRequestHandler } from './delete-account-request.handler.js';

export class DeleteAccountController {
    private readonly requestHandler: DeleteAccountRequestHandler;

    constructor(private readonly deleteAccountUseCase: DeleteAccountUseCase) {
        this.requestHandler = new DeleteAccountRequestHandler();
    }

    async deleteAccount(rawParams: unknown): Promise<void> {
        const validatedParams = this.requestHandler.handle(rawParams);

        await this.deleteAccountUseCase.execute(validatedParams);
    }
}
