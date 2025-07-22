import { Hono } from 'hono';

import { type AccountRepositoryPort } from '../../../../application/ports/outbound/persistence/account-repository.port.js';

export const createHealthCheckRouter = (accountsRepository: AccountRepositoryPort) => {
    const app = new Hono();

    // GET /
    app.get('/', async (c) => {
        const accounts = await accountsRepository.findMany({});
        const numberOfAccounts = accounts.length;
        const numberOfAccountsByCountry = accounts.reduce(
            (acc, account) => {
                acc[account.country] = (acc[account.country] || 0) + 1;
                return acc;
            },
            {} as Record<string, number>,
        );

        return c.json({
            detail: 'Health check passed successfully',
            message: 'OK',
            numberOfAccounts,
            numberOfAccountsByCountry,
            timestamp: new Date().toISOString(),
        });
    });

    return app;
};
