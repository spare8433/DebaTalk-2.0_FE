import React, { ReactElement, useCallback, useState } from 'react'
import useInput from '@hooks/useInput'
import { BasicButtonBox, Containor, FitImgBox, InputBox, MainButton, SelectBox } from '@styles/commonStyle'
import AdminLayout from '@components/common/layouts/adminLayout'
import { useAppDispatch, useAppSelector } from '@store/store'
import { useRouter } from 'next/router'
import { DebateCategoryMenus, DebateModeMenus } from '@data/staticData'
import Article from '@components/admin/write-post/article'
import { createBalanceDebatePost } from '@store/slices/balanceDebatePost'
import { CategoryLine, ContentBox, ImageUploadBox, ImgInputLine, PreviewImgBox, TitleLine, TopInputBox } from '@styles/pages/admin/write-post.style'
import { createProsConsDebatePost } from '@store/slices/prosConsDebatePost'
import { createIssueDebatePost } from '@store/slices/issueDebatePost'

const WritePost = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  //  폼 데이터들
  const [title,onChangeTitle] = useInput('')
  const [description,onChangeDescription] = useInput('')
  const [issue1,onChangeIssue1] = useInput('')
  const [issue2,onChangeIssue2] = useInput('')
  const [article, setArticle] = useState<string[]>([])
  // const [imgFormData, setImgFormData ] = useState<FormData>()
  const [imgData, setImgData ] = useState<any>()
  const [category, onChangeCategory] = useInput('자유');
  const [method, onChangeMethod] = useInput('이슈토론');

  // 이미지 업로드 관련
  const [imageFile, setImageFile] = useState<FileList>()
  const [previewImage,setPreviewImage] = useState<string>('/img/default-thumbnail.png')

  const onLoadFile = useCallback((event:React.ChangeEvent):any => {
    const element = event.currentTarget as HTMLInputElement;
    const fileReader = new FileReader();

    if (element.files === null) return

    if (element.files.length !== 0) {
      fileReader.readAsDataURL(element.files[0]);
      fileReader.onload = () => {
        if (typeof fileReader.result === 'string') setPreviewImage(fileReader.result)
      }
    } else 
      setPreviewImage('/img/default-thumbnail.png')

    setImageFile(element.files)
  }, [])

  const onSubmitForm = useCallback(async (e:React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      if (imageFile !== undefined) formData.append('image',imageFile[0])

      switch (method) {
        case '이슈토론':
          formData.append('data',JSON.stringify({
            method, category, title, description, issue1, article,
          }))
          await dispatch(createIssueDebatePost(formData)).unwrap()
          break;
        case '찬반토론':
          formData.append('data',JSON.stringify({
            method, category, title, description, issue1, issue2, article,
          }))
          await dispatch(createProsConsDebatePost(formData)).unwrap()
          break;
        case '밸런스토론':
          formData.append('data',JSON.stringify({
            method, category, title, description, issue1, issue2, article,
          }))
          await dispatch(createBalanceDebatePost(formData)).unwrap()
          break;
        default:
          break;
      }
      
      alert('게시물이 성공적으로 게시되었습니다')
      return router.push('/admin')
    } catch (error) {
      return alert('게시물 생성 실패 : ' + (error as Error).message)
    }
  },[method, category, title, description, issue1, issue2, article, imgData, imageFile ])


  return ( 
    <Containor width='800'>      
      <form onSubmit={onSubmitForm} encType="multipart/form-data">
        <TopInputBox>
          <h3> * 게시물 종류를 선택 후 형식에 맞게 작성해 주세요 * </h3>
          <TitleLine>
            {/* 게시물 타이틀 */}
            <span>게시물 제목</span>
            <InputBox width='400' height='30'>
              <input placeholder='제목을 입력해주세요' value={title} onChange={onChangeTitle} type='search'/>
            </InputBox>
          </TitleLine>
          
          <CategoryLine>
            {/* 게시물 종류 */}
            <span>게시물 종류</span>
            <SelectBox height='30'>
              <select value={method} onChange={onChangeMethod}>
                {DebateModeMenus.map((res, index) => <option key={'debateMode_' + index}>{res}</option>)}
              </select>
            </SelectBox>

            {/* 게시물 카테고리 */}
            <span>게시물 주제</span>
            <SelectBox height='30'>
              <select value={category} onChange={onChangeCategory}>
                {DebateCategoryMenus.map((res, index) => <option key={'caregory_' + index}>{res}</option>)}
              </select>
            </SelectBox>
          </CategoryLine>

          <ImageUploadBox>
            <input type='file' id='fileElem' onChange={onLoadFile} accept='image/*'></input>
            <ImgInputLine>
              <label htmlFor="fileElem">이미지 업로드</label>
              {/* <button type='button' onClick={onSaveImage} disabled={isDisableSubmit}>저장</button> */}
            </ImgInputLine>
            <PreviewImgBox width='800' height='250'>
              <img src={previewImage} alt='previewImg'></img>
            </PreviewImgBox>
          </ImageUploadBox>
          
        </TopInputBox>
        
        <ContentBox>
        {/* 게시물 내용들 */}
          <h4>[ 설명 ]</h4>
          <textarea value={description} onChange={onChangeDescription}></textarea>

          <h4>[ 기사 ]</h4>
          <Article article={article} setArticle={setArticle} />

          {method === '이슈토론' 
            ? <>
              <h4>[ 이슈 ]</h4>
              <textarea value={issue1} onChange={onChangeIssue1}></textarea>
            </> : <></>
          }    

          {method === '찬반토론' 
            ? <>
              <h4>[ 찬성입장 ]</h4>
              <textarea value={issue1} onChange={onChangeIssue1}></textarea>
              <h4>[ 반대입장 ]</h4>
              <textarea value={issue2} onChange={onChangeIssue2}></textarea>
            </> : <></>
          }

          {method === '밸런스토론' 
            ? <>
              <h4>[ A 선택의견 ]</h4>
              <textarea value={issue1} onChange={onChangeIssue1}></textarea>
              <h4>[ B 선택의견 ]</h4>
              <textarea value={issue2} onChange={onChangeIssue2}></textarea>
            </> : <></>
          } 
          
        </ContentBox>        
        
        {/* 
          <EditBox><Editor value={content} setValue={setContent}></Editor></EditBox> 
        */}

        <BasicButtonBox width={'100%'}>
          <MainButton type='submit' width='180' height='40' fontSize='18'>게시물 등록</MainButton>
        </BasicButtonBox>
      </form>
      
    </Containor>
  )
}

WritePost.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default WritePost