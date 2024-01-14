import React from 'react';
import rowStyles from "../row/row-showcase.module.scss";
import {Col, Divider, Row} from "antd";
import GFAlert from "@/app/common/components/alert/alert.component";

const AlertShowcase = () => {
    return (
        <>
            <Divider>
                <h2>Alert showcases</h2>
            </Divider>
            <Row className={rowStyles.row}>
                <Col span={12} className={rowStyles.col}>
                    <GFAlert type="success" message="Success alert message"/>
                </Col>
                <Col span={12} className={rowStyles.col}>
                    <GFAlert type="warning" message="Warning alert message"/>
                </Col>
            </Row>

            <Row className={rowStyles.row}>
                <Col span={12} className={rowStyles.col}>
                    <GFAlert type="info" message="Success alert message"/>
                </Col>
                <Col span={12} className={rowStyles.col}>
                    <GFAlert type="error" message="Warning alert message"/>
                </Col>
            </Row>

            <Row className={rowStyles.row}>
                <Col span={12} className={rowStyles.col}>
                    <GFAlert message="Success Tips"
                             description="Detailed description and advice about successful copywriting."
                             type="success"
                             showIcon
                    />
                </Col>
                <Col span={12} className={rowStyles.col}>
                    <GFAlert message="Warning"
                             description="This is a warning notice about copywriting."
                             type="warning"
                             showIcon
                             closable
                    />
                </Col>
            </Row>

            <Row className={rowStyles.row}>
                <Col span={12} className={rowStyles.col}>
                    <GFAlert type="info"
                             message="Informational Notes"
                             description="Additional description and information about copywriting."
                             showIcon/>
                </Col>
                <Col span={12} className={rowStyles.col}>
                    <GFAlert message="Error"
                             description="This is an error message about copywriting."
                             type="error"
                             showIcon/>
                </Col>
            </Row>
        </>
    );
};

export default AlertShowcase;