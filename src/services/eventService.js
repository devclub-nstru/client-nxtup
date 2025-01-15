import axios from "axios";


const getEvents = async () => {
    try {
        const response = await axios.get('https://server-admin-nxtup-r754.onrender.com/api/events', { headers: { "ngrok-skip-browser-warning": "69420" } });
        
        return response.data.data
        
    
    } catch (error) {
        console.error('Error fetching events:', error);
    }
};

       

export default getEvents;