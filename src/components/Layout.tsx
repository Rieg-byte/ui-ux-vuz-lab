import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div style={{
            minHeight: '100vh', width: '100%', backgroundColor: '#f9f9f9'
        }}>
            {children}
        </div>
    );
};
export default Layout;