<script lang="ts" setup>
import './badge.scss'
import { BadgeLabelType, IBadgeProps } from '@/components';
const props = defineProps<IBadgeProps>()
</script>

<template>
  <div
    class="badge"
    :class="status"
  >
    {{ label }}
  </div>
</template>