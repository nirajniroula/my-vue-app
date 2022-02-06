<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Vue 3 + TypeScript + Vite + Vuetify 3" />
    <div class="buttons-container">
      <v-btn class="ma-2" color="primary" elevation="0" dark @click="count++">
        <span> Count : {{ count }} </span>
      </v-btn>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from '@vue/runtime-core'
  import HelloWorld from '../components/HelloWorld.vue'

  const count = ref(0)
</script>
<style scoped lang="scss">
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  .icon {
    color: white;
  }
</style>
