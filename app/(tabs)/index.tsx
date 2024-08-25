import AnimatedButtonLink from "@/components/ui/atoms/animated/AnimatedButtonLink";
import AnimatedTypography from "@/components/ui/atoms/typography/AnimatedTypography";
import Typography from "@/components/ui/atoms/typography/Typography";
import Flex from "@/components/ui/layout/Flex/Flex";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import AnimatedLogo from "@/components/ui/logo/AnimatedLogo";

export default function HomeScreen() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={styles.container}
      gap={10}
    >
      <StatusBar />
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={2}
        style={{
          width: "100%",
          marginVertical: 20,
          overflow: "hidden",
        }}
      >
        <AnimatedLogo />
        <AnimatedTypography
          variant="h1"
          duration={1200}
          style={{
            color: Colors.light.tint,
          }}
        >
          DeliverEats
        </AnimatedTypography>
        <AnimatedTypography variant="h3" duration={1400}>
          A New Way To Order Food
        </AnimatedTypography>
      </Flex>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{
          overflow: "hidden",
          width: "100%",
        }}
        gap={10}
      >
        <AnimatedButtonLink
          variant="outline"
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "center",
          }}
          href={"builders/sandwich-builder"}
          duration={1800}
        >
          <Typography variant="h3" color={Colors.light.tint}>
            Get a Sandwich
          </Typography>
        </AnimatedButtonLink>
        <AnimatedButtonLink
          variant="secondary"
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "center",
          }}
          href={"builders/macaron-builder"}
          duration={1600}
        >
          <Typography variant="h3" color="#FFFF">
            Get a Macaron
          </Typography>
        </AnimatedButtonLink>
      </Flex>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
