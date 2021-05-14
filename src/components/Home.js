import React from 'react';
import './Home.css';
import {Button} from '@material-ui/core';
import {CardActions} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import InputBase from '@material-ui/core/InputBase';
import {makeStyles} from "@material-ui/core/styles";
import Modal from '@material-ui/core/Modal';
import { Link } from "react-router-dom";
import {getAllItems,getItems} from "../actions/actions"
import {useDispatch,useSelector} from 'react-redux'

function getModalStyle() {
    const top = 50
    const left = 50

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
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    browseButton: {
        margin: theme.spacing(1),
        backgroundColor:'#0c274e',
        '&:hover': {
            backgroundColor: '#0c274e',
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
        width: 500,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    inputField:{
        display: 'flex',
        flexDirection:'row',
        width:"100%",
    },
    inputLabel:{
        width:"20%",
        marginRight:"10%",
        marginLeft:"10%"
    },
}));

export default function Home(){

    const dispatch=useDispatch();

    const classes = useStyles();

    const [type,setType]=React.useState('');
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const update=(e)=>{
        setType(e.target.value)
    }

    const handleSubmit=()=>{
        if(type===''){
            dispatch(getAllItems());
        }else{
            dispatch(getItems(type));
            setType('');
        }
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Enter new product details</h2>
            <div className={classes.inputField}>
                <p id="simple-modal-description" className={classes.inputLabel}>
                    Name:
                </p>
                <InputBase
                    placeholder="Add a Name"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <div className={classes.inputField}>
                <p id="simple-modal-description" className={classes.inputLabel}>
                    Type:
                </p>
                <InputBase
                    placeholder="Add a Type"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <div className={classes.inputField}>
                <p id="simple-modal-description" className={classes.inputLabel}>
                    Price:
                </p>
                <InputBase
                    placeholder="Add a Price"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <div className={classes.inputField}>
                <p id="simple-modal-description" className={classes.inputLabel}>
                    Description:
                </p>
                <InputBase
                    placeholder="Add a Description"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <div className={classes.inputField}>
                <p id="simple-modal-description" className={classes.inputLabel}>
                    Image URL:
                </p>
                <InputBase
                    placeholder="Add an Image URL"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <Button
                onClick={handleOpen}
                variant="contained"
                color="primary"
                className={classes.addButton}
                startIcon={<SaveIcon />}
            >Save
            </Button>
        </div>
    );

    return(
        <div className="homepage">
            <header className="header">
                <h1>
                    Welcome to our Electronic Store
                </h1>
            </header>
            <body className="body">
            <div className="descriptionBox">
            <p className="desc">
                This application features:
            </p>
                <ul className="description">
                    <li>
                        Adding a new product to the list of products
                    </li>
                    <li>
                        Browsing and optionally Filtering the list depending on the type of product
                    </li>
                    <li>
                        Updating or Deleting a product
                    </li>
                </ul>
            </div>
            <div className="inputs">
            <p>
                Filter Products by Type:
            </p>
            <InputBase
                placeholder="Laptop, Console, ..."
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={type}
                onChange={update}
            />
            </div>
            <Link to="/items">
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.browseButton}
                >Browse Products
                </Button>
            </Link>
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
