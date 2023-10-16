import React from 'react';
import { Box, Heading, Select, Text } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, Tooltip, Legend, PieChart, Pie } from 'recharts';

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
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
];

const Charts = () => {
  return (
    <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} alignItems="center">
      <Box
        bgColor="white"
        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        p={4}
        m={4}
        flex="1"
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Box textAlign={"left"}>
            <Heading size="md">Overview</Heading>
            <Text color={"gray.400"}>Monthly Earning</Text>
          </Box>
          <Select w="120px" bgColor={"gray.50"} border={"none"}>
            <option value="">Quarterly</option>
          </Select>
        </Box>

        <BarChart width={500} height={300} data={dataBar}>
          <XAxis dataKey="month" axisLine={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Earning" fill="#413acb" barSize={30} radius={10} />
        </BarChart>
      </Box>

      <Box p={6} m={4}
      
      bgColor={"white"}
              boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"

       >
        <Box textAlign={"left"}>
          <Heading size="md">Customers</Heading>
          <Text color={"gray.400"}>Customers that buy products</Text>
        </Box>
        <PieChart width={300} height={300}> 
          
          <Heading>65%</Heading>
          <Text>Total New</Text>
          <Text>Customers</Text>
          <Pie data={dataPie} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart>
      </Box>
    </Box>
  );
};

export default Charts;
