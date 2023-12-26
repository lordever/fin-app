import React from 'react';

const InterceptingRoutesLayout = (props: { children: React.ReactNode, modal: React.ReactNode }) => {
    return (
        <>
            {props.children}
            {props.modal}
        </>
    );
};

export default InterceptingRoutesLayout;