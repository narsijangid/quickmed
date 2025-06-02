# 🚑 QuickMed – Logistics & Medical Delivery Platform

QuickMed is an AI-powered logistics and transportation web app focused on the fast, efficient delivery of medical supplies. This platform connects pharmacies, hospitals, patients, and delivery drivers — with real-time tracking, route optimization, and automated inventory handling.

---

## 🚀 Tech Stack

- **Frontend**: React.js + Style.css
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Payment Gateway**: Stripe (for testing)
- **Authentication**: JWT (Role-based access)

---

## 📦 Features

### 🧾 User Roles

- Admin
- Healthcare Provider
- Customer
- Delivery Driver

### 📌 Core Modules

1. **Authentication & Authorization (JWT-based)**
2. **Order Management**
3. **Delivery Scheduling & Route Optimization**
4. **Inventory Tracking**
5. **Real-time Order & Driver Status**
6. **Payment Integration (Stripe Test Mode)**
7. **Driver Reward System**
8. **Emergency Mode for Urgent Deliveries**
9. **Cold Chain Tracking for Vaccine Transport**
10. **Email/SMS Notification System (Planned)**

---

## 💳 Stripe Integration (for Testing)

We're using **Stripe** as the test payment gateway due to Razorpay's mandatory KYC.

### 🛠 Setup Stripe

1. Create a free Stripe account:  
   https://dashboard.stripe.com/register

2. Get your test API keys:
   - Publishable Key
   - Secret Key  
   (from: https://dashboard.stripe.com/test/apikeys)

3. Add keys to your `.env` file:
   ```env
  
