import Uipart from './Uipart'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./locationSlice";
const store = configureStore({
    reducer: rootReducer
});

function App() {
  return (
    <div style={{'background-Color':'#555777'}}>
      <Provider store={store}>
          <Uipart />
      </Provider>
    </div>
  );
}

export default App;
