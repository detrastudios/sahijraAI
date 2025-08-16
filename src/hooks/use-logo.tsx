'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';

const LOGO_STORAGE_KEY = 'custom-app-logo';

interface LogoContextType {
  logo: string | null;
  setLogo: (logo: string) => void;
  resetLogo: () => void;
  isMounted: boolean;
}

const LogoContext = createContext<LogoContextType | undefined>(undefined);

export const LogoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [logo, setLogoState] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const storedLogo = localStorage.getItem(LOGO_STORAGE_KEY);
      if (storedLogo) {
        setLogoState(storedLogo);
      }
    } catch (error) {
      console.error('Could not access localStorage.', error);
    }
  }, []);

  const setLogo = (newLogo: string) => {
    try {
      localStorage.setItem(LOGO_STORAGE_KEY, newLogo);
      setLogoState(newLogo);
    } catch (error) {
      console.error('Could not access localStorage.', error);
    }
  };

  const resetLogo = () => {
    try {
      localStorage.removeItem(LOGO_STORAGE_KEY);
      setLogoState(null);
    } catch (error) {
      console.error('Could not access localStorage.', error);
    }
  }

  return (
    <LogoContext.Provider value={{ logo, setLogo, resetLogo, isMounted }}>
      {children}
    </LogoContext.Provider>
  );
};

export const useLogo = (): LogoContextType => {
  const context = useContext(LogoContext);
  if (context === undefined) {
    throw new Error('useLogo must be used within a LogoProvider');
  }
  return context;
};
