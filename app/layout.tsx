"use client";

import React, { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { tanstackQueryClient } from "@/lib/integration/tanstack";

const inter = Inter({ subsets: ["latin"] });
const RootLayout = (props: PropsWithChildren) => {
  return (
    <QueryClientProvider client={tanstackQueryClient}>
      <html lang="en" className={inter.className}>
        <body>{props.children}</body>
      </html>
    </QueryClientProvider>
  );
};

export default RootLayout;
