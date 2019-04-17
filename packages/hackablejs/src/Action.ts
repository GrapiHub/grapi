import {Hook} from "./Hook";
import {ActionHandler} from "./types";

export class Action extends Hook<void> {

  public invoke(data: any): void {
    this.handlers.forEach((handler: ActionHandler) => {
      handler(data);
    });
  }

}
