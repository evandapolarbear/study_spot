export const createComment = (comment, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: comment,
    success
  })
}
