import React from 'react';
import styles from "./page.module.scss";
import ShowcasesButton from "@/app/showcases/button/showcases-button.component";
import AlertShowcase from "@/app/showcases/alert/alert-showcase.component";
import NotificationShowcase from "@/app/showcases/notification/notification-showcase.component";
import TypographyShowcase from "@/app/showcases/typography/typography-showcase.component";
import BreadcrumbsShowcase from "@/app/showcases/breadcrumbs/breadcrumbs-showcase.component";
import DropdownShowcase from "@/app/showcases/dropdown/dropdown-showcase.component";
import StepsShowcase from "@/app/showcases/steps/steps-showcase.component";

const ShowcasesPage = () => {
    return (
        <>
            <h1>Showcases</h1>

            <div className={styles.showcaseField}>
                <ShowcasesButton/>
            </div>

            <div className={styles.showcaseField}>
                <AlertShowcase/>
            </div>

            <div className={styles.showcaseField}>
                <NotificationShowcase/>
            </div>

            <div className={styles.showcaseField}>
                <TypographyShowcase/>
            </div>

            <div className={styles.showcaseField}>
                <BreadcrumbsShowcase/>
            </div>

            <div className={styles.showcaseField}>
                <DropdownShowcase/>
            </div>

            <div className={styles.showcaseField}>
                <StepsShowcase/>
            </div>
        </>
    );
};

export default ShowcasesPage;