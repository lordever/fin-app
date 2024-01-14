import React, {FC, memo} from 'react';
import {Breadcrumb} from "antd";
import {BreadcrumbProps} from "antd/es/breadcrumb/Breadcrumb";
import styles from "./breadcrumbs.module.scss";

interface Props extends BreadcrumbProps {
}

const GFBreadcrumbs: FC<Props> = (props) => {
    const separator = ">" ?? props.separator;
    return (
        <Breadcrumb
            className={styles.link}
            separator={separator}
            {...props}
        />
    );
};

export default memo(GFBreadcrumbs);