export class SignatureNotFoundError extends Error {
  constructor(message = 'Signature not found') {
    super(message);
    this.message = message;
  }
}
