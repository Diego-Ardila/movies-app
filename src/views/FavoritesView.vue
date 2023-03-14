<template>
  <main class="favorites-container">
    <MoviesList :movies="movies"/>
    <Pagination
      v-if="movies.results.length > 0"
      v-model="page"
      :records="retrievedData.length"
      :per-page="perPage"
      @paginate="onPaginate"
      :options="{chunk: 7}"
    />
  </main>
</template>

<script>
import MoviesList from "@/components/MoviesList.vue";
import Pagination from 'vue-pagination-2';

export default {
  components: {
    MoviesList,
    Pagination
  },
  data() {
    return {
      retrievedData: [],
      page: 1,
      perPage: 5,
      movies: {
        results: [],
      }
    }
  },
  methods: {
    getFavorites() {
      this.retrievedData = JSON.parse(localStorage.getItem('favoriteMovies') || '[]');
    },
    onPaginate() {
      const from = (this.page - 1) * this.perPage;
      const to = from + this.perPage;
      this.movies.results = this.retrievedData.slice(from, to);
    }
  },
  mounted() {
    this.getFavorites();
    this.movies.results = this.retrievedData.slice(0, this.perPage);
  }
}
</script>

<style>
.favorites-container {
  height: 100vh;
}
</style>
