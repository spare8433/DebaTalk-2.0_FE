import {instance, instanceWithAuth} from './index'

// post 등록
export const createPostAPI = data => instanceWithAuth('posts').post('',data)

// post 불러오기
export const getPostsAPI = querry => instanceWithAuth('posts').get(
  `all?limit=${querry.limit}&skip=${querry.skip}&key=${querry.key}&title=${querry.title}&category=${querry.category}`
)

// 특정 게시물 가져오기
export const getOnePostAPI = id => instance('posts').get(`${id}`)