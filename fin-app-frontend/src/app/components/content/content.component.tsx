import React from 'react';
import cls from "classnames";
import styles from "./content.module.scss";
import {useSelector} from "react-redux";
import {selectSideMenuActive} from "@/app/store/side-menu/side-menu.selector";

const Content = ({children}: { children: React.ReactNode }) => {
    const isActive = useSelector(selectSideMenuActive);

    const mainClassnames = cls(
        styles.main,
        isActive ? styles.active : undefined
    );

    return (
        <div className={mainClassnames}>
            {children}
        </div>
    );
};

export default Content;