terraform {
  required_version = ">= 1.5.0"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 6.0"
    }
  }

  # Remote state stored in GCS — update bucket name to yours
  backend "gcs" {
    bucket = "mde-website-tf-state"
    prefix = "firebase"
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

# --------------------------------------------------
# Firebase Web App
# --------------------------------------------------

resource "google_firebase_web_app" "default" {
  display_name = "mde-website"
  project      = var.project_id
}

# --------------------------------------------------
# Firebase Hosting Site
# --------------------------------------------------

resource "google_firebase_hosting_site" "default" {
  project = var.project_id
  name    = var.hosting_site_name

  labels = {
    environment = var.environment
  }
}

# --------------------------------------------------
# Hosting Release (triggered externally via CLI)
# --------------------------------------------------
# Terraform manages the hosting site infrastructure.
# Actual asset uploads are done via `firebase deploy`
# from CI/CD or locally.
#
# To link a release programmatically, use the
# google_firebase_hosting_release resource:
#
# resource "google_firebase_hosting_release" "default" {
#   site      = google_firebase_hosting_site.default.name
#   project   = var.project_id
#   releases {
#     config {
#       deploy_cdn = true
#       root       = "/"
#       headers {
#         regex = "**/*"
#         header {
#           key   = "Cache-Control"
#           value = "max-age=31536000"
#         }
#       }
#     }
#   }
# }

# --------------------------------------------------
# Cloud Functions (SSR)
# --------------------------------------------------

resource "google_cloud_run_v2_service" "functions" {
  name     = "mde-website-ssr"
  location = var.region
  project  = var.project_id

  template {
    service_account = var.cloud_run_service_account
    containers {
      image = "gcr.io/${var.project_id}/mde-website-ssr:latest"

      env {
        name  = "PORT"
        value = "8080"
      }
    }
  }

  lifecycle {
    ignore_changes = [template[0].containers[0].image]
  }
}

# --------------------------------------------------
# IAM for Cloud Run (Firebase Hosting calls this)
# --------------------------------------------------

resource "google_project_iam_member" "cloud_run_invoker" {
  project = var.project_id
  role    = "roles/run.invoker"
  member  = "serviceAccount:${var.hosting_site_name}@${var.project_id}.iam.gserviceaccount.com"
}
