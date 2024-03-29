import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

import Header from "../components/Header";
import BannerHome from "../components/BannerHome";
import TravelTypesList from "../components/TravelTypes/TravelTypesList";
import Divider from "../components/Divider";
import ContinentSlider from "../components/ContinentSlider";
import { api } from '../services/api';


interface ContinentData {
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

interface ContinentSliderProps {
  continents: ContinentData[];
}

export default function Home({ continents }: ContinentSliderProps) {
  return (
    <Flex direction='column' >
      <Head>
        <title>WorldTrip</title>
      </Head>

      <Header />
      <BannerHome />
      <TravelTypesList />
      <Divider />
      <ContinentSlider continents={continents}/>
    </Flex>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('/continents');
  const continents = response.data;

  return {
    props: {
      continents
    }
  }
}
