import React, { useState, useEffect ,useRef} from 'react';
import NavigationIcon from '@mui/icons-material/Navigation';
import axios from 'axios';
import { format } from 'date-fns';
import { useSocketContext } from '../socketcontext';

const Message = ({ Id }) => {
  const {socket} = useSocketContext();
  const Baseurl = import.meta.env.VITE_API_BASE_URL;
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(Id)
  const lastMessageRef= useRef();
  //console.log(onlineUsers);
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behaviour:"smooth"})
    })
  })
  const sendMessage = async (e) => {
    e.preventDefault();
   // console.log('hey');
    try {
      const res = await axios.post(
        `${Baseurl}/api/message/send/${Id}`,
        { message: text },
        {
          headers: {
            'auth-token': localStorage.getItem('auth-token'),
            'Content-Type': 'application/json',
          },
        }
      );
      setText('');
      const data = res.data;
      //console.log('this', data);
      setMessages(prevMessages => [...prevMessages, data]);
      setText(''); // Clear input field after sending the message
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
      setMessages(prevMessages => [...prevMessages, newMessage])
    })
    return ()=>socket?.off('newMessage')
  },[socket,messages,setMessages])
  const getMessage = async () => {
    try {
      const res = await axios.get(`${Baseurl}/api/message/${Id}`, {
        headers: {
          'auth-token': localStorage.getItem('auth-token'),
          'Content-Type': 'application/json',
        },
      });
      const data = res.data;
      console.log('Fetched messages:', data);
      setMessages(data);
      console.log('Messages state after fetch:', messages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMessage();
  }, [Id]);

  return (
    <div>
      {isOnline?(<span>online</span>):(<></>)}
      <div className="border h-96 border-gray-300 flex-grow basis-1/3 p-4 flex flex-col justify-end">
        <div className="overflow-auto">
        {messages.map((msg) => (
            <div ref={lastMessageRef} key={msg._id} className={
              Id !== msg.receiverId
                ? 'my-2 rounded-lg flex justify-start'
                : 'my-2 rounded-lg flex justify-end'
            }>
              <div
                className={
                  Id !== msg.receiverId
                    ? 'p-2 rounded-md text-white font-bold bg-gray-600 w-36  relative'
                    : 'flex-end p-2 rounded-md text-white font-bold w-36 bg-green-900 relative'
                }
              >
                {msg.message}
                <div className="absolute bottom-0 right-0 text-xs text-gray-400">
                  {format(new Date(msg.createdAt), 'h:mm a')}
                </div>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="flex items-center space-x-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="p-2 rounded-lg flex-grow bg-gray-100"
            placeholder="Enter the message ..."
          />
          <button
            type="submit"
            className="bg-green-500 rounded-full rotate-90 p-1 flex items-center justify-center"
          >
            <NavigationIcon style={{ color: 'white' }} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Message;
