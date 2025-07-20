import { Hono } from 'hono';

import { type GetAccountsController } from './get-accounts.controller.js';

export const createAccountsRouter = (getAccountsController: GetAccountsController) => {
    const app = new Hono();

    // GET /accounts
    app.get('/accounts', async (c) => {
        const query = c.req.query();

        const response = await getAccountsController.getAccounts({
            currency: query.currency,
        });

        return c.json(response);
    });

    return app;
};
