import './card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img className="image" src={props.image} />
            <span className="title">{props.title}</span>
            <div className='information'>
                <span className="price">{props.comments}</span>
                <span className="price">{props.rating}</span>
            </div>
        </div>  
    )
};

export default Card;