import Link from "next/link";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
      width={['100%', '540px', '720px', '960px', '1140px']}
      direction='column'
      alignSelf='center'
      
      alignItems='center'
      >
      <Box 
        width='100%' 
        margin={{base: '25px 0', md: '50px 0'}}
      >
        <Heading 
          fontSize={['20px', '24px', '28px', '32px', '36px']}
          fontStyle='normal'
          fontWeight='500'
          lineHeight={['30px', '36px', '42px', '48px', '54px']}
          textAlign='center'
        >
          Vamos nessa?<br/>Então escolha seu continente.
        </Heading>
      </Box>

      <Box
        width='100%'
        marginBottom='100px'
      >
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation={true}
          pagination={{ clickable: true }}
          
        >
          {continents.map(continent => (
            <SwiperSlide
            key={continent.id}
            >
              <Link href={`/continents/${continent.link}`}>
                <a>
                  <Flex
                    height={['250px', '300px', '350px', '400px','450px']}
                    backgroundImage={`continents/${continent.image}`}
                    backgroundSize='cover'
                    backgroundPosition='center'
                  >
                    <Flex
                      width='100%'
                      height='100%'
                      direction='column'
                      justifyContent='center'
                      alignItems='center'
                      backgroundColor='black'
                      opacity='45%'
                    >
                      <Heading
                        fontSize={['24px', '30px', '36px', '42px', '48px']}
                        fontWeight={"bold"}
                        color={"gray.100"}
                      >
                        {continent.title}
                      </Heading>
                      <Text
                        marginTop='16px'
                        fontSize={['14px', '16px', '18px', '22px', '24px']}
                        fontWeight={"bold"}
                        color='gray.200'
                      >
                        {continent.description}
                      </Text>
                    </Flex>

                  </Flex>
                </a>              
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

    </Flex>
  )
}
