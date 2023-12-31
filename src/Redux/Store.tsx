import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from './Store/Products'
import CommentsReducer from './Store/Comments'
import ProductInfoReducer from './Store/ProductDetal'
import FavoritesReducer from './Store/FavoriteList'
import BasketReducer from './Store/Basket'
import UsersRegisterReducer from './Store/UserRegister'

 const store = configureStore({
    reducer:{
      products:ProductsReducer,
      comments:CommentsReducer,
      productInfo:ProductInfoReducer,
      favoriteList:FavoritesReducer,
      basket:BasketReducer,
      usersRegister:UsersRegisterReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;