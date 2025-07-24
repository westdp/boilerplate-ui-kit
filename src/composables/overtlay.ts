import { Ref, ref } from 'vue';

export function useOverlay() {
  const overlay: Ref<boolean> = ref<boolean>(false);
  const toggleOverlay = () => overlay.value = !overlay.value;

  return {
    overlay,
    toggleOverlay,
  }
}