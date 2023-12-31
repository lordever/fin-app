import React from 'react';

const WelcomeLayout = ({children, sideMenu}: {children: React.ReactNode, sideMenu: React.ReactNode}) => {
    return (
        <>
            {sideMenu}
            {children}
        </>
    );
};

export default WelcomeLayout;