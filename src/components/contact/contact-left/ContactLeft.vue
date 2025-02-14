<template>
  <q-card class='form-container'>
    <q-card-section>
      <h3 class='common-card-title'>{{ $t('contact.Left.Title') }}</h3>
    </q-card-section>
    <q-card-section>
      <q-form @submit='sendMessage'>
        <q-item-label>{{ $t('input.EmailAddress') }}</q-item-label>
        <q-input class='common-input input-style' bg-color='blue-grey-2' outlined v-model='email' lazy-rules
                 :rules='emailRules' />

        <q-item-label>{{ $t('input.Name') }}</q-item-label>
        <q-input class='common-input input-style' bg-color='blue-grey-2' outlined v-model='name' lazy-rules
                 :rules='nameRules' />

        <q-item-label>{{ $t('input.Subject') }}</q-item-label>
        <q-input class='common-input input-style' bg-color='blue-grey-2' outlined v-model='subject' lazy-rules
                 :rules='subjectRules' />

        <q-item-label>{{ $t('input.Message') }}</q-item-label>
        <q-input class='common-input input-style input-textarea-style' bg-color='blue-grey-2' outlined
                 v-model='message' type='textarea' lazy-rules :rules='messageRules' />

        <q-btn class='common-button send-message' :label="$t('button.SendMessage')" type='submit'></q-btn>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'src/store'
import { ActionTypes } from 'src/store/verify/action-types'
import { ContactByEmailRequest } from 'src/store/verify/types'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n()

const store = useStore()

const email = ref('')
const name = ref('')
const subject = ref('')
const message = ref('')

const emailRules = ref([
  (val: string) => (val && val.length > 0) || t('input.EmailAddressWarning')
])
const nameRules = ref([
  (val: string) => (val && val.length > 0) || t('input.NameWarning')
])
const subjectRules = ref([
  (val: string) => (val && val.length > 0) || t('input.SubjectWarning')
])
const messageRules = ref([
  (val: string) => (val && val.length > 0) || t('input.MessageWarning')
])

const sendMessage = () => {
  const request: ContactByEmailRequest = {
    UsedFor: 'CONTACT',
    Sender: email.value,
    SenderName: name.value,
    Subject: subject.value,
    Body: message.value
  }
  store.dispatch(ActionTypes.ContactByEmail, request)
}
</script>

<style scoped>
.form-container {
  background: linear-gradient(to bottom right, rgba(225, 238, 239, 0.2) 0, rgba(161, 208, 208, 0.2) 100%);
  box-shadow: 16px 16px 20px 0 #23292b;
  border-radius: 12px;
  color: #e1eeef;
  padding: 48px;
  margin: 48px auto;
  min-width: 360px;
  width: 45%;
}

.input-style {
  margin: 5px 0 0 0;
  width: 100%;
}

.input-textarea-style >>> .q-field__control {
  min-height: 200px !important;
}

.send-message {
  background: linear-gradient(to bottom right, #ff964a 0, #ce5417 100%);
  border: 1px solid #ff964a;
  margin: 36px 0 0 0;
  width: 100%;
}
</style>
