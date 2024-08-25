import { Dimensions, Image, StyleSheet, useColorScheme } from "react-native";
import React from "react";
import Flex from "@/components/ui/layout/Flex/Flex";
import { LinearGradient } from "expo-linear-gradient";

import Box from "@/components/ui/layout/Box/Box";
import { Colors } from "@/constants/Colors";
import AnimatedTypography from "@/components/ui/atoms/typography/AnimatedTypography";

export default function About() {
  const colorScheme = useColorScheme();

  return (
    <Flex direction="column" style={styles.container}>
      <Box>
        <Image
          resizeMode="cover"
          style={{
            width: "100%",
            height: Dimensions.get("window").height / 3,
          }}
          source={require("@/assets/images/filter.png")}
        />
        {/* <LinearGradient
          colors={["transparent", "#F4F4F4"]}
          style={{
            position: "absolute",
            bottom: -10,
            width: "100%",
            height: "80%",
          }}
        /> */}
      </Box>
      <Flex
        direction="column"
        gap={10}
        style={{ padding: 20, overflow: "hidden" }}
      >
        <AnimatedTypography variant="h3">About Us</AnimatedTypography>
        <AnimatedTypography duration={1100} variant="p">
          DeliverEats is a food delivery service that allows you to order food
          from your favorite restaurants and have it delivered to your doorstep.
        </AnimatedTypography>
      </Flex>
      <Flex
        direction="column"
        gap={10}
        style={{ padding: 20, overflow: "hidden" }}
      >
        <AnimatedTypography duration={1200} variant="h3">
          Our Mission
        </AnimatedTypography>
        <AnimatedTypography duration={1300} variant="p">
          Our mission is to provide a fast and reliable food delivery service
          that connects you with your favorite restaurants.
        </AnimatedTypography>
      </Flex>
      <Flex
        direction="column"
        gap={10}
        style={{ padding: 20, overflow: "hidden" }}
      >
        <AnimatedTypography duration={1400} variant="h3">
          Contact Us
        </AnimatedTypography>
        <Flex direction="row" gap={5} style={{ overflow: "hidden" }}>
          <AnimatedTypography duration={1500} variant="p">
            Email
          </AnimatedTypography>
          <AnimatedTypography
            duration={1600}
            variant="p"
            style={{ color: Colors["light"].tint }}
          >
            delivereats@gmail.com
          </AnimatedTypography>
        </Flex>
        <Flex direction="row" gap={5} style={{ overflow: "hidden" }}>
          <AnimatedTypography duration={1700} variant="p">
            Phone
          </AnimatedTypography>
          <AnimatedTypography
            duration={1800}
            variant="p"
            style={{ color: Colors["light"].tint }}
          >
            1-800-DELIVER
          </AnimatedTypography>
        </Flex>
        <Flex direction="row" gap={5} style={{ overflow: "hidden" }}>
          <AnimatedTypography duration={1900} variant="p">
            Address
          </AnimatedTypography>
          <AnimatedTypography
            variant="p"
            duration={2000}
            style={{ color: Colors["light"].tint }}
          >
            1234 DeliverEats Way
          </AnimatedTypography>
        </Flex>
        <Flex direction="row" gap={5} style={{ overflow: "hidden" }}>
          <AnimatedTypography duration={2100} variant="p">
            City
          </AnimatedTypography>
          <AnimatedTypography
            duration={2200}
            variant="p"
            style={{ color: Colors["light"].tint }}
          >
            New York
          </AnimatedTypography>
        </Flex>
      </Flex>
      <Flex
        direction="row"
        justifyContent="flex-end"
        gap={5}
        style={{ padding: 20, overflow: "hidden" }}
      >
        <AnimatedTypography
          duration={2300}
          variant="span"
          style={{ color: Colors["light"].tint }}
        >
          Made by Vignal Brice.
        </AnimatedTypography>
      </Flex>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
