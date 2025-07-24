<script setup lang="ts">
import { computed, Ref, ref } from 'vue';
import { ITableHeader, ITableSettingColumnsProps } from '../../models/table';
import { TokenUtils } from '../../utils';
import { useOverlay } from '../../composables';

const props = withDefaults(defineProps<ITableSettingColumnsProps>(), {
  id: () => TokenUtils.generate(),
  headers: () => [],
});

const emit = defineEmits<{
  (e: 'updated', items: ITableHeader[]): void;
}>();

const { overlay, toggleOverlay } = useOverlay();
const allCheckboxValue: Ref<boolean> = ref(false);
const getColumns = (): ITableHeader[] => {
  return props.headers.map((header: ITableHeader) => ({
    ...header,
    selected: true
  }));
};
const columns = ref<ITableHeader[]>(getColumns());
const isIndeterminateAllCheckbox = computed(() => {
  const isSomeSelected = columns.value.some(({ selected }: ITableHeader) => selected);

  return isSomeSelected && !allCheckboxValue.value || isSomeSelected && !allCheckboxValue.value;
});
const onApplyChanges = () => {
  const selectedColumns: ITableHeader[] = columns.value.filter(({ selected }: ITableHeader) => selected);

  if (selectedColumns.length) {
    overlay.value = false;
    emit('updated', selectedColumns);
    return;
  } else {
    alert('Please select at least one column');
  }
};
const onSelectAll = () => {
  columns.value.forEach((column: ITableHeader) => column.selected = allCheckboxValue.value);
}
const onUpdateColumnSelect = () => {
  allCheckboxValue.value = columns.value.every(({ selected }: ITableHeader) => selected);
}

</script>

<template>
  <section>
    <v-btn
      color="primary"
      prepend-icon="mdi-cog-outline"
      @click="toggleOverlay"
    >
      Columns settings
    </v-btn>
    <v-overlay
      v-model="overlay"
      class="table-overlay"
    >
      <div
        class="table-menu box-shadow"
        @click:outside="toggleOverlay"
      >
        <p class="table-menu-title">Column settings</p>
        <div class="table-menu-content">
          <v-checkbox
            class="select-all-line"
            v-model="allCheckboxValue"
            label="Select all"
            hide-details
            color="blue"
            :indeterminate="isIndeterminateAllCheckbox"
            @change="onSelectAll"
          />
          <v-checkbox
            v-for="column in columns"
            v-model="column.selected"
            :label="column.title"
            class="select-line"
            hide-details
            color="blue"
            @update:model-value="onUpdateColumnSelect"
          />
        </div>
        <v-btn
          class="full-width"
          color="primary"
          @click="onApplyChanges"
        >
          Apply changes
        </v-btn>
      </div>
    </v-overlay>
  </section>
</template>

<style scoped lang="scss">
.table-footer {
  padding: 8px 4px;
  font-size: 12px;

  &-action {
    width: 20px;
    height: 20px !important;
  }

  &-icon {
    font-size: 24px;
    color: var(--ui-label-color);
    border-radius: 50%;
  }

  &_text {
    color: #B3B3B3;
  }

  &-per-page {
    max-width: 60px;

    .v-select__selection-text {
      font-size: 12px;
    }

    .v-field__input {
      padding: 5px !important;
    }

    .v-field__outline {
      display: none;
    }
  }
}
</style>