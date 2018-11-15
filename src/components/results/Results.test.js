import Results from './Results';

describe('Results Component', () => {
  it('should be a results', () => {
    const apiDemo = `{
      "articles": [
      {
          "source": {
              "id": "the-new-york-times",
              "name": "The New York Times"
          },
          "author": "PIA PETERSON and CHRIS MAGGIO",
          "title": "O.M.G. Look at That Dog!",
          "description": "At the Groom Expo, the world’s largest creative grooming industry event, held in Hershey, Pa., dogs are every color of the rainbow. But the practice is not without its critics.",
          "url": "https://www.nytimes.com/2018/10/20/style/dog-creative-grooming.html",
          "urlToImage": "https://static01.nyt.com/images/2018/10/20/autossell/20dog-groomers8/20dog-groomers8-facebookJumbo.jpg",
          "publishedAt": "2018-10-20T09:00:14Z",
          "content": "At the Groom Expo there are poodles everywhere: poodles dyed a kaleidoscope of colors, poodles with tribal designs shaved into their fur, a poodle that is shaved and dyed to look like a reindeer with a fawn carved into its side, a poodle whose hair is dyed in… [+1272 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Lifehacker.com"
          },
          "author": "Nick Douglas",
          "title": "How to Win Over Someone Else's Cat",
          "description": "Cats aren’t dogs. And if you want to make friends with a new cat, you don’t treat it like a dog. You patiently figure out what works for this particular cat, and you don’t expect it to work every time. But the slow process of befriending a cat makes it deeply…",
          "url": "https://lifehacker.com/how-to-win-over-someone-elses-cat-1830434400",
          "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/s--JLdZq7vU--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/zxef6myamigmnh9aoasi.jpg",
          "publishedAt": "2018-11-14T18:00:00Z",
          "content": "Cats arent dogs. And if you want to make friends with a new cat, you dont treat it like a dog. You patiently figure out what works for this particular cat, and you dont expect it to work every time. But the slow process of befriending a cat makes it deeply re… [+811 chars]"
      }
    ]}`;

    const results = new Results({
      results: JSON.parse(apiDemo).articles,
      totalCount: 100,
      query: 'dog'
    });
    expect(results.render()).toMatchSnapshot();
  });
});
