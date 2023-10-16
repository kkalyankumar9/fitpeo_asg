import { Search2Icon } from '@chakra-ui/icons'
import { Box, Heading, Image, Input, Select, Text } from '@chakra-ui/react'
import React from 'react'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  const productsData = [
    {"id":1, "image": "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2015/03/26/1331713502647_5/against-stormy-skies.jpg", "title": "Abstract 3D", "description": "Loren ipsum dolor sit amet, consectetur adipiscing elit", "stock": "32 in stock", "price": 45.99, "totalSales": 20 },
    {"id":2,  "image": "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2015/03/26/1331713502647_5/against-stormy-skies.jpg", "title": "Sarphens illustration", "description": "Loren ipsum dolor sit amet, consectetur adipiscing elit", "stock": "32 in stock", "price": 45.99, "totalSales": 20 },
    { "id":3, "image": "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2015/03/26/1331713502647_5/against-stormy-skies.jpg", "title": "Michle 3D", "description": "Loren ipsum dolor sit amet, consectetur adipiscing elit", "stock": "15 in stock", "price": 25.99, "totalSales": 15 },
    {"id":4,  "image": "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2015/03/26/1331713502647_5/against-stormy-skies.jpg","title": " illustration", "description": "Loren ipsum dolor sit amet, consectetur adipiscing elit", "stock": "10 in stock", "price": 34.99, "totalSales": 10 },
    {"id":5,  "image": "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2015/03/26/1331713502647_5/against-stormy-skies.jpg","title": "WEROS", "description": "Loren ipsum dolor sit amet, consectetur adipiscing elit", "stock": "50 in stock", "price": 59.99, "totalSales": 30 },
    {"id":6,  "image": "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2015/03/26/1331713502647_5/against-stormy-skies.jpg","title": "Sarphens ", "description": "Loren ipsum dolor sit amet, consectetur adipiscing elit", "stock": "18 in stock", "price": 39.99, "totalSales": 22 },
    {"id":7,  "image": "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2015/03/26/1331713502647_5/against-stormy-skies.jpg", "title": "Abstract fusion", "description": "Loren ipsum dolor sit amet, consectetur adipiscing elit","stock": "19 in stock", "price": 49.99, "totalSales": 18 },
    {"id":8,  "image": "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2015/03/26/1331713502647_5/against-stormy-skies.jpg","title": "Fusion 3D", "description": "Loren ipsum dolor sit amet, consectetur adipiscing elit", "stock": "12 in stock", "price": 31.99, "totalSales": 12 },
  ];
  
  // Rest of your code...
  
  
const ProductsSell = () => {
  return (
    <>
<Box bgColor="white" p={5}>
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    flexWrap="wrap"
  >
    <Box>
      <Heading size="md">Product Sell</Heading>
    </Box>
    <Box display="flex" gap={5}>
      <Box
        bgColor="gray.50"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="md"
      >
        <Search2Icon />
        <Input
          type="text"
          placeholder="Search"
          border="none"
          _focus={{ outline: 'none' }}
        />
      </Box>
      <Select bgColor="gray.50" color="gray.500">
        <option value="">Last 30 days</option>
      </Select>
    </Box>
  </Box>
  <Box
    width={{ lg: '100%', md: '80%', sm: '70%' }}
    maxWidth="100%"
    overflowX="auto"
  >
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th color="gray.500">Product Name</Th>
          <Th color="gray.500">Stack</Th>
          <Th color="gray.500">Price</Th>
          <Th color="gray.500">Total Sells</Th>
        </Tr>
      </Thead>
      <Tbody>
        {productsData?.map((el) => (
          <Tr key={el.id}>
            <Td>
              <Box
                display="flex"
                alignItems="center"
                flexWrap="wrap"
                gap={5}
              >
                <Box>
                  <Image src={el.image} alt="err" w="65px" borderRadius="10px" />
                </Box>
                <Box>
                  <Heading size="sm">{el.title}</Heading>
                  <Text fontSize="xs" color="gray.500">
                    {el.description}
                  </Text>
                </Box>
              </Box>
            </Td>
            <Td fontSize="sm">{el.stock}</Td>
            <Td>
              <Heading size="sm">${' '}{el.price}</Heading>
            </Td>
            <Td fontSize="sm">{el.totalSales}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Box>
</Box>

    </>
  )
}

export default ProductsSell