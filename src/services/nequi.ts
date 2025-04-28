/**
 * Represents a payment made through Nequi.
 */
export interface NequiPayment {
  /**
   * The unique identifier for the payment.
   */
id: string;
  /**
   * The amount paid in Colombian Pesos (COP).
   */
amount: number;
  /**
   * The date and time when the payment was made.
   */
paymentDate: Date;
  /**
   * The user ID that made the payment
   */
  userId: string;
  /**
   * The screenshot URL.
   */
screenshotUrl: string;
}

/**
 * Asynchronously verifies a payment with Nequi, using a screenshot of the payment confirmation.
 *
 * @param screenshotUrl The URL of the screenshot confirming the payment.
 * @returns A promise that resolves to a NequiPayment object.
 */
export async function verifyNequiPayment(screenshotUrl: string, userId: string): Promise<NequiPayment | null> {
  // TODO: Implement this by calling an API.

  // Stubbed data for testing purposes
  return {
    id: '12345',
    amount: 10000,
    paymentDate: new Date(),
    userId: userId,
    screenshotUrl: screenshotUrl,
  };
}

export async function approveNequiPayment(paymentId: string): Promise<boolean> {
  // TODO: Implement this by calling an API.

  return true;
}

export async function rejectNequiPayment(paymentId: string): Promise<boolean> {
  // TODO: Implement this by calling an API.

  return true;
}
