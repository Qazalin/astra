import { prisma } from "@astra/lib/prisma";
import { Box, HStack, Grid, GridItem, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Image from "next/image";

const Account = ({ user }) => {
  console.log(user);
  return (
    <Grid
      w="100%"
      h="100%"
      templateColumns={["repeat(4, 1fr)", "repeat(2, 1fr)"]}
    >
      <GridItem colSpan={2}>
        <HStack></HStack>
      </GridItem>
    </Grid>
  );
};

export default Account;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const address = ctx.query.address;
  if (typeof address !== "string") {
    ctx.res.statusCode = 400;
    ctx.res.end("Bad Request");
    return { props: {} };
  }

  const user = await prisma.user.findUnique({ where: { address } });
  console.log(user);
  return {
    props: {
      address,
    },
  };
};
