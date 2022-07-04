export type ResponseType<Data> = {
  errorCode: 0 | 1;
  data?: Data;
  errorMsg?: string;
};
