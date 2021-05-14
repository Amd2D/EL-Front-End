import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Button} from '@material-ui/core';
import {CardActions} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Modal from "@material-ui/core/Modal";
import InputBase from "@material-ui/core/InputBase";
import SaveIcon from "@material-ui/icons/Save";

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
    root: {
        width: "40%",
        height: 400,
    },
    updateButton: {
        margin: theme.spacing(1),
        backgroundColor:'#FFBF00',
        '&:hover': {
            backgroundColor: '#FFBF00',
        },
    },
    deleteButton: {
        margin: theme.spacing(1),
    },
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

export default function Items({name,id,type,price,img,desc}) {
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
                className={classes.updateButton}
                startIcon={<SaveIcon />}
            >Update
            </Button>

        </div>
    );

    return (
        <>
        <Card  className={classes.root}>
                <CardMedia
                    component="img"
                    alt={type}
                    height="100%"
                    image={img}
                    title={type}
                />
        </Card>
    <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Description: {desc}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    Price: {price}
                </Typography>
            </CardContent>
        <CardActions>
            <Button
                onClick={handleOpen}
                variant="contained"
                color="primary"
                className={classes.updateButton}
                startIcon={<CloudUploadIcon />}
                >Update
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
            <Button
                variant="contained"
                color="secondary"
                className={classes.deleteButton}
                startIcon={<DeleteIcon />}
            >
                Delete
            </Button>
        </CardActions>
    </Card>
        </>
    );
}
