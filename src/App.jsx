import "./App.css";
import React, { useState } from "react";
import {
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
  Card,
  CardBody,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import Hero from "./Components/Hero";
import { DeleteIcon } from "@chakra-ui/icons";

function App() {
  const f = new Intl.NumberFormat("en-gb", {
    currency: "GBP",
    style: "currency",
  });
  const [budget, setBudget] = useState(0);
  const [budgetSubmitted, setBudgetSubmitted] = useState(false);

  const [expense, setExpense] = useState("");
  const [expensesArr, setExpensesArr] = useState([]);

  const handleSubmit = (isBudget) => {
    isBudget ? setBudgetSubmitted(true) : null;
  };

  const handleDeleteExpense = (index) => {
    setExpensesArr((prevExpenses) => {
      const deletedExpense = prevExpenses[index];
      setBudget((prevBudget) => prevBudget + deletedExpense);
      return prevExpenses.filter((_, i) => i !== index);
    });
  };

  return (
    <>
      <Box>
        <Hero />
      </Box>

      <Flex w="100%" id="mainContent" minH="65Vh" bg="#102531">
        {/* Left side: Budget form */}
        <Box flex="1.5" bg="#1f3541" p="0.5em" m="1em">
          <Card bg="#1f3541" h="100%">
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
              </FormControl>
            </CardBody>
          </Card>
        </Box>

        {/* Right side: "hi" div */}
        <Box flex="2.5" bg="#203F52" p="0.5em" m="1em">
          <Card bg="#203F52" h="100%">
            <CardBody>
              <FormControl>
                <FormLabel htmlFor="myInput" fontSize="xl">
                  Add Expense
                </FormLabel>
                <NumberInput
                  value={expense}
                  onChange={(valueNumber) => {
                    setExpense(valueNumber);
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
                      Number(expense),
                    ]);
                    setBudget((prevBudget) => prevBudget - expense);
                    setExpense(""); // Optional: Reset the expense input after submission
                  }}
                >
                  Submit
                </Button>
              </FormControl>
            </CardBody>
          </Card>
        </Box>
      </Flex>

      <Flex w="100%" minH="35Vh" bg="#102531">
        <Box flex="1.5" bg="#17425A" p="0.5em" m="1em">
          <Stat>
            <StatLabel fontSize="xl">Budget</StatLabel>
            {budgetSubmitted && budget > 0 && (
              <StatNumber>{f.format(budget)}</StatNumber>
            )}
          </Stat>
        </Box>
        <Box flex="2.5" bg="#1F3646" p="0.5em" m="1em">
          <Stat>
            <StatLabel fontSize="xl">All Expenses</StatLabel>
            {expensesArr.length > 0 && (
              <StatNumber>
                {expensesArr.map((c, index) => (
                  <HStack key={index}>
                    <p>{f.format(c)}</p>
                    <IconButton
                      onClick={() => handleDeleteExpense(index)}
                      icon={<DeleteIcon />}
                      size="sm"
                      colorScheme="red"
                    />
                  </HStack>
                ))}
              </StatNumber>
            )}
          </Stat>
        </Box>
      </Flex>
    </>
  );
}

export default App;
