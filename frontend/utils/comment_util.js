export const fetchComment = id => (
  $.ajax({
    method: 'GET',
    url: `/api/comments/${id}`,
    data: {id}
  })
);

export const fetchComments = productId => {
  return $.ajax({
    method: 'GET',
    url: `/api/comments`,
    data: { productId }
  })
};

export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: `/api/comments`,
    data: { comment }
  })
);

export const updateComment = comment => (
  $.ajax({
    method: 'PATCH',
    url: `/api/comments/${comment.id}`,
    data: { comment }
  })
);

export const deleteComment = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${id}`, 
    data: {id}
  })
);