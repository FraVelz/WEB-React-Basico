// import { useState } from 'react'

import TicTaeToe from "./TicTacToe/pages/TicTocTae";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main className="min-h-screen bg-slate-950 w-full">
        <TicTaeToe />
      </main>
    </>
  )
}

// crear 3 en rayas completo con useEffect y useState, crear un useState para el
// cursor aparecer y no aparecer con circulo alrrededor

export default App
