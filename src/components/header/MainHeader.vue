<template>
  <div class='header-left'>
    <router-link :to="{ path: '/' }">
      <q-img :src='logo' class='header-title'></q-img>
    </router-link>
  </div>
  <div class='header-right'>
    <router-link class='nav-link' :to="{ path: '/' }">
      {{ $t('header.Home') }}
    </router-link>
    <a class='nav-link' href='https://procyon-vip.medium.com/' target='_blank'>
      {{ $t('header.Blog') }}
    </a>
    <router-link class='nav-link' :to="{ path: '/faq' }">
      {{ $t('header.Support') }}
    </router-link>
    <router-link class='nav-link' :to="{ path: '/contact' }">
      {{ $t('header.Contact') }}
    </router-link>
    <div style='padding: 12px'>
      <ChangeLang />
    </div>
    <div style='padding: 12px 12px 12px 0px' v-if='!logined'>
      <q-btn
        class='common-button register'
        flat
        @click="$router.push('/register')"
      >
        {{ $t('button.Register') }}
      </q-btn>
    </div>
    <q-btn
      v-if='!logined'
      class='common-button login'
      flat
      @click="$router.push('/login')"
    >
      {{ $t('button.Login') }}
    </q-btn>

    <AvatarDropdown :hasInvitationCode='hasInvitationCode' v-if='logined' />
  </div>
</template>

<script setup lang='ts'>
import { computed, defineAsyncComponent } from 'vue'
import logo from '../../assets/procyon-light.svg'
import { useStore } from 'src/store/index'

const ChangeLang = defineAsyncComponent(
  () => import('../button/change-lang-button/ChangeLang.vue')
)

const AvatarDropdown = defineAsyncComponent(
  () => import('./dropdown/AvatarDropdown.vue')
)

const hasInvitationCode = computed(() => store.getters.getUserInvitationCode !== '')

const store = useStore()
const logined = computed(() => store.getters.getUserLogined)
</script>

<style scoped>
a:hover {
  color: #11afaf;
  filter: contrast(1.5);
}

.header-title {
  width: 150px;
  height: 23px;
}

.header-right {
  display: flex;
  align-items: center;
  padding: 12px;
}

.nav-link {
  color: #e1eeef;
  position: relative;
  text-transform: uppercase;
  padding: 12px;
}

.nav-link::after {
  background: linear-gradient(
    to right,
    transparent 0,
    #54e280 50%,
    transparent 100%
  );
  display: block;
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  height: 1px;
  width: 100%;
  transition: all ease-in-out 0.1s;
  transform: scaleX(0);
}

.register {
  background: linear-gradient(to bottom right, #ff964a 0, #ce5417 100%);
  border: 0;
  color: #e4f4f0;
  width: 140px;
}

.login {
  background: none;
  border: 1px solid #ff964a;
  color: #ff964a;
}
</style>
