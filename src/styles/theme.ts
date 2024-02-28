export const lightTheme = {
  colors: {
    primary50: "#e0fcff",
    primary100: "#bef8fd",
    primary200: "#87eaf2",
    primary300: "#54d1db",
    primary400: "#38bec9",
    primary500: "#2cb1bc",
    primary600: "#14919b",
    primary700: "#0e7c86",
    primary800: "#0a6c74",
    primary900: "#044e54",

    gray50: "#f8fafc",
    gray100: "#f1f5f9",
    gray200: "#cbd5e1",
    gray300: "#94a3b8",
    gray400: "#64748b",
    gray500: "#475569",
    gray600: "#334155",
    gray700: "#334155",
    gray800: "#1e293b",
    gray900: "#0f172a",

    black: "#222222",
    white: "#ffffff",
    redLight: "#f8d7da",
    redDark: "#842029",
    greenLight: "#d1e7dd",
    greenDark: "#0f5132",

    darkModeBgColor: "#333333",
    darkModeTextColor: "#f0f0f0",
    darkModeBgSecondaryColor: "#3f3f3f",
    darkModeTextSecondaryColor: "#94a3b8",

    backgroundColor: "#f8fafc",
    textColor: "#0f172a",
    backgroundSecondaryColor: "#ffffff",
    textSecondaryColor: "#475569",
  },

  fonts: {
    size: {
      smallText: "0.875rem",
      extraSmallText: "0.7em",
    },
    spacings: {
      letterSpacing: "1px",
    },
  },

  transitions: {
    fast: "0.3s ease-in-out all",
  },

  borders: {
    borderRadius: " 0.25rem",
  },

  widths: {
    maxWidth: "1120px",
    fixedWidth: "600px",
    fluidWidth: "90vw",
    navHeight: "6rem",
  },

  shadows: {
    shadow1: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    shadow2:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    shadow3:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    shadow4:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
} as const;

export const darkTheme = {
  colors: {
    primary50: "#e0fcff",
    primary100: "#bef8fd",
    primary200: "#87eaf2",
    primary300: "#54d1db",
    primary400: "#38bec9",
    primary500: "#2cb1bc",
    primary600: "#14919b",
    primary700: "#0e7c86",
    primary800: "#0a6c74",
    primary900: "#044e54",

    gray50: "#f8fafc",
    gray100: "#f1f5f9",
    gray200: "#cbd5e1",
    gray300: "#94a3b8",
    gray400: "#64748b",
    gray500: "#475569",
    gray600: "#334155",
    gray700: "#334155",
    gray800: "#1e293b",
    gray900: "#0f172a",

    black: "#222222",
    white: "#ffffff",
    redLight: "#f8d7da",
    redDark: "#842029",
    greenLight: "#d1e7dd",
    greenDark: "#0f5132",

    darkModeBgColor: "#333333",
    darkModeTextColor: "#f0f0f0",
    darkModeBgSecondaryColor: "#3f3f3f",
    darkModeTextSecondaryColor: "#94a3b8",

    backgroundColor: "#333333",
    textColor: "#f0f0f0",
    backgroundSecondaryColor: "#3f3f3f",
    textSecondaryColor: "#94a3b8",
  },

  fonts: {
    size: {
      smallText: "0.875rem",
      extraSmallText: "0.7em",
    },
    spacings: {
      letterSpacing: "1px",
    },
  },

  transitions: {
    fast: "0.3s ease-in-out all",
  },

  borders: {
    borderRadius: " 0.25rem",
  },

  widths: {
    maxWidth: "1120px",
    fixedWidth: "600px",
    fluidWidth: "90vw",
    navHeight: "6rem",
  },

  shadows: {
    shadow1: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    shadow2:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    shadow3:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    shadow4:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
} as const;

export type Theme = typeof lightTheme | typeof darkTheme;
