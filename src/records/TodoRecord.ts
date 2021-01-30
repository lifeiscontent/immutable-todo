import { Record } from "immutable";

const TodoRecord = Record({
  completed: Boolean(),
  id: String(),
  text: String(),
});

export default TodoRecord;
