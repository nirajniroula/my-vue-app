<template>
  <v-footer class="bg-black-lighten-3 text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4 text-white"
        :icon="icon"
        variant="text"
        @click="onButtonPress(icon)"
      ></v-btn>
    </div>
    <v-divider></v-divider>
  </v-footer>
</template>
<script setup lang="ts">
  const icons = ['mdi-twitter', 'mdi-github', 'mdi-stack-overflow']
  const onButtonPress = (icon) => {
    switch (icon) {
      case 'mdi-twitter':
        window.open('https://twitter.com/o_well_whatever', '_blank')
        break
      case 'mdi-github':
        window.open('https://github.com/nirajniroula', '_blank')
        break
      case 'mdi-stack-overflow':
        window.open(
          'https://stackoverflow.com/users/4387975/niraj-niroula',
          '_blank'
        )
        break
      default:
        break
    }
  }
</script>
