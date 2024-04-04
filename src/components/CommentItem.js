//style
import '../assets/sass/components/CommentItem.scss';


function commentItem(props){
    const{data}=props;

    return (
        <div>
            <div className='itemSpace'>
                <div className='textContainer'>
                    {data.map(
                        item=>(
                        <div>
                            <span className='userName'>{item.user.name}</span>
                            <p className='time'>{item.ctime}</p>
                            <p>{item.content}</p>
                        </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default commentItem;