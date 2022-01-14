export type InputFieldProps = {
  inputText: string
  setInputText: React.Dispatch<React.SetStateAction<string>>
  handleCheckBand: () => Promise<void>
}

export enum WordLength {
  NORMAL = 28,
  LONG = 32,
  REALLY_LONG = 40,
  TOO_LONG = 50,
}
