import { useRef, useState } from 'react';
import VisitDatePicker from './VisitDatePicker';
import VisitTimeSlotPicker from './VisitTimeSlotPicker';
import {
  hasValidationErrors,
  isSlotPast,
  UNIT_TYPES,
  validateBookingForm,
} from '../utils/validation';

const INITIAL_VALUES = {
  name: '',
  email: '',
  phone: '',
  date: '',
  slot: '',
  unitType: '',
  message: '',
};

const SUCCESS_MESSAGE =
  'Your site visit has been booked successfully. Our sales team will contact you soon.';

const inputBase =
  'w-full px-4 py-3 text-sm sm:text-base rounded-xl border bg-white text-brand-dark placeholder:text-brand-muted/60 transition-colors outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent';

const FieldError = ({ id, message }) => (
  <p id={id} role="alert" className="text-xs text-red-600 mt-1.5">
    {message}
  </p>
);

const BookingForm = () => {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const successRef = useRef(null);

  const getFieldClass = (field) => {
    const hasError = submitAttempted && errors[field];
    return `${inputBase} ${hasError ? 'border-red-400 bg-red-50/40' : 'border-slate-200'}`;
  };

  const validateField = (name, value) => {
    const nextValues = { ...values, [name]: value };
    const fieldErrors = validateBookingForm(nextValues);
    return fieldErrors[name];
  };

  const validateAllFields = (nextValues) => validateBookingForm(nextValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextValue = name === 'phone' ? value.replace(/\D/g, '') : value;

    setValues((prev) => ({ ...prev, [name]: nextValue }));
    setSuccessMessage('');

    if (submitAttempted) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, nextValue),
      }));
    }
  };

  const handleDateChange = (dateValue) => {
    setSuccessMessage('');

    setValues((prev) => {
      const clearedSlot =
        prev.slot && isSlotPast(prev.slot, dateValue) ? '' : prev.slot;
      const nextValues = { ...prev, date: dateValue, slot: clearedSlot };

      if (submitAttempted) {
        setErrors(validateAllFields(nextValues));
      }

      return nextValues;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitAttempted(true);
    setSuccessMessage('');

    const formErrors = validateBookingForm(values);
    setErrors(formErrors);

    if (hasValidationErrors(formErrors)) {
      const firstInvalid = Object.keys(formErrors).find((key) => formErrors[key]);
      if (firstInvalid) {
        document.getElementById(firstInvalid)?.focus();
      }
      return;
    }

    setSuccessMessage(SUCCESS_MESSAGE);
    setValues(INITIAL_VALUES);
    setErrors({});
    setSubmitAttempted(false);

    requestAnimationFrame(() => {
      successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  };

  return (
    <section id="booking-section" className="bg-slate-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Section intro */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <p className="section-label mb-4">
              (06) Book a Site Visit
            </p>
            <h2 className="font-serif font-semibold text-brand-dark leading-tight mb-4"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.01em' }}>
              Schedule your personal tour
            </h2>
            <p className="text-sm sm:text-[0.9375rem] text-brand-dark/60 leading-relaxed">
              Walk through Sky Heights Avenue, explore sample apartments, and meet our sales team.
              Pick a date and time that works for you.
            </p>
          </div>

          {/* Form card */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[2rem] border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm">
              {successMessage && (
                <div
                  ref={successRef}
                  role="status"
                  className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm leading-relaxed"
                >
                  {successMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    autoComplete="name"
                    placeholder="Enter your full name"
                    aria-invalid={submitAttempted && errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={getFieldClass('name')}
                  />
                  {submitAttempted && errors.name && (
                    <FieldError id="name-error" message={errors.name} />
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder="Enter your email address"
                    aria-invalid={submitAttempted && errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={getFieldClass('email')}
                  />
                  {submitAttempted && errors.email && (
                    <FieldError id="email-error" message={errors.email} />
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    inputMode="numeric"
                    value={values.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="Enter your phone number"
                    aria-invalid={submitAttempted && errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={getFieldClass('phone')}
                  />
                  {submitAttempted && errors.phone && (
                    <FieldError id="phone-error" message={errors.phone} />
                  )}
                </div>

                {/* Date + Time — side by side on larger screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-brand-dark mb-1.5">
                      Preferred Visit Date <span className="text-red-500">*</span>
                    </label>
                    <VisitDatePicker
                      id="date"
                      value={values.date}
                      onChange={handleDateChange}
                      hasError={submitAttempted && Boolean(errors.date)}
                      aria-invalid={submitAttempted && errors.date ? 'true' : 'false'}
                      aria-describedby={errors.date ? 'date-error' : undefined}
                    />
                    {submitAttempted && errors.date && (
                      <FieldError id="date-error" message={errors.date} />
                    )}
                  </div>

                  <div>
                    <label htmlFor="slot" className="block text-sm font-medium text-brand-dark mb-1.5">
                      Preferred Time Slot <span className="text-red-500">*</span>
                    </label>
                    <VisitTimeSlotPicker
                      id="slot"
                      date={values.date}
                      value={values.slot}
                      onChange={handleChange}
                      hasError={submitAttempted && Boolean(errors.slot)}
                      aria-invalid={submitAttempted && errors.slot ? 'true' : 'false'}
                      aria-describedby={errors.slot ? 'slot-error' : undefined}
                      className={`${getFieldClass('slot')} appearance-none disabled:opacity-60 disabled:cursor-not-allowed`}
                    />
                    {submitAttempted && errors.slot && (
                      <FieldError id="slot-error" message={errors.slot} />
                    )}
                  </div>
                </div>

                {/* Unit Type */}
                <div>
                  <label htmlFor="unitType" className="block text-sm font-medium text-brand-dark mb-1.5">
                    Interested Unit Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="unitType"
                    name="unitType"
                    value={values.unitType}
                    onChange={handleChange}
                    aria-invalid={submitAttempted && errors.unitType ? 'true' : 'false'}
                    aria-describedby={errors.unitType ? 'unitType-error' : undefined}
                    className={`${getFieldClass('unitType')} appearance-none`}
                  >
                    <option value="">Select unit type</option>
                    {UNIT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {submitAttempted && errors.unitType && (
                    <FieldError id="unitType-error" message={errors.unitType} />
                  )}
                </div>

                {/* Message — optional */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1.5">
                    Message{' '}
                    <span className="text-brand-muted font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Any questions or special requests for your visit..."
                    className={`${inputBase} border-slate-200 resize-none min-h-[100px]`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full sm:w-auto sm:min-w-[220px] inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-semibold text-brand-dark bg-brand-blue hover:bg-brand-blue-hover rounded-full transition-colors cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98]"
                >
                  Book Site Visit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
