//Componentes / Propriedades

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      Enviar
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="Send 1" />
      <Button title="Send 2" />
      <Button title="Send 3" />
    </div>
  )
}

export default App
