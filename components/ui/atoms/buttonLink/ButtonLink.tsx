import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import React, { FC, PropsWithChildren } from "react";
import Button, { TVariant } from "../button/Button";
import { Link } from "expo-router";

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
  return (
    <Button variant={variant ?? "text"} style={style}>
      <Link push href={href}>
        {children}
      </Link>
    </Button>
  );
};

export default ButtonLink;

const styles = StyleSheet.create({});
