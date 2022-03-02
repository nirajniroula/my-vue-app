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
        <router-view v-slot="{ Component }">
          <transition name="slide-fade" mode="out-in">
            <component :is="Component" :key="$route.path" />
          </transition>
        </router-view>
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
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
</style>
