import axios from "axios";


const getAllFoods = async () => {
    const allFoodUrl = `${import.meta.env.VITE_API_URL}/all-foods`;
    try {
        const response = await axios.get(allFoodUrl);
        return response.data;
    } catch (error) {
        return {
            status: 'error',
            data: error.message
        };
    }
};



export default ({
    getAllFoods,
})

