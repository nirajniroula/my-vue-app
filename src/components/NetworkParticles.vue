<template>
  <div id="app">
    <Particles
      id="tsparticles"
      :particles-init="particlesInit"
      :particles-loaded="particlesLoaded"
      url="http://foo.bar/particles.json"
    />

    <Particles
      id="tsparticles"
      :particles-init="particlesInit"
      :particles-loaded="particlesLoaded"
      :options="{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 1,
              duration: 2,
              opacity: 0.8,
              size: 12,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ['#ffebd1', '#ffd7ae', 'e4e8ff', 'cad8ff', '#ffffff'],
            random: true,
          },
          links: {
            distance: 600,
            enable: false,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: true,
            speed: 0.1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 30,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: ['edge', 'circle', 'polygon'],
          },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: true,
      }"
    />
  </div>
</template>
