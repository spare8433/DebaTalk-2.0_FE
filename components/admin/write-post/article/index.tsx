import useInput from '@hooks/useInput'
import { InputBox, MainButton } from '@styles/commonStyle'
import React, { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'

const InsertBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const ArticleList = styled.div`
  a{ width:100% }
  
`

const ArticleItem = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    cursor: pointer;
  }
`

type WrapperProps = {
  article: string[],
  setArticle: React.Dispatch<React.SetStateAction<string[]>>
}

const Article = ({article,setArticle}:WrapperProps) => {
  // const [article, setArticle] = useState<string[]>([])
  const [text,onChangeText,setText] = useInput('')
  const _article = useRef<string[]>([])


  const inputArticle = useCallback(() => {
    _article.current = article
    _article.current.push(text)
    console.log( _article.current)
    setArticle(_article.current)
    setText('')
  },[text])

  const deleteArticle = useCallback((value:number) => {
    _article.current = article
    _article.current.splice(value, 1)
    setArticle(_article.current)
    setText('')
  },[text])
  

  return (
    <div>
      <InsertBox>
        <InputBox width='80%' height='40'>
          <input value={text} onChange={onChangeText} placeholder='링크를 입력해주세요'></input>
        </InputBox>
        <MainButton width='100' height='36' onClick={() => inputArticle()} type='button'>기사 등록</MainButton>
      </InsertBox>

      <ArticleList>
        {article.map((res, index) => {
          return (
            <ArticleItem>
              <a href={res} key={'articleLink_'+ index}>{res}</a>
              <p onClick={() => deleteArticle(index)}>X</p>
            </ArticleItem>
            )
        })}
      </ArticleList>
      
    </div>
  )
}

export default Article