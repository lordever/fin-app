import React from 'react';
import styles from "./photo.module.css";

interface PhotoProps {
    id: string;
}

const Photo = ({id}: PhotoProps) => {
    return (
        <div className={styles.container}>
            {id}
        </div>
    );
};

export default Photo;