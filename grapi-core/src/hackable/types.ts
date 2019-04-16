export type ActionHandler = (next: any) => void;
export type FilterHandler = (next: any) => object;
export type Handler = ActionHandler | FilterHandler;
