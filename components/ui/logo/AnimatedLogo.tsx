import { StyleProp, ViewStyle } from "react-native";
import React, { FC, useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Logo from "./Logo";

type AnimatedLogoProps = {
  duration?: number;
  style?: StyleProp<ViewStyle>;
};

const AnimatedLogo: FC<AnimatedLogoProps> = ({ duration, style }) => {
  const scale = useSharedValue(0);
  const config = {
    duration: duration ?? 1000,
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(scale.value, config) }],
    };
  });

  useEffect(() => {
    scale.value = 1;
  }, []);

  return (
    <Animated.View
      style={[
        {
          ...animatedStyle,
          overflow: "hidden",
        },
        style,
      ]}
    >
      <Logo />
    </Animated.View>
  );
};

export default AnimatedLogo;
