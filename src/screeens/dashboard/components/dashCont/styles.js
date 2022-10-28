export const styles = {
    box:{
        flex:1,
    },
    mBox:{
        flex:1,
        '@media (max-width: 499px)': {
           display:"none"
          },
    },
    boxL:{
        // background:"red",
        width:"75%",
        '@media (max-width: 1220px)': {
            width:"50%",
            '@media (max-width: 825px)': {
                width:"100%",
              },
          },
    },
    boxR:{
        width:"30%",
        '@media (max-width: 1220px)': {
            width:"50%",
            '@media (max-width: 825px)': {
                width:"100%",
              },
          },
    },
    box2:{
        display:"flex",
        p:4,
        '@media (max-width: 825px)': {
            flexDirection:"column-reverse",
            p:2,
          },
    },
    box3:{
        display:"flex",
        justifyContent:"space-between",
    },
    box4:{
        display:"flex",
        justifyContent:"space-between",
        '@media (max-width: 1220px)': {
            flexDirection:"column"
          },
    },
    paper1:{
        p:2, 
        py:3,
        borderRadius:3,
        display:"flex",
        width:"29%",
        justifyContent:"space-between",
        '@media (max-width: 1220px)': {
            width:"92%",
          },
    },
    paper2:{
        p:2, 
        borderRadius:3,
        my:3,
        display:"flex",
        justifyContent:"space-between",
        '@media (max-width: 1220px)': {
            flexDirection:"column",
            width:"92%"
          },
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
        width:"29%",
        '@media (max-width: 1565px)': {
            width:"92%",
          },
    },
    grid2:{
        display: "grid",
        gridTemplateColumns: "auto auto",
        height:"55%"
    }
}