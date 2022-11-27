import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './NewsComponent.css'


const NewsComponent = () => {
const apiK = 'e116b06f4ab14f55b519a0911aedb536'
const [articles, setArticles] = useState([])

useEffect(() => {
    getNews();
}, []);

const getNews = async () => {
    const api = await fetch(
        `
https://newsapi.org/v2/everything?q=apple&from=2022-10-24&to=2022-10-24&sortBy=popularity&apiKey=${apiK}`
    ).catch((err) => {
        console.log(err)
    })
    const data = await api.json();
    setArticles(data.articles)
    // console.log(data)
}
  return (
    <div className='news-outer'>
        {articles.map((val,key) => {
            return <div key={key}>
                <div className='news-inner'>
                    <div className='card-body-news'>
                        <img src={val.urlToImage} alt={'news image'}></img>
                        <h4>{val.title}</h4>
                        <p>{val.description}</p>
                        <p>Published At : {val.publishedAt.slice(0,10)}</p>
                        <p>{val.author ? `${val.author} (${val.source.name})` : 'Unknown'}</p>
                        <a href={val.url}>More info..</a>
                    </div>
                </div>
            </div>
        })}
    </div>
  )
}

export default NewsComponent