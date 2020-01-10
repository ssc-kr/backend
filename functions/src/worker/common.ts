import { CloudTasksClient } from "@google-cloud/tasks";

export const tasksClient = new CloudTasksClient();

/**
 * Location for google cloud service.
 */
export const GCLOUD_LOCATION = "asia-south1";

/**
 * Location for google cloud service.
 */
export const GCLOUD_PROJECT = "ssc-kr";
