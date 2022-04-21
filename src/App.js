import PropTypes from "prop-types";

function Movie({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <h4>{rating}/10</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const movieILike = [
  {
    id: 1,
    name: 'The Chronicles Of Narnia: The Lion, The Witch And The Wardrobe',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fecx.images-amazon.com%2Fimages%2FI%2F61QV9DVHVFL.jpg&f=1&nofb=1',
    rating: 7.41
  },
  {
    id: 2,
    name: 'Paul, Apostle Of Christ',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkoreatimes.net%2Fimages%2Fattach%2F115035%2F20181204-15125095.jpg&f=1&nofb=1',
    rating: 9.49
  },
  {
    id: 3,
    name: 'The Passion Of The Christ',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.wikirise.com%2Fwp-content%2Fuploads%2F2022%2F04%2FMovie-The-Passion-Of-The-Christ-2004-%25E2%2580%2593-Hollywood-Movie.webp&f=1&nofb=1',
    rating: 8.63
  },
  {
    id: 4,
    name: 'War Horse',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tanikal.com%2Fwp-content%2Fuploads%2F2020%2F03%2FWAR-HORSE.jpg&f=1&nofb=1',
    rating: 8.40
  },
  {
    id: 5,
    name: 'Vertical Limit',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.tvtropes.org%2Fpmwiki%2Fpub%2Fimages%2Fvertical_limit_2000_movie_poster.jpg&f=1&nofb=1',
    rating: 7.95
  }
];

function App() {
  return ( 
    <div>
      {movieILike.map(dish => (
        <Movie key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;