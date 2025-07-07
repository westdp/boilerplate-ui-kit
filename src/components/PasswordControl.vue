<script lang="ts">
import { computed, ComputedRef, defineComponent, ref, watch } from 'vue';

export default defineComponent({
  props: {
    message: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
  },

  setup(props, { emit }) {
    const errorMessage = ref<string>('');
    const passwordValue = computed({
      get: () => props.modelValue,
      set: (value: string) => emit('update:modelValue', value)
    });

    const showPassword = ref(false);
    const type: ComputedRef<string> = computed(() => (showPassword.value ? 'text' : 'password'));
    const icon: ComputedRef<string> = computed(() => (showPassword.value ? 'mdi-eye' : 'mdi-eye-off'));
    const toggleShowPassword = () => showPassword.value = !showPassword.value;

    watch(() => props.message, (value: string) => errorMessage.value = value);

    return {
      passwordValue,
      errorMessage,
      type,
      icon,
      toggleShowPassword,
    }
  }
});
</script>

<template>
  <v-text-field
    v-model="passwordValue"
    :type="type"
    :error-messages="errorMessage"
    :append-inner-icon="icon"
    @click:append-inner="toggleShowPassword"
    autocomplete="on"
    data-e2e="password-field"
  />
</template>