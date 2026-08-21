// KONIC AI - Provider & Feature Manager Function
// Allows the admin to toggle features, AI providers, and platform settings securely via Firestore

import { doc, updateDoc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

export async function updatePlatformFeature(db, adminEmail, featureKey, isEnabled) {
  try {
    // Verify admin identity on the backend level
    if (adminEmail !== "Kabiaprincesj3@gmail.com") {
      throw new Error("Unauthorized: Admin access required.");
    }

    const settingsRef = doc(db, "system_settings", "global_config");
    
    // Update the specific feature toggle in the database
    await updateDoc(settingsRef, {
      [`featuresEnabled.${featureKey}`]: isEnabled,
      lastUpdated: new Date().toISOString(),
      updatedBy: adminEmail
    });

    return {
      success: true,
      message: `Feature '${featureKey}' successfully set to ${isEnabled}`
    };
  } catch (error) {
    console.error("Feature Manager Error:", error);
    return {
      success: false,
      error: error.message
    };
  }
}

export async function addOrUpdateAIProvider(db, adminEmail, providerId, providerData) {
  try {
    if (adminEmail !== "Kabiaprincesj3@gmail.com") {
      throw new Error("Unauthorized: Only master admin can modify AI providers.");
    }

    const providerRef = doc(db, "ai_providers", providerId);
    
    // Save or overwrite provider settings securely
    await setDoc(providerRef, {
      ...providerData,
      updatedAt: new Date().toISOString()
    }, { merge: true });

    return {
      success: true,
      message: `AI Provider '${providerData.providerName}' saved successfully.`
    };
  } catch (error) {
    console.error("AI Provider Manager Error:", error);
    return {
      success: false,
      error: error.message
    };
  }
}
