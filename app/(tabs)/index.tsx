import BottomUi from "@/components/bottomUI/BottomUi";
import { Sandwich } from "@/components/sandwich/Sandwich";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber/native";
import { Suspense } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Canvas camera={{ position: [-2, 2.5, 5], fov: 30 }}>
        <color attach="background" args={["#512DA8"]} />
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.6} position={[5, 5, 5]} />
        <Environment preset="city" />
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
