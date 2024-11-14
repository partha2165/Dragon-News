// import { FaEye, FaStar } from 'react-icons/fa';

// const NewsCard = ({news}) => {
//   return (
//     <div className="card w-full bg-base-100 shadow-md">
//       <figure>
//         <img src={news.thumbnail_url} alt={news.title} className="w-full h-[650px] object-cover" />
//       </figure>
//       <div className="card-body">
//         <div className="flex items-center justify-between text-sm text-gray-500">
//           <div className="flex items-center">
//             <img src={news.author.img} alt="Author" className="w-8 h-8 rounded-full mr-2" />
//             <span>{news.author.name}</span>
//           </div>
//           <span>{new Date(news.author.published_date).toLocaleDateString()}</span>
//         </div>
        
//         <h2 className="card-title text-lg font-bold my-2">{news.title}</h2>

//         <p className="text-gray-700 text-sm">{news.details.slice(0, 100)}...</p>

//         <div className="flex items-center justify-between mt-4">
//           <div className="flex items-center space-x-2">
//             <FaStar className="text-yellow-400" />
//             <span className="text-sm font-semibold">{news.rating.number}</span>
//             <span className="text-xs text-gray-500">({news.rating.badge})</span>
//           </div>
          
//           <div className="flex items-center space-x-2">
//             <FaEye className="text-gray-400" />
//             <span className="text-sm text-gray-500">{news.total_view}</span>
//           </div>
//         </div>

//         <button className="btn btn-primary btn-sm mt-4">Read More</button>
//       </div>
//     </div>
//   );
// };

// export default NewsCard;

import { FaShareAlt, FaRegEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const NewsCard = (props = {}) => {
  const { news } = props || {};

  return (
    <div className=" p-4 bg-white rounded-lg shadow-md">
      {/* Author Information */}
      <div className="flex items-center mb-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{news.author.name}</p>
          <p className="text-sm text-gray-500">{news.author.published_date}</p>
        </div>
        <div className="ml-auto">
          <FaShareAlt className="text-gray-600" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-2">{news.title}</h2>

      {/* Thumbnail Image */}
      <img
        src={news.image_url}
        alt="Thumbnail"
        className="w-full  object-cover rounded-lg mb-4"
      />

      {/* Details */}
      <p className="text-gray-700 text-sm mb-4">
        {news.details.slice(0, 150)}...{" "}
        <span className="text-primary">Read More</span>
      </p>

      {/* Ratings and Views */}
      <div className="flex items-center justify-between text-gray-600 text-sm">
        {/* Rating */}
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              className={`text-yellow-500 ${
                i < Math.round(news.rating.number) ? "" : "opacity-50"
              }`}
            />
          ))}
          <span className="ml-2 font-semibold">{news.rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center">
          <FaRegEye className="mr-1" />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;


