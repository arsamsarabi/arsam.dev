# ---------------------------------------------------------------
# Vercel
# ---------------------------------------------------------------
variable "vercel_api_token" {
  type      = string
  sensitive = true
}

variable "vercel_team_id" {
  type      = string
  sensitive = true
}
