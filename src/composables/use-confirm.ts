import EventBus from '../plugins/event-bus';
import { IBussConfirmDialogData } from '../models/buss-event';

export const useConfirm = () => {
  return {
    show(data: IBussConfirmDialogData): Promise<boolean> {
      EventBus.emit('globalConfirmShow', data);

      return new Promise<boolean>((resolve): void => {
        return EventBus.on('globalConfirmAnswer', (answer: boolean) => resolve(answer))
      });
    },
  }
}