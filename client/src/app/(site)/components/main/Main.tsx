"use client";

import { useState } from "react";
import Modal from "@/components/modal/Modal";
import AstrolithCanvas from "@/components/canvas/AstrolithCanvas";
import "./main.css";

const Main = () => {
    const [isModal, setIsModal] = useState(false);

    return (
        <main className="main">
            <AstrolithCanvas setIsModal={setIsModal} />
            {isModal && <Modal setIsModal={setIsModal} />}
        </main>
    );
};

export default Main;
