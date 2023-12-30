import React from 'react';
import {photosStub} from "@/app/intercepting-routes/photos.stub";
import Photo from "@/app/components/photo/photo.component";

interface PhotoPageParams {
    params: {
        id: string
    };
}

const PhotoPage = ({params}: PhotoPageParams) => {
    const {id} = params;
    const photo = photosStub.find(p => p.id === id);
    if (!photo) {
        return <>Photo not found</>;
    }

    return (
        <Photo id={photo?.id}/>
    );
};

export default PhotoPage;