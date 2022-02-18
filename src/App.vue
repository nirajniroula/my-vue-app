<template>
  <v-app>
    <v-app-bar app>
      <TopNavBar />
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main class="main-container">
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
  import TopNavBar from './components/TopNavBar.vue'
  import Footer from './components/Footer.vue'
</script>

<style scoped lang="scss">
  .main-container {
    background: black;
  }
  .container {
    background: black;
    height: 64vh;
  }
</style>
