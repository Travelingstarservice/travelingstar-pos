#!/bin/bash

# ----------------------------
# Traveling Star Transport Deploy
# ----------------------------

# 1️⃣ Frontend
echo "🔹 Building Frontend..."
cd frontend || exit
npm install
npm run build || { echo "Frontend build failed!"; exit 1; }
cd ..

# 2️⃣ Backend
echo "🔹 Installing Backend..."
cd backend || exit
npm install
cd ..

# 3️⃣ Commit changes (optional)
echo "🔹 Committing changes..."
git add .
git commit -m "Auto-deploy frontend + backend" || echo "No changes to commit"

# 4️⃣ Push to GitHub
echo "🔹 Pushing to GitHub..."
git push origin main || { echo "Git push failed!"; exit 1; }

# 5️⃣ Reminder for Render
echo "✅ Frontend build ready for Render"
echo "Deploy frontend with Build Command: npm install && npm run build"
echo "Publish Directory: build"
echo "Deploy backend with Start Command: node server.js"
echo "Set environment variables in Render:"
echo "  PORT=10000"
echo "  EMAIL_USER=yourgmail@gmail.com"
echo "  EMAIL_PASS=your_app_password"

