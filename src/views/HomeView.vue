<template>
  <main class="home-container">
    <Typeahead @selection="onSelection" />
    <loader v-if="loading" />
    <MoviesList className="movies-list-container" v-else :movies="movies" />
    <Pagination
      v-if="!loading && movies.results.length > 0"
      v-model="page"
      :records="movies.total_results"
      :per-page="20"
      @paginate="onPaginate"
      :options="{ chunk: 7 }"
    />
  </main>
</template>

<script>
import MoviesList from "@/components/MoviesList.vue";
import { getMovies, searchMovies } from "../api/movies";
import Pagination from "vue-pagination-2";
import Loader from "../components/Loader.vue";
import Typeahead from "../components/Typeahead.vue";

export default {
  components: {
    MoviesList,
    Loader,
    Pagination,
    Typeahead,
  },
  data() {
    return {
      loading: true,
      page: 1,
      movies: {
        results: [],
        page: null,
        total_pages: null,
        total_results: null,
      },
    };
  },
  methods: {
    onPaginate() {
      this.getMoviesLocal();
    },
    async getMoviesLocal() {
      this.loading = true;
      try {
        const dbMovies = this.$route.query.search
          ? await searchMovies(this.page, this.$route.query.search)
          : await getMovies(this.page);
        this.movies = dbMovies;
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
    async onSelection(query) {
      this.page = 1;
      this.$router.push({ name: "home", query: { search: query } });
      this.getMoviesLocal();
    },
  },
  async mounted() {
    this.getMoviesLocal();
  },
};
</script>

<style>
.home-container {
  height: 100vh;
}
</style>
