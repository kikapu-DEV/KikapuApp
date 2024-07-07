export const phoneRegex = /^\d{10}$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordMinLengthRegex = /^.{8,}$/;
export const passwordMinLengthWithUppercaseRegex = /^(?=.*[A-Z]).{8,}$/;
export const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Password Regex (Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character):

