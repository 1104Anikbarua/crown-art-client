import axios from "axios";
import { DrawingContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";


const UseInstructor = () => {
    const { user } = useContext(DrawingContext)
    const { isLoading: isInstructorLoading, data: isInstructor } = useQuery({
        enabled: !!user?.email,
        queryKey: ['instructor', user?.email], queryFn: async () => {

            const response = await axios.get(
                `http://localhost:5000/users/instructor?email=${user?.email}`,
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                }
            );
            // console.log(response)
            return response.data;
        }
    })
    console.log(isInstructor)
    return [isInstructor, isInstructorLoading];
};

export default UseInstructor;