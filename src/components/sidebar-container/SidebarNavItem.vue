<script lang="ts" setup>
import { computed } from 'vue';
import { ISidebarNavItemProps } from '@/components';

const props = withDefaults(defineProps<ISidebarNavItemProps>(), {
  collapsed: false,
});

const hasChildren = computed(() => props.item && props.item.items.length > 0);
</script>

<template>
  <template v-if="hasChildren">
    <div
      class="menu-item cursor-pointer"
      :class="{ active: item && item.active }"
    >
      <v-icon
        class="menu-item-icon"
        :icon="item.icon"
      />
      {{ item.title }}
    </div>

    <ul class="menu-sub">
      <router-link
        v-for="subMenu in item.items"
        active-class="active"
        exact-active-class="active"
        class="menu-sub-item"
        :class="{ active: subMenu.active }"
        :key="subMenu.name"
        :to="subMenu.url"
      >
        {{ subMenu.title }}
      </router-link>
    </ul>
  </template>
  <router-link
    v-else
    class="menu-item cursor-pointer"
    :class="{ active: item.active }"
    :to="item.url"
  >
    <v-icon
      class="menu-item-icon"
      :icon="item.icon"
    />
    {{ item.title }}
  </router-link>
</template>

<style lang="scss" scoped>
@use './sidebar-menu';
</style>