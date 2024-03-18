"use client";
import { useAuth } from "@/_context/AuthContextProvider";
import { useLocale } from "@/_context/LocaleContextProvider";
import { getUserData } from "@/_services/user";
import { VStack, Text, UnorderedList, ListItem, Spinner } from "@chakra-ui/react";
import { getDictionary } from "get-dictionary";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Userpage: React.FC = () => {
  const { user } = useAuth();
  const token = user.token;
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { locale } = useLocale();
  const [dict, setDict] = useState<any>();

  useEffect(() => {
    if (!token) {
      const newPath = `/${locale}/error`.replace(/\/\/+/g, "/");
      router.push(newPath);
    } else {
      handleDataAndDict();
    }
  }, []);

  const handleDataAndDict = async () => {
    (locale === "en" || locale === "zh") && setDict(await getDictionary(locale));
    setData(await getUserData(token));
    setLoading(false);
  };

  return (
    <VStack>
      {loading ? (
        <Spinner />
      ) : (
        <Text whiteSpace="pre-line" fontSize={"lg"}>
          <b>{dict.user_dashboard}</b> {`\n`} {`\n`}
          {dict.list_of_roles}
          {`\n`}
          <UnorderedList>
            {data.map((role) => {
              return <ListItem>{role}</ListItem>;
            })}
          </UnorderedList>
        </Text>
      )}
    </VStack>
  );
};
export default Userpage;
