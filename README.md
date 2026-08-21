# KONIC AI PLATFORM

**KONIC AI** is a production-ready, full-stack intelligence ecosystem engineered by **IB_COMPUTER** (Ibrahim Issa Kabia). It features robust multi-model AI routing, secure authentication, role-based access control, file storage via Dropbox, and an advanced administrative control center.

---

## 🚀 Core Features

* **Secure Authentication & Roles:** Powered by Firebase Auth with strict role verification (User, Admin, Super Admin) handled server-side.
* **AI Chat Ecosystem:** Dynamic conversation management, real-time response rendering, markdown/code syntax highlighting, and custom AI provider routing.
* **Cloud Storage Integration:** Secure file handling, validation, and syncing backed by Dropbox API scopes (`files.content.write`, `files.content.read`).
* **Admin Control Center:** Comprehensive management dashboard for system configuration, feature toggling, user status monitoring, and audit logging.
* **Corporate Minimalist Design:** High-contrast UI styled with dark navy, tech blue, and electric cyan built on Tailwind CSS.

---

## 📂 Project Directory Structure

```text
konic-ai/
├── admin/
│   └── index.html             # Secure admin control dashboard
├── config/
│   └── firebase-init.js       # Centralized Firebase initialization
├── frontend/
│   ├── index.html             # Landing page
│   ├── login.html             # Authentication & user registration
│   └── dashboard.html         # User workspace & chat interface
├── functions/
│   ├── ai-router.js           # Secure AI provider routing
│   ├── provider-manager.js    # Backend feature & provider controls
│   └── payment-webhook.js     # Gateway webhook & credit allocation
└── README.md                  # Project documentation
