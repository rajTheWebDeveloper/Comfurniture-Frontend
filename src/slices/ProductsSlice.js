import { createSlice } from "@reduxjs/toolkit";


let initialState={
    codeWord:"JAMES BOND"
}


let ProductsSlice=createSlice({
    name:"Product",
    initialState,
    reducers:{
        creditBee:()=>
        {
            console.log("Amount Credited But You Will Be Treated As Slaves")
        }
    }
})



export const {creditBee}=ProductsSlice.actions
export default ProductsSlice.reducer