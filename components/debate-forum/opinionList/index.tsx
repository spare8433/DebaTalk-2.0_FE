import { OpinionItem } from './style'
import { BalanceDebateOpinonDataState } from '@store/slices/balanceDebatePost/type'
import Opinion from './opinion'
import { IssueDebateOpinionDataState } from '@store/slices/issueDebatePost/type'
import { ProsConsDebateOpinonDataState } from '@store/slices/prosConsDebatePost/type'

type WrapperProps = {
  data: BalanceDebateOpinonDataState[] | IssueDebateOpinionDataState[] | ProsConsDebateOpinonDataState[]
  mode: 'balance' | 'issue' | 'prosCons'
}

const OpinionList = ({data, mode}:WrapperProps) => {
  return (
    <div>
      {/* 의견 리스트 */}
      {data.map((opinion, index) => {
        return (
          <OpinionItem key={'opinionItem_' + index}>
            <Opinion opinion={opinion} mode={mode}></Opinion>
          </OpinionItem>
        )
      })}
    </div>
  )
}

export default OpinionList