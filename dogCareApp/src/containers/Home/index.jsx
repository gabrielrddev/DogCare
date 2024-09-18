import HomeLogo from "../../assets/imageDogCareHome.png";
import * as C from "./styles";

function Home() {
  return (
    <C.Container>
      <C.HomeImg src={HomeLogo} alt="logo da home" />

      <C.TextContainer>
        <C.Title>DogCare</C.Title>
        <C.Text>
          Nós cuidamos do seu pet com carinho e diversão durante o dia, para que
          você possa se concentrar no seu trabalho com tranquilidade.
        </C.Text>
        <C.Button>Saiba mais</C.Button>
      </C.TextContainer>
    </C.Container>
  );
}

export default Home;
