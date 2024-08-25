import { StyleSheet, Text, View } from "react-native";
import React, { FC, useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import ButtonLink, { ButtonLinkProps } from "../buttonLink/ButtonLink";

type AnimatedButtonLinkProps = ButtonLinkProps & {
  duration?: number;
};

const AnimatedButtonLink: FC<AnimatedButtonLinkProps> = ({
  duration,
  children,
  style,
  href,
  variant,
}) => {
  const moveAnimation = useSharedValue(100);
  const opacityAnimation = useSharedValue(0);
  const config = {
    duration: duration ?? 1000,
  };
  const transitionStyle = useAnimatedStyle(() => {
    return {
      width: "100%",
      alignItems: "center",
      transform: [
        {
          translateY: withTiming(moveAnimation.value, config),
        },
      ],
      opacity: withTiming(opacityAnimation.value, config),
    };
  });
  useEffect(() => {
    moveAnimation.value = 0;
    opacityAnimation.value = 1;
  }, []);

  return (
    <Animated.View style={transitionStyle}>
      <ButtonLink href={href} style={style} variant={variant}>
        {children}
      </ButtonLink>
    </Animated.View>
  );
};

export default AnimatedButtonLink;

const styles = StyleSheet.create({});
