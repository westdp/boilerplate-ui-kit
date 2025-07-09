<script lang="ts" setup>
import './button.scss';
import type { ButtonProps } from './button.types'

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  variant: 'primary',
  type: 'button',
});
</script>

<template>
  <v-btn :color="variant">{{ label }}</v-btn>
</template>