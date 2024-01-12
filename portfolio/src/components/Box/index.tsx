"use client";
import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import type { HTMLMesh } from "three/examples/jsm/Addons.js";
import * as THREE from "three";
import im1 from "../../../public/commercial_projects/samsung.png";
import im2 from "../../../public/commercial_projects/doritos.png";
import im3 from "../../../public/commercial_projects/indeed.png";
import im4 from "../../../public/commercial_projects/salesforce.png";

const Box = ({
  wireframe = false,
  setSide,
  ...props
}: {
  wireframe?: boolean;
  setSide: (s: string) => void;
}) => {
  const [hovered, setHovered] = useState<string>("");
  const [rotate, setRotate] = useState(true);

  const ref = useRef<HTMLMesh>(null);

  useFrame((_, delta) => {
    if (rotate && ref.current) {
      ref.current.rotation.y += delta * 0.3;
      const formattedRotation = ref.current.rotation.y % (Math.PI * 2);
      (2 * Math.PI) / 4;
      ((2 * Math.PI) / 4) * 2;
      ((2 * Math.PI) / 4) * 3;
      ((2 * Math.PI) / 4) * 4;

      if (
        formattedRotation > ((2 * Math.PI) / 4) * 4 - Math.PI / 4 ||
        formattedRotation < (2 * Math.PI) / 4 - Math.PI / 4
      ) {
        setSide("front");
      } else if (
        formattedRotation > (2 * Math.PI) / 4 - Math.PI / 4 &&
        formattedRotation < ((2 * Math.PI) / 4) * 2 - Math.PI / 4
      ) {
        setSide("left");
      } else if (
        formattedRotation > ((2 * Math.PI) / 4) * 2 - Math.PI / 4 &&
        formattedRotation < ((2 * Math.PI) / 4) * 3 - Math.PI / 4
      ) {
        setSide("back");
      } else if (
        formattedRotation > ((2 * Math.PI) / 4) * 3 - Math.PI / 4 &&
        formattedRotation < ((2 * Math.PI) / 4) * 4 - Math.PI / 4
      ) {
        setSide("right");
      }
    }
    if (!rotate && ref.current) {
      if (hovered === "front") {
        ref.current.rotation.y = 0;
        setSide("front");
      } else if (hovered === "back") {
        ref.current.rotation.y = Math.PI;
        setSide("back");
      } else if (hovered === "left") {
        ref.current.rotation.y = Math.PI / 2;
        setSide("left");
      } else if (hovered === "right") {
        ref.current.rotation.y = Math.PI / -2;
        setSide("right");
      }
    }
  });
  const textureLoader = useMemo(() => {
    return new THREE.TextureLoader();
  }, []);

  const cubeTexture = useMemo(() => {
    return [im1.src, im2.src, im3.src, im4.src].map((item) => {
      return textureLoader.load(item);
    });
  }, [textureLoader]);

  return (
    <>
      <mesh
        ref={ref}
        onPointerOver={() => {
          setRotate(false);
        }}
        onPointerLeave={() => setRotate(true)}
      >
        <mesh {...props} position={[0, 0.5, 0]} rotation-x={Math.PI / -2}>
          <planeGeometry />
          <meshBasicMaterial color="red" />
        </mesh>
        <mesh {...props} position={[0, -0.5, 0]} rotation-x={Math.PI / 2}>
          <planeGeometry />
          <meshBasicMaterial color="blue" />
        </mesh>
        <mesh
          {...props}
          position={[0, 0.0, 0.5]}
          onPointerOver={() => {
            setHovered("front");
          }}
        >
          <planeGeometry />
          <meshBasicMaterial map={cubeTexture[0]} toneMapped={false} />
        </mesh>
        <mesh
          {...props}
          position={[0, 0, -0.5]}
          rotation-y={Math.PI}
          onPointerOver={() => {
            setHovered("back");
          }}
        >
          <planeGeometry />
          <meshBasicMaterial map={cubeTexture[1]} toneMapped={false} />
        </mesh>
        <mesh
          {...props}
          position={[0.5, 0, 0]}
          rotation-y={Math.PI / 2}
          onPointerOver={() => {
            setHovered("right");
          }}
        >
          <planeGeometry />
          <meshBasicMaterial map={cubeTexture[2]} toneMapped={false} />
        </mesh>
        <mesh
          {...props}
          position={[-0.5, 0, 0]}
          rotation-y={Math.PI / -2}
          onPointerOver={() => {
            setHovered("left");
          }}
        >
          <planeGeometry />
          <meshBasicMaterial map={cubeTexture[3]} toneMapped={false} />
        </mesh>
      </mesh>
    </>
  );
};

export default Box;
