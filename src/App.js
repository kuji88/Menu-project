import { Container } from "react-bootstrap";
import Catagory from "./components/Catagory";
import Hdr from "./components/Hdr";
import Items from "./components/Items";
import Navb from "./components/Navb";

function App() {
  return (
    <div className="font">
      <Navb/>
      <Container>
      <Hdr/>
      <Catagory/>
      <Items/>
      <Items/>
      <Items/>
        
      </Container>
    </div>
  );
}

export default App;
