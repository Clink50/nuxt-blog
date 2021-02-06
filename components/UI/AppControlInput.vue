<template>
  <div class="input-control">
    <label><slot /></label>
    <input
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <textarea
      v-if="controlType === 'textarea'"
      rows="10"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input',
    },
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.input-control {
  margin: 10px 0;

  label {
    display: block;
    font-weight: bold;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    box-sizing: border-box;
    font: inherit;
    border: 1px solid #ccc;
    padding: 5px;
  }

  input:focus,
  textarea:focus {
    background-color: #eee;
    outline: none;
  }
}
</style>
