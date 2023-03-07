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

function transformMenu(menu) {
  return menu
    .map((m) =>
      Object.fromEntries([
        [
          m.legend,
          m.names.reduce((acc, curr) => {
            acc[curr] = false;
            return acc;
          }, {}),
        ],
      ])
    )
    .reduce((acc, curr) => Object.assign(acc, curr), {});
}

export { selectMenu, transformMenu };
