import React, { ReactElement, useEffect, useState } from 'react'
import { BasicSearchBox, BasicSelectBox, HeaderInfoBox, ImgBox } from '@styles/commonStyle'
import NavLinkList from '@components/NavLinkList'
import { DebateCategoryMenus, DebateModeMenus } from '@data/staticData'
import { CategoryBox, CategoryItem, DebateForumBox, DebateForumContainor, DetailControllBox, ModeItem, PrColorLine } from '@styles/pages/debate-forum/index.style'
import HeaderFooterLayout from '@components/common/layouts/headerFooterLayout'
import { useAppDispatch, wrapper } from '@store/store'
import DebateContentBox from '@components/debate-forum/debateContentBox'
import useInput from '@hooks/useInput'
import { getBalanceDebatePosts } from '@store/slices/balanceDebatePosts'
import { loadMyInfo } from '@store/slices/user'
import axios from 'axios'
import { getIssueDebatePosts } from '@store/slices/issueDebatePosts'

const LIMIT = 4;

const ORDER_OPTION:{
  [index:string]:string
} = {
  최신순: 'createdAt',
  조회순: 'hits',
}

const DebateForumPage = () => {
  const dispatch = useAppDispatch()
  const [debateMode, setDebateMode] = useState<'이슈토론' | '밸런스토론' | '찬반토론'>('이슈토론');
  const [debateCategory, setDebateCategory] = useState('자유');
  const [searchText, onChangeSearchText] = useInput('')
  const [selectOption, onChangeselectOption] = useInput('최신순')
  const [page] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      const searchContent = {
        category: debateCategory,
        searchText,
        key: ORDER_OPTION[selectOption],
        limit: LIMIT,
        page,
      }

      switch (debateMode) {
        case '이슈토론':
          await dispatch(getIssueDebatePosts(searchContent))
          break;
        case '밸런스토론':
          await dispatch(getBalanceDebatePosts(searchContent))
          break;
        case '찬반토론':
          // dispatch()
          break;
        default:
          break;
      }
    }
    fetchData()
  }, [debateMode, debateCategory, searchText, selectOption, page, dispatch])

  return (
    <DebateForumContainor>
      <DebateForumBox>
        <HeaderInfoBox>
          <p>
            다양한  토론주제들과 여러의견이 존재하는
            {' '}
            <span>토론 게시판</span>
            입니다 자유로운 의견교환 및 토론을 즐기세요
            <br />
            과도한 분쟁을 유발하거나 거래글, 광고글, 음란물, 비방, 욕설,  정치관련 등등 부적절한 언행 시 제재 대상이 될 수 있습니다.
            <br />
            {/* 자세한 내용은 공지사항을 참고하여 규칙과 에티켓을 숙지하고 준수해주시면 감사하겠습니다. ^_^ */}
          </p>
          <PrColorLine height="2" width="250" />
        </HeaderInfoBox>

        <CategoryBox>
          <h2>토론 분류</h2>
          <NavLinkList
            setValue={setDebateMode}
            value={debateMode}
            category="debateMethod"
            items={
                DebateModeMenus.map((res, index) => <ModeItem key={`debateModeItems_${index + 1}`} value={res}>{res}</ModeItem>)
              }
          />

          <h3>카테고리</h3>
          <NavLinkList
            setValue={setDebateCategory}
            value={debateCategory}
            category="debateCategory"
            items={
                DebateCategoryMenus.map((res, index) => <CategoryItem key={`debateCategoryItems${index + 1}`} value={res}>{res}</CategoryItem>)
              }
          />
        </CategoryBox>

        <DetailControllBox>
          <BasicSearchBox>
            <ImgBox><img alt="돋보기" src="./img/search.png" /></ImgBox>
            <input placeholder="검색" value={searchText} onChange={onChangeSearchText} />
          </BasicSearchBox>

          <BasicSelectBox>
            <select value={selectOption} onChange={onChangeselectOption}>
              <option value="최신순">최신순</option>
              <option value="추천순">추천순</option>
              <option value="조회순">조회순</option>
            </select>
          </BasicSelectBox>
        </DetailControllBox>

        <DebateContentBox method={debateMode} />
      </DebateForumBox>

    </DebateForumContainor>

  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const cookie = req ? req.headers.cookie : ''

  if (req && cookie) { // 서버쪽 쿠키 공유 버그
    axios.defaults.headers.Cookie = cookie
  }

  await store.dispatch(getIssueDebatePosts({ limit: 4 }));
  await store.dispatch(loadMyInfo())
  return { props: {} }
})

DebateForumPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>{page}</HeaderFooterLayout>
}

export default DebateForumPage
