import {Hono} from 'hono'
import { PrismaClient } from '/home/shatadal/WebstormProjects/COHORT2/WEEK12.6_CONNECTION_POOLING/app/src/generated/prisma';
import {withAccelerate} from '@prisma/extension-accelerate'
import {env} from 'hono/adapter'

const app = new Hono()

app.post('/', async (c) => {
	// Todo: add Zod validation here
	const body = await c.req.json()
	const {DATABASE_URL} = env<{ DATABASE_URL: string }>(c)

	const prisma = new PrismaClient({
		datasourceUrl: DATABASE_URL,
	}).$extends(withAccelerate())

	console.log(body)

	await prisma.user.create({
		data: {
			name: body.name,
			email: body.email,
			password: body.password
		}
	})

	return c.json({msg: "User created"})
})



export default app
