import React from 'react';
import { Layout } from './styles';

interface LayoutProps {
  children: React.ReactElement;
}

const index = ({ children }: LayoutProps) => {
  return <Layout>{children}</Layout>;
};

export default index;
