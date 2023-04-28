import React from "react";
// icons
import { RxCrossCircled } from "react-icons/rx";

function NewsItem({ news, setNewsfeedData, newsfeedData }) {
  const { id, title, content, isViewed, createdAt } = news;

  const readMoreFromArticle = () => {
    console.log("Coming soon");
  };

  const deleteNewsItemFromFeed = (news) => {
    news.isViewed = true;

    setNewsfeedData([...newsfeedData, news]);
  };

  return (
    <li
      onClick={readMoreFromArticle}
      className="bg-neo-alt cursor-pointer leading-5 h-full"
    >
      <article className="grid grid-cols-item h-full">
        <section className="p-1">
          <div>{title}</div>
          <div className="text-sm">{content}</div>
        </section>

        <section className="grid h-full">
          <div className="p-2 grid items-center h-full hover:scale-110 ease-in cursor-pointer">
            <RxCrossCircled
              onClick={() => deleteNewsItemFromFeed(news)}
              size={25}
            />
          </div>
        </section>
      </article>
    </li>
  );
}

export default NewsItem;
