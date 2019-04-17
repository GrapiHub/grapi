import {Hook} from "./Hook";
import {FilterHandler} from "./types";

export class Filter extends Hook<any> {

  public invoke(data: any): any {
    this.handlers.forEach(async (filterHandler: FilterHandler) => {
      data = await filterHandler(data);
    });
    return data;
  }

}
