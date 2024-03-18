"use client";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      // You can use light colors like "gray.100" or custom colors like "#f0e7db"
      body: {
        bg: "gray.100",
        color: "black",
      },
    },
  },
});
