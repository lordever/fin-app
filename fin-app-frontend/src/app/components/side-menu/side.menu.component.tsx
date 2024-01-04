import React, {FC} from 'react';
import {useDictionary} from "@/app/context/DictionaryContext";
import {useDispatch, useSelector} from "react-redux";
import {selectSideMenuActive} from "@/app/store/side-menu/side-menu.selector";
import cls from "classnames";
import styles from "./side-menu.module.scss";
import {AiFillApple, AiOutlineHome, AiOutlineLock} from "react-icons/ai";
import {MdPeopleOutline} from "react-icons/md";
import {HiOutlineChatBubbleOvalLeft} from "react-icons/hi2";
import {IoIosHelpCircleOutline} from "react-icons/io";
import {IoLogOutOutline, IoSettingsOutline} from "react-icons/io5";
import {Button} from "@mui/material";
import {setLocaleThunk} from "@/app/store/localization/localization.thunk";
import {Locale} from "@/app/types/dictionary.model";
import {AppDispatch} from "@/app/store/store";

const SideMenu: FC = () => {

    const dispatch: AppDispatch = useDispatch();
    const {dictionary} = useDictionary();

    const isActive = useSelector(selectSideMenuActive);

    const navigationClassNames = cls(
        styles.navigation,
        isActive ? styles.active : undefined
    );

    const changeLocale = (newLocale: Locale) => {
        dispatch(setLocaleThunk(newLocale));
    };


    return (
        <>
            <Button onClick={() => changeLocale(Locale.EN)}>Change locale to EN</Button>
            <Button onClick={() => changeLocale(Locale.RU)}>Change locale to RU</Button>

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
        </>
    );
};

export default SideMenu;