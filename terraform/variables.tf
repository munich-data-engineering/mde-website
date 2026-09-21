variable "project_id" {
  description = "GCP project ID for Firebase"
  type        = string
  default     = "mde-website"
}

variable "region" {
  description = "GCP region for Cloud Run / Firebase resources"
  type        = string
  default     = "us-central1"
}

variable "hosting_site_name" {
  description = "Name of the Firebase Hosting site (must be a valid domain label)"
  type        = string
  default     = "mde-website"

  validation {
    condition     = can(regex("^[a-z][-a-z0-9]*[a-z0-9]$", var.hosting_site_name))
    error_message = "Must be a valid domain label (lowercase, hyphens, 2-63 chars)."
  }
}

variable "environment" {
  description = "Deployment environment label"
  type        = string
  default     = "production"
}

variable "cloud_run_service_account" {
  description = "Service account for Cloud Run SSR function"
  type        = string
  default     = ""
}
