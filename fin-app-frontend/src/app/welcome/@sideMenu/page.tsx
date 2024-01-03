'use client'

import React, {FC} from 'react';
import {withDictionary} from "@/app/components/hoc/WithDictionary";
import {useDictionary} from "@/app/context/DictionaryContext";
import styles from "./side-menu.module.scss";
import cls from "classnames";
import {AiFillApple, AiOutlineHome, AiOutlineLock} from "react-icons/ai";
import {IoIosHelpCircleOutline} from "react-icons/io";
import {HiOutlineChatBubbleOvalLeft} from "react-icons/hi2";
import {MdPeopleOutline} from "react-icons/md";
import {IoLogOutOutline, IoSettingsOutline} from "react-icons/io5";
import {useSelector} from "react-redux";
import {selectSideMenuActive} from "@/app/store/side-menu/side-menu.selector";

const SideMenuPage: FC = () => {

    const {dictionary} = useDictionary();

    const isActive = useSelector(selectSideMenuActive);

    const navigationClassNames = cls(
        styles.navigation,
        isActive ? styles.active : undefined
    );


    return (
        <div className={navigationClassNames}>
            <ul>
                <li>
                    <a href="#">
                        <span className={styles.icon}><AiFillApple/></span>
                        <span className={styles.title}>{dictionary.sideMenu.brandName}</span>
                    </a>
                </li>
                <li className={styles.hovered}>
                    <a href="#">
                        <span className={styles.icon}><AiOutlineHome/></span>
                        <span className={styles.title}>{dictionary.sideMenu.dashboard}</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><MdPeopleOutline/></span>
                        <span className={styles.title}>{dictionary.sideMenu.customers}</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><HiOutlineChatBubbleOvalLeft/></span>
                        <span className={styles.title}>{dictionary.sideMenu.message}</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><IoIosHelpCircleOutline/></span>
                        <span className={styles.title}>{dictionary.sideMenu.help}</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><IoSettingsOutline/></span>
                        <span className={styles.title}>{dictionary.sideMenu.settings}</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><AiOutlineLock/></span>
                        <span className={styles.title}>{dictionary.sideMenu.password}</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className={styles.icon}><IoLogOutOutline/></span>
                        <span className={styles.title}>{dictionary.sideMenu.signOut}</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default withDictionary(SideMenuPage);