import { Heading, Flex } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";

import { api } from '../../services/api';
import Header from "../../components/Header";
import BannerContinent from '../../components/BannerContinent';

interface ContinentProps {
  slug: string,
  continent: {
    id: string,
    title: string,
    image: string,
    description: string,
    link: string
  }
}

export default function Continent({ slug, continent }: ContinentProps) {
  return (
    <Flex
      direction='column'
    >
      <Head>
        <title>{`WorldTrip - ${continent.title}`}</title>
      </Head>

      <Header />
      <BannerContinent image={continent.image} title={continent.title} />

    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async ({req, params }) => {
  const { slug } = params;
  
  const response = await api.get(`/continents/?link=${slug}`);
  const continent = await response.data;

  return{
    props: {
      slug,
      continent: continent[0]
    }
  }
}
