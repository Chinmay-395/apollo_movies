import { getMovies, getById, addMovie, deleteMovie } from "../db";

const resolvers = {
  Query: {
    movies: () => {
      console.log("THE MOVIES", getMovies);
      return getMovies();
    },
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};
export default resolvers;
