import axios from './axiosApi';


export const createQuote = quote => {
  return axios.post('/quotes.json', quote);
};

export const isValid = quote => {
  const {author, text} = quote;
  return author.trim().length && text.trim().length;
};