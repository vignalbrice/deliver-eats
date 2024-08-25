import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import React, { FC, PropsWithChildren } from "react";
import Button, { TVariant } from "../button/Button";
import { useRouter } from "expo-router";

export type ButtonLinkProps = PropsWithChildren<{
  variant?: TVariant;
  href: string;
  style?: StyleProp<ViewStyle>;
}>;

const ButtonLink: FC<ButtonLinkProps> = ({
  href,
  variant,
  children,
  style,
}) => {
  const router = useRouter();

  return (
    <Button
      variant={variant ?? "text"}
      style={style}
      onPress={() => router.push(href)}
    >
      {children}
    </Button>
  );
};

export default ButtonLink;

const styles = StyleSheet.create({});
