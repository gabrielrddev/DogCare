import { useRouteError } from "react-router-dom";
import './styles.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="ErrorPageDiv">
      <h1 className="ErrorPageH1">Oops!</h1>
      <p className="ErrorPageP">Desculpe pelo ocorrido mas sua pagina nao foi encontrada.</p>
      <p>
        <i className="ErrorPageI">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}