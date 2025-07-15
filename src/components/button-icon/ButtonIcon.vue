<script lang="ts" setup>
import type { IButtonIconProps } from '@/components'

const props = withDefaults(defineProps<IButtonIconProps>(), {
  icon: '',
  text: '',
  disabled: false,
});

const emit = defineEmits<{
  (e: 'clicked'): void
}>();

const getBgClass = () => `bg-${props.color}`;
const onClick = () => emit('clicked');

console.log('ButtonIcon props:', props);

</script>

<template>
  <v-btn
    v-if="text"
    :color="color"
    :disabled="disabled"
    :class="[additionalClass]"
    @click="onClick"
  >
    <v-icon class="button-icon-icon">{{ icon }}</v-icon>
    {{ text }}
  </v-btn>
  <v-icon
    v-if="icon && !tooltip"
    class="button-icon"
    :class="[getBgClass(), additionalClass]"
    :disabled="disabled"
    @click="onClick"
  >
    {{ icon }}
  </v-icon>
  <span class="cursor-pointer" v-else v-tooltip="tooltip">
    <v-icon
      class="button-icon"
      :class="[getBgClass(), additionalClass]"
      :disabled="disabled"
      @click="onClick"
    >
      {{ icon }}
    </v-icon>
  </span>
</template>

<style lang="scss" scoped>
@use './button-icon.scss';
</style>