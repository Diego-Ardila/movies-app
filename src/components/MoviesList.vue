<template>
  <div class="movies-list-container">
    <MoviesItem
      v-for="movie in movies.results"
      :key="movie.id"
      :movie="movie"
      :favoriteMovies="favoriteMovies"
      @favoriteClick="handleFavoriteClick"
    >
      <template #image>
        <img :src="imageUrl(movie.poster_path)" alt="movie image">
      </template>
      <template #heading>{{movie.title}}</template>
      <p>Release date: {{movie.release_date}}</p>
      <p>Popularity: {{movie.popularity}}</p>
      <p>Vote average: {{movie.vote_average}}</p>
      <router-link :to="{name: 'movie-detail', params: {id: movie.id}}">More details</router-link>
    </MoviesItem>
  </div>
</template>

<script>
import MoviesItem from "./MoviesItem.vue";

export default {
  props: ['movies'],
  data() {
    return {
      favoriteMovies: []
    }
  },
  components: {
    MoviesItem
  },
  methods: {
    imageUrl(path) {
      return `${import.meta.env.VITE_PICTURES_URL}/${path}`
    },
    handleFavoriteClick({movie, isFavorite}) {
      if(isFavorite) {
        this.favoriteMovies = this.favoriteMovies.filter(retrievedMovie => retrievedMovie.id !== movie.id);
      } else {
        this.favoriteMovies.push(movie);
      }
      localStorage.setItem('favoriteMovies', JSON.stringify(this.favoriteMovies));
    },
    getFavorites() {
      this.favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies') || '[]');
    },
  },
  mounted() {
    this.getFavorites();
  }
}
</script>

<style scoped>
a {
  margin-top: 10px;
}
</style>