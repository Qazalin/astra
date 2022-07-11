import { Box } from "@chakra-ui/react";
import { LandingLayout } from "@astra/components/layout";
import { ReactElement, useEffect } from "react";
import { Hero, SearchBar } from "@astra/components";
import { Web3Provider } from "@astra/providers";

const Index = () => {
  return (
    <Box>
      <Web3Provider />
      <Hero />
    </Box>
  );
};

Index.getLayout = function getLayout(content: ReactElement) {
  return <LandingLayout>{content}</LandingLayout>;
};

export default Index;

/* 
export const getStaticProps: GetStaticProps = async () => {
  const url = `https://eth-mainnet.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}/getNFTsForCollection`;
  const address = "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85";
  const params = {
    contractAddress: address,
    withMetadata: "true",
  };
  const endpoint = apiParamEndpoint(url, params);
  //   const res = await fetch(endpoint);
  // const data = await res.json();
  const data = "hello";
  return {
    props: {
      data,
    },
  };
  };
  */

/*** 
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

   const { nfts } = await getAllNFTs(
    "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85"
  ); 

  return {
    props: {
      data,
    },
  };
};
*/
