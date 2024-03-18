"use client";
import { login } from "app/_services/auth";
import React, { useEffect, useState } from "react";
import { VStack, Input, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/_context/AuthContextProvider";
import { getDictionary } from "get-dictionary";
import { useLocale } from "@/_context/LocaleContextProvider";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { user, updateStorage } = useAuth();
  const token = user.token;
  const { locale } = useLocale();
  const [dict, setDict] = useState<any>();

  const handleDictionary = async () => {
    (locale === "en" || locale === "zh") && setDict(await getDictionary(locale));
  };

  useEffect(() => {
    if (token) {
      router.push(`/${locale}/home`);
    } else {
      handleDictionary();
    }
  }, []);

  const handleLogin = async () => {
    if (username && password) {
      try {
        const response = await login(username, password);
        await updateStorage(response);
        const newPath = `/${locale}/home`.replace(/\/\/+/g, "/");
        router.push(newPath);
      } catch (error) {
        setError(dict.login_error);
      }
    } else {
      setError(dict.login_validation);
    }
  };

  return (
    <VStack spacing={5}>
      {dict && (
        <>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            {dict.sign_in}
          </Text>
          <Input
            placeholder="Username"
            size="md"
            onChange={(e) => setUsername(e.target.value)}
            borderColor={"gray.500"}
            focusBorderColor={"black"}
          />
          <Input
            placeholder="Password"
            size="md"
            onChange={(e) => setPassword(e.target.value)}
            borderColor={"gray.500"}
            focusBorderColor={"black"}
          />
          <Button colorScheme="teal" onClick={handleLogin} width={"100%"}>
            {dict.go}
          </Button>
          {error && (
            <Text fontSize={"xs"} color={"red"}>
              {error}
            </Text>
          )}
        </>
      )}
    </VStack>
  );
};

export default LoginPage;
