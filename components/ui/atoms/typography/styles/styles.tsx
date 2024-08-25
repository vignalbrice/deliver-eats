import { StyleSheet } from "react-native";

export const TYPOGRAPHY_VARIANTS = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  p: "p",
  span: "span",
} as const;

export const FONTS = {
  PRIMARY: "BentonSans",
  PRIMARY_BOLD: "BentonSansBold",
  PRIMARY_MEDIUM: "BentonSansMedium",
  PRIMARY_BOOK: "BentonSansBook",
  PRIMARY_BLACK: "BentonSansBlack",
};

export const styles = StyleSheet.create({
  h1: {
    fontFamily: FONTS.PRIMARY_BOLD,
    fontSize: 30,
    lineHeight: 41,
  },
  h2: {
    fontFamily: FONTS.PRIMARY_BOLD,
    fontSize: 24,
    lineHeight: 33,
  },
  h3: {
    fontFamily: FONTS.PRIMARY_BOLD,
    fontSize: 16,
    lineHeight: 20,
  },
  h4: {
    fontFamily: FONTS.PRIMARY_BOLD,
    fontSize: 14,
    lineHeight: 19,
  },
  p: {
    fontFamily: FONTS.PRIMARY,
    fontSize: 16,
    lineHeight: 20,
  },
});
