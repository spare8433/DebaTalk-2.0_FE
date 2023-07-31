import React from 'react'
import { BalanceDebateOpinionDataState } from '@store/slices/balanceDebatePost/type'
import { IssueDebateOpinionDataState } from '@store/slices/issueDebatePost/type'
import { ProsConsDebateOpinionDataState } from '@store/slices/prosConsDebatePost/type'
import { DebateTopicOpinionDataState } from '@store/slices/debateTopicPost/type'
import Opinion from './opinion'
import { OpinionItem } from './style'

type WrapperProps = {
  data?:
    | BalanceDebateOpinionDataState[]
    | IssueDebateOpinionDataState[]
    | ProsConsDebateOpinionDataState[]
    | DebateTopicOpinionDataState[]
  mode: 'balance' | 'issue' | 'prosCons' | 'debate-topic'
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
