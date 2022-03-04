import { Flex, Box, Heading, Text } from "@chakra-ui/react";

interface ContinentData {
  id: string,
  title: string,
  image: string,
  description: string,
  link: string
}

interface ContinentSliderProps {
  continents: ContinentData[];
}

export default function ContinentSlider({ continents }: ContinentSliderProps) {
  return (
    <Flex
      direction='column'
    >
      <Box>
        <Heading>Vamos nessa?<br/>Então escolha seu continente.</Heading>
      </Box>
      <Box>
        {continents?.map(continent => <Heading key={continent.id}>{continent.title}</Heading>)}
      </Box>
    </Flex>
  )
}
