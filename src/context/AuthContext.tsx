import { createContext, useEffect, useState } from "react";

interface AuthContextData {
  token: string | undefined;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  saveToken: (newToken: string) => void;
  removeToken: () => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string>();
  const [loading, setLoading] = useState(false);

  const saveToken = (newToken: string) => {
    setToken(newToken);
    setLoading(false);
    localStorage.setItem("token", newToken);
  };

  const removeToken = () => {
    setToken(undefined);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  return (
    <AuthContext.Provider
      value={{ loading, setLoading, token, saveToken, removeToken }}
    >
      {children}
    </AuthContext.Provider>
  );
}
