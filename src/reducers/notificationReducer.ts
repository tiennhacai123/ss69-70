// reducers/notificationReducer.ts
const notificationReducer = (state: string | null = null, action: { type: string, payload?: string }) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.payload;
    case 'CLEAR_NOTIFICATION':
      return null;
    default:
      return state;
  }
};

export default notificationReducer;
