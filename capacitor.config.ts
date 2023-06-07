import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "ionic-capacitor",
  webDir: "out",
  server: {
    url: "http://192.168.100.18:3000",
    cleartext: true,
  },
};

export default config;
