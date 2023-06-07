### Introduction

1. Set images : { unoptimzeed: true} to next.config.js to avoid build error
2. Set script "static": "next build && next export"
3. Run npm run static
   - this will generate an out folder (static files)
4. Install npm i -D @capacitor/cli
5. Run npx cap init
6. Run npx cap add android
7. Run npx cap open android
8. Run npx cap sync to run ios, android and web
