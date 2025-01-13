import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const cadets = await prisma.shop.create({
    data: {
      name: "Cadets",
    },
  });

  const azureite = await prisma.cardSet.create({
    data: {
      name: "Azurite Seas",
    },
  })

  const league = await prisma.league.create({
    data: {
      year: 2025,
      cardSetId: azureite.id,
      shopId: cadets.id,
    },
  })

  await prisma.week.create({
    data: {
      weekNum: 1,
      leagueId: league.id,
    }
  });

  await prisma.week.create({
    data: {
      weekNum: 2,
      leagueId: league.id,
    }
  });

  await prisma.week.create({
    data: {
      weekNum: 3,
      leagueId: league.id,
    }
  });

  const gameWin = await prisma.point.create({
    data: {
      description: "For a game win",
      name: "Game Win",
    }
  });
  await prisma.point.create({
    data: {
      description: "For using official lorcana merge",
      name: "Lorcana Merch",
    }
  });
  await prisma.point.create({
    data: {
      description: "For wearing disney stuff",
      name: "Disney",
    }
  });

  await prisma.player.create({
    data: {
      name: "Jonathan Creamer",
      email: "matrixhasyou2k4@gmail.com",
      username: "jcreamer898",
      meleeUser: "jcreamer898",
    },
  });

  await prisma.weekPlayerPoints.create({
    data: {
      weekId: 3,
      playerId: 1,
      pointId: 1,
    }
  })
  await prisma.weekPlayerPoints.create({
    data: {
      weekId: 3,
      playerId: 1,
      pointId: 1,
    }
  })
  await prisma.weekPlayerPoints.create({
    data: {
      weekId: 3,
      playerId: 1,
      pointId: 1,
    }
  })

  const allUsers = await prisma.player.findMany({
    include: {
      PlayerPoints: true,
    },
  });

  console.log(allUsers);
}

main()
  .then(() => {
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
  });
