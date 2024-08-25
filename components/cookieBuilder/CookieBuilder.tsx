import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../customButton/CustomButton";
import { COOKIES, COOKIES_ARRAY, useCookies } from "@/hooks/useCookies";

const CookieBuilder = () => {
  const {
    addCookie,
    removeCookie,
    total,
    addToCart,
    setAddToCart,
    cookies,
    selected,
    setSelected,
  } = useCookies();

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // onPressAddCookie function to add a cookie to the cart if the cookies array is less than 20
  const onPressAddCookie = (cookie: string) => {
    if (cookies.length < 20) {
      addCookie(cookie);
    }
  };

  console.log("selected", selected);

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 25,
        }}
      >
        <>
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
                backgroundColor="#0984e3"
                bold
              >
                Cancel Order
              </CustomButton>
            </View>
          ) : (
            <>
              {selected ? (
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: "900",
                      flexShrink: 1,
                    }}
                  >
                    Your Selection
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: "#666",
                        fontWeight: "500",
                      }}
                    >
                      Macaron : {selected.name}
                    </Text>
                    <View style={{ flexDirection: "row", gap: 5 }}>
                      <TouchableOpacity onPress={() => setSelected(null)}>
                        <Text style={{ color: "#333" }}>UnSelect</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          removeCookie(selected.id);
                          setSelected(null);
                        }}
                      >
                        <Text
                          style={{
                            color: "#e74c3c",
                            textDecorationLine: "underline",
                          }}
                        >
                          Delete
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
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
                      Macaron Builder
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "#666",
                      fontWeight: "500",
                    }}
                  >
                    Fresh and delicious cookies box made with love.
                  </Text>
                </>
              )}
              <View
                style={{
                  height: 1,
                  backgroundColor: "#ececec",
                  marginVertical: 20,
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  fontWeight: "900",
                  color: "#333",
                }}
              >
                The package ($5.00)
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  textAlign: "center",
                  color: "#666",
                }}
              >
                Compose your candy box by adding cookies
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
                {COOKIES_ARRAY.map((cookie, index) => (
                  <View key={[cookie, index].join("-")} style={{ padding: 10 }}>
                    <CustomButton onPress={() => onPressAddCookie(cookie)}>
                      {COOKIES[cookie as keyof typeof COOKIES].icon +
                        `${capitalizeFirstLetter(cookie)} (+$${COOKIES[
                          cookie as keyof typeof COOKIES
                        ].price.toFixed(2)})`}
                    </CustomButton>
                  </View>
                ))}
              </ScrollView>
              <CustomButton
                onPress={() => setAddToCart(!addToCart)}
                color="#fff"
                backgroundColor="#0984e3"
                bold
              >
                Add to cart {`($${total.toFixed(2)})`}
              </CustomButton>
            </>
          )}
        </>
      </View>
    </SafeAreaView>
  );
};

export default CookieBuilder;

const styles = StyleSheet.create({});
