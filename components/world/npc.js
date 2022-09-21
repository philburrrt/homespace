import React, { useState, useEffect } from 'react'
import { Dialog } from './dialog'
import { DEG2RAD, useEth, useEngine } from 'hyperfy'

const schema = {
  id: 'Vendor',
  origin: 'one',
  views: {
    one: {
      text: 'Meow! This space is available for 0.2 ETH. \nAre you interested?',
      options: [
        {
          text: 'Yes',
          event: 'connect',
        },
        {
          text: 'No',
          goto: 'twoTwo',
        },
      ],
    },
    twoOne: {
      text: "Great! \nWe'll get it minted right away. \nSimply confirm the transaction!",
      options: [
        {
          text: 'Okay',
          goto: 'three',
        },
        {
          text: 'Nevermind',
          goto: 'twoTwo',
        },
      ],
    },
    twoTwo: {
      text: 'Ok, let me know if you change your mind.',
    },
    three: {
      text: 'Thanks for your purchase! \nYou can now access your new space.',
    },
    connect: {
      text: 'Please connect your wallet to continue.',
    },
  },
}

export function Tubby() {
  const [view, setView] = useState(false)
  const eth = useEth('rinkeby')
  const engine = useEngine()
  const [address, setAddress] = useState(null)

  let anim
  if (view) {
    anim = 'Talking'
  } else {
    anim = 'Breathing'
  }

  // function connect(e, setView) {
  //   if (e.avatar) {
  //     setAddress(e.avatar)
  //     console.log('address', e.avatar)
  //     setView('twoOne')
  //   } else {
  //     console.log('no address')
  //     setView('connect')
  //   }
  // }

  return (
    <>
      <Dialog
        position={[21.131, 0.02, -4.734]}
        schema={schema}
        near={3}
        onView={setView}
        onEvent={(e, setView) => {
          const _address = engine.getAvatar().address
          if (_address) {
            console.log('address', address)
            setView('twoOne')
          } else {
            console.log('no address')
            setView('connect')
          }
        }}
      >
        <billboard axis="y">
          <model
            src="tubby.glb"
            rotation={[0, 2 * DEG2RAD, 0]}
            scale={0.5}
            animate={anim}
          />
        </billboard>
      </Dialog>
    </>
  )
}
