import { getMovies, getById } from "../db";

const resolvers = {
  Query: {
    movies: () => {
      console.log("THE MOVIES", getMovies);
      return getMovies();
    },
    movie: (_, { id }) => getById(id),
  },
};
export default resolvers;
