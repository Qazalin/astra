import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { userData } from "./usersData";

const prisma = new PrismaClient();

const run = async () => {
  const salt = await bcrypt.genSalt();
  await Promise.all(
    userData.map(async (user) => {
      return prisma.user.upsert({
        where: {
          address: user.address,
        },
        update: {
          alias: user.alias,
          address: user.address,
          discordUsername: user.discordUsername,
          twitterUsername: user.twitterUsername,
          pfpUrl: user.pfpUrl,
          signature: bcrypt.hashSync(user.signature, salt),
        },
        create: {
          alias: user.alias,
          address: user.address,
          discordUsername: user.discordUsername,
          twitterUsername: user.twitterUsername,
          pfpUrl: user.pfpUrl,
          signature: bcrypt.hashSync(user.signature, salt),
        },
      });
    })
  );
};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .then()
  .finally(async () => await prisma.$disconnect());
