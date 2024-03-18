"use client";
import { useAuth } from "@/_context/AuthContextProvider";
import { VStack, Text, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { getDictionary } from "get-dictionary";
import React, { useEffect, useState } from "react";
import { useLocale } from "@/_context/LocaleContextProvider";

const Homepage: React.FC = () => {
  const { user } = useAuth();
  const token = user.token;
  const name = user.name;
  const username = user.username;
  const role = user.role;
  const router = useRouter();
  const { locale } = useLocale();
  const [dict, setDict] = useState<any>();

  const handleDictionary = async () => {
    (locale === "en" || locale === "zh") && setDict(await getDictionary(locale));
  };

  useEffect(() => {
    if (!token) {
      const newPath = `/${locale}/error`.replace(/\/\/+/g, "/");
      router.push(newPath);
    } else {
      handleDictionary();
    }
  }, []);

  return (
    <VStack>
      {dict ? (
        <Text whiteSpace="pre-line" textAlign={"center"} fontSize={"lg"}>
          {dict.welcome}, {name}👋{`\n`} {`\n`}
          {dict.your_username} <b>{username}</b> {`\n`}
          {dict.your_role} <b>{role}</b> {`\n`} {`\n`}
          {dict.public_content}
        </Text>
      ) : (
        <Spinner />
      )}
    </VStack>
  );
};
export default Homepage;
