const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    // auth,
    // contacts,
  },
});

export default store;
