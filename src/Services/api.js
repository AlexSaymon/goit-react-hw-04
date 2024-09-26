import axios from "axios";
const ACCESS_KEY = "mdCHMsrJE1UYSJfXIPBncbmI6D-6jTO6JdmUzq3Wcgk";

export const fetchArticles = async (page = 0, query) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${query}&page=${page}&per_page=10`
  );
  return data;
};
