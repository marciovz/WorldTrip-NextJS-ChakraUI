import { Flex } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";

import { api } from '../../services/api';
import Header from "../../components/Header";
import BannerContinent from '../../components/BannerContinent';
import ContinentInfo from '../../components/ContinentInfo';
import ContinentCities from '../../components/ContinentCities';

interface Continent {
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

interface Cities {
  id: string,
  image: string,
  name: string,
  country: string,
  countryFlag: string,
}

interface ContinentProps {
  slug: string,
  continent: Continent,
  cities: Cities[]
}

export default function Continent({ slug, continent, cities }: ContinentProps) {
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
      <ContinentCities cities={cities} />
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async ({req, params }) => {
  const { slug } = params;
  
  const responseContinent = await api.get(`/continents/?link=${slug}`);
  const continent: Continent = responseContinent.data[0];

  const responseCities = await api.get(`/cities/?continentId=${continent.id}`);
  const cities = responseCities.data;


  return{
    props: {
      slug,
      continent: {
        ...continent, 
        informations: {
          countries: continent.informations.countries,
          languages: continent.informations.languages,
          cities: cities.length
        } 
      },
      cities
    }
  }
}
