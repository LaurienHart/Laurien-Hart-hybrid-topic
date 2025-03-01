"use client"

import {useRef, useState} from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import type { Mesh } from "three"

function Cube(props: { position: [number, number, number] }) {
    // This reference gives us direct access to the THREE.Mesh object
    const meshRef = useRef<Mesh>(null!)

    const [hovered, setHover] = useState(false)


    // rotate the cube every frame
    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta * 0.2
        meshRef.current.rotation.y += delta * 0.1
    })

    return (
        <mesh
            {...props}
            ref={meshRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={hovered ? "hotpink" : "orange"}/>
        </mesh>
    )
}

// This component represents our 3D sphere
function Sphere(props: { position: [number, number, number] }) {
    // This reference gives us direct access to the THREE.Mesh object
    const meshRef = useRef<Mesh>(null!)

    const [active, setActive] = useState(false)

    //rotate the sphere every frame
    useFrame((state, delta) => {
        meshRef.current.rotation.x -= delta * 0.1
        meshRef.current.rotation.y -= delta * 0.15
    })

    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.2 : 1}
            onClick={() => setActive(!active)}
        >
            <sphereGeometry args={[0.75, 32, 32]} />
            <meshStandardMaterial color="lightblue"/>
        </mesh>
    )
}

export default function ThreeScene() {
    return (
        <Canvas className="h-full w-full">
            {/* Add ambient light to the scene */}
            <ambientLight intensity={0.5} />

            {/* Add our 3D objects */}
            <Cube position={[-1.5, 0, 0]} />
            <Sphere position={[1.5, 0, 0]} />

            {/* Add orbit controls to allow rotating the view with mouse */}
            <OrbitControls />
        </Canvas>
    )
}

