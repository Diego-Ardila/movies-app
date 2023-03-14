<template>
  <main class="home-container">
    <loader v-if="loading"/>
    <MoviesList v-else :movies="movies"/>
    <Pagination
      v-if="!loading && movies.results.length > 0"
      v-model="page"
      :records="movies.total_results"
      :per-page="20"
      @paginate="onPaginate"
      :options="{chunk: 7}"
    />
  </main>
</template>

<script>
import MoviesList from "@/components/MoviesList.vue";
import { getMovies } from "../api/movies";
import Pagination from 'vue-pagination-2';
import Loader from '../components/Loader.vue';

export default {
  components: {
    MoviesList,
    Loader,
    Pagination
  },
  data() {
    return {
      loading: false,
      page: 1,
      movies: {
        results: [],
        page: null,
        total_pages: null,
        total_results: null
      }
    }
  },
  methods: {
    onPaginate() {
      this.getMoviesLocal();
    },
    async getMoviesLocal() {
      this.loading = true;
      const dbMovies = await getMovies(this.page);
      this.loading = false;
      this.movies = dbMovies;
    }
  },
  async mounted() {
    this.getMoviesLocal();
  }
}
</script>

<style>
.home-container {
  height: 100vh;
}
</style>