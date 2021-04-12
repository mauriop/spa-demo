import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@hello-spa/single-spa-demo-nav",
  () => System.import("@hello-spa/single-spa-demo-nav"),
  isActive.nav,
  { domElement: document.getElementById('nav-container') }
);

registerApplication(
  "@hello-spa/single-spa-demo-page-1",
  () => System.import("@hello-spa/single-spa-demo-page-1"),
  isActive.page1,
  { domElement: document.getElementById('page1-container') }

);

registerApplication(
  "@hello-spa/single-spa-demo-page-2",
  () => System.import("@hello-spa/single-spa-demo-page-2"),
  isActive.page2,
  { domElement: document.getElementById('page2-container') }
);

start({
  urlRerouteOnly: true,
});
