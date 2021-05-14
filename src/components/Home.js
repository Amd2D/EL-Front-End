import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import {CardActions} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import InputBase from '@material-ui/core/InputBase';
import {makeStyles} from "@material-ui/core/styles";
import Modal from '@material-ui/core/Modal';
import { Link } from "react-router-dom";
import {getAllItems,getItems,setAlert,createItem} from "../actions/actions"
import {useDispatch,useSelector} from 'react-redux'

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

export default function Home(){

    const dispatch=useDispatch();
    const classes = useStyles();

    const alOp=useSelector(state=>state.Item.alert_msg);
    const msg=useSelector(state=>state.Item.msg);
    const [type,setType]=React.useState('');
    const [newName,setName]=useState('');
    const [newType,setTypes]=useState('');
    const [newPrice,setPrice]=useState('');
    const [newImg,setImg]=useState('');
    const [newDesc,setDesc]=useState('');

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    

    const update=e=>{
        setType(e.target.value)
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    if (alOp===true){
        
        alert(msg);
        dispatch(setAlert(false));
        dispatch(getAllItems());
       
    }


    const setN=e=>{
        setName(e.target.value)
    }

    const setD=e=>{
        setDesc(e.target.value)
    }

    const setI=e=>{
        setImg(e.target.value)
    }

    const setP=e=>{
        setPrice(e.target.value);
    }
    const setT=e=>{
        setTypes(e.target.value);
    }

    const handleUpdate=()=>{
        const data={
            name:newName,
            type:newType,
            price:newPrice,
            img:newImg,
            description:newDesc
        }
        dispatch(createItem(data));
    }
    


    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Enter updated product details</h2>
            <div className='inputField'>
                <p id="simple-modal-description">
                    Name: 
                </p>    
                <InputBase
                    placeholder="Browse a specific item..."
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    value={newName}
                    onChange={setN}
                />
            </div>

            <div className='inputField'>
                <p id="simple-modal-description">
                    Type:
                </p>
                <InputBase
                    placeholder="Browse a specific item..."
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    value={newType}
                    onChange={setT}
                />
            </div>
            <div className='inputField'>
                <p id="simple-modal-description">
                    Price:
                </p>
                <InputBase
                    placeholder="Browse a specific item..."
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    value={newPrice}
                    onChange={setP}
                />
            </div>
            <div className='inputField'>
                <p id="simple-modal-description">
                    Description:
                </p>
                <InputBase
                    placeholder="Browse a specific item..."
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    value={newDesc}
                    onChange={setD}
                />
            </div>
            <div className='inputField'>
                <p id="simple-modal-description">
                    Image URL:
                </p>
                <InputBase
                    onChange={setI}
                    placeholder="Browse a specific item..."
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    value={newImg}
                />
            </div>
            <Button
                onClick={()=>handleUpdate()}
                variant="contained"
                color="primary"
                className={classes.updateButton}
                startIcon={<SaveIcon />}
            >Update
            </Button>

        </div>
    );

    const handleSubmit=()=>{
        if(type===''){
            dispatch(getAllItems());
        }else{
            dispatch(getItems(type));
            setType('');
        }
    }

    

    return(
        <div className="homepage">
            <header className="header">
                <h1>
                    Welcome
                </h1>
            </header>
            <body className="body">
            <p>
                project description goes here...
            </p>
            <Link to="/items">
            <Button
                variant="contained"
                color="primary"
                className={classes.addButton}
                // startIcon={<SaveIcon />}
                onClick={()=>handleSubmit()}
            >Browse Products
            </Button>
            </Link>
            <InputBase
                placeholder="Name"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
            <InputBase
                placeholder="Type"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={type}
                onChange={update}
            />
            <CardActions>
                <Button
                    onClick={handleOpen}
                    variant="contained"
                    color="primary"
                    className={classes.addButton}
                    startIcon={<SaveIcon />}
                >Add Item
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
            </CardActions>
            </body>
        </div>
    );
};
