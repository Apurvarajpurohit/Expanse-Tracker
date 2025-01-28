import { Button, Flex, Heading, useDisclosure, Box } from "@chakra-ui/react";
import Summary from "../summary";
import ExpenseView from "../expense-view";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    totalExpense,
    allTransactions,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransactions.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount));
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransactions]);

  return (
    <Box
      bgGradient="linear(to-r, blue.200, purple.300, pink.200)"
      minH="100vh"
      p={5}
    >
      <Flex
        textAlign="center"
        flexDirection="column"
        bg="white"
        borderRadius="lg"
        shadow="lg"
        p={8}
        mx="auto"
        maxW="4xl"
      >
        <Flex alignItems="center" justifyContent="space-between" mb={6}>
          <Heading
            color="blue.500"
            fontSize={["xl", "2xl", "3xl"]}
            fontWeight="bold"
          >
            Expense Tracker
          </Heading>
          <Button onClick={onOpen} bg="blue.400" color="white" _hover={{ bg: "blue.500" }}>
            Add New Transaction
          </Button>
        </Flex>

        <Summary
          totalExpense={totalExpense}
          totalIncome={totalIncome}
          isOpen={isOpen}
          onClose={onClose}
        />

        <Flex
          w="full"
          mt={8}
          alignItems="flex-start"
          justifyContent="space-evenly"
          flexDirection={["column", "row"]}
          gap={4}
        >
          <ExpenseView
            data={allTransactions.filter((item) => item.type === "expense")}
            type="expense"
          />
          <ExpenseView
            data={allTransactions.filter((item) => item.type === "income")}
            type="income"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
