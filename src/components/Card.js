import React from 'react';
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
    root: {
        width: "45%",
        height: 400,
        borderRadius:"20px",
    },
    updateButton: {
        margin: theme.spacing(1),
        backgroundColor:'#FFBF00',
        '&:hover': {
            backgroundColor: '#FFBF00',
        },
        marginRight:'40px',
        marginLeft:'100px'
    },
    deleteButton: {
        margin: theme.spacing(1),
    },
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
        width:'100%'
    },
    inputLabel:{
        width:"20%",
        marginRight:"10%",
        marginLeft:"10%"
    },
    itemTitle:{
        marginBottom:"40px",
    },
    itemDescription:{
        marginBottom:"40px",
    },
    itemPrice:{
        marginBottom:"40px",
    },
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
            <div className={classes.inputField}>
                <p id="simple-modal-description" className={classes.inputLabel}>
                    Name:
                </p>    
                <InputBase
                    placeholder="ex: Lenovo, HP, ..."
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
                    placeholder="ex: Laptop, Console, ..."
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
                    placeholder="bruh"
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
                    placeholder="Browse a specific item..."
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
                    maxwidth="100%"
                    image='https://www.lenovo.com/medias/lenovo-laptop-gaming-legion-7-16in-amd-gallery-11.png?context=bWFzdGVyfHJvb3R8MTAzOTg1fGltYWdlL3BuZ3xoOWQvaDRkLzExNDg0MTMyNDA5Mzc0LnBuZ3w5ZTBkYzIwMmU4MjRkMTM1MTIzZjhhZTk2ZjFjNGJjMmQ3YTE5MWFjMzg4Y2RmZDk3YjZkM2E3Nzk0MjdjNjJj'
                    title="Laptop"
                />
        </Card>
            <Card className={classes.root}>
                <CardContent>
                    <div className={classes.itemTitle}>
                        <Typography gutterBottom={true} variant="h4" component="h2" align='center'>
                            Laptop - Lenovo Legion 7
                        </Typography>
                    </div>
                    <div className={classes.itemDescription}>
                        <Typography paragraph={true} gutterBottom={true} variant="body1" color="textSecondary"
                                    component="p">
                            Description: The Lenovo Legion 7i laptop is one hell of a machine. Powerful, great screen
                            and graphics, good sound, very good battery life, it ticks just about every box
                        </Typography>
                    </div>
                    <div className={classes.itemPrice}>
                        <Typography gutterBottom={true} variant="h5" component="h2" align='right'>
                            Price: 1800$
                        </Typography>
                    </div>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={handleOpen}
                        variant="contained"
                        color="primary"
                        className={classes.updateButton}
                        startIcon={<CloudUploadIcon/>}
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
                        startIcon={<DeleteIcon/>}
                    >
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}
