import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import {
  INGREDIENTS,
  INGREDIENTS_ARRAY,
  useSandwich,
} from "@/hooks/useSandwich";
import CustomButton from "../customButton/CustomButton";

const BottomUi = () => {
  const { addIngredient, total, addToCart, setAddToCart } = useSandwich();

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 25,
        }}
      >
        {addToCart ? (
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "900",
                flexShrink: 1,
              }}
            >
              Total - ${total.toFixed(2)}
            </Text>
            <Text
              style={{
                color: "#666",
                fontWeight: "500",
                marginTop: 4,
                marginBottom: 16,
              }}
            >
              Order sent successfully! It will be ready in 10 minutes.
            </Text>
            <CustomButton
              onPress={() => setAddToCart(false)}
              color="#fff"
              backgroundColor="#7C4DFF"
              bold
            >
              Cancel Order
            </CustomButton>
          </View>
        ) : (
          <>
            <View
              style={{
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "900",
                  flexShrink: 1,
                }}
              >
                Sandwich Builder
              </Text>
            </View>
            <Text
              style={{
                color: "#666",
                fontWeight: "500",
              }}
            >
              Fresh and delicious sandwiches made with love.
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: "#ececec",
                marginVertical: 20,
              }}
            ></View>
            <Text
              style={{
                fontSize: 16,
                textAlign: "center",
                fontWeight: "900",
                color: "#333",
              }}
            >
              Your Creation ($5.00)
            </Text>
            <Text
              style={{
                fontSize: 14,
                textAlign: "center",
                color: "#666",
              }}
            >
              Compose your sandwich by adding ingredients.
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                marginVertical: 8,
                marginLeft: -20,
                marginRight: -20,
              }}
            >
              {INGREDIENTS_ARRAY.map((ingredient, index) => (
                <View
                  key={[ingredient, index].join("-")}
                  style={{ padding: 10 }}
                >
                  <CustomButton onPress={() => addIngredient(ingredient)}>
                    {INGREDIENTS[ingredient].icon +
                      `${capitalizeFirstLetter(ingredient)} (+$${INGREDIENTS[
                        ingredient
                      ].price.toFixed(2)})`}
                  </CustomButton>
                </View>
              ))}
            </ScrollView>
            <CustomButton
              onPress={() => setAddToCart(!addToCart)}
              color="#fff"
              backgroundColor="#7C4DFF"
              bold
            >
              Add to cart {`($${total.toFixed(2)})`}
            </CustomButton>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default BottomUi;

const styles = StyleSheet.create({});
