import Header from "../components/Header";
import commentItem from "../components/CommentItem";

// let list=[
//     {user:{id:'001',name:'John'},content:'很讚',ctime:'03-10 09:00'},
//     {user:{id:'002',name:'Mary'},content:'還不錯',ctime:'03-10 09:00'},
//     {user:{id:'003',name:'Alex'},content:'Good',ctime:'03-10 09:00'},
//     {user:{id:'004',name:'Brian'},content:'超棒',ctime:'03-10 09:00'},
// ]

function Comment(){
    return(
        <div>
            <h1>這裡是評論區</h1>
            <Header/>
            <div className="replyArea">
                <></>
            </div>
        </div>
    )
}

export default Comment;