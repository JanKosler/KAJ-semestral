import './card.css';

const Card = ({ bgColor, href, children }) => {
    if (!bgColor) {
        bgColor = "bg-white";
    }

    return (
        <a href={href}>
            <div className={`${bgColor} max-w-sm p-6 rounded-lg shadow`} >
                {children}
            </div >
        </a>
    );
}

export default Card;

