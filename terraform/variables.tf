variable "project_id" {
  description = "The GCP Project ID"
  type        = string
  default = "southern-flash-485008-m6"
}

variable "region" {
  description = "GCP Region"
  type        = string
  default     = "us-central1"
}

variable "cluster_name" {
  description = "Name of the GKE Cluster"
  type        = string
  default     = "my-gke-cluster"
}