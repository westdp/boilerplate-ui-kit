<template>
  <div style="padding: 2rem">
    <UiButton label="Primary Button" variant="primary"/>
    <br>
    <UiButton label="Secondary Button" variant="secondary"/>
    <br>
    <UiBadge label="Success Badge" status="success"/>
    <br>
    <v-btn>Hello</v-btn>

    <div class="test-container">
      Text color
    </div>
  </div>
</template>

<script lang="ts" setup>
import { UiButton } from '@boilerplate-ui-kit/components/button'
import { UiBadge } from '@boilerplate-ui-kit/components/badge'
</script>

<style lang="scss" scoped>
.test-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  background-color: var(--ui-primary);
  color: white;
}
</style>