// import { useState } from "react";
// import { Spinner } from "@material-tailwind/react";
// import Logo from "./components/WelcomeScreen/Logo";
// import WelcomeText from "./components/WelcomeScreen/WelcomeText";
// import SearchInput from "./components/WelcomeScreen/SearchInput";
// import CitiesList from "./components/WelcomeScreen/CitiesList";

import WeatherScreen from "./screens/WeatherScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  return (
    <div className="app overflow-y-auto h-64 bg-background min-h-screen">
      {/* <WelcomeScreen /> */}
      {/* <WeatherScreen /> */}
    </div>
  )
});

export default App;
