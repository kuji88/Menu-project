import { Container } from "react-bootstrap";
import Hdr from "./components/Hdr";
import Navb from "./components/Navb";

function App() {
  return (
    <div className="font">
      <Navb/>
      <Container>
      <Hdr />
        
      </Container>
    </div>
  );
}

export default App;
