import { ActionTree } from 'vuex'
import { AugmentedActionContext, RootState } from '../index'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'
import { AffiliateMutations } from './mutations'
import { AffiliateState } from './state'
import { post } from 'src/boot/axios'
import {
  GetDirectInvitationsRequest,
  GetDirectInvitationsResponse,
  AffiliateURLPath,
  Invitation, Invitees
} from './types'
import { MutationTypes as notifyMutation } from 'src/store/notify/mutation-types'
import { RequestMessageToNotifyMessage } from 'src/utils/utils'
import { useI18n } from 'boot/i18n'

// use public api
interface AffiliateActions {
  [ActionTypes.GetDirectInvitationList] ({
    commit
  }: AugmentedActionContext<AffiliateState,
    RootState,
    AffiliateMutations<AffiliateState>>, payload: GetDirectInvitationsRequest): void
}

const actions: ActionTree<AffiliateState, RootState> = {
  [ActionTypes.GetDirectInvitationList] ({ commit }, payload: GetDirectInvitationsRequest) {
    const { t } = useI18n()
    post<GetDirectInvitationsRequest, GetDirectInvitationsResponse>(AffiliateURLPath.GET_DIRECT_INVITATIONS, payload)
      .then((resp: GetDirectInvitationsResponse) => {
        const userid = payload.InviterID
        const father: Invitation = {
          UserID: userid,
          Username: payload.Username,
          EmailAddress: payload.EmailAddress,
          Label: '',
          children: []
        }
        father.UserID = userid
        const infos = new Map<string, Invitees>(Object.entries(resp.Infos))
        const lists = infos?.get(userid)?.Invitees
        father.Label = lists ? '01(' + lists?.length.toString() + ')' : '01(0)'
        let index = 1
        lists?.forEach(list => {
          const childrenInvitation: Invitation = {
            EmailAddress: list.EmailAddress,
            Username: list.Username,
            UserID: list.UserID,
            Label: '02(' + index.toString() + ')',
            children: []
          }
          father.children.push(childrenInvitation)
          index++
        })
        const invitationList: Array<Invitation> = []
        invitationList.push(father)
        commit(MutationTypes.SetInvitationList, invitationList)
        commit(notifyMutation.SetInnerLoading, {
          key: payload.Target,
          value: false
        })
      })
      .catch((err: Error) => {
        commit(MutationTypes.SetInvitationList, [])
        commit(notifyMutation.PushMessage, RequestMessageToNotifyMessage(t('notify.GetDirectAffiliate.Fail'), err.message, 'negative'))
        commit(notifyMutation.SetInnerLoading, {
          key: payload.Target,
          value: false
        })
      })
  }
}

export { actions, AffiliateActions }
