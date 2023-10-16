import { ArrowUpIcon, SearchIcon ,ArrowDownIcon, ChevronRightIcon} from '@chakra-ui/icons'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Icon } from "@chakra-ui/react";
import { FaDollarSign ,FaArrowDown,FaArrowUp} from "react-icons/fa";
import { MdReceipt, MdWallet,MdShoppingCart } from 'react-icons/md'
import BarGraph from './Chart';
import Charts from './Chart';
import ProductsSell from './Products';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <>
    <Box display={"flex"} m={"0px"} p={"0px"} >
      <Box w={"18%"} bgColor={"#050348"} >
    <Sidebar/>
    </Box>
    <Box w={"80%"} p={5}  bgColor={"gray.50"}> 
        <Flex justify={"space-between"} p={2} mb={5}>
            <Box >
                <Text>
                    Hello Shahrukh 👋,
                </Text>
             
            </Box>
            <Box bgColor={"white"} textAlign={"center"}>
                <SearchIcon/>{" "}
                <input type="text" placeholder='Search' />
              
            </Box>
        </Flex>
        <Grid templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']} w={{ base: "100%", md: "80%",sm:"70%" }} gap={10} justifyContent={"space-between"}  >
        <Box p={2} bgColor={"white"} 
           borderRadius={"5px"} display={"flex"}  justifyContent={"center"} alignItems={"center"} boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
            <Box
            w="80px" 
            h="80px"
            p={10} 
            bgColor="green.100"
            borderRadius={"50%"} 
            display={"flex"}
            justifyContent="center"
            alignItems="center">
              <Icon as={FaDollarSign} boxSize={10} color="green.500"  border={"2px solid green"} borderRadius={"50%"}/>
            </Box>
             <Box textAlign={"left"}  w={"120px"} p={1}>
                 <Text fontSize={"sm"}  color="gray.500">Earning</Text>
                <Heading size={"md"}>$198K</Heading>
                  <Heading fontSize='xs'>
                    <Box as="span" color="green">
                        <Icon as={ArrowUpIcon} /> 37.8%
                    </Box>{" "}
                    this month
                     </Heading>
             </Box>
        </Box>
        <Box p={2} bgColor={"white"} borderRadius={"5px"} display={"flex"}  justifyContent={"center"} alignItems={"center"} boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
            <Box
            w="80px" 
            h="80px"
            p={10}
            bgColor="#D1C4E9"
            borderRadius={"50%"} 
            display={"flex"}
            justifyContent="center"
            alignItems="center">
              <Icon as={MdReceipt} boxSize={10} color="#7B1FA2"   borderRadius={"50%"}/>
            </Box >
             <Box textAlign={"left"} w={"120px"} p={1}>
                 <Text fontSize={"sm"}  color="gray.500">Orders</Text>
                <Heading size={"md"}>$2.4K</Heading>
                  <Heading fontSize='xs'>
                    <Box as="span" color="red">
                        <Icon as={ArrowDownIcon} /> 2%
                    </Box>{" "}
                    this month
                     </Heading>
             </Box>
        </Box>
        <Box p={2} bgColor={"white"} borderRadius={"5px"} display={"flex"}  justifyContent={"center"} alignItems={"center"} boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
            <Box
            w="80px" 
            h="80px"
            p={10}
            bgColor="teal.100"
            borderRadius={"50%"} 
            display={"flex"}
            justifyContent="center"
            alignItems="center">
              <Icon as={MdWallet} boxSize={10} color="blue"   borderRadius={"50%"}/>
            </Box>
             <Box textAlign={"left"}  w={"120px"} p={1}>
                 <Text fontSize={"sm"}  color="gray.500">Balance</Text>
                <Heading size={"md"}>$2.4K</Heading>
                  <Heading fontSize='xs'>
                    <Box as="span" color="red">
                        <Icon as={ArrowDownIcon} /> 2%
                    </Box>{" "}
                    this month
                     </Heading>
             </Box>
        </Box>

        <Box p={2}bgColor={"white"}  borderRadius={"5px"} display={"flex"}  justifyContent={"center"} alignItems={"center"} boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
            <Box
            w="80px" 
            h="80px"
            p={10}
            bgColor="pink.100"
            borderRadius={"50%"} 
            display={"flex"}
            justifyContent="center"
            alignItems="center">
              <Icon as={MdShoppingCart} boxSize={10} color="#E53935"   borderRadius={"50%"}/>
            </Box>
             <Box textAlign={"left"}   w={"120px"}p={1}>
                 <Text fontSize={"sm"}  color="gray.500">Total sales</Text>
                <Heading size={"md"}>$89K</Heading>
                  <Heading fontSize='xs'>
                    <Box as="span" color="green">
                        <Icon as={ArrowUpIcon} /> 11%
                    </Box>{" "}
                    this week
                     </Heading>
             </Box>
        </Box>
           

        </Grid>
     <Charts/>
     <ProductsSell/>


    </Box>
    </Box>


    </>
  )
}

export default Dashboard 