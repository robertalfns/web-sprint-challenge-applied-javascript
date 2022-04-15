import axios from 'axios';
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const Card = (article) => {
    const cardDiv = document.createElement('div');
    const cardHeadLine = document.createElement('div');
    const authorInfo = document.createElement('div');
    const photoCont = document.createElement('div');
    const photo = document.createElement('img');
    const name = document.createElement('span');
  
    cardDiv.classList.add('card');
    cardHeadLine.classList.add('headline');
    authorInfo.classList.add('author');
    photoCont.classList.add('img-container');
  
    cardHeadLine.textContent = article.headline;
    name.textContent = `By ${article.authorName}`;
  
    photo.src = article.authorPhoto;
  
    cardDiv.appendChild(cardHeadLine);
    cardDiv.appendChild(authorInfo);
    authorInfo.appendChild(photoCont);
    photoCont.appendChild(photo);
    authorInfo.appendChild(name);
  
    cardDiv.addEventListener('click', () => {
      console.log(cardHeadLine);
    });
  
    return cardDiv;
};

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cardAppender = (selector) => {
    axios.get("http://localhost:5001/api/articles")
    .then((resp) => {
      const object = resp.data.articles

      Object.keys(object).forEach(key => object[key].forEach(item => document.querySelector(selector).appendChild(Card(item))));

    })

    .catch((err) => {
      console.log(err);
    });
  };

export { Card, cardAppender }
