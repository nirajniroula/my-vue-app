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
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
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
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
