import * as THREE from "three";
import React, { useRef } from "react";
import { ContactShadows } from "@react-three/drei";

import { useSandwich } from "@/hooks/useSandwich";
import Ingredients from "../ingredients/Ingredients";
import { useFrame } from "@react-three/fiber";

const INGREDIENT_SPACING = 0.2;
const INGREDIENT_SPACING_FINAL = 0.06;

export const Sandwich = () => {
  const { ingredients, addToCart } = useSandwich();
  const sandwichRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null);
  const ingredientSpacing = addToCart
    ? INGREDIENT_SPACING_FINAL
    : INGREDIENT_SPACING;
  useFrame(() => {
    if (addToCart) {
      sandwichRef.current!.rotation.y += 0.01;
    } else {
      sandwichRef.current!.rotation.y = 0;
    }
  });

  return (
    <group position-y={(-ingredients.length * ingredientSpacing) / 2}>
      <group ref={sandwichRef}>
        {ingredients.map((ingredient, index) => (
          <Ingredients
            key={[ingredient.id, index].join("-")}
            showPrice={index > 0 && index < ingredients.length - 1}
            ingredient={ingredient}
            position-y={index * ingredientSpacing}
          />
        ))}
      </group>
      <ContactShadows position-y={-0.5} opacity={0.6} />
    </group>
  );
};
