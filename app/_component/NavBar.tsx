"use client";
import { useAuth } from "@/_context/AuthContextProvider";
import { Button, HStack, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { CiGlobe } from "react-icons/ci";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useLocale } from "@/_context/LocaleContextProvider";
import { getDictionary } from "get-dictionary";

const NavBar: React.FC = () => {
  const { user, logout } = useAuth();
  const isManager = user.role === "MANAGER";
  const router = useRouter();
  const pathName = usePathname();
  const { locale, updateLocale } = useLocale();
  const [dict, setDict] = useState<any>();

  useEffect(() => {
    handleDictionary();
  }, []);

  const handleDictionary = async () => {
    (locale === "en" || locale === "zh") && setDict(await getDictionary(locale));
  };

  const changeLanguage = (newLocale: string) => {
    console.log(user);
    updateLocale(newLocale);
    const newPath = `/${newLocale}/` + pathName.split("/").slice(2).join("/");
    router.push(newPath);
  };

  return (
    <HStack justifyContent={"space-between"} backgroundColor={"black"} minH={20} color={"white"} padding={5}>
      <Link href={`/${locale}/home`}>{dict && dict.my_application}</Link>
      <HStack spacing={20}>
        {user.token ? (
          <>
            <Link href={`/${locale}/home`}>{dict && dict.home}</Link>
            <Link href={`/${locale}/user`}>{dict && dict.user}</Link>
            {isManager && <Link href={`/${locale}/manager`}>{dict && dict.manager}</Link>}
          </>
        ) : (
          <Link href={`/${locale}/auth`}>{dict && dict.sign_in}</Link>
        )}
      </HStack>
      <HStack>
        <Menu>
          <MenuButton as={Button} rightIcon={<CiGlobe />}>
            {dict && dict.language}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => changeLanguage("en")} color={"black"}>
              English
            </MenuItem>
            <MenuItem onClick={() => changeLanguage("zh")} color={"black"}>
              中文
            </MenuItem>
          </MenuList>
        </Menu>
        {user.token && (
          <Button
            onClick={async () => {
              logout();
              router.push(`/${locale}/auth`);
            }}
            colorScheme={"red"}
            borderRadius={10}
          >
            {dict && dict.logout}
          </Button>
        )}
      </HStack>
    </HStack>
  );
};
export default NavBar;
