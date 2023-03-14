<script setup>
import EcosystemIcon from "./icons/IconEcosystem.vue";
</script>

<template>
  <div class="overlay">
    <EcosystemIcon />
    <h4>Loading</h4>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.overlay {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: hsla(160, 100%, 37%, 1);
}
svg {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>