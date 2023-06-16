import useInput from '@hooks/useInput'
import { LessStyleBtn, PrimaryButton } from '@styles/commonStyle/buttons'
import { CommonInput } from '@styles/commonStyle/inputs'
import Link from 'next/link'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import { CssPercent, CssRem } from 'types/customCssType'

const IndexContainor = styled.div`
  width: 100%;
  margin-bottom: 16px;
`

const InsertBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const ArticleList = styled.div``

const ArticleItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  a {
    font-size: 1.4rem;
  }
`

type WrapperProps = {
  article: string[]
  setArticle: React.Dispatch<React.SetStateAction<string[]>>
}

const Article = ({ article, setArticle }: WrapperProps) => {
  const [text, onChangeText, setText] = useInput('')

  const inputArticle = useCallback(() => {
    const currentArticle = [...article]
    currentArticle.push(text)
    setArticle(currentArticle)
    setText('')
  }, [article, setArticle, setText, text])

  const deleteArticle = useCallback(
    (value: number) => {
      const currentArticle = [...article]
      currentArticle.splice(value, 1)
      setArticle(currentArticle)
      setText('')
    },
    [article, setArticle, setText],
  )

  return (
    <IndexContainor>
      <InsertBox>
        <CommonInput
          value={text}
          onChange={onChangeText}
          onKeyDown={(event) => event.key === 'Enter' && event.preventDefault()}
          placeholder="링크를 입력해주세요"
          styleOption={{ width: new CssPercent(80), height: new CssRem(4) }}
        />
        <PrimaryButton
          type="button"
          onClick={() => inputArticle()}
          styleOption={{ width: new CssRem(10), height: new CssRem(3.6) }}
        >
          기사 등록
        </PrimaryButton>
      </InsertBox>

      <ArticleList>
        {article.map((res, index) => (
          <ArticleItem key={`articleLink_${index}`}>
            <Link href={res}>{res}</Link>
            <LessStyleBtn
              type="button"
              styleOption={{ width: new CssRem(2) }}
              onClick={() => deleteArticle(index)}
            >
              X
            </LessStyleBtn>
          </ArticleItem>
        ))}
      </ArticleList>
    </IndexContainor>
  )
}

export default Article
