import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    appBar: {
        borderRadius: 5,
        boxShadow:'10px 10px',
        margin: '30px 0',
        paddingLeft:'10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        marginLeft: '25px',
      },
      [theme.breakpoints.down('sm')]:{
        mainContainer:{
          flesDirection : "column-reverse",
        },
      }

}));