export type ResponseType<Data> = {
  errorCode: 0 | 1;
  data?: Data;
  message?: string;
};
