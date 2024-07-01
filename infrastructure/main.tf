terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 1.6.0"
    }
  }
}

locals {
  project_name                     = "arsam-dev"
  git_repository_type              = "github"
  git_repository_repo              = "arsamsarabi/arsam-dev"
  git_repository_production_branch = "prod"
  git_repository_demo_branch       = "main"
  prod_url                         = "beta.arsam.dev"
  demo_url                         = "demo.arsam.dev"
}

# ---------------------------------------------------------------
# Vercel
# ---------------------------------------------------------------
provider "vercel" {
  api_token = var.vercel_api_token
  team      = var.vercel_team_id
}

# --- Project: checkout
resource "vercel_project" "arsamdev" {
  name                                              = local.project_name
  automatically_expose_system_environment_variables = true
  framework                                         = "nextjs"
  team_id                                           = var.vercel_team_id
  git_repository = {
    type              = local.git_repository_type
    repo              = local.git_repository_repo
    production_branch = local.git_repository_production_branch
  }
}

# --- Domains
resource "vercel_project_domain" "prod_domain" {
  project_id = vercel_project.arsamdev.id
  domain     = local.prod_url
}

resource "vercel_project_domain" "demo_domain" {
  project_id = vercel_project.arsamdev.id
  domain     = local.demo_url
  git_branch = local.git_repository_demo_branch
}
