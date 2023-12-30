import React from 'react';
import Link from "next/link";
import {photosStub} from "@/app/intercepting-routes/photos.stub";
import styles from "./page.module.css"

const InterceptingRoutesPage = () => {
    return (
        <div className={styles.container}>
            {photosStub.map(({id}) => (
                <Link key={id} href={`/intercepting-routes/photo/${id}`}>Photo {id}</Link>
            ))}
        </div>
    );
};

export default InterceptingRoutesPage;