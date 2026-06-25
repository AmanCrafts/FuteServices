/**
 * Validates name field.
 * @param {string} name 
 * @returns {string|null} Error message or null
 */
export const validateName = (name) => {
  if (!name || !name.trim()) {
    return 'Please enter your name';
  }
  const cleanName = name.trim();
  if (cleanName.length < 2) {
    return 'Name must be at least 2 characters long';
  }
  return null;
};

/**
 * Validates email field.
 * @param {string} email 
 * @returns {string|null} Error message or null
 */
export const validateEmail = (email) => {
  if (!email || !email.trim()) {
    return 'Please enter your email';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address';
  }
  return null;
};

/**
 * Validates phone field.
 * @param {string} phone 
 * @returns {string|null} Error message or null
 */
export const validatePhone = (phone) => {
  if (!phone || !phone.trim()) {
    return 'Please enter your phone number';
  }
  const cleanPhone = phone.trim().replace(/[\s\-()]/g, '');
  if (!/^\d+$/.test(cleanPhone)) {
    return 'Phone number must contain numbers only';
  }
  if (cleanPhone.length !== 10) {
    return 'Phone number must be exactly 10 digits';
  }
  return null;
};

/**
 * Validates date field.
 * @param {string} dateString 
 * @returns {string|null} Error message or null
 */
export const validateDate = (dateString) => {
  if (!dateString) {
    return 'Please select visit date';
  }
  const selectedDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (selectedDate < today) {
    return 'Booking date cannot be in the past';
  }
  return null;
};

/**
 * Validates time slot field.
 * @param {string} slot 
 * @returns {string|null} Error message or null
 */
export const validateSlot = (slot) => {
  if (!slot || slot === '') {
    return 'Please select preferred time slot';
  }
  return null;
};

/**
 * Validates unit type field.
 * @param {string} config 
 * @returns {string|null} Error message or null
 */
export const validateConfig = (config) => {
  if (!config || config === '') {
    return 'Please select interested unit type';
  }
  return null;
};
