'use client'

import React from 'react';
import {useRouter} from "next/navigation";
import Photo from "@/app/components/photo/photo.component";
import {photosStub} from "@/app/next-samples/intercepting-routes/photos.stub";
import Modal from "antd/es/modal/Modal";

interface PhotoModalParamsProps {
    params: {
        id: string;
    }
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PhotoModal = ({params}: PhotoModalParamsProps) => {
    const {id} = params;
    const photo = photosStub.find(p => p.id === id);
    const router = useRouter();

    if (!photo) {
        return <>Photo not found 1</>;
    }

    return (
        <Modal
            open={true}
            onCancel={() => {
                router.back()
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Photo id={photo?.id}/>
        </Modal>
    );
};

export default PhotoModal;