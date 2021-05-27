import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useEffect} from 'react';
import { getPosts } from './actions/posts';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png'
import useStyles from './styles';
const App = (props)=>{
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch])
    const classes = useStyles();
    return(
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    Album
                </Typography>
                <img src={memories} className={classes.image} alt="memories" height = "60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justify = "space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId = {currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default App;