"use client";

import { Canvas } from "@react-three/fiber";
import BoxElement from "../box-element/BoxElement";

interface AstrolithCanvasProps {
    setIsModal: (state: boolean) => void;
}

const AstrolithCanvas: React.FC<AstrolithCanvasProps> = ({ setIsModal }) => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {
                //@ts-ignore
                <BoxElement position={[1.2, 0, 0]} setIsModal={setIsModal} />
            }
        </Canvas>
    );
};

export default AstrolithCanvas;
