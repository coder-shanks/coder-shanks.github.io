import React, { useEffect, useState } from "react";
import {
  Grid,
  GridItem,
  Image,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Typist from "react-typist";

import profilePic from "../../assets/shubham_profile.jpg";

const ProfileCard = () => {
  const [count, setCount] = useState(0);
  const typedTextBgColor = useColorModeValue("#1da1f2", "#edf2f7");
  const typedTextColor = useColorModeValue("#edf2f7", "#1da1f2");

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "2fr 2fr", lg: "1fr 3fr" }}
      mt={10}
      p={4}
      gridColumnGap={10}
      textAlign={{ base: "center", md: "inherit" }}
    >
      <GridItem alignSelf="center">
        <Image src={profilePic} borderRadius="full" alt="Shubham Tarade" />
      </GridItem>
      <GridItem paddingTop="30px" alignSelf="center">
        <Text fontSize="2xl" fontWeight="bold">
          Hello !
        </Text>
        {count ? (
          <Typist
            cursor={{ show: false, hideWhenDone: true }}
            onTypingDone={() => setCount(0)}
          >
            <span
              style={{ fontSize: "24px", fontWeight: "bold", color: "#1da1f2" }}
            >
              I am{" "}
              <span
                style={{
                  backgroundColor: `${typedTextBgColor}`,
                  padding: "4px",
                  borderRadius: "5px",
                  color: `${typedTextColor}`,
                }}
              >
                Shubham
                <Typist.Backspace count={7} delay={1250} />
                Frontend Developer
                <Typist.Backspace count={18} delay={1250} />
                Cricket Fan
                <Typist.Backspace count={11} delay={1250} />
                Anime Lover
              </span>
            </span>
          </Typist>
        ) : (
          ""
        )}
        <br />
        <Text fontSize="lg">
          Passionate and creative Frontend developer, Blogger from{" "}
          <Tag fontSize="lg">Pune, India</Tag>.
        </Text>
        <br />
        <Text fontSize="lg">
          Currently working as a senior frontend developer at{" "}
          <Tag
            as="a"
            fontSize="lg"
            href="https://www.globant.com/"
            target="_blank"
            rel="noreferrer"
          >
            Globant
          </Tag>
          handling UI development, .
        </Text>
        <Text fontSize="lg">
          Co-founder at{" "}
          <Tag
            as="a"
            fontSize="lg"
            href="https://fullyunderstood.com/"
            target="_blank"
            rel="noreferrer"
          >
            Fully Understood
          </Tag>
          .
        </Text>
        <br />
        <Text fontSize="lg">
          Apart from 9-5 job, I like to work on side projects and try to
          constantly learn something new to improve my skillset. At present, I
          am using React for my web projects and really enjoying it.
        </Text>
      </GridItem>
    </Grid>
  );
};

export default ProfileCard;
