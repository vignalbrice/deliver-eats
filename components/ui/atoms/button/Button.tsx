import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React, { FC, PropsWithChildren } from "react";

const styles = StyleSheet.create({
  default: {
    padding: 20,
    borderRadius: 8,
    minHeight: 57,
  },
  primary: {
    backgroundColor: "#FEFEFF",
  },
  secondary: {
    backgroundColor: "#15BE77",
  },
  text: {
    backgroundColor: "transparent",
  },
  outline: {
    borderColor: "#15BE77",
    borderWidth: StyleSheet.hairlineWidth * 2,
  },
});

export type TVariant = keyof typeof styles;
export type TSize = "small" | "medium" | "large";

type ButtonProps = PropsWithChildren<{
  variant?: TVariant;
  size?: TSize;
  color?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  prependIcon?: React.ReactNode;
  appendIcon?: React.ReactNode;
  style?: StyleProp<TouchableOpacityProps>;
}> &
  TouchableOpacityProps;

const Button: FC<ButtonProps> = ({
  variant,
  size,
  color,
  disabled,
  fullWidth,
  loading,
  prependIcon,
  appendIcon,
  children,
  style,
  ...rest
}) => {
  const variantStyles = styles[(variant as keyof typeof styles) || "default"];

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.default,
        {
          backgroundColor: color,
          width: fullWidth ? "100%" : "auto",
          opacity: disabled ? 0.5 : 1,
        },
        variantStyles,
        style,
      ]}
      {...rest}
    >
      {loading && (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
      <View>
        {prependIcon}
        {children}
        {appendIcon}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
