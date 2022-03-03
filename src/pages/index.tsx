import { Flex } from "@chakra-ui/react";
import Head from "next/head";

import Header from "../components/Header";
import BannerHome from "../components/BannerHome";
import TravelTypesList from "../components/TravelTypesList";
import Divider from "../components/Divider";

export default function Home() {
  return (
    <Flex
      direction='column'
    >
      <Head>
        <title>WorldTrip</title>
      </Head>

      <Header />
      <BannerHome />
      <TravelTypesList />
      <Divider />
    </Flex>
  )
}
