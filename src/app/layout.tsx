import React from "react";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import theme, { darkTheme } from '../theme';
import "@/app/globals.css";
import Head from "next/head";
//fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from "@mui/material";


export const metadata: Metadata = {
  title: "Attendance App",
  description: "Generated by emea developer app"
};


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
