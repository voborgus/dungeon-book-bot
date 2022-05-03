provider "archive" {}

data "archive_file" "code_archive" {
  type        = "zip"
  source_dir = "../"
  output_path = "exam-quiz.zip"
  excludes = [
    ".serverless",
    ".git",
    ".DS_Store",
    ".env.yml",
    "serverless.yml",
    ".idea",
    "node_modules",
    "exam-quiz.iml",
    "exam-quiz.zip",
    "terraform",
    ".github",
    "README.md"
  ]
}

resource "yandex_storage_object" "code_archive_object" {
  bucket = var.s3_config.bucket
  key    = "terraform/code.zip"
  source = data.archive_file.code_archive.output_path
  access_key = var.s3_config.access_key
  secret_key = var.s3_config.secret_key
}