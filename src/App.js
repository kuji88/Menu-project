import { Container } from "react-bootstrap";
import Catagory from "./components/Catagory";
import Hdr from "./components/Hdr";
import Items from "./components/Items";
import Navb from "./components/Navb";
import { Data } from "./components/Data";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";


function App() {
  const [jData, setData] = useState(Data)

  const cdata = [...new Set(Data.map((item)=> item.catagory))]
  

  const catafilter= (cat)=>{
   
    
    if(cat === "All"){
      setData(Data)
      
    }
    if(cat !== "All"){
      
     const f= Data.filter((item)=> item.catagory === cat)
     setData(f)
     
    }

  }
  const searchFilter= (word)=>{
    if(word !==""){
      const search= Data.filter((item)=> item.title === word)
      setData(search)
    }
  }

  return (
    <div className="font">
    <Fade>
      <Navb searchP={searchFilter}/>
      <Container>
      <Hdr/>
      <Catagory cfilter={catafilter} cdata={cdata}/>
      <Items itemfilter={jData}/>
        
      </Container>
      </Fade>
    </div>
  );
}

export default App;
