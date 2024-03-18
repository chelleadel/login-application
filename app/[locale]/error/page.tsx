import { VStack, Text } from "@chakra-ui/react";

export default function MyApp() {
  return (
    <VStack>
      <Text fontSize={"lg"} fontWeight={"bold"} color={"red.800"}>
        Access Denied
      </Text>
      <Text whiteSpace="pre-line" textAlign={"center"}>
        You do not have permission to view this page. {`\n`}
        Please check your credentials and try again.
      </Text>
    </VStack>
  );
}
