import TicTaeToe from "./TicTacToe/page"
import Contador from "./Contador/page"

function App() {
  return (
    <>
      <main className="min-h-screen bg-slate-950 w-full">
        <Contador />
        <TicTaeToe />
      </main>
    </>
  )
}

// crear 3 en rayas completo con useEffect y useState, crear un useState para el
// cursor aparecer y no aparecer con circulo alrrededor

export default App
