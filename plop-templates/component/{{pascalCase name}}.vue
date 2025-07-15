<script lang="ts" setup>
import type { I{{pascalCase name}}Props } from './{{kebabCase name}}.types'

const props = withDefaults(defineProps<I{{pascalCase name}}Props>(), {

});

const emit = defineEmits<{
  (e: 'clicked'): void
}>();

</script>

<template>

</template>

<style lang="scss" scoped>
@use './{{kebabCase name}}.scss';
</style>