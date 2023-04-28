import React, { useState } from "react";
import { newsfeedInitDataArray } from "../../utils/data/NewsfeedData";
import NewsItem from "./NewsItem";

function NewsfeedContainer() {
  const [newsfeedData, setNewsfeedData] = useState(newsfeedInitDataArray);
console.log('newsfeedData', newsfeedData);
  return (
    <section className="grid grid-rows-reg bg-neo-alt rounded-xl">
      <article className="grid text-center w-full">
        <h4 className="border-b-2 border-solid border-colour-pale py-2 text-xl">
          Newsfeed
        </h4>
      </article>

      <section className="grid">
        {newsfeedData.length > 0 ? (
          <ul className="grid gap-2 p-4 overflow-y-scroll">
            {newsfeedData.map((news, index) => {
              return (
                news.isViewed === false && (
                  <NewsItem
                    key={index}
                    newsfeedData={newsfeedData}
                    setNewsfeedData={setNewsfeedData}
                    news={news}
                  />
                )
              );
            })}
          </ul>
        ) : (
          <div>No News To Display</div>
        )}
      </section>
    </section>
  );
}

export default NewsfeedContainer;
