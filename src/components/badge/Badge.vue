<script lang="ts" setup>
import './badge.scss'
import { BadgeLabelType } from '@/components';
const props = defineProps<{ label: string; status?: BadgeLabelType }>()
</script>

<template>
  <div class="badge" :class="status">
    {{ label }}
  </div>
</template>