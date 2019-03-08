export const fetchCarts = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/carts`,
    data: {userId}
  })
};

export const createCart = cart => (
  $.ajax({
    method: 'POST',
    url: `/api/carts`,
    data: { cart }
  })
);

export const deleteCart = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/carts/${id}`,
    data: { id }
  })
);