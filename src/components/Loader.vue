<template>
  <div class="loader">
    <v-progress-circular
      indeterminate
      color="primary"
      :size="70"
      :width="7"
    />
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style scoped>
.loader {
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw !important;
  height: 100vh !important;
  margin: -16px;
  background-color:rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
