<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    isClearable: {
      type: Boolean,
      default: false,
    },
    hideDetails: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    appendInnerIcon: {
      type: String,
      default: null,
    },
    timeout: {
      type: Number,
      default: 500,
    },
    icon: {
      type: String,
      default: null,
    },
    autoFocus: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['cleared', 'update:modelValue', 'search', 'appendInnerClick'],
  setup(props, { emit }) {
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

    return {
      props,
      controlValue,
      searchRef,
      onSearch,
      onClear,
      onClickAppendInner,
    }
  },
});
</script>

<template>
  <v-text-field
    ref="searchRef"
    v-model.trim="controlValue"
    class="full-width"
    type="text"
    :error-messages="errorMessage"
    :clearable="isClearable"
    :hide-details="hideDetails"
    :placeholder="placeholder"
    :readonly="readonly"
    :disabled="isDisabled"
    :append-inner-icon="props.icon"
    clear-icon="mdi-close"
    @input="onSearch"
    :loading="isLoading"
    @click:clear="onClear"
    @click:append-inner="onClickAppendInner"
  />
</template>