import './Slider.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Items from './components/Card'
import React from "react";
import {useDispatch,useSelector} from "react-redux"

export default function Slider() {
    const items=useSelector(state=>state.Item.items)
    const items_ = items.map(item=>(
        <div className='itemContainer'>
            <Items name={item.name} id={item.id}  type={item.type} price={item.price} img={item.img} desc={item.description} />
        </div>
    ));
    console.log(items_)

    return (
            <AwesomeSlider
                fillParent={true}
                infinite={false}
                bullets={false}
            >
                {/*{items_}*/}
                <div className='itemContainer'><Items /></div>
                <div className='itemContainer'><Items /></div>
            </AwesomeSlider>
  );
}

