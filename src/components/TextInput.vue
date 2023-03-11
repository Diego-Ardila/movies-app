<template>
  <div class="form-field">
    <label v-if="label" for="text-input">{{ label }}:</label>
    <input
      :value="value"
      :type="type"
      name="text-input"
      class="text-input"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      :id="id"
    />
    <div :class="['line', error ? 'error' : '']" ></div>
  </div>
</template>

<script>
export default {
  props: ['value', 'label', 'type', 'error', 'id']
}
</script>

<style scoped>
.text-input {
  background: 0;
  border: 0;
  outline: none;
  font-size: 1em;
  font-family: inherit;
  color: white;
  width: 100%;
}
label {
  margin-right: 10px;
  margin-bottom: 1.3em;
}
.text-input:focus + .line::after{
  transform: scaleX(1);
}
.text-input:focus ~ label {
  position: absolute;
  top: -20px;
}
.form-field {
  position: relative;
  margin-bottom: 20px;
}
.line {
  width: 100%;
  height: 3px;
  position: absolute;
  bottom: -8px;
  background-color: #bdc3c7;
}
.line::after {
  content: " ";
  position: absolute;
  float: right;
  width: 100%;
  height: 3px;
  transform: scalex(0);
  transition: transform 0.3s ease;
  background-color: #1abc9c;
}
.error {
  width: 100%;
  height: 3px;
  position: absolute;
  bottom: -8px;
  background-color: red;
}
</style>