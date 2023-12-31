import React from 'react';
import Photo from "@/app/components/photo/photo.component";
import {photosStub} from "@/app/next-samples/intercepting-routes/photos.stub";

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