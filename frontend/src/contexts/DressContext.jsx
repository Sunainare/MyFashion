import { createContext, useState, useContext, useEffect } from "react";

const DressContext = createContext();

export const useDressContext = () => useContext(DressContext);

export const DressProvider = ({ children }) => {
    const [favourites, setFavourites] = useState(() => {
        // Load initial favorites from local storage
        const storedFavs = localStorage.getItem("favourites");
        return storedFavs ? JSON.parse(storedFavs) : [];
    });

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    const addToFavourites = (dress) => {
        setFavourites(prev => {
            const newFavs = [...prev, dress];
            localStorage.setItem("favourites", JSON.stringify(newFavs)); // Update immediately
            return newFavs;
        });
    };

    const removeFromFavourites = (dressId) => {
        setFavourites(prev => {
            const updatedFavs = prev.filter(dress => dress.id !== dressId);
            localStorage.setItem("favourites", JSON.stringify(updatedFavs)); // Update immediately
            return updatedFavs;
        });
    };

    const isFavourite = (dressId) => {
        return favourites.some(dress => dress.id === dressId);
    };

    const value = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite
    };

    return (
        <DressContext.Provider value={value}>
            {children}
        </DressContext.Provider>
    );
};
