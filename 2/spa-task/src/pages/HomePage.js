import React from 'react';
import Article from '../components/Article';
const articles = [
 {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
 },
 {
    id: 2,
    title: "Wielki wybuch",
    author: "Jonasz Kadzidło",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
 },
 {
    id: 3,
    title: "Klawiatura wifi",
    author: "Katarzyna Skura",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
 },
 {
    id: 4,
    title: "Jakdojade",
    author: "Robert M",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
 }
]
const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    return (
        <div className='home'>
            {artList}
            </div>
    )
}

export default HomePage;