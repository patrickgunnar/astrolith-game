"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

interface BoxElementProps {
    children: React.ReactNode;
    setIsModal: (state: boolean) => void;
}

const BoxElement: React.FC<BoxElementProps> = (props) => {
    const { setIsModal } = props;
    const boxRef: any = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame((_, delta) => {
        if (boxRef.current && boxRef.current) {
            boxRef.current.rotation.x += delta;
        }
    });

    return (
        <mesh
            {...props}
            ref={boxRef}
            scale={1}
            onClick={(_) => setIsModal(true)}
            onPointerOver={(_) => setHovered(true)}
            onPointerOut={(_) => setHovered(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? "red" : "blue"} />
        </mesh>
    );
};

export default BoxElement;
