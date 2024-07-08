import { INGREDIENTS, TIngredient, useSandwich } from "@/hooks/useSandwich";
import { Float, Gltf, Text3D } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import React, { FC, Suspense } from "react";
import fontPath from "@/assets/fonts/Poppins_Regular.json";

import { animated, useSpring } from "@react-spring/three";

type IngredientsProps = GroupProps & {
  ingredient: TIngredient;
  ["position-y"]: number;
  showPrice?: boolean;
};

const INGREDIENT_SCALE = 3;
const INGREDIENT_SCALE_Y = 5;

const Ingredients: FC<IngredientsProps> = ({
  ingredient,
  showPrice,
  ...rest
}) => {
  const { removeIngredient, addToCart } = useSandwich();
  const { positionY } = useSpring({
    positionY: rest["position-y"],
  });
  const { scale } = useSpring({
    from: {
      scale: 0.5,
    },
    to: {
      scale: 1,
    },
  });

  return (
    <animated.group {...rest} scale={scale} position-y={positionY}>
      {showPrice && (
        <Suspense>
          <group
            visible={!addToCart}
            onClick={(e) => {
              e.stopPropagation();
              removeIngredient(ingredient);
            }}
          >
            <mesh position-x={0.7} position-y={0.042}>
              <planeGeometry args={[0.9, 0.16]} />
              <meshStandardMaterial color="white" opacity={0.42} transparent />
            </mesh>
            <Text3D
              position-x={0.42}
              scale={0.1}
              bevelEnabled
              bevelSegments={3}
              bevelThickness={0.001}
              font={fontPath as any}
            >
              {INGREDIENTS[ingredient.name].price.toFixed(2)}$
            </Text3D>
            <Text3D
              position-x={0.82}
              scale={0.1}
              bevelEnabled
              bevelSegments={3}
              bevelThickness={0.001}
              font={fontPath as any}
            >
              X
            </Text3D>
          </group>
        </Suspense>
      )}
      <Float
        floatingRange={addToCart ? [0, 0] : [-0.01, 0.01]}
        speed={addToCart ? 0 : 4}
        rotationIntensity={0.5}
      >
        <Gltf
          src={INGREDIENTS[ingredient.name].src}
          scale={INGREDIENT_SCALE}
          scale-y={
            INGREDIENT_SCALE_Y +
            (ingredient.name === "bread" ? INGREDIENT_SCALE_Y : 0)
          }
        />
      </Float>
    </animated.group>
  );
};

export default Ingredients;
