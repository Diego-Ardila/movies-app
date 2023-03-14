<template>
  <main>
    <loader v-if="loading"/>
    <div v-else class="movies-list-container">
      <h1>{{movie.title}}</h1>
      <div class="primary-data">
        <img width="300px" :src="imageUrl(movie.poster_path)" alt="movie image">
        <div class="primary-data--info">
          <p>Release date: {{movie.release_date}}</p>
          <p>Popularity: {{movie.popularity}}</p>
          <p>Vote average: {{movie.vote_average}}</p>
          <p>Budget: ${{movie.budget}}</p>
          <p>Revenue: ${{movie.revenue}}</p>
        </div>
      </div>
      <p>Overview: {{movie.overview}}</p>
    </div>
  </main>
</template>

<script>
import { getMovie } from '../api/movies';
import Loader from '../components/Loader.vue';

export default {
  components: {
    Loader
  },
  data() {
    return {
      loading: true,
      movie: {}
    }
  },
  methods: {
    imageUrl(path) {
      return `${import.meta.env.VITE_PICTURES_URL}/${path}`
    },
  },
  async mounted() {
    this.loading = true;
    try {
      const dbMovie = await getMovie(this.$route.params.id);
      this.movie = dbMovie;
    } catch(err) {
      console.log(err);
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style scoped>
.primary-data {
  display: flex;
  flex-direction: row;
}
.primary-data--info {
  padding: 20px;
}
h1 {
  text-align: center;
  margin: 20px;
}

@media (max-width: 1024px) {
  .primary-data {
    justify-content: center;
  }
}
</style>