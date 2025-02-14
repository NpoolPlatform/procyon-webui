<template>
  <q-page class='container'>
    <q-btn class='back-button' @click='onBackClick'>⭠</q-btn>
    <div class='content'>
      <div class='product-container'>
        <div class='product-title-section'>
          <div class=product-page-icon><img :src='spacemeshImg'></div>
          <h1>{{ t('MSG_SPACEMESH_MINING') }}</h1>
        </div>
        <div class='info'>
          <h3 class="form-title">{{ t('MSG_PRODUCT_DETAILS') }}</h3>
          <div class="info-flex">
            <div class="three-section">
              <h4>{{ t('MSG_DAILY_MINING_REWARDS') }}</h4>
              <span class="number">*</span>
              <span class="unit">{{ t('MSG_SMH_PER_DAY').toUpperCase() }}</span>
            </div>
            <div class="three-section">
              <h4>{{ t('MSG_SERVICE_PERIOD') }}</h4>
              <span class="number">{{ good?.Good.Good.DurationDays }}</span>
              <span class="unit">{{ t('MSG_DAYS').toUpperCase() }}</span>
            </div>
            <div class="three-section">
              <h4>{{ t('MSG_TECHNICAL_SERVICE_FEE') }}</h4>
              <span class="number">20</span>
              <span class="unit">%</span>
            </div>
            <div class="three-section">
              <h4>{{ t('MSG_MAINTENANCE_FEE') }}</h4>
              <span class="number">*</span>
              <span class="unit">{{ t('MSG_USDT_PER_DAY').toUpperCase() }}</span>
            </div>
            <div class="three-section">
              <h4>{{ t('MSG_ORDER_EFFECTIVE') }}</h4>
              <span class="number">{{ effectiveDate }}</span>
            </div>

            <div class="hr"></div>

            <div class="product-detail-text">
              <h3>{{ t('MSG_SPACEMESH_DESCRIPTION_TITLE') }}</h3>
              <p v-html='t("MSG_SPAECEMSH_DESCRIPTION_BODY")' />

              <h3>{{ t('MSG_WHY_PROCYON_TITLE') }}</h3>
              <p v-html='t("MSG_WHY_PROCYON_BODY")' />

              <h3>{{ t('MSG_SPECS_TITLE') }}</h3>

              <p><img class="content-image" :src="spacemeshInfo"></p>

              <p>
                <a href='https://spacemesh.io/' target='_blank'>
                  {{ t('MSG_SPACEMESH_HOMEPAGE') }} >>
                </a>
              </p>

            </div>
          </div>
        </div>
        <div class='order-form'>
          <h3 class='form-title'>{{ t('MSG_MINING_PURCHASE') }}</h3>
          <div>
            <h4>{{ t('MSG_PURCHASE_UNITS', {UNIT: good?.Good.Good.Unit}) }}</h4>
            <input v-model='purchaseUnits' type='number' />
            <h4>{{ t('MSG_PAYMENT_METHOD') }}</h4>
            <q-btn-dropdown
              class='payment-select'
              flat
              dense
              no-caps
              unelevated
              align='between'
              auto-close
              :label='selectedCoinName'
            >
              <q-list>
                <q-item
                  dense
                  class='payment-select-item'
                  clickable
                  v-for='coin in coins'
                  :key='coin.ID'
                  @click="() => onCoinSelected(coin)"
                >
                  <q-item-section>
                    <q-item-label>
                      {{ coin.Unit }}({{ coin.Name }})
                      <span class='payment-coinname'>
                        {{ (coin.ENV !== 'main' ? coin.ENV : '') }}
                      </span>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <h4 v-if='false'>{{ t('MSG_COUPON_CODE') }}</h4>
            <input v-if='false' type='text'>
            <!-- div class='coupon-error'>{{ t('MSG_INCORRECT_COUPON_CODE') }}</div -->
            <q-btn
              no-caps
              :label='t("MSG_PURCHASE")'
              class='submit-btn'
              :loading='submitting'
              @click='onSubmit'
            />
          </div>
        </div>
      </div>
      <div class='hr'></div>
    </div>
  </q-page>
</template>

<script setup lang='ts'>
import { useStore } from 'src/store'
import { computed, onBeforeMount, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ActionTypes as GoodActionTypes } from 'src/store/goods/action-types'
import { ActionTypes as CoinActionTypes } from 'src/store/coins/action-types'
import { ModuleKey, Type as NotificationType } from 'src/store/notifications/const'
import { useI18n } from 'vue-i18n'
import { MutationTypes as NotificationMutationTypes } from 'src/store/notifications/mutation-types'
import { notificationPop, notify } from 'src/store/notifications/helper'

import spacemeshImg from 'src/assets/product-spacemesh.svg'
import spacemeshInfo from 'src/assets/spacemesh-info.png'
import { Coin } from 'src/store/coins/types'
import { useRouter } from 'src/router'
import { ActionTypes } from 'src/store/orders/action-types'
import { MutationTypes } from 'src/store/orders/mutation-types'
import { Order } from 'src/store/orders/types'
import { QBtnDropdown, throttle } from 'quasar'
import { ThrottleDelay } from 'src/utils/utils'

const router = useRouter()
const route = useRoute()
const store = useStore()
// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

interface myQuery {
  goodId: string
}
const query = computed(() => route.query as unknown as myQuery)
const good = computed(() => store.getters.getGoodByID(query.value.goodId))
const goodCoin = computed(() => store.getters.getCoinByID(good.value?.Main?.ID as string))
const coins = computed(() => store.getters.getCoins.filter((coin) => !coin.PreSale && coin.ForPay && coin.ENV === goodCoin.value?.ENV))
const selectedCoin = ref(undefined as unknown as Coin)

const selectedCoinName = computed(() => {
  return selectedCoin.value ? selectedCoin.value.Unit + '(' + selectedCoin.value.Name + ') ' + (selectedCoin.value.ENV !== 'main' ? selectedCoin.value.ENV : '') : t('MSG_PAYMENT_METHOD')
})

const onCoinSelected = (coin: Coin) => {
  selectedCoin.value = coin
}

watch(coins, () => {
  if (!selectedCoin.value && coins.value && coins.value.length > 0) {
    selectedCoin.value = coins.value[0]
  }
})

const effectiveDate = computed(() => {
  const date = new Date()
  return date.getFullYear().toString() + '-' + date.getMonth().toString() + '-' + (date.getDate() + 1).toString()
})

const purchaseUnits = ref(1)
watch(purchaseUnits, () => {
  purchaseUnits.value = purchaseUnits.value < 0 ? 0 : purchaseUnits.value
})

const onBackClick = () => {
  router.back()
}

const submitting = ref(false)

const onSubmit = throttle(() => {
  if (!selectedCoin.value) {
    return
  }

  submitting.value = true
  window.setTimeout(() => {
    submitting.value = false
  }, ThrottleDelay)

  store.dispatch(ActionTypes.SubmitOrder, {
    GoodID: good.value?.Good.Good.ID as string,
    Units: purchaseUnits.value,
    Message: {
      ModuleKey: ModuleKey.ModuleApplications,
      Error: {
        Title: t('MSG_SUBMIT_ORDER_FAIL'),
        Popup: true,
        Type: NotificationType.Error
      }
    }
  })
}, ThrottleDelay)

onBeforeMount(() => {
  if (!good.value) {
    store.dispatch(GoodActionTypes.GetGood, {
      ID: query.value.goodId,
      Message: {
        ModuleKey: ModuleKey.ModuleApplications,
        Error: {
          Title: t('MSG_GET_GOOD_FAIL'),
          Popup: true,
          Type: NotificationType.Error
        }
      }
    })
  }

  if (!coins.value || coins.value.length === 0) {
    store.dispatch(CoinActionTypes.GetCoins, {
      Message: {
        ModuleKey: ModuleKey.ModuleApplications,
        Error: {
          Title: t('MSG_GET_COINS_FAIL'),
          Popup: true,
          Type: NotificationType.Error
        }
      }
    })
  } else {
    selectedCoin.value = coins.value[0]
  }
})

type MyFunction = () => void
const unsubscribe = ref<MyFunction>()

onMounted(() => {
  unsubscribe.value = store.subscribe((mutation) => {
    if (mutation.type === NotificationMutationTypes.Push) {
      const notification = store.getters.peekNotification(ModuleKey.ModuleApplications)
      if (notification) {
        notify(notification)
        store.commit(NotificationMutationTypes.Pop, notificationPop(notification))
      }
    }

    if (mutation.type === MutationTypes.SetOrder) {
      const order = mutation.payload as Order
      store.dispatch(ActionTypes.CreateOrderPayment, {
        OrderID: order.Order.Order.ID,
        PaymentCoinTypeID: selectedCoin.value.ID as string,
        Fees: [],
        Message: {
          ModuleKey: ModuleKey.ModuleApplications,
          Error: {
            Title: t('MSG_CREATE_ORDER_PAYMENT_FAIL'),
            Popup: true,
            Type: NotificationType.Error
          }
        }
      })
    }

    if (mutation.type === MutationTypes.SetOrderPayment) {
      const order = mutation.payload as Order
      void router.push({
        path: '/payment',
        query: {
          orderId: order.Order.Order.ID
        }
      })
    }
  })
})

onUnmounted(() => {
  unsubscribe.value?.()
})

</script>

<style lang='sass' scoped>
.back-button
  background: linear-gradient(to bottom right, rgba(225, 238, 239, 0.2) 0, rgba(161, 208, 208, 0.2) 100%)
  box-shadow: 16px 16px 20px 0 #23292b
  border-radius: 0 12px 12px 0
  cursor: pointer
  display: inline-block
  font-size: 24px
  line-height: 30px
  margin: 0
  opacity: .7
  padding: 16px 24px
  position: absolute
  text-transform: uppercase
  transition: all ease-in-out .2s

.back-button:hover
  opacity: 1

.container
  margin-top: 48px

.product-container
  background: linear-gradient(to bottom right, rgba(225, 238, 239, 0.2) 0, rgba(161, 208, 208, 0.2) 100%)
  box-shadow: 16px 16px 20px 0 #23292b
  border-radius: 12px
  color: #e1eeef
  display: flex
  flex-wrap: wrap
  padding: 48px
  margin: 48px auto
  min-width: 360px

.product-title-section
  margin: 0 0 24px 0
  width: 100%

.product-page-icon
  background: linear-gradient(to bottom right, #54e280 0, #1ec498 100%)
  border-radius: 4px
  box-shadow: 2px 2px 4px #23292b88
  display: inline-block
  margin: 0 8px 0 0
  padding: 10px
  text-align: center
  transition: all ease-in-out .1s
  height: 60px
  width: 60px

.product-page-icon img
  filter: saturate(0) contrast(100) opacity(0.7)
  vertical-align: middle
  height: 40px
  width: 40px

.product-container h1
  display: inline-block
  margin: 0
  vertical-align: middle

.product-container .info
  padding: 0 5% 0 0
  width: 75%

.product-container .info-flex
  display: flex
  flex-wrap: wrap

.product-container h1
  display: inline-block
  margin: 0
  vertical-align: middle

.product-title-section
  margin: 0 0 24px 0
  width: 100%

.product-container .info
  padding: 0 5% 0 0
  width: 75%

.product-container .info-flex
  display: flex
  flex-wrap: wrap

.product-container .three-section
  margin: 0 3% 12px 0
  width: 30%

.product-container .full-section
  margin: 12px 0
  width: 100%

.product-detail-text h3
  margin: 24px 0

.product-detail-text h3::after
  width: 60%

.product-container h4
  font-size: 18px
  font-weight: 400
  margin: 12px 0
  text-transform: unset

.product-container p:not([class])
  font-size: 16px
  line-height: 28px
  margin: 0 0 16px 0

.product-container ul
  font-size: 16px

.product-container span
  font-size: 28px

.product-container .number
  background: linear-gradient(to bottom right, #ffe91d -50%, #ce5417 150%)
  background-clip: border-box
  filter: contrast(1.5)
  overflow-wrap: anywhere
  -webkit-background-clip: text
  -webkit-box-decoration-break: clone
  -webkit-text-fill-color: transparent

.product-container .unit,
.product-container .wallet-type
  color: #e4f4f0
  filter: contrast(1.5)
  font-size: 16px
  font-weight: 700

.product-container .hr
  background: linear-gradient(to right, transparent 0, #e1eeef 10%, transparent 100%)
  height: 1px
  margin: 24px 0

.product-container button
  margin: 0 0 24px 0
  width: 100%

.product-container .coupon-error
  color: #fc4468
  font-size: 14px
  margin-top: -18px

h3.form-title
  color: #e1eeef
  font-size: 24px
  font-weight: 200
  position: relative
  margin: 0 0 24px 0
  padding: 0 0 24px 0

h3.form-title::after
  background: linear-gradient(to right, transparent 0, #e1eeef 10%, transparent 100%)
  display: block
  content: ''
  position: absolute
  left: 0
  bottom: 0
  height: 1px
  width: 100%

.product-detail-text h3
  margin: 24px 0

.product-detail-text h3::after
  width: 60%

.order-form
  width: 25%

.submit-btn
  margin: 36px 0 0 0
  width: 100%
  line-height: 24px
  margin: 24px 0 24px 0 !important

.content-image
  border-radius: 24px
  box-shadow: 4px 4px 20px 0 #1f293a
  width: 100%

.product-container .coupon-error
  color: #fc4468
  font-size: 14px
  margin-top: -18px

button,
input[type="submit"]
  background: linear-gradient(to bottom right, #ff964a 0, #ce5417 100%)
  border: 0
  border-radius: 18px
  color: #e4f4f0
  cursor: pointer
  font-family: 'Barlow', sans-serif
  font-size: 18px
  font-weight: 600
  height: 48px
  margin: 24px 24px 24px 0
  padding: 12px 24px
  text-shadow: 1px 1px 1px #ce5417
  transition: all ease-in-out .1s

button.alt,
input[type="submit"].send-code
  background: none
  border: 1px solid #ff964a
  color: #ff964a
  text-shadow: 1px 1px 1px #27424c

button:hover,
input[type="submit"]:hover
  border-radius: 4px
  filter: contrast(1.5)

.nav button
  font-size: 16px
  height: auto
  margin: 0
  padding: 12px 20px
  text-transform: uppercase

button.in-active
  filter: saturate(0) contrast(.7)

input[type="text"],
input[type="number"]
  background: #e1eeef
  border: none
  border-radius: 12px
  box-shadow: 2px 2px 4px 0 #27424c
  color: #27424c
  font-size: 14px
  margin: 8px 0 24px 0
  padding: 12px
  width: 100%

input[type="text"]:active,
input[type="text"]:focus
input[type="number"]:active,
input[type="number"]:focus
  outline: 2px solid #1ec498

input.error
  outline: 2px solid #e85f1a

.payment-select
  border: solid 2px transparent
  border-radius: 12px
  width: 240px
  font-size: 14px
  font-weight: 400
  margin: 8px 0 24px 0
  color: #23292b
  padding-left: 10px
  background: #e1eeef
  text-shadow: none
  padding: 0 10px 0 5px

.payment-select-item
  color: #23292b
  line-height: 20px

.payment-select:hover
  border: solid 2px #1ec498
  border-radius: 12px

.payment-coinname
  font-weight: bold
</style>
