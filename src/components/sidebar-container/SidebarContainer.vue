<script lang="ts" setup>
import { computed } from 'vue';
import type { ISidebarContainerProps } from '@/components';
import SidebarNavCollapsedItem from './SidebarNavCollapsedItem.vue';
import SidebarNavItem from './SidebarNavItem.vue';

const props = withDefaults(defineProps<ISidebarContainerProps>(), {
  title: 'Sidebar',
  collapsed: false,
});

const emit = defineEmits<{
  (e: 'collapsed'): void
}>();

const title = computed(() => props.collapsed ? props.title.charAt(0) : props.title);
const icon = computed(() => props.collapsed ? 'mdi-chevron-right' : 'mdi-chevron-left');
const width = computed(() => props.collapsed ? 88 : 260);
const navItemComponent = computed(() => props.collapsed ? SidebarNavCollapsedItem : SidebarNavItem);
const onToggleCollapse = () => emit('collapsed');
</script>

<template>
  <v-navigation-drawer
    class="sidebar"
    color="primary"
    :width="width"
    permanent
  >
    <template v-slot:prepend>
      <div class="sidebar-header">
        <a
          class="sidebar-title cursor-pointer"
        >
          {{ title }}
        </a>

        <v-icon
          @click="onToggleCollapse"
        >
          {{ icon }}
        </v-icon>
      </div>
    </template>
    <nav class="sidebar-container">
      <component
        v-for="item in navItems"
        :is="navItemComponent"
        :collapsed="props.collapsed"
        :item="item"
        :key="item.id"
      />
    </nav>
    <template v-slot:append>
      Here will be the footer
    </template>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
@use './sidebar-container.scss';
</style>