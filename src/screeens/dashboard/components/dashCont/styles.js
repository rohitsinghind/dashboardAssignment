export const styles = {
    box:{
        flex:1
    },
    boxL:{
        // background:"red",
        width:"75%"
    },
    boxR:{
        width:"25%"
    },
    box2:{
        display:"flex",
        p:4
    },
    box3:{
        display:"flex",
        justifyContent:"space-between",
    },
    paper1:{
        p:2, 
        py:3,
        borderRadius:3,
        display:"flex",
        width:"29%",
        justifyContent:"space-between",
    },
    paper2:{
        p:2, 
        borderRadius:3,
        my:3,
        display:"flex",
        justifyContent:"space-between",
    },
    paper3:{
        display:"flex",
        justifyContent:"center",
        // alignItems:"center",
        flexDirection:"column",
        px:2,
        minWidth:150,
        height:"100%",
        '@media (max-width: 1565px)': {
            minWidth:80,
          },
    },
    paper4:{
        display:"flex",
        // justifyContent:"center",
        // alignItems:"center",
        flexDirection:"column",
        p:2,
        borderRadius:3,
        minWidth:200,
        width:"29%"
    },
    grid2:{
        display: "grid",
        gridTemplateColumns: "auto auto",
        height:"55%"
    }
}