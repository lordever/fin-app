import React from 'react';
import Link from "next/link";
import styles from "./page.module.css"
import {photosStub} from "@/app/next-samples/intercepting-routes/photos.stub";

const InterceptingRoutesPage = () => {
    return (
        <div className={styles.container}>
            {photosStub.map(({id}) => (
                <Link key={id} href={`/next-samples/intercepting-routes/photo/${id}`}>Photo {id}</Link>
            ))}
        </div>
    );
};

export default InterceptingRoutesPage;