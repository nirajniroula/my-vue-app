<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Vue 3 + TypeScript + Vite + Vuetify 3" />
    <div class="buttons-container">
      <v-btn class="ma-2" color="primary" elevation="0" dark @click="count++">
        <span> Count : {{ count }} </span>
      </v-btn>
    </div>

    <Footer class="creator" />
  </div>
</template>
<script setup lang="ts">
  import { computed, ref } from '@vue/runtime-core'
  import HelloWorld from '../components/HelloWorld.vue'
  import Footer from '../components/Footer.vue'
  import { key } from '../store'
  import { useStore } from 'vuex'

  const count = ref(0)

  const store = useStore(key)
  const auth = computed(() => {
    return store.getters.getAuth
  })
</script>
<style scoped lang="scss">
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 60px;
    text-align: center;
  }
  .creator {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    text-decoration: none;
    color: black;
  }
  .icon {
    color: white;
  }
</style>
