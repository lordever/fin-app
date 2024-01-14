import React, {FC, memo, useMemo} from 'react';
import {Alert, AlertProps} from "antd";
import styles from "./alert.module.scss";

interface Props extends AlertProps {
}

const generateClassName = (type?: 'success' | 'info' | 'warning' | 'error'): string | undefined => {
    switch (type) {
        case "warning":
            return styles.warning;
        case "success":
            return styles.success;
        case "info":
            return styles.info;
        case "error":
            return styles.error;
        default:
            return undefined;
    }
}

const GFAlert: FC<Props> = (props) => {

    const {type} = props;

    const className = useMemo(() => generateClassName(type), [type]);

    return (
        <Alert className={className} {...props} />
    );
};

export default memo(GFAlert);