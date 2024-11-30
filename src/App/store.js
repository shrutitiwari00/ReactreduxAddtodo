import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './todoslice'

export const store = configureStore ({
   reducer:{
    todo:todoReducer
   }
})

// export default store;