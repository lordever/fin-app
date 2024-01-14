import React, {FC, memo, useMemo} from 'react';
import {Button} from "antd";
import {ButtonProps} from "antd/es/button/button";
import styles from "./button.module.scss";
import cls from "classnames";

interface Props extends ButtonProps {
    warning?: boolean;
    success?: boolean;
    secondary?: boolean;
    dark?: boolean;
    info?: boolean;
}

const GFButton: FC<Props> = (props) => {
    const {
        type,
        danger,
        warning,
        success,
        secondary,
        dark,
        info
    } = props;

    const getClassnameByType = useMemo(() => {
        let className: string;
        switch (type) {
            case "primary":
                className = styles.button;
                break;
            case "link":
                className = styles.linkButton;
                break;
            case "text":
                className = styles.textButton;
                break;
            case "dashed":
                className = styles.dashedButton;
                break;
            default:
                className = styles.defaultButton;
                break;
        }

        return className;
    }, [type]);

    const getClassnameIfDanger = useMemo(() => {
        if (!danger) {
            return undefined;
        }

        return styles.dangerButton;
    }, [danger]);

    const getClassnameIfWarning = useMemo(() => {
        if (!warning) {
            return undefined;
        }

        return styles.warningButton;
    }, [danger]);

    const getClassnameIfSuccess = useMemo(() => {
        if (!success) {
            return undefined;
        }

        return styles.successButton;
    }, [success]);

    const getClassnameIfSecondary = useMemo(() => {
        if (!secondary) {
            return undefined;
        }

        return styles.secondaryButton;
    }, [secondary]);

    const getClassnameIfDark = useMemo(() => {
        if (!dark) {
            return undefined;
        }

        return styles.darkButton;
    }, [dark]);

    const getClassnameIfInfo = useMemo(() => {
        if (!info) {
            return undefined;
        }

        return styles.infoButton;
    }, [info]);


    const classnames = cls(
        styles.button,
        getClassnameByType,
        getClassnameIfDanger,
        getClassnameIfWarning,
        getClassnameIfSuccess,
        getClassnameIfSecondary,
        getClassnameIfDark,
        getClassnameIfInfo
    );

    return (
        <Button className={classnames} {...props} />
    );
};

export default memo(GFButton);