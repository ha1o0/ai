import dotenv from 'dotenv';
import Fastify from 'fastify'
// import dbConnector from './services/db.js'
import routers from './routers/index.js'

dotenv.config();

/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
const fastify = Fastify({
  logger: true
})
// fastify.register(dbConnector)
fastify.register(routers)

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})
