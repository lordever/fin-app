import React from 'react';
import styles from './layout.module.css';

const TestLayout = (props: { children: React.ReactNode, test: React.ReactNode }) => {
    return (
        <div className={styles.container}>
            {props.children}
            {props.test}
        </div>
    );
};

export default TestLayout;