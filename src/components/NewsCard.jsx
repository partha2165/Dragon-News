import { FaEye, FaStar } from 'react-icons/fa';

const NewsCard = ({news}) => {
  return (
    <div className="card w-full bg-base-100 shadow-md">
      <figure>
        <img src={news.thumbnail_url} alt={news.title} className="w-full h-[650px] object-cover" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <img src={news.author.img} alt="Author" className="w-8 h-8 rounded-full mr-2" />
            <span>{news.author.name}</span>
          </div>
          <span>{new Date(news.author.published_date).toLocaleDateString()}</span>
        </div>
        
        <h2 className="card-title text-lg font-bold my-2">{news.title}</h2>

        <p className="text-gray-700 text-sm">{news.details.slice(0, 100)}...</p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <FaStar className="text-yellow-400" />
            <span className="text-sm font-semibold">{news.rating.number}</span>
            <span className="text-xs text-gray-500">({news.rating.badge})</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <FaEye className="text-gray-400" />
            <span className="text-sm text-gray-500">{news.total_view}</span>
          </div>
        </div>

        <button className="btn btn-primary btn-sm mt-4">Read More</button>
      </div>
    </div>
  );
};

export default NewsCard;
