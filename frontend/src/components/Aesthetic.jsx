import '../css/Aesthetic.css'
import { useDressContext } from '../contexts/DressContext'

function Aesthetic({ dress }) {
    const { isFavourite, addToFavourites, removeFromFavourites } = useDressContext();
    const favourite = isFavourite(dress.id);

    function onFavouriteClick(e) {
        e.preventDefault(); // Prevent default click behavior
        if (favourite) {
            removeFromFavourites(dress.id);
        } else {
            addToFavourites(dress);
        }
    }

    return (
        <div className="aesthetic-dress"> 
            <div className="dress-poster">
                <img src={dress.photo} alt={dress.title} title={dress.title} />
                <div className="dress-overlay">
                    <button 
                        className={`favouriteS-btn ${favourite ? "active" : ""}`} 
                        onClick={onFavouriteClick}
                        style={{ color: favourite ? "red" : "white" }} // Change color dynamically
                    >
                        {favourite ? "❤️" : "♡"}
                    </button>
                </div>
            </div>
            <div className="dress-info">
                <h3>{dress.title}</h3> 
            </div> 
        </div>
    );
}

export default Aesthetic;
