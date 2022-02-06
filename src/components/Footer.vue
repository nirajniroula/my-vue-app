<template>
  <v-footer class="bg-black-lighten-3 text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4 text-white"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>
    <v-divider></v-divider>
  </v-footer>
</template>
<script setup lang="ts">
  const icons = ['mdi-twitter', 'mdi-github', 'mdi-stack-overflow']
</script>
