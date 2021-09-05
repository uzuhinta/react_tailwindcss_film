import LocalStorage from 'constant/Local';

const { createSlice } = require('@reduxjs/toolkit');
// id, isActive
const initialState = {
  isFull: localStorage.getItem(LocalStorage.TOGGLE_ASIDE) === 'true',
};

const aside = createSlice({
  name: 'aside',
  initialState,
  reducers: {
    toggleAside: (state, action) => {
      // console.log(action);
      state.isFull = action.payload;
    },
  },
});

const { reducer, actions } = aside;
export const { toggleAside } = actions;
export default reducer;
