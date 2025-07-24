<script lang="ts" setup>
import { computed, Ref, ref } from 'vue';
import { ITableHeader, ITableProps, ITableUpdateOptions } from '../../models/table';
import { VuetifyColor } from '../../models';
import { TokenUtils } from '../../utils';
import TableFooter from './TableFooter.vue';
import TableSettingColumns from './TableSettingColumns.vue';

const props = withDefaults(defineProps<ITableProps>(), {
  id: () => TokenUtils.generate(),
  headers: () => [],
  items: () => [],
  totalItems: 0,
  sortBy: () => [],
  loading: false,
  filter: () => ({ page: 1, itemsPerPage: 20, pagination: true }),
  hideFooter: false,
  showSelect: false,
  flexible: false,
  showExpand: false,
  rowProps: () => ({}),
});

const emit = defineEmits<{
  (e: 'selected-items', items: any[]): void;
  (e: 'table-updated', options: ITableUpdateOptions): void;
  (e: 'force-update'): void;
}>();

const tableLoaderStr = computed(() => `table-row@${ props.filter.itemsPerPage }`);
const columns = ref<ITableHeader[]>([...props.headers]);
const selectedItems = ref<any[]>([]);
const tableHeight: Ref<number> = ref(0);
const isHideNextPage = computed(() => props.items?.length < props.filter?.itemsPerPage);

const onUpdateSelectedItems = (items: any[]) => emit('selected-items', items);
const onUpdateTable = (options: ITableUpdateOptions) => emit('table-updated', options);
const onResize = () => {
  if (props.flexible) {
    setTimeout(() => {
      const element = document.getElementById(props.id);
      const screenH = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      const footerH = 85;
      const height: number = element ? screenH - element.getBoundingClientRect().y - footerH : 0;

      tableHeight.value = height < 400 ? 400 : height;
    }, 0);
  }
};
const onApplyFilters = () => {
  onResize();
  props.filter.page = 1;
  emit('force-update');
};
</script>

<template>
  <section class="table-container">
    <div class="table-head">
      <div>
        <slot name="table-head-left-side"></slot>
      </div>
      <div class="table-head__actions action-container">
        <v-btn
          :color="VuetifyColor.SECONDARY"
          prepend-icon="mdi-refresh"
          @click="onApplyFilters"
          :disabled="loading"
        >
          Refresh
        </v-btn>

        <TableSettingColumns
          :id="id"
          :headers="headers"
          @updated="columns = $event"
        />
      </div>
    </div>
    <v-data-table-server
      :id="id"
      v-resize="onResize"
      v-model:page="filter.page"
      v-model:items-per-page="filter.itemsPerPage"
      v-model="selectedItems"
      class="table"
      :headers="columns"
      :items="items"
      :items-per-page-options="[10, 20, 50, 100]"
      :loading="loading"
      :sort-by="sortBy"
      :items-length="totalItems"
      fixed-footer
      fixed-header
      :height="flexible ? tableHeight : undefined"
      :hide-default-footer="true"
      :show-expand="showExpand"
      :row-props="rowProps"
      @update:options="onUpdateTable"
      @update:model-value="onUpdateSelectedItems"
      :show-select="showSelect"
      item-value="@id"
      return-object
    >
      <!-- @vue-skip -->
      <template v-for="(_, scopedSlotName) in $slots" v-slot:[scopedSlotName]="slotData">
        <slot :name="scopedSlotName" v-bind="slotData"/>
      </template>
      <template v-slot:loading>
        <v-skeleton-loader :type="tableLoaderStr"></v-skeleton-loader>
      </template>
    </v-data-table-server>
    <TableFooter
      v-if="!hideFooter"
      :filter="filter"
      :loading="loading"
      :total-items="totalItems"
      :hide-next-page="isHideNextPage"
    />
  </section>
</template>

<style lang="scss">
@use "table";
</style>