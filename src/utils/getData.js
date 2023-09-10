import axios from "./axios";

export default async function getData(url) {
   try {
        const res = await axios.get(url)
        const data = await res?.data;
        if(data?.status === "success"){
            return {
                error:false,
                data:data?.data,
            }
        }
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return {
            error:true,
        };
    }
}
