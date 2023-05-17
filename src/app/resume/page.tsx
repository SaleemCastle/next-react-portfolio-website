'use client'

import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function Resume() {
  return (
    <div className='text-center p-20'>
      <h1 style={{ fontSize:36 }}>Résumé</h1>
      <p>Interactive resume design</p>
      <p>Coming Soon!</p>

      <Player
        autoplay
        loop
        src={'/lottie/under-maintenance.json'}
        style={{ height: '250px', width: '250px', textAlign: 'center' }}
      >
        <Controls visible={ false } />
      </Player>
    </div>
  )
}

