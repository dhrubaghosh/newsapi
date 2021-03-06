import React from 'react'

function NewsArticle({ data }) {
    return (
        <div className="news">
            <h1 className="news__title"> {data.title} </h1>
            <p className="news__desc">{data.descriptioin}</p>
            <span className="news__author">{data.author}</span>
            <span className="news__published">{data.publishedAt}</span>
            <span className="news__source">{data.source.name}</span>
        </div>
    );
}

export default NewsArticle;
