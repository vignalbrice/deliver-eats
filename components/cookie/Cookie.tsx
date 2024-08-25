import { StyleSheet } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import { Float, Gltf, useGLTF, Outlines } from "@react-three/drei/native";
import * as THREE from "three";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { CookieName, CookieNode, useCookies } from "@/hooks/useCookies";

type CookieProps = {
  id: number;
  src: string;
  index: number;
  cookie: string;
};

type Node = {
  [key in CookieName]: CookieNode;
};

const NODES: Node = {
  blue: "CV6_1_Cookie_V20_0",
  green: "CV6_1_Cookie_V21_0",
  purple: "CV6_1_Cookie_V22_0",
  red: "CV6_1_Cookie_V19_0",
};

const MATERIALS = {
  blue: "Cookie_V20",
  green: "Cookie_V21",
  purple: "Cookie_V22",
  red: "Cookie_V19",
};

const INGREDIENT_SPACING = 0.2;
const COOKIES_MAX_LENGTH = 5;

const Cookie = ({ cookie, src, index, id }: CookieProps) => {
  const { nodes, materials } = useGLTF(src);
  const node = useMemo(
    () => nodes[NODES[cookie as keyof Node]] as THREE.Mesh,
    [nodes]
  );

  const { cookies, addToCart, setSelected, selected } = useCookies();
  const cookieRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  const ingredientSpacing = INGREDIENT_SPACING;

  useFrame(() => {
    if (cookieRef.current) {
      cookieRef.current.rotation.y = 0;
    }
  });

  const handlePointerDown = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setSelected({ name: [cookie, index].join("-"), id });
  };

  const handlePointerMissed = () => {
    setSelected(null);
  };

  // Function to position cookies by row of 4 and column of 5
  const positionCookies = (index: number) => {
    const row = index % COOKIES_MAX_LENGTH;
    const column = Math.floor(index / COOKIES_MAX_LENGTH);
    const x = column * 0.4;
    const y = row * ingredientSpacing;
    return { x, y };
  };

  const { x, y } = positionCookies(index);

  return (
    <group
      position-x={(-cookies.length * ingredientSpacing) / 7}
      position-y={-0.6}
      onPointerMissed={handlePointerMissed}
    >
      <group ref={cookieRef} name={[cookie, index].join("-")}>
        <Float
          floatingRange={addToCart ? [0, 0] : [-0.01, 0.01]}
          speed={addToCart ? 0 : 4}
          rotationIntensity={0.5}
        >
          <mesh
            castShadow
            scale={0.03}
            position-x={x}
            position-y={y}
            geometry={node.geometry}
            onClick={handlePointerDown}
            name={[cookie, index].join("-")}
            material={materials[MATERIALS[cookie as keyof Node]]}
          >
            {selected?.name === [cookie, index].join("-") && (
              <Outlines angle={0} thickness={10} color="white" />
            )}
          </mesh>
        </Float>
      </group>
    </group>
  );
};

export default Cookie;
