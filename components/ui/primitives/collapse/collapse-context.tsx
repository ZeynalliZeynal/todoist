'use client';

import React from 'react';
import { CollapseContextProps } from './collapse.types';

const CollapseContext = React.createContext<CollapseContextProps | null>(null);

export function CollapseContextProvider(props: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false);
  const id = React.useId();
  const state = collapsed ? 'open' : 'closed';

  function collapse() {
    setCollapsed((prevState) => !prevState);
  }

  return (
    <CollapseContext.Provider
      value={{ collapsed, state, collapse, collapseId: `collapse${id}` }}
    >
      {props.children}
    </CollapseContext.Provider>
  );
}

export function useCollapseContext() {
  const context = React.useContext(CollapseContext);
  if (!context)
    throw new Error(
      'useCollapseContext must be used within the CollapseProvider component.'
    );
  return context;
}
