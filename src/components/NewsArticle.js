import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addFavouriteAction, RemoveFromFavouriteAction } from '../redux/Actions';

function NewsArticle({ data }) {
  const { favourite } = useSelector((state) => state.news);
	const dispatch = useDispatch();

  function buttonClick(){
    dispatch(
      favourite.find((n) => n.url === data.url)
        ? RemoveFromFavouriteAction(data.url)
        : addFavouriteAction(data)
    )

    favourite.find((n) => n.url === data.url)
        ? console.log("removeclick")
        : console.log("saveclick")
    
  }

  return (
    <div className="news">
      <h1 className="news__title">{data.title}</h1>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
      <div className="news__buttons">
          <button
          onClick={(e) => {
            e.preventDefault();
            window.open(data.url, "_blank");
            }}
          >See More</button>
          <button
            onClick={() =>
              buttonClick()
            }
          >Save</button>
      </div>
    </div>
  );
}

export default NewsArticle;