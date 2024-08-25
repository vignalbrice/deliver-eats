import CookieBuilder from "@/components/cookieBuilder/CookieBuilder";
import { Jar } from "@/components/jar/Jar";
import { COOKIES, CookieName, useCookies } from "@/hooks/useCookies";
import { Center, ContactShadows } from "@react-three/drei/native";
import { Canvas } from "@react-three/fiber/native";
import useControls from "r3f-native-orbitcontrols";
import React, { Suspense } from "react";
import { StyleSheet, View } from "react-native";
import Cookie from "@/components/cookie/Cookie";
import BackButton from "@/components/ui/atoms/backButton/BackButton";

export default function MacaroniBuilder() {
  const [OrbitControls, events] = useControls();
  const { cookies, addToCart } = useCookies();

  return (
    <View style={styles.container} {...events}>
      <BackButton />
      <Canvas camera={{ position: [-2, 2, 5], fov: 30 }}>
        <color attach="background" args={["#0984e3"]} />
        <directionalLight position={[1, 0, 0]} args={["white", 5]} />
        <directionalLight position={[-1, 0, 0]} args={["white", 5]} />
        <directionalLight position={[0, 0, 1]} args={["white", 5]} />
        <directionalLight position={[0, 0, -1]} args={["white", 5]} />
        <directionalLight position={[0, 1, 0]} args={["white", 5]} />
        <directionalLight position={[0, -1, 0]} args={["white", 5]} />
        <Suspense fallback={null}>
          <Center>
            <Jar />
          </Center>
          {cookies.map((cookie, index) => (
            <Cookie
              key={[cookie, index].join("-")}
              id={cookie.id}
              index={index}
              cookie={cookie.name}
              src={COOKIES[cookie.name as CookieName].src}
            />
          ))}
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -1, 0]}
            opacity={0.55}
            scale={10}
            blur={1}
          />
        </Suspense>
        <OrbitControls maxPolarAngle={Math.PI / 2} enabled={addToCart} />
      </Canvas>
      <CookieBuilder />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
