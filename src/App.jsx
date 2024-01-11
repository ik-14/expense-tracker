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
} from "@chakra-ui/react";

function App() {
  const f = new Intl.NumberFormat("en-gb", {
    currency: "GBP",
    style: "currency",
  });
  const [budget, setBudget] = useState(0);
  const [budgetSubmitted, setBudgetSubmitted] = useState(false);

  console.log(budgetSubmitted);

  const handleSubmit = () => {
    setBudgetSubmitted(true);
  };

  return (
    <>
      <Center w="100%">
        <Heading>Expense tracker</Heading>
      </Center>

      <Flex w="100%">
        {/* Left side: Budget form */}
        <Box flex="1" bg="#BEBEB8">
          <FormControl>
            <Center w="100">
              <FormLabel htmlFor="myInput" fontSize="xl">
                Budget 💰
              </FormLabel>
            </Center>
            <NumberInput
              onChange={(valueNumber) => {
                setBudget(valueNumber);
                setBudgetSubmitted(false);
              }}
            >
              <NumberInputField placeholder="Enter a budget" />
            </NumberInput>
            <Center>
              <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
                Submit
              </Button>
            </Center>
            {budgetSubmitted && budget > 0 && (
              <Stat>
                <StatLabel>Budget</StatLabel>
                <StatNumber>{f.format(budget)}</StatNumber>
              </Stat>
            )}
          </FormControl>
        </Box>

        {/* Right side: "hi" div */}
        <Box flex="2" bg="#E3E3DA">
          <div>hi</div>
        </Box>
      </Flex>
    </>
  );
}

export default App;
