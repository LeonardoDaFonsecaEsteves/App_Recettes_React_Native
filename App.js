import React, { useEffect } from "react";
import NavigatScreen from "./src/components/NavigatScreen";
import ALERT_PERMISION from "./src/permission/permission";

export default function App() {
  useEffect(() => {
    ALERT_PERMISION();
  }, []);
  return <NavigatScreen />;
}
