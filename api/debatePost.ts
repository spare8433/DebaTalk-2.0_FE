import { CreateDebatePostParam } from 'params'
import { axiosInstance } from '.'

// debate-post 등록
export const createDebatePostAPI: AxiosAPIwithParam<CreateDebatePostParam> = (data) =>
  axiosInstance('debate-post').post('', data)

// // 샘플
// export const getDebatePostsAPI: axiosAPI<GetDebatePostParam> = (initData = { limit: 12 }) =>
//   axiosInstance('debate-post').get(
//     `all?limit=${initData.limit}&skip=${initData.skip}
//      &key=${initData.key}&title=${initData.title}&category=${initData.category}`,
//   )

// debate-post 특정 게시물 가져오기
// export const getOneDebatePostAPI = id => instanceWithAuth('debate-posts').get(`one/${id}`)
