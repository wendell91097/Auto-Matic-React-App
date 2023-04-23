import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        nickname: "Nickname",
        make: 'Model',
        model: "Model",
        color: "Color",
        year: "Year",
        owner: "Owner",
    },
    reducers: {
        chooseNickname: (state, action) => { state.nickname = action.payload }, 
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseColor: (state, action) => { state.color = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        chooseOwner: (state, action) => { state.owner = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseNickname, chooseMake, chooseModel, chooseColor, chooseYear, chooseOwner } = rootSlice.actions