import { useState } from "react";
import Aesthetic from "../components/Aesthetic";
import '../css/Home.css';
import grungeImg from '../assets/grunge.jpg';
import vscoImg from '../assets/vsco.jpg';
import cottageCoreImg from '../assets/cottage-core.jpg';
import baddieImg from '../assets/baddie.jpg';
import UploadImage from '../contexts/uploadImage'

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [dresses, setDresses] = useState([ 
        {id: 1, title: "Grunge", type: "Funk", photo: grungeImg},
        {id: 2, title: "VSCO", type: "Soft Girl", photo: vscoImg},
        {id: 3, title: "Cottage Core", type: "Floral", photo: cottageCoreImg},
        {id: 4, title: "Baddie", type: "IG grid", photo: baddieImg},
    ]);
    const [error, setError] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        // Filter the dresses based on the search query
        const filteredDresses = dresses.filter(dress =>
            dress.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        // If no dresses match, set an error
        if (filteredDresses.length === 0) {
            setError("No dresses found.");
        } else {
            setError(null); // Reset error if there are matching dresses
        }

        setDresses(filteredDresses); // Update dresses to filtered list
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for dress.."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <UploadImage/>

            {/* Category Block
            <div className="dresses-category-block">
                <div className="category">Grunge</div>
                <div className="category">VSCO</div>
                <div className="category">Cottage Core</div>
                <div className="category">Baddie</div>
            </div> */}

            {error ? (
                <p>{error}</p>
            ) : (
                <div className="dresses-grid">
                    {dresses.map((dress) => (
                        <Aesthetic dress={dress} key={dress.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;