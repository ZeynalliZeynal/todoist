'use client';

import React from 'react';

interface CollapseContextProps {
  collapsed: boolean;
  collapse(): void;
}

const CollapseContext = React.createContext<CollapseContextProps | null>(null);

export function CollapseContextProvider(props: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false);

  function collapse() {
    setCollapsed((prevState) => !prevState);
  }

  return (
    <CollapseContext.Provider value={{ collapsed, collapse }}>
      {props.children}
    </CollapseContext.Provider>
  );
}

export function useCollapseContext() {
  const context = React.useContext(CollapseContext);
  if (!context)
    throw new Error(
      'useCollapseContext must be used within the CollapseProvider component.',
    );
  return context;
}
