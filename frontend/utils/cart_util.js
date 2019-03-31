export const fetchCarts = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/carts`,
    data: {userId}
  })
};

export const createCart = cart => {
  return $.ajax({
    method: 'POST',
    url: `/api/carts`,
    data: { cart }
  })
};

export const deleteCart = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/carts/${id}`,
    data: { id }
  })
};

export const fetchCart = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/carts/${id}`,
    data: { id }
  })
};