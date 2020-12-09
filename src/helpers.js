import axios from './axiosApi';

export const createQuote = (quote) => {
  return axios.post('/quotes.json', quote);
};

export const getQuotes = (category) => {
  const url = category
    ? `/quotes.json?orderBy="category"&equalTo="${category.id}"`
    : '/quotes.json';
  return axios.get(url).then((response) => {
    const quotes = response.data;
    return quotes
      ? Object.entries(quotes).map(([id, quote]) => ({ ...quote, id }))
      : [];
  });
};

export const deleteQuote = (quoteId) => {
  return axios.delete(`/quotes/${quoteId}.json`);
};

export const getQuoteDetails = (quoteId) => {
  return axios
    .get(`/quotes/${quoteId}.json`)
    .then((response) => ({ ...response.data, id: quoteId }));
};

export const updateQuote = (quote) => {
  return axios.put(`/quotes/${quote.id}.json`, quote);
};

export const isValid = (quote) => {
  const { author, text } = quote;
  return author.trim().length && text.trim().length;
};
