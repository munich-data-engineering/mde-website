# Firebase Hosting Infrastructure (Terraform)

Provision a Firebase Hosting site, a Cloud Run SSR service, and supporting IAM.

## Prerequisites

1. **Google Cloud project** with these APIs enabled:
   ```bash
   gcloud services enable \
     firebase.googleapis.com \
     cloudresourcemanager.googleapis.com \
     run.googleapis.com \
     cloudbuild.googleapis.com
   ```

2. **Firebase project** linked to the GCP project:
   ```bash
   gcloud firebase apps create --display-name=mde-website
   ```

3. **GCS bucket** for Terraform state (replace `YOUR_BUCKET`):
   ```bash
   gsutil mb -p mde-website -l us-central1 gs://mde-website-tf-state
   ```

4. **Authenticated credentials**:
   ```bash
   gcloud auth application-default login
   ```

## Terraform Workflow

```bash
cd terraform

# First run — initialize backend & providers
terraform init

# Preview changes
terraform plan -var="project_id=mde-website"

# Apply
terraform apply -var="project_id=mde-website"
```

## Deploying the App

Terraform provisions the hosting site. Deploying the actual build uses the Firebase CLI:

```bash
# Locally (requires `firebase login`)
firebase deploy --only hosting

# CI/CD: .github/workflows/deploy.yml runs this on every push to main
```

### Required GitHub Secrets

| Secret | Value |
|---|---|
| `FIREBASE_SERVICE_ACCOUNT` | Service account JSON key (with `Firebase Admin Service Agent` role) |
| `FIREBASE_TOKEN` | `firebase login:ci` token (legacy; prefer `FIREBASE_SERVICE_ACCOUNT`) |

## SSR Functions

The `firebase.json` rewrites all routes to the Cloud Run SSR service. Deploy the SSR container:

```bash
gcloud builds submit --config cloudbuild.yaml --project=mde-website
```

## Outputs

After `terraform apply`, the following URLs are available:

- **Hosting**: `https://<site>.web.app`
- **Custom domain**: `<site>.firebaseapp.com`
- **Cloud Run SSR**: see `cloud_run_url` output
