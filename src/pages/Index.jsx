import { Container, Text, VStack, Box, Button, HStack, Link } from "@chakra-ui/react";
import { FaHome, FaQuestionCircle, FaRocket, FaEnvelope, FaRobot } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box as="nav" width="100%" padding="4" bg="background.800" boxShadow="md">
        <HStack justifyContent="space-between">
          <Text fontSize="2xl" fontWeight="bold" color="text.900">Logo</Text>
          <HStack spacing={4}>
            <Link href="/" color="text.800" _hover={{ color: "text.900" }}><FaHome /> Home</Link>
            <Link href="/faq" color="text.800" _hover={{ color: "text.900" }}><FaQuestionCircle /> FAQ</Link>
            <Link href="/contact" color="text.800" _hover={{ color: "text.900" }}><FaEnvelope /> Contact Us</Link>
            <Link href="/ai" color="text.800" _hover={{ color: "text.900" }}><FaRobot /> AI</Link>
            <Button as={Link} href="/get-started" colorScheme="whiteAlpha" variant="outline" borderRadius="full" _hover={{ bg: "whiteAlpha.900", color: "background.900" }} transition="all 0.3s ease-in-out">
              <FaRocket /> Get Started
            </Button>
          </HStack>
        </HStack>
      </Box>
      <VStack spacing={4} mt={8}>
        <Text fontSize="2xl" color="text.900">Your Blank Canvas</Text>
        <Text color="text.800">Chat with the agent to start making edits.</Text>
      </VStack>
    </Container>
  );
};

export default Index;