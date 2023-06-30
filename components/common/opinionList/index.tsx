import React from 'react'
import { BalanceDebateOpinonDataState } from '@store/slices/balanceDebatePost/type'
import { IssueDebateOpinionDataState } from '@store/slices/issueDebatePost/type'
import { ProsConsDebateOpinonDataState } from '@store/slices/prosConsDebatePost/type'
import Opinion from './opinion'
import { OpinionItem } from './style'

type WrapperProps = {
  data?:
    | BalanceDebateOpinonDataState[]
    | IssueDebateOpinionDataState[]
    | ProsConsDebateOpinonDataState[]
  mode: 'balance' | 'issue' | 'prosCons'
}

const OpinionList = ({ data, mode }: WrapperProps) => (
  <div>
    {/* 의견 리스트 */}
    {data?.map((opinion, index) => (
      <OpinionItem key={`opinionItem_${index}`}>
        <Opinion opinion={opinion} mode={mode} />
      </OpinionItem>
    ))}
  </div>
)

export default OpinionList
