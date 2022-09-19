import { createSlice } from "@reduxjs/toolkit"

  export const userSlice = createSlice({
    name: "user",
    initialState: {
      firstName: "",
      lastName: "",
      birth: '',
      startDate: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      department: '',
    },
    reducers: {
        clearState: (state) => {
          state.firstName = '';
          state.lastName = '';
          state.birth = '';
          state.startDate = '';
          state.street = '';
          state.city = '';
          state.state = '';
          state.zipCode = '';
          state.department = '';
          return state;
        },
        createUser: (state) => {     
          state.firstName = document.querySelector("#first-name").value;
          state.lastName = document.querySelector("#last-name").value;
          state.birth = document.querySelector("#date-of-birth").value;
          state.startDate = document.querySelector("#start-date").value;
          state.street = document.querySelector("#street").value;
          state.city = document.querySelector("#city").value;
          state.state = document.querySelector("#state").value;
          state.zipCode = document.querySelector("#zip-code").value;
          state.department = document.querySelector("#department").value;
          return state;
        }
      },
  })

  export const { clearState, createUser } = userSlice.actions;
  export const userSelector = state => state.user


  