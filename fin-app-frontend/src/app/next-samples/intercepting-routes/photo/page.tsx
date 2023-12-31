import React from 'react';
import styles from "./page.module.css";
import Photo from "@/app/components/photo/photo.component";
import {photosStub} from "@/app/next-samples/intercepting-routes/photos.stub";

const PhotosPage = () => {
    return (
        <div className={styles.wrapper}>
            {photosStub.map(({id}) => <Photo key={id} id={id}/>)}
        </div>
    );
};

export default PhotosPage;