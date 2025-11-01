import config from "@payload-config";
import "@payloadcms/next/css";
import { RootLayout } from "@payloadcms/next/layouts";
import type { ServerFunctionClient } from "payload";
import React from "react";
import { importMap } from "./admin/importMap.js";

type Args = {
  children: React.ReactNode;
  config: typeof config; 
  importMap: typeof importMap; 
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
