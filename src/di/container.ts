import { type ModelPort, OpenRouterAdapter } from '@jterrazz/intelligence';
import { type LoggerPort, PinoLoggerAdapter } from '@jterrazz/logger';
import { Container, Injectable } from '@snap/ts-inject';
import { default as nodeConfiguration } from 'config';

import type { ConfigurationPort } from '../application/ports/inbound/configuration.port.js';

import type { ServerPort } from '../application/ports/inbound/server.port.js';
import { type AccountRepositoryPort } from '../application/ports/outbound/persistence/account-repository.port.js';
import { GetAccountsUseCase } from '../application/use-cases/accounts/get-accounts.use-case.js';

import { NodeConfigAdapter } from '../infrastructure/inbound/configuration/node-config.adapter.js';
import { GetAccountsController } from '../infrastructure/inbound/server/accounts/get-accounts.controller.js';
import { HonoServerAdapter } from '../infrastructure/inbound/server/hono.adapter.js';
import { ExampleAgentAdapter } from '../infrastructure/outbound/agents/example.agent.js';
import { InMemoryAccountAdapter } from '../infrastructure/outbound/persistence/accounts/in-memory-account.adapter.js';

/**
 * Outbound adapters
 */
const loggerFactory = Injectable(
    'Logger',
    ['Configuration'] as const,
    (config: ConfigurationPort) =>
        new PinoLoggerAdapter({
            level: config.getInboundConfiguration().logger.level,
            prettyPrint: config.getInboundConfiguration().logger.prettyPrint,
        }),
);

const modelFactory = Injectable(
    'Model',
    ['Configuration'] as const,
    (config: ConfigurationPort): ModelPort =>
        new OpenRouterAdapter({
            apiKey: config.getOutboundConfiguration().openRouter.apiKey,
            metadata: {
                application: 'learning-ai',
            },
            modelName: 'google/gemini-2.5-flash-lite-preview-06-17',
        }),
);

const accountRepositoryFactory = Injectable(
    'AccountRepository',
    () => new InMemoryAccountAdapter(),
);

const exampleAgentFactory = Injectable(
    'ExampleAgent',
    ['Model', 'Logger'] as const,
    (model: ModelPort, logger: LoggerPort) => new ExampleAgentAdapter(model, logger),
);

/**
 * Use case factories
 */
const getAccountsUseCaseFactory = Injectable(
    'GetAccounts',
    ['AccountRepository'] as const,
    (accountRepository: AccountRepositoryPort) => new GetAccountsUseCase(accountRepository),
);

/**
 * Controller factories
 */
const controllersFactory = Injectable(
    'Controllers',
    ['GetAccounts'] as const,
    (getAccounts: GetAccountsUseCase) => ({
        getAccounts: new GetAccountsController(getAccounts),
    }),
);

/**
 * Inbound adapters
 */
const configurationFactory = Injectable(
    'Configuration',
    () => new NodeConfigAdapter(nodeConfiguration),
);

const serverFactory = Injectable(
    'Server',
    ['Logger', 'Controllers'] as const,
    (logger: LoggerPort, controllers: { getAccounts: GetAccountsController }): ServerPort => {
        logger.info('Initializing Server', { implementation: 'Hono' });
        const server = new HonoServerAdapter(logger, controllers.getAccounts);
        return server;
    },
);

/**
 * Container configuration
 */
export const createContainer = () =>
    Container
        // Outbound adapters
        .provides(configurationFactory)
        .provides(loggerFactory)
        .provides(modelFactory)
        .provides(accountRepositoryFactory)
        .provides(exampleAgentFactory)
        // Use cases
        .provides(getAccountsUseCaseFactory)
        // Controllers and tasks
        .provides(controllersFactory)
        // Inbound adapters
        .provides(serverFactory);
