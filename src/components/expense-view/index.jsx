import { Box, Flex, Heading, Text, Float } from "@chakra-ui/react";
import { useContext } from "react";
import { MdCancel } from "react-icons/md";
import { GlobalContext } from "../../context";


export default function ExpenseView({ data, type }) {
    const {allTransactions, setAllTransactions} = useContext(GlobalContext);

    function handleRemove(currId){
        let cpyAllTransactions = [...allTransactions];
        cpyAllTransactions = cpyAllTransactions.filter(transaction => transaction.id !== currId);
        setAllTransactions(cpyAllTransactions);
    }
    
  return (
    <Box
      flex={1}
      w="full"
      bg="white"
      mr="4"
      mt="10"
      p="5"
      pb="4"
      border="1px solid"
      borderColor="gray.100"
      borderRadius="12px"
    >
      <Flex justifyContent="space-between" alignItems="center" mb="4">
        <Heading size="md">{type === "income" ? "Income" : "Expense"}</Heading>
      </Flex>

      {data.map((item) => (
        <Box key={item.id} position="relative">
          <Float placement="top-end">
            <MdCancel size="30px" fill="red" cursor="pointer" onClick={() => handleRemove(item.id)}/>
          </Float>

          <Flex
            bg={type === "expense" ? "red.50" : "blue.50"}
            mt="4"
            justifyContent="space-between"
            alignItems="center"
            border="1px solid"
            borderColor={type === "expense" ? "red.100" : "blue.100"}
            p="4"
            borderRadius="8px"
            style={{ cursor: "pointer" }}
          >
            <Text fontWeight="bold" color="gray.600">
              {item.description}:
            </Text>
            <Text>$ {item.amount}</Text>
          </Flex>
        </Box>
      ))}
    </Box>
  );
}
