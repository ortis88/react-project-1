import { useState } from "react";
import Header from "../components/Header";

function BlockB({onGetMsgB}){
    const chiwawa="氣吉敗壞"
    return (
            <div>
                <button onClick={()=>onGetMsgB(chiwawa)}>傳送</button>
            </div>
            )
}

function BlockC({getMsg}){
   return <div>喵喵星人{getMsg}</div>;
}


function Homepage(){  

    const[msgB,setmsgB]= useState('')

    const getMsgB=(chiwawa)=>{
        console.log(chiwawa);
        setmsgB(chiwawa);
    }
    


    return(
        <div>
            <h1>這裡是首頁</h1>
            <Header/>
            <BlockB onGetMsgB={getMsgB}/>
            <BlockC getMsg={msgB}/>
        </div>
    );
}

export default Homepage;