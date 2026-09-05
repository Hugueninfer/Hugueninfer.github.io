function replaceRequired(input, search, replacement, label) {
  if (!input.includes(search)) throw new Error(`Reference signature changed: ${label}`);
  return input.replace(search, replacement);
}

export function adaptHome(input) {
  return replaceRequired(input, 'A walk past ${N} teams:', 'Um rapaz loiro caminha pela cidade, passando por ${N} equipes:', 'Home character description').replace('Click and the walker says hi.', 'Clique para ele cumprimentar.');
}

export function adaptCommuter(input) {
  // Reuse the exact limb geometry and joint pivots; existing character exports
  // and every original drawing remain unchanged.
  return replaceRequired(input,
    'export { l6 as C, n6 as S, f as T, o6 as a, x6 as b };',
    'export { l6 as C, n6 as S, f as T, o6 as a, x6 as b, r as FamilyLeg, m as FamilyArm, x as FamilyUpper, p as FamilyHeadTransform };',
    'Shared character anatomy exports');
}

export function adaptAbout(input) {
  let output = replaceRequired(
    input,
    'import { D as as } from "./Daughter-HgqIGkFr.js";',
    'import { D as as } from "./Daughter-HgqIGkFr.js";\nimport { W as FamilyWife } from "./custom/FamilyCharacters.js";\nimport { profileDogFrame } from "./custom/family-spec.mjs";',
    'About family import',
  );
  output = replaceRequired(
    output,
    `const e = 350,
  V = [
    ["rock", "paper"],
    ["scissors", "rock"],
    ["paper", "paper"],
  ],
  C =`,
    `const e = 350,
  C =`,
    'About RPS choices',
  );
  output = replaceRequired(output, 'function ps({ throws: a }) {', 'function ps({ active: a }) {', 'About desk state');
  output = replaceRequired(output, '  rs = 300,', '  rs = 620,', 'About mobile family framing');
  output = replaceRequired(output, '  cs = 250,', '  cs = 1400,', 'About desktop family framing');
  output = replaceRequired(output, 'B = { x: 402, y: 66, w: 640, h: 356 }', 'B = { x: 230, y: 66, w: 640, h: 356 }', 'About mobile starting frame');
  output = replaceRequired(output, 'I = { x: 696, y: 203 }', 'I = { x: 550, y: 220 }', 'About family camera center');
  output = replaceRequired(output, 'is = 1700', 'is = 4200', 'About family timeline');
  output = replaceRequired(output,
    `const g = () => {
    (m(!0),
      window.clearTimeout(j.current),
      (j.current = window.setTimeout(() => m(!1), is)));
  };`,
    `const g = h.useCallback(() => {
    if (j.current) return;
    m(!0);
    j.current = window.setTimeout(() => {
      j.current = 0;
      m(!1);
    }, is);
  }, []);
  // Trigger once on entering the scroll focus, not on every scroll frame.
  h.useEffect(() => { if (p) g(); }, [p, g]);`,
    'About shared click and scroll gesture');
  output = replaceRequired(
    output,
    'children: s.jsx(es, { uid: "desk", hand: a[0] })',
    'children: s.jsx(es, { uid: "desk" })',
    'About stable man arm and hand',
  );
  output = replaceRequired(
    output,
    `s.jsx("g", {
            className: "her",
            transform: \`translate(445 \${e}) scale(2.9)\`,
            children: s.jsx(as, { uid: "deskkid", hand: a[1] }),
          }),`,
    `s.jsx("g", {
            className: "wife-stage",
            transform: \`translate(410 \${e}) scale(2.6)\`,
            children: s.jsx(FamilyWife, { active: a }),
          }),`,
    'About child player',
  );
  output = replaceRequired(output, 's.jsx(ps, { throws: V[c] })', 's.jsx(ps, { active: o })', 'About scene invocation');
  output = replaceRequired(output, '            s.jsx(js, {}),',
    `            s.jsx(js, {}),
            s.jsx("g", {
              className: "profile-dog-stage",
              transform: \`translate(490 \${e}) scale(-.65 .65)\`,
              children: s.jsx(as, { uid: "profile-dog", scene: "profile" }),
            }),`,
    'About dog in front of floor props');
  output = replaceRequired(output,
    '          const S = y > 0.72;',
    `          const dog = f.querySelector(".profile-dog-stage");
          if (dog) {
            const pose = profileDogFrame(y);
            dog.setAttribute("transform", \`translate(\${pose.x} \${pose.y}) scale(-.65 .65)\`);
            dog.style.setProperty("--dog-near-angle", \`\${pose.nearAngle}deg\`);
            dog.style.setProperty("--dog-far-angle", \`\${pose.farAngle}deg\`);
            dog.style.setProperty("--dog-bob", \`\${pose.bodyY}px\`);
            dog.style.setProperty("--dog-tail-angle", \`\${pose.tailAngle}deg\`);
          }
          const S = y > 0.72;`,
    'About scroll-linked dog motion');
  output = replaceRequired(output, '    [c, u] = h.useState(0),\n', '', 'About RPS state');
  output = replaceRequired(
    output,
    `    const x = window.setInterval(() => n((r) => (r + 1) % 3), ns),
      f = window.setInterval(() => u((r) => (r + 1) % V.length), 3600);
    return () => {
      (window.clearInterval(x), window.clearInterval(f));
    };`,
    `    const x = window.setInterval(() => n((r) => (r + 1) % 3), ns);
    return () => window.clearInterval(x);`,
    'About RPS timer',
  );
  output = replaceRequired(
    output,
    'A corner of a room: a desk under a window, a laptop, somebody working at it, a sofa bed and a cat. Click and they turn round and wave.',
    'Um rapaz loiro, sua esposa loira e um cachorro Maltês estão junto à mesa. Role para o cachorro caminhar e a esposa acenar; clique para repetir o aceno.',
    'About accessible description',
  );
  return output;
}

export function adaptContact(input) {
  const playmate = /s\.jsxs\("g", \{\n      className: "playmate",\n      transform: `translate\(\$\{e\} \$\{a\}\)`,\n      children: \[\n        s\.jsx\("g", \{\n          className: "hop",\n          children: s\.jsx\(Q, \{ uid: "doorkid", arms: \{ near: -112, far: 94 \} \}\),\n        \}\),\n        s\.jsx\("circle", \{ className: "ball", cx: "-19", cy: "-6", r: "6" \}\),\n        s\.jsx\("path", \{ className: "ball-ln", d: "M-24\.4 -8\.4 q5\.4 3 10\.8 0" \}\),\n      \],\n    \}\)/;
  if (!playmate.test(input)) throw new Error('Reference signature changed: Contact playmate');
  let output = input.replace(
    playmate,
    `s.jsx("g", {
      className: "playmate maltese-at-door",
      transform: \`translate(550 \${a}) scale(.55)\`,
      children: s.jsx("g", {
        className: "hop",
        children: s.jsx(Q, { uid: "door-dog", scene: "door" }),
      }),
    })`,
  );
  output = replaceRequired(output, 'Z = 6', 'Z = 2', 'Contact safe zoom');
  output = replaceRequired(
    output,
    'A house on a quiet street, and someone on the step knocking. Click to knock again.',
    'Um rapaz loiro bate à porta de uma casa tranquila; um cachorro Maltês aparece quando a porta abre. Clique para bater novamente.',
    'Contact accessible description',
  );
  return output;
}

export function appendFamilyStyles(base, custom) {
  if (base.includes('/* family-characters:start */')) return base;
  return `${base.trimEnd()}\n\n${custom.trim()}\n`;
}
