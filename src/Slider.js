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
    const items = [1,2,3];
    const items_ = items.map(item=>(
        <div className='itemContainer'>
            <Items/>
        </div>
    ));
    console.log(items_)

    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Enter new product details</h2>
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
            />
            </div>
            <div className='inputField'>
            <p id="simple-modal-description">
                Image URL:
            </p>
            <InputBase
                placeholder="Browse a specific item..."
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

