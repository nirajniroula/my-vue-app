<template>
  <v-layout>
    <v-app-bar>
      <v-app-bar-title>Namaste</v-app-bar-title>

      <v-spacer></v-spacer>
      <router-link
        v-slot="{ isActive, isExactActive }"
        to="/my-vue-app/"
        class="menu-wrapper"
        ><button
          :class="[
            'glow-on-hover',
            isActive && 'router-link-active',
            isExactActive && 'router-link-exact-active',
          ]"
          text
        >
          Home
        </button></router-link
      >

      <router-link
        v-slot="{ isActive, isExactActive }"
        to="/my-vue-app/about"
        class="menu-wrapper"
      >
        <button
          :class="[
            'glow-on-hover',
            isActive && 'router-link-active',
            isExactActive && 'router-link-exact-active',
          ]"
          text
        >
          About
        </button>
      </router-link>

      <router-link
        v-slot="{ isActive, isExactActive }"
        to="/my-vue-app/projects"
        class="menu-wrapper"
      >
        <button
          :class="[
            'glow-on-hover',
            isActive && 'router-link-active',
            isExactActive && 'router-link-exact-active',
          ]"
          text
        >
          Projects
        </button>
      </router-link>
      <v-divider inset vertical></v-divider>

      <router-link
        v-slot="{ isActive, isExactActive }"
        to="/my-vue-app/contact"
        class="menu-wrapper"
        ><button
          :class="[
            'glow-on-hover',
            isActive && 'router-link-active',
            isExactActive && 'router-link-exact-active',
          ]"
          text
        >
          Contact
        </button></router-link
      >
    </v-app-bar>
  </v-layout>
</template>

<style scoped lang="scss">
  .menu-wrapper {
    margin-right: 1rem;
  }
  .router-link-active {
    border: 1px solid #fff;
    border-radius: 2px;
  }

  //animation for button
  .glow-on-hover {
    padding: 4px 12px;
    outline: none;
    color: white;
    background: black;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 2px;
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
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 2px;
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
    border-radius: 2px;
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
