import React, { useCallback, useState } from 'react'
import useInput from '@hooks/useInput'
import { useAppDispatch } from '@store/store'
import { useRouter } from 'next/router'
import { DebateCategoryMenus, DebateModeMenus } from '@data/staticData'
import Article from '@components/admin/write-post/article'
import { createBalanceDebatePost } from '@store/slices/balanceDebatePost'
import {
  ButtonLine,
  CategoryLine,
  ContentBox,
  ContentTitle,
  TitleLine,
  TopInputBox,
  Containor,
} from '@components/admin/write-post/style'
import { createProsConsDebatePost } from '@store/slices/prosConsDebatePost'
import { createIssueDebatePost } from '@store/slices/issueDebatePost'
import { BasicSelect, CommonInput } from '@styles/commonStyle/inputs'
import { CssRem } from 'types/customCssType'
import { PrimaryButton } from '@styles/commonStyle/buttons'
import ImageUploadInput from './imageUploadInput'

const WriteDebatePost = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  //  폼 데이터들
  const [title, onChangeTitle] = useInput('')
  const [optionA, onChangeOptionA] = useInput('')
  const [optionB, onChangeOptionB] = useInput('')
  const [description, onChangeDescription] = useInput<HTMLTextAreaElement>('')
  const [issue1, onChangeIssue1] = useInput<HTMLTextAreaElement>('')
  const [issue2, onChangeIssue2] = useInput<HTMLTextAreaElement>('')
  const [article, setArticle] = useState<string[]>([])
  const [category, onChangeCategory] = useInput<HTMLSelectElement>('자유')
  const [method, onChangeMethod] = useInput<HTMLSelectElement>('이슈토론')

  // 이미지 업로드 관련
  const [imageFile, setImageFile] = useState<FileList>()
  const [previewImage, setPreviewImage] = useState<string>('/img/default-thumbnail.png')

  const onSubmitForm = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      try {
        const formData = new FormData()
        if (imageFile !== undefined) formData.append('image', imageFile[0])
        switch (method) {
          case '이슈토론':
            formData.append(
              'data',
              JSON.stringify({
                category,
                title,
                description,
                issue1,
                article,
              }),
            )
            await dispatch(createIssueDebatePost(formData)).unwrap()
            break
          case '찬반토론':
            formData.append(
              'data',
              JSON.stringify({
                category,
                title,
                description,
                issue1,
                issue2,
                article,
              }),
            )
            await dispatch(createProsConsDebatePost(formData)).unwrap()
            break
          case '밸런스토론':
            formData.append(
              'data',
              JSON.stringify({
                category,
                title,
                optionA,
                optionB,
                description,
                issue1,
                issue2,
                article,
              }),
            )
            await dispatch(createBalanceDebatePost(formData)).unwrap()
            break
          default:
            break
        }

        alert('게시물이 성공적으로 게시되었습니다')
        return await router.push('/admin')
      } catch (error) {
        return alert(`게시물 생성 실패 : ${(error as Error).message}`)
      }
    },
    [
      imageFile,
      method,
      router,
      category,
      title,
      description,
      issue1,
      article,
      dispatch,
      issue2,
      optionA,
      optionB,
    ],
  )

  return (
    <Containor>
      <form onSubmit={onSubmitForm} encType="multipart/form-data">
        <TopInputBox>
          <h5> * 게시물 종류를 선택 후 형식에 맞게 작성해 주세요 * </h5>
          <TitleLine>
            {/* 게시물 타이틀 */}
            <span>게시물 제목</span>
            <CommonInput
              type="search"
              value={title}
              onChange={onChangeTitle}
              placeholder="제목을 입력해주세요"
              styleOption={{ width: new CssRem(40), height: new CssRem(3) }}
            />
          </TitleLine>

          <CategoryLine>
            {/* 게시물 종류 */}
            <span>게시물 종류</span>
            <BasicSelect value={method} onChange={onChangeMethod}>
              {DebateModeMenus.map((res, index) => (
                <option key={`debateMode_${index}`}>{res}</option>
              ))}
            </BasicSelect>

            {/* 게시물 카테고리 */}
            <span>게시물 주제</span>
            <BasicSelect value={category} onChange={onChangeCategory}>
              {DebateCategoryMenus.map((res, index) => (
                <option key={`caregory_${index}`}>{res}</option>
              ))}
            </BasicSelect>
          </CategoryLine>

          <ImageUploadInput
            previewImage={previewImage}
            setPreviewImage={setPreviewImage}
            setImageFile={setImageFile}
          />
        </TopInputBox>

        <ContentBox>
          {/* 게시물 내용들 */}
          <ContentTitle>[ 설명 ]</ContentTitle>
          <textarea value={description} onChange={onChangeDescription} />

          {/* 밸런스 토론 선택지 */}
          {method === '밸런스토론' && (
            <>
              <ContentTitle>[ A 선택지 ]</ContentTitle>
              <CommonInput
                placeholder="A 선택지를 입력해주세요"
                value={optionA}
                onChange={onChangeOptionA}
                styleOption={{ width: new CssRem(40), height: new CssRem(3) }}
              />
              <ContentTitle>[ B 선택지 ]</ContentTitle>
              <CommonInput
                placeholder="B 선택지를 입력해주세요"
                value={optionB}
                onChange={onChangeOptionB}
                styleOption={{ width: new CssRem(40), height: new CssRem(3) }}
              />
            </>
          )}

          {/* 기사 작성 부분 */}
          <ContentTitle>[ 기사 ]</ContentTitle>
          <Article article={article} setArticle={setArticle} />

          {/* 이슈 작성 부분 */}
          {method === '이슈토론' && (
            <>
              <ContentTitle>[ 이슈 ]</ContentTitle>
              <textarea value={issue1} onChange={onChangeIssue1} />
            </>
          )}

          {method === '찬반토론' && (
            <>
              <ContentTitle>[ 찬성입장 ]</ContentTitle>
              <textarea value={issue1} onChange={onChangeIssue1} />
              <ContentTitle>[ 반대입장 ]</ContentTitle>
              <textarea value={issue2} onChange={onChangeIssue2} />
            </>
          )}

          {method === '밸런스토론' && (
            <>
              <ContentTitle>[ A 선택의견 ]</ContentTitle>
              <textarea value={issue1} onChange={onChangeIssue1} />
              <ContentTitle>[ B 선택의견 ]</ContentTitle>
              <textarea value={issue2} onChange={onChangeIssue2} />
            </>
          )}
        </ContentBox>

        <ButtonLine>
          <PrimaryButton
            type="submit"
            styleOption={{
              width: new CssRem(18),
              height: new CssRem(4),
              fontSize: new CssRem(1.8),
            }}
          >
            게시물 등록
          </PrimaryButton>
        </ButtonLine>
      </form>
    </Containor>
  )
}

export default WriteDebatePost
