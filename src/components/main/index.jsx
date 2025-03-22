import { Button, Flex, Heading } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import ExpenseView from "../expense-view";
import Summary from "../summary";
import { GlobalContext } from "../../context";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
    allTransactions,
  } = useContext(GlobalContext);

  useEffect(() => {
    let expense = 0;
    let income = 0;

    allTransactions.forEach((transaction) =>
      transaction.type === "expense"
        ? (expense += parseFloat(transaction.amount))
        : (income += parseFloat(transaction.amount))
    );

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransactions]);

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={"12"}
        px={"7"}
      >
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker App
        </Heading>
        <Flex alignItems={"center"}>
          <Button
            onClick={() => setIsOpen(true)}
            bg={"blue.300"}
            color={"black"}
            border={"2px solid"}
            borderColor={"blue.300"}
            borderRadius={"7px"}
            mb={"5"}
            _hover={{
              backgroundColor: "white",
            }}
            transition="all 0.5s ease-in-out"
          >
            Add New Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary
        setIsOpen={setIsOpen}
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
      />

      <Flex
        w="full"
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView
          data={allTransactions.filter(
            (transaction) => transaction.type === "expense"
          )}
          type={"expense"}
        />
        <ExpenseView
          data={allTransactions.filter(
            (transaction) => transaction.type === "income"
          )}
          type={"income"}
        />
      </Flex>
    </Flex>
  );
}
