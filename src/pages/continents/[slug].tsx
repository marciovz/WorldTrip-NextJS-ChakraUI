import { Heading, Flex } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

export default function Continent({ slug }) {

  return (
    <Flex
      height='800px'
      justifyContent='center'
      alignItems='center'
    >
      { 
        slug ? (
          <Heading>{slug}</Heading>    
        ) : (
          <Heading>CONTINENT</Heading>    
        )
      }
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async ({req, params }) => {
  const { slug } = params;

  return{
    props: {
      slug
    }
  }
}
