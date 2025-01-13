import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const allUsers = await prisma.player.findMany({
    include: {
      PlayerPoints: true,
    },
  });
  const poinst = await prisma.weekPlayerPoints.findMany();
  console.dir(allUsers[0].PlayerPoints);
  console.log(poinst)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })