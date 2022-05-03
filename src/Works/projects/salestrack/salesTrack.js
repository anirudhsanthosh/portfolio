import technologies from "../technologyTags";
import cardImage from "./img/salestrack_all.png";

export default {
  name: "Sales track",
  description: `An application for tracking sales and attendance of employees of an organization`,
  tags: [technologies.cordova, technologies.php],
  images: [
    "/img/projects/salestrack/1.png",
    "/img/projects/salestrack/2.png",
    "/img/projects/salestrack/3.png",
    "/img/projects/salestrack/4.png",
    "/img/projects/salestrack/5.png",
    "/img/projects/salestrack/6.png",
  ],
  cardImage,
  tools: [
    technologies.cordova,
    technologies.php,
    technologies.html,
    technologies.css,
    technologies.js,
    technologies.firebase,
  ],
  live: "http://salestrack.epizy.com/salestrack/frame.html",
  code: "https://github.com/anirudhsanthosh/safari_sales",
};
