import React from 'react';
import {Button} from '@material-ui/core';
import {CardActions} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import InputBase from '@material-ui/core/InputBase';
import {makeStyles} from "@material-ui/core/styles";
import Modal from '@material-ui/core/Modal';
import { Link } from "react-router-dom";

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
}));

export default function Home(){

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
