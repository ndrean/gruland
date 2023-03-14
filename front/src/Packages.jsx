const json = [
  { "@aws-sdk/client-sso": 154717994 },
  { "@aws-sdk/client-sts": 148885567 },
  { "@aws-sdk/client-s3": 67690402 },
  { "@aws-sdk/client-cognito-identity": 35514442 },
  { "@aws-sdk/client-firehose": 21176165 },
  { "@aws-sdk/client-kinesis": 20265068 },
  { "@aws-sdk/client-dynamodb": 19648492 },
  { "@aws-sdk/client-cloudwatch-logs": 18989730 },
  { "@aws-sdk/client-pinpoint": 18482140 },
  { "@aws-sdk/client-translate": 17986788 },
  { "@aws-sdk/client-lex-runtime-service": 17888304 },
  { "@aws-sdk/client-textract": 17748044 },
  { "@aws-sdk/client-rekognition": 17734185 },
  { "@aws-sdk/client-personalize-events": 17707419 },
  { "@aws-sdk/client-comprehend": 17612675 },
  { "@aws-sdk/client-polly": 17554807 },
  { "@aws-sdk/client-sqs": 17197052 },
  { "@aws-sdk/client-secrets-manager": 14011185 },
  { "@aws-sdk/client-location": 12370515 },
  { "@aws-sdk/client-sso-oidc": 10874225 },
  { "@aws-sdk/client-ssm": 10442689 },
  { "@aws-sdk/client-lambda": 9848323 },
  { "@aws-sdk/client-sns": 9447574 },
  { "@aws-sdk/client-cognito-identity-provider": 6697428 },
  { "@aws-sdk/client-ses": 6602113 },
  { "@aws-sdk/client-ec2": 6025010 },
  { "@aws-sdk/client-ecr": 4489591 },
  { "@aws-sdk/client-kms": 4243616 },
  { "@aws-sdk/client-iam": 3839031 },
  { "@aws-sdk/client-eventbridge": 3516505 },
  { "@aws-sdk/client-cloudwatch": 3210654 },
  { "@aws-sdk/client-lex-runtime-v2": 2805248 },
  { "@aws-sdk/client-cloudformation": 2557856 },
  { "@aws-sdk/client-ecs": 2491573 },
  { "@aws-sdk/client-sfn": 2468569 },
  { "@aws-sdk/client-rds": 2423974 },
  { "@aws-sdk/client-api-gateway": 2336299 },
  { "@aws-sdk/client-auto-scaling": 2328685 },
  { "@aws-sdk/client-cloudfront": 2081834 },
  { "@aws-sdk/client-codebuild": 1441877 },
  { "@aws-sdk/client-sesv2": 1145035 },
  { "@aws-sdk/client-codepipeline": 1061150 },
  { "@aws-sdk/client-elastic-load-balancing-v2": 1018608 },
  { "@aws-sdk/client-organizations": 976427 },
  { "@aws-sdk/client-elasticache": 958210 },
  { "@aws-sdk/client-athena": 886347 },
  { "@aws-sdk/client-acm": 875838 },
  { "@aws-sdk/client-route-53": 833872 },
  { "@aws-sdk/client-codecommit": 681491 },
];

export function Packages() {
  return (
    <div className="flex flex-col overflow-y-auto">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full">
          <table className="table-auto min-w-full text-center text-sm font-light">
            <thead className="sticky top-0 border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
              <tr>
                <th scope="col" class=" px-6 py-4">
                  #
                </th>
                <th scope="col" class=" px-6 py-4">
                  Package
                </th>
                <th scope="col" class=" px-6 py-4">
                  Downloads
                </th>
              </tr>
            </thead>
            <tbody>
              {json &&
                json.map((obj, idx) => {
                  const [k] = Object.keys(obj);
                  return (
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap  px-6 py-4 font-medium">
                        {idx + 1}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-4">{k}</td>
                      <td clasNames="whitespace-nowrap  px-6 py-4">
                        {obj[k].toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

<tbody>
  {json &&
    json.map((obj, idx) => {
      const [k] = Object.keys(obj);
      return (
        <tr className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap  px-6 py-4 font-medium">
            {idx + 1}
          </td>
          <td className="whitespace-nowrap  px-6 py-4">{k}</td>
          <td clasNames="whitespace-nowrap  px-6 py-4">
            {obj[k].toLocaleString()}
          </td>
        </tr>
      );
    })}
</tbody>;
