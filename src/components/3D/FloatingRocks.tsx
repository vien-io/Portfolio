import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const ROCK_COUNT = 35;

export const FloatingRocks = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const { geometry, material, data } = useMemo(() => {
    // Low-poly asteroid
    const geometry = new THREE.IcosahedronGeometry(1, 1);

    // Give the vertices some irregularity
    const position = geometry.attributes.position;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      const z = position.getZ(i);

      const noise = 0.75 + Math.random() * 0.5;

      position.setXYZ(i, x * noise, y * noise, z * noise);
    }

    geometry.computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
      color: "#777777",
      roughness: 1,
      metalness: 0,
    });

    const data = Array.from({ length: ROCK_COUNT }, () => {
      const x = THREE.MathUtils.randFloatSpread(80);

      const y = THREE.MathUtils.randFloat(-3, 3) + Math.sin(x * 0.15) * 1.5;

      const z = THREE.MathUtils.randFloat(-6, 6);

      return {
        position: new THREE.Vector3(x, y, z),

        rotation: new THREE.Euler(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ),

        scale: THREE.MathUtils.randFloat(0.15, 0.65),

        rotationSpeed: new THREE.Vector3(
          THREE.MathUtils.randFloat(-0.3, 0.3),
          THREE.MathUtils.randFloat(-0.3, 0.3),
          THREE.MathUtils.randFloat(-0.3, 0.3),
        ),

        drift: new THREE.Vector3(
          THREE.MathUtils.randFloat(-0.02, 0.02),
          THREE.MathUtils.randFloat(-0.01, 0.01),
          THREE.MathUtils.randFloat(-0.01, 0.01),
        ),
      };
    });

    return {
      geometry,
      material,
      data,
    };
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((_, delta) => {
    const mesh = meshRef.current;

    if (!mesh) return;

    data.forEach((rock, i) => {
      rock.rotation.x += rock.rotationSpeed.x * delta;
      rock.rotation.y += rock.rotationSpeed.y * delta;
      rock.rotation.z += rock.rotationSpeed.z * delta;

      rock.position.x += rock.drift.x * delta;
      rock.position.y += rock.drift.y * delta;
      rock.position.z += rock.drift.z * delta;

      dummy.position.copy(rock.position);
      dummy.rotation.copy(rock.rotation);
      dummy.scale.setScalar(rock.scale);

      dummy.updateMatrix();

      mesh.setMatrixAt(i, dummy.matrix);
    });

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      position={[0, -58, -25]}
      args={[geometry, material, ROCK_COUNT]}
      frustumCulled={false}
    />
  );
};
