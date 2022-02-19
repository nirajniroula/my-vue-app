<template>
  <div class="main-container">
    <div class="info-container">
      <div class="text-h7 text-white">this is</div>
      <div class="text-h4 text-white">niraj niroula</div>
      <div class="text-h6 text-white">{front-end & mobile app developer}</div>
      <NetworkParticles />
      <button class="glow-on-hover" type="button">hello</button>
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
    animation-duration: 2s;
    animation-name: slidein;
    margin-top: 3rem;
  }
  .image {
    zindex: 2;
  }

  //animation for text
  .text-h6 {
    animation-duration: 3s;
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

  //animation for button
  .glow-on-hover {
    width: 220px;
    height: 50px;
    border: 1px solid white;
    outline: none;
    color: white;
    background: black;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    margin-top: 2rem;
  }

  .glow-on-hover:before {
    content: '';
    background: linear-gradient(
      90deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  .glow-on-hover:active {
    color: #000;
  }

  .glow-on-hover:active:after {
    background: transparent;
  }

  .glow-on-hover:hover:before {
    opacity: 1;
  }

  .glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
</style>
