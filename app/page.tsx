import { Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
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
    </>
  );
}
