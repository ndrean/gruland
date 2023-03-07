import React from "react";
import DrawFieldset from "./DrawFieldset";

const selectMenu = [
  {
    legend: "Framework",
    type: "radio",
    names: [
      "CDK",
      "SAM",
      "Pulumi",
      "Terraform",
      "Terraform (with modules)",
      "Serverless Framework",
    ],
  },
  {
    legend: "Language",
    type: "radio",
    names: ["Go", "Java", "Node.js", "Python", "TypeScript", ".NET", "Rust"],
  },
  {
    legend: "Services",
    type: "radio",
    names: [
      "AWS Amplify",
      "Amazon API Gateway",
      "AWS AppConfig",
      "AWS App Runner",
      "Amazon Athena",
      "AWS Lambda",
      "Amazon S3",
    ],
  },
];

export default function DrawSelection({ onhandleSelections }) {
  return (
    <div onChange={onhandleSelections}>
      {selectMenu.map(({ legend, type, names }, idx) => (
        <DrawFieldset legend={legend} type={type} names={names} key={idx} />
      ))}
      )
    </div>
  );
}
