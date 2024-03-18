import { Text, Box, Table, Tr, Thead, Th, Td, Tbody, TableCaption, ChakraProvider } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Home() {
  const credentials = [
    { username: "user", password: "user" },
    { username: "manager", password: "manager" },
  ];
  return (
    <>
        <Text textAlign={"center"} whiteSpace="pre-line">
          This is Login Application by Michelle Adeline👋 {`\n`}
          Built using Next 13 + Chakra-UI and Springboot {`\n`} Please access the home/login page{" "}
        </Text>
        <Link href={"/en/auth"}>
          <Text fontWeight={"bold"} color={"blue"}>
            here
          </Text>
        </Link>
        <Box>
          <Text mb={4}>Access the page using these Login Credentials</Text>
          <Table variant="simple" textAlign="center">
            <Thead>
              <Tr>
                <Th>Username</Th>
                <Th>Password</Th>
              </Tr>
            </Thead>
            <Tbody>
              {credentials.map((cred, index) => (
                <Tr key={index}>
                  <Td>{cred.username}</Td>
                  <Td>{cred.password}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
    </>
  );
}
