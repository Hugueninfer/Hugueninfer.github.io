import { j as h } from "../index-DwCqBxFL.js";
import { dogClassName, svgId, wifeClassName } from "./family-spec.mjs";
import { FamilyLeg, FamilyArm, FamilyUpper, FamilyHeadTransform } from "../Commuter-BHE77-Jm.js";

function D({ uid = "maltese", scene = "profile", active = false }) {
  const furClip = svgId(uid, "fur-clip");
  return h.jsxs("g", {
    className: dogClassName({ scene, active }),
    children: [
      h.jsx("defs", {
        children: h.jsx("clipPath", {
          id: furClip,
          children: h.jsx("path", { d: "M-31-31q7-16 23-14 10-10 22-3 13 1 18 13 12 8 10 23-2 17-18 21H-17Q-34 5-36-10q-2-12 5-21Z" }),
        }),
      }),
      h.jsx("ellipse", { className: "maltese-shadow", cx: "1", cy: "1", rx: "29", ry: "4" }),
      h.jsx("g", {
        className: "dog-tail",
        children: h.jsx("path", { className: "dog-fur dog-outline", d: "M25-23q18-12 14-29 13 12 2 29-7 11-18 12Z" }),
      }),
      h.jsxs("g", {
        className: "dog-pose",
        children: [
          h.jsxs("g", {
            className: "run-legs",
            children: [
              h.jsx("path", { className: "leg-far dog-fur-shadow dog-outline", d: "M9-13q8 5 17 9l-3 5Q10-1 1-7Z" }),
              h.jsx("path", { className: "leg-near dog-fur dog-outline", d: "M-13-12Q-7-4 1 0l-5 3q-10-3-17-10Z" }),
            ],
          }),
          h.jsxs("g", {
            className: "sit-legs",
            children: [
              h.jsx("path", { className: "leg-far dog-fur-shadow dog-outline", d: "M12-15q11 8 12 16H9Q5-8 5-13Z" }),
              h.jsx("path", { className: "leg-near dog-fur dog-outline", d: "M-14-15Q-4-7-2 1h-15q-5-7-3-14Z" }),
            ],
          }),
          h.jsx("path", { className: "dog-body dog-fur dog-outline", d: "M-23-27q13-13 33-9 17 2 23 16 5 11-3 20H-17q-10-8-6-27Z" }),
          h.jsx("path", { className: "fur-volume", clipPath: `url(#${furClip})`, d: "M-22-17q11-9 20-4 8-8 20-2 8 4 11 12-12-5-19 1-11-7-23 1-6-1-9-8Z" }),
          h.jsxs("g", {
            className: "dog-head",
            children: [
              h.jsx("path", { className: "ear-far dog-fur-shadow dog-outline", d: "M-19-38q-15-2-14 14 1 9 11 12l8-17Z" }),
              h.jsx("path", { className: "dog-fur dog-outline", d: "M-26-37q5-14 20-13 17-2 25 10 7 10 1 22-6 11-21 11-15 1-24-10-8-9-1-20Z" }),
              h.jsx("path", { className: "ear-near dog-fur-shadow dog-outline", d: "M12-39q14 2 12 17-2 10-12 13L6-28Z" }),
              h.jsx("path", { className: "dog-muzzle", d: "M-13-24q11-8 23 0 1 12-12 13-13-1-11-13Z" }),
              h.jsx("circle", { className: "dog-eye", cx: "-12", cy: "-30", r: "2.3" }),
              h.jsx("circle", { className: "dog-eye", cx: "9", cy: "-30", r: "2.3" }),
              h.jsx("path", { className: "dog-nose", d: "M-5-23q5-4 10 0-1 6-5 6t-5-6Z" }),
              h.jsx("path", { className: "family-line dog-mouth", d: "M0-17q-1 5-6 6M0-17q1 5 6 6" }),
              h.jsx("path", { className: "fur-fringe", d: "M-20-40q5 4 9-3 4 6 9-2 5 7 10 1 5 7 9 4" }),
            ],
          }),
        ],
      }),
    ],
  });
}

function W({ uid = "profile-wife", active = false }) {
  return h.jsxs("g", {
    className: wifeClassName(active),
    children: [
      h.jsx("ellipse", { className: "wife-shadow", cx: "3", cy: "1.2", rx: "12", ry: "2.4" }),
      h.jsxs("g", {
        className: "walker wife-anatomy",
        children: [
          h.jsx(FamilyLeg, { side: "b", far: true, hip: -6, knee: 4, foot: 2 }),
          h.jsx(FamilyLeg, { side: "a", hip: 5, knee: 0, foot: -5 }),
          h.jsx("g", {
            className: "wife-arm-rest",
            transform: "translate(4 0)",
            children: h.jsx(FamilyArm, { uid: svgId(uid, "far"), shoulder: -8, elbow: 8 }),
          }),
          h.jsx("g", {
            transform: FamilyHeadTransform,
            children: h.jsx("path", {
              className: "wife-hair-d",
              d: "M-1-65q-1-5 4-5 5 0 5 6l-.4 7q.2 3 1.4 4-3 2-5-1-1 3-4 1 1-5-1-12Z",
            }),
          }),
          h.jsx("g", {
            className: "wife-upper",
            children: h.jsx(FamilyUpper, {
              uid: svgId(uid, "near"),
              arm: { shoulder: 8, elbow: -5 },
            }),
          }),
          h.jsxs("g", {
            className: "wife-head",
            transform: FamilyHeadTransform,
            children: [
              h.jsx("path", {
                className: "wife-hair",
                d: "M-.8-64.5q-1.7-4.4 2.3-5.5 4.8-1.1 6.4 3.4-2.4-.1-4.7-1.5-.7 2.6-3.2 4.7L0-58q-2.4-1.8-.8-6.5Z",
              }),
              h.jsx("path", {
                className: "wife-hair-strand",
                d: "M1.4-68.8q-2 2.5-.6 6.4M3-69q-1 1.7.2 3.7",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { D, W };
