<template>
  <div class="main-container">
    <v-card v-scroll.self="onScroll" class="overflow-y-auto" max-height="64vh">
      <div class="d-block text-h8 text-white">
        In the JavaScript code block above, you can see the three new methods
        which are triggered by our transition hooks. The beforeLeave() method
        gets the element of the current page as its only parameter; we can use
        this to get the height of the current page and save it for later usage.
        Next, we can see the enter() method, which is responsible for actually
        triggering the transition of the height of the new page, to which we
        transition. First, we get the final height of the new page and save it
        in a height variable. Next, we set the height of the new page to the
        height of the current page; this is our starting point for the
        transition. And finally, we set the height of the new page to its
        original height back again. We do this inside a setTimeout() function to
        make sure the browser has triggered a paint after setting the height of
        the new page to the height of the current page. Otherwise, we’d see no
        transition effect. After the entrance transition of the new page has
        finished, the afterEnter() method is triggered. Next, we set the height
        of the page back to auto to make sure its height is dynamic again. We do
        this in case new content is rendered or the size of the browser window
        changes.
      </div>
    </v-card>
  </div>
</template>

<style scoped lang="scss">
  .main-container {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 8rem;
  }
</style>
