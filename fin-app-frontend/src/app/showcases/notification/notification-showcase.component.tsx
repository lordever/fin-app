"use client"

import React, {useMemo} from 'react';
import {Col, Divider, notification, Row} from "antd";
import {IconType, NotificationPlacement} from "antd/es/notification/interface";
import {
    AiOutlineBorderBottom,
    AiOutlineBorderTop, AiOutlineInfoCircle,
    AiOutlineRadiusBottomleft,
    AiOutlineRadiusBottomright,
    AiOutlineRadiusUpleft,
    AiOutlineRadiusUpright, AiOutlineWarning
} from "react-icons/ai";
import rowStyles from "../row/row-showcase.module.scss";
import {GrStatusGood} from "react-icons/gr";
import {BiErrorCircle} from "react-icons/bi";
import GFButton from "@/app/common/components/button/button.component";

const Context = React.createContext({name: 'Default'});

const NotificationShowcase = () => {

    const [api, contextHolder] = notification.useNotification();

    const openNotification = (type: IconType, placement: NotificationPlacement) => {
        api[type]({
            message: `Notification ${placement}`,
            description: <Context.Consumer>{({name}) => `Hello, ${name}!`}</Context.Consumer>,
            placement,
        });
    };

    const contextValue = useMemo(() => ({name: 'Ant Design'}), []);

    return (
        <>
            <Divider>
                <h2>Notification showcases</h2>
            </Divider>

            <Context.Provider value={contextValue}>
                {contextHolder}
                <Row className={rowStyles.row}>
                    <Col span={4} className={rowStyles.col}>
                        <GFButton
                            type="primary"
                            onClick={() => openNotification('info', 'topLeft')}
                            icon={<AiOutlineRadiusUpleft/>}
                        >
                            topLeft
                        </GFButton>
                    </Col>
                    <Col span={4} className={rowStyles.col}>
                        <GFButton
                            type="primary"
                            onClick={() => openNotification('info', 'topRight')}
                            icon={<AiOutlineRadiusUpright/>}
                        >
                            topRight
                        </GFButton>
                    </Col>
                    <Col span={4} className={rowStyles.col}>
                        <GFButton
                            type="primary"
                            onClick={() => openNotification('info', 'top')}
                            icon={<AiOutlineBorderTop/>}
                        >
                            top
                        </GFButton>
                    </Col>
                    <Col span={4} className={rowStyles.col}>
                        <GFButton
                            type="primary"
                            onClick={() => openNotification('info', 'bottom')}
                            icon={<AiOutlineBorderBottom/>}
                        >
                            bottom
                        </GFButton>
                    </Col>
                    <Col span={4} className={rowStyles.col}>
                        <GFButton
                            type="primary"
                            onClick={() => openNotification('info', 'bottomLeft')}
                            icon={<AiOutlineRadiusBottomleft/>}
                        >
                            bottomLeft
                        </GFButton>
                    </Col>
                    <Col span={4} className={rowStyles.col}>
                        <GFButton
                            type="primary"
                            onClick={() => openNotification('info', 'bottomRight')}
                            icon={<AiOutlineRadiusBottomright/>}
                        >
                            bottomRight
                        </GFButton>
                    </Col>
                </Row>

                <Row className={rowStyles.row}>
                    <Col span={4} className={rowStyles.col}>
                        <GFButton
                            type="primary"
                            info
                            onClick={() => openNotification('info', 'topRight')}
                            icon={<AiOutlineInfoCircle/>}
                        >
                            Info notification
                        </GFButton>
                    </Col>

                    <Col span={4} className={rowStyles.col}>
                        <GFButton
                            type="primary"
                            success
                            onClick={() => openNotification('success', 'topRight')}
                            icon={<GrStatusGood/>}
                        >
                            Success notification
                        </GFButton>
                    </Col>

                    <Col span={4} className={rowStyles.col}>
                        <GFButton
                            type="primary"
                            warning
                            onClick={() => openNotification('warning', 'topRight')}
                            icon={<AiOutlineWarning/>}
                        >
                            Warning notification
                        </GFButton>
                    </Col>

                    <Col span={4} className={rowStyles.col}>
                        <GFButton
                            type="primary"
                            danger
                            onClick={() => openNotification('error', 'topRight')}
                            icon={<BiErrorCircle/>}
                        >
                            Error notification
                        </GFButton>
                    </Col>
                </Row>
            </Context.Provider>
        </>
    );
};

export default NotificationShowcase;