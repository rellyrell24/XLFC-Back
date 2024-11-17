import * as admin from "firebase-admin";
// import * as functions from "firebase-functions";

// FOR FIREBASE STORAGE
// const STORAGE_URL = functions.config().storage.url;

admin.initializeApp({
  storageBucket: "gs://xlfc-e8f8f.firebasestorage.app",
});

export const db = admin.firestore();

export const auth = admin.auth();

export const bucket = admin.storage().bucket();
