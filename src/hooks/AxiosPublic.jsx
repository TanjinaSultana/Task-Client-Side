import axios from "axios";

const axiosPublic = axios.create({
    baseURL : "https://task-server-side-ten.vercel.app"
})
const useAxiosPublic = () =>{
    return [axiosPublic];
}
export default useAxiosPublic;