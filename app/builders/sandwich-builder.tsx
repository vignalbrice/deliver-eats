import BottomUi from "@/components/bottomUI/BottomUi";
import { Sandwich } from "@/components/sandwich/Sandwich";
import BackButton from "@/components/ui/atoms/backButton/BackButton";

import { Canvas } from "@react-three/fiber/native";
import { Suspense } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

export default function SandwichBuilder() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"default"} />
      <BackButton />
      <Canvas camera={{ position: [-2, 2.5, 5], fov: 30 }}>
        <color attach="background" args={["#512DA8"]} />
        <Suspense fallback={null}>
          <Sandwich />
        </Suspense>
      </Canvas>
      <BottomUi />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
