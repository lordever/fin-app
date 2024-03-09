import React, {FC, memo, useMemo} from 'react';
import styles from "./user-icon.module.scss";
import GFButton from "@/app/common/components/button/button.component";
import {Dropdown} from "antd";
import {IoLogOutOutline} from "react-icons/io5";

interface UserIconProps {
    initials?: string | null;
    onLogout: () => void;
}

const UserIcon: FC<UserIconProps> = ({initials, onLogout}) => {
    const menuProps = useMemo(() => ({
        items: [{
            label: 'Logout',
            key: '1',
            icon: <IoLogOutOutline/>,
        },],
        onClick: onLogout,
    }), [onLogout]);

    return (
        <Dropdown menu={menuProps}>
            <GFButton className={styles.user}>
                {initials}
            </GFButton>
        </Dropdown>
    );
};

export default memo(UserIcon);