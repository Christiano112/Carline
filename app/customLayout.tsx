"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export interface CustomLayoutProps {
    children: React.ReactNode;
}

const CustomLayout = ({ children }: CustomLayoutProps) => {
    return (
        <CacheProvider>
            <ChakraProvider>{children}</ChakraProvider>
        </CacheProvider>
    );
};

export default CustomLayout;