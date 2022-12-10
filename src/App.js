import { Container } from "react-bootstrap";
import Catagory from "./components/Catagory";
import Hdr from "./components/Hdr";
import Items from "./components/Items";
import Navb from "./components/Navb";
import { Data } from "./components/Data";
import { useState } from "react";


function App() {
  const [jData, setData] = useState(Data)



  const catafilter= (cat)=>{
    const arr2= jData.filter((item) =>item.catagory === cat)

    if(cat === "All"){
      setData(Data)
    }
    else{setData(arr2)}
  }


  
  return (
    <div className="font">
      <Navb/>
      <Container>
      <Hdr/>
      <Catagory cfilter={catafilter}/>
      <Items itemfilter={jData}/>
        
      </Container>
    </div>
  );
}

export default App;
