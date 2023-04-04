import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  RequiredIndicator,
} from '@chakra-ui/react';

const avatars = [
  {
    name: 'Ryan Florence',
    url: 'https://bit.ly/ryan-florence',
  },
  {
    name: 'Segun Adebayo',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Kent Dodds',
    url: 'https://bit.ly/kent-c-dodds',
  },
  {
    name: 'Prosper Otemuyiwa',
    url: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    url: 'https://bit.ly/code-beast',
  },
];

export default function JoinOurTeam() {

  const router = useRouter();


  const[first,setFirst]=useState("")
  const[last,setLast]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  



  const handleSubmit = async (event) => {
    event.preventDefault();

   

    const teamPayload = {
        first,
        last,
        email,
        phone
    }
    console.log("Payload: ",teamPayload)

    try {
      const {data} = await axios ({
        url:"/api/teamadd",
        method:"POST",
        data:teamPayload
      });
      console.log("Response Back: ",data)
    } catch (error) {
      console.log("Error: ",error)
    }

   router.push("/success")
    
  }

  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            color="green"
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            >
            {/* Senior web designers{' '} */}
            VERDANT
            <Text fontSize="4xl" color="black" fontWeight="500"> INFO COMM SYSTEMS</Text> 
            {/* <Text
              as={'span'}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text">
              &
            </Text>{' '}
            Full-Stack Developers */}
          </Heading>
          <Stack direction={'row'} spacing={4} align={'center'}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={({ base: 'md', md: 'lg' })}
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, green.300,green.500)',
                    
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={'heading'} color="gray" fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={'gray.800'}
              color={'white'}
              rounded={'full'}
              minWidth={({ base: '44px', md: '60px' })}
              minHeight={({ base: '44px', md: '60px' })}
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}>
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              // color="lightGreen"
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Join our team
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              We’re looking for amazing designers just like you! Become a part
              of our rockstar designers team start your career!
            </Text>
          </Stack>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="Firstname"
                type="text"
                value={first}
                onChange={({target})=>setFirst(target?.value)}
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
               
              />
               <Input
                placeholder="Lastname"
                type="text"
                value={last}
                onChange={({target})=>setLast(target?.value)}
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="Email id"
                type="email"
                value={email}
                onChange={({target})=>setEmail(target?.value)}
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="+91"
                type="number"
                value={phone}
                onChange={({target})=>setPhone(target?.value)}
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Button onClick={() => router.push("/upload")} fontFamily={'heading'} bg={'gray.200'} color={'gray.800'}>
                Upload CV
              </Button>
            </Stack>
            <Button
            onClick={handleSubmit}
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, green.300,green.300)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, green.600,green.600)',
                boxShadow: 'xl',
              }}
              
              >
              Submit
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      {/* <Blur
        position={'absolute'}
        top={-10}
        left={-10}
        style={{ filter: 'blur(70px)' }}
      /> */}
    </Box>
  );
}

// export const Blur = (props=IconProps) => {
//   return (
//     <Icon
//       width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
//       zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
//       height="560px"
//       viewBox="0 0 528 560"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}>
      
//     </Icon>
//   );
// };