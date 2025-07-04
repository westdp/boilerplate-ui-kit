import { computed } from 'vue';
import moment from 'moment';

export default function useDateFormat(date: string | Date) {
  return computed(() => moment(date).format('YYYY-MM-DD'));
}
