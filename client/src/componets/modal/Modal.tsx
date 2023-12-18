"use client";

import { useEffect, useState } from "react";
import { Web5 } from "@web5/api";
import "./modal.css";

interface ModalProps {
    setIsModal: (state: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ setIsModal }) => {
    const [web5, setWeb5] = useState<any>(null);
    const [aliceDid, setAliceDid] = useState<any>(null);

    useEffect(() => {
        const connect = async () => {
            const { web5: webFive, did: alcDid } = await Web5.connect();

            setWeb5(webFive);
            setAliceDid(alcDid);
        };

        connect();
    }, []);

    return (
        <div className="modal_container">
            <div
                className="modal_black_screen"
                onClick={(_) => setIsModal(false)}
            ></div>
            <div className="modal">
                <h3>Alice DID</h3>
                <div>{aliceDid}</div>
            </div>
        </div>
    );
};

export default Modal;
