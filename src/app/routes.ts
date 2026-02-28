import { createBrowserRouter } from "react-router";
import { Dashboard } from "./screens/Dashboard";
import { SelectFlow } from "./screens/SelectFlow";
import { InputForm } from "./screens/InputForm";
import { AIProcessing } from "./screens/AIProcessing";
import { OutputPreview } from "./screens/OutputPreview";
import { Collaboration } from "./screens/Collaboration";
import { Export } from "./screens/Export";
import { Projects } from "./screens/Projects";
import { CollaboratePage } from "./screens/Collaborate";
import { Settings } from "./screens/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
  },
  {
    path: "/select-flow",
    Component: SelectFlow,
  },
  {
    path: "/input-form",
    Component: InputForm,
  },
  {
    path: "/ai-processing",
    Component: AIProcessing,
  },
  {
    path: "/output-preview",
    Component: OutputPreview,
  },
  {
    path: "/collaboration",
    Component: Collaboration,
  },
  {
    path: "/export",
    Component: Export,
  },
  {
    path: "/projects",
    Component: Projects,
  },
  {
    path: "/collaborate",
    Component: CollaboratePage,
  },
  {
    path: "/settings",
    Component: Settings,
  },
]);