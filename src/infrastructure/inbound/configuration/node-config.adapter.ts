import { LoggerLevelSchema } from '@jterrazz/logger';
import { z } from 'zod/v4';

import {
    type ConfigurationPort,
    type InboundConfigurationPort,
    type OutboundConfigurationPort,
} from '../../../application/ports/inbound/configuration.port.js';

const configurationSchema = z.object({
    inbound: z.object({
        env: z.enum(['development', 'production', 'test']),
        http: z.object({
            host: z.string(),
            port: z.coerce.number().int().positive(),
        }),
        logger: z.object({
            level: LoggerLevelSchema,
            prettyPrint: z.boolean(),
        }),
    }),
    outbound: z.object({
        openRouter: z.object({
            apiKey: z.string().min(1),
        }),
    }),
});

type Configuration = z.infer<typeof configurationSchema>;

/**
 * Node.js configuration adapter that loads configuration from node-config
 */
export class NodeConfigAdapter implements ConfigurationPort {
    private readonly configuration: Configuration;

    constructor(configurationInput: unknown) {
        this.configuration = configurationSchema.parse(configurationInput);
    }

    public getInboundConfiguration(): InboundConfigurationPort {
        return this.configuration.inbound;
    }

    public getOutboundConfiguration(): OutboundConfigurationPort {
        return this.configuration.outbound;
    }
}
