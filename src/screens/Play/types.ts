export enum Fail {
  ALREADY_USED,
  NOT_FOUND,
  OUT_OF_TIME,
  WRONG_LETTER,
}

export enum Time {
  short = 1000,
  medium = 2000,
  long = 3000,
}

export enum Message {
  TYPE = 'PRESS HERE TO TYPE',
  GET_READY = 'GET READY...',
  CHECKING = 'CHECKING...',
  CORRECT = 'CORRECT',
  ALREADY_USED = 'Already used!',
  NOT_FOUND = 'No such band or artist!',
  OUT_OF_TIME = "Time's up, snailfinger!",
  WRONG_LETTER = 'Wrong letter!',
  PLAY_AGAIN = 'Play again',
}
