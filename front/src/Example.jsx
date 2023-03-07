import React from "react";

export default function Example({ example }) {
  const bullets = [];
  example.resources.bullets.forEach((b) =>
    Object.keys(b).forEach((k) => bullets.push(b[k]))
  );

  Object.keys(example.introBox).forEach((b) => {});
  return (
    <div>
      <p>{example.title}</p>
      <p>{example.level}</p>
      <p>{example.framework}</p>
      <p>{example.language}</p>
      <p>{example.description}</p>
      {Object.keys(example.gitHub.template).map((key, idx) => (
        <p key={idx}> {JSON.stringify(example.gitHub.template[key])}</p>
      ))}

      {bullets.map((e, idx) => (
        <p key={idx}>{e}</p>
      ))}
      <p>{example.introBox.headline}</p>
      <p>{example.introBox.text.join(" ")}</p>
    </div>
  );
}
