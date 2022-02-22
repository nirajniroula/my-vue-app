<template>
  <div class="main-container">
    <div class="info-container">
      <div class="text-h7 text-white">this is</div>
      <div class="text-h4 text-white">niraj niroula</div>
      <div class="text-h6 text-white">{front-end & mobile app developer}</div>
      <NetworkParticles />
    </div>
    <img class="image" alt="Vue logo" src="../assets/photo.jpg" />
  </div>
</template>

<script setup lang="ts">
  import NetworkParticles from '../components/NetworkParticles.vue'
</script>

<style scoped lang="scss">
  .main-container {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding-right: 8rem;
  }
  .info-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 1rem;
  }
  .text-h4 {
    animation-duration: 1s;
    animation-name: slidein;
    margin-top: 3rem;
  }
  .image {
    zindex: 2;
  }

  //animation for text
  .text-h6 {
    animation-duration: 10s;
    animation-name: slidein;
    margin-top: 1rem;
  }

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
</style>
