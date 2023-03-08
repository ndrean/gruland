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

export { selectMenu };
