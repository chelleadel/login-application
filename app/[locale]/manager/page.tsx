"use client";
import { useAuth } from "@/_context/AuthContextProvider";
import { useLocale } from "@/_context/LocaleContextProvider";
import { getManagerData } from "@/_services/user";
import { VStack, Text, ListItem, UnorderedList, Spinner } from "@chakra-ui/react";
import { getDictionary } from "get-dictionary";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ManagerPage: React.FC = () => {
  const { user } = useAuth();
  const token = user.token;
  const role = user.role;
  const isManager = role === "MANAGER";
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { locale } = useLocale();
  const [dict, setDict] = useState<any>();

  useEffect(() => {
    console.log(token + " " + isManager);
    if (!token || !isManager) {
      const newPath = `/${locale}/error`.replace(/\/\/+/g, "/");
      router.push(newPath);
    } else {
      handleDataAndDict();
    }
  }, []);

  const handleDataAndDict = async () => {
    (locale === "en" || locale === "zh") && setDict(await getDictionary(locale));
    setData(await getManagerData(token));
    setLoading(false);
  };

  return (
    <VStack>
      {loading ? (
        <Spinner />
      ) : (
        <Text whiteSpace="pre-line" fontSize={"lg"}>
          <b>{dict.manager_dashboard}</b> {`\n`} {`\n`}
          {dict.list_of_usernames}
          {`\n`}
          <UnorderedList spacing={1}>
            {data.map((username) => {
              return <ListItem>{username}</ListItem>;
            })}
          </UnorderedList>
        </Text>
      )}
    </VStack>
  );
};
export default ManagerPage;
