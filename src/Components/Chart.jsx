import React from 'react';
import { Box, HStack, Heading, Select, Text, VStack } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, Tooltip,piechart, Legend, Pie, Cell, PieChart } from 'recharts';



const dataBar = [
  { month: "Jan", Earning: 200 },
  { month: "Feb", Earning: 300 },
  { month: "Mar", Earning: 200 },
  { month: "Apr", Earning: 278 },
  { month: "May", Earning: 189 },
  { month: "Jun", Earning: 239 },
  { month: "Jul", Earning: 349 },
  { month: "Aug", Earning: 200 },
  { month: "Sep", Earning: 278 },
  { month: "Oct", Earning: 189 },
  { month: "Nov", Earning: 239 },
  { month: "Dec", Earning: 300 }
];

const dataPie = [
  { name: "Group A", value: 35 },
  { name: "Group B",value:65 },
];
const StyledText = (props) => (
  <Text {...props} textAnchor="middle" dominantBaseline="central" fontSize="20" />
);
function PieCenterLabel() {
  return (
    <HStack textAlign={"center"}>
      <Text fontSize="xs" >
        65%
      </Text>
      <Text fontSize="xs"  >
        Total New
      </Text>
      <Text fontSize="xs"  >
        Customers
      </Text>
    </HStack>
  );
}
const COLORS = [ '#e0e1e1','#a900fe'];
const Charts = () => {
  return (
    <Box display="flex" flexDirection={{ base: 'column', md: 'row' }}    maxW="100%" alignItems="center">
    <Box
  bgColor="white"
  boxShadow="md"
  p={4}
  m={4}
  flex="1"
  minW={{ base: 'auto', sm: '300px', md: '500px' }}
>
  <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
    <Box textAlign="left">
      <Heading size="md">Overview</Heading>
      <Text color="gray.400">Monthly Earning</Text>
    </Box>
    <Select w="120px" bgColor="gray.50" color="gray.500">
      <option value="">Quarterly</option>
    </Select>
  </Box>
  <Box w={{ base: "100%", sm: "300px", md: "500px" }}>
    <BarChart width={500} height={300} data={dataBar}>
      <XAxis dataKey="month" axisLine={false} />
      <Tooltip />
      <Legend />
      <Bar dataKey="Earning" fill="#413acb" barSize={35} radius={10} />
    </BarChart>
  </Box>
</Box>


      <Box p={6} m={4}
      
      bgColor={"white"}
              boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
              minW={{ base: 'auto', md: '300px' }}
       >
        
        <Box textAlign={"left"} >
          <Heading size="md">Customers</Heading>
          <Text color={"gray.400"}>Customers that buy products</Text>
        </Box>
        
        <PieChart width={300} height={300}> 
        <Pie
        data={dataPie}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        label
      >
        {dataPie.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
             
      </Pie>
     
      <PieCenterLabel />
        </PieChart>
     
     
      </Box>
    </Box>
  );
};

export default Charts;
