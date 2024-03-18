"use client";
import { useLocale } from "@/_context/LocaleContextProvider";
import { VStack, Text } from "@chakra-ui/react";
import { getDictionary } from "get-dictionary";
import { useState, useEffect } from "react";

export default function MyApp() {
  const { locale } = useLocale();
  const [dict, setDict] = useState<any>();

  const handleDictionary = async () => {
    (locale === "en" || locale === "zh") && setDict(await getDictionary(locale));
  };

  useEffect(() => {
    handleDictionary();
  }, []);
  return (
    <VStack>
      <Text fontSize={"lg"} fontWeight={"bold"} color={"red.800"}>
        {dict && dict.errorpage_header}
      </Text>
      <Text whiteSpace="pre-line" textAlign={"center"}>
        {dict && dict.errorpage_body}
      </Text>
    </VStack>
  );
}
