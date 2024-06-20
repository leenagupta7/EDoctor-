import {createContext,useState,useEffect,useContext} from 'react';
export const SocketContext = createContext();
import io from 'socket.io-client';
import { useAuthContext } from './AuthContext';

export const useSocketContext=() =>{
    return useContext(SocketContext);
}

export const SocketContextProvider=({children})=>{
    
    const [socket,setSocket] = useState(null);
    const [onlineUsers,setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();
    const Baseurl=import.meta.env.VITE_API_BASE_URL;
    useEffect(()=>{
        if(authUser){
            const socket=io(`${Baseurl}`,{
                query:{
                    userId:localStorage.getItem('Id'),
                }});
            setSocket(socket);
            socket.on("getOnlineUsers",(users)=>{
                setOnlineUsers(users);
            })
            return ()=>socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[authUser]);
    return <SocketContext.Provider value={{socket,onlineUsers}}>{children}</SocketContext.Provider>
}
