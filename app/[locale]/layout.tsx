import { VStack } from "@chakra-ui/layout";
import type { Metadata } from "next";
import React from "react";
import { AuthProvider } from "../_context/AuthContextProvider";
import "./globals.css";
import NavBar from "../_component/NavBar";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { theme } from "../_theme/theme";
import { LocaleProvider } from "@/_context/LocaleContextProvider";

export const metadata: Metadata = {
  title: "Login Application",
  description: "DXC Online Assessment",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <AuthProvider>
        <html lang="en" style={{ height: "100%" }}>
          <body>
            <ChakraProvider theme={theme}>
              <NavBar />
              <Flex direction="column" align="center" justify="center" minH="90vh">
                <VStack spacing={4} align="center" justify="center">
                  {children}
                </VStack>
              </Flex>
            </ChakraProvider>
          </body>
        </html>
      </AuthProvider>
    </LocaleProvider>
  );
}
