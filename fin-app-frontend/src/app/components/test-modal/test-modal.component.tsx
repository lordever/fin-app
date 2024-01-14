'use client'

import React from 'react';
import GFButton from "@/app/common/components/button/button.component";
import Modal from "antd/es/modal/Modal";
import {Typography} from "antd";

const TestModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <GFButton onClick={handleOpen}>Open modal</GFButton>
            <Modal
                open={open}
                onCancel={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <Typography id="modal-modal-title">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </>
            </Modal>
        </div>
    );
};

export default TestModal;