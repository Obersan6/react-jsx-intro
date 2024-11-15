/*      Define a Tweet component which takes as props:
- the username of the user who wrote the tweet,
- the name of the user who wrote the tweet, 
- the date of the tweet, 
- and the message being tweeted.      */

const Tweet = (props) => {
    return (
        <div className="tweet">
            <p className="tweet-username">@{props.username}</p>
            <p className="tweet-name">{props.name}</p>
            <p className="tweet-date">{props.date}</p>
            <p className="tweet-message">{props.message}</p>
        </div>
    );
};
