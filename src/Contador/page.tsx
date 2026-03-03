import { useContador } from "./hooks/useContador";

import { Container } from "../components/Container";

import { Alert } from "./components/Alert";
import { Button } from "./components/Button";
import { MessageDisplay } from "./components/MessageDisplay";

import { getCounterMessage } from "./utils/counterHelpers";

export default function Contador() {
  const { count, alert, incrementar, decrementar } = useContador();
  const message = getCounterMessage(count);

  return (
    <div className="h-screen w-screen bg-transparent flex justify-center items-center">
      <Alert visible={alert} />

      <Container className="col-span-2 grid grid-cols-2 gap-10">
        <p className="col-span-2 text-2xl text-center font-bold">Numero: {count}</p>

        <Button onClick={decrementar}>
          - Decrementar
        </Button>

        <Button onClick={incrementar}>
          + Incrementar
        </Button>
      </Container>

      <MessageDisplay message={message} />
   </div>
  );
}
