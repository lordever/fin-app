"use client";

import React from 'react';
import rowStyles from "../row/row-showcase.module.scss";
import {Col, Divider, MenuProps, Row, Dropdown, Tooltip, Space} from "antd";
import {AiOutlineUser} from "react-icons/ai";
import {IoArrowDownOutline} from "react-icons/io5";
import GFButton from "@/app/common/components/button/button.component";

const DropdownShowcase = () => {
    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('click left button', e);
    };

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
    };

    const items: MenuProps['items'] = [
        {
            label: '1st menu item',
            key: '1',
            icon: <AiOutlineUser/>,
        },
        {
            label: '2nd menu item',
            key: '2',
            icon: <AiOutlineUser/>,
        },
        {
            label: '3rd menu item',
            key: '3',
            icon: <AiOutlineUser/>,
            danger: true,
        },
        {
            label: '4rd menu item',
            key: '4',
            icon: <AiOutlineUser/>,
            danger: true,
            disabled: true,
        },
    ];

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <>
            <Divider>
                <h2>Dropdown showcases</h2>
            </Divider>

            <Row className={rowStyles.row}>
                <Col className={rowStyles.col} span={4}>
                    <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
                        Dropdown
                    </Dropdown.Button>
                </Col>
                <Col className={rowStyles.col} span={4}>
                    <Dropdown.Button menu={menuProps} placement="bottom" icon={<AiOutlineUser/>}>
                        Dropdown
                    </Dropdown.Button>
                </Col>
                <Col className={rowStyles.col} span={4}>
                    <Dropdown.Button menu={menuProps} onClick={handleButtonClick} disabled>
                        Dropdown
                    </Dropdown.Button>
                </Col>
                <Col className={rowStyles.col} span={4}>
                    <Dropdown.Button
                        menu={menuProps}
                        buttonsRender={([leftButton, rightButton]) => [
                            <Tooltip title="tooltip" key="leftButton">
                                {leftButton}
                            </Tooltip>,
                            React.cloneElement(rightButton as React.ReactElement<any, string>, {loading: true}),
                        ]}
                    >
                        With Tooltip
                    </Dropdown.Button>
                </Col>
                <Col className={rowStyles.col} span={4}>
                    <Dropdown menu={menuProps}>
                        <GFButton>
                            <Space>
                                Button
                                <IoArrowDownOutline/>
                            </Space>
                        </GFButton>
                    </Dropdown>
                </Col>
                <Col className={rowStyles.col} span={4}>
                    <Dropdown.Button menu={menuProps} onClick={handleButtonClick} danger>
                        Danger
                    </Dropdown.Button>
                </Col>
            </Row>

        </>
    );
};

export default DropdownShowcase;