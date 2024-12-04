"use client";

import { Provider } from "react-redux";
import store from "@/redux/store";
import RootLayoutServer from "./layout.server";

export default function RootLayoutClient({
  children,
}: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <RootLayoutServer>{children}</RootLayoutServer>
    </Provider>
  );
}