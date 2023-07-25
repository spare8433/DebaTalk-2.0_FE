import React, { useCallback, useState } from 'react'
import useInput from '@hooks/useInput'
import { useAppDispatch } from '@store/store'
import { useRouter } from 'next/router'
import { DebateCategoryMenus } from '@data/staticData'
import { BasicSelect, CommonInput } from '@styles/commonStyle/inputs'
import { CssRem } from 'types/customCssType'
import { PrimaryButton } from '@styles/commonStyle/buttons'
import ImageUploadInput from '@components/common/imageUploadInput'
import { createDebateTopicPost } from '@store/slices/debateTopicPost'
import {
  ButtonLine,
  CategoryLine,
  ContentBox,
  ContentTitle,
  TitleLine,
  TopInputBox,
  Containor,
} from './style'

const WriteDebateTopicForm = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  //  폼 데이터들
  const [title, onChangeTitle] = useInput('')
  const [description, onChangeDescription] = useInput<HTMLTextAreaElement>('')
  const [category, onChangeCategory] = useInput<HTMLSelectElement>('자유')

  // 이미지 업로드 관련
  const [imageFile, setImageFile] = useState<FileList>()
  const [previewImage, setPreviewImage] = useState<string>('/img/default-thumbnail.png')

  const onSubmitForm = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      try {
        const formData = new FormData()
        if (imageFile !== undefined) formData.append('image', imageFile[0])

        formData.append(
          'data',
          JSON.stringify({
            category,
            title,
            description,
          }),
        )
        dispatch(createDebateTopicPost(formData)).unwrap()

        alert('게시물이 성공적으로 게시되었습니다')
        return await router.push({ pathname: '/debate-topic-board', query: { page: 1 } })
      } catch (error) {
        return alert(`게시물 생성 실패 : ${(error as Error).message}`)
      }
    },
    [imageFile, router, category, title, description, dispatch],
  )

  return (
    <Containor>
      <form onSubmit={onSubmitForm} encType="multipart/form-data">
        <h1>주제 추천 게시물 작성</h1>
        <TopInputBox>
          <TitleLine>
            {/* 게시물 타이틀 */}
            <span>게시물 제목</span>
            <CommonInput
              type="search"
              value={title}
              onChange={onChangeTitle}
              placeholder="제목을 입력해주세요"
              styleOption={{ width: new CssRem(60), height: new CssRem(3) }}
            />
          </TitleLine>

          <CategoryLine>
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
            styleOption={{ previewImgHeight: new CssRem(20) }}
          />
        </TopInputBox>

        <ContentBox>
          {/* 게시물 내용들 */}
          <ContentTitle>[ 설명 ]</ContentTitle>
          <textarea value={description} onChange={onChangeDescription} />
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

export default WriteDebateTopicForm
