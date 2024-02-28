resource "aws_s3_bucket" "codepipeline_artifacts_firstreactapp" {
  bucket = "codepipeline_artifacts_firstreactapp"
  acl    = "private"
} 