import { StatusBar } from "react-native";
import React, { FC } from "react";
import Button from "../button/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

type BackButtonProps = {};

const BackButton: FC<BackButtonProps> = ({}) => {
  const router = useRouter();

  return (
    <Button
      style={{
        position: "absolute",
        top: StatusBar.currentHeight ? StatusBar.currentHeight - 6 : 0,
        left: 6,
        zIndex: 100,
      }}
      onPress={() => router.back()}
    >
      <Ionicons name="arrow-back" size={32} color="white" />
    </Button>
  );
};

export default BackButton;
