<template>
  <div>
    <app-navbar></app-navbar>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footbar></app-footbar>
  </div>
</template>

<script>
import Navbar from './components/Navigation/Navigation.vue';
import Footbar from './components/Footer/Footer.vue';
export default {
  components: {
    appNavbar: Navbar,
    appFootbar: Footbar,
  },
  created() {
    this.$store.dispatch('tryAutoLogin');
  },
};
</script>

<style>
.slide-enter-active {
  animation: slide-in 600ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 600ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-30px);
    opacity: 0;
  }
}
</style>
