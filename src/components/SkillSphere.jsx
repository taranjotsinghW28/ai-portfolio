import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const skills = [
  { name: 'Python', color: '#3776ab' },
  { name: 'scikit-learn', color: '#f7931e' },
  { name: 'Pandas', color: '#150458' },
  { name: 'NumPy', color: '#013243' },
  { name: 'XGBoost', color: '#e26f00' },
  { name: 'Flask', color: '#000000' },
  { name: 'Streamlit', color: '#ff4b4b' },
  { name: 'Git', color: '#f05032' },
  { name: 'MySQL', color: '#4479a1' },
  { name: 'MLflow', color: '#0194e2' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'C++', color: '#00599c' },
]

function IconSphere() {
  const groupRef = useRef()

  const orbitIcons = useMemo(() => {
    return skills.map((skill, i) => {
      const radius = 2.5
      const phi = Math.acos(-1 + (2 * i) / skills.length)
      const theta = Math.sqrt(skills.length * Math.PI) * phi

      return {
        ...skill,
        position: [
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        ]
      }
    })
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial wireframe transparent opacity={0.15} color="#6366f1" />
      </mesh>

      <mesh>
        <sphereGeometry args={[1.7, 32, 32]} />
        <meshBasicMaterial transparent opacity={0.05} color="#a855f7" />
      </mesh>

      {orbitIcons.map((skill) => (
        <group key={skill.name} position={skill.position}>
          <mesh>
            <circleGeometry args={[0.3, 32]} />
            <meshBasicMaterial color={skill.color} transparent opacity={0.9} />
          </mesh>
          <mesh>
            <ringGeometry args={[0.35, 0.38, 32]} />
            <meshBasicMaterial color={skill.color} transparent opacity={0.3} />
          </mesh>
        </group>
      ))}

      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshBasicMaterial color="#6366f1" />
      </mesh>
    </group>
  )
}

export default function SkillSphere() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        <IconSphere />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}