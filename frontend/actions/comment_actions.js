export const CREATE_COMMENT = 'CREATE_COMMENT';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';


export const createComment = data => ({
  type: CREATE_COMMENT,
  data
})

export const receiveComment = data => ({
  type: RECEIVE_COMMENT,
  data
})
