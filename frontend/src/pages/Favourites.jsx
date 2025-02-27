import '../css/Favourites.css'
import {useDressContext} from "../contexts/DressContext"
import Aesthetic from "../components/Aesthetic"
function Favourites(){

    const {favourites} = useDressContext();

    if(favourites){
        return( 
            <div className="favourites">
                <h2>Your favourites</h2>
            <div className="dresses-grid">
            {favourites.map((dress) => (
                <Aesthetic dress={dress} key={dress.id} />
            ))}
            </div>
            </div>
        );
    }

    return <div className="favourites-empty">
        <h2>No Favourite Aesthetic yet</h2>
        <p>Start adding dress to your favourites and they will appear here</p>

    </div>
}

export default Favourites