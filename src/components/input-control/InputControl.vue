<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { IInputControlProps } from '@/components/input-control/input-control.types';

const props = withDefaults(defineProps<IInputControlProps>(), {
  modelValue: '',
  errorMessage: null,
  isClearable: false,
  hideDetails: false,
  readonly: false,
  isDisabled: false,
  isLoading: false,
  appendInnerIcon: null,
  timeout: 500,
  icon: '',
  autoFocus: false,
});

const emit = defineEmits<{
  (e: 'cleared'): void
  (e: 'update:modelValue', value: string | null): void
  (e: 'search', value: string): void
  (e: 'appendInnerClick'): void
}>();

let searchTimeout: number | null = null;
const searchRef = ref<HTMLElement | null>(null);
const controlValue = computed({
  get: () => props.modelValue?.toString(),
  set: (value: string) => emit('update:modelValue', value?.length ? value.trim() : null)
});
const onSearch = () => {
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }

  searchTimeout = window.setTimeout(() => {
    searchTimeout = null;
    emit('search', controlValue.value);
  }, props.timeout);
}

onMounted(() => {
  if (props.autoFocus) {
    // TODO Try to find a better solution
    setTimeout(() => searchRef.value?.focus(), 0);
    setTimeout(() => searchRef.value?.focus(), 100);
  }
});

const onClear = () => emit('cleared');
const onClickAppendInner = () => emit('appendInnerClick');

</script>

<template>
  <v-text-field
    class="bp-input-control"
    ref="searchRef"
    v-model.trim="controlValue"
    type="text"
    :error-messages="errorMessage"
    :clearable="isClearable"
    :hide-details="hideDetails"
    :placeholder="placeholder"
    :readonly="readonly"
    :disabled="isDisabled"
    clear-icon="mdi-close"
    @input="onSearch"
    :loading="isLoading"
    @click:clear="onClear"
    @click:append-inner="onClickAppendInner"
  />
</template>

<style lang="scss">
@use "input-control";
</style>
