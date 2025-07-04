<script lang="ts">
import { defineComponent, PropType } from 'vue';

export type LabelType = 'success' | 'error' | 'info' | 'default';

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    status: {
      type: String as PropType<LabelType>,
      default: 'default',
    }
  },
  setup(props) {
    return {
      props
    }
  },
});
</script>

<template>
  <div class="badge" :class="props.status">
    {{ label }}
  </div>
</template>

<style lang="scss" scoped>
.badge {
  border-radius: 4px;
  padding: 2px 8px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  word-break: break-word;
  min-width: 100px;

  &.success {
    background-color: #E5F8EF;
    color: #54B370;
  }

  &.error {
    background-color: #FCEDF0;
    color: #C36482;
  }

  &.info {
    color: #2F80ED;
    background: #E2F1FF;
  }

  &.default {
    background-color: #E5E5E5;
    color: #403F3B;
  }
}
</style>