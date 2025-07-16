export interface IBussEvent {
  globalConfirmShow: IBussConfirmDialogData,
  globalConfirmAnswer: boolean,
}

export interface IBussConfirmDialogData {
  title: string;
  message: string;
}