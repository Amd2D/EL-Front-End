import './Slider.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Items from './components/Card'
import {Button} from '@material-ui/core';
import {CardActions} from '@material-ui/core';
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import SaveIcon from '@material-ui/icons/Save';
import InputBase from '@material-ui/core/InputBase';
import Modal from '@material-ui/core/Modal';
import bg from './mainBG.jpg'
import {useDispatch,useSelector} from "react-redux"

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    addButton: {
        margin: theme.spacing(1),
    },
    paper: {
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    inputField:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center'
    }
}));

export default function Slider() {
    const items=useSelector(state=>state.Item.items)
    const items_ = items.map(item=>(
        <div className='itemContainer'>
            <Items name={item.name} id={item.id}  type={item.type} price={item.price} img={item.img} desc={item.description} />
        </div>
    ));

    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    

    return (
            <AwesomeSlider
                fillParent={true}
                infinite={false}
                bullets={false}
            >
                {items_}
            </AwesomeSlider>
  );
}

