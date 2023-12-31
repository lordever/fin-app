'use client'

import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {useRouter} from "next/navigation";
import {photosStub} from "@/app/[lang]/intercepting-routes/photos.stub";
import Photo from "@/app/[lang]/components/photo/photo.component";

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
            onClose={() => {router.back()}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Photo id={photo?.id}/>
            </Box>
        </Modal>
    );
};

export default PhotoModal;