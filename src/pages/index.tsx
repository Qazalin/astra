import { Icon, Box, Text } from "@chakra-ui/react";
import { LandingLayout } from "@astra/layouts";
import { ReactElement } from "react";
import { Hero, SearchBar } from "@astra/components";
import { Web3Provider } from "@astra/providers";
import { GetStaticProps } from "next";
import { apolloClient } from "@astra/lib";
import { gql } from "@apollo/client";

const Index = ({ countries }) => {
  console.log(countries);
  return (
    <Box>
      <Web3Provider />
      <Hero />
      <Box maxW="400px">
        <SearchBar />
      </Box>
    </Box>
  );
};

export default Index;

Index.getLayout = function getLayout(content: ReactElement) {
  return <LandingLayout>{content}</LandingLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query ($ens: String!) {
        userByEns(ens: $ens) {
          address
          balance
        }
      }
    `,
    variables: {
      ens: "vitalik.eth",
    },
  });

  return {
    props: {
      data,
    },
  };
};
