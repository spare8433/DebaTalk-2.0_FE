import { BalanceDebatePostDataState } from "../balanceDebatePost/type";

export interface BalanceDebatePostsState {
  getPostsLoading: boolean,
  getPostsDone: boolean,
  getPostsError: null | Error | unknown,
	createPostsLoading: boolean,
	createPostsDone: boolean,
	createPostsError: null | Error | unknown,
	deletePostsLoading: boolean,
	deletePostsDone: boolean,
	deletePostsError: null | Error | unknown,
  postsData: BalanceDebatePostDataState[] | null
}
