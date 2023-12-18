"use client";

import { useEffect, useState } from "react";
import "./modal.css";

interface ModalProps {
    setIsModal: (state: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ setIsModal }) => {
    const [web5, setWeb5] = useState<any>(null);
    const [aliceDid, setAliceDid] = useState<any>(null);

    useEffect(() => {
        const initWeb5 = async () => {
            // @ts-ignore
            const { Web5 } = await import("@web5/api");

            try {
                const { web5, did } = await Web5.connect({ sync: "5s" });

                setWeb5(web5);
                setAliceDid(did);

                if (web5 && did) {
                    console.log("Web5 initialized");
                }
            } catch (error) {
                console.error("Error initializing Web5:", error);
            }
        };

        initWeb5();
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
