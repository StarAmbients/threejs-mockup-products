import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'

const Backdrop = () => {
  return (
    <AccumulativeShadows
      position={[0, 0, -0.14]}
    >
      <RandomizedLight 
        amount={4}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop