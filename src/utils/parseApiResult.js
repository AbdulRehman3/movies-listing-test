export const parseApiResult = movies => {
  return movies.slice(0, 8).map(movieItem => {
    return {
      id: movieItem.id,
      name: movieItem.title,
      rating: movieItem.vote_average,
      releaseDate: movieItem.release_date,
      poster: `https://image.tmdb.org/t/p/w440_and_h660_face${movieItem.poster_path}`,
    };
  });
};

export const parseSingleItem = movieItem => {
  return {
    id: movieItem.id,
    name: movieItem.title,
    rating: movieItem.vote_average,
    releaseDate: movieItem.release_date,
    status: movieItem.status,
    languages: movieItem.spoken_languages,
    revenue: new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'USD',
    }).format(movieItem.revenue),
    poster: `https://image.tmdb.org/t/p/w440_and_h660_face${movieItem.poster_path}`,
    overview: movieItem.overview,
  };
};
