import { Box, Flex, HStack, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@chakra-ui/react'
import { FaCog, FaKey, FaBox, FaUser, FaDollarSign, FaBullhorn, FaQuestionCircle } from 'react-icons/fa';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Sidebar = () => {
  return (
    <Box  color={"white"} position={"sticky"} zIndex="0" >

    
    <Box bgColor={"#050348"} p={5}  >
<HStack >
        <Icon as={FaCog}   />
        <Heading size={"lg"}>Dashboard</Heading>
      </HStack>
    </Box>
    <Box>
      
      <Box ml={"3px"} p={4}>
        <HStack p={2} justifyContent={"space-between"} _hover={{ bgColor: '#504D82',p:"8px",borderRadius:"10px"}}>
          <HStack>
          <Icon
            as={FaKey}
            boxSize={6}
         
            border="2px solid white"
            borderRadius="50%"
            p="2px"
          />
          <Heading size={"sm"}>Dashboard</Heading>
          </HStack>
          < ChevronRightIcon ml={"10px"}/>
        </HStack>
        <HStack p={2} justifyContent={"space-between"} _hover={{ bgColor: '#504D82',p:"8px",borderRadius:"10px"}}>
          <HStack>
          <Icon as={FaBox} boxSize={6} justifyContent={"space-between"}/>
          <Heading size={"sm"}>Products</Heading>
          </HStack>
          < ChevronRightIcon />
        </HStack>
        <HStack p={2} justifyContent={"space-between"} _hover={{ bgColor: '#504D82',p:"8px",borderRadius:"10px"}}>
          <HStack>
          <Icon as={FaUser} boxSize={6}  />
          <Heading size={"sm"}>Customers</Heading>
          </HStack>
          < ChevronRightIcon />
        </HStack>
        <HStack p={2} justifyContent={"space-between"} _hover={{ bgColor: '#504D82',p:"8px",borderRadius:"10px"}}>
          <HStack>
      
          <Icon as={FaDollarSign} boxSize={6}  />
          <Heading size={"sm"}>Income</Heading>
          </HStack>
          
          < ChevronRightIcon />
        </HStack>
        <HStack p={2} justifyContent={"space-between"} _hover={{ bgColor: '#504D82',p:"8px",borderRadius:"10px"}}>
          <HStack>
          <Icon as={FaBullhorn} boxSize={6}  />
          <Heading size={"sm"}>Promote</Heading>
          </HStack>
          < ChevronRightIcon />
        </HStack>
        <HStack p={2} justifyContent={"space-between"} _hover={{ bgColor: '#504D82',p:"8px",borderRadius:"10px"}}>
          <HStack>
          <Icon as={FaQuestionCircle} boxSize={6}  />
          <Heading size={"sm"}>Help</Heading>
          </HStack>
          < ChevronRightIcon />
        </HStack>
      </Box>
    </Box>
    <Box
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      bgColor="#504D82"
      p={2}
      w={['100%', '220px']} // Responsive width
      ml={['0', '10px']} // Responsive margin-left
      mt={['120px', '180px']} // Responsive margin-top
      borderRadius="10px"
    >
      <HStack>
        <Image
          src="https://avatars.githubusercontent.com/u/112814583?v=4"
          alt="error"
          w={['25px', '35px']} // Responsive image width
          borderRadius="50%"
        />
        <Box textAlign="left">
          <Heading size="sm">Evano</Heading>
          <Text fontSize="xs">Project Manager</Text>
        </Box>
      </HStack>
      <Box>
        <ChevronDownIcon />
      </Box>
    </Box>
</Box>

 
  )
}

export default Sidebar;
