import React, { FC, useState, useEffect } from "react";
import { Text } from "../Typhography/Typography";
import Image from "next/image";

interface Article {
  title: string;
  author: string;
}

interface NewsProps {
  articles: Article[];
}

const NewsComponent: FC<NewsProps> = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=tesla&from=2023-10-13&sortBy=publishedAt&apiKey=b9a63a854718406d8dea9e9284c1143c`
        );
        const json = await response.json();
        setArticles(json);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-screen border border-slate-100">
      <div className="bg-blue-800 p-5">
        <Text
          variant="small"
          className="text-white uppercase text-center"
          textWeight="bold"
        >
          Trending News
        </Text>
      </div>
      <div className="bg-white">
        {articles ? (
          <div>
            <div>
              <img src="/assets/pexels-pixabay-164527.jpg" className="h-[50px] absolute" alt="img"/>
              <Text variant="small">Money value</Text>
              {/* <Text variant="small">Author: {data.articles.author}</Text> */}
            </div>
          </div>
        ) : (
          <p>loading</p>
        )}
      </div>
      <div>
        <button className="bg-base-100 py-3 px-10 text-white font-lexend">
          Read more
        </button>
      </div>
    </div>
  );
};

export default NewsComponent;
