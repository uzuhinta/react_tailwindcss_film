import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import asideReducer from 'components/Admin/Aside/asideSlide';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleWare = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare];

const rootReducer = {
  aside: asideReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleWare.run(rootSaga);
