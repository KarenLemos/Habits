import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

app.get('/', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Beber'
            }
        }
    });
    return habits;
});

app.get('/', () =>  {
    return 'Hello!!!!'
})

app.listen({
    port: 5555
});