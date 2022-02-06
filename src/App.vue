<template>
  <v-app>
    <v-app-bar app>
      <BottomTabBar />
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="container">
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
  import BottomTabBar from './components/BottomTabBar.vue'
  import Footer from './components/Footer.vue'
</script>

<style scoped lang="scss">
  .container {
    background: black;
    height: 100%;
  }
</style>
