import {FastifyInstance} from "fastify";

async function routes (fastify : FastifyInstance) {
    fastify.get<{ Reply: { status: string } }>('/health', async () => ({ status: 'ok' }))
}

export default routes;