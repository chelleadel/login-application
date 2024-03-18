"use client";
import React, { createContext, FC, ReactNode, useState } from "react";

interface AuthContextType {
  user: { token: string; username: string; name: string; role: string };
  updateStorage: (data: any) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const defaultUser = { token: "", username: "", name: "", role: "" };

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const storedUser = localStorage.getItem("user");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : defaultUser);

  // call this function to sign out logged in user
  const logout = async () => {
    setUser(defaultUser);
    localStorage.clear();
  };

  const updateStorage = async (data: any) => {
    const userData = {
      token: data.accessToken,
      username: data.username,
      role: data.role,
      name: data.name,
    };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  return <AuthContext.Provider value={{ user, updateStorage, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within the AuthProvider");
  }
  return context;
};
