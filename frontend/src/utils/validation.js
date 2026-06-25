/**
 * Site visit booking form validators.
 * Each function returns an error string or null when valid.
 */

import { isSameDay, isValid, parse, startOfToday } from 'date-fns';

export const TIME_SLOT_DETAILS = {
  '10:00 AM - 11:00 AM': { endHour: 11, endMinute: 0 },
  '11:00 AM - 12:00 PM': { endHour: 12, endMinute: 0 },
  '2:00 PM - 3:00 PM': { endHour: 15, endMinute: 0 },
  '4:00 PM - 5:00 PM': { endHour: 17, endMinute: 0 },
};

export const TIME_SLOTS = Object.keys(TIME_SLOT_DETAILS);

export const UNIT_TYPES = ['2 BHK', '3 BHK', 'Duplex'];

export const parseVisitDate = (dateString) => {
  if (!dateString) return null;
  const parsed = parse(dateString, 'yyyy-MM-dd', new Date());
  return isValid(parsed) ? parsed : null;
};

export const isVisitDateToday = (dateString) => {
  const parsed = parseVisitDate(dateString);
  return parsed ? isSameDay(parsed, startOfToday()) : false;
};

/** True when the slot has already ended on today's date. */
export const isSlotPast = (slot, dateString) => {
  if (!slot || !isVisitDateToday(dateString)) {
    return false;
  }

  const details = TIME_SLOT_DETAILS[slot];
  if (!details) {
    return false;
  }

  const now = new Date();
  const slotEnd = new Date();
  slotEnd.setHours(details.endHour, details.endMinute, 0, 0);

  return now >= slotEnd;
};

export const getAvailableSlots = (dateString) =>
  TIME_SLOTS.filter((slot) => !isSlotPast(slot, dateString));

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

  const selectedDate = parseVisitDate(dateString);
  if (!selectedDate) {
    return 'Please select visit date';
  }

  const today = startOfToday();
  if (selectedDate < today) {
    return 'Visit date cannot be in the past';
  }

  return null;
};

export const validateSlot = (slot, dateString) => {
  if (!slot) {
    return 'Please select preferred time slot';
  }

  if (isSlotPast(slot, dateString)) {
    return 'This time slot is no longer available';
  }

  return null;
};

export const validateUnitType = (unitType) => {
  if (!unitType) {
    return 'Please select interested unit type';
  }
  return null;
};

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
  slot: validateSlot(values.slot, values.date),
  unitType: validateUnitType(values.unitType),
});

export const hasValidationErrors = (errors) =>
  Object.values(errors).some((message) => message !== null);
