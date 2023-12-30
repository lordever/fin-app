import React from 'react';
import styles from "./page.module.css";
import {photosStub} from "@/app/intercepting-routes/photos.stub";
import Photo from "@/app/components/photo/photo.component";

const PhotosPage = () => {
    return (
        <div className={styles.wrapper}>
            {photosStub.map(({id}) => <Photo key={id} id={id}/>)}
        </div>
    );
};

export default PhotosPage;