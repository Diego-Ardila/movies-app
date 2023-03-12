<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit="login" class="form">
      <text-input
        label="User name"
        v-model="email"
        type="text"
        id="email"
        :error="errors.email"
      />

      <text-input
        label="Password"
        v-model="password"
        type="password"
        id="password"
        :error="errors.password"
      />

      <ul v-if="errors.email || errors.password">
        <li v-for="error in filteredErrors" :key="error">
          {{ error }}
        </li>
      </ul>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import TextInput from '../components/TextInput.vue';
export default {
  components: { TextInput },

  data() {
    return {
      email: '',
      password: '',
      errors: {
        email: null,
        password: null
      }
    }
  },

  computed: {
    filteredErrors() {
      return Object.values(this.errors).filter(el => el);
    }
  },

  methods: {
    async login(event) {
      event.preventDefault();
      this.emailValidator();
      this.passwordValidator();
      if(!this.errors.email && !this.errors.password) {
        const token = import.meta.env.VITE_TOKEN;
        localStorage.setItem('token', token);
        this.$router.push("/");
      }
    },

    emailValidator() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!this.email.length) {
        this.errors.email = 'Email required';
      } else if(!re.test(this.email)) {
        this.errors.email = 'The email is not valid';
      } else {
        this.errors.email = null
      }
    },

    passwordValidator() {
      const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      if(!this.password.length) {
        this.errors.password = 'Password required';
      } else if(!re.test(this.password)) {
        this.errors.password = 'The password should contain 6 to 20 characters, at least one numeric digit, one uppercase and one lowercase letter';
      } else {
        this.errors.password = null;
      }
    }
  }
}
</script>

<style scoped>
@media (max-width: 1023px) {
  .login {
    width: 70%;
  }
}
@media (min-width: 1024px) {
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 300px;
  }
}
h1 {
  margin-bottom: 24px;
}
.form {
  display: flex;
  flex-direction: column;
}
.form > button {
  align-self: center;
  margin-top: 10px;
}
ul {
  padding-left: 20px;
  margin-bottom: 10px;
}
ul > li {
  color: red;
}
</style>