import React from 'react';
import './FeaturedArticle.css'; // Import the CSS file with the correct filename

const featuredData = [
  {
    id: 1,
    name: "Stock & Flow: The Ideal Writing Mix for Your Online Content",
    description: "Stock is your evergreen, tentpole content that draws traffic from the moment of publish to the end of time. Flow is the filler, the stuff that keeps your blog churning or your social media streams full. Check out the article for details.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcQ3cc-KHRVHSO2yB4fwnimsGH94pDWQ4T-hVLSNPNOm7wigLhkVG5PdNuRToCMhgl5P0&usqp=CAU.jpg",
    stars: 4.5,
    author: "by Robin Sloane, Snark Market",
  },
  {
    id: 2,
    name: " David Ogilvy's 10 Most Valuable Lessons on Advertising",
    description: "David Ogilvy is widely considered the father of modern advertising, and his 10 most valuable lessons contain advice that worked when he wrote it in the 1960s and that work for online writers today.",
    image: "https://beomniscient.com/wp-content/uploads/2023/07/Gregory-Ciotti-1.jpg",
    stars: 3.8,
    author: "by Gregory Ciotti",
  },
  {
    id: 3,
    name: "Web Copy That Sells: 9 Can’t-Fail Formulas",
    description: "Pretty much the cream of the crop for copywriting formulas. Appetizer. Main course to follow.",
    image: "https://i.ytimg.com/vi/-JtjJb-umpk/hq720.jpg",
    stars: 4.2,
    author: "by Karri Stover",
  },
];

const FeaturedArticles = () => {
  return (
    <div className="featured-articles">
      <h2 className="featured-article-heading">Featured Articles</h2>
      <div className="article-list">
        {featuredData.map((article) => (
          <div className="article-card" key={article.id}>
            <img src={article.image} alt={article.name} className="article-image" />
            <div className="article-details">
              <h3>{article.name}</h3>
              <p>{article.description}</p>
              <div className="star-ratings">{article.stars} stars</div>
              <p>By {article.author}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="center-button">
        <button className="see-all-button">See All Articles</button>
      </div>
    </div>
  );
};

export default FeaturedArticles;
