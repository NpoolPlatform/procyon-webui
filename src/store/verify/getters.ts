import { GetterTree } from 'vuex'
import { RootState } from '../index'
import { VerifyState } from './state'

type VerifyGetters = {
  getLoginEmailVerifyDialog (state: VerifyState): boolean
  getLoginGoogleAuthenticationVerifyDialog (state: VerifyState): boolean
  getVerifyLoading (state: VerifyState): boolean
  getVerifyError (state: VerifyState): string
}

const getters: GetterTree<VerifyState, RootState> & VerifyGetters = {
  getLoginEmailVerifyDialog: (state: VerifyState): boolean => state.loginEmailVerifyDialog,
  getLoginGoogleAuthenticationVerifyDialog: (state: VerifyState): boolean => state.loginGoogleAuthenticationVerifyDialog,
  getVerifyLoading: (state: VerifyState): boolean => state.loading,
  getVerifyError: (state: VerifyState): string => state.error
}

export { VerifyGetters, getters }
