import { OrderedMap } from "immutable";
import TodoRecord from "./records/TodoRecord";

export type TVisibilityFilter = "ALL" | "ACTIVE" | "COMPLETED";
export type TTodoAction =
  | { type: "create"; payload: { text: string } }
  | {
      type: "update";
      payload: { text?: string; id: string; completed?: boolean };
    }
  | {
      type: "updateAll";
      payload: { text?: string; completed?: boolean };
    }
  | { type: "clearCompleted" }
  | { type: "delete"; payload: { id: string } };

export type TTodo = Readonly<ReturnType<typeof TodoRecord>>;
export type TTodos = OrderedMap<string, TTodo>;
