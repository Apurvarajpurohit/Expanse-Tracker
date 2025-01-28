import { Box, Flex, Heading, Text,Badge } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

export default function ExpenseView({ type, data }) {
  const isExpense = type === "expense";

  return (
    <Box
      flex={1}
      w="full"
      bgGradient="linear(to-b, white, gray.50)"
      boxShadow="md"
      p={6}
      borderRadius="16px"
      border="1px solid"
      borderColor="gray.200"
      mr={4}
      mt={6}
    >
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading size="md" color={isExpense ? "red.600" : "blue.600"}>
          {isExpense ? "Expense" : "Income"}
        </Heading>
        <Badge
          colorScheme={isExpense ? "red" : "blue"}
          borderRadius="full"
          px={3}
          py={1}
          fontSize="0.8em"
        >
          {isExpense ? "Expenses" : "Incomes"}
        </Badge>
      </Flex>

      {data.map((item, index) => (
        <Flex
          key={index}
          bg={isExpense ? "red.50" : "blue.50"}
          justifyContent="space-between"
          alignItems="center"
          border="1px solid"
          borderColor={isExpense ? "red.200" : "blue.200"}
          p={4}
          borderRadius="12px"
          mb={3}
          transition="transform 0.2s"
          _hover={{
            transform: "scale(1.02)",
            boxShadow: "lg",
          }}
        >
          <Flex alignItems="center" gap={3}>
            {isExpense ? (
              <ArrowDownIcon boxSize={5} color="red.500" />
            ) : (
              <ArrowUpIcon boxSize={5} color="blue.500" />
            )}
            <Text fontWeight="bold" color="gray.700" fontSize="lg">
              {item.description}
            </Text>
          </Flex>
          <Text fontWeight="bold" color={isExpense ? "red.600" : "blue.600"}>
            ${parseFloat(item.amount).toFixed(2)}
          </Text>
        </Flex>
      ))}
    </Box>
  );
}
