import {Handler} from "./types";

export abstract class Hook<R> {

  public readonly handlers: Handler[] = [];

  constructor(
    public readonly name: string,
  ) {}

  public addHandler(handler: Handler) {
    this.handlers.push(handler);
  }

  public abstract invoke(data: object): R;

}
