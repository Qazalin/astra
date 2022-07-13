import { prisma } from "@astra/lib/prisma";
import { Box, HStack, Grid, GridItem, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { User } from "@prisma/client";
import { SocialIcon } from "@astra/components";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

const Profile: React.FC<{ user: User }> = ({ user }) => {
  console.log(user);
  return (
    <Grid
      w="100%"
      h="100%"
      templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
    >
      <GridItem colSpan={[2, 4]} w="100%" h="100%" bg="bg1">
        <Image
          src={user.pfpUrl}
          width={150}
          height={150}
          style={{
            borderRadius: "100%",
          }}
        />
        <SocialIcon
          icon={<AiOutlineTwitter />}
          ariaLabel="twitter-icon"
          link={`https://twitter.com/${user.twitterUsername}`}
        />
        <SocialIcon
          icon={<BsDiscord />}
          ariaLabel="discord-icon"
          link={`https://discord.com/${user.discordUsername}`}
        />
        <Text>{user.address}</Text>
      </GridItem>
      <GridItem colSpan={2}>
        <HStack></HStack>
      </GridItem>
    </Grid>
  );
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const address = ctx.query.address;
  if (typeof address !== "string") {
    ctx.res.statusCode = 400;
    ctx.res.end("Bad Request");
    return { props: {} };
  }

  const user = await prisma.user.findUnique({ where: { address } });
  (user.createdAt as any as string) = user.createdAt.toString();
  (user.updatedAt as any as string) = user.createdAt.toString();
  return {
    props: {
      user,
    },
  };
};
