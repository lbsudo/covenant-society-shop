"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
// import AuthProvider from "@/context/AuthProvider";
import { SessionProvider } from "next-auth/react";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <SessionProvider>
      <NextUIProvider>
        {/* <AuthProvider> */}
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
        {/* </AuthProvider> */}
      </NextUIProvider>
    </SessionProvider>
  );
}
