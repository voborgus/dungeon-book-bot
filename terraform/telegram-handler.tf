resource "yandex_function" "telegram_handler" {
  name = "telegram-handler"
  runtime = "nodejs12"
  entrypoint = "api/telegram.eventHandler"
  memory = "256"
  description = "Handle incoming messages from telegram"
  execution_timeout = "15"
  environment = {
    "AWS_ACCESS_KEY_ID": var.s3_config.access_key,
    "AWS_SECRET_ACCESS_KEY": var.s3_config.secret_key,
    "BUCKET_ID": var.s3_config.bucket,
    "bot_token": var.bot_token,
  }
  user_hash = filesha256(data.archive_file.code_archive.output_path)
  content {
    zip_filename = data.archive_file.code_archive.output_path
  }
}

output "yandex_function_webhook_setter_id" {
  value = yandex_function.telegram_handler.id
}