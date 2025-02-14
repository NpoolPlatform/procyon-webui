<template>
  <q-form @submit='register'>
    <Vue3QTelInput
      v-if='showPhone'
      v-model:tel='registerInput.phoneNumber'
      bg-color='blue-grey-2'
      outlined
      :label="$t('input.PhoneNumber')"
      class='common-input' />
    <q-input
      v-if='showEmail'
      bg-color='blue-grey-2'
      class='common-input'
      outlined
      v-model='registerInput.emailAddress'
      :label="$t('input.EmailAddress')"
      lazy-rules
      :rules='emailRule'
    ></q-input>

    <SendCodeInput v-if='showEmail' verify-type='email' v-model:verify-code='verifyCode'
                   :verify-param='registerInput.emailAddress' used-for='SIGNUP'
                   :item-target='ItemStateTarget.RegisterEmailSendCodeButton' />
    <SendCodeInput v-if='showPhone' verify-type='mobile' v-model:verify-code='verifyCode'
                   :verify-param='registerInput.phoneNumber' used-for='SIGNUP'
                   :item-target='ItemStateTarget.RegisterPhoneSendCodeButton' />
    <q-input v-model='registerInput.password' :label="$t('input.Password')" bg-color='blue-grey-2'
             class='common-input'
             outlined lazy-rules
             :rules='passwordRules'
             :type="isPwd ? 'password' : 'text'"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class='cursor-pointer'
          @click='isPwd = !isPwd'
        />
      </template>
    </q-input>
    <q-input v-model='registerInput.confirmPassword' :label="$t('input.ConfirmPassword')" bg-color='blue-grey-2'
             class='common-input'
             outlined lazy-rules
             :rules='confirmPasswordRules'
             :type="isCPwd ? 'password' : 'text'"
    >
      <template v-slot:append>
        <q-icon
          :name="isCPwd ? 'visibility_off' : 'visibility'"
          class='cursor-pointer'
          @click='isCPwd = !isCPwd'
        />
      </template>
    </q-input>
    <q-input v-model='registerInput.invitationCode' :label="$t('input.InvitationCode')" bg-color='blue-grey-2'
             class='common-input'
             outlined lazy-rules
             :rules='invitationCodeRules'></q-input>
    <q-field ref='agreeRef' :model-value='agree' :rules='agreeRules'>
      <q-checkbox v-model='agree'></q-checkbox>
      <span class='text-style'>
        {{ $t('register.Agree1') }}
        <span
          href
          class='link'
          @click='onShowPolicy'
          style='cursor: pointer'
        >{{ $t('register.Policy') }}</span
        >
        {{ $t('register.And') }}
        <span
          href
          class='link'
          @click='onShowPolicy'
          style='cursor: pointer'
        >{{ $t('register.User') }}</span
        >{{ $t('register.Behind') }}
      </span>
    </q-field>
    <q-btn type='submit' class='common-button register-button' :label="$t('button.Register')"></q-btn>
    <p class='text-style'>
      {{ $t('register.Have') }}
      <router-link class='link' :to="{ path: '/login' }">{{
          $t('register.Click')
        }}
      </router-link>
    </p>
  </q-form>
  <PolicyDialog v-model:agree='agree' v-model:show='showPolicy' />
</template>

<script setup lang='ts'>
import { reactive, ref, defineAsyncComponent, computed } from 'vue'
import { formatPhoneNumber, isValidEmail, isValidPassword, sha256Password, ThrottleDelay } from 'src/utils/utils'
import { useI18n } from 'vue-i18n'
import { throttle } from 'quasar'
import { useStore } from 'src/store'
import { UserSignUpRequest } from 'src/store/users/types'
import { ItemStateTarget } from 'src/store/types'
import { ActionTypes } from 'src/store/users/action-types'

const SendCodeInput = defineAsyncComponent(() => import('src/components/input/SendCodeInput.vue'))
const PolicyDialog = defineAsyncComponent(() => import('src/components/dialog/policy/Policy.vue'))
const Vue3QTelInput = defineAsyncComponent(() => import('vue3-q-tel-input'))

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

const store = useStore()
const showEmail = computed(() => store.getters.getShowEmail)
const showPhone = computed(() => store.getters.getShowPhone)

const verifyCode = ref('')
const isPwd = ref(true)
const isCPwd = ref(true)
const agree = ref(false)
const showPolicy = ref(false)

const registerInput = reactive({
  phoneNumber: '',
  emailAddress: '',
  password: '',
  confirmPassword: '',
  invitationCode: ''
})

const emailRule = ref([
  (val: string) => isValidEmail(val) || t('input.EmailAddressWarning')
])
const passwordRules = ref([
  (val: string) => isValidPassword(val) || t('input.PasswordWarning')
])
const confirmPasswordRules = ref([
  (val: string) => isValidPassword(val) || t('input.PasswordWarning'),
  (val: string) => (val && val === registerInput.password) || t('input.ConfirmPasswordWarning')
])
const invitationCodeRules = ref([
  (val: string) => (val && val.length > 0) || t('input.InvitationCodeWarning')
])
const agreeRules = ref([
  (val: boolean) => val || t('input.CheckWarning')
])

const register = throttle(() => {
  let accountType = 'email'
  let account = registerInput.emailAddress

  if (showPhone.value) {
    account = formatPhoneNumber(registerInput.phoneNumber)
    accountType = 'mobile'
  }

  if (account.length === 0) {
    return
  }
  if (registerInput.password.length === 0) {
    return
  }
  if (verifyCode.value.length === 0) {
    return
  }
  if (!agree.value) {
    return
  }

  const request: UserSignUpRequest = {
    Account: account,
    AccountType: accountType,
    PasswordHash: sha256Password(registerInput.password),
    InvitationCode: registerInput.invitationCode,
    VerificationCode: verifyCode.value
  }
  store.dispatch(ActionTypes.UserSignUp, request)
}, ThrottleDelay)

function onShowPolicy () {
  showPolicy.value = true
}

</script>

<style scoped>
@import "~vue3-q-tel-input/dist/vue3-q-tel-input.esm.css";

.register-button {
  background: linear-gradient(to bottom right, #ff964a 0, #ce5417 100%);
  border: 1px solid #ff964a;
  margin: 10px 0 10px 0;
  width: 100%;
}

.text-style {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
  text-align: left;
  color: black;
}

.link {
  text-decoration: none;
  transition: all ease-in-out 0.3s;
  color: #1ec498;
  filter: contrast(1.5);
}

.link:hover {
  text-decoration: #1ec498;
}
</style>
