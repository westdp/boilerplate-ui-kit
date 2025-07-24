<template>
  <v-app>
    <BpSidebarContainer
      :nav-items="navItems"
      title="Playground"
      :collapsed="isCollapsed"
      @collapse="isCollapsed = !isCollapsed"
    />

    <v-main>
      <section style="padding: 20px">
        <BpButton label="Primary Button" variant="primary"/>
        <br>
        <BpButton label="Secondary Button" variant="secondary"/>
        <br>
        <BpBadge label="Success Badge" status="success"/>
        <br>
        <v-btn>Hello</v-btn>

        <div class="test-container">
          Text color
        </div>

        <BpInputControl
          v-model="inputValue"
          :is-clearable="true"
          error-message="This is an error message"
        />

        <BpPasswordControl
          v-model="passwordValue"
        />

        <BpButtonIcon
          :color="VuetifyColor.SECONDARY"
          icon="mdi-plus"
        />

        <BpButtonIcon
          :color="VuetifyColor.WARNING"
          icon="mdi-plus"
          tooltip="Warning message"
        />

        <BpButtonIcon
          :color="VuetifyColor.PRIMARY"
          icon="mdi-plus"
          :disabled="true"
        />

        <BpTable
          :headers="tableHeaders"
          :items="tableData"
          :loading="false"
          :selectable="true"
        >
        </BpTable>
      </section>
    </v-main>
  </v-app>

  <BpConfirmDialog/>
</template>

<script lang="ts" setup>
import { onMounted, Ref, ref } from 'vue';
import { INavigation } from '@boilerplate-ui-kit';
import { VuetifyColor } from '@boilerplate-ui-kit/models';
import {
  BpBadge,
  BpButton,
  BpButtonIcon,
  BpInputControl,
  BpPasswordControl,
  BpSidebarContainer,
  BpConfirmDialog,
  BpTable,
} from '@boilerplate-ui-kit/components';
import { ITableHeader } from '@boilerplate-ui-kit/models/table';

const inputValue = ref<string | null>(null);
const passwordValue = ref<string | null>(null);
const isCollapsed = ref<boolean>(true);
const navItems: INavigation = ref([
  {
    id: '1',
    title: 'Client',
    name: 'client',
    url: '/client',
    items: [],
    icon: 'mdi-account-tie-hat-outline',
    active: false,
  },
  {
    id: '2',
    title: 'Settings',
    name: 'settings',
    url: '/settings',
    items: [],
    icon: 'mdi-vector-link',
    active: false,
  },
  {
    id: '3',
    title: 'Users',
    name: 'users',
    url: '/users',
    items: [
      {
        id: '3-1',
        title: 'User List',
        name: 'user-list',
        url: '/users/list',
        items: [],
        icon: 'mdi-account-multiple',
        active: false,
      },
      {
        id: '3-2',
        title: 'User Profile',
        name: 'user-profile',
        url: '/users/profile',
        items: [],
        icon: 'mdi-account-circle',
        active: false,
      }
    ],
    icon: 'mdi-account-group',
    active: false,
  },
]);

const tableData = ref([
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
]);
const tableHeaders: Ref<ITableHeader> = ref([
  { title: 'ID', key: 'id', sortable: true },
  { title: 'Name', key: 'name', sortable: true },
  { title: 'Age', key: 'age' }
]);
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
  padding: 20px;
}
</style>