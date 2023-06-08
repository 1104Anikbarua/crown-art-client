import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { DrawingContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';


const UseAdmin = () => {
    const { user } = useContext(DrawingContext)
    const { isLoading: isAdminLoading, data: isAdmin } = useQuery({
        enabled: !!user?.email,
        queryKey: ['admin', user?.email], queryFn: async () => {

            const response = await axios.get(
                `http://localhost:5000/users/admin?email=${user?.email}`,
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
    console.log(isAdmin)
    return [isAdmin, isAdminLoading];
};

export default UseAdmin;