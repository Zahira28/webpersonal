import config from "@payload-config";
import "@payloadcms/next/css";
import { RootLayout } from "@payloadcms/next/layouts";
import type { ServerFunctionClient } from "payload";
import type { SanitizedConfig } from 'payload';
import React from "react";

type Args = {
  children: React.ReactNode;
  config: Promise<SanitizedConfig>; 
  importMap: Record<string, string>; 
  serverFunction: ServerFunctionClient;
};

export default function PayloadLayout({ 
  children,
  config,
  importMap,
  serverFunction, }: Args) {
  return (
    <RootLayout
      config={config}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  );
}
