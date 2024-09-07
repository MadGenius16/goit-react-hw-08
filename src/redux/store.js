import { configureStore } from "@reduxjs/toolkit"; 

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import { filterReducer } from "./filtersSlice";
import { authReducer } from "./auth/slice";
import { contactsReducer } from "./contactsSlice";

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
}

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(authConfig, authReducer) ,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);