const data = [
  {
    title: "Step Functions to Athena",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Call Athena with Step Functions",
          link: "https://docs.aws.amazon.com/step-functions/latest/dg/connect-athena.html",
        },
        {
          text: "Amazon Athena - Serverless Interactive Query Service",
          link: "https://aws.amazon.com/athena/",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This sample project demonstrates how to use an AWS Step Functions state machine to query Athena and get the results. This pattern is leveraging the native integration between these 2 services which means only JSON-based, structured language is used to define the implementation.",
        "With Amazon Athena you can get up to 1000 results per invocation of the GetQueryResults method and this is the reason why the Step Function has a loop to get more results. The results are sent to a Map which can be configured to handle (the DoSomething state) the items in parallel or one by one by modifying the max_concurrency parameter.",
        "This pattern deploys one Step Functions, two S3 Buckets, one Glue table and one Glue database.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/sfn-athena-cdk-python",
        templateFile: "sfn_athena_cdk_python/sfn_athena_cdk_python_stack.py",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/sfn-athena-cdk-python",
        projectFolder: "sfn-athena-cdk-python",
      },
    },
    framework: "CDK",
    description: "Create a Step Functions workflow to query Amazon Athena.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        twitter: "twitter-handle",
        name: "Your name",
        linkedin: "linked-in-ID",
        image: "link-to-your-photo.jpg",
        bio: "Your bio.",
      },
    ],
    id: "f36d8f2c-bb5b-11ed-b05a-3e86250ca8d9",
  },
  {
    title: "Application Load Balancer with Lambda as target",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Application Load Balancer",
          link: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html",
        },
        {
          text: "ALB - Lambda target",
          link: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/lambda-functions.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This sample project demonstrates how to create an Application Load Balancer with AWS Lambda as target.",
        "Implemented in CDK.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/alb-lambda-cdk",
        templateFile: "alb-lambda-cdk/alb-lambda-cdk-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/alb-lambda-cdk",
        projectFolder: "alb-lambda-cdk",
      },
    },
    framework: "CDK",
    description:
      "Create an Application Load Balancer with Lambda as target using CDK",
    deploy: {
      text: ["cdk deploy --all"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy --all</code>."],
    },
    authors: [
      {
        twitter: "@pubudusj",
        name: "Pubudu Jayawardana",
        linkedin: "pubudusj",
        image: "https://avatars.githubusercontent.com/u/1263087",
        bio: "AWS Community Builder in Serverless category. Serverless advocate and enthusiast.",
      },
    ],
    id: "f36da0c0-bb5b-11ed-b8c6-3e86250ca8d9",
  },
  {
    title: "Application Load Balancer with Lambda as target",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Application Load Balancer",
          link: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html",
        },
        {
          text: "ALB - Lambda target",
          link: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/lambda-functions.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This sample project demonstrates how to create an Application Load Balancer with AWS Lambda as target.",
        "Implemented in Typescript using Pulumi.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/alb-lambda-pulumi-ts",
        templateFile: "alb-lambda-pulumi-ts/index.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/alb-lambda-pulumi-ts",
        projectFolder: "alb-lambda-pulumi-ts",
      },
    },
    framework: "Pulumi",
    description:
      "Create an Application Load Balancer with Lambda as target using Pulumi",
    deploy: {
      text: ["pulumi up"],
    },
    cleanup: {
      text: ["Delete the stack: <code>pulumi destroy</code>."],
    },
    authors: [
      {
        twitter: "@pierskarsenbarg",
        name: "Piers Karsenbarg",
        linkedin: "piers-karsenbarg",
        image: "https://avatars.githubusercontent.com/u/109047",
        bio: "Solutions Engineer at Pulumi",
      },
    ],
    id: "f36dafd4-bb5b-11ed-91ec-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway REST API to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Application Load Balancer",
          link: "https://aws.amazon.com/elasticloadbalancing",
        },
      ],
    },
    level: "300",
    language: "Rust",
    introBox: {
      text: [
        "This pattern deploys an Application Load Balancer with an AWS Lambda function written in Rust as target. The function logs the incoming API event and context object to an Amazon CloudWatch Logs log group and returns basic information about the event to the caller.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/alb-lambda-rust",
        templateFile: "alb-lambda-rust/template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/alb-lambda-rust",
        projectFolder: "alb-lambda-rust",
      },
    },
    framework: "SAM",
    description:
      "This pattern creates an Application Load Balancer and an AWS Lambda function as target.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f36dbf6a-bb5b-11ed-975f-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway with an API Key",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "REST API with an API Key",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-setup-api-key-with-console.html",
        },
      ],
    },
    level: "200",
    language: "Node.js",
    introBox: {
      text: [
        "An API Key is created and added to a Usage Plan (no throttling, no quota). This Usage Plan is then associated with the Prod stage of a REST API.",
        "The GET method of this REST API is configured to require an API Key associated with the Usage Plan.",
        "If the API key is provided, then API Gateway allows the request and sends it to the Lambda integration.",
        "If the API is not provided, API returns a 403 Forbidden.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-api-key",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-api-key",
        projectFolder: "apigw-api-key",
      },
    },
    framework: "SAM",
    description:
      "Create a REST API Gateway with an API Key associated with a Usage Plan",
    deploy: {
      text: ["Deploy the stack: <code>sam deploy</code>."],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Albert Blaya",
        linkedin: "albertblaya",
        image:
          "https://media-exp1.licdn.com/dms/image/C5603AQEw2HXx9zs7yg/profile-displayphoto-shrink_200_200/0/1600474292127?e=1655942400&v=beta&t=SbeIn9psV0BIFkbROTDRIfPMKMtyrrgBdgt0tRHY0BY",
        headline: "Presented by Albert Blaya, Solutions Architect",
        bio: "Albert is a Solutions Architect at Amazon Web Services based in Australia.",
      },
    ],
    id: "f36dcbc2-bb5b-11ed-b7a9-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway with a Client Certificate",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "REST API with a Client Certificate",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html",
        },
      ],
    },
    level: "200",
    language: "Node.js",
    introBox: {
      text: [
        "The SAM template deploys an Amazon API Gateway REST API endpoint that uses a Client Certificate that will be used to call your integration endpoints in the 'Prod' Stage.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-client-certificate",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-client-certificate",
        projectFolder: "apigw-client-certificate",
      },
    },
    framework: "SAM",
    description: "Create a REST API Gateway with a Client Certificate.",
    deploy: {
      text: ["Deploy the stack: <code>sam deploy</code>."],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Albert Blaya",
        linkedin: "albertblaya",
        image:
          "https://media-exp1.licdn.com/dms/image/C5603AQEw2HXx9zs7yg/profile-displayphoto-shrink_200_200/0/1600474292127?e=1655942400&v=beta&t=SbeIn9psV0BIFkbROTDRIfPMKMtyrrgBdgt0tRHY0BY",
        headline: "Presented by Albert Blaya, Solutions Architect",
        bio: "Albert is a Solutions Architect at Amazon Web Services based in Australia.",
      },
    ],
    id: "f36dd554-bb5b-11ed-93e1-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway to Amazon CloudWatch",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Troubleshooting Amazon API Gateway with enhanced observability variables",
          link: "https://aws.amazon.com/blogs/compute/troubleshooting-amazon-api-gateway-with-enhanced-observability-variables/",
        },
      ],
    },
    level: "300",
    language: "Python",
    introBox: {
      text: [
        "This pattern demonstrates logging access data from API Gateway to Amazon CloudWatch. This data can help debug latency issues, integration issues, WAF issues and more.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-cloudwatch",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-cloudwatch",
        projectFolder: "apigw-cloudwatch",
      },
    },
    framework: "SAM",
    description:
      "The pattern creates an Amazon API Gateway REST API with access logging to Amazon CloudWatch enabled.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "edjgeek",
        name: "Eric Johnson",
        linkedin: "singledigit",
        image: "https://serverlessland.com/assets/images/resources/ericdj.jpg",
        bio: "Eric Johnson is a Principal Developer Advocate for Serverless Applications at Amazon Web Services and is based in Northern Colorado. Eric is a fanatic about serverless and enjoys helping developers understand how serverless technologies introduces a major paradigm shift in how they approach building and running applications at massive scale with minimal administration overhead. Prior to this, Eric has worked as a developer, solutions architect and AWS Evangelist for an AWS partner company.",
      },
    ],
    id: "f36ddf4a-bb5b-11ed-b564-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway Edge Custom Domain",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon API Gateway Edge Custom Domain",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-edge-optimized-custom-domain-name.html",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "The SAM template deploys an Amazon API Gateway Edge Custom Domain Name.",
        "The Edge Custom Domain Name is mapped to a Stage in an existing API Gateway. Additionally, a Route53 A record is created to map the Edge Custom Domain Name (i.e. example.com) to the Target Domain Name created by API Gateway (i.e. d-abcde12345.execute-api.ap-southeast-2.amazonaws.com).",
        "As prerequisites for this pattern, you must have:",
        "* A valid certificate in ACM (Amazon Certificate Manager) in the us-east-1 Region that covers the namespace of the domain you would like to use (i.e. *.mydomain.com).",
        "* A public Hosted Zone in Route 53 with the domain name you would like to use (i.e. mydomain.com).",
        "* An API Gateway API (REST, HTTP or Websockets) and a deployed Stage within this API.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-custom-domain-edge",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-custom-domain-edge",
        projectFolder: "apigw-custom-domain-edge",
      },
    },
    framework: "SAM",
    description: "Create Edge Custom Domain in API Gateway",
    deploy: {
      text: ["Deploy the stack: <code>sam deploy</code>."],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Albert Blaya",
        linkedin: "albertblaya",
        image:
          "https://media-exp1.licdn.com/dms/image/C5603AQEw2HXx9zs7yg/profile-displayphoto-shrink_200_200/0/1600474292127?e=1655942400&v=beta&t=SbeIn9psV0BIFkbROTDRIfPMKMtyrrgBdgt0tRHY0BY",
        headline: "Presented by Albert Blaya, Solutions Architect",
        bio: "Albert is a Solutions Architect at Amazon Web Services based in Australia.",
      },
    ],
    id: "f36de922-bb5b-11ed-bf9e-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway Regional Custom Domain",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon API Gateway Regional Custom Domain",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-regional-api-custom-domain-create.html",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "The SAM template deploys an Amazon API Gateway Regional Custom Domain Name.",
        "The Regional Custom Domain Name is mapped to a Stage in an existing API Gateway. Additionally, a Route53 A record is created to map the Regional Custom Domain Name (i.e. example.com) to the Target Domain Name created by API Gateway (i.e. d-abcde12345.execute-api.ap-southeast-2.amazonaws.com).",
        "As prerequisites for this pattern, you must have:",
        "* A valid certificate in ACM (Amazon Certificate Manager) that covers the namespace of the domain you would like to use (i.e. *.mydomain.com).",
        "* A public Hosted Zone in Route 53 with the domain name you would like to use (i.e. mydomain.com).",
        "* An API Gateway API (REST, HTTP or Websockets) and a deployed Stage within this API.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-custom-domain-regional",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-custom-domain-regional",
        projectFolder: "apigw-custom-domain-regional",
      },
    },
    framework: "SAM",
    description: "Create Regional Custom Domain in API Gateway",
    deploy: {
      text: ["Deploy the stack: <code>sam deploy</code>."],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Albert Blaya",
        linkedin: "albertblaya",
        image:
          "https://media-exp1.licdn.com/dms/image/C5603AQEw2HXx9zs7yg/profile-displayphoto-shrink_200_200/0/1600474292127?e=1655942400&v=beta&t=SbeIn9psV0BIFkbROTDRIfPMKMtyrrgBdgt0tRHY0BY",
        headline: "Presented by Albert Blaya, Solutions Architect",
        bio: "Albert is a Solutions Architect at Amazon Web Services based in Australia.",
      },
    ],
    id: "f36df368-bb5b-11ed-9796-3e86250ca8d9",
  },
  {
    title:
      "API Gateway with a custom resource policy limiting responses to a date range",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "API Gateway resource policy statements",
          link: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-property-function-resourcepolicystatement.html",
        },
        {
          text: "Resource policy condition operators",
          link: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html",
        },
        {
          text: "Resource policy condition keys",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies-aws-condition-keys.html",
        },
      ],
    },
    level: "300",
    language: "Python",
    introBox: {
      text: [
        "Using resource policies, this endpoint will only accept requests between certain dates. This is just an example of many conditions that can be applied to limit access to API Gateway endpoints with resource policies",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-custom-resource-policy",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-custom-resource-policy",
        projectFolder: "apigw-custom-resource-policy",
      },
    },
    framework: "SAM",
    description:
      "Creates an API Gateway REST endpoint with a resource policy. The resource policy contains a custom policy that limits access to the endpoint to certain date ranges.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "edjgeek",
        name: "Eric Johnson",
        linkedin: "singledigit",
        image: "https://serverlessland.com/assets/images/resources/ericdj.jpg",
        bio: "Eric Johnson is a Principal Developer Advocate for Serverless Applications at Amazon Web Services and is based in Northern Colorado. Eric is a fanatic about serverless and enjoys helping developers understand how serverless technologies introduces a major paradigm shift in how they approach building and running applications at massive scale with minimal administration overhead. Prior to this, Eric has worked as a developer, solutions architect and AWS Evangelist for an AWS partner company.",
      },
    ],
    id: "f36dfc00-bb5b-11ed-bf75-3e86250ca8d9",
  },
  {
    title: "API Gateway data validation",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "API Gateway model example",
          link: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-api.html#sam-api-models",
        },
        {
          text: "JSON Schema",
          link: "https://datatracker.ietf.org/doc/html/draft-zyp-json-schema-04#section-4.1",
        },
      ],
    },
    level: "300",
    language: "Python",
    introBox: {
      text: [
        "The data model is declared in the API Gateway resource. The Lambda function then requires the request body to be validated against this model.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-data-validation",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-data-validation",
        projectFolder: "apigw-data-validation",
      },
    },
    framework: "SAM",
    description:
      "This pattern creates an Amazon API Gateway that handles simple data validation at the endpoint without invoking the Lambda function when the data validation fails.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "edjgeek",
        name: "Eric Johnson",
        linkedin: "singledigit",
        image: "https://serverlessland.com/assets/images/resources/ericdj.jpg",
        bio: "Eric Johnson is a Principal Developer Advocate for Serverless Applications at Amazon Web Services and is based in Northern Colorado. Eric is a fanatic about serverless and enjoys helping developers understand how serverless technologies introduces a major paradigm shift in how they approach building and running applications at massive scale with minimal administration overhead. Prior to this, Eric has worked as a developer, solutions architect and AWS Evangelist for an AWS partner company.",
      },
    ],
    id: "f36e0510-bb5b-11ed-ad44-3e86250ca8d9",
  },
  {
    title: "API Gateway HTTP API to Amazon EventBridge",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Working with AWS service integrations for HTTP APIs",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html",
        },
      ],
    },
    level: "200",
    language: "Java",
    introBox: {
      text: [
        "This pattern creates an Amazon API Gateway HTTP API endpoint.",
        "The endpoint uses service integrations to directly connect to Amazon EventBridge.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-http-api-eventbridge-java",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-http-api-eventbridge-java",
        projectFolder: "apigw-http-api-eventbridge-java",
      },
    },
    framework: "SAM",
    description:
      "Create an HTTP API endpoint that directly integrates with Amazon EventBridge.",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: [
        "Delete the stack: <code>sam delete --stack-name STACK_NAME</code>.",
        "Confirm the stack has been deleted: <code>aws cloudformation list-stacks --query \"StackSummaries[?contains(StackName,'STACK_NAME')].StackStatus\"</code>",
      ],
    },
    authors: [
      {
        twitter: "@edjgeek",
        name: "Eric Johnson",
        linkedin: "singledigit",
        image: "https://serverlessland.com/assets/images/resources/ericdj.jpg",
        bio: "Eric Johnson is a Principal Developer Advocate for Serverless Applications at Amazon Web Services and is based in Northern Colorado. Eric is a fanatic about serverless and enjoys helping developers understand how serverless technologies introduces a major paradigm shift in how they approach building and running applications at massive scale with minimal administration overhead. Prior to this, Eric has worked as a developer, solutions architect and AWS Evangelist for an AWS partner company.",
      },
      {
        name: "Steven Cook",
        bio: "Snr Solutions Architect at AWS.",
      },
    ],
    id: "f36e114a-bb5b-11ed-99c8-3e86250ca8d9",
  },
  {
    videoId: "",
    title: "HTTP API Gateway to EventBridge",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    services: {
      to: "eventbridge",
      from: "apigatewayv2",
    },
    resources: {
      headline: "Additional resources",
      bullets: [
        {
          text: "Integrating Amazon EventBridge into your serverless applications",
          link: "https://aws.amazon.com/blogs/compute/integrating-amazon-eventbridge-into-your-serverless-applications/",
        },
        {
          text: "Use Amazon EventBridge to Build Decoupled, Event-Driven Architectures",
          link: "https://serverlessland.com/learn/eventbridge",
        },
      ],
    },
    level: "100",
    language: "Node.js, TypeScript",
    introBox: {
      text: [
        "This pattern creates an Amazon API gateway HTTP API endpoint. The endpoint uses service integrations to directly connect to Amazon EventBridge. ",
        "",
        'Once a new event is published to EventBridge "WebApp" custom event bus it is delivered to a Lambda function, which will simply log that event to EventLog. ',
        "Lambda function is written in TypeScript and deployed to ARM64 architecture for demo purposes.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/apigw-http-api-eventbridge-lambda-sls",
        templateFile: "serverless.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-http-api-eventbridge-lambda-sls",
        projectFolder: "apigw-http-api-eventbridge-lambda-sls",
      },
    },
    framework: "Serverless Framework",
    description: "Create an HTTP API Gateway that sends events to EventBridge.",
    deploy: {
      text: ["<code>serverless deploy --verbose</code>"],
    },
    cleanup: {
      text: ["<code>serverless remove --verbose</code>."],
    },
    authors: [
      {
        name: "Dmitry Gulin",
        imageURL:
          "https://www.gravatar.com/avatar/223055bd132d244f6a96c3aef7453a5a?s=200",
        headline: "Presented by Dmitry Gulin, Modernization Architect, AWS",
        bio: "Dmitry is a modernization architect for Professional Services at Amazon Web Services based in the US.",
      },
    ],
    architectureURL: "",
    id: "f36e21f8-bb5b-11ed-881c-3e86250ca8d9",
  },
  {
    videoId: "",
    title: "Amazon API Gateway HTTP API to Amazon EventBridge",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    services: {
      to: "eventbridge",
      from: "apigatewayv2",
    },
    resources: {
      bullets: [
        {
          text: "Integrating Amazon EventBridge into your serverless applications",
          link: "https://aws.amazon.com/blogs/compute/integrating-amazon-eventbridge-into-your-serverless-applications/",
        },
        {
          text: "Use Amazon EventBridge to Build Decoupled, Event-Driven Architectures",
          link: "https://serverlessland.com/learn/eventbridge",
        },
        {
          text: "Choosing between REST APIs and HTTP APIs",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html",
        },
        {
          text: "Capturing client events using Amazon API Gateway and Amazon EventBridge",
          link: "https://aws.amazon.com/blogs/compute/capturing-client-events-using-amazon-api-gateway-and-amazon-eventbridge/",
        },
      ],
    },
    level: "100",
    language: "Python",
    introBox: {
      text: [
        "The CDK project creates an Amazon API gateway HTTP API endpoint. The endpoint uses service integrations to directly connect to Amazon EventBridge. An EventBridge rule sends all events to Cloudwatch Logs.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "apigw-http-api-eventbridge/apigw_http_api_eventbridge_stack.py",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-http-api-eventbridge-python",
        readmeURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-http-api-eventbridge-python/README.md",
        projectFolder: "apigw-http-api-eventbridge-python",
      },
      payloads: [
        {
          payloadURL: "",
          headline: "",
        },
      ],
    },
    framework: "CDK",
    description:
      "Create an Amazon API Gateway HTTP API connected to Amazon EventBridge.",
    deploy: {
      text: [
        "python3 -m venv .venv",
        "source .venv/bin/activate",
        "pip install -r requirements.txt",
        "cdk deploy",
      ],
    },
    cleanup: {
      text: ["cdk destroy"],
    },
    authors: [
      {
        name: "Cesar Izquierdo Tello",
        headline: "Presented by Cesar Izquierdo Tello, Cloud Engineer",
        bio: "Cesar is a cloud engineer specialist on serverless architectures, based in the NL.",
      },
    ],
    architectureURL: "",
    id: "f36e2a7c-bb5b-11ed-98b9-3e86250ca8d9",
  },
  {
    title: "AWS API Gateway HTTP API to AWS Lambda to RDS Proxy",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Storage first integrations",
          link: "https://aws.amazon.com/blogs/compute/building-storage-first-applications-with-http-apis-service-integrations/",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "When an HTTP POST request is sent to the Amazon API Gateway endpoint, the AWS Lambda function is invoked to issue a database query against an RDS proxy endpoint.",
        "The lambda function retrieves a temporary token from IAM to authenticate instead of using native database credentials.",
        "The RDS proxy will then establish a connection to the database, the lambda function will borrow this database connection for the next query/transaction.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/apigw-http-api-lambda-rds-proxy-terraform",
        templateFile: "apigw-http-api-lambda-rds-proxy-terraform/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-http-api-lambda-rds-proxy-terraform",
        projectFolder: "apigw-http-api-lambda-rds-proxy-terraform",
      },
    },
    framework: "Terraform",
    description:
      "This pattern sets up an API Gateway HTTP API using AWS Lambda function as an integration that connects to an RDS Proxy endpoint.",
    deploy: {
      text: ["terraform init", "terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy", "terraform show"],
    },
    authors: [
      {
        name: "Carlos Bauer",
        bio: "I am Technical Account Manager at AWS",
      },
    ],
    id: "f36e37a6-bb5b-11ed-a93d-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway HTTP API to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon API Gateway",
          link: "https://aws.amazon.com/api-gateway/",
        },
      ],
    },
    level: "300",
    language: "Rust",
    introBox: {
      text: [
        "This pattern deploys an Amazon API Gateway HTTP API with a default route and basic CORS configuration. The default route is integrated with an AWS Lambda function written in Node.js. The function logs the incoming API event (v2) and context object to an Amazon CloudWatch Logs log group and returns basic information about the event to the caller.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-http-api-lambda-rust",
        templateFile: "apigw-http-api-lambda-rust/template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-http-api-lambda-rust",
        projectFolder: "apigw-http-api-lambda-rust",
      },
    },
    framework: "SAM",
    description:
      "This pattern creates an Amazon API Gateway HTTP API and an AWS Lambda function.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f36e432c-bb5b-11ed-adbb-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway HTTP API to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Working with HTTP APIs",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html",
        },
        {
          text: "Working with AWS Lambda proxy integrations for HTTP APIs",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html",
        },
        {
          test: "AWS Lambda - the Basics",
          link: "https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/aws-lambdathe-basics.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This pattern deploys an Amazon API Gateway HTTP API with a default route and basic CORS configuration.",
        "The default route is integrated with an AWS Lambda function written in Python.",
        "The function logs the incoming API event (v2) and context object to an Amazon CloudWatch Logs log group and returns basic information about the event to the caller.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-http-api-lambda-terraform",
        templateFile: "apigw-http-api-lambda-terraform/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-http-api-lambda-terraform",
        projectFolder: "apigw-http-api-lambda-terraform",
      },
    },
    framework: "terraform",
    description:
      "This pattern creates an Amazon API Gateway HTTP API and an AWS Lambda function.",
    deploy: {
      text: ["terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy"],
    },
    authors: [
      {
        name: "Carlos Bauer",
        bio: "I am a Technical Account Manager at AWS",
      },
    ],
    id: "f36e5376-bb5b-11ed-834e-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway HTTP API to SQS to Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Using Lambda with Amazon SQS",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html",
        },
        {
          text: "Amazon API Gateway HTTP Integration subtype reference",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html",
        },
      ],
    },
    level: "100",
    language: "Node.js, TypeScript",
    introBox: {
      text: [
        "This pattern creates an Amazon API Gateway HTTP API with a <code>send</code> route that send message to a SQS queue.",
        "The  Amazon API Gateway HTTP API has basic CORS configured. ",
        "Upon receiving message, SQS will trigger a Lambda function to process the message.",
        "The function will only <code>print</code> the message only. The function written in TypeScript.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-http-api-sqs-lambda-sls",
        templateFile: "serverless.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-http-api-sqs-lambda-sls",
        projectFolder: "apigw-http-api-sqs-lambda-sls",
      },
    },
    framework: "Serverless Framework",
    description:
      "This pattern creates an HTTP API endpoint that send message to SQS and trigger a Lambda function to process the message",
    deploy: {
      text: ["<code>serverless deploy --verbose</code>"],
    },
    cleanup: {
      text: ["<code>serverless remove --verbose</code>."],
    },
    authors: [
      {
        name: "Dmitry Gulin",
        imageURL:
          "https://www.gravatar.com/avatar/223055bd132d244f6a96c3aef7453a5a?s=200",
        headline: "Presented by Dmitry Gulin, Modernization Architect, AWS",
        bio: "Dmitry is a modernization architect for Professional Services at Amazon Web Services based in the US.",
      },
    ],
    id: "f36e5baa-bb5b-11ed-a996-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway with a Lambda Token Authorizer",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Controlling access to a REST API with a Lambda Token Authorizer",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html",
        },
      ],
    },
    level: "200",
    language: "Node.js",
    introBox: {
      text: [
        "This pattern deploys an Amazon API Gateway REST API endpoint that uses a Lambda Token Authorizer for access control.",
        "If the request to the endpoint does not include a 'authorizationToken' header, the Lambda Authorizer will not be invoked and API Gateway will return a 401 Forbidden.",
        "If the request to the endpoint includes a 'authorizationToken' header, the Lambda Authorizer will be invoked and its response will depend on the value of the 'authorizationToken' header.",
        "If the value of 'authorizationToken' header is 'unauthorized', API Gateway will return a 401 Unauthorized error.",
        "If the value of 'authorizationToken' header is 'Bearer deny', API Gateway will return a 403 error.",
        "Only if the value of 'authorizationToken' header is 'Bearer allow', API Gateway will successfully invoke the Lambda integration and return a 200.",
        "For any other case, API Gateway will return a 500 error.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-lambda-authorizer",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-authorizer",
        projectFolder: "apigw-lambda-authorizer",
      },
    },
    framework: "SAM",
    description:
      "Create a REST API Gateway with a Lambda Token Authorizer for access control",
    deploy: {
      text: ["Deploy the stack: <code>sam deploy</code>."],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Albert Blaya",
        linkedin: "albertblaya",
        image:
          "https://media-exp1.licdn.com/dms/image/C5603AQEw2HXx9zs7yg/profile-displayphoto-shrink_200_200/0/1600474292127?e=1655942400&v=beta&t=SbeIn9psV0BIFkbROTDRIfPMKMtyrrgBdgt0tRHY0BY",
        headline: "Presented by Albert Blaya, Solutions Architect",
        bio: "Albert is a Solutions Architect at Amazon Web Services based in Australia.",
      },
    ],
    id: "f36e6726-bb5b-11ed-9fb8-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    level: "200",
    language: ".NET",
    introBox: {
      text: [
        "The CDK stack creates an Amazon API Gateway REST API endpoint with AWS Lambda function proxy integration.",
        "Proxy integration creates a proxy resource with the greedy path `{proxy+}` and the method `ANY`.",
        "This means that the REST API endpoint accepts any method and any path by default.",
        "The Lambda used in this pattern is an ASP.NET Core Web API application that has been configured to allow Lambda and API Gateway to act as the web server instead of Kestrel.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-lambda-cdk-dotnet",
        templateFile: "src/cdk/src/Cdk/CdkStack.cs",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-cdk-dotnet",
        readmeURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-cdk-dotnet/README.md",
        projectFolder: "apigw-lambda-cdk-dotnet",
      },
    },
    framework: "CDK",
    description: "Create an Amazon API Gateway to AWS Lambda REST API",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "ankushjain358",
        name: "Ankush Jain",
        linkedin: "ankush-jain-developer",
        image: "https://avatars.githubusercontent.com/u/13661966?v=4",
        bio: "Application Development Consultant at AWS Professional Services.",
      },
    ],
    id: "f36e7702-bb5b-11ed-ae2b-3e86250ca8d9",
  },
  {
    videoId: "",
    title: "Amazon API Gateway to AWS Lambda",
    services: {
      to: "lambda",
      from: "apigateway",
    },
    resources: {
      headline: "Additional resources",
      bullets: [
        {
          text: "CDK Patterns",
          link: "https://cdkpatterns.com/",
        },
      ],
    },
    level: "100",
    language: "Node.js, TypeScript",
    introBox: {
      text: [
        "This pattern in CDK offers a boilerlate to generate an Amazon API Gateway REST API endpoint with a a greedy proxy ('{proxy+}') and 'ANY' method from the specified path, meaning it will accept by default any method and any path. The lambda provided in TypeScript only returns the path.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "https://raw.githubusercontent.com/aws-samples/serverless-patterns/main/apigw-lambda-cdk/src/",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-cdk",
        readmeURL:
          "https://raw.githubusercontent.com/aws-samples/serverless-patterns/main/apigw-lambda-cdk/README.md",
      },
      payloads: [
        {
          payloadURL: "",
          headline: "",
        },
      ],
    },
    framework: "CDK",
    description: "Create an Amazon API Gateway to AWS Lambda REST API.",
    deploy: {
      text: ["npm run deploy"],
    },
    cleanup: {
      text: ["Delete the stack: npm run destroy"],
    },
    author: {
      twitter: "twitter.com/ibrahimcesar",
      name: "Ibrahim Cesar",
      linkedin: "https://www.linkedin.com/in/ibrahimcesar/?locale=en_US",
      image: "https://phonetool.amazon.com/users/ibracnb",
      bio: "Enterprise Solutions Architect @ AWS",
    },
    architectureURL:
      "https://ibrahimcesar-github.s3.amazonaws.com/patterns-apigw-lambda-cdk.png",
    id: "f36e82c4-bb5b-11ed-b046-3e86250ca8d9",
  },
  {
    videoId: "",
    title: "API Gateway to Lambda to DynamoDB",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    services: {
      to: "dynamodb",
      from: "apigw",
    },
    resources: {
      headline: "Additional resources",
      bullets: [],
    },
    level: "200",
    language: "Go",
    introBox: {
      text: [
        "This pattern explains how to deploy a CDK application with Amazon API Gateway, AWS Lambda, and Amazon DynamoDB using the Go programming language.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-dynamodb-cdk-golang",
        readmeURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-dynamodb-cdk-golang/README.md",
      },
      payloads: [
        {
          payloadURL: "",
          headline: "",
        },
      ],
    },
    framework: "CDK",
    description:
      "Create a Lambda function that receives a request from API Gateway and inserts a record into a DynamoDB table.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["cdk destroy"],
    },
    author: {
      twitter: "abhi_tweeter",
      name: "Abhishek Gupta",
      linkedin: "https://www.linkedin.com/in/abhirockzz/",
      imageURL: "https://abhirockzz.github.io/icon.jpg",
      headline:
        "Presented by Abhishek Gupta, Principal Developer Advocate at AWS",
    },
    architectureURL:
      "https://serverlessland.s3.amazonaws.com/assets/patterns/patterns-lambda-to-eventbridge.png",
    id: "f36e8bca-bb5b-11ed-ba1a-3e86250ca8d9",
  },
  {
    videoId: "",
    title: "API Gateway to Lambda to DynamoDb",
    services: {
      to: "dynamodb",
      from: "apigw",
    },
    resources: {
      headline: "Additional resources",
      bullets: [],
    },
    level: "200",
    language: ".NET",
    introBox: {
      text: [
        "This pattern explains how to deploy a CDK application with Amazon API Gateway, AWS Lambda, and Amazon DynamoDB.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-dynamodb-cdk",
        readmeURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-dynamodb-cdk/README.md",
      },
      payloads: [
        {
          payloadURL: "",
          headline: "",
        },
      ],
    },
    framework: "CDK",
    description:
      "Create a Lambda function that receives a request from API Gateway and inserts a record into a DynamoDB table.",
    deploy: {
      text: ["cdk deploy"],
    },
    author: {
      twitter: "plantpowerjames",
      name: "James Eastham",
      headline: "Presented by James Eastham, Cloud Infrastructure Architect",
    },
    architectureURL:
      "https://serverlessland.s3.amazonaws.com/assets/patterns/patterns-lambda-to-eventbridge.png",
    id: "f36e969c-bb5b-11ed-b13e-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway to AWS Lambda to Amazon DynamoDB",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS Docs:Writing Data to a Table",
          link: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.WriteData.html",
        },
        {
          text: "Using AWS Lambda with Amazon API Gateway",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "When an HTTP POST request is sent to the Amazon API Gateway endpoint, the AWS Lambda function is invoked and inserts an item into the Amazon DynamoDB table.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-lambda-dynamodb-terraform",
        templateFile: "apigw-lambda-dynamodb-terraform/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-dynamodb-terraform",
        projectFolder: "apigw-lambda-dynamodb-terraform",
      },
    },
    framework: "Terraform",
    description:
      "This pattern demonstrates how to deploy an application with Amazon API Gateway, AWS Lambda, and Amazon DynamoDB using Terraform.",
    deploy: {
      text: ["terraform init", "terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy", "terraform show"],
    },
    authors: [
      {
        name: "Carlos Bauer",
        bio: "I am a Technical Account Manager at AWS",
      },
    ],
    id: "f36ea0ec-bb5b-11ed-91d3-3e86250ca8d9",
  },
  {
    title: "API Gateway to Lambda to AWS IoT",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Boto3 IoT Publish",
          link: "https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/iot-data.html#IoTDataPlane.Client.publish",
        },
        {
          text: "AWS IoT HTTPS",
          link: "https://docs.aws.amazon.com/iot/latest/developerguide/http.html",
        },
      ],
    },
    level: "200",
    introBox: {
      text: [
        "This pattern creates an Amazon API Gateway REST API endpoint, that invokes a Lambda function.",
        "The Lambda function has been given permissions to publish to AWS IoT Core (`iot:Publish`). Make a POST call to the API Endpoint with `topic` and `message` in the body.",
        "This pattern deploys an API Gateway resource and one Lambda function.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-lambda-iot-cdk",
        templateFile: "apigw-lambda-iot-cdk/lib/apigw-lambda-iot-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-iot-cdk",
        projectFolder: "apigw-lambda-iot-cdk",
      },
    },
    framework: "CDK",
    description:
      "Create an API Gateway REST API to invoke a Lambda function that will publish to AWS IoT Core.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "@ashujoshi",
        name: "Ashu Joshi",
        linkedin: "ashujoshi",
        image:
          "https://avatars.githubusercontent.com/u/79330125?s=400&u=4802ebc8f24e64031052d3bf95af3dea7920357d&v=4",
        bio: "I am a Principal Architect, AWS Cloud Architect, Full-Stack Developer, Edge AI/ML/IoT Engineer, and Serverless Enthusiast.",
      },
    ],
    id: "f36eac72-bb5b-11ed-98fb-3e86250ca8d9",
  },
  {
    title: "Response Transformation from XML to JSON in API Gateway",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "API Gateway Mapping Template Reference",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html",
        },
        {
          text: "Error Handling Patterns in Amazon API Gateway and AWS Lambda",
          link: "https://aws.amazon.com/blogs/compute/error-handling-patterns-in-amazon-api-gateway-and-aws-lambda/",
        },
        {
          text: "Apache VTL reference user guide",
          link: "https://velocity.apache.org/engine/2.0/user-guide.html",
        },
      ],
    },
    level: "200",
    language: "Node.js",
    introBox: {
      text: [
        "As part of this article, we will be creating a lambda and an API Gateway. The API Gateway will return custom xml transforming the json response from lambda.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/apigw-lambda-json-xml-vtl-transformation",
        templateFile: "apigw-lambda-json-xml-vtl-transformation/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-json-xml-vtl-transformation",
        projectFolder: "apigw-lambda-json-xml-vtl-transformation",
      },
    },
    framework: "SAM",
    description:
      "Use VTL template to transform json response to xml in Amazon API Gateway.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: [
        "Delete the stack: <code>sam delete --stack-name STACK_NAME</code>.",
        "Confirm the stack has been deleted: <code>aws cloudformation list-stacks --query \"StackSummaries[?contains(StackName,'STACK_NAME')].StackStatus\"</code>",
      ],
    },
    authors: [
      {
        name: "Vamsi Krishna Ganti",
        bio: "Cloud Consultant at AWS focusing on Application Development.",
      },
    ],
    id: "f36eb7ee-bb5b-11ed-a295-3e86250ca8d9",
  },
  {
    title: "Lambda to MemoryDB",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS Lambda",
          link: "https://aws.amazon.com/lambda/",
        },
        {
          text: "Amazon MemoryDB for Redis",
          link: "https://aws.amazon.com/memorydb/",
        },
      ],
    },
    level: "200",
    language: "Java",
    introBox: {
      text: [
        "This sample shows how to build a durable, in-memory, cluster-enabled database service and integrate it with AWS Lambda. Lambda functions use REST API calls to access the data and configuration from the MemoryDB.",
        "This pattern deploys 2 Lambda Functions, one MemoryDB cluster and one API gateway public endpoint.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-lambda-memorydb",
        templateFile: "apigw-lambda-memorydb/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-memorydb",
        projectFolder: "apigw-lambda-memorydb",
      },
    },
    framework: "SAM",
    description: "Create Lambda Functions to interact with MemoryDB.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: [
        "Delete the stack: <code>sam delete --stack-name STACK_NAME</code>.",
      ],
    },
    authors: [
      {
        name: "Mansi Doshi",
        linkedin: "https://www.linkedin.com/in/mansi-doshi-2a448177",
        image: "",
        bio: "Mansi is a Cloud Consultant at Amazon Web Services based in India.",
      },
    ],
    id: "f36ec81a-bb5b-11ed-b5da-3e86250ca8d9",
  },
  {
    videoId: "",
    title: "API Gateway to Lambda with observability",
    services: {
      to: "lambda",
      from: "api",
    },
    resources: {
      headline: "Additional resources",
      bullets: [
        {
          text: "Extended examples of this pattern implementation",
          link: "https://github.com/aws-samples/serverless-samples/tree/main/serverless-rest-api",
        },
      ],
    },
    level: "200",
    language: "Node.js",
    introBox: {
      text: [
        "This pattern deploys Amazon API Gateway HTTP API with a single route that is integrated with and AWS Lambda function written in Node.js. Pattern uses Amazon CloudWatch logs, metrics, alerts, dashboards, Embedded Metrics Format, AWS X-Ray, Amazon SNS.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "https://raw.githubusercontent.com/aws-samples/serverless-patterns/main/apigw-lambda-observability/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-observability",
        readmeURL: "",
      },
      payloads: [
        {
          payloadURL: "",
          headline: "",
        },
      ],
    },
    framework: "SAM",
    description:
      "Create an API with metrics, alerts, traces, logs, and dashboard.",
    deploy: {
      text: ["npm install", "sam build", "sam deploy --guided"],
    },
    author: {
      name: "Giedrius Praspaliauskas",
      linkedin: "https://www.linkedin.com/in/gpraspaliauskas/",
      imageURL: "",
      headline:
        "Presented by Giedrius Praspaliauskas, Sr. Solutions Architect, Serverless",
      bio: "Giedrius is a senior solutions architect focusing on serverless at Amazon Web Services based in the US. ",
    },
    architectureURL:
      "https://serverlessland.s3.amazonaws.com/assets/patterns/apigw-lambda-observability.png",
    id: "f36ecfa4-bb5b-11ed-9d83-3e86250ca8d9",
  },
  {
    title: "API Gateway to Lambda to QLDB",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "Amazon QLDB documentation",
          link: "https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html",
        },
        {
          text: "Real world cryptographic verification with Amazon QLDB",
          link: "https://aws.amazon.com/blogs/database/real-world-cryptographic-verification-with-amazon-qldb/",
        },
        {
          text: "QLDB Shell",
          link: "https://github.com/awslabs/amazon-qldb-shell",
        },
        {
          text: "AWS re:Invent 2020 - Building out a serverless application with Amazon QLDB",
          link: "https://www.youtube.com/watch?v=dtBpwCBlz6M",
        },
        {
          text: "QLDB Guide",
          link: "https://qldbguide.com/",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "This pattern shows how to deploy a Terraform template with Amazon API Gateway, AWS Lambda and Amazon Quantum Ledger Database (QLDB). The API Gateway exposes a REST API with a number of methods. Each API method uses a Lambda proxy integration to invoke a separate AWS Lambda function that interacts with a ledger in Amazon QLDB. This allows you to create a new Person record, update the record, delete the record, view the current state of the record, and view the entire revision history.",
        "Each Lambda function is configured with the minimum set of permissions necessary. For example, only the Get Person History function has the qldb:PartiQLHistoryFunction permission needed to query the full revision history.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-lambda-qldb-terraform",
        templateFile: "apigw-lambda-qldb-terraform/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-qldb-terraform",
        projectFolder: "apigw-lambda-qldb-terraform",
      },
    },
    framework: "Terraform",
    description:
      "Create an API Gateway REST API that uses a Lambda function to call QLDB",
    deploy: {
      text: ["terraform init", "terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy", "terraform show"],
    },
    authors: [
      {
        name: "Stephen Monaghan",
        linkedin: "https://www.linkedin.com/in/stephen-monaghan-61873194/",
        image: "",
        bio: "Solutions Architect, AWS",
      },
    ],
    id: "f36edabc-bb5b-11ed-86ba-3e86250ca8d9",
  },
  {
    title:
      "Create a REST API with Amazon API Gateway, Amazon RDS and AWS Lambda with SnapStart",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "Lambda SnapStart Developer Guide",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html",
        },
        {
          text: "re:Invent Video - AWS Lambda SnapStart (SVS320)",
          link: "https://www.youtube.com/watch?v=ZbnAithBNYY",
        },
        {
          text: "Micronaut",
          link: "https://micronaut.io/",
        },
        {
          text: "Micronaut CRaC Reference",
          link: "https://micronaut-projects.github.io/micronaut-crac/latest/guide/",
        },
      ],
    },
    level: "300",
    language: "Java",
    introBox: {
      text: [
        "CDK creates all the infrastructure we need for the pattern, include the VPC, subnets, security groups,secrets and the DB.",
        "The DB setup Lambda function is executed once to create the database table with a given structure.",
        "This REST API is implemented with the Micronaut framework. Credentials for the DB are passed as environment variables to the application.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-lambda-rds-snapstart",
        templateFile: "do i need this?`",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-rds-snapstart",
        projectFolder: "apigw-lambda-rds-snapstart",
      },
    },
    framework: "CDK",
    description:
      "A pattern to show how to use Lambda SnapStart with relational databases.",
    deploy: {
      text: ["cdk deploy --all"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy --all</code>."],
    },
    authors: [
      {
        twitter: "@MarkSailes3",
        name: "Mark Sailes",
        linkedin: "mark-sailes",
        image: "https://avatars.githubusercontent.com/u/45629314",
        bio: "Senior Specialist SA, Serverless at AWS and Java fan.",
      },
    ],
    id: "f36ee322-bb5b-11ed-b828-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway REST API to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon API Gateway",
          link: "https://aws.amazon.com/api-gateway/",
        },
      ],
    },
    level: "300",
    language: "Rust",
    introBox: {
      text: [
        "This pattern deploys an Amazon API Gateway REST API API with a default route and basic CORS configuration. The default route is integrated with an AWS Lambda function written in Rust. The function logs the incoming API event and context object to an Amazon CloudWatch Logs log group and returns basic information about the event to the caller.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-lambda-rust",
        templateFile: "apigw-lambda-rust/template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-rust",
        projectFolder: "apigw-lambda-rust",
      },
    },
    framework: "SAM",
    description:
      "This pattern creates an Amazon API Gateway REST API and an AWS Lambda function.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f36eeff2-bb5b-11ed-853a-3e86250ca8d9",
  },
  {
    title: "ApiGateway Endpoint to Generate SignedURL",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "API Gateway >> Lambda >> S3",
        },
      ],
    },
    level: "200",
    language: ".NET",
    introBox: {
      text: [
        "This pattern deploys an API Gateway, a Lambda (Docker Image & ECR), a S3 Bucket with sample files",
        "Generate Docker Image for the Function - dotnet6.0",
        "Deploy the Lamdba with the Image",
        "Deploy an APIGateway Endpoint with Get method in Root to proxy to Lambda",
        "Deploy a S3 Bucket and upload sample files for SignedURL quick validation",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-lambda-s3-cdk-dotnet",
        templateFile: "apigw-lambda-s3-cdk-dotnet/cdk/src/Cdk/CdkStack.cs",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-s3-cdk-dotnet",
        projectFolder: "apigw-lambda-s3-cdk-dotnet",
      },
    },
    framework: "CDK",
    description:
      "Creates APIGateway Endpoint backed by AWS Lambda Function will generate the PresignedURL for the object available in the S3 Bucket.",
    deploy: {
      text: ["See the Github repo for detailed deployment instructions."],
    },
    cleanup: {
      text: ["See the Github repo for detailed cleanup instructions."],
    },
    authors: [
      {
        twitter: "@srcsakthivel",
        name: "Sakthivel Chellapparimanam",
        linkedin: "https://www.linkedin.com/in/srcsakthivel",
        image: "",
        bio: "AWS - Cloud Application Architect",
      },
    ],
    id: "f36efb8c-bb5b-11ed-86b8-3e86250ca8d9",
  },
  {
    videoId: "",
    title: "Amazon API Gateway to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    services: {
      to: "lambda",
      from: "apigateway",
    },
    resources: {
      bullets: [
        {
          text: "Using AWS Lambda with Amazon API Gateway",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html",
        },
        {
          text: "Set up Lambda integrations in API Gateway",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-integrations.html",
        },
      ],
    },
    level: "100",
    language: "Node.js, TypeScript",
    introBox: {
      text: [
        "This pattern in Serverless Framework offers a boilerlate to generate an Amazon API Gateway REST API endpoint ",
        'with a greedy proxy ("{proxy+}") and "ANY" method from the specified path, meaning it will accept by default any method and any path. ',
        "The Lambda function, provided in TypeScript, only returns the path.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-lambda-sls",
        templateFile: "serverless.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-sls",
        projectFolder: "apigw-lambda-sls",
      },
    },
    framework: "Serverless Framework",
    description: "Create an Amazon API Gateway to AWS Lambda REST API.",
    deploy: {
      text: ["<code>serverless deploy --verbose</code>"],
    },
    cleanup: {
      text: ["<code>serverless remove --verbose</code>."],
    },
    authors: [
      {
        name: "Dmitry Gulin",
        imageURL:
          "https://www.gravatar.com/avatar/223055bd132d244f6a96c3aef7453a5a?s=200",
        headline: "Presented by Dmitry Gulin, Modernization Architect, AWS",
        bio: "Dmitry is a modernization architect for Professional Services at Amazon Web Services based in the US.",
      },
    ],
    architectureURL:
      "https://ibrahimcesar-github.s3.amazonaws.com/patterns-apigw-lambda-cdk.png",
    id: "f36f0b2c-bb5b-11ed-8b49-3e86250ca8d9",
  },
  {
    title: "API Gateway to Lambda with SnapStart",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS Lambda SnapStart",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html",
        },
      ],
    },
    level: "200",
    language: "Java",
    introBox: {
      text: [
        "This sample project demonstrates how to use an API Gateway, Lambda and DynamoDB with Lambda SnapStart for Java.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-lambda-snapstart",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-snapstart",
        projectFolder: "apigw-lambda-snapstart",
      },
    },
    framework: "SAM",
    description: "Create a Java Lambda function with SnapStart",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: [
        "Delete the stack: <code>sam delete --stack-name STACK_NAME</code>.",
        "Confirm the stack has been deleted: <code>aws cloudformation list-stacks --query \"StackSummaries[?contains(StackName,'STACK_NAME')].StackStatus\"</code>",
      ],
    },
    authors: [
      {
        twitter: "MarkSailes3",
        name: "Mark Sailes",
        bio: "Senior Specialist Solutions Architect, Serverless",
      },
    ],
    id: "f36f15e0-bb5b-11ed-86bd-3e86250ca8d9",
  },
  {
    title: "API Gateway REST API to Lambda function and AWS Translate",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS Serverless Application Model",
          link: "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html",
        },
        {
          text: "AWS Translate",
          link: "https://aws.amazon.com/translate/",
        },
        {
          text: "AWS Translate Languages",
          link: "https://docs.aws.amazon.com/translate/latest/dg/pairs.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "API Gateway REST API is integrated to AWS Lambda function which calls AWS Translate service",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-lambda-translate",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-lambda-translate",
        projectFolder: "apigw-lambda-translate",
      },
    },
    framework: "SAM",
    description:
      "This pattern creates an Amazon API Gateway REST API and an AWS Lambda function that calls AWS Translate service.",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Sudheer Yalamanchili",
        linkedin: "sudheeryalamanchili",
        image: "./sudheer.jpg",
        bio: "Sudheer is a Cloud Application Architect at AWS ProServ.",
      },
    ],
    id: "f36f3c00-bb5b-11ed-b9c0-3e86250ca8d9",
  },
  {
    title:
      "Amazon API Gateway REST API with Mapping templates for status code and parameter mapping.",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Usage of mapping templates",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-override-request-response-parameters.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This sample project demonstrates how to map status codes and over-ride parameters in a REST API - Lambda integration.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-mappingtemplate-lambda",
        templateFile: "apigw-mappingtemplate-lambda/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-mappingtemplate-lambda",
        projectFolder: "apigw-mappingtemplate-lambda",
      },
    },
    framework: "SAM",
    description:
      "Using mapping template to over-ride status, status code and body returned from the Lambda function.",
    deploy: {
      text: [
        "sam deploy --guided --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM",
      ],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "D Surya Sai",
        linkedin: "https://www.linkedin.com/in/d-surya-sai-64920416a",
        image: "https://photos.app.goo.gl/m4om6YSqu7Q2yKqw8",
        bio: "A Serverless Cloud Engineer and technical writer, who works on building efficient and scalable solutions using AWS services.",
      },
    ],
    id: "f36f4966-bb5b-11ed-8441-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway with cache enabled",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Create a REST API Gateway with a method-level cache",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html",
        },
      ],
    },
    level: "200",
    language: "Node.js",
    introBox: {
      text: [
        "This pattern deploys an Amazon API Gateway REST API endpoint with a method-level cache.",
        "The GET method on the root resource / is enabled with a cache and TTL (Time-To-Live) of 10 seconds.",
        "Any requests made within this 10 second period will be a cache hit and the cached response will be returned by API Gateway immediately without invoking the Lambda integration.",
        "The Lambda integration returns a timestamp in the header so that it is easy to visualize whether a particular response is being returned as a cached response or as a response from the Lambda integration.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-method-cache",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-method-cache",
        projectFolder: "apigw-method-cache",
      },
    },
    framework: "SAM",
    description: "Create a REST API Gateway with a method-level cache",
    deploy: {
      text: ["Deploy the stack: <code>sam deploy</code>."],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Albert Blaya",
        linkedin: "albertblaya",
        image:
          "https://media-exp1.licdn.com/dms/image/C5603AQEw2HXx9zs7yg/profile-displayphoto-shrink_200_200/0/1600474292127?e=1655942400&v=beta&t=SbeIn9psV0BIFkbROTDRIfPMKMtyrrgBdgt0tRHY0BY",
        headline: "Presented by Albert Blaya, Solutions Architect",
        bio: "Albert is a Solutions Architect at Amazon Web Services based in Australia.",
      },
    ],
    id: "f36f582a-bb5b-11ed-81b9-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway with Resource Policy",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Controlling access to an API with API Gateway resource policies",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies.html",
        },
      ],
    },
    level: "200",
    language: "Node.js",
    introBox: {
      text: [
        "This pattern deploys an Amazon API Gateway REST API endpoint that uses a Resource Policy for access control.",
        "The Resource Policy explicitly blacklists a list of IP ranges and also explicitly whitelists another list of IP ranges.",
        "If allowed by the Resource Policy, API Gateway will forward the request to a Lambda function which will output the received event object.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-resource-policy",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-resource-policy",
        projectFolder: "apigw-resource-policy",
      },
    },
    framework: "SAM",
    description:
      "Create a REST API Gateway with a Resource Policy for access control",
    deploy: {
      text: ["Deploy the stack: <code>sam deploy</code>."],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Albert Blaya",
        linkedin: "albertblaya",
        image:
          "https://media-exp1.licdn.com/dms/image/C5603AQEw2HXx9zs7yg/profile-displayphoto-shrink_200_200/0/1600474292127?e=1655942400&v=beta&t=SbeIn9psV0BIFkbROTDRIfPMKMtyrrgBdgt0tRHY0BY",
        headline: "Presented by Albert Blaya, Solutions Architect",
        bio: "Albert is a Solutions Architect at Amazon Web Services based in Australia.",
      },
    ],
    id: "f36f6342-bb5b-11ed-864f-3e86250ca8d9",
  },
  {
    videoId: "",
    title: "Amazon API Gateway REST API to Amazon DynamoDB",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    services: {
      to: "dynamodb",
      from: "apigateway",
    },
    resources: {
      bullets: [
        {
          text: "Using Amazon API Gateway as a proxy for DynamoDB",
          link: "https://aws.amazon.com/blogs/compute/using-amazon-api-gateway-as-a-proxy-for-dynamodb/",
        },
      ],
    },
    level: "100",
    language: "",
    introBox: {
      text: [
        'This pattern creates an Amazon API Gateway REST API that integrates with an Amazon DynamoDB table named "Music". ',
        'The API includes an API key and usage plan. The DynamoDB table includes a Global Secondary Index named "Artist-Index". ',
        'The API integrates directly with the DynamoDB API and supports "PutItem" and "Query" actions.',
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-rest-api-dynamodb-sls",
        templateFile: "serverless.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-rest-api-dynamodb-sls",
        projectFolder: "apigw-rest-api-dynamodb-sls",
      },
    },
    framework: "Serverless Framework",
    description:
      "Create an Amazon API Gateway REST API that integrates with an Amazon DynamoDB table.",
    deploy: {
      text: ["<code>serverless deploy --verbose</code>"],
    },
    cleanup: {
      text: ["<code>serverless remove --verbose</code>."],
    },
    authors: [
      {
        name: "Dmitry Gulin",
        imageURL:
          "https://www.gravatar.com/avatar/223055bd132d244f6a96c3aef7453a5a?s=200",
        headline: "Presented by Dmitry Gulin, Modernization Architect, AWS",
        bio: "Dmitry is a modernization architect for Professional Services at Amazon Web Services based in the US.",
      },
    ],
    architectureURL: "",
    id: "f36f6bbc-bb5b-11ed-8076-3e86250ca8d9",
  },
  {
    title:
      "API Gateway REST API to EventBridge with event payload composition and SQS as target",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      headline: "Additional resources",
      bullets: [
        {
          text: "Integrating Amazon EventBridge into your serverless applications",
          link: "https://aws.amazon.com/blogs/compute/integrating-amazon-eventbridge-into-your-serverless-applications/",
        },
        {
          text: "Use Amazon EventBridge to Build Decoupled, Event-Driven Architectures",
          link: "https://serverlessland.com/learn/eventbridge",
        },
      ],
    },
    level: "300",
    language: "Node.js",
    introBox: {
      text: [
        "The APIGW payload is sent to EventBridge as a custom event payload. In the integration request, a custom payload is created and passed to EventBridge that target an SQS.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-rest-api-eventbridge-sqs-sam",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-rest-api-eventbridge-sqs-sam",
        projectFolder: "apigw-rest-api-eventbridge-sqs-sam",
      },
    },
    framework: "SAM",
    description:
      "Create an API Gateway that sends events to EventBridge and enriches the event in the integration request.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Daniele Frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f36f76fc-bb5b-11ed-aa69-3e86250ca8d9",
  },
  {
    title: "API Gateway REST API to Amazon EventBridge",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Storage first integrations",
          link: "https://aws.amazon.com/blogs/compute/building-storage-first-applications-with-http-apis-service-integrations/",
        },
      ],
    },
    level: "200",
    language: "N/A",
    introBox: {
      text: [
        "This pattern creates an Amazon API gateway REST API endpoint.",
        "The endpoint uses service integrations to directly connect to Amazon EventBridge.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-rest-api-eventbridge-terraform",
        templateFile: "apigw-rest-api-eventbridge-terraform/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-rest-api-eventbridge-terraform",
        projectFolder: "apigw-rest-api-eventbridge-terraform",
      },
    },
    framework: "Terraform",
    description:
      "This pattern creates an Amazon API gateway REST API endpoint that uses a service integration to directly connect to Amazon EventBridge.",
    deploy: {
      text: ["terraform init", "terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy", "terraform show"],
    },
    authors: [
      {
        name: "Carlos Bauer",
        bio: "I am Technical Account Manager at AWS",
      },
    ],
    id: "f36f8386-bb5b-11ed-8aa7-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway with a HTTP integration",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Create a REST API Gateway with a public HTTP endpoint integration",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-http-integrations.html",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "This pattern deploys an Amazon API Gateway REST API endpoint with a simple public HTTP endpoint integration.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-rest-api-http-integration",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-rest-api-http-integration",
        projectFolder: "apigw-rest-api-http-integration",
      },
    },
    framework: "SAM",
    description:
      "Create a REST API Gateway with a public HTTP endpoint integration",
    deploy: {
      text: ["Deploy the stack: <code>sam deploy</code>."],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Albert Blaya",
        linkedin: "albertblaya",
        image:
          "https://media-exp1.licdn.com/dms/image/C5603AQEw2HXx9zs7yg/profile-displayphoto-shrink_200_200/0/1600474292127?e=1655942400&v=beta&t=SbeIn9psV0BIFkbROTDRIfPMKMtyrrgBdgt0tRHY0BY",
        headline: "Presented by Albert Blaya, Solutions Architect",
        bio: "Albert is a Solutions Architect at Amazon Web Services based in Australia.",
      },
    ],
    id: "f36f97d6-bb5b-11ed-ae60-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway with a Mock integration",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Create a REST API Gateway with a Mock endpoint integration",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-mock-integration.html",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "This pattern deploys an Amazon API Gateway REST API endpoint with a simple Mock endpoint integration.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-rest-api-mock-integration",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-rest-api-mock-integration",
        projectFolder: "apigw-rest-api-mock-integration",
      },
    },
    framework: "SAM",
    description: "Create a REST API Gateway with a Mock endpoint integration",
    deploy: {
      text: ["Deploy the stack: <code>sam deploy</code>."],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Albert Blaya",
        linkedin: "albertblaya",
        image:
          "https://media-exp1.licdn.com/dms/image/C5603AQEw2HXx9zs7yg/profile-displayphoto-shrink_200_200/0/1600474292127?e=1655942400&v=beta&t=SbeIn9psV0BIFkbROTDRIfPMKMtyrrgBdgt0tRHY0BY",
        headline: "Presented by Albert Blaya, Solutions Architect",
        bio: "Albert is a Solutions Architect at Amazon Web Services based in Australia.",
      },
    ],
    id: "f36fa30c-bb5b-11ed-808f-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway with a VPC Link integration",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "REST API with VPC Link integration",
          link: "https://docs.amazonaws.cn/en_us/apigateway/latest/developerguide/getting-started-with-private-integration.html",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "This pattern deploys an Amazon API Gateway REST API endpoint with a VPC Link integration.",
        "Since REST APIs only support VPC Links associated with NLBs (Network Load Balancers), this pattern assumes that an internal NLB already exists in a VPC in the same Region.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-rest-api-vpclink",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-rest-api-vpclink",
        projectFolder: "apigw-rest-api-vpclink",
      },
    },
    framework: "SAM",
    description: "Create a REST API Gateway with a VPC Link integration",
    deploy: {
      text: ["Deploy the stack: <code>sam deploy</code>."],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Albert Blaya",
        linkedin: "albertblaya",
        image:
          "https://media-exp1.licdn.com/dms/image/C5603AQEw2HXx9zs7yg/profile-displayphoto-shrink_200_200/0/1600474292127?e=1655942400&v=beta&t=SbeIn9psV0BIFkbROTDRIfPMKMtyrrgBdgt0tRHY0BY",
        headline: "Presented by Albert Blaya, Solutions Architect",
        bio: "Albert is a Solutions Architect at Amazon Web Services based in Australia.",
      },
    ],
    id: "f36fabc2-bb5b-11ed-a932-3e86250ca8d9",
  },
  {
    title: "Amazon Route53 to Amazon API Gateway failover",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [],
    },
    level: "300",
    language: "Python",
    introBox: {
      text: [
        "The application exists in two seperate regions. One is a primary and the second is a secondary. Traffic will always be routed to the primary region unless there is an issue. If an issue with the primary region occurs, Route53 will route traffic to the secondary region. This example demonstrates the failover only and does not encompass authentication and data for the multiple regions.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-route53-failovert",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-route53-failover",
        projectFolder: "apigw-route53-failover",
      },
    },
    framework: "SAM",
    description:
      "Creates a simple application with failover records in Route53",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "edjgeek",
        name: "Eric Johnson",
        linkedin: "singledigit",
        image: "https://serverlessland.com/assets/images/resources/ericdj.jpg",
        bio: "Eric Johnson is a Principal Developer Advocate for Serverless Applications at Amazon Web Services and is based in Northern Colorado. Eric is a fanatic about serverless and enjoys helping developers understand how serverless technologies introduces a major paradigm shift in how they approach building and running applications at massive scale with minimal administration overhead. Prior to this, Eric has worked as a developer, solutions architect and AWS Evangelist for an AWS partner company.",
      },
    ],
    id: "f36fb414-bb5b-11ed-a879-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway with a S3 integration",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "REST API with S3 integration",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/integrating-api-with-aws-services-s3.html",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "This pattern deploys an Amazon API Gateway REST API endpoint with a S3 read-only integration",
        "The API exposes 3 GET methods:",
        "Root GET method: it provides a list of the S3 buckets of the account where the stack is deployed.",
        "{folder} GET method: it provides a list of the objects contained in the bucket {folder}",
        "{item} GET method: it returns the contents of the object {item}.",
        "The template also deploys an IAM role with S3 read-only capabilities that is used by API Gateway to integrate with S3.",
        "Since this is API Gateway effectively acts as a proxy S3, every GET method is protected by IAM authentication to prevent public access.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-s3-proxy",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-s3-proxy",
        projectFolder: "apigw-s3-proxy",
      },
    },
    framework: "SAM",
    description: "Create a REST API Gateway with a S3 read-only integration",
    deploy: {
      text: ["Deploy the stack: <code>sam deploy</code>."],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Albert Blaya",
        linkedin: "albertblaya",
        image:
          "https://media-exp1.licdn.com/dms/image/C5603AQEw2HXx9zs7yg/profile-displayphoto-shrink_200_200/0/1600474292127?e=1655942400&v=beta&t=SbeIn9psV0BIFkbROTDRIfPMKMtyrrgBdgt0tRHY0BY",
        headline: "Presented by Albert Blaya, Solutions Architect",
        bio: "Albert is a Solutions Architect at Amazon Web Services based in Australia.",
      },
    ],
    id: "f36fbc52-bb5b-11ed-bebc-3e86250ca8d9",
  },
  {
    videoId: "",
    title: "API Gateway to Step Functions",
    services: {
      to: "sfn",
      from: "apigw",
    },
    resources: {
      headline: "Additional resources",
      bullets: [],
    },
    level: "300",
    language: ".NET",
    introBox: {
      text: [
        "This pattern explains how to deploy a CDK application with Amazon API Gateway that invokes a syncronous Step Functions workflow.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-sfn-cdk",
        readmeURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-sfn-cdk/README.md",
      },
      payloads: [
        {
          payloadURL: "",
          headline: "",
        },
      ],
    },
    framework: "CDK",
    description:
      "Create an API Gateway HTTP APIs endpoint that starts a Step Functions synchronous Express Workflow.",
    deploy: {
      text: ["cdk deploy"],
    },
    author: {
      twitter: "plantpowerjames",
      name: "James Eastham",
      headline: "Presented by James Eastham, Cloud Infrastructure Architect",
    },
    architectureURL: "",
    id: "f36fc5d0-bb5b-11ed-9ed4-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway REST API with SNS SMS integration",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "REST API with SNS integration",
          link: "https://aws.amazon.com/premiumsupport/knowledge-center/api-gateway-proxy-integrate-service/",
        },
      ],
    },
    level: "200",
    introBox: {
      text: [
        "This sample project demonstrates how to send a SMS messages using API Gateway.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-sns-sms",
        templateFile: "apigw-sns-sms/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-sns-sms",
        projectFolder: "apigw-sns-sms",
      },
    },
    framework: "SAM",
    description: "Send SMS messages from API Gateway using SNS",
    deploy: {
      text: ["sam deploy --guided --capabilities CAPABILITY_IAM"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Siddhi Jha",
        linkedin: "https://www.linkedin.com/in/siddhi-jha/",
        image:
          "https://drive.google.com/file/d/1H62Y6-JfUTiT-gIwDRYH6R45y7KJVHvN/view",
        bio: "A Serverless Cloud Engineer who works on building scalable, economic and sustainable solutions using AWS",
      },
    ],
    id: "f36fd16a-bb5b-11ed-be74-3e86250ca8d9",
  },
  {
    title: "API Gateway HTTP API to SQS",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Working with HTTP APIs",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html",
        },
      ],
    },
    level: "200",
    language: "Java",
    introBox: {
      text: [
        "In this pattern, called Queue based leveling, a serverless queue is introduced between your API Gateway and your workers, a Lambda function in this case.",
        "The queue acts as a buffer to alleviate traffic spikes and ensure your workload can sustain the arriving load by buffering all the requests durably.",
        "It also helps downstream consumers to process the incoming requests at a consistent pace.",
      ],
      headline:
        "Create an Amazon API Gateway HTTP API that integrates with an Amazon SQS queue.",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-sqs-lambda-java",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-sqs-lambda-java",
        projectFolder: "apigw-sqs-lambda-java",
      },
    },
    framework: "SAM",
    description:
      "Create an Amazon API Gateway HTTP API that integrates with an Amazon SQS queue.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: [
        "Delete the stack: <code>aws cloudformation delete-stack --stack-name STACK_NAME</code>.",
        "Confirm the stack has been deleted: aws cloudformation list-stacks --query \"StackSummaries[?contains(StackName,'STACK_NAME')].StackStatus\"",
      ],
    },
    authors: [
      {
        twitter: "@isbkch",
        name: "lLyas Bakouch",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ilyas-bakouch.jpg",
        bio: "Senior Solutions Architect, AWS.",
      },
      {
        name: "Steven Cook",
        bio: "Senior Solutions Architect, AWS.",
      },
    ],
    id: "f36fddb8-bb5b-11ed-b120-3e86250ca8d9",
  },
  {
    title: "API Gateway Usage Plan",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Happy little API shorts - Usage Plans and API Keys",
          link: "https://s12d.com/hlas-usage-plans",
        },
        {
          text: "API Gateway Usage Plans",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html",
        },
      ],
    },
    level: "300",
    language: "Python",
    introBox: {
      text: [
        "The API Gateway Usage Plan demonstrates stage level throttling and quotas as well as method level throttling. ",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-usage-plans",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-usage-plans",
        projectFolder: "apigw-usage-plans",
      },
    },
    framework: "SAM",
    description:
      "This pattern creates an Amazon API Gateway REST API with a Usage Plan",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "edjgeek",
        name: "Eric Johnson",
        linkedin: "singledigit",
        image: "https://serverlessland.com/assets/images/resources/ericdj.jpg",
        bio: "Eric Johnson is a Principal Developer Advocate for Serverless Applications at Amazon Web Services and is based in Northern Colorado. Eric is a fanatic about serverless and enjoys helping developers understand how serverless technologies introduces a major paradigm shift in how they approach building and running applications at massive scale with minimal administration overhead. Prior to this, Eric has worked as a developer, solutions architect and AWS Evangelist for an AWS partner company.",
      },
    ],
    id: "f36fe8e4-bb5b-11ed-b174-3e86250ca8d9",
  },
  {
    title: "API Gateway WebSocket API connection ID tracking",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Working with WebSocket APIs",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html",
        },
        {
          text: "Extended examples of this pattern implementation",
          link: "https://github.com/aws-samples/serverless-samples/tree/main/apigw-ws-integrations",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "This pattern uses Amazon API Gateway WebSocket API and AWS Service integration type with AmazonDynamoDB for client connection tracking.",
        "This approach simplifies architecture by eliminating need to use additional compute components such as AWS Lambda.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/apigw-websocket-api-connection-dynamodb",
        templateFile: "apigw-websocket-api-connection-dynamodb/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-websocket-api-connection-dynamodb",
        projectFolder: "apigw-websocket-api-connection-dynamodb",
      },
    },
    framework: "SAM",
    description:
      "Track API Gateway WebSocket API connections using AWS Service integration with DynamoDB",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "",
        name: "Giedrius Praspaliauskas",
        linkedin: "https://www.linkedin.com/in/gpraspaliauskas/",
        image: "",
        bio: "Giedrius is a senior solutions architect focusing on serverless at Amazon Web Services based in the US.",
      },
    ],
    id: "f36ffa78-bb5b-11ed-801e-3e86250ca8d9",
  },
  {
    title:
      "API Gateway WebSocket API to Step Functions Standard (Asynchronous Execution)",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Working with WebSocket APIs",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html",
        },
        {
          text: "Extended examples of this pattern implementation",
          link: "https://github.com/aws-samples/serverless-samples/tree/main/apigw-ws-integrations",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "This pattern uses Amazon API Gateway WebSocket API and AWS Service integration type with AWS Step Functions workflow as a business logics implementation.",
        "This approach simplifies architecture by eliminating need to use additional compute components such as AWS Lambda.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-websocket-api-sfn-async",
        templateFile: "apigw-websocket-api-sfn-async/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-websocket-api-sfn-async",
        projectFolder: "apigw-websocket-api-sfn-async",
      },
    },
    framework: "SAM",
    description:
      "Start Step Functions Standard Workflow asynchronous execution via WebSocket API",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "",
        name: "Giedrius Praspaliauskas",
        linkedin: "https://www.linkedin.com/in/gpraspaliauskas/",
        image: "",
        bio: "Giedrius is a senior solutions architect focusing on serverless at Amazon Web Services based in the US.",
      },
    ],
    id: "f3700284-bb5b-11ed-9551-3e86250ca8d9",
  },
  {
    title:
      "API Gateway WebSocket API to Step Functions Express (Synchronous Execution)",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Working with WebSocket APIs",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html",
        },
        {
          text: "Extended examples of this pattern implementation",
          link: "https://github.com/aws-samples/serverless-samples/tree/main/apigw-ws-integrations",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "This pattern uses Amazon API Gateway WebSocket API and AWS Service integration type with AWS Step Functions workflow as a business logics implementation.",
        "This approach simplifies architecture by eliminating need to use additional compute components such as AWS Lambda.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/apigw-websocket-api-sfn-sync",
        templateFile: "apigw-websocket-api-sfn-sync/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-websocket-api-sfn-sync",
        projectFolder: "apigw-websocket-api-sfn-sync",
      },
    },
    framework: "SAM",
    description:
      "Start Step Functions Express Workflow synchronous execution via WebSocket API",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "",
        name: "Giedrius Praspaliauskas",
        linkedin: "https://www.linkedin.com/in/gpraspaliauskas/",
        image: "",
        bio: "Giedrius is a senior solutions architect focusing on serverless at Amazon Web Services based in the US.",
      },
    ],
    id: "f3700df6-bb5b-11ed-9c88-3e86250ca8d9",
  },
  {
    title: "API Gateway WebSocket API to SQS to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Working with Websocket APIs",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html",
        },
        {
          text: "Lambda Function Handler",
          link: "https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/the-handler.html",
        },
        {
          text: "Amazon SQS FIFO (First-In-First-Out) queues",
          link: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html",
        },
      ],
    },
    level: "300",
    language: "Java",
    introBox: {
      text: [
        "This pattern creates an Amazon API Gateway WebSocket API which sends inbound messages to an Amazon SQS FIFO queue. The queue is processed by an AWS Lambda function to return a result.",
        "The queue acts as a buffer to alleviate traffic spikes and ensure your workload can sustain the arriving load by buffering all the requests durably. It also helps downstream consumers to process the incoming requests at a consistent pace. A FIFO (First-In-First-Out) queue is used to ensure that evens are processed in order of arrival.",
      ],
      headline:
        "Create an API Gateway websocket API that sends events to SQS and then to Lambda",
    },
    gitHub: {
      template: {
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-websocket-api-sqs-lambda-java",
      },
    },
    framework: "SAM",
    description:
      "Create an API Gateway websocket API that sends events to SQS and then to Lambda",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: [
        "Delete the stack: `sam delete --stack-name STACK_NAME`.",
        "Confirm the stack has been deleted: `aws cloudformation list-stacks --query \"StackSummaries[?contains(StackName,'STACK_NAME')].StackStatus\"`",
      ],
    },
    authors: [
      {
        twitter: "@StevenCWarwick",
        name: "Steven Warwick",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/steven-warwick.jpg",
        bio: "Steven Warwick is a Solutions Architect at AWS. He is an engineer at heart with a passion for creating simple solutions to complex problems. He has a background in real time analytics and a passion for SaaS implementations. In his free time, he plays badminton and tinkers with IoT projects around the house.",
      },
      {
        name: "Steven Cook",
        bio: "Senior Solutions Architect at AWS.",
      },
    ],
    id: "f37015da-bb5b-11ed-bc9d-3e86250ca8d9",
  },
  {
    title: "API Gateway WebSocket API to SQS to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Working with WebSocket APIs",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html",
        },
        {
          text: "Announcing WebSocket APIs in Amazon API Gateway",
          link: "https://aws.amazon.com/blogs/compute/announcing-websocket-apis-in-amazon-api-gateway/",
        },
        {
          text: "Lambda Function Handler",
          link: "https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/the-handler.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "The API Gateway handles websocket message events by putting the message into a SQS FIFO (First-In-First-Out) queue.",
        "The SQS FIFO queue is used to ensure processing order of the websocket messages.",
        "The message payload must contain a MessageGroupId field which is used by SQS FIFO queue.",
        "If message order is not required, a standard SQS queue can also be used and the message payload would not require the MessageGroupId field.",
        "The API Gateway websocket request integration passes the connectionId and requestId as metadata and the message body as the payload.",
        "The Lambda function can now process the SQS FIFO requests in a batch manner (10 requests at a time) and send a response back to the websocket connection.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/apigw-websocket-api-sqs-lambda-terraform",
        templateFile: "apigw-websocket-api-sqs-lambda-terraform/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/apigw-websocket-api-sqs-lambda-terraform",
        projectFolder: "apigw-websocket-api-sqs-lambda-terraform",
      },
    },
    framework: "Terraform",
    description:
      "This pattern creates an Amazon API Gateway WebSocket API which sends inbound messages to an Amazon SQS FIFO queue. The queue is processed by an AWS Lambda function to return a result.",
    deploy: {
      text: ["terraform init", "terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy", "terraform show"],
    },
    authors: [
      {
        name: "Carlos Bauer",
        bio: "I am Technical Account Manager at AWS",
      },
    ],
    id: "f3701ef4-bb5b-11ed-8abf-3e86250ca8d9",
  },
  {
    title: "AppConfig Feature Flag with CDK (Typescript)",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AppConfig",
          link: "https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html",
        },
        {
          text: "AppConfig Feature Flags",
          link: "https://aws.amazon.com/blogs/mt/using-aws-appconfig-feature-flags/",
        },
        {
          text: "AppConfig Lambda Extension",
          link: "https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-integration-lambda-extensions.html",
        },
        {
          text: "AppConfig region specific Lambda Extension versions",
          link: "https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-integration-lambda-extensions-versions.html",
        },
      ],
    },
    level: "200",
    language: "typescript",
    introBox: {
      text: [
        "This project demonstrates how to implement a feture flag into AppConfig using AWS CDK.",
        "Also this demonstrates the usage of AppConfig extension for Lambda, to retrieve the status of the Feature Flag.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/appconfig-feature-flag-cdk",
        templateFile:
          "appconfig-feature-flag-cdk/app-config-feature-flag-cdk-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/appconfig-feature-flag-cdk",
        projectFolder: "appconfig-feature-flag-cdk",
      },
    },
    framework: "CDK",
    description:
      "Set up AppConfig Feature Flag with CDK and read the status from Appconfig Extension for Lambda",
    deploy: {
      text: [
        "cdk deploy --all --parameters appConfigExtensionArn='[AppConfig Extension version ARN]'",
      ],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destory --all</code>."],
    },
    authors: [
      {
        twitter: "@pubudusj",
        name: "Pubudu Jayawardana",
        linkedin: "pubudusj",
        image: "https://avatars.githubusercontent.com/u/1263087",
        bio: "AWS Community Builder in Serverless category. Serverless advocate and enthusisast.",
      },
    ],
    id: "f3702a84-bb5b-11ed-876c-3e86250ca8d9",
  },
  {
    title: "AWS AppConfig integration with Lambda extensions",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS AppConfig integration with Lambda extensions",
          link: "https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-integration-lambda-extensions.html",
        },
      ],
    },
    level: "200",
    language: "Rust",
    introBox: {
      text: [
        "The AppConfig extension takes care of calling the AWS AppConfig service, managing a local cache of retrieved data, tracking the configuration tokens needed for the next service calls, and periodically checking for configuration updates in the background. By default, you have 1000 TPS. After the first request, the profile is cached, so from now on, you hit the internal cache of AppConfig. We can use the Lambda Execution Context to avoid calling the AWS AppConfig cached service.",
        "This pattern deploys one Lambda function with AppConfig extension in the Lambda layer.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/appconfig-lambda-rust",
        templateFile: "template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/appconfig-lambda-rust",
        projectFolder: "appconfig-lambda-rust",
      },
    },
    framework: "SAM",
    description: "AWS AppConfig integration with Lambda extensions.",
    deploy: {
      text: ["make deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>make delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f37035b0-bb5b-11ed-9bdc-3e86250ca8d9",
  },
  {
    title: "Authenticate AppSync Api with Cognito",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS CDK- Define cloud infrastructure using familiar programming languages",
          link: "https://aws.amazon.com/cdk/",
        },
        {
          text: "AWS Appsync - Accelerate application development with serverless GraphQL and Pub/Sub APIs",
          link: "https://aws.amazon.com/appsync/",
        },
        {
          text: "Amazon Cognito - Implement secure, frictionless customer identity and access management that scales",
          link: "https://aws.amazon.com/cognito/",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This sample projects demonstrates how to use AWS Cognito to authenticate an AWS Appsync API with lambda resolvers.The same concept can be applied to vtl resolvers as well.",
        "This pattern deploys one appsync api, with a direct lamda resolver.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/appsync-cognito-lambda-cdk",
        templateFile:
          "appsync-cognito-lambda-cdk/lib/cognito-auth-cdk-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/appsync-cognito-lambda-cdk",
        projectFolder: "appsync-cognito-lambda-cdk",
      },
    },
    framework: "CDK",
    description:
      "Create an appsync api and authenticate all request with AWS Cognito User Pools.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        twitter: "atehrosius",
        name: "Rosius Ndimofor",
        linkedin: "rosius",
        image: "https://rosius.s3.us-east-2.amazonaws.com/ro.jpeg",
        bio: "AWS Serverless Hero with a high affinity for building fullstack serverless apps",
      },
    ],
    id: "f37045f0-bb5b-11ed-bc27-3e86250ca8d9",
  },
  {
    title: "AWS AppSync to Amazon DynamoDB - Single table design",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS CDK- Define cloud infrastructure using familiar programming languages",
          link: "https://aws.amazon.com/cdk/",
        },
        {
          text: "AWS Appsync - Accelerate application development with serverless GraphQL and Pub/Sub APIs",
          link: "https://aws.amazon.com/appsync/",
        },
        {
          text: "Amazon Cognito - Implement secure, frictionless customer identity and access management that scales",
          link: "https://aws.amazon.com/cognito/",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This template creates an AppSync api that uses a DynamoDB resolver.",
        "The `getParentAndChildren` resolver demonstrates using a custom resolver to format results from a single table design for AppSync.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/appsync-dynamodb-singletable-cdk",
        templateFile:
          "appsync-dynamodb-singletable-cdk/cdk/lib/cognito-auth-cdk-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/appsync-dynamodb-singletable-cdk",
        projectFolder: "appsync-dynamodb-singletable-cdk/cdk",
      },
    },
    framework: "CDK",
    description:
      "Creates an AppSync API with a schema and a resolver to a DynamoDB table following the single table design model",
    deploy: {
      text: ["npx aws-cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        twitter: "focusotter",
        name: "Michael Liendo",
        linkedin: "focusotter",
        image:
          "https://pbs.twimg.com/profile_images/1610321865213444096/OttGok0S_400x400.jpg",
        bio: "Senior Developer Advocate | AWS AppSync 🦦",
      },
    ],
    id: "f37050c2-bb5b-11ed-839b-3e86250ca8d9",
  },
  {
    title: "Invoke a Step functions workflow from Appsync",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS CDK- Define cloud infrastructure using familiar programming languages",
          link: "https://aws.amazon.com/cdk/",
        },
        {
          text: "AWS Appsync - Accelerate application development with serverless GraphQL and Pub/Sub APIs",
          link: "https://aws.amazon.com/appsync/",
        },
        {
          text: "AWS Step functions- Visual workflows for modern applications",
          link: "https://aws.amazon.com/step-functions",
        },
        {
          text: "Amazon DynamoDB - Fast, flexible NoSQL database service for single-digit millisecond performance at any scale",
          link: "https://aws.amazon.com/dynamodb/",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This sample project demonstrates how to Invoke a Step functions workflow, using Appsync and a Lambda resolver.",
        "This pattern deploys an Appsync Api, a lambda resolver, a DynamoDB and a Step Function workflow using CDK.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/appsync-lambda-sfn-cdk",
        templateFile: "appsync-lambda-sfn-cdk/cdk_momo/cdk_momo_stack.py",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/appsync-lambda-sfn-cdk",
        projectFolder: "appsync-lambda-sfn-cdk",
      },
    },
    framework: "CDK",
    description:
      "Invoke a step functions workflow through a lambda resolver from Appsync",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "atehrosius",
        name: "Rosius Ndimofor",
        linkedin: "rosius",
        image: "https://rosius.s3.us-east-2.amazonaws.com/ro.jpeg",
        bio: "AWS Serverless Hero with a high affinity for building fullstack serverless apps.",
      },
    ],
    id: "f3705c16-bb5b-11ed-99b4-3e86250ca8d9",
  },
  {
    title: "Invoke a Step functions workflow from Appsync",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS Appsync - Accelerate application development with serverless GraphQL and Pub/Sub APIs",
          link: "https://aws.amazon.com/appsync/",
        },
        {
          text: "AWS Step functions- Visual workflows for modern applications",
          link: "https://aws.amazon.com/step-functions",
        },
        {
          text: "Amazon DynamoDB - Fast, flexible NoSQL database service for single-digit millisecond performance at any scale",
          link: "https://aws.amazon.com/dynamodb/",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This sample project demonstrates how to Invoke a Step functions workflow, using Appsync and a Lambda resolver.",
        "This pattern deploys an Appsync Api, a lambda resolver, a DynamoDB and a Step Function workflow.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/appsync-lambda-sfn-sam",
        templateFile: "appsync-lambda-sfn-sam/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/appsync-lambda-sfn-sam",
        projectFolder: "appsync-lambda-sfn-sam",
      },
    },
    framework: "SAM",
    description:
      "Invoke a step functions workflow through a lambda resolver from Appsync",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "atehrosius",
        name: "Rosius Ndimofor",
        linkedin: "rosius",
        image: "https://rosius.s3.us-east-2.amazonaws.com/ro.jpeg",
        bio: "AWS Serverless Hero with a high affinity for building fullstack serverless apps.",
      },
    ],
    id: "f37066a2-bb5b-11ed-a641-3e86250ca8d9",
  },
  {
    title: "AppSync to MongoDB",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Blog post: The fullstack guide to using AWS AppSync and MongoDB Atlas",
          link: "https://aws.amazon.com/blogs/mobile/the-fullstack-guide-to-using-aws-appsync-and-mongodb-atlas/",
        },
        {
          text: "Amazon AppSync - Managed GraphQL service",
          link: "https://aws.amazon.com/appsync/",
        },
        {
          text: "Fullstack repo",
          link: "https://github.com/focusOtter/fullstack-appsync-mongodb",
        },
      ],
    },
    level: "300",
    language: "TypeScript",
    introBox: {
      text: [
        "This project demonstrates how to connect directly to a MongoDB Atlas cluster using AWS Appsync.",
        "Connecting directly to MongoDB requires the use of their Data API and AppSync's HTTP resolver.",
        "In doing so, there is no need for a proxying Lambda function.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/appsync-mongodb",
        templateFile: "appsync-mongodb/cdk/lib/main.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/appsync-mongodb",
        projectFolder: "appsync-mongodb",
      },
    },
    framework: "CDK",
    description:
      "Perform a write and list operation from AWS AppSync to Amazon DynamoDB that is protected with an idenity pool and userpool from Amazon Cognito.",
    deploy: {
      text: ["<code>npx aws-cdk deploy</code>"],
    },
    cleanup: {
      text: ["Delete the stack: <code>npx aws-cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "focusotter",
        name: "Michael Liendo 🦦",
        linkedin: "focusotter",
        image:
          "https://pbs.twimg.com/profile_images/1610321865213444096/OttGok0S_400x400.jpg",
        bio: "Michael Liendo is a fullstack developer, avid taco eater, and Senior Developer Advocate for AWS AppSync.",
      },
    ],
    id: "f3707e9e-bb5b-11ed-b605-3e86250ca8d9",
  },
  {
    videoId: "",
    title: "appsync-notify-subscribers-of-database-updates",
    services: {
      to: "appsync",
      from: "eventbridge",
    },
    resources: {
      headline: "Additional resources",
      bullets: [
        {
          text: "How do I notify AWS AppSync subscribers of external database updates that aren't performed by client-side mutations?(article)",
          link: "https://aws.amazon.com/premiumsupport/knowledge-center/appsync-notify-subscribers-real-time/",
        },
        {
          text: "How do I notify AWS AppSync subscribers of external database updates that aren't performed by client-side mutations?(video)",
          link: "https://www.youtube.com/watch?v=KrmFAcucjzQ",
        },
        {
          text: "Simplify out of band AWS AppSync real-time subscriptions with Amazon EventBridge",
          link: "https://aws.amazon.com/blogs/mobile/appsync-eventbridge/",
        },
        {
          text: "Using multiple authorization types with AWS AppSync GraphQL APIs",
          link: "https://aws.amazon.com/blogs/mobile/using-multiple-authorization-types-with-aws-appsync-graphql-apis/",
        },
        {
          text: "Amazon Cognito to Amazon API Gateway HTTP APIs (JWT)",
          link: "https://github.com/aws-samples/serverless-patterns/tree/main/cognito-httpapi",
        },
        {
          text: "Create an AWS AppSync API using SAM - SnappyFeatures #3",
          link: "https://www.youtube.com/watch?v=J0qfMYRmQcc",
        },
        {
          text: "AWS Well-Architected Framework/Performance Efficiency Pillar/Serverless Event Submission with Status Updates/Asynchronous updates via WebSockets with AWS AppSync and GraphQL",
          link: "https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/serverless-event-submission-with-status-updates.html",
        },
        {
          text: "Filtering GraphQL Subscriptions with Arguments with AWS Amplify & AWS AppSync",
          link: "https://www.youtube.com/watch?v=CeeoFqE2OU0&t=335s",
        },
      ],
    },
    level: "100",
    language: "Node.js",
    introBox: {
      text: [
        "The SAM template deploys a EventBridge, AppSync. We have described how to use Amazon EventBridge to simplify publishing out-of-band database updates to AppSync subscribers. By using EventBridge rules and input transformers, we created a GraphQL mutation payload that was sent to AppSync using an API destination without the need to write a Lambda function or specific code that would need to be maintained.",
        "With AppSync and EventBridge, you can seamlessly push data changes and events from your cloud backend all the way to thousands of connected front-end web and mobile clients with built-in WebSockets connection management leveraging flexible serverless technologies that scale automatically according to demand.(c)",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "",
        repoURL: "",
        readmeURL: "",
      },
      payloads: [
        {
          payloadURL: "",
          headline: "",
        },
      ],
    },
    framework: "SAM",
    description:
      "Asynchronous updates via WebSockets with AWS AppSync and GraphQL",
    deploy: {
      text: [
        "sam deploy -g --capabilities CAPABILITY_AUTO_EXPAND CAPABILITY_IAM",
      ],
    },
    author: {
      twitter: "s_andriy_",
      name: "Andrii Sorochan",
      imageURL:
        "https://avatars.githubusercontent.com/u/14042193?s=400&u=2235702adbb77bb75e67ecbc850a17863eca3687&v=4",
      headline: "Presented by Andrii Sorochan, Developer",
      bio: "Andrii is Developer from Ukraine",
    },
    architectureURL: "",
    id: "f3708bfa-bb5b-11ed-be1f-3e86250ca8d9",
  },
  {
    title: "AppSync to SNS",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Simplify access to multiple microservices with AWS AppSync and AWS Amplify",
          link: "https://aws.amazon.com/blogs/mobile/appsync-microservices/",
        },
        {
          text: "Tutorial: HTTP Resolvers",
          link: "https://docs.aws.amazon.com/appsync/latest/devguide/tutorial-http-resolvers.html",
        },
      ],
    },
    level: "100",
    language: "TypeScript",
    introBox: {
      text: [
        "This CDK application deploys an AppSync API which uses an SNS HTTP datasource. AWS AppSync provides a 'publish' query that sends a message to the configured SNS topic. The query returns the response MessageId, and the SequenceNumber if using a  FIFO (first-in-first-out) topic.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "https://raw.githubusercontent.com/aws-samples/serverless-patterns/main/cdk-appsync-sns/cdk/lib/main.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cdk-appsync-sns",
        readmeURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cdk-appsync-sns/README.md",
      },
    },
    framework: "CDK",
    description: "Create an AppSync API with an SNS HTTP data source",
    deploy: {
      text: ["npx aws-cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>npx aws-cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "focusotter",
        name: "Michael Liendo",
        linkedin: "focusotter",
        image:
          "https://pbs.twimg.com/profile_images/1610321865213444096/OttGok0S_400x400.jpg",
        bio: "Senior Developer Advocate | AWS AppSync 🦦",
      },
    ],
    id: "f37098ac-bb5b-11ed-9cf9-3e86250ca8d9",
  },
  {
    title: "API authentication using Cognito User Pool client credentials flow",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Generate access token",
          link: "https://docs.aws.amazon.com/cognito/latest/developerguide/token-endpoint.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "The sample project demonstrates how to use a Cognito User Pool as an Authorizer for an API hosted on API Gateway. The API is invoked using using an access token that is generated using the user pool app client credentials. If the token is valid, the returns a 200 response. For any invalid tokens, the API response with 401 error.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/cdk-cognito-apigateway-lambda",
        templateFile:
          "cdk-cognito-apigateway-lambda/lib/cdk-cognito-apigateway-lambda.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cdk-cognito-apigateway-lambda",
        projectFolder: "cdk-cognito-apigateway-lambda",
      },
    },
    framework: "CDK",
    description:
      "This pattern guides you to authenticate service calls using Cognito User Pool. Often, we come across scenarios where microservices need to communicate with each other in a secure manner using an established standard like OAuth2. The Cognito client_credentials grant type helps you create application client with a set of client credentials that can be used to generate access token. This token can be used to access APIs hosted on API Gateway secured by an authorizer that uses the Cognito User Pool.",
    deploy: {
      text: ["See the Github repo for detailed deployment instructions."],
    },
    cleanup: {
      text: ["cdk destroy"],
    },
    authors: [
      {
        name: "Suhasini Krishnan Udayar",
        linkedin: "https://www.linkedin.com/in/suhasini-udayar-54532a104/",
        image: "https://github.com/suhasini-udayar.png",
        bio: "Cloud Application Architect",
      },
    ],
    id: "f370a392-bb5b-11ed-af6f-3e86250ca8d9",
  },
  {
    title: "EventBridge to Step Functions and failure events to SQS",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "CDK Custom Resource",
          link: "https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.custom_resources.AwsCustomResource.html",
        },
        {
          text: "Call Amazon SQS with Step Functions",
          link: "https://docs.aws.amazon.com/step-functions/latest/dg/connect-sqs.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This sample project demonstrates how to use an AWS Step Functions state machine to send failure event to SQS.",
        "This pattern is leveraging the native integration between the Amazon EventBridge to AWS Step Function to AWS SQS services. There are two types of event sample payloads available in the code repository. For the success event, the Amazon EventBridge rule invokes the AWS Step Functions and executes the lambda function, and completes the state machine successfully. For the failure event , the Amazon EventBridge rule invokes the AWS Step Functions and executes the lambda function, which throws a custom exception and gets retried 2 times using the AWS Step Functions error handler.  After the retry is exhausted, the Catch handler moves the state machine failure to AWS SQS. Step function writes failure message to the AWS SQS using native 'SendMessage' task which can be handled for operational needs.",
        "This pattern deploys one AWS Step Functions, two AWS SQS queues, one custom EventBus, and one lambda function.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/cdk-eventbridge-stepfunction-sqs",
        templateFile: "lib/eventbridge-stepfunction-sqs-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cdk-eventbridge-stepfunction-sqs",
        projectFolder: "cdk-eventbridge-stepfunction-sqs",
      },
    },
    framework: "CDK",
    description:
      "Create a Step Functions workflow to Send Failure event to SQS for operational needs.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        name: "Shankar Srinivasan",
        linkedin: "https://www.linkedin.com/in/shankar-srinivasan-3863a110",
        bio: "I am a Cloud Application Architect at AWS. I specialize in architecting and developing serverless, event-driven solutions on AWS.",
      },
    ],
    id: "f370ae0a-bb5b-11ed-91da-3e86250ca8d9",
  },
  {
    title: "Step Functions to S3 in CDK",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Synchronous Express Workflows for AWS Step Functions",
          link: "https://aws.amazon.com/blogs/compute/new-synchronous-express-workflows-for-aws-step-functions/",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This pattern creates a Step Functions workflow that publishes a file to an S3 bucket.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/cdk-sfn-s3",
        templateFile: "lib/cdk-sfn-s3-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cdk-sfn-s3",
        projectFolder: "cdk-sfn-s3",
      },
    },
    framework: "CDK",
    description:
      "Create a Step Functions workflow that puts the object to an S3 bucket.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        name: "Harshitha Shashidhar",
        image: "../assets/images/resources/harshihs.jpg",
        bio: "Harshitha Shashidhar is an Cloud Application architect who loves to build the serverless applications at scale.",
      },
    ],
    id: "f370b832-bb5b-11ed-a18a-3e86250ca8d9",
  },
  {
    title: "Serverless Data Enrichment Pipeline with Persistence",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "SNS >> SQS >> Lambda >> DynamoDB >> SQS",
        },
      ],
    },
    level: "300",
    language: ".NET",
    introBox: {
      text: [
        "Data Pipeline Stack #1, relay the raw message from SNS to DynamoDB.",
        "Data Pipeline Stack #2, relay the enrich message from SNS and route it to DynamoDB & SQS.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/cdk-sns-sqs-lambda-dynamodb-dotnet",
        templateFile: "/cdk-sns-sqs-lambda-dynamodb-dotnet/src/Datapipeline/",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cdk-sns-sqs-lambda-dynamodb-dotnet",
        projectFolder: "cdk-sns-sqs-lambda-dynamodb-dotnet",
      },
    },
    framework: "CDK",
    description:
      "This pattern helps you deploy a CDK stack with SNS, SQS, Lambda and DynamoDB. The pattern uses these AWS services to create a serverless data enrichment pipeline with persistence of data in SQS. The Lambda functions are used to consume data from SQS queues, perform enrichment, update DynamoDB table. The enriched data is further sent to another SQS queue.",
    deploy: {
      text: ["See the Github repo for detailed deployment instructions."],
    },
    cleanup: {
      text: ["See the Github repo for detailed deployment instructions."],
    },
    authors: [
      {
        twitter: "@srcsakthivel",
        name: "Sakthivel Chellapparimanam",
        linkedin: "https://www.linkedin.com/in/srcsakthivel",
        image: "",
        bio: "AWS - Cloud Application Architect",
      },
    ],
    id: "f370c278-bb5b-11ed-a383-3e86250ca8d9",
  },
  {
    title: "Implementing the claim check pattern using EventBridge Pipes.",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "More Enterprise Integration Patterns on AWS Samples",
          link: "https://github.com/aws-samples/amazon-eventbridge-pipes-architectural-patterns",
        },
      ],
    },
    level: "300",
    language: "TypeScript",
    introBox: {
      text: [
        "You split a message into a reference (“claim check”) and the associated payload. Then, you store the payload in external storage and add only the claim check to events. When you process events, you retrieve relevant parts of the payload using the claim check. For example, you can retrieve a user's name and birthday based on their userID.",
        "The claim check pattern has two parts. First, when an event is received, you split it and store the payload elsewhere. Second, when the event is processed, you retrieve the relevant information. You can implement both aspects with a pipe.",
        "In the first pipe, you use the enrichment to split the event, in the second to retrieve the payload. In this example Lambda is used to store the data in DynamoDB.",
        "Using a pipe to split and retrieve messages has three advantages. First, you keep events concise as they move through the system. Second, you ensure that the event contains all relevant information when it is processed. Third, you encapsulate the complexity of splitting and retrieving within the pipe.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/claim-check-pattern-cdk",
        templateFile: "src/lib/claim-check-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/claim-check-pattern-cdk",
        projectFolder: "claim-check-pattern-cdk",
      },
    },
    framework: "CDK",
    description:
      "To reduce the size of the events in your event-driven application, you can temporarily remove attributes. This approach is known as the claim check pattern.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        name: "Dominik Richter",
        linkedin: "do-richter",
        image: "https://avatars.githubusercontent.com/u/29404931",
        bio: "Solutions Architect at AWS, passionate about event-driven architectures and Serverless.",
      },
    ],
    id: "f370d27c-bb5b-11ed-9348-3e86250ca8d9",
  },
  {
    title:
      "Amazon Cloudfront distribution on front of an Amazon API Gateway HTTP API to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon API Gateway",
          link: "https://aws.amazon.com/api-gateway/",
        },
      ],
    },
    level: "300",
    language: "Rust",
    introBox: {
      text: [
        "This pattern deploys an Amazon Cloudfront distribution, an Amazon API Gateway HTTP API with a default route and basic CORS configuration. The default route is integrated with an AWS Lambda function written in Rust. The function logs the incoming API event (v2) and context object to an Amazon CloudWatch Logs log group and returns basic information about the event to the caller.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/cloudfront-apigw-http-api-lambda-rust",
        templateFile: "cloudfront-apigw-http-api-lambda-rust/template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cloudfront-apigw-http-api-lambda-rust",
        projectFolder: "cloudfront-apigw-http-api-lambda-rust",
      },
    },
    framework: "SAM",
    description:
      "This pattern creates an Amazon Cloudfront distribution on front of an Amazon API Gateway HTTP API and an AWS Lambda function.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f370db78-bb5b-11ed-9c6b-3e86250ca8d9",
  },
  {
    title: "CloudFront to S3 - Static Website",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "CloudFront",
          link: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html",
        },
        {
          text: "Simple Storage Service - S3",
          link: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
        },
      ],
    },
    level: "200",
    language: ".NET",
    introBox: {
      text: [
        "This sample project demonstrates how can you deploy a MKDOCS site to S3 with Cloud Front.",
        "The CloudFront execute a function when recieves a request from viewer and append index.html to each request for proper routing",
        "In S3 we host the html files generated from the MKDOCS",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/cloudfront-cff-s3-staticsite-dotnet",
        templateFile: "cloudfront-cff-s3-staticsite-dotnet/MdsiteStack.cs",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cloudfront-cff-s3-staticsite-dotnet",
        projectFolder: "cloudfront-cff-s3-staticsite-dotnet",
      },
    },
    framework: "CDK",
    description:
      "Creates CloudFront Distributions to server the static site from S3.",
    deploy: {
      text: ["See the Github repo for detailed deployment instructions."],
    },
    cleanup: {
      text: ["See the Github repo for detailed cleanup instructions."],
    },
    authors: [
      {
        twitter: "@srcsakthivel",
        name: "Sakthivel Chellapparimanam",
        linkedin: "https://www.linkedin.com/in/srcsakthivel",
        image: "",
        bio: "AWS - Cloud Application Architect",
      },
    ],
    id: "f370e618-bb5b-11ed-8971-3e86250ca8d9",
  },
  {
    title:
      "Amazon Cloudfront distribution on front of an Amazon API Gateway HTTP API to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon API Gateway",
          link: "https://aws.amazon.com/api-gateway/",
        },
      ],
    },
    level: "300",
    language: "Rust",
    introBox: {
      text: [
        "This pattern deploys an Amazon Cloudfront distribution on front of two Amazon API Gateway HTTP API with a default route and basic CORS configuration in different regions. The default route is integrated with an AWS Lambda function written in Rust. The function logs the incoming API event (v2) and context object to an Amazon CloudWatch Logs log group and returns basic information about the event to the caller.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/cloudfront-failover-apigw-http-api-lambda-rust",
        templateFile:
          "cloudfront-failover-apigw-http-api-lambda-rust/template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cloudfront-failover-apigw-http-api-lambda-rust",
        projectFolder: "cloudfront-failover-apigw-http-api-lambda-rust",
      },
    },
    framework: "SAM",
    description:
      "This pattern creates an Amazon Cloudfront failover distribution on front of an Amazon API Gateway HTTP API and an AWS Lambda function in two different regions.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f370f09a-bb5b-11ed-8718-3e86250ca8d9",
  },
  {
    title: "Amazon CloudFront to AWS Lambda URLs",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Using Amazon CloudFront with AWS Lambda as origin to accelerate your web applications",
          link: "https://aws.amazon.com/blogs/networking-and-content-delivery/using-amazon-cloudfront-with-aws-lambda-as-origin-to-accelerate-your-web-applications/",
        },
        {
          text: "Lambda function URLs",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html",
        },
      ],
    },
    level: "200",
    language: "Java",
    introBox: {
      text: [
        "An Amazon CloudFront distribution is created that forwards requests to the domain name of the deployed AWS Lambda function URL.",
        "Amazon CloudFront also allows for custom domain names, AWS Web Application Firewall (WAF) and AWS Shield Advanced to protect your endpoint from attacks.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/cloudfront-lambda-url-java",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cloudfront-lambda-url-java",
      },
    },
    framework: "SAM",
    description: "Front AWS Lamda Function URLs with Amazon CloudFront",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: [
        "Delete the stack: <code>sam delete --stack-name STACK_NAME</code>.",
      ],
    },
    authors: [
      {
        name: "Steven Cook",
        bio: "Senior Solutions Architect at AWS.",
      },
    ],
    id: "f3710396-bb5b-11ed-8793-3e86250ca8d9",
  },
  {
    title: "Amazon CloudFront to AWS Lambda URLs",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS Lambda function URLs",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html",
        },
      ],
    },
    level: "300",
    language: "Rust",
    introBox: {
      text: [
        "This pattern deploys an Amazon Cloudfront distribution, an AWS Lambda function URL. The function logs the incoming event and context object to an Amazon CloudWatch Logs log group and returns basic information about the event to the caller.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/cloudfront-lambda-url-rust",
        templateFile: "cloudfront-lambda-url-rust/template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cloudfront-lambda-url-rust",
        projectFolder: "cloudfront-lambda-url-rust",
      },
    },
    framework: "SAM",
    description:
      "This pattern creates an Amazon CloudFront distribution on front of an AWS Lambda function URL.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f3710c74-bb5b-11ed-8a6c-3e86250ca8d9",
  },
  {
    title: "AWS CloudFront to Amazon S3",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    level: "200",
    language: ".NET",
    introBox: {
      text: [
        "This pattern demonstrates how to use CloudFront to securely serve private content.",
        "In this pattern, the CDK stack creates an S3 bucket and a CloudFront distribution that is configured to accept requests with only valid signed URLs or signed Cookies.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/cloudfront-s3-cdk-dotnet",
        templateFile: "src/cdk/src/Cdk/CdkStack.cs",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cloudfront-s3-cdk-dotnet",
        readmeURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cloudfront-s3-cdk-dotnet/README.md",
        projectFolder: "cloudfront-s3-cdk-dotnet",
      },
    },
    framework: "CDK",
    description:
      "Serving private content from CloudFront with signed URLs and signed cookies",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "ankushjain358",
        name: "Ankush Jain",
        linkedin: "ankush-jain-developer",
        image: "https://avatars.githubusercontent.com/u/13661966?v=4",
        bio: "Application Development Consultant at AWS Professional Services.",
      },
    ],
    id: "f3711624-bb5b-11ed-96f0-3e86250ca8d9",
  },
  {
    title: "Amazon CloudFront to AWS WAF to Amazon S3 using .Net CDK",
    testing: {
      text: [
        "Get the CloudFrontURL from CloudFormation output",
        'Access the Url to confirm you can see the message - "Hello S3 static WebSite"',
        "Use 'WAF & Shield' -> 'Ip Set' service on AWS console to remove your local machine IP address and access the CloudFrontURL again to confirm 403 http status code",
      ],
    },
    resources: {
      bullets: [
        {
          text: "Call Athena with Step Functions",
          link: "https://docs.aws.amazon.com/step-functions/latest/dg/connect-athena.html",
        },
        {
          text: "Amazon Athena - Serverless Interactive Query Service",
          link: "https://aws.amazon.com/athena/",
        },
      ],
    },
    level: "200",
    language: ".NET",
    introBox: {
      text: [
        "When user access the CloudFront distribution URL, user source IP address will get inspected by WAF Web ACL.",
        "If source IP address is in the IP set used by Web ACL then user will see the Html page which is served from S3 bucket.",
        "If source IP address is not in the IP set then user will get 403 http status code.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/cloudfront-waf-s3-cdk",
        templateFile: "cloudfront-waf-s3-cdk/src/CdkStack.cs",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cloudfront-waf-s3-cdk",
        projectFolder: "cloudfront-waf-s3-cdk",
      },
    },
    framework: "CDK",
    description:
      "Creates CloudFront, WAF Web ACL, and S3 bucket for UI code. Then WAF Web ACL gets applied to CloudFront distribution to restrict Website access based on source IP address.",
    deploy: {
      text: ["cdk deploy CloudFrontS3WafStack"],
    },
    cleanup: {
      text: [
        "Delete the stack: cdk destroy CloudFrontS3WafStack",
        "Confirm the stack has been deleted: aws cloudformation list-stacks --query \"StackSummaries[?contains(StackName,'CloudFrontS3WafStack')].StackStatus\"",
      ],
    },
    authors: [
      {
        twitter: "",
        name: "Vikramsinha Patil",
        linkedin: "https://www.linkedin.com/in/vikramsinha-patil-834a4b2b",
        image: "",
        bio: "Cloud Application Architect at AWS",
      },
    ],
    id: "f37120ba-bb5b-11ed-8789-3e86250ca8d9",
  },
  {
    title: "Cloudwatch Logs Subscription to Kinesis Firehose",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Cloudwatch Log subscription",
          link: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Subscriptions.html",
        },
        {
          text: "Cloudwatch subscription filters for Kinesis Firehose",
          link: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html#FirehoseExample",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This sample project demonstrates how to create a log subscription in Cloudwath Logs with Kinesis Firehose as a log receiver.",
        "From Firehose, logs will be delivered to S3 bucket",
        "Using filter rules, we can control the logs that sends from Cloudwatch Logs to Kinesis Firehose.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/cloudwatch-logs-subscription-firehose-cdk",
        templateFile:
          "cloudwatch-logs-subscription-firehose-cdk/cloudwatch-logs-subscription-firehose-cdk-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cloudwatch-logs-subscription-firehose-cdk",
        projectFolder: "cloudwatch-logs-subscription-firehose-cdk",
      },
    },
    framework: "CDK",
    description:
      "Create a Cloudwatch Logs subscription to Kinesis Firehose to S3 bucket",
    deploy: {
      text: ["cdk deploy --all"],
    },
    cleanup: {
      text: ["See the Github repo for detailed cleanup instructions."],
    },
    authors: [
      {
        twitter: "@pubudusj",
        name: "Pubudu Jayawardana",
        linkedin: "pubudusj",
        image: "https://avatars.githubusercontent.com/u/1263087",
        bio: "AWS Community Builder in Serverless category. Serverless advocate and enthusiast.",
      },
    ],
    id: "f3712b78-bb5b-11ed-b001-3e86250ca8d9",
  },
  {
    title: "Cloudwatch Logs Subscription to Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Cloudwatch Log subscription",
          link: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Subscriptions.html",
        },
        {
          text: "Cloudwatch subscription filters for Lambda",
          link: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html#LambdaFunctionExample",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This sample project demonstrates how to create a log subscription in Cloudwath Logs, Lambda as a log receiver.",
        "Using filter rules, we can control the logs that sends to Lambda function.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/cloudwatch-logs-subscription-lambda-cdk",
        templateFile:
          "cloudwatch-logs-subscription-lambda-cdk/cloudwatch-logs-subscription-lambda-cdk-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cloudwatch-logs-subscription-lambda-cdk",
        projectFolder: "cloudwatch-logs-subscription-lambda-cdk",
      },
    },
    framework: "CDK",
    description: "Create a Cloudwatch Logs subscription to Lambda function",
    deploy: {
      text: ["cdk deploy --all"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy --all</code>."],
    },
    authors: [
      {
        twitter: "@pubudusj",
        name: "Pubudu Jayawardana",
        linkedin: "pubudusj",
        image: "https://avatars.githubusercontent.com/u/1263087",
        bio: "AWS Community Builder in Serverless category. Serverless advocate and enthusiast.",
      },
    ],
    id: "f3713d2a-bb5b-11ed-b932-3e86250ca8d9",
  },
  {
    title: "Cognito to API Gateway private REST API",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Controlling access to a REST API with a Cognito User Pools Authorizer",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html",
        },
        {
          text: "Understanding VPC links in Amazon API Gateway private integrations",
          link: "https://aws.amazon.com/blogs/compute/understanding-vpc-links-in-amazon-api-gateway-private-integrations/",
        },
        {
          text: "Architecture patterns for consuming private APIs cross-account",
          link: "https://aws.amazon.com/blogs/compute/architecture-patterns-for-consuming-private-apis-cross-account/",
        },
        {
          text: "Building private cross-account APIs using Amazon API Gateway and AWS PrivateLink",
          link: "https://aws.amazon.com/blogs/compute/building-private-cross-account-apis-using-amazon-api-gateway-and-aws-privatelink/",
        },
      ],
    },
    level: "200",
    language: "Node.js",
    introBox: {
      text: [
        "This sample project demonstrates how to use Amazon Cognito with a private AWS REST API Gateway to authenticate and authorize requests to a private HTTP endpoint hosted on a Network Load Balancer and ECS/Fargate.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/cognito-restapi-vpclink-cdk",
        templateFile:
          "cognito-restapi-vpclink-cdk/cdk/lib/cdk-cognito-fargate-stack.js",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cognito-restapi-vpclink-cdk",
        projectFolder: "cognito-restapi-vpclink-cdk",
      },
    },
    framework: "CDK",
    description:
      "This pattern shows how to authenticate and authorize requests to a private REST API Gateway with Amazon Cognito.",
    deploy: {
      text: ["cdk deploy --all"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "@jplock",
        name: "Justin Plock",
        linkedin: "justinplock",
        image: "",
        bio: "Principal Solutions Architect at AWS",
      },
    ],
    id: "f3714590-bb5b-11ed-8b05-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway with a Cognito User Pools Authorizer",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Controlling access to a REST API with a Cognito User Pools Authorizer",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html",
        },
      ],
    },
    level: "200",
    language: "Node.js",
    introBox: {
      text: [
        "This pattern deploys an Amazon API Gateway REST API endpoint that uses a Cognito User Pools Authorizer for access control.",
        "It assumes that the Cognito User Pool already exists and takes the Cognito User Pool ARN as an input parameter which must be provided by the user.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/cognito-restapi",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cognito-restapi",
        projectFolder: "cognito-restapi",
      },
    },
    framework: "SAM",
    description:
      "Create a REST API Gateway with a Cognito User Pools Authorizer for access control",
    deploy: {
      text: ["Deploy the stack: <code>sam deploy</code>."],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Albert Blaya",
        linkedin: "albertblaya",
        image:
          "https://media-exp1.licdn.com/dms/image/C5603AQEw2HXx9zs7yg/profile-displayphoto-shrink_200_200/0/1600474292127?e=1655942400&v=beta&t=SbeIn9psV0BIFkbROTDRIfPMKMtyrrgBdgt0tRHY0BY",
        headline: "Presented by Albert Blaya, Solutions Architect",
        bio: "Albert is a Solutions Architect at Amazon Web Services based in Australia.",
      },
    ],
    id: "f3714fea-bb5b-11ed-bca2-3e86250ca8d9",
  },
  {
    title: "Amazon Cognito User Pool",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon Cognito User Pool with its associated User, App Client, Domain and Resource Server",
          link: "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "This pattern deploys an Amazon Cognito User Pool with its associated User, App Client, Domain and Resource Server.",
        "You can use the tokens provided upon successful authentication with your User Pool to, for example, access a REST API protected with a Cognito User Pool authorizer.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/cognito-user-pool",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cognito-user-pool",
        projectFolder: "cognito-user-pool",
      },
    },
    framework: "SAM",
    description:
      "Create a Cognito User Pool with its associated User, App Client, Domain and Resource Server",
    deploy: {
      text: ["Deploy the stack: <code>sam deploy</code>."],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Albert Blaya",
        linkedin: "albertblaya",
        image:
          "https://media-exp1.licdn.com/dms/image/C5603AQEw2HXx9zs7yg/profile-displayphoto-shrink_200_200/0/1600474292127?e=1655942400&v=beta&t=SbeIn9psV0BIFkbROTDRIfPMKMtyrrgBdgt0tRHY0BY",
        headline: "Presented by Albert Blaya, Solutions Architect",
        bio: "Albert is a Solutions Architect at Amazon Web Services based in Australia.",
      },
    ],
    id: "f371595e-bb5b-11ed-ab80-3e86250ca8d9",
  },
  {
    title:
      "Kinesis to Kinesis using EventBridge Pipes with content filter pattern",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "More Enterprise Integration Patterns on AWS Samples",
          link: "https://github.com/aws-samples/amazon-eventbridge-pipes-architectural-patterns",
        },
      ],
    },
    level: "300",
    language: "TypeScript",
    introBox: {
      text: [
        "The pipe uses a filter to discard unwanted messages and an input transformer to select which attributes to keep for the remaining messages.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/content-filter-pattern-kinesis-cdk",
        templateFile: "src/lib/content-filter-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/content-filter-pattern-kinesis-cdk",
        projectFolder: "content-filter-pattern-kinesis-cdk",
      },
    },
    framework: "CDK",
    description:
      "This pattern demonstrates the content filter pattern between two Kinesis streams, implemented using an EventBridge Pipe.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        name: "Dominik Richter",
        linkedin: "do-richter",
        image: "https://avatars.githubusercontent.com/u/29404931",
        bio: "Solutions Architect at AWS, passionate about event-driven architectures and Serverless.",
      },
    ],
    id: "f371680e-bb5b-11ed-89ee-3e86250ca8d9",
  },
  {
    title: "CloudWatch Logs Subscription to Lambda with SNS to SQS",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Using CloudWatch Logs subscription filters",
          link: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This pattern demonstrate how to use CloudWatch Logs to create Lambda subscription filter and publish the filtered logs to an SNS topic and deliver to an SQS queue. The logs sent to Lambda through a subsciption filter are base64 encoded and compressed with gzip format.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/cwlogs-lambda-sns-sqs-cdk",
        templateFile:
          "src/cwlogs_lambda_sns_sqs/cwlogs_lambda_sns_sqs_stack.py",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/cwlogs-lambda-sns-sqs-cdk",
        projectFolder: "cwlogs-lambda-sns-sqs-cdk",
      },
    },
    framework: "CDK",
    description:
      "Create a CloudWatch Logs subscription to a Lambda function, publish to SNS topic and deliver logs to SQS queue.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["cdk destroy"],
    },
    authors: [
      {
        name: "Kimia Yahyazadeh",
        linkedin: "https://www.linkedin.com/in/kimiayahyazadeh/",
        image: "",
        bio: "AWS Cloud Application Developer",
      },
      {
        twitter: "@srcsakthivel",
        name: "Sakthivel Chellapparimanam",
        linkedin: "https://www.linkedin.com/in/srcsakthivel",
        image: "",
        bio: "AWS - Cloud Application Architect",
      },
    ],
    id: "f3717056-bb5b-11ed-8e5d-3e86250ca8d9",
  },
  {
    title: "Delayed EventBridge events with EventBridge Scheduler",
    resources: {
      bullets: [
        {
          text: "What is Amazon EventBridge Scheduler?",
          link: "https://docs.aws.amazon.com/scheduler/latest/UserGuide/what-is-scheduler.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This pattern listens for EventBridge events, processes them and creates schedules for every user. 24 hours after user has been created a schedule is run that publishes events directly into EventBridge",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/delayed-eventbridge-events",
        templateFile: "cdk/lib/delayed-eventbridge-events-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/delayed-eventbridge-events",
        projectFolder: "delayed-eventbridge-events",
      },
    },
    framework: "CDK",
    description: "Setup future EventBridge events with EventBridge Scheduler",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        name: "David Boyne",
        image: "../assets/images/resources/dboyne.png",
        bio: "Senior Developer Advocate at AWS focusing on EDA and Serverless.",
      },
    ],
    id: "f37176dc-bb5b-11ed-bb65-3e86250ca8d9",
  },
  {
    title: "DynamoDB to Lambda to EventBridge",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS Docs: DynamoDB Streams and AWS Lambda Triggers",
          link: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html",
        },
      ],
    },
    level: "200",
    language: "Java",
    introBox: {
      text: [
        "The SAM template deploys a Lambda function that captures data in DynamoDB streams and sends to EventBridge.",
        "When new items are added, updated or deleted on the DynamoDB table, the item-level changes in the table are streamed to the EventBridge custom bus.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/dynamodb-eventbridge-java",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/dynamodb-eventbridge-java",
      },
    },
    framework: "SAM",
    description: "Send DynamoDB table changes to EventBridge via Lambda.",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: [
        "Delete the stack: <code>sam delete --stack-name STACK_NAME</code>.",
        "Confirm the stack has been deleted: <code>aws cloudformation list-stacks --query \"StackSummaries[?contains(StackName,'STACK_NAME')].StackStatus\"</code>",
      ],
    },
    authors: [
      {
        twitter: "@tadeumendonca",
        name: "Tadeu Mendonça",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-luiz-tadeu-mendonca.jpg",
        bio: "Cloud Application Architect, AWS.",
      },
      {
        name: "Steven Cook",
        bio: "Senior Solutions Architect at AWS.",
      },
    ],
    id: "f3718c76-bb5b-11ed-b24c-3e86250ca8d9",
  },
  {
    videoId: "",
    title: "Lambda to EventBridge",
    services: {
      to: "eventbridge",
      from: "lambda",
    },
    resources: {
      headline: "Additional resources",
      bullets: [
        {
          text: "Integrating Amazon EventBridge into your serverless applications",
          link: "https://aws.amazon.com/blogs/compute/integrating-amazon-eventbridge-into-your-serverless-applications/",
        },
        {
          text: "Use Amazon EventBridge to Build Decoupled, Event-Driven Architectures",
          link: "https://serverlessland.com/learn/eventbridge",
        },
      ],
    },
    level: "100",
    language: "Node.js",
    introBox: {
      text: [
        "The SAM template deploys a Lambda function with permission to publish events to EventBridge. The Lambda function publishes an event to the default bus in EventBridge when invoked.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "https://raw.githubusercontent.com/aws-samples/serverless-patterns/main/lambda-eventbridge/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-eventbridge",
        readmeURL: "",
      },
      payloads: [
        {
          payloadURL: "",
          headline: "",
        },
      ],
    },
    framework: "SAM",
    description: "Create a Lambda function that sends events to EventBridge.",
    deploy: {
      text: ["sam deploy --guided"],
    },
    author: {
      twitter: "jbesw",
      name: "James Beswick",
      imageURL:
        "https://pbs.twimg.com/profile_images/1165718285754753025/OrGcUHER_400x400.jpg",
      headline: "Presented by James Beswick, Developer Advocate",
      bio: "James is a senior developer advocate for Serverless Applications at Amazon Web Services based in the US. Prior to joining AWS Ben worked in a number of different technical roles specializing in workflow Automation and web development.",
    },
    architectureURL:
      "https://serverlessland.s3.amazonaws.com/assets/patterns/patterns-lambda-to-eventbridge.png",
    id: "f37198b0-bb5b-11ed-badc-3e86250ca8d9",
  },
  {
    videoId: "",
    title: "Lambda to EventBridge",
    services: {
      to: "eventbridge",
      from: "lambda",
    },
    resources: {
      headline: "Additional resources",
      bullets: [
        {
          text: "Integrating Amazon EventBridge into your serverless applications",
          link: "https://aws.amazon.com/blogs/compute/integrating-amazon-eventbridge-into-your-serverless-applications/",
        },
        {
          text: "Use Amazon EventBridge to Build Decoupled, Event-Driven Architectures",
          link: "https://serverlessland.com/learn/eventbridge",
        },
      ],
    },
    level: "100",
    language: "Node.js",
    introBox: {
      text: [
        "The SAM template deploys a Lambda function with permission to publish events to EventBridge. The Lambda function publishes an event to the default bus in EventBridge when invoked.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "https://raw.githubusercontent.com/aws-samples/serverless-patterns/main/lambda-eventbridge/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-eventbridge",
        readmeURL: "",
      },
      payloads: [
        {
          payloadURL: "",
          headline: "",
        },
      ],
    },
    framework: "SAM",
    description: "Create a Lambda function that sends events to EventBridge.",
    deploy: {
      text: ["sam deploy --guided"],
    },
    author: {
      twitter: "jbesw",
      name: "James Beswick",
      imageURL:
        "https://pbs.twimg.com/profile_images/1165718285754753025/OrGcUHER_400x400.jpg",
      headline: "Presented by James Beswick, Developer Advocate",
      bio: "James is a senior developer advocate for Serverless Applications at Amazon Web Services based in the US. Prior to joining AWS Ben worked in a number of different technical roles specializing in workflow Automation and web development.",
    },
    architectureURL:
      "https://serverlessland.s3.amazonaws.com/assets/patterns/patterns-lambda-to-eventbridge.png",
    id: "f371a36e-bb5b-11ed-ac0b-3e86250ca8d9",
  },
  {
    videoId: "",
    title: "Lambda to EventBridge",
    services: {
      to: "eventbridge",
      from: "lambda",
    },
    resources: {
      headline: "Additional resources",
      bullets: [
        {
          text: "Integrating Amazon EventBridge into your serverless applications",
          link: "https://aws.amazon.com/blogs/compute/integrating-amazon-eventbridge-into-your-serverless-applications/",
        },
        {
          text: "Use Amazon EventBridge to Build Decoupled, Event-Driven Architectures",
          link: "https://serverlessland.com/learn/eventbridge",
        },
      ],
    },
    level: "100",
    language: "Node.js",
    introBox: {
      text: [
        "The SAM template deploys a Lambda function with permission to publish events to EventBridge. The Lambda function publishes an event to the default bus in EventBridge when invoked.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "https://raw.githubusercontent.com/aws-samples/serverless-patterns/main/lambda-eventbridge/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-eventbridge",
        readmeURL: "",
      },
      payloads: [
        {
          payloadURL: "",
          headline: "",
        },
      ],
    },
    framework: "SAM",
    description: "Create a Lambda function that sends events to EventBridge.",
    deploy: {
      text: ["sam deploy --guided"],
    },
    author: {
      twitter: "jbesw",
      name: "James Beswick",
      imageURL:
        "https://pbs.twimg.com/profile_images/1165718285754753025/OrGcUHER_400x400.jpg",
      headline: "Presented by James Beswick, Developer Advocate",
      bio: "James is a senior developer advocate for Serverless Applications at Amazon Web Services based in the US. Prior to joining AWS Ben worked in a number of different technical roles specializing in workflow Automation and web development.",
    },
    architectureURL:
      "https://serverlessland.s3.amazonaws.com/assets/patterns/patterns-lambda-to-eventbridge.png",
    id: "f371b1f6-bb5b-11ed-b02e-3e86250ca8d9",
  },
  {
    title: "DynamoDB Streams to SQS using EventBridge Pipes",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "DynamoDB Table L2 Construct",
          link: "https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_dynamodb.Table.html",
        },
        {
          text: "EventBridge Pipes L1 Construct",
          link: "https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_pipes.CfnPipe.html",
        },
        {
          text: "SQS Queue L2 Construct",
          link: "https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_sqs.Queue.html",
        },
      ],
    },
    level: "200",
    language: ".NET",
    introBox: {
      text: [
        "This pattern demonstrates a low code way to send DynamoDB stream records to an SQS queue using EventBridge Pipes.",
        "When items are put in the DynamoDB table, the DynamoDB stream captures a time ordered sequence of the changes to the items. The EventBridge pipe uses the stream records as a source and writes those records to the target SQS queue.",
        "This pattern deploys one DynamoDB Table with streams enabled, one SQS Queue, one an EventBride Pipe to connect them.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/dynamo-pipes-sqs-cdk",
        templateFile:
          "dynamodb-pipes-sqs-cdk/src/DynamoPipeSqsDynamoPipeSqsStack.cs",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/dynamodb-pipes-sqs-cdk",
        projectFolder: "dynamodb-pipes-sqs-cdk",
      },
    },
    framework: "CDK",
    description:
      "This pattern demonstrates a low code way to send DynamoDB stream records to an SQS queue using EventBridge Pipes.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "tim_wondergem",
        name: "Tim Wondergem",
        linkedin: "https://www.linkedin.com/in/tim-wondergem-18591a3/",
        image: "https://avatars.githubusercontent.com/u/4333425",
        bio: "Tim Wondergem is a Cloud Application Architect at AWS whose passions include event driven systems serverless.",
      },
    ],
    id: "f371ba48-bb5b-11ed-b879-3e86250ca8d9",
  },
  {
    title:
      "DynamoDB seed data on create with custom resource using CDK (Typescript)",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "CDK Custom Resource",
          link: "https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.custom_resources.AwsCustomResource.html",
        },
        {
          text: "Cloudformation Custom Resource",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources-lambda.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This project demonstrates how to create a DynamoDB table and insert data upon creation using custom resource.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/dynamodb-seed-data-on-create-cdk",
        templateFile:
          "dynamodb-seed-data-on-create-cdk/app-config-feature-flag-cdk-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/dynamodb-seed-data-on-create-cdk",
        projectFolder: "dynamodb-seed-data-on-create-cdk",
      },
    },
    framework: "CDK",
    description:
      "Create a DynamoDB table and insert data upon creation using custom resource.",
    deploy: {
      text: ["cdk deploy --all"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destory --all</code>."],
    },
    authors: [
      {
        twitter: "@pubudusj",
        name: "Pubudu Jayawardana",
        linkedin: "pubudusj",
        image: "https://avatars.githubusercontent.com/u/1263087",
        bio: "AWS Community Builder in Serverless category. Serverless advocate and enthusisast.",
      },
    ],
    id: "f371c0f6-bb5b-11ed-a4a4-3e86250ca8d9",
  },
  {
    title: "Amazon DynamoDB Stream to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    level: "200",
    language: ".NET",
    introBox: {
      text: [
        "This CDK application demonstrates how to establish an Amazon DynamoDB table stream, an AWS Lambda function, and the minimal IAM permission needed for the application to function properly.",
        "When items are inserted or updated in a DynamoDB table, the changes are sent to a stream. This pattern configures a Lambda function to poll this stream. The function is invoked with a payload containing the contents of the table item that changed.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/dynamodb-lambda-cdk-dotnet",
        templateFile: "cdk/src/Cdk/CdkStack.cs",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/dynamodb-lambda-cdk-dotnet",
        readmeURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/dynamodb-lambda-cdk-dotnet/README.md",
        projectFolder: "dynamodb-lambda-cdk-dotnet",
      },
    },
    framework: "CDK",
    description:
      "Create an AWS Lambda function that receives DynamoDB change items.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "pankajrawat333",
        name: "Pankaj Rawat",
        linkedin: "pankaj-rawat-14568765",
        image: "https://avatars.githubusercontent.com/u/21244341?s=96&v=4",
        bio: "Pankaj Rawat is a Lead Consultant at Amazon Web Services.",
      },
    ],
    id: "f371cb3c-bb5b-11ed-a501-3e86250ca8d9",
  },
  {
    title: "Amazon Dynamodb Streams to AWS Lambda to Amazon EventBridge",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon DynamoDB Streams",
          link: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/streamsmain.html",
        },
        {
          text: "AWS Lambda",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
        },
        {
          text: "Amazon EventBridge",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html",
        },
      ],
    },
    level: "300",
    language: "TypeScript",
    introBox: {
      text: [
        "The changes are sent to a stream when items are written in a DynamoDB table. This pattern configures a Lambda function to poll this stream. The function is invoked with a payload containing the table item that has been inserted. The Lambda will then emit an event to Amazon EventBridge.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/dynamodb-streams-lambda-eventbridge-sam-node",
        templateFile:
          "dynamodb-streams-lambda-eventbridge-sam-node/template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/dynamodb-streams-lambda-eventbridge-sam-node",
        projectFolder: "dynamodb-streams-lambda-eventbridge-sam-node",
      },
    },
    framework: "SAM",
    description:
      "TThe AWS SAM template deploys a Lambda function, a DynamoDB table and an Amazon EventBridge bus, and the minimum IAM resources required to run the application.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f371d56e-bb5b-11ed-aaae-3e86250ca8d9",
  },
  {
    title: "Amazon Dynamodb Streams to AWS Lambda to Amazon EventBridge",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon DynamoDB Streams",
          link: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/streamsmain.html",
        },
        {
          text: "AWS Lambda",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
        },
        {
          text: "Amazon EventBridge",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html",
        },
      ],
    },
    level: "300",
    language: "Rust",
    introBox: {
      text: [
        "The changes are sent to a stream when items are written in a DynamoDB table. This pattern configures a Lambda function to poll this stream. The function is invoked with a payload containing the table item that has been inserted. The Lambda will then emit an event to Amazon EventBridge.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/dynamodb-streams-lambda-eventbridge-sam-rust",
        templateFile:
          "dynamodb-streams-lambda-eventbridge-sam-rust/template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/dynamodb-streams-lambda-eventbridge-sam-rust",
        projectFolder: "dynamodb-streams-lambda-eventbridge-sam-rust",
      },
    },
    framework: "SAM",
    description:
      "TThe AWS SAM template deploys a Lambda function, a DynamoDB table and an Amazon EventBridge bus, and the minimum IAM resources required to run the application.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>make delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f371df64-bb5b-11ed-a67a-3e86250ca8d9",
  },
  {
    title: "DynamoDB to Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS Docs: DynamoDB Streams and AWS Lambda Triggers",
          link: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html",
        },
      ],
    },
    level: "200",
    language: "Java",
    introBox: {
      text: [
        "The Terraform template deploys a Lambda function, a DynamoDB table, and the minimum IAM resources required to run the application.",
        "When items are written or updated in the DynamoDB table, the changes are sent to a stream. This pattern configures a Lambda function to poll this stream. The function is invoked with a payload containing the contents of the table item that changed.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/dynamodb-streams-lambda-terraform-java",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/dynamodb-streams-lambda-terraform-java",
      },
    },
    framework: "Terraform",
    description:
      "Invoke a Lambda function from changes to a DynamoDB table using event-based filters",
    deploy: {
      text: ["See the GitHub repo for detailed deployment instructions."],
    },
    cleanup: {
      text: [
        "Change directory: <code>cd eventbridge-cloudwatch-terraform</code>.",
        "Delete the stack: <code>terraform destroy</code>.",
        "Confirm the stack has been deleted: <code>terraform show</code>.",
      ],
    },
    authors: [
      {
        name: "Ezzeddine El Ayoubi",
        linkedin: "ezzeddine-62535397",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-ezzeddine-el-ayoubi.jpg",
        bio: "Devops Cloud Engineer (via Passionate People) at IKEA",
      },
      {
        name: "Steven Cook",
        bio: "Senior Solutions Architect at AWS.",
      },
    ],
    id: "f371f44a-bb5b-11ed-b7f2-3e86250ca8d9",
  },
  {
    title: "Outbox pattern with DynamoDB and EventBridge",
    resources: {
      bullets: [
        {
          text: "Transactional outbox",
          link: "https://microservices.io/patterns/data/transactional-outbox.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This pattern will insert data into a DynamoDB table and setup a stream into Lambda. Lambda will then process the messages and forward them onto EventBridge for downstream consumers",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/dynamodb-streams-to-eventbridge-outbox-pattern",
        templateFile: "lib/eventbridge-outbox-pattern-with-ddb-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/dynamodb-streams-to-eventbridge-outbox-pattern",
        projectFolder: "dynamodb-streams-to-eventbridge-outbox-pattern",
      },
    },
    framework: "CDK",
    description:
      "Outbox pattern example with DynamoDB streams and EventBridge. Listen for new inserts and raise domain events into your architecture.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        name: "David Boyne",
        image: "../assets/images/resources/dboyne.jpg",
        bio: "Senior Developer Advocate at AWS focusing on EDA and Serverless.",
      },
    ],
    id: "f3720156-bb5b-11ed-bf9c-3e86250ca8d9",
  },
  {
    title: "Live Streaming on AWS for SRT/Zixi/RIST/RTP FEC input sources",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Live Streaming on AWS with Amazon S3",
          link: "https://github.com/aws-solutions/live-streaming-on-aws-with-amazon-s3",
        },
        {
          text: "Live Streaming on AWS",
          link: "https://github.com/aws-solutions/live-stream-on-aws",
        },
      ],
    },
    level: "300",
    language: "typescript",
    introBox: {
      text: [
        "The solution configures AWS Elemental MediaLive with one of three encoding profiles: HD-1080p, HD-720p and SD-540p.",
        "AWS Elemental MediaPackage ingests the MediaLive Output and package the Live stream into HLS,DASH and CMAF.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/elemental-mediaconnect-medialive-mediapackage-cdk-ts",
        readmeURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/elemental-mediaconnect-medialive-mediapackage-cdk-ts/README.md",
      },
    },
    framework: "CDK",
    description:
      "This pattern creates a live streaming stack leveraging AWS MediaConnect, AWS Elemental MediaLive and MediaPackage for SRT/Zixi/RIST/RTP FEC input sources.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["cdk destroy"],
    },
    authors: [
      {
        twitter: "@cornel_croi",
        name: "Corneliu Croitoru",
        linkedin: "corneliucroitoru",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-corneliu-croitoru.jpg",
        headline: "Presented by Corneliu Croitoru, Prototyping Architect",
        bio: "Developer at heart, in 2018 joined AWS as a Solution Architect and in 2021 joined EMEA Prototyping Team. Now he is building, jointly with customers, the most exciting and innovative prototypes on AWS. Specialized on Serverless/Edge Services/Media Streaming.",
      },
    ],
    id: "f3720d4a-bb5b-11ed-875f-3e86250ca8d9",
  },
  {
    title: "Live Streaming on AWS using RTP/RTMP sources",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    level: "300",
    language: "nodejs",
    introBox: {
      text: [
        "* To solution Configures AWS Elemental MediaLive with one of three encoding profiles: HD-1080p, HD-720p and SD-540p",
        "* The solution can be configured with the following input type: RTP_PUSH, RTMP_PUSH, RTMP_PULL and URL_PULL",
        "* AWS Elemental MediaPackage ingests the MediaLive Output and package the Live stream into HLS,DASH and CMAF",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/elemental-medialive-mediapackage-cdk-ts",
        readmeURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/elemental-medialive-mediapackage-cdk-ts/README.md",
      },
    },
    framework: "CDK",
    description:
      "This pattern creates a live streaming stack leveraging AWS Elemental MediaLive, MediaPackage for RTP/RTMP input sources.",
    deploy: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    cleanup: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    authors: [
      {
        twitter: "@cornel_croi",
        name: "Corneliu Croitoru",
        linkedin: "corneliucroitoru",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-corneliu-croitoru.jpg",
        headline: "Presented by Corneliu Croitoru, Prototyping Architect",
        bio: "Developer at heart, in 2018 joined AWS as a Solution Architect and since 2021 building, jointly with customers, the most exciting and innovative prototypes on AWS.",
      },
    ],
    id: "f3721b1e-bb5b-11ed-bbd4-3e86250ca8d9",
  },
  {
    title: "Live Streaming content at scale using Amazon CloudFront",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Live Streaming on AWS with Amazon S3",
          link: "https://github.com/aws-solutions/live-streaming-on-aws-with-amazon-s3",
        },
        {
          text: "Live Streaming on AWS",
          link: "https://github.com/aws-solutions/live-stream-on-aws",
        },
      ],
    },
    level: "300",
    language: "typescript",
    gitHub: {
      template: {
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/elemental-mediapackage-cloudfront-cdk-ts",
        readmeURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/elemental-mediapackage-cloudfront-cdk-ts/README.md",
      },
    },
    framework: "CDK",
    description:
      "This pattern demonstrates how to create MediaPackage custom endpoints as the Origins for a CloudFront distribution to enable the live stream content to be delivered globally and at scale.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["cdk destroy"],
    },
    authors: [
      {
        twitter: "@cornel_croi",
        name: "Corneliu Croitoru",
        linkedin: "corneliucroitoru",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-corneliu-croitoru.jpg",
        headline: "Presented by Corneliu Croitoru, Prototyping Architect",
        bio: "Developer at heart, in 2018 joined AWS as a Solution Architect and in 2021 joined EMEA Prototyping Team. Now he is building, jointly with customers, the most exciting and innovative prototypes on AWS. Specialized on Serverless/Edge Services/Media Streaming",
      },
    ],
    id: "f3722514-bb5b-11ed-acd9-3e86250ca8d9",
  },
  {
    title: "EventBridge to CloudWatch Logs",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Reducing custom code by using advanced rules in Amazon EventBridge",
          link: "https://aws.amazon.com/blogs/compute/reducing-custom-code-by-using-advanced-rules-in-amazon-eventbridge/",
        },
        {
          text: "Use Amazon EventBridge to Build Decoupled, Event-Driven Architectures",
          link: "https://serverlessland.com/learn/eventbridge",
        },
      ],
    },
    level: "200",
    language: ".NET",
    introBox: {
      text: [
        "This project contains a sample AWS CDK template to create an EventBridge Rule, as well as, a CloudWatch Logs Group.",
        "The EventBridge Rule publishes matched events to CloudWatch Logs.",
        "In this example, the rule filters for specific attributes in the event before sending to the CloudWatch Logs target.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-cloudwatch-dotnet-cdk",
        readmeURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-cloudwatch-dotnet-cdk/README.md",
      },
    },
    framework: "CDK",
    description:
      "Create an EventBridge rule that sends events to CloudWatch Logs.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "@mrark1361",
        name: "Amir Khairalomoum",
        linkedin: "amir-khairalomoum",
        image:
          "https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2021/06/29/Amir-Khairalomoum.jpg",
        bio: "Amir is a Sr. Solutions Architect at AWS. He supports customers in their digital transformation and their cloud journey to AWS. He is passionate about serverless technologies.",
      },
    ],
    id: "f3723400-bb5b-11ed-bd6f-3e86250ca8d9",
  },
  {
    title: "EventBridge event enrichment with AWS Lambda",
    resources: {
      bullets: [
        {
          text: "Content rnricher messaging pattern",
          link: "https://www.enterpriseintegrationpatterns.com/DataEnricher.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This pattern will produce events with enrichment flag. Enricher (Lambda function) picks up the event, enriches then puts the event back onto the bus. Downstream consumers get the enriched event",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/eventbridge-enrichment-with-lambda",
        templateFile: "lib/single-bus-enrichment-with-lambda.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-enrichment-with-lambda",
        projectFolder: "eventbridge-enrichment-with-lambda",
      },
    },
    framework: "CDK",
    description:
      "Enrich events with Lambda and put them back onto the event bus for downstream consumers",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        name: "David Boyne",
        image: "../assets/images/resources/dboyne.jpg",
        bio: "Senior Developer Advocate at AWS focusing on EDA and Serverless.",
      },
    ],
    id: "f372418e-bb5b-11ed-bfc8-3e86250ca8d9",
  },
  {
    title: "Eventbridge to Kinesis Firehose to S3",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Dynamic Partitioning in Kinesis Data Firehose",
          link: "https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html",
        },
        {
          text: "Audit AWS service events with Amazon EventBridge and Amazon Kinesis Data Firehose",
          link: "https://aws.amazon.com/blogs/big-data/audit-aws-service-events-with-amazon-eventbridge-and-amazon-kinesis-data-firehose/",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "The purpose of this pattern is to demonstrate how to forward custom events to Amazon Simple Storage Service (Amazon S3) for long-term storage, analysis, and auditing purposes using EventBridge rules and Amazon Kinesis Data Firehose. This pattern is leveraging the native integration between these 2 services which means only JSON-based, structured language is used to define the implementation.",
        "Using Kinesis Data Firehose as an intermediary step between EventBridge and S3 takes advantage of Kinesis Data Firehose's dynamic partitioning capability to deliver events to the S3 bucket partitioned by detail-type and receipt time.",
        "This pattern deploys one KMS Key, one IAM Role, one Kinesis Firehose Delivery Stream, one EventBridge Event Bus and Rule, and one S3 Bucket.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/eventbridge-firehose-cdk",
        templateFile: "eventbridge-firehose-cdk/app.py",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-firehose-cdk",
        projectFolder: "eventbridge-firehose-cdk",
      },
    },
    framework: "CDK",
    description:
      "Forward custom events to Amazon Simple Storage Service (Amazon S3) using EventBridge rules and Amazon Kinesis Data Firehose.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        name: "Maya Flores",
        linkedin: "maya-m-flores",
        image:
          "https://media-exp1.licdn.com/dms/image/C4E03AQGFaDVfkIJi4g/profile-displayphoto-shrink_200_200/0/1620953260457?e=1671062400&v=beta&t=pVt_BUU-r7MtlMwcOxgXgtaUM2tVRe4CUtlUknM--os",
        bio: "Partner Solutions Architect @ AWS. Serverless enthusiast.",
      },
    ],
    id: "f3724bc0-bb5b-11ed-8bbe-3e86250ca8d9",
  },
  {
    title:
      "Amazon EventBridge to Amazon Firehose Delivery Stream to Amazon S3 using .Net CDK",
    testing: {
      text: [
        "Send message to EventBridge by using command at project root level - aws events put-events --entries file://SampleEvent.json",
        "Navigate to S3 bucket created by CDK and confirm message has saved at path {department}/{event message file}",
        "Please note: Firehose delivery stream buffer is configured for 60secs (default time), so please wait for 1-2 mins after event send command to get the message in S3 bucket",
      ],
    },
    resources: {
      bullets: [
        {
          text: "Amazon Kinesis Data Firehose Delivery Stream",
          link: "https://docs.aws.amazon.com/firehose/latest/dev/basic-create.html",
        },
        {
          text: "Amazon EventBridge",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-get-started.html",
        },
        {
          text: "Amazon S3",
          link: "https://aws.amazon.com/s3/?nc=sn&loc=0",
        },
      ],
    },
    level: "200",
    language: ".NET",
    introBox: {
      text: [
        "When user send message to EventBridge bus, message will get routed to EventBridge rule based on 'DetailType'.",
        "Then EventBridge rule send 'Detail' field value from message to rule target Firehose delivery stream.",
        "Once message reach at Firehose delivery stream, message will get process by JsonParsingEngine to read 'Department' field value, this value used for S3 prefix.",
        "After message processing, message will get delivred to targeted S3 bucket by following calculated S3 prefix based on 'Department' field value.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/eventbridge-firehose-s3-cdk",
        templateFile: "eventbridge-firehose-s3-cdk/src/CdkStack.cs",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-firehose-s3-cdk",
        projectFolder: "eventbridge-firehose-s3-cdk",
      },
    },
    framework: "CDK",
    description:
      "Creates EventBridge, Firehose Delivery Stream, and S3 bucket. Apply Firehose DynamicPartitioningConfiguration to parse the input message to extract department value to use it to create S3 partition",
    deploy: {
      text: ["cdk deploy EventBridgeFirehoseS3Stack"],
    },
    cleanup: {
      text: [
        "Delete the stack: cdk destroy EventBridgeFirehoseS3Stack",
        "Confirm the stack has been deleted: aws cloudformation list-stacks --query \"StackSummaries[?contains(StackName,'EventBridgeFirehoseS3Stack')].StackStatus\"",
      ],
    },
    authors: [
      {
        twitter: "",
        name: "Vikramsinha Patil",
        linkedin: "https://www.linkedin.com/in/vikramsinha-patil-834a4b2b",
        image: "",
        bio: "Cloud Application Architect at AWS",
      },
    ],
    id: "f372562e-bb5b-11ed-b338-3e86250ca8d9",
  },
  {
    title: "Event Bridge Global Endpoints - Active Acttive",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Global Event Driven Applications",
          link: "https://blog.marcia.dev/global-event-driven-applications",
        },
        {
          text: "EventBridge Global Endpoints docs",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This pattern showscase the usage of EventBridge Global Endpoints. It will create 2 event buses in two regions (a main region and secondary region) and the buses each bus is connected to a CloudWatch Log. The client that is a Lambda function will put messages to the Global Endpoint and depending on the health of the main region bus it will shift the traffic to the correct region. This pattern also creates an alarm and health check to validate the health of the main region event bus.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/eventbrigde-global-endpoint-cdk/cdk",
        templateFile: "lib/global-endpoint-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbrigde-global-endpoint-cdk",
        projectFolder: "eventbrigde-global-endpoint-cdk",
      },
    },
    framework: "CDK",
    description:
      "Creates an EventBridge Global Endpoint and all the infra needed to set it up",
    deploy: {
      text: ["cdk deploy --all"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy --all</code>."],
    },
    authors: [
      {
        twitter: "twitter-handle",
        name: "Marcia Villalba",
        linkedin: "linked-in-ID",
        image: "link-to-your-photo.jpg",
        bio: "Your bio.",
      },
    ],
    id: "f3727438-bb5b-11ed-bce5-3e86250ca8d9",
  },
  {
    title: "EventBridge to Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Reducing custom code by using advanced rules in Amazon EventBridge",
          link: "https://aws.amazon.com/blogs/compute/reducing-custom-code-by-using-advanced-rules-in-amazon-eventbridge/",
        },
        {
          text: "Use Amazon EventBridge to Build Decoupled, Event-Driven Architectures",
          link: "https://serverlessland.com/learn/eventbridge",
        },
      ],
    },
    level: "200",
    language: ".NET",
    introBox: {
      text: [
        "This project contains a sample AWS CDK template for invoking AWS Lambda from an Amazon EventBridge Rule.",
        "The EventBridge rule filters the events based upon the defined criteria. When matching events are sent to EventBridge that trigger the rule, they are delivered as a JSON event payload to the Lambda function.",
        "It also creates a CloudWatch Log Group for the Lambda function for observation of incoming events, with a retention and removal policy.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-lambda-dotnet-cdk",
        readmeURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-lambda-dotnet-cdk/README.md",
      },
    },
    framework: "CDK",
    description: "Create an EventBridge rule that invokes a Lambda function.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "@mrark1361",
        name: "Amir Khairalomoum",
        linkedin: "amir-khairalomoum",
        image:
          "https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2021/06/29/Amir-Khairalomoum.jpg",
        bio: "Amir is a Sr. Solutions Architect at AWS. He supports customers in their digital transformation and their cloud journey to AWS. He is passionate about serverless technologies.",
      },
    ],
    id: "f3727f14-bb5b-11ed-aa60-3e86250ca8d9",
  },
  {
    title: "Amazon EventBridge to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon EventBridge",
          link: "https://aws.amazon.com/eventbridge/",
        },
      ],
    },
    level: "300",
    language: "Rust",
    introBox: {
      text: [
        "This template deploys a Lambda function that is triggered by an EventBridge rule. In this example, the rule filters for specific attributes in the event before invoking the function.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/eventbridge-lambda-rust",
        templateFile: "template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-lambda-rust",
        projectFolder: "eventbridge-lambda-rust",
      },
    },
    framework: "SAM",
    description:
      "This template deploys a Lambda function that is triggered by an EventBridge rule. In this example, the rule filters for specific attributes in the event before invoking the function.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f3728914-bb5b-11ed-8e7f-3e86250ca8d9",
  },
  {
    title: "AWS Lambda to Amazon EventBridge",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "Reducing custom code by using advanced rules in Amazon EventBridge",
          link: "https://aws.amazon.com/blogs/compute/reducing-custom-code-by-using-advanced-rules-in-amazon-eventbridge/",
        },
        {
          text: "Use Amazon EventBridge to Build Decoupled, Event-Driven Architectures",
          link: "https://serverlessland.com/learn/eventbridge",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "This template deploys a Lambda function that is triggered by an EventBridge rule. In this example, the rule filters for specific attributes in the event before invoking the function.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/eventbridge-lambda-terraform",
        templateFile: "eventbridge-lambda-terraform/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-lambda-terraform",
        projectFolder: "eventbridge-lambda-terraform",
      },
    },
    framework: "Terraform",
    description:
      "This pattern creates a Lambda function that publishes an event to EventBridge.",
    deploy: {
      text: ["terraform init", "terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy", "terraform show"],
    },
    authors: [
      {
        name: "Stephen Monaghan",
        linkedin: "https://www.linkedin.com/in/stephen-monaghan-61873194/",
        image: "",
        bio: "Solutions Architect, AWS",
      },
    ],
    id: "f3729aa8-bb5b-11ed-9260-3e86250ca8d9",
  },
  {
    title: "DynamoDB Stream to AWS Lambda with Step Function Event Enrichment",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "DynamoDB Streams events are sent to Step Function workflow, the workflow enriches the event and forwards them onto the Lambda function",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-pipes-ddb-stream-lambda-sfn-enrich",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-pipes-ddb-stream-lambda-sfn-enrich",
        projectFolder: "eventbridge-pipes-ddb-stream-lambda-sfn-enrich",
      },
    },
    framework: "SAM",
    description:
      "This pattern triggers a Lambda function from a DynamoDB Stream with Step functions enrichment in between them using EventBridge Pipes.",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Sayan Moitra",
        linkedin: "sayanmoitra",
        image: "./smoitra.png",
        bio: "Sayan is a Solutions Architect at Amazon Web Services based in India.",
      },
    ],
    id: "f372a2b4-bb5b-11ed-93e3-3e86250ca8d9",
  },
  {
    title: "DynamoDB Stream to EventBridge Bus using EventBridge Pipes",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs&t=1037s",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "EventBridge Pipe used to connect DynamoDB stream (new and old images) directly into EventBridge with custom source and detail-type",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patternseventbridge-pipes-ddbstream-to-eventbridge",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/maineventbridge-pipes-ddbstream-to-eventbridge",
        projectFolder: "",
      },
    },
    framework: "SAM",
    description:
      "This pattern uses EventBridge pipe to connect DynamoDB Stream directly into EventBridge",
    deploy: {
      text: ["Deploy the stack: <code>sam deploy</code>."],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "David Boyne",
        image: "../assets/images/resources/dboyne.png",
        bio: "Senior Developer Advocate at AWS focusing on EDA and Serverless.",
      },
    ],
    id: "f372a8a4-bb5b-11ed-868f-3e86250ca8d9",
  },
  {
    title:
      "Change data capture events from DynamoDB to EventBridge Bus using filters",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "EventBridge Pipes Documentation",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-source.html",
        },
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs&t=1037s",
        },
        {
          text: "Learn more about event-driven architecture",
          link: "https://serverlessland.com/event-driven-architecture",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "Three EventBridge pipes are connected to the same DynamoDB stream. Each pipe filters out changes and raises CDC events into EventBridge",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-pipes-ddbstream-with-filters-to-eventbridge",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/eventbridge-pipes-ddbstream-with-filters-to-eventbridge",
        projectFolder:
          "eventbridge-pipes-ddbstream-with-filters-to-eventbridge",
      },
    },
    framework: "SAM",
    description:
      "This pattern uses CDC events from DynamoDB stream into EventBridge using filters and multiple EventBridge pipes",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "David Boyne",
        image: "../assets/images/resources/dboyne.png",
        bio: "Senior Developer Advocate at AWS focusing on EDA and Serverless.",
      },
    ],
    id: "f372ae8a-bb5b-11ed-88ba-3e86250ca8d9",
  },
  {
    title: "DynamoDB Stream to Amazon SNS with Amazon EventBridge Pipes",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "Amazon EventBridge Pipes used to connect DynamoDB stream directly to Amazon SNS with filtering option.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/eventbridge-pipes-dynamodbstream-sns",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-pipes-dynamodbstream-sns",
        projectFolder: "eventbridge-pipes-dynamodbstream-sns",
      },
    },
    framework: "SAM",
    description:
      "This pattern uses Amazon EventBridge Pipes to connect DynamoDB Stream directly to Amazon SNS with filtering option.",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Sayan Moitra",
        image: "./smoitra.png",
        bio: "Associate Solutions Architect, CSC",
      },
    ],
    id: "f372b4ac-bb5b-11ed-af74-3e86250ca8d9",
  },
  {
    title:
      "DynamoDB Stream to SQS queue using EventBridge Pipes with CDK Python",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "EventBridge Pipes Documentation",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-source.html",
        },
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Pipes Documentation for CDK v2 Python",
          link: "https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_pipes/CfnPipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs&t=1037s",
        },
        {
          text: "Learn more about event-driven architecture",
          link: "https://serverlessland.com/event-driven-architecture",
        },
      ],
    },
    level: "300",
    language: "Python",
    introBox: {
      text: [
        "Whenever there is an change in a item of the DynamoDB table, a message about the change and item will be available in DynamoDB Stream.",
        "EventBridge Pipe polls these messages in DynamoDB stream. When the messages are available, Pipe first filter them based on the filter criteria provided. Then, the matched messages are sent to the target SQS.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-pipes-dynamodbstream-to-sqs-cdk-python",
        templateFile:
          "eventbridge-pipes-dynamodbstream-to-sqs-cdk-python/eventbridge_pipes_dynamodbstream_to_sqs_cdk_python_stack.py",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-pipes-dynamodbstream-to-sqs-cdk-python",
        projectFolder: "eventbridge-pipes-dynamodbstream-to-sqs-cdk-python",
      },
    },
    framework: "CDK",
    description:
      "Simple pattern that sends events from DynamoDB Stream to SQS using EventBridge Pipes. Implemented with CDK using Python. ",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "@pubudusj",
        name: "Pubudu Jayawardana",
        linkedin: "pubudusj",
        image: "https://avatars.githubusercontent.com/u/1263087",
        bio: "AWS Community Builder in Serverless category. Serverless advocate and enthusiast.",
      },
    ],
    id: "f372bf74-bb5b-11ed-8afe-3e86250ca8d9",
  },
  {
    title: "Kinesis to Kinesis with filtering using EventBridge Pipes",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "EventBridge Pipes Documentation",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-source.html",
        },
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs&t=1037s",
        },
        {
          text: "Learn more about event-driven architecture",
          link: "https://serverlessland.com/event-driven-architecture",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "Kinesis stream is configured as the pipe source, and filters are created to filter records to downstream kinesis streams. This pattern allows you to filter kinesis streams into other kinesis streams.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-pipes-kinesis-to-kinesis-with-filtering",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/eventbridge-pipes-kinesis-to-kinesis-with-filtering",
        projectFolder: "eventbridge-pipes-kinesis-to-kinesis-with-filtering",
      },
    },
    framework: "SAM",
    description:
      "This pattern will connect Kinesis streams together with EventBridge Pipes. The source stream is filtered into multiple Kinesis streams downstream.",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "David Boyne",
        image: "../assets/images/resources/dboyne.png",
        bio: "Senior Developer Advocate at AWS focusing on EDA and Serverless.",
      },
    ],
    id: "f372cae6-bb5b-11ed-bd9b-3e86250ca8d9",
  },
  {
    title:
      "EventBridge Pipes with Amazon MSK as source and Lambda function as target",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "EventBridge Pipes Documentation",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-source.html",
        },
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs&t=1037s",
        },
        {
          text: "Learn more about event-driven architecture",
          link: "https://serverlessland.com/event-driven-architecture",
        },
      ],
    },
    level: "200",
    language: "Node.js",
    introBox: {
      text: [
        "Amazon MSK is configured as the pipe source with Lambda function. This patterns allows EventBridge pipes to integrate with Amazon MSK deployed in a private subnet and Lambda function to process the messages",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/eventbridge-pipes-msk-to-lambda",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/eventbridge-pipes-msk-to-lambda",
        projectFolder: "eventbridge-pipes-msk-to-lambda",
      },
    },
    framework: "SAM",
    description:
      "This pattern shows how to use EventBridge Pipes with data coming in from Amazon MSK and process these messages using Lambda function",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "@pawanputhran",
        name: "Pawan Puthran",
        linkedin: "https://www.linkedin.com/in/pawan-puthran-a4659226/",
        image:
          "https://media.licdn.com/dms/image/C4E03AQEB6pHc64s7_w/profile-displayphoto-shrink_400_400/0/1596015570736?e=1681948800&v=beta&t=P5_awh6zx-dBEXCSI94ksIjOcKEtknqyQkvQjMGTnzc",
        bio: "Principal Serverless Specialist at AWS",
      },
    ],
    id: "f372df0e-bb5b-11ed-9733-3e86250ca8d9",
  },
  {
    title: "DynamoDB Stream to EventBridge using Spitter pattern",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "EventBridge Pipes Documentation",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-source.html",
        },
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs&t=1037s",
        },
        {
          text: "Learn more about event-driven architecture",
          link: "https://serverlessland.com/event-driven-architecture",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "Insert happens into DynamoDB table (source), EventBridge pipes then splits the event into three events EventBridge (target).",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/eventbridge-pipes-splitter-pattern",
        templateFile: "cdk/lib/cdk-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-pipes-splitter-pattern",
        projectFolder: "eventbridge-pipes-splitter-pattern",
      },
    },
    framework: "CDK",
    description:
      "This pattern takes a change data capture event from DynamoDB and splits it into multiple events into EventBridge.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        name: "David Boyne",
        image: "../assets/images/resources/dboyne.png",
        bio: "Senior Developer Advocate at AWS focusing on EDA and Serverless.",
      },
    ],
    id: "f372e97c-bb5b-11ed-997c-3e86250ca8d9",
  },
  {
    title:
      "Enrich SQS Message data with Amazon EventBridge Pipes using API destinations",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "EventBridge Pipes Documentation",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-source.html",
        },
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs&t=1037s",
        },
        {
          text: "Learn more about event-driven architecture",
          link: "https://serverlessland.com/event-driven-architecture",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "The sample project demonstrates how to use Amazon EventBridge Pipes to enrich data using API destinations before sending it to the target. The pattern uses SQS message as a source to EventBridge Pipe, Pipe enriches the data by calling an API destination using input from the SQS message. Pipe extracts data from SQS message and sends it as path parameter(s) to API. Response from API is sent to an EventBridge Pipe target of Amazon CloudWatch logs.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-pipes-sqs-enrich-with-api-destination",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-pipes-sqs-enrich-with-api-destination",
        projectFolder: "eventbridge-pipes-sqs-enrich-with-api-destination",
      },
    },
    framework: "SAM",
    description:
      "This pattern shows how to use EventBridge Pipes to enrich SQS message data using API destinations and then send response to pipe target.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Sachin Doshi",
        linkedin: "https://www.linkedin.com/in/sachin1doshi/",
        bio: "AWS Application Architect",
      },
    ],
    id: "f372f304-bb5b-11ed-90fb-3e86250ca8d9",
  },
  {
    title:
      "Enrich SQS message data with EventBridge Pipes using Salesforce via API Destination",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "EventBridge Pipes Documentation",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-source.html",
        },
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs&t=1037s",
        },
        {
          text: "Learn more about event-driven architecture",
          link: "https://serverlessland.com/event-driven-architecture",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "The sample project demonstrates how to use Amazon EventBridge Pipes to enrich data using Salesforce via API destination before sending it to the target. The pattern uses SQS message as a source to EventBridge Pipe, Pipe enriches the data by calling the Salesforce API via an API destination using input from the SQS message. Pipe extracts data from SQS message and sends it as path parameter(s) to API. Response from API is sent to an EventBridge Pipe target of Amazon CloudWatch logs.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-pipes-sqs-enrich-with-sfdc",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-pipes-sqs-enrich-with-sfdc",
        projectFolder: "eventbridge-pipes-sqs-enrich-with-sfdc",
      },
    },
    framework: "SAM",
    description:
      "This pattern shows how to use EventBridge Pipes to enrich SQS message data using Salesforce via API destination and then send response to Pipe target.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "@rohanmehta_dev",
        name: "Rohan Mehta",
        linkedin: "https://www.linkedin.com/in/rohan-mehta-dev/",
        image: "https://phonetool.amazon.com/users/merohan",
        bio: "Cloud Application Architect at AWS",
      },
    ],
    id: "f3730312-bb5b-11ed-99df-3e86250ca8d9",
  },
  {
    title: "SQS to EventBridge Bus using EventBridge Pipes",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "EventBridge Pipes Documentation",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-source.html",
        },
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs&t=1037s",
        },
        {
          text: "Learn more about event-driven architecture",
          link: "https://serverlessland.com/event-driven-architecture",
        },
      ],
    },
    level: "200",
    language: ".NET",
    introBox: {
      text: [
        "SQS queue is polled and messages are sent to EventBridge. Custom events in EventBridge are raised.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-pipes-sqs-to-eventbridge-cdk-dotnet",
        templateFile: "cdk/src/Cdk/CdkStack.cs",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-pipes-sqs-to-eventbridge-cdk-dotnet",
        projectFolder: "eventbridge-pipes-sqs-to-eventbridge-cdk-dotnet",
      },
    },
    framework: "CDK",
    description:
      "This pattern uses SQS and triggers EventBridge events directly with optional filtering supported.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        name: "James Eastham",
        bio: "Senior Cloud Architect at AWS focusing on .NET and Serverless.",
      },
    ],
    id: "f3730ac4-bb5b-11ed-b94f-3e86250ca8d9",
  },
  {
    title: "SQS to EventBridge Bus using EventBridge Pipes",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "EventBridge Pipes Documentation",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-source.html",
        },
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Pipes Documentation for CDK v2 Python",
          link: "https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_pipes/CfnPipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs&t=1037s",
        },
        {
          text: "Learn more about event-driven architecture",
          link: "https://serverlessland.com/event-driven-architecture",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "SQS queue is polled and messages are sent to EventBridge. Custom events in EventBridge are raised.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-pipes-sqs-to-eventbridge-cdk-python",
        templateFile:
          "eventbridge-pipes-sqs-to-eventbridge-cdk-python/eventbridge_pipes_sqs_to_eventbridge_cdk_python_stack.py",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-pipes-sqs-to-eventbridge-cdk-python",
        projectFolder: "eventbridge-pipes-sqs-to-eventbridge-cdk-python",
      },
    },
    framework: "CDK",
    description:
      "This pattern uses SQS and triggers EventBridge events directly with optional filtering supported.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "@pubudusj",
        name: "Pubudu Jayawardana",
        linkedin: "pubudusj",
        image: "https://avatars.githubusercontent.com/u/1263087",
        bio: "AWS Community Builder in Serverless category. Serverless advocate and enthusiast.",
      },
    ],
    id: "f373108c-bb5b-11ed-bc00-3e86250ca8d9",
  },
  {
    title: "SQS to EventBridge Bus using EventBridge Pipes",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "EventBridge Pipes Documentation",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-source.html",
        },
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs&t=1037s",
        },
        {
          text: "Learn more about event-driven architecture",
          link: "https://serverlessland.com/event-driven-architecture",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "SQS queue is polled and messages are sent to EventBridge. Custom events in EventBridge are raised.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-pipes-sqs-to-eventbridge-cdk",
        templateFile: "cdk/lib/eventbridge-pipes-sqs-to-eventbridge-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-pipes-sqs-to-eventbridge-cdk",
        projectFolder: "eventbridge-pipes-sqs-to-eventbridge-cdk",
      },
    },
    framework: "CDK",
    description:
      "This pattern uses SQS and triggers EventBridge events directly with optional filtering supported.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        name: "David Boyne",
        image: "../assets/images/resources/dboyne.png",
        bio: "Senior Developer Advocate at AWS focusing on EDA and Serverless.",
      },
    ],
    id: "f37318c0-bb5b-11ed-927e-3e86250ca8d9",
  },
  {
    title: "SQS to EventBridge Bus using EventBridge Pipes",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "EventBridge Pipes Documentation",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-source.html",
        },
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs&t=1037s",
        },
        {
          text: "Learn more about event-driven architecture",
          link: "https://serverlessland.com/event-driven-architecture",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "SQS queue is polled and messages are sent to EventBridge. SQS messages are filtered before reaching EventBridge, and custom events in EventBridge are raised.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-pipes-sqs-to-eventbridge-with-filters",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-pipes-sqs-to-eventbridge-with-filters",
        projectFolder: "eventbridge-pipes-sqs-to-eventbridge-with-filters",
      },
    },
    framework: "SAM",
    description:
      "This pattern uses SQS and triggers EventBridge events directly with optional filtering supported.",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "David Boyne",
        image: "../assets/images/resources/dboyne.png",
        bio: "Senior Developer Advocate at AWS focusing on EDA and Serverless.",
      },
    ],
    id: "f3731e56-bb5b-11ed-a1bf-3e86250ca8d9",
  },
  {
    title: "SQS to Lambda with Step Functions event enrichment",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "EventBridge Pipes Documentation",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-source.html",
        },
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs&t=1037s",
        },
        {
          text: "Learn more about event-driven architecture",
          link: "https://serverlessland.com/event-driven-architecture",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "SQS queue is polled and messages are sent to Step Function workflow, the workflow enriches the event and forwards them onto the Lambda function",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-pipes-sqs-to-lambda-with-stepfunction-enrichment",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/eventbridge-pipes-sqs-to-lambda-with-stepfunction-enrichment",
        projectFolder:
          "eventbridge-pipes-sqs-to-lambda-with-stepfunction-enrichment",
      },
    },
    framework: "SAM",
    description:
      "This pattern triggers a Lambda function from an SQS queue with Step functions enrichment inbetween them using EventBridge Pipes",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "David Boyne",
        image: "../assets/images/resources/dboyne.png",
        bio: "Senior Developer Advocate at AWS focusing on EDA and Serverless.",
      },
    ],
    id: "f37327ac-bb5b-11ed-ad67-3e86250ca8d9",
  },
  {
    title:
      "Split SQS Messages into multiple SQS queus using EventBridge Pipe with CDK Python",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "EventBridge Pipes Documentation",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-source.html",
        },
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Pipes Documentation for CDK v2 Python",
          link: "https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_pipes/CfnPipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs&t=1037s",
        },
        {
          text: "Learn more about event-driven architecture",
          link: "https://serverlessland.com/event-driven-architecture",
        },
      ],
    },
    level: "300",
    language: "Python",
    introBox: {
      text: [
        "EventBridge Pipe polls messages in source SQS queue. Then using enrichment Lambda function, it extract the original payload.",
        "Then the messages is sent to the Event Bus. Two SQS queues are set as targets and based on the 'type' value on the orignial message, it will be delivered to the respective target queue.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-pipes-sqs-to-multiple-sqs",
        templateFile:
          "eventbridge-pipes-sqs-to-multiple-sqs/eventbridge_pipes_sqs_to_multiple_sqs_stack.py",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-pipes-sqs-to-multiple-sqs",
        projectFolder: "eventbridge-pipes-sqs-to-multiple-sqs",
      },
    },
    framework: "CDK",
    description:
      "Simple pattern that split messages in a SQS queue into multiple SQS queues using EventBridge Pipe and Event Bus. Implemented using CDK using Python. ",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "@pubudusj",
        name: "Pubudu Jayawardana",
        linkedin: "pubudusj",
        image: "https://avatars.githubusercontent.com/u/1263087",
        bio: "AWS Community Builder in Serverless category. Serverless advocate and enthusiast.",
      },
    ],
    id: "f373310c-bb5b-11ed-856f-3e86250ca8d9",
  },
  {
    title: "SQS to SQS with EventBridge Pipes and Lambda Enrichment",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "EventBridge Pipes Documentation",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-source.html",
        },
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs&t=1037s",
        },
        {
          text: "Learn more about event-driven architecture",
          link: "https://serverlessland.com/event-driven-architecture",
        },
      ],
    },
    level: "200",
    language: ".NET",
    introBox: {
      text: [
        "SQS queue is polled, the Lambda enricher is invoked and the response of the Lambda function is passed to SQS.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-pipes-sqs-to-sqs-with-lambda-enrichment-dotnet",
        templateFile: "cdk/src/Cdk/CdkStack.cs",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-pipes-sqs-to-sqs-with-lambda-enrichment-dotnet",
        projectFolder:
          "eventbridge-pipes-sqs-to-sqs-with-lambda-enrichment-dotnet",
      },
    },
    framework: "CDK",
    description:
      "This pattern demonstrates sending SQS messages to another SQS queue with a Lambda function to enrich the data.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        name: "James Eastham",
        bio: "Senior Cloud Architect at AWS focusing on .NET and Serverless.",
      },
    ],
    id: "f373405c-bb5b-11ed-a19a-3e86250ca8d9",
  },
  {
    title: "SQS to Step Function Workflow using EventBridge Pipes",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "EventBridge Pipes Documentation",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-source.html",
        },
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs&t=1037s",
        },
        {
          text: "Learn more about event-driven architecture",
          link: "https://serverlessland.com/event-driven-architecture",
        },
      ],
    },
    level: "200",
    language: ".NET",
    introBox: {
      text: [
        "SQS queue is polled and a Step Functions workflow execution is started for each batch of messages.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-pipes-sqs-to-step-functions-cdk-dotnet",
        templateFile: "cdk/src/Cdk/CdkStack.cs",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-pipes-sqs-to-step-functions-cdk-dotnet",
        projectFolder: "eventbridge-pipes-sqs-to-step-functions-cdk-dotnet",
      },
    },
    framework: "CDK",
    description:
      "This pattern uses SQS and triggers a Step Function workflow directly with optional filtering supported.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        name: "James Eastham",
        bio: "Senior Cloud Architect at AWS focusing on .NET and Serverless.",
      },
    ],
    id: "f37347fa-bb5b-11ed-a03b-3e86250ca8d9",
  },
  {
    title:
      "SQS to trigger Step Function using EventBridge Pipe with CDK Python",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "EventBridge Pipes Documentation",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-source.html",
        },
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Pipes Documentation for CDK v2 Python",
          link: "https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_pipes/CfnPipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs&t=1037s",
        },
        {
          text: "Learn more about event-driven architecture",
          link: "https://serverlessland.com/event-driven-architecture",
        },
      ],
    },
    level: "300",
    language: "Python",
    introBox: {
      text: [
        "EventBridge Pipe polls SQS queue and initiate Step Function execution per message received.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-pipes-sqs-to-stepfunctions-cdk-python",
        templateFile:
          "eventbridge-pipes-sqs-to-stepfunctions-cdk-python/eventbridge_pipes_sqs_to_stepfunctions_cdk_python_stack.py",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-pipes-sqs-to-stepfunctions-cdk-python",
        projectFolder: "eventbridge-pipes-sqs-to-stepfunctions-cdk-python",
      },
    },
    framework: "CDK",
    description:
      "Simple pattern that triggers Step Function execution from SQS using Amazon EventBridge Pipe and CDK using Python. ",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "@pubudusj",
        name: "Pubudu Jayawardana",
        linkedin: "pubudusj",
        image: "https://avatars.githubusercontent.com/u/1263087",
        bio: "AWS Community Builder in Serverless category. Serverless advocate and enthusiast.",
      },
    ],
    id: "f3735006-bb5b-11ed-a522-3e86250ca8d9",
  },
  {
    title: "SQS to Step Functions with EventBridge Pipes",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "EventBridge Pipes Documentation",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-source.html",
        },
        {
          text: "Cloudformation API for Pipes",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html",
        },
        {
          text: "Video explaining EventBridge Pipes",
          link: "https://www.youtube.com/watch?v=xXGXCOc3cBs&t=1037s",
        },
        {
          text: "Learn more about event-driven architecture",
          link: "https://serverlessland.com/event-driven-architecture",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "EventBridge Pipe used to poll a SQS queue and use the message to launch a StepFunctions state machine",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-pipes-sqs-to-stepfunctions",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-pipes-sqs-to-stepfunctions",
        projectFolder: "eventbridge-pipes-sqs-to-stepfunctions",
      },
    },
    framework: "SAM",
    description:
      "This pattern shows how to use EventBridge Pipes to launch a StepFunctions state machine with a message coming from SQS Queue.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Roman Boiko",
        image:
          "https://avatars.githubusercontent.com/u/856463?s=400&u=ace30327876b4d197d0ca3c94dee2e679fb34801&v=4",
        bio: "AWS Serverless Specialist Solutions Architect",
      },
    ],
    id: "f37355f6-bb5b-11ed-ac77-3e86250ca8d9",
  },
  {
    title:
      "EventBridge Scheduler Sweaper: Remove one-time schedules after they run",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Introducing Amazon EventBridge Scheduler",
          link: "https://aws.amazon.com/blogs/compute/introducing-amazon-eventbridge-scheduler/",
        },
        {
          text: "Amazon EventBridge Scheduler Docs",
          link: "https://docs.aws.amazon.com/scheduler/latest/UserGuide/what-is-scheduler.html",
        },
      ],
    },
    level: "300",
    language: "TypeScript",
    introBox: {
      text: [
        "Creates a schedule that is run every day at 00:00 that checks for one-time schedules. If any schedules are found it removes them",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-schedule-remove-one-time-schedules",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-schedule-remove-one-time-schedules",
        projectFolder: "eventbridge-schedule-remove-one-time-schedules",
      },
    },
    framework: "SAM",
    description:
      "Simple pattern to remove one-time schedules after 2 days of their execution.",
    deploy: {
      text: ["sam build && sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "David Boyne",
        image: "../assets/images/resources/dboyne.png",
        bio: "Senior Developer Advocate at AWS focusing on EDA and Serverless.",
      },
    ],
    id: "f3735b64-bb5b-11ed-b9ce-3e86250ca8d9",
  },
  {
    title:
      "EventBridge Scheduler to start and stop EC2 instances Monday to Friday",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Introducing Amazon EventBridge Scheduler",
          link: "https://aws.amazon.com/blogs/compute/introducing-amazon-eventbridge-scheduler/",
        },
        {
          text: "Amazon EventBridge Scheduler Docs",
          link: "https://docs.aws.amazon.com/scheduler/latest/UserGuide/what-is-scheduler.html",
        },
      ],
    },
    level: "300",
    language: "TypeScript",
    introBox: {
      text: [
        "Creates a scheulde that turns on instances at 7:00am and turns them off at 18:00pm Monday to Friday using Europe/London timezone.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/eventbridge-schedule-to-ec2-cdk",
        templateFile: "cdk/lib/schedule-ec2-instances-start-and-stop-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-schedule-to-ec2-cdk",
        projectFolder: "eventbridge-schedule-to-ec2-cdk",
      },
    },
    framework: "CDK",
    description:
      "Simple pattern that starts and stops given EC2 instances based on time of day, timezone and days of week",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        name: "David Boyne",
        image: "../assets/images/resources/dboyne.png",
        bio: "Senior Developer Advocate at AWS focusing on EDA and Serverless.",
      },
    ],
    id: "f3736564-bb5b-11ed-9232-3e86250ca8d9",
  },
  {
    title:
      "EventBridge Scheduler to raise EventBridge event every 5 minutes with CDK Python",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "Introducing Amazon EventBridge Scheduler",
          link: "https://aws.amazon.com/blogs/compute/introducing-amazon-eventbridge-scheduler/",
        },
        {
          text: "Amazon EventBridge Scheduler Docs",
          link: "https://docs.aws.amazon.com/scheduler/latest/UserGuide/what-is-scheduler.html",
        },
        {
          text: "Scheduler Documentation for CDK v2 Python",
          link: "https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_scheduler/CfnSchedule.html",
        },
      ],
    },
    level: "300",
    language: "Python",
    introBox: {
      text: [
        "Creates a scheulde that runs every 5 minutes to raise an EventBridge event. Additionally a Labmda function is configured as EventBrige rule target.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-schedule-to-eventbridge-cdk-python",
        templateFile:
          "eventbridge-schedule-to-eventbridge-cdk-python/eventbridge_schedule_to_eventbridge_cdk_python_stack.py",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-schedule-to-eventbridge-cdk-python",
        projectFolder: "eventbridge-schedule-to-eventbridge-cdk-python",
      },
    },
    framework: "CDK",
    description:
      "Simple pattern that rasies an EventBridge event (Lambda as target) every 5 minutes using Amazon EventBridge Scheduler and CDK using Python. ",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "@pubudusj",
        name: "Pubudu Jayawardana",
        linkedin: "pubudusj",
        image: "https://avatars.githubusercontent.com/u/1263087",
        bio: "AWS Community Builder in Serverless category. Serverless advocate and enthusiast.",
      },
    ],
    id: "f3736f8c-bb5b-11ed-b0dd-3e86250ca8d9",
  },
  {
    title:
      "EventBridge Scheduler to raise EventBridge event every 5 minutes with CDK",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Introducing Amazon EventBridge Scheduler",
          link: "https://aws.amazon.com/blogs/compute/introducing-amazon-eventbridge-scheduler/",
        },
        {
          text: "Amazon EventBridge Scheduler Docs",
          link: "https://docs.aws.amazon.com/scheduler/latest/UserGuide/what-is-scheduler.html",
        },
      ],
    },
    level: "300",
    language: "TypeScript",
    introBox: {
      text: [
        "Creates a scheulde that runs every 5 minutes to raise an EventBridge event.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-schedule-to-eventbridge-cdk",
        templateFile: "cdk/lib/eventbridge-scheduler-into-eventbridge-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-schedule-to-eventbridge-cdk",
        projectFolder: "eventbridge-schedule-to-eventbridge-cdk",
      },
    },
    framework: "CDK",
    description:
      "Simple pattern that rasies an EventBridge event every 5 minutes using Amazon EventBridge Scheduler and CDK",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        name: "David Boyne",
        image: "../assets/images/resources/dboyne.png",
        bio: "Senior Developer Advocate at AWS focusing on EDA and Serverless.",
      },
    ],
    id: "f373801c-bb5b-11ed-ac01-3e86250ca8d9",
  },
  {
    title: "EventBridge Scheduler to Lambda every 5 minutes with CDK",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Introducing Amazon EventBridge Scheduler",
          link: "https://aws.amazon.com/blogs/compute/introducing-amazon-eventbridge-scheduler/",
        },
        {
          text: "Amazon EventBridge Scheduler Docs",
          link: "https://docs.aws.amazon.com/scheduler/latest/UserGuide/what-is-scheduler.html",
        },
      ],
    },
    level: "300",
    language: "TypeScript",
    introBox: {
      text: [
        "Creates a scheulde that runs every 5 minutes to trigger a given Lambda function.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/eventbridge-schedule-to-lambda-cdk",
        templateFile: "cdk/lib/eventbridge-scehdules-with-cdk-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-schedule-to-lambda-cdk",
        projectFolder: "eventbridge-schedule-to-lambda-cdk",
      },
    },
    framework: "CDK",
    description:
      "Simple pattern that triggers a Lambda function every 5 minutes using Amazon EventBridge Scheduler and CDK",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "David Boyne",
        image: "../assets/images/resources/dboyne.png",
        bio: "Senior Developer Advocate at AWS focusing on EDA and Serverless.",
      },
    ],
    id: "f373894a-bb5b-11ed-85ba-3e86250ca8d9",
  },
  {
    title: "EventBridge Scheduler to Lambda every 5 minutes",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Introducing Amazon EventBridge Scheduler",
          link: "https://aws.amazon.com/blogs/compute/introducing-amazon-eventbridge-scheduler/",
        },
        {
          text: "Amazon EventBridge Scheduler Docs",
          link: "https://docs.aws.amazon.com/scheduler/latest/UserGuide/what-is-scheduler.html",
        },
      ],
    },
    level: "300",
    language: "TypeScript",
    introBox: {
      text: [
        "Creates a scheulde that runs every 5 minutes to trigger a given Lambda function.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/eventbridge-schedule-to-lambda",
        templateFile: "eventbridge-schedule-to-lambda/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-schedule-to-lambda",
        projectFolder: "eventbridge-schedule-to-lambda",
      },
    },
    framework: "SAM",
    description:
      "Simple pattern that triggers a Lambda function every 5 minutes using Amazon EventBridge Scheduler",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "David Boyne",
        image: "../assets/images/resources/dboyne.jpg",
        bio: "Senior Developer Advocate at AWS focusing on EDA and Serverless.",
      },
    ],
    id: "f3738ef4-bb5b-11ed-83c8-3e86250ca8d9",
  },
  {
    title: "Amazon EventBridge Scheduled to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Schedule expressions using rate or cron",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/services-cloudwatchevents-expressions.html",
        },
      ],
    },
    level: "200",
    language: "Java",
    introBox: {
      text: [
        "This template deploys a Lambda function that is triggered by an EventBridge Schedule.",
        "In this example, the Lambda function logs text to the console every minute.",
      ],
      headline:
        "Create an scheduled EventBridge rule that invokes a Lambda function",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/eventbridge-scheduled-lambda-java",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-scheduled-lambda-java",
        projectFolder: "eventbridge-scheduled-lambda-java",
      },
    },
    framework: "SAM",
    description: "Create a Lambda function triggered on a recurring schedule.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: [
        "Delete the stack: <code>aws cloudformation delete-stack --stack-name STACK_NAME</code>.",
        "Confirm the stack has been deleted: aws cloudformation list-stacks --query \"StackSummaries[?contains(StackName,'STACK_NAME')].StackStatus\"",
      ],
    },
    authors: [
      {
        twitter: "@talia_nassi",
        name: "Talia Nassi",
        linkedin: "talianassi",
        bio: "Talia is a Senior Developer Advocate for AWS Serverless based in Los Angeles, CA.",
      },
      {
        name: "Steven Cook",
        bio: "Senior Solutions Architect, AWS.",
      },
    ],
    id: "f37398fe-bb5b-11ed-a026-3e86250ca8d9",
  },
  {
    title: "Scheduled EventBridge rule for Lambda",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "Reducing custom code by using advanced rules in Amazon EventBridge",
          link: "https://aws.amazon.com/blogs/compute/reducing-custom-code-by-using-advanced-rules-in-amazon-eventbridge/",
        },
        {
          text: "Use Amazon EventBridge to Build Decoupled, Event-Driven Architectures",
          link: "https://serverlessland.com/learn/eventbridge",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "This template deploys a Lambda function that is triggered by an EventBridge Schedule. In this example, the Lambda function logs text to the console every minute.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/eventbridge-scheduled-lambda-terraform",
        templateFile: "eventbridge-scheduled-lambda-terraform/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-scheduled-lambda-terraform",
        projectFolder: "eventbridge-scheduled-lambda-terraform",
      },
    },
    framework: "Terraform",
    description:
      "Create a scheduled EventBridge rule that invokes a Lambda function",
    deploy: {
      text: ["terraform init", "terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy", "terraform show"],
    },
    authors: [
      {
        name: "Stephen Monaghan",
        linkedin: "https://www.linkedin.com/in/stephen-monaghan-61873194/",
        image: "",
        bio: "Solutions Architect, AWS",
      },
    ],
    id: "f373a25e-bb5b-11ed-9089-3e86250ca8d9",
  },
  {
    title: "Notify consumers of schema changes with Schema Registry events",
    resources: {
      bullets: [
        {
          text: "Content rnricher messaging pattern",
          link: "https://www.enterpriseintegrationpatterns.com/DataEnricher.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This pattern will use a CDK abstraction to allow consumers to listen to for schema changes with Amazon EventBridge. Schema changes will be forward to Slack (as an example)",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/eventbridge-schema-notifications",
        templateFile: "cdk/lib/single-bus-enrichment-with-lambda.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-schema-notifications",
        projectFolder: "eventbridge-schema-notifications",
      },
    },
    framework: "CDK",
    description:
      "Use schema registry and EventBridge to notify consumers of changes (Slack example)",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        name: "David Boyne",
        image: "../assets/images/resources/dboyne.png",
        bio: "Senior Developer Advocate at AWS focusing on EDA and Serverless.",
      },
    ],
    id: "f373b1f4-bb5b-11ed-a877-3e86250ca8d9",
  },
  {
    title: "Amazon Eventbridge to Amazon SNS",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Reducing custom code by using advanced rules in Amazon EventBridge",
          link: "https://aws.amazon.com/blogs/compute/reducing-custom-code-by-using-advanced-rules-in-amazon-eventbridge/",
        },
        {
          text: "Use Amazon EventBridge to Build Decoupled, Event-Driven Architectures",
          link: "https://serverlessland.com/learn/eventbridge",
        },
      ],
    },
    level: "200",
    language: ".NET",
    introBox: {
      text: [
        "This CDK template deploys a SNS topic that is triggered by an EventBridge rule.",
        "The SNS topic policy provides the permission for EventBridge to invoke the SNS topic.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-sns-dotnet-cdk",
        readmeURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-sns-dotnet-cdk/README.md",
      },
    },
    framework: "CDK",
    description: "Create an EventBridge rule that invokes an SNS topic.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "@mrark1361",
        name: "Amir Khairalomoum",
        linkedin: "amir-khairalomoum",
        image:
          "https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2021/06/29/Amir-Khairalomoum.jpg",
        bio: "Amir is a Sr. Solutions Architect at AWS. He supports customers in their digital transformation and their cloud journey to AWS. He is passionate about serverless technologies.",
      },
    ],
    id: "f373ba46-bb5b-11ed-b7a1-3e86250ca8d9",
  },
  {
    title: "Amazon Eventbridge to Amazon SQS",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Reducing custom code by using advanced rules in Amazon EventBridge",
          link: "https://aws.amazon.com/blogs/compute/reducing-custom-code-by-using-advanced-rules-in-amazon-eventbridge/",
        },
        {
          text: "Use Amazon EventBridge to Build Decoupled, Event-Driven Architectures",
          link: "https://serverlessland.com/learn/eventbridge",
        },
      ],
    },
    level: "200",
    language: ".NET",
    introBox: {
      text: [
        "This project contains sample AWS CDK code to create an EventBridge rule, as well as a SQS queue.",
        "The EventBridge rule publishes matched events to the SQS queue. In this example, the rule filters for specific attributes in the event before sending the event to the queue.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-sqs-dotnet-cdk",
        readmeURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-sqs-dotnet-cdk/README.md",
      },
    },
    framework: "CDK",
    description: "Create an EventBridge rule that invokes a SQS queue.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "@mrark1361",
        name: "Amir Khairalomoum",
        linkedin: "amir-khairalomoum",
        image:
          "https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2021/06/29/Amir-Khairalomoum.jpg",
        bio: "Amir is a Sr. Solutions Architect at AWS. He supports customers in their digital transformation and their cloud journey to AWS. He is passionate about serverless technologies.",
      },
    ],
    id: "f373cbd0-bb5b-11ed-b68e-3e86250ca8d9",
  },
  {
    videoId: "",
    title: "EventBridge to SQS",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    services: {
      to: "sqs",
      from: "eventbridge",
    },
    resources: {
      bullets: [
        {
          text: "Reducing custom code by using advanced rules in Amazon EventBridge",
          link: "https://aws.amazon.com/blogs/compute/reducing-custom-code-by-using-advanced-rules-in-amazon-eventbridge/",
        },
        {
          text: "Use Amazon EventBridge to Build Decoupled, Event-Driven Architectures",
          link: "https://serverlessland.com/learn/eventbridge",
        },
      ],
    },
    level: "100",
    language: "",
    introBox: {
      text: [
        "This template deploys an SQS queue that is triggered by an EventBridge rule. ",
        "The SQS queue policy provides the permission for EventBridge to send messages to the SQS queue.",
        "",
        "In this example, the EventBridge rule specified in `serverless.yml` filters the events based upon the criteria in the `EventPattern` section. ",
        'When matching events are sent to EventBridge that trigger the rule, they are delivered as a JSON event payload (see "Example event payload from EventBridge to SQS" in the README) to the SQS queue.',
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/eventbridge-sqs-sls",
        templateFile: "serverless.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/eventbridge-sqs-sls",
        projectFolder: "eventbridge-sqs-sls",
      },
    },
    framework: "Serverless Framework",
    description: "Create an EventBridge rule that invokes an SQS queue.",
    deploy: {
      text: ["<code>serverless deploy --verbose</code>"],
    },
    cleanup: {
      text: ["<code>serverless remove --verbose</code>."],
    },
    authors: [
      {
        name: "Dmitry Gulin",
        imageURL:
          "https://www.gravatar.com/avatar/223055bd132d244f6a96c3aef7453a5a?s=200",
        headline: "Presented by Dmitry Gulin, Modernization Architect, AWS",
        bio: "Dmitry is a modernization architect for Professional Services at Amazon Web Services based in the US.",
      },
    ],
    architectureURL: "",
    id: "f373d3e6-bb5b-11ed-a99c-3e86250ca8d9",
  },
  {
    title: "Kinesis Firehose Data Transformation with Lambda ",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon Kinesis Data Firehose Data Transformation",
          link: "https://docs.aws.amazon.com/firehose/latest/dev/data-transformation.html",
        },
        {
          text: "Redact sensitive data from streaming data in near-real time using Amazon Comprehend and Amazon Kinesis Data Firehose",
          link: "https://aws.amazon.com/blogs/machine-learning/redact-sensitive-data-from-streaming-data-in-near-real-time-using-amazon-comprehend-and-amazon-kinesis-data-firehose/",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "The purpose of this pattern is to deploy the infrastructure necessary to enable Kinesis Data Firehose data transformation.",
        "Kinesis Data Firehose can invoke a Lambda function to transform incoming source data and deliver the transformed data to destinations. In this architecture, Kinesis Data Firehose then invokes the specified Lambda function asynchronously with each buffered batch using the AWS Lambda synchronous invocation mode. The transformed data is sent from Lambda to Kinesis Data Firehose. Kinesis Data Firehose then sends it to the destination S3 bucket when the specified destination buffering size or buffering interval is reached, whichever happens first.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/firehose-transformation-cdk",
        templateFile: "firehose-transformation-cdk/app.py",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/firehose-transformation-cdk",
        projectFolder: "firehose-transformation-cdk",
      },
    },
    framework: "CDK",
    description:
      "Transform incoming source data and deliver the transformed data to destinations.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        name: "Maya Flores",
        linkedin: "maya-m-flores",
        image:
          "https://media-exp1.licdn.com/dms/image/C4E03AQGFaDVfkIJi4g/profile-displayphoto-shrink_200_200/0/1620953260457?e=1671062400&v=beta&t=pVt_BUU-r7MtlMwcOxgXgtaUM2tVRe4CUtlUknM--os",
        bio: "Partner Solutions Architect @ AWS. Serverless enthusiast.",
      },
    ],
    id: "f373ddc8-bb5b-11ed-9406-3e86250ca8d9",
  },
  {
    title: "Kinesis Firehose Data Transformation with Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon Kinesis Data Firehose Data Transformation",
          link: "https://docs.aws.amazon.com/firehose/latest/dev/data-transformation.html",
        },
        {
          text: "Redact sensitive data from streaming data in near-real time using Amazon Comprehend and Amazon Kinesis Data Firehose",
          link: "https://aws.amazon.com/blogs/machine-learning/redact-sensitive-data-from-streaming-data-in-near-real-time-using-amazon-comprehend-and-amazon-kinesis-data-firehose/",
        },
      ],
    },
    level: "200",
    language: "Node.js",
    introBox: {
      text: [
        "The purpose of this pattern is to deploy the infrastructure necessary to enable Kinesis Data Firehose data transformation.",
        "Kinesis Data Firehose can invoke a Lambda function to transform incoming source data and deliver the transformed data to destinations. In this architecture, Kinesis Data Firehose then invokes the specified Lambda function asynchronously with each buffered batch using the AWS Lambda synchronous invocation mode. The transformed data is sent from Lambda to Kinesis Data Firehose. Kinesis Data Firehose then sends it to the destination S3 bucket when the specified destination buffering size or buffering interval is reached, whichever happens first.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/firehose-transformation-sam",
        templateFile: "firehose-transformation-sam/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/firehose-transformation-sam",
        projectFolder: "firehose-transformation-sam",
      },
    },
    framework: "CDK",
    description:
      "Transform incoming source data and deliver the transformed data to destinations.",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: [
        "Delete the stack: aws cloudformation delete-stack --stack-name STACK_NAME",
      ],
    },
    authors: [
      {
        name: "Maya Flores",
        linkedin: "maya-m-flores",
        image:
          "https://media-exp1.licdn.com/dms/image/C4E03AQGFaDVfkIJi4g/profile-displayphoto-shrink_200_200/0/1620953260457?e=1671062400&v=beta&t=pVt_BUU-r7MtlMwcOxgXgtaUM2tVRe4CUtlUknM--os",
        bio: "Partner Solutions Architect @ AWS. Serverless enthusiast.",
      },
    ],
    id: "f373e6c4-bb5b-11ed-946c-3e86250ca8d9",
  },
  {
    title: "AWS Glue Job trigger a Lambda Function over Eventbridge Rule",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Getting started with Amazon EventBridge",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-get-started.html",
        },
        {
          text: "AWS Glue Immersion Day",
          link: "https://catalog.us-east-1.prod.workshops.aws/workshops/ee59d21b-4cb8-4b3d-a629-24537cf37bb5/en-US",
        },
        {
          text: "AWS Lambda Developer Guide",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This pattern deploys a Spark Streaming AWS Glue Job, an EventBridge Rule and a Lambda Function that is triggered whenever the Glue Job times out.",
        "The CDK application contains the minimum IAM resources required to run the application.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/glue-eventbridge-lambda-cdk",
        templateFile:
          "glue_eventbridge_lambda_cdk/glue_eventbridge_lambda_cdk_stack.py",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/glue-eventbridge-lambda-cdk",
        projectFolder: "glue-eventbridge-lambda-cdk",
      },
    },
    framework: "CDK",
    description:
      "AWS Glue Job trigger a Lambda Function over Eventbridge Rule after change state to timed out",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "none",
        name: "José Albino Neto",
        linkedin: "https://www.linkedin.com/in/albinoneto/",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-jose-albino-neto.jpg",
        bio: "Cloud Application Architect @ AWS",
      },
    ],
    id: "f373f59c-bb5b-11ed-8adc-3e86250ca8d9",
  },
  {
    title: "AWS IoT to DynamoDB",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS IoT SQL Reference",
          link: "https://docs.aws.amazon.com/iot/latest/developerguide/iot-sql-reference.html?icmpid=docs_iot_console",
        },
        {
          text: "AWS IoT SQL - FROM Clause",
          link: "https://docs.aws.amazon.com/iot/latest/developerguide/iot-sql-from.html",
        },
        {
          text: "AWS IoT Rule Actions",
          link: "https://docs.aws.amazon.com/iot/latest/developerguide/iot-sql-from.html",
        },
        {
          text: "CloudFormation - AWS::IoT::TopicRule",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html",
        },
        {
          text: "CloudFormation - AWS::DynamoDB::Table",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html",
        },
      ],
    },
    level: "200",
    introBox: {
      text: [
        "This sample project demonstrates how to use AWS IoT Topic rules to put incoming event data to DynamoDB. One example demonstrates how to use 'DynamoDB' Action and another example demonstrates how to use 'DynamoDBv2' Action with AWS IoT Topic Rules.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/iot-dynamodb",
        templateFile: "iot-dynamodb/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/iot-dynamodb",
        projectFolder: "iot-dynamodb",
      },
    },
    framework: "SAM",
    description: "Create IoT Topic Rules to put event data to DynamoDB table",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Udit Parikh",
        linkedin: "https://www.linkedin.com/in/parikhudit",
        image: "https://1drv.ms/u/s!AufpCThJxKa2g50banMoavhl7i5EUg",
        bio: "Udit is a AWS 6x Certified Cloud Enthusiast who love building solutions.",
      },
    ],
    id: "f373fb46-bb5b-11ed-86e4-3e86250ca8d9",
  },
  {
    title: "IoT Core to DynamoDB",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon DynamoDBv2 IoT Rule Action",
          link: "https://docs.aws.amazon.com/iot/latest/developerguide/dynamodb-v2-rule-action.html",
        },
        {
          text: "Expiring items using DynamoDB Time to live (TTL)",
          link: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html",
        },
      ],
    },
    level: "200",
    introBox: {
      text: [
        "This pattern uses the DynamoDBv2 action to write all or parts of an MQTT message to an Amazon DynamoDB table.",
        "Each attribute in the payload is written to a separate column in the DynamoDB table. The SQL statement calculates a time to live and puts into the payload when writing to the table.",
        "This pattern deploys one DynamoDB table, one IoT Rule.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/iot-dynamodbv2-ttl-cdk",
        templateFile: "iot-dynamodbv2-ttl-cdk/iot-ddbv2/lib/iot-ddbv2-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/iot-dynamodbv2-ttl-cdk",
        projectFolder: "iot-dynamodbv2-ttl-cdk",
      },
    },
    framework: "CDK",
    description:
      "Create an DynamoDBv2 IoT rule action to ingest data over AWS IoT core and publish to Amazon DynamoDB table.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "@ashujoshi",
        name: "Ashu Joshi",
        linkedin: "ashujoshi",
        image:
          "https://avatars.githubusercontent.com/u/79330125?s=400&u=4802ebc8f24e64031052d3bf95af3dea7920357d&v=4",
        bio: "I am a Principal Architect, AWS Cloud Architect, Full-Stack Developer, Edge AI/ML/IoT Engineer, and Serverless Enthusiast.",
      },
    ],
    id: "f3740226-bb5b-11ed-913e-3e86250ca8d9",
  },
  {
    title: "IoT Core to Kinesis Data Firehose to S3",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS IoT rule actions - Kinesis Data Firehose",
          link: "https://docs.aws.amazon.com/iot/latest/developerguide/kinesis-firehose-rule-action.html",
        },
        {
          text: "Amazon Kinesis Data Firehose - Amazon S3 Desination",
          link: "https://docs.aws.amazon.com/firehose/latest/dev/create-destination.html#create-destination-s3",
        },
        {
          text: "Dynamic Partitioning in Kinesis Data Firehose",
          link: "https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html",
        },
      ],
    },
    level: "200",
    introBox: {
      text: [
        "This pattern contains a sample AWS CDK stack to create an IoT Rule with a Kinesis Data Firehose action with a Amazon S3 bucket as the destination.",
        "When a message is published to the IoT topic defined in the IoT Rule, this message will be delivered to Kinesis Data Firehose stream. The Kinesis Data Firehose stream is configured to deliver to an Amazon S3 bucket using dynamic partitioning.",
        "This pattern deploys one Kinesis Data Firehose stream and one S3 Bucket.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/iot-firehose-s3-cdk",
        templateFile: "iot-firehose-s3-cdk/iot-kfh-s3/lib/iot-kfh-s3-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/iot-firehose-s3-cdk",
        projectFolder: "iot-firehose-s3-cdk",
      },
    },
    framework: "CDK",
    description:
      "Create an IoT rule action to ingest data over AWS IoT core and publish to Amazon Kinesis Data Firehose which buffers the data and writes to an Amazon S3 bucket.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "@ashujoshi",
        name: "Ashu Joshi",
        linkedin: "ashujoshi",
        image:
          "https://avatars.githubusercontent.com/u/79330125?s=400&u=4802ebc8f24e64031052d3bf95af3dea7920357d&v=4",
        bio: "I am a Principal Architect, AWS Cloud Architect, Full-Stack Developer, Edge AI/ML/IoT Engineer, and Serverless Enthusiast.",
      },
    ],
    id: "f374097e-bb5b-11ed-8dc6-3e86250ca8d9",
  },
  {
    title: "IoT Core to Timestream",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon Timestream IoT Rule Action",
          link: "https://docs.aws.amazon.com/iot/latest/developerguide/timestream-rule-action.html",
        },
        {
          text: "Amazon Timestream and AWS IoT Core",
          link: "https://docs.aws.amazon.com/timestream/latest/developerguide/IOT-Core.html",
        },
      ],
    },
    level: "200",
    introBox: {
      text: [
        "This pattern contains a sample AWS CDK stack to create an IoT Rule with a Timestream action. ",
        "When a message is published to the IoT topic defined in the IoT Rule, this message will be delivered to the specified Timestream database and table in the IoT Rule.",
        "This pattern deploys one Timestream database, table, one IoT Rule.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/iot-timestream-cdk",
        templateFile:
          "iot-timestream-cdk/iot-timestream/lib/iot-timestream-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/iot-timestream-cdk",
        projectFolder: "iot-timestream-cdk",
      },
    },
    framework: "CDK",
    description:
      "Create an IoT rule action to ingest data over AWS IoT core and publish to Amazon Timestream database table.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "@ashujoshi",
        name: "Ashu Joshi",
        linkedin: "ashujoshi",
        image:
          "https://avatars.githubusercontent.com/u/79330125?s=400&u=4802ebc8f24e64031052d3bf95af3dea7920357d&v=4",
        bio: "I am a Principal Architect, AWS Cloud Architect, Full-Stack Developer, Edge AI/ML/IoT Engineer, and Serverless Enthusiast.",
      },
    ],
    id: "f374120c-bb5b-11ed-8e3b-3e86250ca8d9",
  },
  {
    title: "Kinesis Video Stream to Rekognition Stream Processor to Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Rekognition Stream Processors",
          link: "https://docs.aws.amazon.com/rekognition/latest/dg/streaming-video.html",
        },
        {
          text: "Amazon Kinesis Video Streams",
          link: "https://aws.amazon.com/kinesis/video-streams",
        },
        {
          text: "Getting started with Rekognition",
          link: "https://docs.aws.amazon.com/rekognition/latest/dg/getting-started.html",
        },
        {
          text: "Connected Home Labels",
          link: "https://docs.aws.amazon.com/rekognition/latest/dg/streaming-video-detect-labels.html",
        },
      ],
    },
    level: "300",
    language: "TypeScript",
    introBox: {
      text: [
        "This sample project demonstrates how to use Rekognition Stream Processors to analyse Kinesis Video Streams to search for faces and then pass the generated metadata to AWS Lambda for further processing/analytics. This pattern is leveraging the native integration between Kinesis Video and Rekognition Stream Processors which means we only need CDK to connect these components",
        "For this sample project, we're going to develop a Rekognition Stream Processor that works to find connected home labels such as 'PERSON' or 'PET' or 'PACKAGE' for the demo, we're simply using 'PERSON' and 'PET' with a confidence threshold of 80.",
        "This pattern deploys the following resources: 1 Kinesis Video Stream, 1 Kinesis Data Stream, 1 Rekogntion Stream Processor, 1 Lambda Function, 1 S3 Bucket and a Rekognition Collection",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/kinesis-video-rekognition-lambda",
        templateFile:
          "kinesis-video-rekognition-lambda/src/lib/kvs-rekognition-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/main/kinesis-video-rekognition-lambda",
        projectFolder: "kinesis-video-rekognition-lambda",
      },
    },
    framework: "CDK",
    description:
      "Create a Rekognition Stream Processor to work on a Kinesis Video Stream and pass the generated events to Lambda for processing or analytics.",
    deploy: {
      text: ["cd src/ && cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cd src/ && cdk destroy</code>."],
    },
    authors: [
      {
        name: "Shardul Vaidya",
        linkedin: "shardul-vaidya",
        image:
          "https://media-exp1.licdn.com/dms/image/C4D03AQHzylyiG6DQkA/profile-displayphoto-shrink_800_800/0/1614623784713?e=1671667200&v=beta&t=hnWLZlw1kp38ZwBeLbHUiFkcnJznwmFqA5MGRLaz8kE",
        bio: "Partner Solutions Architect @ AWS. IoT x Serverless Enthusiast",
      },
    ],
    id: "f3741b1c-bb5b-11ed-996a-3e86250ca8d9",
  },
  {
    title: "Lambda to Athena",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "How can I schedule an Amazon Athena query?",
          link: "https://aws.amazon.com/premiumsupport/knowledge-center/schedule-query-athena/",
        },
        {
          text: "Boto3 client for Athena",
          link: "https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/athena.html#client",
        },
        {
          text: "Creating tables in Athena - Creating tables using AWS Glue or the Athena console",
          link: "https://docs.aws.amazon.com/athena/latest/ug/creating-tables.html#creating-tables-how-to",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This sample project demonstrates how to a Lambda function to invoke a query execution to an Athena database table and fetch them from the same.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-athena-sam",
        templateFile: "lambda-athena-sam/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-athena-sam",
        projectFolder: "lambda-athena-sam",
      },
    },
    framework: "SAM",
    description:
      "Create a Lambda function that queries a prefilled Athena table using boto3 library",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>same delete</code>."],
    },
    authors: [
      {
        name: "Saborni Bhattacharya",
        linkedin: "https://www.linkedin.com/in/saborni-bhattacharya-5b523812a/",
        image:
          "https://drive.google.com/file/d/1AZFquOkafEQRUlrT4hKOtIbt4Cq66SHd/view?usp=sharing",
        bio: "I am Saborni Bhattacharya and I love making technical contents on my YouTube channel - https://www.youtube.com/channel/UCpYl6SiNRBfcZoi4EKqIwog. Here is my blog link as well - https://learnandexplorewithsab.blogspot.com/",
      },
    ],
    id: "f3742b52-bb5b-11ed-954e-3e86250ca8d9",
  },
  {
    videoId: "",
    title: "Lambda to EventBridge",
    services: {
      to: "eventbridge",
      from: "lambda",
    },
    resources: {
      headline: "Additional resources",
      bullets: [
        {
          text: "Integrating Amazon EventBridge into your serverless applications",
          link: "https://aws.amazon.com/blogs/compute/integrating-amazon-eventbridge-into-your-serverless-applications/",
        },
        {
          text: "Use Amazon EventBridge to Build Decoupled, Event-Driven Architectures",
          link: "https://serverlessland.com/learn/eventbridge",
        },
      ],
    },
    level: "100",
    language: "Node.js",
    introBox: {
      text: [
        "The SAM template deploys a Lambda function with permission to publish events to EventBridge. The Lambda function publishes an event to the default bus in EventBridge when invoked.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "https://raw.githubusercontent.com/aws-samples/serverless-patterns/main/lambda-eventbridge/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-eventbridge",
        readmeURL: "",
      },
      payloads: [
        {
          payloadURL: "",
          headline: "",
        },
      ],
    },
    framework: "SAM",
    description: "Create a Lambda function that sends events to EventBridge.",
    deploy: {
      text: ["sam deploy --guided"],
    },
    author: {
      twitter: "jbesw",
      name: "James Beswick",
      imageURL:
        "https://pbs.twimg.com/profile_images/1165718285754753025/OrGcUHER_400x400.jpg",
      headline: "Presented by James Beswick, Developer Advocate",
      bio: "James is a senior developer advocate for Serverless Applications at Amazon Web Services based in the US. Prior to joining AWS Ben worked in a number of different technical roles specializing in workflow Automation and web development.",
    },
    architectureURL:
      "https://serverlessland.s3.amazonaws.com/assets/patterns/patterns-lambda-to-eventbridge.png",
    id: "f37430e8-bb5b-11ed-be43-3e86250ca8d9",
  },
  {
    title: "Sentiment analysis with Lambda and Comprehend",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    services: {
      to: "Comprehend",
      from: "Lambda",
    },
    resources: {
      headline: "Additional resources",
      bullets: [
        {
          text: "Using AWS Lambda and Amazon Comprehend for sentiment analysis",
          link: "https://aws.amazon.com/blogs/compute/using-aws-lambda-and-amazon-comprehend-for-sentiment-analysis/",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This pattern shows how to deploy a SAM template that builds a Lambda function which triggers Comprehend for sentiment analysis.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "https://github.com/aws-samples/serverless-patterns/main/lambda-comprehend/template.yaml",
        templateFile: "lambda-comprehend/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-comprehend",
        projectFolder: "lambda-comprehend",
      },
    },
    framework: "SAM",
    description:
      "Create a Lambda function that calls Comprehend for sentiment analysis via the Boto3 SDK.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: [
        "Delete the stack: aws cloudformation delete-stack --stack-name {STACK_NAME}",
      ],
    },
    author: [
      {
        name: "Tommy Whelan",
        image: "https://phonetool.amazon.com/users/whelat",
        headline: "Presented by Tommy Whelan",
        bio: "Data/ ML Engineer @ AWS",
      },
    ],
    id: "f3743642-bb5b-11ed-a00a-3e86250ca8d9",
  },
  {
    title: "Lambda Destinations to Lambda and SQS",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Introducing AWS Lambda Destinations",
          link: "https://aws.amazon.com/blogs/compute/introducing-aws-lambda-destinations/",
        },
        {
          text: "Asynchronous invocation",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This sample proyect shows how to create a Lambda function that on success sends message to another function and on failure to SQS using Lambda destinations ",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-destinations-cdk",
        templateFile: "cdk/async-functions.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-destinations-cdk",
        projectFolder: "lambda-destinations-cdk",
      },
    },
    framework: "CDK",
    description:
      "Lambda function that on success sends message to another function and on failure to SQS using Lambda destinations",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "https://twitter.com/mavi888uy",
        name: "Marcia Villalba",
        linkedin: "https://www.linkedin.com/in/marciavillalba/",
        image: "https://marcia.dev/images/marcia_profile.jpg",
        bio: "AWS Developer Advocate, AWS Serverless",
      },
    ],
    id: "f3743dea-bb5b-11ed-a39e-3e86250ca8d9",
  },
  {
    title: "AWS Lambda To Amazon DynamoDB",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon DynamoDB",
          link: "https://aws.amazon.com/dynamodb/",
        },
      ],
    },
    level: "300",
    language: "Rust",
    introBox: {
      text: [
        "This pattern creates a Lambda function that persist data into DynamoDB",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-dynamodb-rust",
        templateFile: "template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-dynamodb-rust",
        projectFolder: "lambda-dynamodb-rust",
      },
    },
    framework: "SAM",
    description:
      "This pattern creates a Lambda function that persist data into DynamoDB",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f374488a-bb5b-11ed-af52-3e86250ca8d9",
  },
  {
    title: "AWS Event Source Mapping for Lambda from AmazonMQ RabbitMQ",
    testing: {
      text: ["See the GitHub repo for detailed testing instructions."],
      headline: "Testing",
    },
    resources: {
      headline: "Additional resources",
      bullets: [
        {
          text: "Lambda event filtering",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "Use this code to test out different trigger filters for your Lambda functions. You can use event filtering to control which events Lambda sends to your function for processing. ",
        "Use this template to explore and test how to configure event filtering for AmazonMQ RabbitMQ messages triggering a lambda function. ",
        "The SAM template deploys multiple Lambda consumer functions, an MQ broker and the permissions required to run the application. ",
        "The template also deploys an additional helper Lambda function used for creating the RabbitMQ Queues and pushing messages to it for testing purposes.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-esm-rabbitmq-filters-sam",
        templateFile: "lambda-esm-rabbitmq-filters-sam/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-esm-rabbitmq-filters-sam/",
        projectFolder: "lambda-esm-rabbitmq-filters-sam",
      },
    },
    framework: "SAM",
    description: "Sample Lambda ESM Filter rules for RabbitMQ triggers",
    deploy: {
      text: ["sam build", "sam deploy --guided"],
    },
    cleanup: {
      text: ["1. Delete the stack: <code>sam delete</code>."],
      headline: "Cleanup",
    },
    authors: [
      {
        twitter: "cvetko_cenkov",
        name: "Tsvetko Tsenkov",
        linkedin: "tsvetko-tsenkov-6501413",
        image: "https://avatars.githubusercontent.com/u/27500154?v=4",
        bio: "Tsvetko is a Senior Partner Solutions Architect based out of Atlanta, GA.",
      },
    ],
    id: "f374592e-bb5b-11ed-a34a-3e86250ca8d9",
  },
  {
    title: "AWS Event Source Mapping for Lambda from Amazon SQS",
    testing: {
      text: ["See the GitHub repo for detailed testing instructions."],
      headline: "Testing",
    },
    resources: {
      headline: "Additional resources",
      bullets: [
        {
          text: "Lambda event filtering",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "Use this code to test out different trigger filters for your Lambda functions. You can use event filtering to control which events Lambda sends to your function for processing. You can use this template to explore and test how to configure event filtering for SQS messages triggering a lambda function.",
        "The SAM template deploys multiple Lambda function, multiple SQS queues and the permissions required to run the application. The template also deploys an SNS topic that helps automate the testing of the pattern.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-esm-sqs-filters-sam",
        templateFile: "lambda-esm-sqs-filters-sam/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-esm-sqs-filters-sam/",
        projectFolder: "lambda-esm-sqs-filters-sam",
      },
    },
    framework: "SAM",
    description: "Sample Lambda ESM Filter rules for SQS triggers",
    deploy: {
      text: ["sam build", "sam deploy --guided"],
    },
    cleanup: {
      text: ["1. Delete the stack: <code>sam delete</code>."],
      headline: "Cleanup",
    },
    authors: [
      {
        twitter: "cvetko_cenkov",
        name: "Tsvetko Tsenkov",
        linkedin: "tsvetko-tsenkov-6501413",
        image: "https://avatars.githubusercontent.com/u/27500154?v=4",
        bio: "Tsvetko is a Senior Partner Solutions Architect based out of Atlanta, GA.",
      },
    ],
    id: "f37461b2-bb5b-11ed-805c-3e86250ca8d9",
  },
  {
    title: "Lambda to EventBridge",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Integrating Amazon EventBridge into your serverless applications",
          link: "https://aws.amazon.com/blogs/compute/integrating-amazon-eventbridge-into-your-serverless-applications/",
        },
        {
          text: "Use Amazon EventBridge to Build Decoupled, Event-Driven Architectures",
          link: "https://serverlessland.com/learn/eventbridge",
        },
      ],
    },
    level: "200",
    language: "Java",
    introBox: {
      text: [
        "The SAM template deploys a Lambda function with permission to publish events to EventBridge. The Lambda function publishes an event to the default bus in EventBridge when invoked.",
      ],
      headline: "Create a Lambda function that sends events to EventBridge.",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-eventbridge-java",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-eventbridge-java",
      },
    },
    framework: "SAM",
    description: "Publish events to EventBridge.",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: [
        "Delete the stack: <code>aws cloudformation delete-stack --stack-name STACK_NAME</code>.",
        "Confirm the stack has been deleted: aws cloudformation list-stacks --query \"StackSummaries[?contains(StackName,'STACK_NAME')].StackStatus\"",
      ],
    },
    authors: [
      {
        name: "Steven Cook",
        bio: "Senior Solutions Architect, AWS",
      },
    ],
    id: "f374721a-bb5b-11ed-8639-3e86250ca8d9",
  },
  {
    title: "AWS Lambda to Amazon EventBridge",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon EventBridge",
          link: "https://aws.amazon.com/eventbridge/",
        },
      ],
    },
    level: "300",
    language: "Rust",
    introBox: {
      text: [
        "This pattern creates a Lambda function that publishes an event to EventBridge.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-eventbridge-rust",
        templateFile: "template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-eventbridge-rust",
        projectFolder: "lambda-eventbridge-rust",
      },
    },
    framework: "SAM",
    description:
      "This pattern creates a Lambda function that publishes an event to EventBridge. ",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f37479c2-bb5b-11ed-ac6e-3e86250ca8d9",
  },
  {
    title: "Lambda to EventBridge",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Integrating Amazon EventBridge into your serverless applications",
          link: "https://aws.amazon.com/blogs/compute/integrating-amazon-eventbridge-into-your-serverless-applications/",
        },
        {
          text: "Use Amazon EventBridge to Build Decoupled, Event-Driven Architectures",
          link: "https://serverlessland.com/learn/eventbridge",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "The Serverless template deploys a Lambda function with permission to publish events to EventBridge. The Lambda function publishes an event to the default bus in EventBridge when invoked.",
      ],
      headline: "Create a Lambda function that sends events to EventBridge.",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-eventbridge-sls",
        templateFile: "serverless.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-eventbridge-sls",
        projectFolder: "lambda-eventbridge-sls",
      },
    },
    framework: "Serverless",
    description: "Publish events to EventBridge.",
    deploy: {
      text: ["serverless deploy --verbose"],
    },
    cleanup: {
      text: [
        "Delete the stack: <code>serverless remove --verbose</code>.",
        "Confirm the stack has been deleted: aws cloudformation list-stacks --query \"StackSummaries[?contains(StackName,'STACK_NAME')].StackStatus\"",
      ],
    },
    authors: [
      {
        name: "Alex Nelson",
        bio: "Senior Solutions Architect, AWS",
      },
    ],
    id: "f374814c-bb5b-11ed-8428-3e86250ca8d9",
  },
  {
    title: "AWS Lambda to Amazon EventBridge",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "Integrating Amazon EventBridge into your serverless applications",
          link: "https://aws.amazon.com/blogs/compute/integrating-amazon-eventbridge-into-your-serverless-applications/",
        },
        {
          text: "Use Amazon EventBridge to Build Decoupled, Event-Driven Architectures",
          link: "https://serverlessland.com/learn/eventbridge",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "This demonstrates a lambda function that publishes events to an EventBridge",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-eventbridge-terraform",
        templateFile: "lambda-eventbridge-terraform/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-eventbridge-terraform",
        projectFolder: "lambda-eventbridge-terraform",
      },
    },
    framework: "Terraform",
    description:
      "This pattern creates a Lambda function that publishes an event to EventBridge.",
    deploy: {
      text: ["terraform init", "terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy", "terraform show"],
    },
    authors: [
      {
        name: "Stephen Monaghan",
        linkedin: "https://www.linkedin.com/in/stephen-monaghan-61873194/",
        image: "",
        bio: "Solutions Architect, AWS",
      },
    ],
    id: "f3748a02-bb5b-11ed-9cea-3e86250ca8d9",
  },
  {
    title: "Lambda Extension for SSM Parameter Store with CDK (Typescript)",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Parameter Store Lambda Extension",
          link: "https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This project demonstrates how to access SSM Parameter Store value from Lambda using Lambda extension.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-extension-parameter-store-cdk",
        templateFile:
          "lambda-extension-parameter-store-cdk/lambda-extension-parameter-store-cdk-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-extension-parameter-store-cdk",
        projectFolder: "lambda-extension-parameter-store-cdk",
      },
    },
    framework: "CDK",
    description:
      "Read the Parameter Store value using Parameter Store Extension for Lambda",
    deploy: {
      text: [
        "cdk deploy --all --parameters parameterStoreExtensionArn='[Parameter Store Lambda extension layer ARN]'",
      ],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destory --all</code>."],
    },
    authors: [
      {
        twitter: "@pubudusj",
        name: "Pubudu Jayawardana",
        linkedin: "pubudusj",
        image: "https://avatars.githubusercontent.com/u/1263087",
        bio: "AWS Community Builder in Serverless category. Serverless advocate and enthusisast.",
      },
    ],
    id: "f37492f4-bb5b-11ed-850e-3e86250ca8d9",
  },
  {
    title: "Lambda function URL",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Lambda functions URLs",
          link: "https://aws.amazon.com/blogs/aws/announcing-aws-lambda-function-urls-built-in-https-endpoints-for-single-function-microservices/",
        },
      ],
    },
    level: "200",
    language: "Typescript",
    introBox: {
      text: ["Bootstrap a Lambda fucntion with an function URL"],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-function-url-cdk",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-function-url-cdk",
        projectFolder: "lambda-function-url-cdk",
      },
    },
    framework: "CDK",
    description: "Create a Lambda Function with a Function URL",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "@mavi888uy",
        name: "Marcia Villalba",
        linkedin: "linked-in-ID",
        image: "link-to-your-photo.jpg",
        bio: "Senior Developer Advocate",
      },
    ],
    id: "f3749b82-bb5b-11ed-ad52-3e86250ca8d9",
  },
  {
    title: "Lambda Function URL",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    services: {
      from: "lambda",
    },
    resources: {
      bullets: [
        {
          text: "Creating and managing Lambda function URLs",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/urls-configuration.html",
        },
        {
          text: "Announcing AWS Lambda Function URLs: Built-in HTTPS Endpoints for Single-Function Microservices",
          link: "https://aws.amazon.com/blogs/aws/announcing-aws-lambda-function-urls-built-in-https-endpoints-for-single-function-microservices/",
        },
        {
          text: "AWS Lambda Function URLs with Serverless Framework",
          link: "https://www.serverless.com/blog/aws-lambda-function-urls-with-serverless-framework",
        },
      ],
    },
    level: "100",
    language: "TypeScript",
    introBox: {
      text: [
        "This sample project demonstrates how to create a dedicated, public HTTPS endpoint for your Lambda function.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-function-url-sls",
        templateFile: "lambda-function-url-sls/serverless.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-function-url-sls",
        projectFolder: "lambda-function-url-sls",
      },
    },
    framework: "Serverless Framework",
    description: "Create a Lambda Function URL.",
    deploy: {
      text: ["sls deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sls remove</code>."],
    },
    authors: [
      {
        twitter: "",
        name: "Wayne Greeley",
        linkedin: "",
        image: "",
        bio: "AWS Community Builder",
      },
    ],
    id: "f374abfe-bb5b-11ed-b9b0-3e86250ca8d9",
  },
  {
    title: "Lambda Function URL",
    testing: {
      text: [
        "Use the Terraform Output FunctionURLEndpoint from the `terraform apply` command to test your Lambda function in a browser or API testing tool.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "Overview of Lambda function URLs",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html",
        },
        {
          text: "Creating and managing Lambda function URLs",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/urls-configuration.html",
        },
        {
          text: "Announcing AWS Lambda Function URLs: Built-in HTTPS Endpoints for Single-Function Microservices",
          link: "https://aws.amazon.com/blogs/aws/announcing-aws-lambda-function-urls-built-in-https-endpoints-for-single-function-microservices/",
        },
      ],
    },
    level: "100",
    language: "Node.js",
    introBox: {
      text: [
        "This sample project demonstrates how to create a Lambda Function URL for a Lambda function. You can use Function URLs to create a a dedicated HTTP(S) endpoint for your Lambda function. Use the FunctionEndpointURL when testing your Lambda function.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-function-url-terraform",
        templateFile: "lambda-function-url-terraform/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-function-url-terraform",
        projectFolder: "lambda-function-url-terraform",
      },
    },
    framework: "Terraform",
    description: "Creates a Lambda function with a function URL",
    deploy: {
      text: ["terraform init && terraform apply --auto-approve"],
    },
    cleanup: {
      text: ["terraform destroy --auto-approve."],
    },
    authors: [
      {
        name: "Stephen Monaghan",
        linkedin: "https://www.linkedin.com/in/stephen-monaghan-61873194/",
        image: "",
        bio: "Solutions Architect, AWS",
      },
    ],
    id: "f374b36a-bb5b-11ed-a8a2-3e86250ca8d9",
  },
  {
    title: "Lambda Function URL",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Creating and managing Lambda function URLs",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/urls-configuration.html",
        },
        {
          text: "Announcing AWS Lambda Function URLs: Built-in HTTPS Endpoints for Single-Function Microservices",
          link: "https://aws.amazon.com/blogs/aws/announcing-aws-lambda-function-urls-built-in-https-endpoints-for-single-function-microservices/",
        },
      ],
    },
    level: "200",
    language: "Node.js",
    introBox: {
      text: [
        "This sample project demonstrates how to create a Lambda Function URL for a Lambda function. You can use Function URLs to create a a dedicated HTTP(S) endpoint for your Lambda function. Use the FunctionEndpointURL when testing your Lambda function.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/sfn-athena-cdk-python",
        templateFile: "sfn_athena_cdk_python/sfn_athena_cdk_python_stack.py",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/sfn-athena-cdk-python",
        projectFolder: "sfn-athena-cdk-python",
      },
    },
    framework: "SAM",
    description: "Create a Lambda Function URL.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        twitter: "https://twitter.com/rohanmehta_dev",
        name: "Rohan Mehta",
        linkedin: "https://www.linkedin.com/in/rohan-mehta-1052b570/",
        image:
          "https://internal-cdn.amazon.com/badgephotos.amazon.com/?uid=merohan",
        bio: "Associated Cloud Application Architect at AWS Professional Services",
      },
    ],
    id: "f374b8ba-bb5b-11ed-8555-3e86250ca8d9",
  },
  {
    videoId: "",
    title: "AWS Lambda Function URL to Amazon DynamoDB",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    services: {
      to: "dynamodb",
      from: "lambda",
    },
    resources: {
      headline: "Additional resources",
      bullets: [],
    },
    level: "200",
    language: "Go",
    introBox: {
      text: [
        "When an HTTP `POST` request is sent to the Lambda Function URL endpoint, the AWS Lambda function is invoked and inserts an item into the Amazon DynamoDB table.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-functionurl-dynamodb-sam-go",
        readmeURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-functionurl-dynamodb-sam-go/README.md",
      },
      payloads: [
        {
          payloadURL: "",
          headline: "",
        },
      ],
    },
    framework: "SAM",
    description:
      "Create a Lambda function with a Lambda Function URL that recieves a payload and inserts a record into a DynamoDB table.",
    deploy: {
      text: ["sam build && sam deploy --guided"],
    },
    cleanup: {
      text: ["sam delete"],
    },
    author: {
      twitter: "abhi_tweeter",
      name: "Abhishek Gupta",
      linkedin: "https://www.linkedin.com/in/abhirockzz/",
      imageURL: "https://abhirockzz.github.io/icon.jpg",
      headline:
        "Presented by Abhishek Gupta, Principal Developer Advocate at AWS",
    },
    architectureURL:
      "https://serverlessland.s3.amazonaws.com/assets/patterns/patterns-lambda-to-eventbridge.png",
    id: "f374c008-bb5b-11ed-8dcc-3e86250ca8d9",
  },
  {
    title: "Lambda to Glue to S3",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "About AWS Glue",
          link: "https://aws.amazon.com/glue",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This CDK application deploys a Lambda function, that takes in a payload and trigger a AWS Glue job synchronously.",
        "The AWS glue job then performs the assigned task to convert a CSV file to Parquet and uploads the output file in S3. The application contains the minimum IAM permissions required to run the workflow and Glue job.",
        "This pattern deploys one Lambda Functions, one S3 Buckets and one Glue ETL Job.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-glue-s3",
        templateFile: "lambda-glue-s3/app.py",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-glue-s3",
        projectFolder: "lambda-glue-s3",
      },
    },
    framework: "CDK",
    description:
      "Create a lambda function to invoke a AWS Glue job to run the task and save the output file in S3",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        name: "Harshitha Shashidhar",
        image: "https://phonetool.amazon.com/users/harshihs",
        bio: "Harshitha Shashidhar is an Cloud Application architect who loves to build the serverless applications at scale.",
      },
      {
        name: "Shruti Arora",
        image: "https://phonetool.amazon.com/users/sarora",
        bio: "Shruti is a Cloud Application Architect with AWS Professional Services Team and is passionate about serverless development in Cloud using Data Processing and AI/ML services.",
      },
    ],
    id: "f374c53a-bb5b-11ed-8d54-3e86250ca8d9",
  },
  {
    title: "Event driven vulnerability scanning with EventBridge and Lambda",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "Amazon Inspector Now Scans AWS Lambda Functions for Vulnerabilities",
          link: "https://aws.amazon.com/blogs/aws/amazon-inspector-now-scans-aws-lambda-functions-for-vulnerabilities/",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "Listening to Amazon Inspector events a rule is set up to trigger a downstream consumer (Lambda function). Every scan complete of Lambda function triggers the consumer allowing automation around vulnerability scanning.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-inspector-scans",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/lambda-inspector-scans",
        projectFolder: "lambda-inspector-scans",
      },
    },
    framework: "SAM",
    description:
      "This pattern listens to Amazon Inspector events and triggers downstream consumers",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "David Boyne",
        image: "../assets/images/resources/dboyne.png",
        bio: "Senior Developer Advocate at AWS focusing on EDA and Serverless.",
      },
    ],
    id: "f374ca58-bb5b-11ed-9497-3e86250ca8d9",
  },
  {
    title: "AWS Lambda to AWS IoT Core",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    services: {
      to: "iot",
      from: "lambda",
    },
    resources: {
      bullets: [
        {
          text: "IoT Rule",
          link: "https://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html",
        },
      ],
    },
    level: "200",
    language: "Node.js",
    introBox: {
      text: [
        "This pattern contains a sample AWS SAM stack with an AWS IoT Core thing and a Lambda function.",
        "The Lambda function publishes a message to the IoT topic which you can view in the console.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-iot-sam",
        templateFile: "template.yaml",
        repoURL:
          "ttps://github.com/aws-samples/serverless-patterns/tree/main/lambda-iot-sam",
        projectFolder: "lambda-iot-sam",
      },
    },
    framework: "SAM",
    description: "AWS Lambda function publishing to AWS IoT Core topic.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f374d386-bb5b-11ed-99bb-3e86250ca8d9",
  },
  {
    title: "Lambda to Kinesis Data Stream to Kinesis",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Tutorial: Using AWS Lambda with Amazon Kinesis",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis-example.html",
        },
        {
          text: "Boto3 client for Kinesis",
          link: "https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/kinesis.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This sample project demonstrates how to use serverless producer and consumer for a Kinesis Data Stream",
        "A producer Lambda function puts data into the Kinesis Data Stream while consumer Lambda function gets trigger when there is data in the stream",
        "This pattern deploys two Lambda Functions and one Kinesis Data Stream.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-kinesis-lambda",
        templateFile: "lambda-kinesis-lambda/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-kinesis-lambda",
        projectFolder: "lambda-kinesis-lambda",
      },
    },
    framework: "SAM",
    description:
      "Create a Lambda function to push record to a Kinesis Data Stream and create another function to process those events from the stream.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>same delete</code>."],
    },
    authors: [
      {
        name: "Saborni Bhattacharya",
        linkedin: "https://www.linkedin.com/in/saborni-bhattacharya-5b523812a/",
        image:
          "https://drive.google.com/file/d/1AZFquOkafEQRUlrT4hKOtIbt4Cq66SHd/view?usp=sharing",
        bio: "I am Saborni Bhattacharya and I love making technical contents on my YouTube channel - https://www.youtube.com/channel/UCpYl6SiNRBfcZoi4EKqIwog. Here is my blog link as well - https://learnandexplorewithsab.blogspot.com/",
      },
    ],
    id: "f374dbc4-bb5b-11ed-a67c-3e86250ca8d9",
  },
  {
    videoId: "",
    title: "Lambda to Pinpoint",
    services: {
      to: "eventbridge",
      from: "lambda",
    },
    resources: {
      headline: "Additional resources",
      bullets: [
        {
          text: "Integrating Amazon EventBridge into your serverless applications",
          link: "https://aws.amazon.com/blogs/compute/integrating-amazon-eventbridge-into-your-serverless-applications/",
        },
        {
          text: "Use Amazon EventBridge to Build Decoupled, Event-Driven Architectures",
          link: "https://serverlessland.com/learn/eventbridge",
        },
      ],
    },
    level: "100",
    language: "Node.js",
    introBox: {
      text: [
        "The SAM template deploys a Lambda function with permission to publish events to EventBridge. The Lambda function publishes an event to the default bus in EventBridge when invoked.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "https://raw.githubusercontent.com/aws-samples/serverless-patterns/main/lambda-eventbridge/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-eventbridge",
        readmeURL: "",
      },
      payloads: [
        {
          payloadURL: "",
          headline: "",
        },
      ],
    },
    framework: "SAM",
    description: "Create a Lambda function that sends SMS via Pinpoint.",
    deploy: {
      text: ["sam deploy --guided"],
    },
    author: {
      twitter: "jbesw",
      name: "James Beswick",
      imageURL:
        "https://pbs.twimg.com/profile_images/1165718285754753025/OrGcUHER_400x400.jpg",
      headline: "Presented by James Beswick, Developer Advocate",
      bio: "James is a senior developer advocate for Serverless Applications at Amazon Web Services based in the US. Prior to joining AWS Ben worked in a number of different technical roles specializing in workflow Automation and web development.",
    },
    architectureURL:
      "https://serverlessland.s3.amazonaws.com/assets/patterns/patterns-lambda-to-eventbridge.png",
    id: "f374e434-bb5b-11ed-858a-3e86250ca8d9",
  },
  {
    title: "Lambda PowerShell Runtime",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Introducing the PowerShell custom runtime for AWS Lambda",
          link: "https://aws.amazon.com/blogs/compute/introducing-the-powershell-custom-runtime-for-aws-lambda/",
        },
      ],
    },
    level: "200",
    language: "PowerShell",
    introBox: {
      text: [
        "This pattern deploys an AWS Lambda PowerShell custom runtime for running native PowerShell on Lambda. The pattern includes am example Lambda function in PowerShell.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-powershell-runtime-sam",
        repoURL: "https://github.com/awslabs/aws-lambda-powershell-runtime",
        projectFolder: "lambda-powershell-runtime-sam",
      },
    },
    framework: "SAM",
    description: "Lambda Custom Runtime for PowerShell.",
    deploy: {
      text: ["sam build", "sam deploy --guided"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "@julian_wood",
        name: "Julian Wood",
        linkedin: "woodjulian",
        image: "/assets/images/resources/jrwood.jpg",
        bio: "Julian Wood helps developers and builders learn about and love how serverless technologies can transform the way they build and run applications. I was an infrastructure architect and manager in global enterprises and start-ups for more than 25 years before going all in on serverless at AWS.",
      },
    ],
    id: "f374ee98-bb5b-11ed-83a9-3e86250ca8d9",
  },
  {
    title: "Lambda Secrets Manager with PowerTools",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Lambda Function PowerTools",
          link: "https://awslabs.github.io/aws-lambda-powertools-python/",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This pattern creates an AWS Lambda function to call a protected API endpoint. It is integrated with AWS SecretsManager via AWS PowerTools, and is deployed with the AWS Cloud Development Kit (AWS CDK) in Python.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-powertools-secretsmanager-cdk",
        templateFile: "app.py",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-powertools-secretsmanager-cdk",
        projectFolder: "lambda-powertools-secretsmanager-cdk/src",
      },
    },
    framework: "CDK",
    description:
      "Lambda function that uses PowerTools to get Secrets Manager secret and call an API.",
    deploy: {
      text: ["cdk deploy --all"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy --all</code>."],
    },
    authors: [
      {
        twitter: "",
        name: "Luke Viens",
        linkedin: "",
        image: "",
        bio: "Cloud application developer at AWS.",
      },
      {
        twitter: "@srcsakthivel",
        name: "Sakthivel Chellapparimanam",
        linkedin: "https://www.linkedin.com/in/srcsakthivel",
        image: "",
        bio: "AWS - Cloud Application Architect",
      },
    ],
    id: "f374f7da-bb5b-11ed-bf06-3e86250ca8d9",
  },
  {
    title: "AWS Lambda to Amazon Rekognition",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon Rekognition",
          link: "https://aws.amazon.com/rekognition/",
        },
      ],
    },
    level: "300",
    language: "Rust",
    introBox: {
      text: [
        "Upload an object to the deployed S3 bucket.",
        "The Lambda function is invoked with the event from S3, routed via EventBridget.",
        "The Lambda function uses Amazon Rekognition.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-rekognition-rust",
        templateFile: "lambda-rekognition-rust/template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-rekognition-rust",
        projectFolder: "lambda-rekognition-rust",
      },
    },
    framework: "SAM",
    description:
      "This pattern demonstrates how an event can be used to trigger a Lambda function and run Image analysis using Amazon Rekognition.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f3750838-bb5b-11ed-b298-3e86250ca8d9",
  },
  {
    title:
      "Asynchronous invocation between Lambda functions with S3 when payload size is large",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS Lambda Developer Guide - Invoking functions - Asynchronous invocation",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html",
        },
        {
          text: "AWS Lambda Developer Guide - Lambda Quotas",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#function-configuration-deployment-and-execution",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This sample project demonstrates how to use a Lambda function to invoke another Lambda function asynchronously.",
        "The SAM template provided deploys two Lambda functions. First Lambda function invokes second Lambda function asynchronously.",
        "When the payload size is exceed the invocation payload size quota, then payload is saved to S3 bucket.",
        "S3 bucket `s3:ObjectCreated` event triggers second Lambda function.",
        "Using Lambda function asynchronous invocation saves time and cost.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-s3-async-lambda",
        templateFile: "lambda-s3-async-lambda/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-s3-async-lambda",
        projectFolder: "lambda-s3-async-lambda",
      },
    },
    framework: "SAM",
    description:
      "Create a Lambda function that invoke another Lambda function asynchronously. When the payload exceed Lambda asynchronous invocation payload quota, payload is saved to S3 bucket. Then S3 trigger second asynchronous Lambda function",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Seoyeon Park",
        linkedin: "https://www.linkedin.com/in/seoyeonpark8080",
        image: "https://avatars.githubusercontent.com/SeoyeonPark",
        bio: "Seoyeon is an Associate Application Developer at AWS Professional Services based in Seoul.",
      },
    ],
    id: "f3750f5e-bb5b-11ed-9bf2-3e86250ca8d9",
  },
  {
    title: "AWS Lambda to Amazon S3",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon S3",
          link: "https://aws.amazon.com/s3/",
        },
      ],
    },
    level: "300",
    language: "Rust",
    introBox: {
      text: [
        "This SAM template creates a Lambda function that writes to an S3 bucket when invoked. Once you run `sam deploy --guided`, you will enter the name of the destination bucket for the objects to be stored.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-s3-rust",
        templateFile: "template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-s3-rust",
        projectFolder: "lambda-s3-rust",
      },
    },
    framework: "SAM",
    description:
      "This SAM template creates a Lambda function that writes to an S3 bucket when invoked.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f37518dc-bb5b-11ed-98f8-3e86250ca8d9",
  },
  {
    title: "Lambda Secrets Manager Extension",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS Secrets Manager Lambda Extension Documentation",
          link: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets_lambda.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This sample project demonstrates how to use a Lambda function to retrieve secrets using the Secrets Manager Lambda extension in the us-east-1 region. Other regions may be used by swapping the Secrets Manager layer in the template.yaml file.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/lambda-secrets-manager-extension-python",
        templateFile: "lambda-secrets-manager-extension-python/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-secrets-manager-extension-python",
        projectFolder: "lambda-secrets-manager-extension-python",
      },
    },
    framework: "SAM",
    description:
      "Create a Lambda function that uses the Secrets Manager Lambda Extension.",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Tim Pugh",
        linkedin: "www.linkedin.com/in/pugh",
        image:
          "https://media-exp1.licdn.com/dms/image/C5603AQE_pcOIRvZiZw/profile-displayphoto-shrink_800_800/0/1599620216972?e=1671667200&v=beta&t=c9jJCkwElOTcMvmOmKeSnbfb7VhdR2Skt2EfoAD1yAw",
        bio: "I'm a Serverless Cloud Engineer specializing in serverless event driven systems at AWS and an avid backpacker.",
      },
    ],
    id: "f3752188-bb5b-11ed-9922-3e86250ca8d9",
  },
  {
    title: "Invoke an AWS Step Functions workflow from AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS Step Functions",
          link: "https://aws.amazon.com/step-functions/",
        },
      ],
    },
    level: "300",
    language: "Rust",
    introBox: {
      text: [
        "A Lambda function uses the AWS SDK to asyncronously invoke the Express workflow, passing the event body as a string.",
        "The Express Workflow results are logged in Amazon CloudWatch Logs.",
        "The Lambda function returns the Express Workflow execution ARN and startDate.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-sfn-rust",
        templateFile: "template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-sfn-rust",
        projectFolder: "lambda-sfn-rust",
      },
    },
    framework: "SAM",
    description:
      "The SAM template deploys a Lambda function, a Step Functions Express workflow, a Log group and the IAM resources required to run the application. A Lambda function uses the AWS SDK to asyncronously invoke the Express workflow, passing the event body as a string. The Express Workflow results are logged in Amazon CloudWatch Logs. The Lambda function returns the Express Workflow execution ARN and startDate.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f37536a0-bb5b-11ed-8b4a-3e86250ca8d9",
  },
  {
    title: "Lambda to SNS with filters to Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS SNS",
          link: "https://aws.amazon.com/sns/",
        },
        {
          text: "Amazon SNS message filtering",
          link: "https://docs.aws.amazon.com/sns/latest/dg/sns-message-filtering.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This sample project demonstrates how to use create a SNS with filters and trigger different functions depending on the filtering.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-sns-filters-lambda",
        templateFile: "src/lib/lambda-sns-filters-lambda.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-sns-filters-lambda",
        projectFolder: "lambda-sns-filters-lambda",
      },
    },
    framework: "CDK",
    description:
      "Creates a Lambda function that sends a message to a SNS that contains a filter. One function gets trigger always but the other depends on the filter.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        twitter: "twitter-handle",
        name: "Marcia Villalba",
        linkedin: "linked-in-ID",
        image: "link-to-your-photo.jpg",
        bio: "Your bio.",
      },
    ],
    id: "f3753bfa-bb5b-11ed-a3da-3e86250ca8d9",
  },
  {
    title: "Lambda to SNS to Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS SNS",
          link: "https://aws.amazon.com/sns/",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This sample project demonstrates how to create a Lambda function that sends a message to an SNS topic using AWS SDK. Then another function gets trigger when a message is in the topic.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-sns-lambda-cdk",
        templateFile: "src/lib/lambda-sns-lambda.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-sns-lambda-cdk",
        projectFolder: "lambda-sns-lambda-cdk",
      },
    },
    framework: "CDK",
    description:
      "Creates a Lambda function that sends a message to a SNS and then another function gets triggered when there is a new notification in the topic.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        twitter: "twitter-handle",
        name: "Marcia Villalba",
        linkedin: "linked-in-ID",
        image: "link-to-your-photo.jpg",
        bio: "Your bio.",
      },
    ],
    id: "f3754564-bb5b-11ed-be0f-3e86250ca8d9",
  },
  {
    title: "Lambda to SNS",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {},
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "The Serverless template deploys a SNS topic and a Lambda function that has permission to publish events to the topic.",
      ],
      headline: "Create a Lambda function that sends events to a SNS topic.",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-sns-sls",
        templateFile: "serverless.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-sns-sls",
        projectFolder: "lambda-sns-sls",
      },
    },
    framework: "Serverless",
    description: "Publish events to a SNS topic.",
    deploy: {
      text: ["serverless deploy --verbose"],
    },
    cleanup: {
      text: [
        "Delete the stack: <code>serverless remove --verbose</code>.",
        "Confirm the stack has been deleted: aws cloudformation list-stacks --query \"StackSummaries[?contains(StackName,'STACK_NAME')].StackStatus\"",
      ],
    },
    authors: [
      {
        name: "Alex Nelson",
        bio: "Senior Solutions Architect, AWS",
      },
    ],
    id: "f3754dca-bb5b-11ed-8a16-3e86250ca8d9",
  },
  {
    userId: "jdue2-4ddqs-2ssdf",
    total: "25.99",
    id: "f3755fc2-bb5b-11ed-8ac6-3e86250ca8d9",
  },
  {
    title: "Lambda to SNS",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "Choosing between messaging services for serverless applications",
          link: "https://aws.amazon.com/blogs/compute/choosing-between-messaging-services-for-serverless-applications/",
        },
        {
          text: "Publishing Messages in Amazon SNS",
          link: "https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/sns-examples-publishing-messages.html",
        },
      ],
    },
    level: "100",
    language: "",
    introBox: {
      text: [
        "The template deploys a Lambda function, an SNS topic and the IAM permissions required to run the application. The Lambda function publishes a message to the SNS topic when invoked.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-sns-terraform",
        templateFile: "lambda-sns-terraform/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-sns-terraform",
        projectFolder: "lambda-sns-terraform",
      },
    },
    framework: "Terraform",
    description: "Create a Lambda function that publishes to an SNS topic",
    deploy: {
      text: ["terraform init", "terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy", "terraform show"],
    },
    authors: [
      {
        name: "Stephen Monaghan",
        linkedin: "https://www.linkedin.com/in/stephen-monaghan-61873194/",
        image: "",
        bio: "Solutions Architect, AWS",
      },
    ],
    id: "f375644a-bb5b-11ed-85b9-3e86250ca8d9",
  },
  {
    title: "Lambda to SQS",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Using AWS Lambda with Amazon SQS",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html",
        },
        {
          text: "Choosing between messaging services for serverless applications.",
          link: "https://aws.amazon.com/blogs/compute/choosing-between-messaging-services-for-serverless-applications/",
        },
      ],
    },
    level: "200",
    language: "Java",
    introBox: {
      text: [
        "The SAM template deploys a Lambda function, an SQS queue and the IAM permissions required to run the application. The Lambda function publishes a message to the SQS queue when invoked.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-sqs-java",
      },
    },
    framework: "SAM",
    description: "Create a Lambda function that publishes to an SQS queue",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: [
        "Delete the stack: <code>aws cloudformation delete-stack --stack-name STACK_NAME</code>.",
        "Confirm the stack has been deleted: aws cloudformation list-stacks --query \"StackSummaries[?contains(StackName,'STACK_NAME')].StackStatus\"",
      ],
    },
    authors: [
      {
        twitter: "@jbesw",
        name: "James Beswick",
        linkedin: "jamesbeswick",
        image: "https://serverlessland.com/assets/images/resources/jbes.jpg",
        bio: "I am a self-confessed serverless geek and enjoy helping developers build faster with serverless! I have been software developer and product manager before becoming a Developer Advocate. Ask me anything!",
      },
      {
        name: "Steven Cook",
        bio: "Senior Solutions Architect at AWS.",
      },
    ],
    id: "f3756968-bb5b-11ed-96d4-3e86250ca8d9",
  },
  {
    title: "AWS Lambda to Amazon SQS",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon SQS",
          link: "https://aws.amazon.com/sqs/",
        },
      ],
    },
    level: "300",
    language: "Rust",
    introBox: {
      text: [
        "The Lambda function publishes a message to the SQS queue when invoked.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-sqs-rust-sam",
        templateFile: "template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-sqs-rust-sam",
        projectFolder: "lambda-sqs-rust-sam",
      },
    },
    framework: "SAM",
    description:
      "The SAM template deploys a Lambda function, an SQS queue and the IAM permissions required to run the application. The Lambda function publishes a message to the SQS queue when invoked.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f375703e-bb5b-11ed-8edc-3e86250ca8d9",
  },
  {
    title: "Lambda to SQS",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "Choosing between messaging services for serverless applications",
          link: "https://aws.amazon.com/blogs/compute/choosing-between-messaging-services-for-serverless-applications/",
        },
        {
          text: "Using AWS Lambda with Amazon SQS",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html",
        },
      ],
    },
    level: "100",
    language: "",
    introBox: {
      text: [
        "The template deploys a Lambda function, an SQS queue and the IAM permissions required to run the application. The Lambda function publishes a message to the SQS queue when invoked.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-sqs-terraform",
        templateFile: "lambda-sqs-terraform/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-sqs-terraform",
        projectFolder: "lambda-sqs-terraform",
      },
    },
    framework: "Terraform",
    description: "Create a Lambda function that publishes to an SQS queue",
    deploy: {
      text: ["terraform init", "terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy", "terraform show"],
    },
    authors: [
      {
        name: "Stephen Monaghan",
        linkedin: "https://www.linkedin.com/in/stephen-monaghan-61873194/",
        image: "",
        bio: "Solutions Architect, AWS",
      },
    ],
    id: "f375755c-bb5b-11ed-879a-3e86250ca8d9",
  },
  {
    title: "Lambda to SSM Parameter Store",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Sharing Secrets with AWS Lambda Using AWS Systems Manager Parameter Store",
          link: "https://aws.amazon.com/blogs/compute/sharing-secrets-with-aws-lambda-using-aws-systems-manager-parameter-store/",
        },
        {
          text: "The AWS::SSM::Parameter resource",
          link: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html",
        },
      ],
    },
    level: "200",
    language: "Java",
    introBox: {
      text: [
        'This pattern creates an AWS Lambda function and an AWS Systems Manager Parameter Store parameter. The parameter is added as a function environment variable named "SSMParameterName".',
        "The method can be either GET (retrieve current parameter value) or PUT (update parameter with new value). The body of the event is used to define the new value of the parameter.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-ssm-java",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-ssm-java",
      },
    },
    framework: "SAM",
    description:
      "Create an AWS Lambda function and an AWS Systems Manager Parameter Store parameter.",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: [
        "Delete the stack: <code>sam delete --stack-name STACK_NAME</code>.",
        "Confirm the stack has been deleted: <code>aws cloudformation list-stacks --query \"StackSummaries[?contains(StackName,'STACK_NAME')].StackStatus\"</code>",
      ],
    },
    authors: [
      {
        twitter: "@ServerlessGuy",
        name: "Greg Davis",
        linkedin: "gregtx",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/greg-davis.jpg",
        bio: "I am a Senior Solutions Architect, AWS Cloud Architect, Full-Stack Developer, Database Engineer, Data Integration Architect, and Serverless Enthusiast.",
      },
      {
        name: "Steven Cook",
        bio: "Senior Solutions Architect at AWS.",
      },
    ],
    id: "f3757f34-bb5b-11ed-8673-3e86250ca8d9",
  },
  {
    title: "Lambda to SSM Parameter Store",
    testing: {
      text: [
        "See the README in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "Sharing Secrets with AWS Lambda Using AWS Systems Manager Parameter Store",
          link: "https://aws.amazon.com/blogs/compute/sharing-secrets-with-aws-lambda-using-aws-systems-manager-parameter-store/",
        },
        {
          text: "Restricting access to Systems Manager parameters using IAM policies",
          link: "https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-access.html",
        },
      ],
    },
    level: "100",
    language: "",
    introBox: {
      text: [
        'This pattern creates an AWS Lambda function and an AWS Systems Manager Parameter Store parameter. The parameter is added as a function environment variable named "SSMParameterName".',
        "The method can be either GET (retrieve current parameter value) or PUT (update parameter with new value). The body of the event is used to define the new value of the parameter.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-ssm-parameter-terraform",
        templateFile: "lambda-ssm-parameter-terraform/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-ssm-parameter-terraform",
        projectFolder: "lambda-ssm-parameter-terraform",
      },
    },
    framework: "Terraform",
    description:
      "Creates an AWS Lambda function and an AWS Systems Manager Parameter Store parameter",
    deploy: {
      text: ["terraform init", "terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy", "terraform show"],
    },
    authors: [
      {
        name: "Stephen Monaghan",
        linkedin: "https://www.linkedin.com/in/stephen-monaghan-61873194/",
        image: "",
        bio: "Solutions Architect, AWS",
      },
    ],
    id: "f375889e-bb5b-11ed-85d7-3e86250ca8d9",
  },
  {
    title: "Lambda to samples",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This Serverless Framework project deploys a Lambda function, an SSM Parameter Store entry and the IAM permissions required to run the application. The Lambda function publishes a message to the SQS queue when invoked.",
      ],
      headline: "Create a Lambda function that GETs and PUTs entries in SSM.",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-ssm-sls",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-ssm-sls",
      },
    },
    framework: "Serverless",
    description: "GET and PUT entries in SSM.",
    deploy: {
      text: ["serverless deploy --verbose"],
    },
    cleanup: {
      text: [
        "Delete the stack: <code>serverless remove --verbose</code>.",
        "Confirm the stack has been deleted: aws cloudformation list-stacks --query \"StackSummaries[?contains(StackName,'STACK_NAME')].StackStatus\"",
      ],
    },
    authors: [
      {
        name: "Alex Nelson",
        bio: "Senior Solutions Architect, AWS",
      },
    ],
    id: "f375bada-bb5b-11ed-9224-3e86250ca8d9",
  },
  {
    title: "AWS Lambda to AWS Secrets Manager in Private Subnet",
    testing: {
      text: [
        "See README.md file in the Github repo for detailed testing instructions.",
      ],
    },
    resources: {
      bullets: [
        {
          text: "VPC with public and private subnets (NAT)",
          link: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario2.html",
        },
        {
          text: "AWS services that integrate with AWS PrivateLink",
          link: "https://docs.aws.amazon.com/vpc/latest/privatelink/aws-services-privatelink-support.html",
        },
        {
          text: "Use AWS PrivateLink to Access AWS Lambda Over Private AWS Network",
          link: "https://aws.amazon.com/blogs/aws/new-use-aws-privatelink-to-access-aws-lambda-over-private-aws-network/",
        },
      ],
    },
    level: "400",
    language: "TypeScript",
    introBox: {
      text: [
        "This pattern allows to operate a Lambda function that doesn't have outbound public internet access but have access to Secrets Manager service endpoint.",
        "This pattern deploys one private VPC, one private and isolated subnet, one security group, one Python Lambda function, one VPC Interface Endpoint for Amazon Secrets Manager and one example secret.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/lambda-vpc-interface-endpoints-secrets-manager",
        templateFile:
          "lib/aws-lambda-to-secrets-manager-in-private-subnet-stack.ts",
        repoURL:
          "https://github.com/aws-samples/lambda-vpc-interface-endpoints-secrets-manager",
        projectFolder: "lambda-vpc-interface-endpoints-secrets-manager",
      },
    },
    framework: "CDK",
    description:
      "Deployment of an AWS Lambda function in private and isolated subnets, along with allowing communication with selected AWS service API endpoints using AWS PrivateLink VPC interface endpoints.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "https://twitter.com/eercanayar",
        name: "Emir Ayar",
        linkedin: "https://www.linkedin.com/in/eercanayar/",
        image: "https://eercan.com/emir-ercan-ayar-2022-profile-mid.png",
        bio: "Emir Ayar is a Tech Lead Solutions Architect on the AWS Prototyping Team to help customers build IoT, Edge AI, and Industry 4.0 solutions and implement architectural best practices.",
      },
    ],
    id: "f375c23c-bb5b-11ed-af29-3e86250ca8d9",
  },
  {
    title: "Lambda function in a VPC",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    services: {
      to: "secrets manager",
      from: "lambda",
    },
    resources: {
      bullets: [
        {
          text: "Configuring a Lambda function to access resources in a VPC",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html",
        },
        {
          text: "Access an AWS service using an interface VPC endpoint",
          link: "https://docs.aws.amazon.com/vpc/latest/privatelink/create-interface-endpoint.html",
        },
        {
          text: "AWS VPC Configuration with Serverless Framework",
          link: "https://www.serverless.com/framework/docs/providers/aws/guide/functions#vpc-configuration",
        },
        {
          text: "Three ways to use AWS services from a Lambda in a VPC",
          link: "https://www.alexdebrie.com/posts/aws-lambda-vpc/",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This sample project demonstrates how to create a Lambda function in a VPC and only granting access to Secrets Manager via a VPC endpoint.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-vpc-secrets-sls",
        templateFile: "lambda-vpc-secrets-sls/serverless.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-vpc-secrets-sls",
        projectFolder: "lambda-vpc-secrets-sls",
      },
    },
    framework: "Serverless Framework",
    description:
      "Create a Lambda Function in a VPC with secure access to Secrets Manager.",
    deploy: {
      text: ["sls deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sls remove</code>."],
    },
    authors: [
      {
        twitter: "",
        name: "Wayne Greeley",
        linkedin: "",
        image: "",
        bio: "AWS Community Builder",
      },
    ],
    id: "f375ca52-bb5b-11ed-a3ca-3e86250ca8d9",
  },
  {
    title: "Lambda Web Adapter with Function URL",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Lambda Web Adapter Github project",
          link: "https://github.com/awslabs/aws-lambda-web-adapter",
        },
        {
          text: "Is lift and shift migration Lambda possible? Demo with Node-Express app",
          link: "https://youtu.be/MvVaFPCdiZY",
        },
      ],
    },
    level: "200",
    language: "Typescript",
    introBox: {
      text: [
        "This examples creates a Lambda function that is triggered by a Function URL.",
        "The function contains a NodeJS application - lift and shift - that is wrapped using the Lambda Web Adapter",
        "Lambda Web Adapter is an open source project that allows you to wrap any HTTP web application with a Lambda function",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/lambda-web-adapter-cdk",
        templateFile:
          "lambda-web-adapter-cdk/cdk/stack/lambda-web-adapter-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/lambda-web-adapter-cdk",
        projectFolder: "lambda-web-adapter-cdk",
      },
    },
    framework: "CDK",
    description:
      "Create a Lambda function that contains a NodeJS application and it is invoked by a Function URL",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        name: "Marcia Villalba",
      },
    ],
    id: "f375cfd4-bb5b-11ed-b093-3e86250ca8d9",
  },
  {
    videoId: "",
    title:
      "Amazon Managed Streaming for Apache Kafka (Amazon MSK) to AWS Lambda",
    services: {
      to: "lambda",
      from: "MSK",
    },
    resources: {
      headline: "Additional resources",
      bullets: [
        {
          text: "Using Lambda with Amazon MSK",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html",
        },
        {
          text: "Using Amazon MSK as an event source for AWS Lambda",
          link: "https://aws.amazon.com/blogs/compute/using-amazon-msk-as-an-event-source-for-aws-lambda/",
        },
      ],
    },
    level: "100",
    language: "Node.js",
    introBox: {
      text: [
        "Lambda is a consumer application for your Kafka topic. It processes records from one or more partitions and sends the payload to the target function. Lambda continues to process batches until there are no more messages in the topic.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "https://raw.githubusercontent.com/aws-samples/serverless-patterns/main/msk-lambda/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/msk-lambda",
        readmeURL: "",
      },
      payloads: [
        {
          payloadURL: "",
          headline: "",
        },
      ],
    },
    framework: "SAM",
    description:
      "Create a Lambda function that uses an Amazon MSK Topic as an event source.",
    deploy: {
      text: ["sam deploy --guided"],
    },
    author: {
      twitter: "@ParnabBasak",
      name: "Parnab Basak",
      imageURL: "https://avatars.githubusercontent.com/u/18371977?v=4",
      headline: "Presented by Parnab Basak, AWS Solutions Architect",
      bio: "Parnab is a Solutions Architect for the Service Creation team in AWS. He specializes in creating net new solutions that are cloud native using modern s/w dev practices like Serverless, DevOps & Analytics",
    },
    architectureURL:
      "https://serverlessland.s3.amazonaws.com/assets/patterns/patterns-lambda-to-eventbridge.png",
    id: "f375d8ee-bb5b-11ed-abec-3e86250ca8d9",
  },
  {
    title: "SQS to EventBridge using EventBridge Pipes with normalizer pattern",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "More Enterprise Integration Patterns on AWS Samples",
          link: "https://github.com/aws-samples/amazon-eventbridge-pipes-architectural-patterns",
        },
      ],
    },
    level: "300",
    language: "TypeScript",
    introBox: {
      text: [
        "The normalizer pattern routes each event type through its specific message translator, so that our downstream systems process messages with a unified structure. It is similar to a message translator, but with various source components, which all have different formats for events.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/normalizer-pattern-cdk",
        templateFile: "src/lib/normalizer-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/normalizer-pattern-cdk",
        projectFolder: "normalizer-pattern-cdk",
      },
    },
    framework: "CDK",
    description:
      "This pattern implementes the normalizer pattern using an EventBridge Pipe. This example uses SQS as source and EventBridge as target, but the pattern can be applied to other sources and targets as well.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        name: "Dominik Richter",
        linkedin: "do-richter",
        image: "https://avatars.githubusercontent.com/u/29404931",
        bio: "Solutions Architect at AWS, passionate about event-driven architectures and Serverless.",
      },
    ],
    id: "f375e1ae-bb5b-11ed-9f5c-3e86250ca8d9",
  },
  {
    title:
      "Cross Account Private API Access via Public Application Load Balancer",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Tutorial: How to invoke a Private API",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-private-api-test-invoke-url.html",
        },
        {
          text: "Tutorial: How to access Private API in another account",
          link: "https://aws.amazon.com/premiumsupport/knowledge-center/api-gateway-private-cross-account-vpce/",
        },
      ],
    },
    level: "200",
    language: "HCL",
    introBox: {
      text: [
        "This sample pattern allows users from one account to access their Private REST APIs present in another account over the internet.",
        "This facilitates abstraction of network resources (like load balancers, virtual private clouds, endpoints) & application resources (like lambda, api gateway) into separate individual management accounts.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/public-alb-private-api-terraform",
        templateFile: "public-alb-private-api-terraform/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/",
        projectFolder: "public-alb-private-api-terraform",
      },
    },
    framework: "Terraform",
    description: "Create ",
    deploy: {
      text: ["terraform init", "terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy", "terraform show"],
    },
    authors: [
      {
        name: "Abhishek Agawane",
        linkedin: "https://www.linkedin.com/in/agawabhi/",
        image:
          "https://drive.google.com/file/d/1E-5koDaKEaMUtOctX32I9TLwfh3kgpAq/view?usp=drivesdk",
        bio: "I am a Cloud Support Engineer (Serverless) at AWS",
      },
    ],
    id: "f375f5a4-bb5b-11ed-a641-3e86250ca8d9",
  },
  {
    title: "Same/Cross Account Private API Access via Public Load Balancer",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Tutorial: How to invoke a Private API",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-private-api-test-invoke-url.html",
        },
        {
          text: "Tutorial: How to access Private API in another account",
          link: "https://aws.amazon.com/premiumsupport/knowledge-center/api-gateway-private-cross-account-vpce/",
        },
      ],
    },
    level: "200",
    language: "HCL",
    introBox: {
      text: [
        "This sample pattern allows users from one account to access their Private REST APIs present in same/cross account over the internet.",
        "This facilitates abstraction of network resources (like load balancers, virtual private clouds, endpoints) & application resources (like lambda, api gateway) into separate individual management accounts.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/public-nlb-or-alb-private-api-cfn",
        templateFile: "public-nlb-or-alb-private-api-cfn/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/",
        projectFolder: "public-nlb-or-alb-private-api-cfn",
      },
    },
    framework: "Serverless",
    description: "Create ",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: ["sam delete --stack-name <stackname>"],
    },
    authors: [
      {
        name: "Shivam Rajawat",
        linkedin: "shivam-rajawat-a42b68124",
        image:
          "https://drive.google.com/file/d/1q872K5V1RKFHCrkwGSssWNeIwug6ZLxO/view",
        bio: "I am a Cloud Support Engineer (Serverless) at AWS",
      },
    ],
    id: "f375faf4-bb5b-11ed-9cee-3e86250ca8d9",
  },
  {
    title: "S3 to EventBridge",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Reducing custom code by using advanced rules in Amazon EventBridge",
          link: "https://aws.amazon.com/blogs/compute/reducing-custom-code-by-using-advanced-rules-in-amazon-eventbridge/",
        },
        {
          text: "Use Amazon EventBridge to Build Decoupled, Event-Driven Architectures",
          link: "https://serverlessland.com/learn/eventbridge",
        },
      ],
    },
    level: "200",
    language: "Java",
    introBox: {
      text: [
        "The SAM template deploys an S3 bucket that publishes events to Amazon EventBridge, and sets up a Lambda function to show how to consume these events via an EventBridge rule. It deploys the the IAM resources required to run the application.",
        "EventBridge consumes events directly from S3 buckets when the NoticationConfiguration is enabled, as shown in the template.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/s3-eventbridge-direct-java",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/s3-eventbridge-direct-java",
      },
    },
    framework: "SAM",
    description: "Creates an S3 bucket that publishes events to EventBridge.",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        twitter: "@jbesw",
        name: "James Beswick",
        linkedin: "jamesbeswick",
        image: "https://serverlessland.com/assets/images/resources/jbes.jpg",
        bio: "I am a self-confessed serverless geek and enjoy helping developers build faster with serverless! I have been software developer and product manager before becoming a Developer Advocate. Ask me anything!",
      },
      {
        name: "Steven Cook",
        bio: "Senior Solutions Architect at AWS.",
      },
    ],
    id: "f376042c-bb5b-11ed-8627-3e86250ca8d9",
  },
  {
    title: "AWS S3 to AWS EventBridge to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS S3 Event Notifications with EventBridge",
          link: "https://aws.amazon.com/blogs/aws/new-use-amazon-s3-event-notifications-with-amazon-eventbridge/",
        },
        {
          text: "Using EventBridge with S3",
          link: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventBridge.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This pattern contains a sample AWS Cloud Development Kit (AWS CDK) template for creating an AWS S3 bucket with AWS EventBridge notifications turned on",
        "All S3 events in this bucket is sent to AWS EventBridge",
        "This CDK template also deploys a AWS Lambda function which will process the event sent to AWS EventBridge and create a tag for the S3 object that was created",
        "An AWS EventBridge rule is also created to send only the Object Created event of the bucket to the Lambda function",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/s3-eventbridge-lambda-cdk",
        templateFile:
          "s3-eventbridge-lambda-cdk/cdk/stack/s3-eventbridge-lambda-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/s3-eventbridge-lambda-cdk",
        projectFolder: "s3-eventbridge-lambda-cdk",
      },
    },
    framework: "CDK",
    description:
      "Create a S3 bucket with EventBridge notifications enabled and send S3 events to AWS Lambda.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        name: "Arun Thangaraj",
        linkedin: "www.linkedin.com/in/arunvthangaraj",
        image: "link-to-your-photo.jpg",
        bio: "Arun is a Cloud Application Architect at AWS Professional Services based out of Dallas, TX.",
      },
    ],
    id: "f3762c4a-bb5b-11ed-9da7-3e86250ca8d9",
  },
  {
    title: "Amazon S3 to Amazon EventBridge",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon EventBridge",
          link: "https://aws.amazon.com/eventbridge/",
        },
        {
          text: "Amazon S3",
          link: "https://aws.amazon.com/s3/",
        },
      ],
    },
    level: "300",
    language: "Rust",
    introBox: {
      text: [
        "Upload an object to the deployed S3 bucket.",
        "The Lambda function is invoked with the event from S3, routed via EventBridge.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/s3-eventbridge-rust-sam",
        templateFile: "template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/s3-eventbridge-rust-sam",
        projectFolder: "s3-eventbridge-rust-sam",
      },
    },
    framework: "SAM",
    description:
      "The SAM template deploys an S3 bucket that publishes events to Amazon EventBridge, and sets up a Lambda function to show how to consume these events via an EventBridge rule. It deploys the the IAM resources required to run the application.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f3763384-bb5b-11ed-94f4-3e86250ca8d9",
  },
  {
    title: "S3 to EventBridge to Step Functions",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Detecting labels in an image - Amazon Rekognition Developer Guide",
          link: "https://docs.aws.amazon.com/rekognition/latest/dg/labels-detect-labels-image.html",
        },
        {
          text: "AWS SDK service integrations - AWS Step Functions Developer Guide",
          link: "https://docs.aws.amazon.com/step-functions/latest/dg/supported-services-awssdk.html",
        },
        {
          text: "AWS Step Functions Workshop",
          link: "https://catalog.workshops.aws/stepfunctions/en-US/",
        },
      ],
    },
    level: "200",
    language: "",
    introBox: {
      text: [
        "The SAM template deploys an Amazon S3 bucket that publishes events to Amazon EventBridge, and sets up an AWS Step Functions workflow to show how to consume these events via an EventBridge rule. It deploys the the IAM resources required to run the application.",
        "EventBridge consumes events directly from S3 buckets when the NoticationConfiguration is enabled, as shown in the template.",
        "The template contains a sample Step Functions workflow that detects cats in images uploaded to the Amazon S3 bucket using Amazon Rekognition's DetectLabels API. Replace this workflow with your own state machine.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/s3-eventbridge-sfn",
        templateFile: "s3-eventbridge-sfn/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/s3-eventbridge-sfn",
        projectFolder: "s3-eventbridge-sfn",
      },
    },
    framework: "SAM",
    description:
      "Uses EventBridge to trigger a Step Functions workflow each time an object is uploaded to S3.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "pvogel_",
        name: "Pascal Vogel",
        linkedin: "pascal-vogel",
        image: "https://avatars.githubusercontent.com/u/100202393?v=4",
        bio: "Pascal Vogel is an Associate Solutions Architect at Amazon Web Services (AWS).",
      },
    ],
    id: "f3763906-bb5b-11ed-a321-3e86250ca8d9",
  },
  {
    title: "S3 to MediaCovert via AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Video on Demand on AWS",
          link: "https://aws.amazon.com/solutions/implementations/video-on-demand-on-aws/",
        },
        {
          text: "AWS Elemental Media Convert",
          link: "https://aws.amazon.com/mediaconvert/",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This sample project demonstrates how to use Lambda for triggering trans-codification jobs on AWS Elemental MediaCovert. This pattern leverages the integration between Amazon S3 and AWS Lambda for triggering Lambda functions",
        "Each time you upload a video file to the input S3 bucket, a Lambda function is triggered. The function gets invocation event, process it, and creates a job in AWS Elemental MediaConverter. The settings of the job are in the job.json file which is part of the lambda deployment package.",
        "The output of the job is a transcoded video which is saved in the output S3 bucket.",
        "This pattern deploys two S3 buckets, one AWS Lambda function and the required IAM Roles for making AWS Lambda capable of creating AWS Elemental MediaConvert jobs and write logs in Amazon CloudWatch Logs. AWS Lambda function is written in Python 3.9.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/s3-lambda-mediaconvert",
        templateFile: "template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/s3-lambda-mediaconvert",
        projectFolder: "s3-lambda-mediaconvert",
      },
    },
    framework: "SAM",
    description:
      "Automate the trans-codification of new video files on Amazon S3, leveraging AWS Lambda and AWS Elemental MediaConvert. The transcoded video will go to another S3 bucket for future streaming or further processing.",
    deploy: {
      text: ["sam deploy --guided --capabilities CAPABILITY_NAMED_IAM"],
    },
    cleanup: {
      text: [
        "Delete the stack: <code>sam delete</code>.",
        "See the Github repo for detailed cleanup instructions.",
      ],
    },
    authors: [
      {
        twitter: "@aryam_gl",
        name: "Aryam Gutierrez",
        linkedin: "aryaml",
        image: "https://d38h74djm40icj.cloudfront.net/agutierrezl-image.png",
        bio: "Aryam is a Solutions Architect at Amazon Web Service based in Spain",
      },
    ],
    id: "f37641e4-bb5b-11ed-8ca9-3e86250ca8d9",
  },
  {
    title: "S3 to Lambda to Rekognition",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon Rekognition",
          link: "https://docs.aws.amazon.com/rekognition/latest/dg/what-is.html",
        },
        {
          text: "Amazon Rekognition Face Indexing",
          link: "https://docs.aws.amazon.com/rekognition/latest/dg/add-faces-to-collection-procedure.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This project demonstrates how to index a face in Amazon Rekognition faces collection.",
        "Once a image with a headshot uploaded into S3 bucket, a Lambda function is triggered to index the face in the image in a Amazon Rekognition faces collection.",
        "Image name is used as the ExternalImageId within the faces collection. This is implemented with CDK (Typescript)",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/s3-lambda-rekognition-cdk",
        templateFile:
          "s3-lambda-rekognition-cdk/s3-lambda-rekognition-cdk-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/s3-lambda-rekognition-cdk",
        projectFolder: "s3-lambda-rekognition-cdk",
      },
    },
    framework: "CDK",
    description:
      "Use Amazon Rekognition to index a face in a Rekognition faces collection.",
    deploy: {
      text: ["cdk deploy --all'"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destory --all</code>."],
    },
    authors: [
      {
        twitter: "@pubudusj",
        name: "Pubudu Jayawardana",
        linkedin: "pubudusj",
        image: "https://avatars.githubusercontent.com/u/1263087",
        bio: "AWS Community Builder in Serverless category. Serverless advocate and enthusiast.",
      },
    ],
    id: "f3764bb2-bb5b-11ed-a04e-3e86250ca8d9",
  },
  {
    title:
      "Amazon S3 integration with AWS Lambda to send email notifications about the object",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Using AWS Lambda with Amazon S3",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html",
        },
        {
          test: "AWS Lambda - the Basics",
          link: "https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/aws-lambdathe-basics.html",
        },
        {
          text: "How do I send email using Lambda and Amazon SES",
          link: "https://aws.amazon.com/premiumsupport/knowledge-center/lambda-send-email-ses/",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This template deploys a AWS Lambda Function and Amazon S3 bucket with the required IAM resources to run the application",
        "The Lambda Function consumes **ObjectCreated** events from an Amazon S3 bucket",
        "Further, Lambda code checks the object size if the uploded file size is <= 25MB then the object will be attached to the email for higher payloads Lambda generates a presigned URL and generates short URL which will be attached to the email",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/s3-lambda-ses-terraform",
        templateFile: "s3-lambda-ses-terraform/deploy.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/s3-lambda-ses-terraform",
        projectFolder: "s3-lambda-ses-terraform",
      },
    },
    framework: "terraform",
    description:
      "This pattern creates an Amazon API Gateway HTTP API and an AWS Lambda function.",
    deploy: {
      text: ["terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy"],
    },
    authors: [
      {
        name: "Akhil Deshneni",
        bio: "I am a Cloud Support Associate at AWS",
      },
    ],
    id: "f3765a30-bb5b-11ed-bda5-3e86250ca8d9",
  },
  {
    title: "S3 to Lambda to Transcribe",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Using an Amazon S3 trigger to invoke a Lambda function",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/with-s3-example.html",
        },
        {
          text: "Guidelines and quotas - Amazon Transcribe",
          link: "https://docs.aws.amazon.com/transcribe/latest/dg/limits-guidelines.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This pattern contains a sample AWS Cloud Development Kit (AWS CDK) template that deploys a Lambda Function with an S3 object created trigger to start an Amazon Transcribe job and place the results in another S3 bucket.",
        "This pattern deploys one Lambda Function and two S3 Buckets.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/s3-lambda-transcribe-cdk",
        templateFile: "s3-lambda-transcribe-cdk/s3_lambda_transcribe_cdk.py",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/s3-lambda-transcribe-cdk",
        projectFolder: "s3-lambda-transcribe-cdk",
      },
    },
    framework: "CDK",
    description:
      "Create a Lambda with an S3 object created trigger that starts an Amazon Transcibe job and puts the results in anoter S3 Bucket",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        name: "Davonte Blakely",
        linkedin: "https://www.linkedin.com/in/davonte-blakely-ab3028171/",
        image:
          "https://media-exp1.licdn.com/dms/image/C4D03AQGLZ2P84tYXvg/profile-displayphoto-shrink_800_800/0/1611861641822?e=1666224000&v=beta&t=h1OihmKSYq4sCP3fCaSvbyTVqdMPiJfVq_Bmxd8Hsss",
        bio: "Davonte is an Associate Cloud Developer with Amazon Web Services",
      },
    ],
    id: "f37663b8-bb5b-11ed-ba62-3e86250ca8d9",
  },
  {
    title: "S3 replication to multiple S3 buckets with CDK",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "S3 Object Replication",
          link: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This sample project demonstrates how to replicate data on S3 bucket in to multiple S3 buckets.",
        "Filers are used to control to replicate data in to separate S3 buckets. Implemented with CDK (TypeScript)",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/s3-s3-replication-cdk",
        templateFile: "s3-s3-replication-cdk/s3-s3-replication-cdk-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/s3-s3-replication-cdk",
        projectFolder: "s3-s3-replication-cdk",
      },
    },
    framework: "CDK",
    description:
      "Replicate a S3 bucket to multiple S3 buckets. Implemented in CDK",
    deploy: {
      text: ["cdk deploy --all"],
    },
    cleanup: {
      text: ["See the Github repo for deleting instructions."],
    },
    authors: [
      {
        twitter: "@pubudusj",
        name: "Pubudu Jayawardana",
        linkedin: "pubudusj",
        image: "https://avatars.githubusercontent.com/u/1263087",
        bio: "AWS Community Builder in Serverless category. Serverless advocate and enthusiast.",
      },
    ],
    id: "f376850a-bb5b-11ed-b9ab-3e86250ca8d9",
  },
  {
    title: "S3 to EventBridge Claim Check pattern with event enrichment",
    resources: {
      bullets: [
        {
          text: "Claim Check messaging pattern",
          link: "https://www.enterpriseintegrationpatterns.com/StoreInLibrary.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This pattern will run when a file is uploaded to an s3 bucket. The events are transformed into domain events and presigned urls are generated for the content in the buckets for downstream consumers.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/s3-to-eventbridge-claim-check-pattern",
        templateFile:
          "lib/s3-to-eventbridge-automatic-claim-check-pattern-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/s3-to-eventbridge-claim-check-pattern",
        projectFolder: "s3-to-eventbridge-claim-check-pattern",
      },
    },
    framework: "CDK",
    description:
      "Event-driven claim check pattern using S3 and EventBridge. Using Lambda to transform events into domain events with enrichment and presgined urls.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        name: "David Boyne",
        image: "../assets/images/resources/dboyne.jpg",
        bio: "Senior Developer Advocate at AWS focusing on EDA and Serverless.",
      },
    ],
    id: "f3768e24-bb5b-11ed-90fe-3e86250ca8d9",
  },
  {
    title: "AWS S3 Trigger to AWS Lambda to AWS Glue workflow",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          test: "AWS Lambda Developer Guide",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
        },
        {
          text: "AWS Glue - What is AWS Glue?",
          link: "https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html",
        },
        {
          text: "AWS boto3 library for Python- Glue",
          link: "https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/glue.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "For cases where we need to process files using Glue jobs, we can use Glue Workflows to orchestrate our Glue jobs and Glue crawlers.",
        "S3 trigger is set up to trigger the Lambda on file upload event. To be able to trigger a Glue workflow with certain parameters, we use AWS Lambda to start glue workflows with parameters.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/s3-trigger-lambda-glue-workflow-terraform",
        templateFile: "sfn_athena_cdk_python/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/s3-trigger-lambda-glue-workflow-terraform",
        projectFolder: "s3-trigger-lambda-glue-workflow-terraform",
      },
    },
    framework: "Terraform",
    description:
      "This pattern creates an s3 bucket trigger that triggers a Lambda function(Whenever file lands), The Lambda function is used for triggering a Glue workflow with input parameters such as file key and bucket names. All elements covered in this pattern are built using Terraform.",
    deploy: {
      text: ["terraform init && terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy"],
    },
    authors: [
      {
        twitter: "akrish82",
        name: "Ananth Tirumanur",
        linkedin: "https://www.linkedin.com/in/ananthtirumanur",
        image: "https://avatars.githubusercontent.com/u/105808773?v=4",
        bio: "AWS Data Architect | Demonstrated leadership in Data related Technical Programs. 16 years of Proficiency in data management, analytics and visualization, data flow, data integrity, data automation and data science.",
      },
    ],
    id: "f3769766-bb5b-11ed-956a-3e86250ca8d9",
  },
  {
    title: "API Gateway and Lambda to generate S3 pre-signed URLS",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "S3 Presigned URLs documentation",
          link: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html",
        },
        {
          text: "Blog post on S3 pre-signed URLs",
          link: "https://aws.amazon.com/blogs/compute/uploading-to-amazon-s3-directly-from-a-web-or-mobile-application/ ",
        },
      ],
    },
    level: "300",
    language: "TypeScript",
    introBox: {
      text: [
        "Web and mobile applications often provide their users ability to upload files, documents or pictures. A good and now common practice is to upload them directly to Amazon S3, using pre-signed URLs. To generate this pre-signed URL, you have to use the AWS SDK (generally in an AWS Lambda function), and expose the feature to the client through an API (with Amazon API Gateway).",
        "The infrastructure deployed by this pattern contains an API Gateway REST API, exposing a Lambda function that will generate the S3 pre-signed URL and return it to the client. The API, the Lambda function and the S3 bucket handle CORS headers so that there is no error on the client side. The API is protected by a Cognito User Pool.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/s3-upload-presignedurl-api-cdk-ts",
        templateFile: "s3-upload-presignedurl-api-cdk.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/s3-upload-presignedurl-api-cdk-ts",
        projectFolder: "bin",
      },
    },
    framework: "CDK",
    description:
      "Secured REST API that expose a Lambda function to generate S3 pre-signed URLs",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy</code>."],
    },
    authors: [
      {
        twitter: "jeromevdl",
        name: "Jerome Van Der Linden",
        linkedin: "jeromevdl",
        image: "https://avatars.githubusercontent.com/u/117538?v=4",
        bio: "Jerome is a Solutions Architect Builder at AWS. Passionate about building stuff using the AWS services, and especially the serverless ones.",
      },
    ],
    id: "f376a648-bb5b-11ed-b846-3e86250ca8d9",
  },
  {
    title: "Step Functions workflow to invoke ECS tasks that read from S3",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS Step Functions",
          link: "https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html",
        },
        {
          text: "Amazon Elastic Container Service",
          link: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html",
        },
        {
          text: "Amazon Simple Storage Service",
          link: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This project demonstrates how to implement a State Function State machine to invoke parallel ECS tasks in fargate with input parameters to read files from S3 in order to process them in parallel.",
        "The template is implemented with SAM. The ECS task is implemented in python as a pattern reference but can be implemented in any language.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/sfn-ecs-sam",
        templateFile: "template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/sfn-ecs-sam",
        projectFolder: "sfn-ecs-sam",
      },
    },
    framework: "SAM",
    description:
      "Step Functions - ECS Integration to run multiple ECS tasks in parallel",
    deploy: {
      text: ["sam deploy --guided'"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Praveen Koorse",
        linkedin: "praveenkoorse",
        image: "https://avatars.githubusercontent.com/u/124192288",
        bio: "AWS Community Builder in Serverless category. Serverless advocate and enthusiast.",
      },
    ],
    id: "f376af4e-bb5b-11ed-b934-3e86250ca8d9",
  },
  {
    title: "Invoke cross account Lambda function directly via Step function",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Tutorial - How to invoke a Lambda function from Step function",
          link: "https://docs.aws.amazon.com/step-functions/latest/dg/connect-lambda.html",
        },
        {
          text: "Orchestration examples",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/services-stepfunctions.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This sample pattern allows users from one account to invoke their Lambda function present in a different account via Step function and retrieve the desired output.",
        "This is highly efficient and useful when it comes to pulling cross account data all in one place.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/step-function-lambda-function-crossaccount-terraform",
        templateFile:
          "step-function-lambda-function-crossaccount-terraform/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/step-function-lambda-function-crossaccount-terraform",
        projectFolder: "step-function-lambda-function-crossaccount-terraform",
      },
    },
    framework: "Terraform",
    description:
      "Create a Step function which invokes cross account Lambda function",
    deploy: {
      text: ["terraform init", "terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy", "terraform show"],
    },
    authors: [
      {
        twitter: "",
        name: "Shivam Rajawat",
        linkedin: "shivam-rajawat-a42b68124",
        image:
          "https://drive.google.com/file/d/1q872K5V1RKFHCrkwGSssWNeIwug6ZLxO/view",
        bio: "I am a Cloud Support Engineer (Serverless) at AWS and I love to solve complex problems.",
      },
    ],
    id: "f376b7e6-bb5b-11ed-88ac-3e86250ca8d9",
  },
  {
    title: "Invoke cross account Lambda function directly via Step function",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Tutorial - How to invoke a Lambda function from Step function",
          link: "https://docs.aws.amazon.com/step-functions/latest/dg/connect-lambda.html",
        },
        {
          text: "Orchestration examples",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/services-stepfunctions.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This sample pattern allows users from one account to invoke their Lambda function present in a different account via Step function and retrieve the desired output.",
        "This is highly efficient and useful when it comes to pulling cross account data all in one place.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/sfn-lambda-function-crossaccount",
        templateFile: "sfn-lambda-function-crossaccount/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/sfn-lambda-function-crossaccount",
        projectFolder: "sfn-lambda-function-crossaccount",
      },
    },
    framework: "CDK",
    description:
      "Create a Step function which invokes cross account Lambda function",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: ["Delete the stack: sam delete --stack-name <stackname>"],
    },
    authors: [
      {
        name: "Shivam Rajawat",
        linkedin: "shivam-rajawat-a42b68124",
        image:
          "https://drive.google.com/file/d/1UE7cvxfb-fYCdl6Hjo9klOKRjjfMk7k-/view",
        bio: "I am a Cloud Support Engineer (Serverless) at AWS and I love to solve complex problems.",
      },
    ],
    id: "f376dd98-bb5b-11ed-96a8-3e86250ca8d9",
  },
  {
    title: "Step Function to Lambda to Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Creating a Step Functions State Machine That Uses Lambda",
          link: "https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-creating-lambda-state-machine.html",
        },
        {
          text: "Handling Error Conditions Using a Step Functions State Machine",
          link: "https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-handling-error-conditions.html",
        },
        {
          text: "AWS CLI start-execution",
          link: "https://docs.aws.amazon.com/cli/latest/reference/stepfunctions/start-execution.html#start-execution",
        },
        {
          text: "Create a Step Functions State Machine Using AWS SAM",
          link: "https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-state-machine-using-sam.html",
        },
      ],
    },
    level: "200",
    language: "NodeJS",
    introBox: {
      text: [
        "This sample project demonstrates how to use a state machine to orchestrate the execution of two Lambda functions",
        "Once the state machine is executed the first Lambda function gets invoked. The output from this function is used as an event to trigger another Lambda function",
        "This pattern deploys a State Machine and two Lambda Functions.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/sfn-lambda-lambda",
        templateFile: "sfn-lambda-lambda/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/sfn-lambda-lambda",
        projectFolder: "sfn-lambda-lambda",
      },
    },
    framework: "SAM",
    description:
      "Create Step Functions Standard Workflow that orchestrates two Lambda functions",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>same delete</code>."],
    },
    authors: [
      {
        name: "Saborni Bhattacharya",
        linkedin: "https://www.linkedin.com/in/saborni-bhattacharya-5b523812a/",
        image:
          "https://drive.google.com/file/d/1AZFquOkafEQRUlrT4hKOtIbt4Cq66SHd/view?usp=sharing",
        bio: "I am Saborni Bhattacharya and I love making technical contents on my YouTube channel - https://www.youtube.com/channel/UCpYl6SiNRBfcZoi4EKqIwog. Here is my blog link as well - https://learnandexplorewithsab.blogspot.com/",
      },
    ],
    id: "f376e4fa-bb5b-11ed-88e5-3e86250ca8d9",
  },
  {
    title: "Start Step Function execution within Step Function",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS Step Functions",
          link: "https://aws.amazon.com/step-functions/getting-started/",
        },
        {
          text: "AWS Step Functions SDK integrations",
          link: "https://docs.aws.amazon.com/step-functions/latest/dg/supported-services-awssdk.html",
        },
        {
          text: "AWS Step Functions Executions as an Integrated Service",
          link: "https://docs.aws.amazon.com/step-functions/latest/dg/connect-stepfunctions.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This sample project demonstrates how to create 2 State Machines and call one within the other's workflow.",
        "Here callback pattern is used to hold the parent State Machine's execution until the child State Machine's execution is completed.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/sfn-to-sfn-cdk",
        templateFile: "sfn-to-sfn-cdk/sfn-to-sfn-cdk-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/sfn-to-sfn-cdk",
        projectFolder: "sfn-to-sfn-cdk",
      },
    },
    framework: "CDK",
    description:
      "Start a Step Function execution as a step in another Step Function.",
    deploy: {
      text: ["cdk deploy --all"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destroy --all</code>."],
    },
    authors: [
      {
        twitter: "@pubudusj",
        name: "Pubudu Jayawardana",
        linkedin: "pubudusj",
        image: "https://avatars.githubusercontent.com/u/1263087",
        bio: "AWS Community Builder in Serverless category. Serverless advocate and enthusiast.",
      },
    ],
    id: "f376eac2-bb5b-11ed-83c2-3e86250ca8d9",
  },
  {
    title: "SNS Archiving/Analytics with Kinesis Firehose Fanout",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Fanout to Kinesis Data Firehose delivery streams",
          link: "https://docs.amazonaws.cn/en_us/sns/latest/dg/sns-firehose-as-subscriber.html",
        },
        {
          text: "Introducing message archiving and analytics for Amazon SNS",
          link: "https://aws.amazon.com/blogs/compute/introducing-message-archiving-and-analytics-for-amazon-sns/",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "The purpose of this pattern is to deploy the infrastructure necessary to use Kinesis Data Firehose to fanout SNS messages to storage and analytics services.",
        "Through Kinesis Data Firehose delivery streams, you can fan out Amazon SNS notifications to Amazon Simple Storage Service (Amazon S3), Amazon Redshift, Amazon OpenSearch Service (OpenSearch Service), and to third-party service providers such as Datadog, New Relic, MongoDB, and Splunk.",
        "This pattern delivers SNS messages to Amazon S3 for archival, compliance, or analytics purposes.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/sns-firehose",
        templateFile: "sns-firehose/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/sns-firehose",
        projectFolder: "sns-firehose",
      },
    },
    framework: "SAM",
    description:
      "Transform incoming source data and deliver the transformed data to destinations.",
    deploy: {
      text: ["sam deploy --guided"],
    },
    cleanup: {
      text: [
        "Delete the stack: aws cloudformation delete-stack --stack-name STACK_NAME",
      ],
    },
    authors: [
      {
        name: "Maya Flores",
        linkedin: "maya-m-flores",
        image:
          "https://media-exp1.licdn.com/dms/image/C4E03AQGFaDVfkIJi4g/profile-displayphoto-shrink_200_200/0/1620953260457?e=1671062400&v=beta&t=pVt_BUU-r7MtlMwcOxgXgtaUM2tVRe4CUtlUknM--os",
        bio: "Partner Solutions Architect @ AWS. Serverless enthusiast.",
      },
    ],
    id: "f376f04e-bb5b-11ed-ab00-3e86250ca8d9",
  },
  {
    title: "Lambda to SNS to SQS to Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS SNS",
          link: "https://aws.amazon.com/sns/",
        },
      ],
    },
    level: "200",
    language: "Typescript",
    introBox: {
      text: [
        "This sample project demonstrates how to create a SNS + SQS system, in which all the messages sent by a publisher are sent to all the consumers, and there is a buffer between the message producer and the consumer. In this way the consumers don't get overload with messages. ",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/sns-sqs-lambda-cdk",
        templateFile: "src/lib/sns-sqs-lambda-cdk.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/sns-sqs-lambda-cdk",
        projectFolder: "sns-sqs-lambda-cdk",
      },
    },
    framework: "CDK",
    description:
      "Creates one Lambda function that sends a message to an SNS topic. That topic sends the message to a SQS queue and finally another Lambda picks the message.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk delete</code>."],
    },
    authors: [
      {
        twitter: "twitter-handle",
        name: "Marcia Villalba",
        linkedin: "linked-in-ID",
        image: "link-to-your-photo.jpg",
        bio: "Your bio.",
      },
    ],
    id: "f376f5b2-bb5b-11ed-b0ab-3e86250ca8d9",
  },
  {
    title: "Amazon SNS to Amazon SQS to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon SNS",
          link: "https://aws.amazon.com/sns/",
        },
        {
          text: "Amazon SQS",
          link: "https://aws.amazon.com/sqs/",
        },
      ],
    },
    level: "300",
    language: "Rust",
    introBox: {
      text: [
        "Send the SNS message.",
        "Then check the logs in Cloudwatch logs.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/sns-sqs-lambda-rust-sam",
        templateFile: "template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/sns-sqs-lambda-rust-sam",
        projectFolder: "sns-sqs-lambda-rust-sam",
      },
    },
    framework: "SAM",
    description:
      "The SAM template deploys a SNS topic and an SQS queue a. The SQS queue is subscribed to the SNS topic. SNS invokes the SQS queue when new messages are available. When messages are sent to the SNS topic, they are delivered as a JSON event payload to the SQS queue. SQS invokes the Lambda function when new messages are available.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f376ff94-bb5b-11ed-80bf-3e86250ca8d9",
  },
  {
    title: "Amazon SQS connected to an Amazon ECS",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS CDK Patterns",
          link: "https://cdkpatterns.com/",
        },
        {
          text: "AWS SQS",
          link: "https://aws.amazon.com/sqs/",
        },
        {
          text: "AWS Fargate",
          link: "https://aws.amazon.com/fargate/",
        },
        {
          text: "AWS ECS",
          link: "https://aws.amazon.com/ecs/",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "It creates an SQS and an ECS cluster, for every message sent to queue a new task is created on the cluster",
        "and the message is consumed by a Python application inside a Docker container.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/sqs-fargate-cdk-python",
        templateFile:
          "sqs-fargate-cdk-python/sqs_fargate_cdk_python/sqs_fargate_cdk_python.py",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/sqs-fargate-cdk-python",
        projectFolder: "sqs-fargate-cdk-python",
      },
    },
    framework: "CDK",
    description:
      "This pattern show how to scale an ECS cluster task that is connected to SQS queue.",
    deploy: {
      text: ["cdk deploy"],
    },
    cleanup: {
      text: ["cdk destroy"],
    },
    authors: [
      {
        twitter: "",
        name: "Gustavo Martim",
        linkedin: "https://www.linkedin.com/in/gumar/",
        image:
          "https://pbs.twimg.com/profile_images/1382662130462306311/Be4jS62J_400x400.jpg",
        bio: "Cloud Application Architect at AWS.",
      },
      {
        twitter: "",
        name: "Mart Noten",
        linkedin: "https://www.linkedin.com/in/martnoten/",
        image:
          "https://media-exp1.licdn.com/dms/image/C5603AQETLKyceFuJnw/profile-displayphoto-shrink_800_800/0/1567630510954?e=2147483647&v=beta&t=CpkrTXviK63-4VLr89iut5lCX-M9SsxE-yTXOl6LBMQ",
        bio: "Consultant, AppDev at AWS.",
      },
    ],
    id: "f3770912-bb5b-11ed-ae69-3e86250ca8d9",
  },
  {
    title: "Amazon SQS to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Amazon SQS",
          link: "https://aws.amazon.com/sqs/",
        },
      ],
    },
    level: "300",
    language: "Rust",
    introBox: {
      text: [
        "Send the SQS message.",
        "Then check the logs in Cloudwatch logs.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/sqs-lambda-rust-sam",
        templateFile: "template.yml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/sqs-lambda-rust-sam",
        projectFolder: "sqs-lambda-rust-sam",
      },
    },
    framework: "SAM",
    description:
      "The SAM template deploys a Lambda function, an SQS queue and the IAM permissions required to run the application. SQS invokes the Lambda function when new messages are available.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "dfrasca80",
        name: "Daniele Frasca",
        linkedin: "daniele-frasca",
        image:
          "https://serverlessland.com/assets/images/resources/contributors/ext-daniele-frasca.jpg",
        headline: "Presented by Daniele Frasca",
        bio: "I am Daniele Frasca serverless enthusiast. I build and architect serverless applications at scale.",
      },
    ],
    id: "f3771eac-bb5b-11ed-9949-3e86250ca8d9",
  },
  {
    title:
      "Integrate Express State Machine with Rest API using StartSyncExecution API call",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Creating a Step Functions API Using API Gateway",
          link: "https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-api-gateway.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This sample project demonstrates how to Integrate Express State Machine with Rest API",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/step-function-sync-rest-api",
        templateFile: "step-function-sync-rest-api/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/step-function-sync-rest-api",
        projectFolder: "step-function-sync-rest-api",
      },
    },
    framework: "SAM",
    description:
      "Using mapping template and StartSyncExecution API call, integrating Express State Machine with Rest API",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        name: "Himanshu Goyal",
        linkedin: "https://www.linkedin.com/in/himanshugoyal20",
        image:
          "https://drive.google.com/file/d/1huHQQHRlYQ3gxrJob9pXlwE5zv5CI996/view?usp=drivesdk",
        bio: "A Serverless Cloud Engineer and technical writer, working towards building efficient and scalable solutions using AWS services.",
      },
    ],
    id: "f3772a28-bb5b-11ed-9d9b-3e86250ca8d9",
  },
  {
    title: "Step Functions to Polly to S3 with CDK (Typescript)",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS Step Functions",
          link: "https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html",
        },
        {
          text: "Amazon Polly",
          link: "https://docs.aws.amazon.com/polly/latest/dg/what-is.html",
        },
        {
          text: "Amazon Polly Synthesis Task",
          link: "https://docs.aws.amazon.com/polly/latest/dg/API_StartSpeechSynthesisTask.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This project demonstrates how to implement a State Function State machine to synthesize given words using Amazon Polly and save each mp3 generated in a S3 bucket.",
        "This is implemented with CDK (Typescript)",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/stepfunction-polly-s3-cdk",
        templateFile:
          "stepfunction-polly-s3-cdk/stepfunction-polly-s3-cdk-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/stepfunction-polly-s3-cdk",
        projectFolder: "stepfunction-polly-s3-cdk",
      },
    },
    framework: "CDK",
    description:
      "Step Functions - Polly SDK integration for text to speech output as mp3 into s3 .",
    deploy: {
      text: ["cdk deploy --all'"],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destory --all</code>."],
    },
    authors: [
      {
        twitter: "@pubudusj",
        name: "Pubudu Jayawardana",
        linkedin: "pubudusj",
        image: "https://avatars.githubusercontent.com/u/1263087",
        bio: "AWS Community Builder in Serverless category. Serverless advocate and enthusiast.",
      },
    ],
    id: "f3773b58-bb5b-11ed-bef5-3e86250ca8d9",
  },
  {
    title: "Step Functions to Amazon SES with CDK (Typescript)",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS Step Functions",
          link: "https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html",
        },
        {
          text: "Amazon SES",
          link: "https://docs.aws.amazon.com/ses/latest/dg/Welcome.html",
        },
      ],
    },
    level: "200",
    language: "TypeScript",
    introBox: {
      text: [
        "This project demonstrates how to implement a State Function State machine to send email with Amazon SES with SDK integrations",
        "This is implemented with CDK (Typescript)",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/stepfunction-ses-cdk",
        templateFile: "stepfunction-ses-cdk/stepfunction-ses-cdk-stack.ts",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/stepfunction-ses-cdk",
        projectFolder: "stepfunction-ses-cdk",
      },
    },
    framework: "CDK",
    description: "Step Functions - SES SDK integration to send email.",
    deploy: {
      text: [
        "cdk deploy --all --parameters sesFromEmail='YOUR_SES_FROM_EMAIL_ADDRESS'",
      ],
    },
    cleanup: {
      text: ["Delete the stack: <code>cdk destory --all</code>."],
    },
    authors: [
      {
        twitter: "@pubudusj",
        name: "Pubudu Jayawardana",
        linkedin: "pubudusj",
        image: "https://avatars.githubusercontent.com/u/1263087",
        bio: "AWS Community Builder in Serverless category. Serverless advocate and enthusiast.",
      },
    ],
    id: "f37740e4-bb5b-11ed-ae0c-3e86250ca8d9",
  },
  {
    title: "Step Functions to EventBridge Scheduler with SAM & Python",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "Introducing Amazon EventBridge Scheduler",
          link: "https://aws.amazon.com/blogs/compute/introducing-amazon-eventbridge-scheduler/",
        },
        {
          text: "Amazon EventBridge Scheduler Docs",
          link: "https://docs.aws.amazon.com/scheduler/latest/UserGuide/what-is-scheduler.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "Creates a one time schedule in EventBridge Scheduler when the Step Functions execution runs.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/stepfunctions-eventbridge-schedule-sam-python",
        templateFile:
          "stepfunctions-eventbridge-schedule-sam-python/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/stepfunctions-eventbridge-schedule-sam-python",
        projectFolder: "stepfunctions-eventbridge-schedule-sam-python",
      },
    },
    framework: "SAM",
    description:
      "Simple pattern that creates a EventBridge Scheduler one time schedule using Step Functions SDK integration",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "@pubudusj",
        name: "Pubudu Jayawardana",
        linkedin: "pubudusj",
        image: "https://avatars.githubusercontent.com/u/1263087",
        bio: "AWS Community Builder in Serverless category. Serverless advocate and enthusiast.",
      },
    ],
    id: "f3774666-bb5b-11ed-9318-3e86250ca8d9",
  },
  {
    title: "Amazon API Gateway (HTTP) to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          test: "Terraform AWS Lambda module",
          link: "https://github.com/terraform-aws-modules/terraform-aws-lambda",
        },
        {
          test: "Terraform AWS Lambda examples",
          link: "https://github.com/terraform-aws-modules/terraform-aws-lambda/tree/master/examples",
        },
        {
          test: "Terraform AWS API Gateway v2 (HTTP/Websocket) module",
          link: "https://github.com/terraform-aws-modules/terraform-aws-apigateway-v2",
        },
        {
          test: "Terraform AWS API Gateway v2 (HTTP/Websocket) examples",
          link: "https://github.com/terraform-aws-modules/terraform-aws-apigateway-v2/tree/master/examples",
        },
        {
          text: "Working with HTTP APIs",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html",
        },
        {
          text: "Working with AWS Lambda proxy integrations for HTTP APIs",
          link: "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html",
        },
        {
          test: "AWS Lambda Developer Guide",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This pattern deploys an Amazon API Gateway (HTTP) with a default route and basic CORS configuration.",
        "The default route is integrated with an AWS Lambda function written in Python.",
        "The function logs the incoming API event (v2) and context object to an Amazon CloudWatch Logs log group and returns basic information about the event to the caller.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/terraform-apigw-http-api-lambda",
        templateFile: "terraform-apigw-http-lambda/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/terraform-apigw-http-lambda",
        projectFolder: "terraform-apigw-http-lambda",
      },
    },
    framework: "Terraform (with modules)",
    description:
      "This pattern creates an Amazon API Gateway (HTTP) and an AWS Lambda function.",
    deploy: {
      text: ["terraform init && terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy"],
    },
    authors: [
      {
        twitter: "antonbabenko",
        name: "Anton Babenko",
        linkedin: "https://www.linkedin.com/in/antonbabenko",
        image: "https://avatars.githubusercontent.com/u/393243",
        bio: "AWS Hero, Terraform influencer, maintainer of Terraform AWS Modules, creator of serverless.tf, weekly.tf, modules.tf, and some more.",
      },
    ],
    id: "f3774c38-bb5b-11ed-b9a4-3e86250ca8d9",
  },
  {
    title: "Amazon DynamoDB Streams to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          test: "Terraform AWS Lambda module",
          link: "https://github.com/terraform-aws-modules/terraform-aws-lambda",
        },
        {
          test: "Terraform AWS Lambda examples",
          link: "https://github.com/terraform-aws-modules/terraform-aws-lambda/tree/master/examples",
        },
        {
          test: "Terraform AWS Lambda event source mapping examples",
          link: "https://github.com/terraform-aws-modules/terraform-aws-lambda/tree/master/examples/event-source-mapping",
        },
        {
          test: "Terraform AWS DynamoDB table module",
          link: "https://github.com/terraform-aws-modules/terraform-aws-dynamodb-table",
        },
        {
          test: "Terraform AWS DynamoDB table examples",
          link: "https://github.com/terraform-aws-modules/terraform-aws-dynamodb-table/tree/master/examples",
        },
        {
          text: "Lambda event source mappings",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html",
        },
        {
          text: "Amazon DynamoDB Developer Guide",
          link: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html",
        },
        {
          test: "AWS Lambda Developer Guide",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This pattern creates an Amazon DynamoDB table with streaming enabled, AWS Lambda function and setup event sourcing from DynamoDB to Lambda function.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/terraform-dynamodb-streams-lambda",
        templateFile: "terraform-dynamodb-streams-lambda/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/terraform-dynamodb-streams-lambda",
        projectFolder: "terraform-dynamodb-streams-lambda",
      },
    },
    framework: "Terraform (with modules)",
    description:
      "This pattern creates an Amazon DynamoDB table with streaming enabled, AWS Lambda function and setup event sourcing from DynamoDB to Lambda function.",
    deploy: {
      text: ["terraform init && terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy"],
    },
    authors: [
      {
        twitter: "antonbabenko",
        name: "Anton Babenko",
        linkedin: "https://www.linkedin.com/in/antonbabenko",
        image: "https://avatars.githubusercontent.com/u/393243",
        bio: "AWS Hero, Terraform influencer, maintainer of Terraform AWS Modules, creator of serverless.tf, weekly.tf, modules.tf, and some more.",
      },
    ],
    id: "f3775250-bb5b-11ed-93a1-3e86250ca8d9",
  },
  {
    title: "Scheduled EventBridge rule for Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          test: "Terraform AWS Lambda module",
          link: "https://github.com/terraform-aws-modules/terraform-aws-lambda",
        },
        {
          test: "Terraform AWS Lambda examples",
          link: "https://github.com/terraform-aws-modules/terraform-aws-lambda/tree/master/examples",
        },
        {
          test: "Terraform AWS Lambda triggers examples",
          link: "https://github.com/terraform-aws-modules/terraform-aws-lambda/tree/master/examples/triggers",
        },
        {
          test: "Terraform AWS EventBridge module",
          link: "https://github.com/terraform-aws-modules/terraform-aws-eventbridge",
        },
        {
          test: "Terraform AWS EventBridge examples",
          link: "https://github.com/terraform-aws-modules/terraform-aws-eventbridge/tree/master/examples",
        },
        {
          text: "Using AWS Lambda with Amazon EventBridge (CloudWatch Events)",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/services-cloudwatchevents.html",
        },
        {
          text: "Amazon EventBridge User Guide",
          link: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html",
        },
        {
          test: "AWS Lambda Developer Guide",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
        },
        {
          text: "Reducing custom code by using advanced rules in Amazon EventBridge",
          link: "https://aws.amazon.com/blogs/compute/reducing-custom-code-by-using-advanced-rules-in-amazon-eventbridge/",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This template deploys a Lambda function that is triggered by an EventBridge periodically. In this example, the Lambda function logs text to the console every minute.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL:
          "serverless-patterns/terraform-eventbridge-scheduled-lambda",
        templateFile: "terraform-eventbridge-scheduled-lambda/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/terraform-eventbridge-scheduled-lambda",
        projectFolder: "terraform-eventbridge-scheduled-lambda",
      },
    },
    framework: "Terraform (with modules)",
    description:
      "Create a scheduled EventBridge rule that invokes a Lambda function",
    deploy: {
      text: ["terraform init && terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy"],
    },
    authors: [
      {
        twitter: "antonbabenko",
        name: "Anton Babenko",
        linkedin: "https://www.linkedin.com/in/antonbabenko",
        image: "https://avatars.githubusercontent.com/u/393243",
        bio: "AWS Hero, Terraform influencer, maintainer of Terraform AWS Modules, creator of serverless.tf, weekly.tf, modules.tf, and some more.",
      },
    ],
    id: "f3775886-bb5b-11ed-91a6-3e86250ca8d9",
  },
  {
    title: "Lambda Function and Lambda Layers",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          test: "Terraform AWS Lambda module",
          link: "https://github.com/terraform-aws-modules/terraform-aws-lambda",
        },
        {
          test: "Terraform AWS Lambda examples",
          link: "https://github.com/terraform-aws-modules/terraform-aws-lambda/tree/master/examples",
        },
        {
          test: "AWS Lambda Developer Guide",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
        },
        {
          text: "AWS Lambda Developer Guide - Creating and sharing Lambda layers",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html",
        },
        {
          text: "AWS Database Blog - IAM role-based authentication to Amazon Aurora from serverless applications. This blog uses the mysql-connector-python package",
          link: "https://aws.amazon.com/blogs/database/iam-role-based-authentication-to-amazon-aurora-from-serverless-applications/",
        },
        {
          text: "AWS Amazon Relational Database Service (RDS) User Guide - Using SSL/TLS to encrypt a connection to a DB instance",
          link: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This pattern deploys a Lambda Function and attaches a Lambda Layer to it.",
        "The function imports `mysql-connector-python` package that is provisioned using Lambda Layer and prints a list of files in `/opt` directory. `/opt` is a location where Lambda Layers attach content.",
        "Using layers reduces the size of uploaded deployment archives and makes it faster to deploy your code.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/terraform-lambda-layer",
        templateFile: "terraform-lambda-layer/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/terraform-lambda-layer",
        projectFolder: "terraform-lambda-layer",
      },
    },
    framework: "Terraform (with modules)",
    description: "Create a Lambda Function that has a Lambda Layer added to it",
    deploy: {
      text: ["terraform init && terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy"],
    },
    authors: [
      {
        twitter: "antonbabenko",
        name: "Anton Babenko",
        linkedin: "https://www.linkedin.com/in/antonbabenko",
        image: "https://avatars.githubusercontent.com/u/393243",
        bio: "AWS Hero, Terraform influencer, maintainer of Terraform AWS Modules, creator of serverless.tf, weekly.tf, modules.tf, and some more.",
      },
    ],
    id: "f3776240-bb5b-11ed-86a6-3e86250ca8d9",
  },
  {
    title: "Invoke an AWS Step Functions workflow from AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          test: "Terraform AWS Lambda module",
          link: "https://github.com/terraform-aws-modules/terraform-aws-lambda",
        },
        {
          test: "Terraform AWS Lambda examples",
          link: "https://github.com/terraform-aws-modules/terraform-aws-lambda/tree/master/examples",
        },
        {
          test: "Terraform AWS Step Functions module",
          link: "https://github.com/terraform-aws-modules/terraform-aws-step-functions/",
        },
        {
          test: "Terraform AWS Step Functions examples",
          link: "https://github.com/terraform-aws-modules/terraform-aws-step-functions//tree/master/examples",
        },
        {
          text: "AWS Step Functions Developer Guide",
          link: "https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html",
        },
        {
          test: "AWS Lambda Developer Guide",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "The pattern creates a Lambda function, and a Step Functions workflow, a Log group and the IAM resources required to run the application.",
        "A Lambda function uses the AWS SDK to asyncronously invoke the Step Function workflow, passing the event body. The Step Function workflow showcasing the different States.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/terraform-lambda-sfn",
        templateFile: "terraform-lambda-sfn/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/terraform-lambda-sfn",
        projectFolder: "terraform-lambda-sfn",
      },
    },
    framework: "Terraform (with modules)",
    description:
      "The pattern creates a Lambda function, and a Step Functions workflow, a Log group and the IAM resources required to run the application.",
    deploy: {
      text: ["terraform init && terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy"],
    },
    authors: [
      {
        twitter: "antonbabenko",
        name: "Anton Babenko",
        linkedin: "https://www.linkedin.com/in/antonbabenko",
        image: "https://avatars.githubusercontent.com/u/393243",
        bio: "AWS Hero, Terraform influencer, maintainer of Terraform AWS Modules, creator of serverless.tf, weekly.tf, modules.tf, and some more.",
      },
    ],
    id: "f3776bf0-bb5b-11ed-9dc8-3e86250ca8d9",
  },
  {
    title: "Amazon S3 bucket notifications to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          test: "Terraform AWS Lambda module",
          link: "https://github.com/terraform-aws-modules/terraform-aws-lambda",
        },
        {
          test: "Terraform AWS Lambda examples",
          link: "https://github.com/terraform-aws-modules/terraform-aws-lambda/tree/master/examples",
        },
        {
          test: "Terraform AWS S3 bucket module",
          link: "https://github.com/terraform-aws-modules/terraform-aws-s3-bucket",
        },
        {
          test: "Terraform AWS S3 bucket notification module",
          link: "https://github.com/terraform-aws-modules/terraform-aws-s3-bucket/tree/master/modules/notification",
        },
        {
          test: "Terraform AWS S3 bucket examples",
          link: "https://github.com/terraform-aws-modules/terraform-aws-s3-bucket/tree/master/examples",
        },
        {
          test: "Terraform AWS S3 bucket notification examples",
          link: "https://github.com/terraform-aws-modules/terraform-aws-s3-bucket/tree/master/examples/notification",
        },
        {
          text: "Amazon S3 Event Notifications",
          link: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/NotificationHowTo.html",
        },
        {
          text: "Amazon S3 Developer Guide",
          link: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
        },
        {
          test: "AWS Lambda Developer Guide",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This pattern creates an Amazon S3 bucket, AWS Lambda function and setup S3 bucket event notifications to trigger the Lambda function.",
        "In this example, notifications like `s3:ObjectCreated:*` with filter prefix (`data/`) and suffix (`.json`) are configured.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/terraform-s3-lambda",
        templateFile: "terraform-s3-lambda/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/terraform-s3-lambda",
        projectFolder: "terraform-s3-lambda",
      },
    },
    framework: "Terraform (with modules)",
    description:
      "This pattern creates an Amazon S3 bucket, AWS Lambda function and setup S3 bucket event notifications to trigger the Lambda function.",
    deploy: {
      text: ["terraform init && terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy"],
    },
    authors: [
      {
        twitter: "antonbabenko",
        name: "Anton Babenko",
        linkedin: "https://www.linkedin.com/in/antonbabenko",
        image: "https://avatars.githubusercontent.com/u/393243",
        bio: "AWS Hero, Terraform influencer, maintainer of Terraform AWS Modules, creator of serverless.tf, weekly.tf, modules.tf, and some more.",
      },
    ],
    id: "f377764a-bb5b-11ed-96dc-3e86250ca8d9",
  },
  {
    title: "Amazon S3 with S3 Object Lambda (return image thumbnails from S3)",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          test: "Terraform AWS Lambda module",
          link: "https://github.com/terraform-aws-modules/terraform-aws-lambda",
        },
        {
          test: "Terraform AWS Lambda examples",
          link: "https://github.com/terraform-aws-modules/terraform-aws-lambda/tree/master/examples",
        },
        {
          test: "Terraform AWS S3 bucket module",
          link: "https://github.com/terraform-aws-modules/terraform-aws-s3-bucket",
        },
        {
          test: "Terraform AWS S3 bucket examples",
          link: "https://github.com/terraform-aws-modules/terraform-aws-s3-bucket/tree/master/examples",
        },
        {
          text: "Using Amazon S3 Object Lambda Access Points",
          link: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-use.html",
        },
        {
          text: "Introducing Amazon S3 Object Lambda – Use Your Code to Process Data as It Is Being Retrieved from S3",
          link: "https://aws.amazon.com/blogs/aws/introducing-amazon-s3-object-lambda-use-your-code-to-process-data-as-it-is-being-retrieved-from-s3/",
        },
        {
          text: "Amazon S3 Developer Guide",
          link: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
        },
        {
          test: "AWS Lambda Developer Guide",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This pattern creates an S3 bucket, an S3 Access Point, an S3 Object Lambda Access Point, and Lambda function.",
        "This application uses S3 Object Lambda to return a thumbnail version of an image in S3.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/terraform-s3-object-lambda",
        templateFile: "terraform-s3-object-lambda/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/terraform-s3-object-lambda",
        projectFolder: "terraform-s3-object-lambda",
      },
    },
    framework: "Terraform (with modules)",
    description:
      "This pattern creates an S3 bucket, an S3 Access Point, an S3 Object Lambda Access Point, and Lambda function.",
    deploy: {
      text: ["terraform init && terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy"],
    },
    authors: [
      {
        twitter: "antonbabenko",
        name: "Anton Babenko",
        linkedin: "https://www.linkedin.com/in/antonbabenko",
        image: "https://avatars.githubusercontent.com/u/393243",
        bio: "AWS Hero, Terraform influencer, maintainer of Terraform AWS Modules, creator of serverless.tf, weekly.tf, modules.tf, and some more.",
      },
    ],
    id: "f3777fa0-bb5b-11ed-a302-3e86250ca8d9",
  },
  {
    title: "Amazon SQS Queue to AWS Lambda",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          test: "Terraform AWS Lambda module",
          link: "https://github.com/terraform-aws-modules/terraform-aws-lambda",
        },
        {
          test: "Terraform AWS Lambda examples",
          link: "https://github.com/terraform-aws-modules/terraform-aws-lambda/tree/master/examples",
        },
        {
          test: "Terraform AWS Lambda event source mapping examples",
          link: "https://github.com/terraform-aws-modules/terraform-aws-lambda/tree/master/examples/event-source-mapping",
        },
        {
          test: "Terraform AWS SQS module",
          link: "https://github.com/terraform-aws-modules/terraform-aws-sqs",
        },
        {
          test: "Terraform AWS SQS examples",
          link: "https://github.com/terraform-aws-modules/terraform-aws-sqs/tree/master/examples",
        },
        {
          text: "Lambda event source mappings",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html",
        },
        {
          text: "Amazon SQS Developer Guide",
          link: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html",
        },
        {
          test: "AWS Lambda Developer Guide",
          link: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
        },
      ],
    },
    level: "200",
    language: "Python",
    introBox: {
      text: [
        "This pattern creates an Amazon SQS Queue, AWS Lambda function and setup event sourcing from the Queue to the Lambda function.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/terraform-sqs-lambda",
        templateFile: "terraform-sqs-lambda/main.tf",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/terraform-sqs-lambda",
        projectFolder: "terraform-sqs-lambda",
      },
    },
    framework: "Terraform (with modules)",
    description:
      "This pattern creates an Amazon SQS Queue, AWS Lambda function and setup event sourcing from the Queue to the Lambda function.",
    deploy: {
      text: ["terraform init && terraform apply"],
    },
    cleanup: {
      text: ["terraform destroy"],
    },
    authors: [
      {
        twitter: "antonbabenko",
        name: "Anton Babenko",
        linkedin: "https://www.linkedin.com/in/antonbabenko",
        image: "https://avatars.githubusercontent.com/u/393243",
        bio: "AWS Hero, Terraform influencer, maintainer of Terraform AWS Modules, creator of serverless.tf, weekly.tf, modules.tf, and some more.",
      },
    ],
    id: "f3779378-bb5b-11ed-a408-3e86250ca8d9",
  },
  {
    title: "AWS WAF attached to Amazon API Gateway REST API",
    testing: {
      text: ["See the Github repo for detailed testing instructions."],
    },
    resources: {
      bullets: [
        {
          text: "AWS WAF",
          link: "https://aws.amazon.com/waf/",
        },
        {
          text: "Building rules",
          link: "https://docs.aws.amazon.com/waf/latest/developerguide/waf-rules.html",
        },
      ],
    },
    level: "300",
    language: "Python",
    introBox: {
      text: [
        "This sample project demonstrates how to use AWS WAF to add extra security to an Amazon API Gateway REST API. In this example, only requests from the US will be accepted. All others will be rejected with a 403. To add another country add the country code to the 'CountryCode' array starting on line 32.",
      ],
      headline: "How it works",
    },
    gitHub: {
      template: {
        templateURL: "serverless-patterns/waf-apigw-rest",
        templateFile: "waf-apigw-rest/template.yaml",
        repoURL:
          "https://github.com/aws-samples/serverless-patterns/tree/main/waf-apigw-rest",
        projectFolder: "waf-apigw-rest",
      },
    },
    framework: "SAM",
    description:
      "Creates an Amazon API Gateway with a WebACL attached to control access. This WebACL limits the requests to certain countries.",
    deploy: {
      text: ["sam deploy"],
    },
    cleanup: {
      text: ["Delete the stack: <code>sam delete</code>."],
    },
    authors: [
      {
        twitter: "edjgeek",
        name: "Eric Johnson",
        linkedin: "singledigit",
        image: "https://serverlessland.com/assets/images/resources/ericdj.jpg",
        bio: "Eric Johnson is a Principal Developer Advocate for Serverless Applications at Amazon Web Services and is based in Northern Colorado. Eric is a fanatic about serverless and enjoys helping developers understand how serverless technologies introduces a major paradigm shift in how they approach building and running applications at massive scale with minimal administration overhead. Prior to this, Eric has worked as a developer, solutions architect and AWS Evangelist for an AWS partner company.",
      },
    ],
    id: "f3779cd8-bb5b-11ed-9420-3e86250ca8d9",
  },
];

export default data;
