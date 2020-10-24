import axios from './axiosApi';


export const createQuote = quote => {
  return axios.post('/quotes.json', quote);
};

export const getQuotes = category => {
  const url = category ? `/quotes.json?orderBy="category"&equalTo="${category.id}"` : '/quotes.json';
  return axios.get(url).then(response => {
    const quotes = response.data;
    return quotes ? Object.entries(quotes)
        .map(([id, quote]) => ({...quote, id})) : [];
  });
};

export const deleteQuote = quiteId => {
  return axios.delete(`/quotes/${quiteId}.json`);
};

export const isValid = quote => {
  const {author, text} = quote;
  return author.trim().length && text.trim().length;
};