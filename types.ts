export interface GeminiResponse {
  text: string;
}

export enum AppState {
  CLOSED = 'CLOSED',
  OPEN = 'OPEN',
  FORGIVEN = 'FORGIVEN'
}
