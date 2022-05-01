export const sortFunction = (event, movies) => {
  switch (event.target.value) {
    case "name_asc":
      const sort_asc = movies.sort((a, b) => {
        let x = a.original_title;
        let y = b.original_title;
        return x === y ? 0 : x > y ? 1 : -1;
      });
      return sort_asc;
    case "name_desc":
      const sort_name_desc = movies.sort((a, b) => {
        let x = a.original_title;
        let y = b.original_title;
        return x === y ? 0 : x < y ? 1 : -1;
      });
      return sort_name_desc;
    case "rating_high":
      const sort_rating_high = movies.sort((a, b) => {
        return b.vote_average - a.vote_average;
      });
      return sort_rating_high;
    case "rating_low":
      const sort_rating_low = movies.sort((a, b) => {
        return a.vote_average - b.vote_average;
      });
      return sort_rating_low;
    default:
      return;
  }
};
