output "hosting_url" {
  description = "Firebase Hosting URL"
  value       = "https://${var.hosting_site_name}.web.app"
}

output "hosting_domain" {
  description = "Custom domain for Firebase Hosting"
  value       = "${var.hosting_site_name}.firebaseapp.com"
}

output "web_app_id" {
  description = "Firebase Web App ID"
  value       = google_firebase_web_app.default.app_id
}

output "cloud_run_url" {
  description = "Cloud Run SSR service URL"
  value       = google_cloud_run_v2_service.functions.uri
}

output "site_name" {
  description = "Firebase Hosting site name"
  value       = google_firebase_hosting_site.default.name
}
