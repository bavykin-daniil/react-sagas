import React from 'react';

export type RouteT = {
  exact: boolean;
  path: string;
  component: React.ReactNode;
  permissions: string[];
};
