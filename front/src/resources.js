export default [
  {
    type: "instance",
    group: "EC2",
    Resources: ["aws_ami_from_instance", "aws_ec2_instance_state"],
  },
  {
    type: "instance",
    group: "EMR",
    Resources: ["aws_emr_instance_fleet", "aws_emr_instance_group"],
  },
  { type: "instance", group: "IAM", Resources: ["aws_iam_instance_profile"] },
  {
    type: "computed",
    group: "EC2",
    Resources: ["aws_ami", "aws_ami_copy", "aws_ami_from_instance"],
  },
  {
    type: "instance",
    group: "RDS",
    Resources: ["aws_opsworks_instance", "aws_opsworks_rds_db_instance"],
  },
  {
    type: "lambda",
    group: "Lambda",
    Resources: ["aws_connect_lambda_function_association"],
  },
];
