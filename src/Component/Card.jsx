import React, { useEffect, useState } from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth0 } from '@auth0/auth0-react';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const Card = ({ data, handlelike, handleunlike, handleDelete, handledislike, handleundislike }) => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const userId = user ? user.sub : undefined;
  const [timeAgo, setTimeAgo] = useState('');
  
  const getTimeAgo = (createdAt) => {
    const currentTime = new Date();
    const createdAtDate = new Date(createdAt);
    const elapsedMilliseconds = currentTime - createdAtDate;
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
    const elapsedMinutes = Math.floor(elapsedMilliseconds / (1000 * 60));
    const elapsedHours = Math.floor(elapsedMilliseconds / (1000 * 60 * 60));
    const elapsedDays = Math.floor(elapsedMilliseconds / (1000 * 60 * 60 * 24));
    const elapsedWeeks = Math.floor(elapsedMilliseconds / (1000 * 60 * 60 * 24 * 7));

    if (elapsedMinutes < 1) {
      return `${elapsedSeconds} seconds ago`;
    } else if (elapsedMinutes < 60) {
      return `${elapsedMinutes} minutes ago`;
    } else if (elapsedHours < 24) {
      return `${elapsedHours} hours ago`;
    } else if (elapsedDays < 7) {
      return `${elapsedDays} days ago`;
    } else {
      return `${elapsedWeeks} weeks ago`;
    }
  };

  useEffect(() => {
    if (data.createdAt) {
      const timeAgoString = getTimeAgo(data.createdAt);
      setTimeAgo(timeAgoString);
    }
  }, [data.createdAt]);

  return (
    <div className="m-2 md:m-4 h-fit flex py-5 px-5 flex-col col-span-full xl:col-span-6 bg-gradient-to-r from-[#434974] to-[#242949] shadow-lg rounded-lg border border-slate-700">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img className="h-8 w-8 rounded-full mr-2" src={data.picture} alt="Profile" />
          <div className="flex flex-col">
          <span className="text-white-800 font-semibold">{data.username}</span>
          </div>
         
        </div>
        {userId === data.userId && (
          <div>
            <DeleteIcon className="text-white cursor-pointer" onClick={() => handleDelete(data._id)} />
          </div>
        )}
      </div>
      <h2 className="text-lg md:text-2xl m-2 font-semibold font-kalam w-[20rem] md:w-[32rem]">{data.title}</h2>
      {data.image?(<div className="m-2">
        <img className="rounded h-[20rem] md:h-[32rem] w-[20rem] md:w-[32rem]" src={data.image} alt="Blog" />
      </div>):<></>}
      <p className="text-white-700 font-inter text-sm md:text-md m-2 w-[20rem] md:w-[32rem]">{data.description}</p>
      <div className="flex m-2 items-center justify-between text-white-900 ">
  <div>
    {data && data.like && data.like.includes(userId) ? (
      <ThumbUpIcon className="text-blue-400 cursor-pointer ml-4 mr-2" onClick={isAuthenticated ? () => { handleunlike(userId, data._id)}: loginWithRedirect} />
    ) : (
      <ThumbUpOffAltIcon className="text-gray-500 cursor-pointer ml-4 mr-2" onClick={isAuthenticated ? () => { handlelike(userId, data._id),handleundislike(userId, data._id) } : loginWithRedirect} />
    )}<span className="mr-4">{data.like.length}</span>
    {data && data.dislike && data.dislike.includes(userId) ? (
      <ThumbDownAltIcon className="text-red-400 cursor-pointer mr-2" onClick={isAuthenticated ? () => { handleundislike(userId, data._id) }: loginWithRedirect} />
    ) : (
      <ThumbDownOffAltIcon className="text-gray-500 cursor-pointer mr-2" onClick={isAuthenticated ? () => { handledislike(userId, data._id) , handleunlike(userId, data._id)}: loginWithRedirect} />
    )}
    <span>{data.dislike.length}</span>
  </div>
  <p className="text-sm md:text-md text-gray-400">{timeAgo}</p>
</div>

    </div>
  );
  
};

export default Card;
