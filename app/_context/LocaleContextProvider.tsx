"use client";
import React, { createContext, useContext, useState, ReactNode, FunctionComponent } from "react";

interface LocaleContextType {
  locale: string;
  updateLocale: (locale: string) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
}

export const LocaleProvider: FunctionComponent<LocaleProviderProps> = ({ children }) => {
  const locale = localStorage.getItem("locale") ?? "en";

  const updateLocale = (newLocale: string) => {
    console.log("Updating locale to:", newLocale); // Debug: Log to confirm this runs
    localStorage.setItem("locale", newLocale);
  };

  return <LocaleContext.Provider value={{ locale, updateLocale }}>{children}</LocaleContext.Provider>;
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
