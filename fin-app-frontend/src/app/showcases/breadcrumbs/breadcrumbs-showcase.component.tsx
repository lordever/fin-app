"use client";

import React from 'react';
import {Col, Divider, Row} from "antd";
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import rowStyles from "../row/row-showcase.module.scss";
import GFBreadcrumbs from "@/app/common/components/breadcrumbs/breadcrumbs.component";

const BreadcrumbsShowcase = () => {
    return (
        <>
            <Divider>
                <h2>Breadcrumbs showcases</h2>
            </Divider>

            <Row className={rowStyles.row}>
                <Col className={rowStyles.col} span={12}>
                    <GFBreadcrumbs
                        items={[
                            {
                                href: '',
                                title: <AiOutlineHome/>,
                            },
                            {
                                href: '',
                                title: (
                                    <>
                                        <AiOutlineUser/>
                                        <span>User</span>
                                    </>
                                ),
                            },
                            {
                                title: 'Add document'
                            },
                        ]}
                    />
                </Col>
            </Row>

            <Row className={rowStyles.row}>
                <Col span={12}>
                    <GFBreadcrumbs
                        separator=""
                        items={[
                            {
                                title: 'Location',
                            },
                            {
                                type: 'separator',
                                separator: ':',
                            },
                            {
                                href: '',
                                title: 'Application Center',
                            },
                            {
                                type: 'separator',
                            },
                            {
                                href: '',
                                title: 'Application List',
                            },
                            {
                                type: 'separator',
                            },
                            {
                                title: 'An Application',
                            },
                        ]}
                    />
                </Col>
            </Row>
        </>
    );
};

export default BreadcrumbsShowcase;