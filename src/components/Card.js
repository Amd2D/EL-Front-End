
import React,{useState,useEffect} from 'react';
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
import {deleteItem,setAlert, getAllItems, updateItem} from "../actions/actions";
import {useDispatch,useSelector} from "react-redux"
import {Link} from "react-router-dom";

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
        alignSelf:'center',
        justifyContent:'center',
        textAlign:'center'
    },
    itemDescription:{
        marginBottom:"40px",
    },
    itemPrice:{
        marginBottom:"40px",
    },
    container:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        alignSelf:'center'
    },
    cards:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'space-around'
    },
    returnButton:{
        marginTop:'40px'
    },
    browseButton: {
        margin: theme.spacing(1),
        backgroundColor:'#0c274e',
        '&:hover': {
            backgroundColor: '#0c274e',
        },
    },
}));

export default function Items({name,id,type,price,img,desc}) {
    const classes = useStyles();


    const alOp=useSelector(state=>state.Item.alert_msg);
    const msg=useSelector(state=>state.Item.msg);

    const [newName,setName]=useState('');
    const [newType,setType]=useState('');
    const [newPrice,setPrice]=useState('');
    const [newImg,setImg]=useState('');
    const [newDesc,setDesc]=useState('');

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const dispatch=useDispatch();

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

    const handleDelete=()=>{
        dispatch(deleteItem(id));
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
        setType(e.target.value);
    }

    const handleUpdate=()=>{
        const data={
            id:id,
            name:newName,
            type:newType,
            price:newPrice,
            img:newImg,
            description:newDesc
        }
        console.log("dispatcing")
        dispatch(updateItem(data));
    }



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
                    onChange={setN}
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
                    onChange={setT}
                />
            </div>
            <div className={classes.inputField}>
                <p id="simple-modal-description" className={classes.inputLabel}>
                    Price:
                </p>
                <InputBase
                    placeholder="ex: 500, 1200, ..."
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={setP}
                />
            </div>
            <div className={classes.inputField}>
                <p id="simple-modal-description" className={classes.inputLabel}>
                    Description:
                </p>
                <InputBase
                    placeholder="ex: item specs, details, ..."
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={setD}
                />
            </div>
            <div className={classes.inputField}>
                <p id="simple-modal-description" className={classes.inputLabel}>
                    Image URL:
                </p>
                <InputBase
                    onChange={setI}
                    placeholder="copy and paste URL"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
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

    return (
        <div className={classes.container}>
        <div className={classes.cards}>
        <Card  className={classes.root}>
                <CardMedia
                    component="img"
                    alt={type}
                    height="100%"
                    maxwidth="100%"
                    image={img}
                    title={type}
                />
        </Card>
    <Card className={classes.root}>
            <CardContent>
                <div className={classes.itemTitle}>
                <Typography gutterBottom variant="h4" component="h2">
                    {type} - {name}
                </Typography>
                </div>
                <div className={classes.itemDescription}>
                <Typography variant="body2" color="textSecondary" component="p">
                    Description: {desc}
                </Typography>
                </div>
                <div className={classes.itemPrice}>
                <Typography gutterBottom variant="h5" component="h2">
                    Price: {price}$
                </Typography>
                </div>
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
                onClick={()=>handleDelete()}
            >
                Delete
            </Button>
        </CardActions>
    </Card>
        </div>
    <div className={classes.returnButton}>
        <Link to="/">
            <Button
                variant="contained"
                color="primary"
                className={classes.browseButton}
            >Back to Home page
            </Button>
        </Link>
    </div>
        </div>
    );
}
