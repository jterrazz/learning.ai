import { HTTPException } from 'hono/http-exception';
import { z } from 'zod/v4';

const deleteAccountParamsSchema = z.object({
    id: z.string(),
});

export type HttpDeleteAccountParams = z.infer<typeof deleteAccountParamsSchema>;

export class DeleteAccountRequestHandler {
    handle(rawParams: unknown): HttpDeleteAccountParams {
        const validatedParams = deleteAccountParamsSchema.safeParse(rawParams);

        if (!validatedParams.success) {
            throw new HTTPException(422, {
                cause: { details: validatedParams.error.issues },
                message: 'Invalid request parameters',
            });
        }

        return validatedParams.data;
    }
}
