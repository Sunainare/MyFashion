const API_KEY = "5194cd2a53mshca53f7931585949p1c92a9jsn60253534929a";
const BASE_URL = "https://shein-xi-yin-data-service.p.rapidapi.com";

export const getPopularDresses = async () => {
    try {
        const response = await fetch(`${BASE_URL}/dress/popular`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'shein-xi-yin-data-service.p.rapidapi.com',
            },
        });
        if (!response.ok) {
            throw new Error("Failed to fetch popular dresses");
        }
        const data = await response.json();
        return data.results; // Adjust based on actual API response structure
    } catch (error) {
        console.error("Error fetching popular dresses:", error);
        throw error;
    }
};

export const searchDresses = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}/search/dress?query=${encodeURIComponent(query)}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'shein-xi-yin-data-service.p.rapidapi.com',
            },
        });
        if (!response.ok) {
            throw new Error("Failed to search dresses");
        }
        const data = await response.json();
        return data.results; // Adjust based on actual API response structure
    } catch (error) {
        console.error("Error searching dresses:", error);
        throw error;
    }
};