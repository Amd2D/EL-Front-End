import './App.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Card from './components/Card'
import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getAllItems} from "./actions/actions"

function App() {

    const items=useSelector(state=>state.Item.items)

    const dispatch=useDispatch()
    
    let empty=true


    useEffect(()=>{
        console.log("in useEffect")
        dispatch(getAllItems())
    },[])

   let item=(
    items.map(item=>(   
        <div  className={"itemContainer"} key={item.id}>
            <Card/>
        </div>
     ))
   )
   
    return ( 
            <AwesomeSlider
                fillParent={true}
                infinite={false}
                bullets={false}
            >
                {/* <div className="homepage">
                    <header className="header">
                        <h1>
                            Welcome
                        </h1>
                    </header>
                    <body className="body">
                    <p>
                        project description goes here...
                    </p>
                    <p>
                        Browse items
                    </p>
                    <p>
                        Add new item
                    </p>
                    </body>
                </div> */}
               
               {item}
               
            </AwesomeSlider>
                
  );
}


export default App;
