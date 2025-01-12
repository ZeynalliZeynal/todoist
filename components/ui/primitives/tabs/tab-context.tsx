import React from 'react';

export const TabContext = React.createContext(null);

export function TabProvider({ children }: { children: React.ReactNode }) {
  <TabContext.Provider value={{}}>{children}</TabContext.Provider>;
}
