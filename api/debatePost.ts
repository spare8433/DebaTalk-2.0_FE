import axios from 'axios'
import { CreateDebatePostParam } from 'params'

// debate-post 등록
export const createDebatePostAPI:axiosAPI<CreateDebatePostParam> = data => axios.post('debate-posts',data)

// debate-post 불러오기
// export const getDebatePostsAPI = querry => axios.get(
//   `all?limit=${querry.limit}&skip=${querry.skip}&key=${querry.key}&title=${querry.title}&category=${querry.category}`
// )

// debate-post 특정 게시물 가져오기
// export const getOneDebatePostAPI = id => instanceWithAuth('debate-posts').get(`one/${id}`)