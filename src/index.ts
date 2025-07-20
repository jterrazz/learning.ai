import { createContainer } from './di/container.js';

const start = async () => {
    const container = createContainer();
    const logger = container.get('Logger');
    const config = container.get('Configuration');
    const server = container.get('Server');

    try {
        logger.info('Application starting', { environment: config.getInboundConfiguration().env });

        const { host, port } = config.getInboundConfiguration().http;

        await server.start({
            host,
            port,
        });

        logger.info('Application ready', { host, port });
    } catch (error) {
        logger.error('Application encountered an error', { error });
        process.exit(1);
    }
};

start();
