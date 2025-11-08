import { MD3DarkTheme, useTheme, type MD3Theme } from "react-native-paper"

export const theme: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#34C759",
    onPrimary: "#ffffff",
    primaryContainer: "#1F9E43",
    onPrimaryContainer: "#e8ffeF",

    secondary: "#0A84FF",
    onSecondary: "#ffffff",
    secondaryContainer: "#0A5FCC",
    onSecondaryContainer: "#E6F1FF",

    background: "#121212",
    onBackground: "#E5E7EB",
    surface: "#1E1E1E",
    onSurface: "#E5E7EB",
    surfaceVariant: "#262626",
    onSurfaceVariant: "#A1A1AA",
    outline: "#3F3F46",
    outlineVariant: "#27272A",
    tertiary: "#FFD700",

    error: "#EF4444",
    onError: "#ffffff",
    errorContainer: "#7F1D1D",
    onErrorContainer: "#FFE4E6",

    inverseSurface: "#E5E7EB",
    inverseOnSurface: "#111827",
    inversePrimary: "#1F9E43",

  },
  roundness: 12,
}

export type AppTheme = typeof theme

export const useAppTheme = () => useTheme<AppTheme>()