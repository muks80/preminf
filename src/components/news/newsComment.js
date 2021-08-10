import { useContext } from 'react';
import { Comment, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { GoogleAuthContext } from '../../apis/googleAuthContext';
import { format } from 'timeago.js';

const NewsComment = ({comment}) => {
    const { signedIn, userId, reload, setReload } = useContext(GoogleAuthContext);

    const deleteButton = () => {
        if(userId === comment.authorId && signedIn) {
            return (
                <div>
                    <Link onClick={deleteComment} as='button' style={{color: '#cc3300', fontSize: 'small'}}>Delete Comment</Link>
                </div>
            )
        }
    }

    const deleteComment = async (e) => {
        e.preventDefault()
        await fetch('https://premjson.herokuapp.com/comments/' + comment.id, {
            method: 'DELETE'
        });
        setReload(!reload);
    }

    return(
        <Comment style={{marginBottom: '10px'}}>
            <Comment.Content>
                <Comment.Author style={{display: 'inline-block'}}>{comment.author}</Comment.Author>
                <Comment.Metadata><span>{format(comment.date)}</span></Comment.Metadata>
                <Comment.Text style={{marginTop: '10px', fontSize: 'medium'}}><p>{comment.newComment}</p></Comment.Text>
                <div>{deleteButton()}</div>
                <Divider/>
            </Comment.Content>
        </Comment>
    )
}

export default NewsComment;