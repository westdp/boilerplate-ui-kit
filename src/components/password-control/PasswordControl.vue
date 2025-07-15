<script lang="ts" setup>
import { computed, ComputedRef, ref } from 'vue';
import './password-control.scss';
import type { IPasswordControlProps } from './password-control.types';

const props = withDefaults(defineProps<IPasswordControlProps>(), {
  modelValue: '',
  errorMessage: null,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void
}>();

const passwordValue = computed({
  get: () => props.modelValue?.toString(),
  set: (value: string) => emit('update:modelValue', value?.length ? value.trim() : null)
});

const showPassword = ref(false);
const type: ComputedRef<string> = computed(() => (showPassword.value ? 'text' : 'password'));
const icon: ComputedRef<string> = computed(() => (showPassword.value ? 'mdi-eye' : 'mdi-eye-off'));
const toggleShowPassword = () => showPassword.value = !showPassword.value;
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