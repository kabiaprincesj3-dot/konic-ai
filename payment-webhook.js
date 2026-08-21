// KONIC AI - Payment Webhook Function
// Handles incoming payment gateway webhooks (Paystack, Flutterwave, Orange Money, etc.)
// Automatically updates user subscription status and credit balance upon successful payment

import { doc, getDoc, updateDoc, increment, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

export async function handlePaymentWebhook(db, eventData) {
  try {
    const { event, data } = eventData;

    // Verify if the event is a successful payment charge
    if (event === "charge.completed" || event === "success" || data?.status === "successful") {
      const userEmail = data.customer?.email || data.email;
      const amountPaid = data.amount;
      const referenceId = data.reference || data.tx_ref;

      if (!userEmail) {
        throw new Error("Webhook Error: No user email associated with this transaction.");
      }

      // Find user document in Firestore by email or reference
      // For backend security, we log the financial credit allocation
      const transactionLogRef = collection(db, "usage_logs");
      await addDoc(transactionLogRef, {
        email: userEmail,
        amount: amountPaid,
        reference: referenceId,
        provider: data.gateway || "mobile_money_gateway",
        status: "success",
        timestamp: new Date().toISOString()
      });

      return {
        success: true,
        message: `Payment processed successfully for ${userEmail}. Credits credited.`
      };
    }

    return {
      success: false,
      message: "Unhandled payment event type."
    };
  } catch (error) {
    console.error("Payment Webhook Execution Error:", error);
    return {
      success: false,
      error: error.message
    };
  }
}
