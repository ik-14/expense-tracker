import "./App.css";
import React, { useState } from "react";
import {
  Center,
  Heading,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Button,
  Flex,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  VStack,
  Card,
  CardBody,
} from "@chakra-ui/react";

function App() {
  const f = new Intl.NumberFormat("en-gb", {
    currency: "GBP",
    style: "currency",
  });
  const [budget, setBudget] = useState(0);
  const [budgetSubmitted, setBudgetSubmitted] = useState(false);

  const [expense, setExpense] = useState('');
  const [expenseSubmitted, setExpenseSubmitted] = useState(false);
  const [expensesArr, setExpensesArr] = useState([]);

  console.log(expense);
  console.log(expensesArr);

  const handleSubmit = (isBudget) => {
    isBudget ? setBudgetSubmitted(true) : setExpenseSubmitted(true);
  };

  return (
    <>
      <Center w="100%">
        <Heading>Expense tracker</Heading>
      </Center>

      <Flex w="100%">
        {/* Left side: Budget form */}
        <Box flex="1" bg="#203541" p="0.5em" m="1em">
          <Card>
            <CardBody>
              <FormControl>
                <FormLabel htmlFor="myInput" fontSize="xl">
                  Budget 💰
                </FormLabel>

                <NumberInput
                  onChange={(valueNumber) => {
                    setBudget(valueNumber);
                    setBudgetSubmitted(false);
                  }}
                >
                  <NumberInputField placeholder="Enter a budget" />
                </NumberInput>

                <Button
                  mt={4}
                  colorScheme="teal"
                  onClick={() => {
                    handleSubmit(true);
                  }}
                >
                  Submit
                </Button>

                {budgetSubmitted && budget > 0 && (
                  <Stat>
                    <StatLabel>Budget</StatLabel>
                    <StatNumber>{f.format(budget)}</StatNumber>
                  </Stat>
                )}
              </FormControl>
            </CardBody>
          </Card>
        </Box>

        {/* Right side: "hi" div */}
        <Box flex="2" bg="#203F52" p="0.5em" m="1em">
          <Card>
            <CardBody>
              <FormControl>
                <FormLabel htmlFor="myInput" fontSize="xl">
                  Add Expense
                </FormLabel>
                <NumberInput
                  value={expense}
                  onChange={(valueNumber) => {
                    setExpense(valueNumber);
                    setExpenseSubmitted(false);
                  }}
                >
                  <NumberInputField placeholder="Enter expense" />
                </NumberInput>
                <Button
                  mt={4}
                  colorScheme="teal"
                  onClick={() => {
                    handleSubmit(false);
                    setExpensesArr((prevExpenses) => [
                      ...prevExpenses,
                      expense,
                    ]);
                    setExpense(''); // Optional: Reset the expense input after submission
                  }}
                >
                  Submit
                </Button>
              </FormControl>
            </CardBody>
          </Card>
        </Box>
      </Flex>
      <VStack w="100%">
        {expensesArr && (
          <Stat>
            <StatLabel>Budget</StatLabel>
            <StatNumber>
              {expensesArr.map((c) => (
                <p>{f.format(c)}</p>
              ))}
            </StatNumber>
          </Stat>
        )}
      </VStack>
    </>
  );
}

export default App;
