import { Colors } from "./Colors";

export const Theme = {
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },

  typography: {
    h1: {
      fontFamily: "Cairo-Bold",
      fontSize: 24,
      color: Colors.black10,
    },
    h2: {
      fontFamily: "Cairo-Bold",
      fontSize: 20,
      color: Colors.black10,
    },
    h3: {
      fontFamily: "Cairo-Bold",
      fontSize: 18,
      color: Colors.black10,
    },

    body: {
      fontFamily: "Cairo-Regular",
      fontSize: 16,
      color: Colors.black10,
    },
    bodySmall: {
      fontFamily: "Cairo-Regular",
      fontSize: 14,
      color: Colors.black10,
    },

    label: {
      fontFamily: "Cairo-Regular",
      fontSize: 15,
      color: Colors.gold00,
    },
    price: {
      fontFamily: "Cairo-Bold",
      fontSize: 16,
      color: Colors.Red00,
    },
    oldPrice: {
      fontFamily: "Cairo-Regular",
      fontSize: 14,
      color: Colors.Black30,
      textDecorationLine: "line-through",
    },
  },

  shadows: {
    small: {
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.12,
      shadowRadius: 1,
    },
    medium: {
      elevation: 4,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.16,
      shadowRadius: 2,
    },
  },

  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    round: 999,
  },
};
