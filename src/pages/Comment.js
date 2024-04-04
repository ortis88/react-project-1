import { useState } from "react";
import '../assets/sass/pages/Comment.scss'
import Header from "../components/Header";
import CommentItem from "../components/CommentItem";

const list=[
    {user:{id:'001',name:'John'},content:'很讚',ctime:'03-10 09:00'},
];

function Comment(){

    const [user, setUser]= useState('');

    return(
        <div>
            <h1>這裡是評論區</h1>
            <Header/>
            <div className="wrap" style={{margin:'auto',maxWidth:'1200px'}}>
                <div className="inputArea">
                    <div className="userInput">
                        Name：
                        <input type="text" 
                    value={user}
                    onChange={(e)=>{setUser(e.target.value)}}/>
                    </div>
                    <div className="conInput">
                        <textarea/>
                    </div>
                </div>
                <div className="replyArea">
                    <CommentItem data={list}/>
                </div>
            </div>
        </div>
    )
}

export default Comment;