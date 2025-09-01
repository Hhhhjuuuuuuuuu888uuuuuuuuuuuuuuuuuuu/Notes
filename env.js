require('dotenv').config();

const API_KEY = process.env.API_KEY;
const AUTH_DOMAIN = process.env.AUTH_DOMAIN;
const PROJECT_ID = process.env.PROJECT_ID;
const STORAGE_BUCKET = process.env.STORAGE_BUCKET;
const MESSAGING_SENDER_ID = process.env.MESSAGING_SENDER_ID;
const APP_ID = process.env.APP_ID;
const MEASUREMENT_ID = process.env.MEASUREMENT_ID;

console.log("API_KEY:", API_KEY);
console.log("AUTH_DOMAIN:", AUTH_DOMAIN);
console.log("PROJECT_ID:", PROJECT_ID);
console.log("STORAGE_BUCKET:", STORAGE_BUCKET);
console.log("MESSAGING_SENDER_ID:", MESSAGING_SENDER_ID);
console.log("APP_ID:", APP_ID);
console.log("MEASUREMENT_ID:", MEASUREMENT_ID);
