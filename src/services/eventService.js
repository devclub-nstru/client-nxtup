import axios from "axios";


const getEvents = async () => {
    try {
        const response = await axios.get('https://9b04-115-244-141-202.ngrok-free.app/api/events', { headers: { "ngrok-skip-browser-warning": "69420" } });
        
        return response.data.data
        
    
    } catch (error) {
        console.error('Error fetching events:', error);
    }
};

       

export default getEvents;