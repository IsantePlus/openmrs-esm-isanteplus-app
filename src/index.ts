/**
 * This is the entrypoint file of the application. It communicates the
 * important features of this microfrontend to the app shell. It
 * connects the app shell to the React application(s) that make up this
 * microfrontend.
 */

import { defineConfigSchema, getSyncLifecycle } from "@openmrs/esm-framework";
import { configSchema } from "./config-schema";
import { createDashboardLink } from "@openmrs/esm-patient-common-lib";

const summaryDashboardMeta = {
  slot: "patient-chart-ed-dashboard-slot",
  columns: 4,
  title: "ED SECTION",
  path: "ED SECTION",
};

const moduleName = "@isanteplus/esm-isanteplus-app";

export function startupApp() {
  defineConfigSchema(moduleName, configSchema);
}

export const edSectionDashboardLink = getSyncLifecycle(
  createDashboardLink({ ...summaryDashboardMeta, moduleName }),
  {
    featureName: "ed-section",
    moduleName,
  }
);
