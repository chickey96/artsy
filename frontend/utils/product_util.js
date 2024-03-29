export const createProduct = formData => (
  $.ajax({
    method: 'POST',
    url: `/api/products`,
    data: formData,
    contentType: false,
    processData: false,
  })
);

export const fetchProduct = id => (
  $.ajax({
    method: 'GET',
    url: `/api/products/${id}`
  })
);

export const fetchProducts = category => (
  $.ajax({
    method: 'GET',
    url: '/api/products',
    data: {category}
  })
);

export const searchProducts = query => {
 return( $.ajax({
    method: 'GET',
    url: `search/${query}`,
    data: {query}
  })
 )}