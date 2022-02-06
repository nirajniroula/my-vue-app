<template>
  <h1>{{ msg }}</h1>
  <p class="mb-5">
    With fully functional configrations for Vuex, Router, SCSS, Vuetify themes,
    Directives, Middlewares, mixins and plugins. <br />
    All written in typescript Modular form with single file component and script
    setup mode for vue. <br/>
    This boilerplate was taken from
    <a
      href="https://github.com/peshanghiwa/Vue3-Vite-Vuetify3-Typescript-Template"
      target="_blank"
      class="creator"
      >here</a
    >
    and modified by
    <a
      href="https://github.com/nirajniroula"
      target="_blank"
      class="creator"
      >Niraj Niroula</a
    >.
  </p>
</template>

<script setup lang="ts">
  import { defineProps } from '@vue/runtime-core'
  defineProps<{ msg: string }>()
</script>
