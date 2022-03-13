import { Heading, Flex } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";

import { api } from '../../services/api';
import Header from "../../components/Header";
import BannerContinent from '../../components/BannerContinent';
import ContinentInfo from '../../components/ContinentInfo';
import ContinentCities from '../../components/ContinentCities';

interface ContinentProps {
  slug: string,
  continent: {
    id: string,
    title: string,
    subtitle: string,
    description: string,
    image: string,
    link: string,
    informations: {
      countries: number,
      languages: number,
      cities: number
    }
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
      <ContinentInfo continent={continent} />
      <ContinentCities />
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async ({req, params }) => {
  const { slug } = params;
  
  const response = await api.get(`/continents/?link=${slug}`);
  const continent = await response.data[0];

  return{
    props: {
      slug,
      continent
    }
  }
}
