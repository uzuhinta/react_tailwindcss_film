const { createSlice } = require('@reduxjs/toolkit');
// id, isActive
const initialState = {
  isFull: false,
};

const aside = createSlice({
  name: 'aside',
  initialState,
  reducers: {
    toggleAside: (state, action) => {
      console.log(action);
      state.isFull = action.payload;
    },
  },
});

const { reducer, actions } = aside;
export const { toggleAside } = actions;
export default reducer;
