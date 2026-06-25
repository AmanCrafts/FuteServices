/**
 * Site visit booking form validators.
 * Each function returns an error string or null when valid.
 */

export const validateName = (name) => {
  if (!name || !name.trim()) {
    return 'Please enter your name';
  }
  return null;
};

export const validateEmail = (email) => {
  if (!email || !email.trim()) {
    return 'Please enter your email';
  }
  return null;
};

export const validatePhone = (phone) => {
  if (!phone || !phone.trim()) {
    return 'Please enter your phone number';
  }
  return null;
};

export const validateDate = (dateString) => {
  if (!dateString) {
    return 'Please select visit date';
  }

  const selectedDate = new Date(`${dateString}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    return 'Visit date cannot be in the past';
  }

  return null;
};

export const validateSlot = (slot) => {
  if (!slot) {
    return 'Please select preferred time slot';
  }
  return null;
};

export const validateUnitType = (unitType) => {
  if (!unitType) {
    return 'Please select interested unit type';
  }
  return null;
};

export const TIME_SLOTS = [
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '2:00 PM - 3:00 PM',
  '4:00 PM - 5:00 PM',
];

export const UNIT_TYPES = ['2 BHK', '3 BHK', 'Duplex'];

export const getTodayDateString = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

export const validateBookingForm = (values) => ({
  name: validateName(values.name),
  email: validateEmail(values.email),
  phone: validatePhone(values.phone),
  date: validateDate(values.date),
  slot: validateSlot(values.slot),
  unitType: validateUnitType(values.unitType),
});

export const hasValidationErrors = (errors) =>
  Object.values(errors).some((message) => message !== null);
