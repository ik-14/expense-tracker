import React from "react";
import { Button, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <VStack h="100vh" align="center" justify="center" bg="#102531">
      <Text fontSize="6xl" fontWeight="bold" textAlign="center">
        Welcome to Simply Track
      </Text>
      <Text fontSize="xl" mt={4} textAlign="center">
        Expense tracking made easy
      </Text>
      <Link to="mainContent" smooth={true} duration={500}>
        <Button mt={8} colorScheme="teal">
          Let's go
        </Button>
      </Link>
    </VStack>
  );
};

export default Hero;
