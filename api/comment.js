import {instance,instanceWithAuth} from './index'

// 댓글 작성
export const createCommentAPI = (req) => instanceWithAuth('comments').post(`${req.postId}`,req.data)


// //회원가입 api
// export const sginUpAPI = data => instance('users').post('signup', data)