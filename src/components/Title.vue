<template>
  <div class="greetings">
    <h1 class="green">Movies app</h1>
    <h3>
      Vue js app for searching your favorite movies, developed By 
      <a target="_blank" href="https://www.linkedin.com/in/dardila-90">Diego Ardila</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    display: block;
    text-align: left;
  }
}
</style>
