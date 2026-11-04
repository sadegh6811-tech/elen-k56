import { Suspense, lazy } from "react";
import Workspace from "./components/Workspace";

const Scene = lazy(() => import("./components/Scene"));

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <Workspace />
    </>
  );
}

