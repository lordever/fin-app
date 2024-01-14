"use client"

import React, {useState} from 'react';
import {Col, Divider, Row} from "antd";
import {BsSearch, BsUpload} from "react-icons/bs";
import rowStyles from "../row/row-showcase.module.scss";
import GFButton from "@/app/common/components/button/button.component";

const ShowcasesButton = () => {

    const [loadings, setLoadings] = useState<boolean[]>([]);

    const enterLoading = (index: number) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });

        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 6000);
    };

    return (
        <>
            <Divider>
                <h2>Button showcases</h2>
            </Divider>
            <Row className={rowStyles.row}>
                <Col span={6}>
                    <GFButton type="primary">Primary Button</GFButton>
                </Col>
                <Col span={6}>
                    <GFButton>Default Button</GFButton>
                </Col>
                <Col span={6}>
                    <GFButton type="link">Link Button</GFButton>
                </Col>
                <Col span={6}>
                    <GFButton type="text">Text Button</GFButton>
                </Col>
            </Row>

            <Row className={rowStyles.row}>
                <Col span={6}>
                    <GFButton type="primary" danger>Primary Danger Button</GFButton>
                </Col>
                <Col span={6}>
                    <GFButton disabled>Disabled Button</GFButton>
                </Col>
                <Col span={6}>
                    <GFButton type="primary" icon={<BsSearch/>}>Button with icon</GFButton>
                </Col>
                <Col span={6}>
                    <GFButton type="primary" shape="round" icon={<BsSearch/>}>Round button with icon</GFButton>
                </Col>
            </Row>

            <Row className={rowStyles.row}>
                <Col span={6}>
                    <GFButton type="primary" warning>Primary Warning Button</GFButton>
                </Col>
                <Col span={6}>
                    <GFButton type="primary" success>Primary Success Button</GFButton>
                </Col>
                <Col span={6}>
                    <GFButton type="primary" secondary>Primary Secondary Button</GFButton>
                </Col>
                <Col span={6}>
                    <GFButton type="primary" dark>Primary Dark Button</GFButton>
                </Col>
            </Row>

            <Row className={rowStyles.row}>
                <Col span={6}>
                    <GFButton type="primary" info>Primary Info Button</GFButton>
                </Col>
                <Col span={6}>
                    <GFButton type="dashed">Dashed Button</GFButton>
                </Col>
                <Col span={6}>
                    <GFButton type="primary"
                              icon={<BsUpload/>}
                              loading={loadings[1]}
                              onClick={() => enterLoading(1)}>
                        Primary Loading Button
                    </GFButton>
                </Col>
            </Row>

            <Row className={rowStyles.row}>
                <Col span={6}>
                    <GFButton type="primary" info size="small">Primary Info Small Button</GFButton>
                </Col>
                <Col span={6}>
                    <GFButton type="primary" info size="middle">Primary Info Middle Button</GFButton>
                </Col>
                <Col span={6}>
                    <GFButton type="primary" info size="large">Primary Info Large Button</GFButton>
                </Col>
            </Row>
        </>
    );
};

export default ShowcasesButton;