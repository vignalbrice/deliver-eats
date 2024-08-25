import {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import React, { FC, useEffect } from "react";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type AnimatedImageProps = {
  src: ImageSourcePropType | SharedValue<ImageSourcePropType>;
  style?: StyleProp<ImageStyle>;
  duration?: number;
};

const AnimatedImage: FC<AnimatedImageProps> = ({ src, style, duration }) => {
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
    <Animated.Image
      source={src}
      style={[
        {
          ...animatedStyle,
          overflow: "hidden",
        },
        style,
      ]}
    />
  );
};

export default AnimatedImage;

const styles = StyleSheet.create({});
