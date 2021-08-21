export type CommonResponseType<T = {}> = {
  fieldsErrors: Array<string>
  messages: Array<string>
  resultCode: number
  data: T
}