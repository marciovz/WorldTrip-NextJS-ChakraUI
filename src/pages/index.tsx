import { Box } from "@chakra-ui/react";

import Header from "../components/Header";
import BannerHome from "../components/BannerHome";
import TravelTypesList from "../components/TravelTypesList";

export default function Home() {
  return (
    <Box>
      <Header />
      <BannerHome />
      <TravelTypesList />
    </Box>
  )
}
