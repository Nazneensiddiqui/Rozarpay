import { createSlice } from "@reduxjs/toolkit";


const CartSlice=createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        AddToCart:(state, actions)=>{
            const myData= state.cart.filter(key=>key.id==actions.payload.id);
            if (myData.length>=1)
            {
                alert("This product Aleready Added!")
            }
            else 
            {
                state.cart.push(actions.payload);
                alert("Product Added!");
            }
    },
    qntyInc:(state, actions)=>{

        for (var i=0; i<state.cart.length; i++)
        {
            if (state.cart[i].id==actions.payload.id)
            {
                state.cart[i].qnty++;
            }
        }
    },
    qntyDec:(state, actions)=>{
        for (var i=0; i<state.cart.length; i++)
        {
            if (state.cart[i].id==actions.payload.id)
            {
                if (state.cart[i].qnty>1)
                { 
                  state.cart[i].qnty--;
                }
                else 
                {
                    message.error("Quantity not less than 1 ")
                }
            }
        }

    },
    
    itemRemove:(state, actions)=>{
        state.cart= state.cart.filter(key=>key.id!=actions.payload.id)
    }
}
})


export const {AddToCart,qntyInc,qntyDec,itemRemove}=CartSlice.actions;
export default CartSlice.reducer;