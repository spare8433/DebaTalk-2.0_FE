import { Test } from '@components/test'
import { getBalanceDebatePosts } from '@store/slices/balanceDebatePosts'
import { wrapper } from '@store/store'
import React, { useState } from 'react'


const test = () => {
  const [a,setA] = useState(1)
  return (
    <div>
      테스트 페이지 a : {a}

      <button onClick={()=>setA(a + 1)}></button>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store)=> async () => {
  await store.dispatch(getBalanceDebatePosts({}));
  return {props: {}}
})

export default test
