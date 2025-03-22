import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import TransactionForm from "../add-transaction";
import ChartTransaction from "../chart";

export default function Summary({setIsOpen, isOpen, totalExpense, totalIncome}) {

  return (
    <Box
      p={"6"}
      borderColor={"gray.100"}
      border={"1px solid"}
      overflow={"hidden"}
      borderRadius={"10px"}
      background={"white"}
      display={"flex"}
    >
      <Flex
        width={"full"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={["column", "column", "row", "row", "row"]}
      >
        <Flex
          flex={1}
          width={"full"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          mr={"2"}
        >
          <Heading size={"md"} mb={"4"} color={"gray.600"}>
            Balance is $ {totalIncome - totalExpense}
          </Heading>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.50"}
            w={"full"}
            h={"100px"}
            border={"1px solid"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>$ {totalIncome}</Heading>
              <Text color={"gray.600"}>Total income</Text>
            </Flex>
          </Flex>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.50"}
            w={"full"}
            h={"100px"}
            border={"1px solid"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>$ {totalExpense}</Heading>
              <Text color={"gray.600"}>Total expense</Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          flex={1}
          mt={"10"}
          mr={"5"}
          width={"300px"}
          height={"300px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading>
            <ChartTransaction expense={totalExpense} income={totalIncome}/>
          </Heading>
        </Box>
      </Flex>
      {isOpen && <TransactionForm onClose={() => setIsOpen(false)}/>}
    </Box>
  );
}
