<script setup>
import FavoriteIcon from "./icons/IconSupport.vue";
</script>

<template>
  <div class="item">
    <slot name="image"></slot>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
    <span @click="$emit('favoriteClick', {movie, isFavorite})">
      <FavoriteIcon :class="{['is-favorite']: isFavorite}" />
    </span>
  </div>
</template>

<script>
export default {
  props: ['movie', 'favoriteMovies'],
  computed: {
    isFavorite() {
      return this.favoriteMovies.find(retrievedMovie => retrievedMovie.id === this.movie.id) ? true : false;
    }
  }
}
</script>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  padding-right: 20px !important;
}

.item > span:hover {
  cursor: pointer;
}

img {
  width: 100px;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 6px;
  }
}
.is-favorite {
  color: red;
}
</style>
