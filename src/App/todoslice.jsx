import { createSlice,nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos:[]
};

const todoslice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addtodo: (state,action)=>{
            console.log(state);
            const objtodo={
                id: nanoid(),
                text:action.payload
            }
            state.todos.push(objtodo);
        },
        removetodo: (state,action)=>{
            state.todos = state.todos.filter((item)=>item.id!==action.payload);
        },
        updatetodo: (state,action)=>{
            const {id,text} = action.payload
            const existingId =state.todos.find((item)=>item.id===id);
            if(existingId){
                existingId.text=text;
            }
        }
    }
})

export const {addtodo,removetodo,updatetodo} = todoslice.actions;
export default todoslice.reducer;