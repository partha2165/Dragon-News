import { useLoaderData } from "react-router-dom"
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
    const {data: news} = useLoaderData();
    // console.log(news);
  return (
    <div>
      <h2 className="text-center mb-3 font-semibold">Dragon News Home</h2>
      <p className="text-gray-400 text-sm">News Available : ({news.length})</p>
      <div>
        {
            news.map(singleNews=><NewsCard news={singleNews} key={singleNews._id}></NewsCard> 

            )}
      </div>
    </div>
  )
}

export default CategoryNews

