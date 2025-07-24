<script lang="ts" setup>
import { onBeforeUnmount, reactive } from 'vue';
import { IBussConfirmDialogData } from '../../models/buss-event';
import EventBus from '../../plugins/event-bus';
import { VuetifyColor } from '../../models';

const dialogData = reactive({
  show: false,
  message: '',
  title: 'Confirm action',
});

const listener = (data: IBussConfirmDialogData) => {
  dialogData.show = true;
  dialogData.message = data.message;
  dialogData.title = data.title || 'Confirm action';
}

EventBus.on('globalConfirmShow', listener);

onBeforeUnmount(() => {
  EventBus.off('globalConfirmShow', listener);
});

const handleAnswer = (answer: boolean) => {
  EventBus.emit('globalConfirmAnswer', answer)
  dialogData.show = false
}
</script>

<template>
  <v-dialog
    v-model="dialogData.show"
    width="500"
    @click:outside="handleAnswer(false)"
  >
    <section class="modal-container">
      <h3
        class="modal-title"
        data-e2e="global-dialog-confirm-title"
      >
        {{ dialogData.title }}
      </h3>

      <p
        class="modal-text"
        data-e2e="global-dialog-confirm-message"
      >
        {{ dialogData.message }}
      </p>

      <div class="modal-actions">
        <v-btn
          class="action-button modal-fixed-button"
          :color="VuetifyColor.SECONDARY"
          data-e2e="global-dialog-confirm-cancel-button"
          @click="handleAnswer(false)"
        >
          Cancel
        </v-btn>
        <v-btn
          class="action-button modal-fixed-button"
          :color="VuetifyColor.PRIMARY"
          data-e2e="global-dialog-confirm-confirm-button"
          @click="handleAnswer(true)"
        >
          Confirm
        </v-btn>
      </div>
    </section>
  </v-dialog>
</template>

<style lang="scss" scoped>
@use './confirm-dialog.scss';
</style>