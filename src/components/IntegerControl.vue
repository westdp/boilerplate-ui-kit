<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    modelValue: {
      type: String || Number,
      default: '',
    },
    message: {
      type: String,
      default: null,
    },
    isClearable: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    hideDetails: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const controlValue = computed({
      get: () => props.modelValue?.toString(),
      set: (value: string) => emit('update:modelValue', value ? Number(value) : null)
    });

    return {
      controlValue,
    }
  },
});
</script>

<template>
  <v-text-field
    v-model="controlValue"
    class="integer-input"
    type="number"
    :error-messages="message"
    :clearable="isClearable"
    :hide-details="hideDetails"
    :disabled="isDisabled"
    clear-icon="mdi-close"
  />
</template>