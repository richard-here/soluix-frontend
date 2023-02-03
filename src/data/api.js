const BASE_URL = 'http://localhost:8080/api';

async function getProductList(options = { page: 1, limit: 10 }) {
  const url = `${BASE_URL}/product?page=${options.page}&limit=${options.limit}`;
  const response = await fetch(url, {
    method: 'GET',
    ...options,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseJson = await response.json();

  if (response.status !== 200) {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson };
}

export default getProductList;
