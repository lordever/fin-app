import React, {FC, memo} from 'react';
import styles from "./burger-button.module.scss";
import cls from 'classnames';
import {IoMenuOutline} from "react-icons/io5";

interface BurgerButton {
    isActive?: boolean;
    onClick?: () => void;
}

const BurgerButton: FC<BurgerButton> = ({isActive, onClick}) => {
    const classes = cls(styles.toggle)

    return (
        <div className={classes}>
            <IoMenuOutline onClick={onClick}/>
        </div>
    );
};

export default memo(BurgerButton);