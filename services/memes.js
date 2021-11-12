const RedditImageFetcher = require("reddit-image-fetcher");

export function getMeme() {
    
// fetch 1 meme
    return Promise.resolve(
        RedditImageFetcher.fetch({
        type: 'meme'
    }).then(result => {
        return result[0].image;
    }));
  }
  