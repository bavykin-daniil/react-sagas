import React from 'react';

export type RouteT = {
  exact: boolean;
  path: string;
  component: any;
  permissions: string[];
};
