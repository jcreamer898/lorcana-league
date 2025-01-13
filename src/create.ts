import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.shop.create({
    data: {
      name: "Cadets",
    },
  });

  


  await prisma.player.create({
    data: {
      name: "Jonathan Creamer",
      email: "matrixhasyou2k4@gmail.com",
      username: "jcreamer898",
      meleeUser: "jcreamer898",
    },
  });

  const allUsers = await prisma.player.findMany({
    include: {
      Point: true,
    },
  });
  console.dir(allUsers, { depth: null });
}

main()
  .then(() => {
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
  });
