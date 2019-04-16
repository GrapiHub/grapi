import {Action} from "./Action";
import {Filter} from "./Filter";
import {ActionHandler, FilterHandler} from "./types";

export class Hackable {

  private readonly actionsMap: Map<string, Action> = new Map();
  private readonly filtersMap: Map<string, Filter> = new Map();

  public addAction(name: string, handler: ActionHandler) {
    const action = this.actionsMap.get(name) || new Action(name);
    action.addHandler(handler);
    this.actionsMap.set(name, action);
  }

  public doAction(name: string, data: any) {
    this.actionsMap.get(name).invoke(data);
  }

  public addFilter(name: string, handler: FilterHandler) {
    const filter = this.filtersMap.get(name) || new Filter(name);
    filter.addHandler(handler);
    this.filtersMap.set(name, filter);
  }

  public doFilter(name: string, data: any): any {
    return this.filtersMap.get(name).invoke(data);
  }

}

const hackable = new Hackable();

export function addAction(name: string, handler: ActionHandler) {
  hackable.addAction(name, handler);
}

export function addFilter(name: string, handler: FilterHandler) {
  hackable.addFilter(name, handler);
}
