import { Text, Table, Tr, Thead, Th, Td, Tbody, TableCaption } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Home() {
  const credentials = [
    { username: "user", password: "user" },
    { username: "manager", password: "manager" },
  ];
  return (
    <>
      {" "}
      <Text textAlign={"center"} whiteSpace="pre-line">
        This is Login Application by Michelle Adeline👋 {`\n`}
        Built using Next 13 + Chakra-UI and Springboot {`\n`} Please access the login page{" "}
        <Link href={"/en/auth"}>
          <Text fontWeight={"bold"} color={"blue"}>
            here!
          </Text>
        </Link>
      </Text>
      <Table variant="simple">
        <TableCaption>Access the page using these Login Credentials</TableCaption>
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
    </>
  );
}
