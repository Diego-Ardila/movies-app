<script setup>
import DocumentationIcon from "./icons/IconDocumentation.vue";
</script>

<template>
  <div class="typeahead">
    <TextInput
      placeholder="Search movie"
      v-model="query"
      type="text"
      id="typeahead"
      @input="search"
    />
    <DocumentationIcon />
    <div class="dropdown">
      <ul v-if="isDropdownOpen">
        <li v-for="option in options" :key="option.id" @click="onClick(option)">
          {{ option.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TextInput from "../components/TextInput.vue";
import debounce from "lodash/debounce";
import { searchMovies } from "../api/movies";

export default {
  components: { TextInput },
  data() {
    return {
      query: "",
      isDropdownOpen: false,
      options: [],
    };
  },
  methods: {
    search: debounce(async function () {
      try {
        if (this.query.length > 1) {
          const page = 1;
          const movies = await searchMovies(page, this.query);
          this.options = movies.results;
          this.isDropdownOpen = true;
        } else {
          this.query = "";
          this.isDropdownOpen = false;
        }
      } catch (err) {
        console.log(err);
      }
    }, 1000),
    onClick(option) {
      this.query = option.title;
      this.isDropdownOpen = false;
      this.$emit("selection", option.title);
    },
  },
};
</script>

<style scoped>
.typeahead {
  margin-top: 5px;
  position: relative;
}
@media (max-width: 1024px) {
  .typeahead {
    margin-top: 30px;
  }
}
.dropdown {
  position: absolute;
  background: rgba(0, 0, 0, 0.877);
  width: 100%;
  z-index: 10;
  top: 35px;
  max-height: 192px;
  overflow-y: auto;
}
.dropdown li:hover {
  cursor: pointer;
  color: hsla(160, 100%, 37%, 1);
}
.typeahead svg {
  position: absolute;
  right: 12px;
  top: 5px;
}
</style>
