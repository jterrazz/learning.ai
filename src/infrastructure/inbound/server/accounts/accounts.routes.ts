import { Hono } from 'hono';

import { type DeleteAccountController } from './delete-account.controller.js';
import { type GetAccountsController } from './get-accounts.controller.js';

export const createAccountsRouter = (
    getAccountsController: GetAccountsController,
    deleteAccountController: DeleteAccountController,
) => {
    const app = new Hono();

    // GET /accounts
    app.get('/', async (c) => {
        const query = c.req.query();

        const response = await getAccountsController.getAccounts({
            currency: query.currency,
        });

        return c.json(response);
    });

    // DELETE /accounts/:id
    app.delete('/:id', async (c) => {
        const params = c.req.param();
        await deleteAccountController.deleteAccount({ id: params.id });
        c.status(204);
        return c.body(null);
    });

    return app;
};
