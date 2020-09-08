export const todos = [{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}];

export const reducer = (state, action) => {
  switch (action.type) {
    case "AddTodo":
          return [
              ...state,
              { item: action.payload[0],
                id: Date.now(),
                completed: false
              }
          ];

    case "ToggleCompleted":
        return state.map(todo => {
            if (todo.id === action.payload) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        });

    case "ClearCompleted":
        return state.filter(todo => !todo.completed);

    default:
        return state;
  }
};