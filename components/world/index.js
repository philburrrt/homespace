import React from 'react'

export default function World() {
  return (
    <environment>
      <background color={0x10141d} />
      <climbing />
      <gliding />
      <rigidbody>
        <model src="homespace.glb" scale={0.5} />
      </rigidbody>
      <spawn position={[2.332, 0.041, -0.024]} rotation={-90} />
    </environment>
  )
}
