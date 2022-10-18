import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'
import useInput from '@hooks/useInput'
import { BasicButtonBox, Containor, InputBox, MainButton, SelectBox } from '@styles/commonStyle'
import Editor from '@components/common/editor'
import { createDebatePostAPI } from '@api/debatePost'
import AdminLayout from '@components/common/layouts/adminLayout'
import createHtmlSection from '@data/DebatePostEditTemplate'
import { useAppDispatch, useAppSelector } from '@store/store'
import { createDebatePost } from '@store/slices/debatePost'
import { useRouter } from 'next/router'

const TopInputBox = styled.div`
  display: flex;
`

const EditBox = styled.div`
  margin: 10px 0 30px;
  .ql-editor {
    h3 {
      border-bottom: 2px ${({theme})=> theme.colors.gray_2} solid;
      margin-bottom: 10px;
      padding-bottom: 6px;
    }
    strong{
      font-weight:bold;
    }
  }
`
 
const WritePost = () => {
  const [title,onChangeTitle] = useInput('')
  const [content, setContent] = useState(createHtmlSection());
  const [category, onChangeCategory] = useInput('자유');
  const [method, onChangeMethod] = useInput('이슈토론');

  const router = useRouter()
  const dispatch = useAppDispatch()
  const debatePost = useAppSelector(state => state.debatePost.debatePostData)

  const onSubmitForm = async (e:React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(createDebatePost({
        method,
        category,
        title,
        content
      })).unwrap()
      
      alert('게시물이 성공적으로 게시되었습니다')
      return router.push('/admin')
    } catch (error) {
      return alert('게시물 생성 실패 : ' + (error as Error).message)
    }
  }

  return (
      
    <Containor width='800'>      
      <form onSubmit={onSubmitForm}>
        <TopInputBox>
        
          <InputBox width='400' height='30'><input placeholder='제목을 입력해주세요' value={title} onChange={onChangeTitle} type='search'/></InputBox>

          <SelectBox height='30'>
            <select value={method} onChange={onChangeMethod}>
              <option>이슈토론</option>
              <option>찬반토론</option>
              <option>밸런스토론</option>
            </select>
          </SelectBox>

          <SelectBox height='30'>
            <select value={category} onChange={onChangeCategory}>
              <option>자유</option>
              <option>사회</option>
              <option>문화</option>
            </select>
          </SelectBox>
        </TopInputBox>

        <EditBox>
          <Editor value={content} setValue={setContent}></Editor>
        </EditBox>

        <BasicButtonBox width={'100%'}>
          <MainButton type='submit' width='180' height='40' fontSize='18'>등록</MainButton>
        </BasicButtonBox>
      </form>
      
    </Containor>
  )
}

WritePost.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default WritePost