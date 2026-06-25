import { useState } from 'react';
import {
  validateName,
  validateEmail,
  validatePhone,
  validateDate,
  validateSlot,
  validateConfig
} from '../utils/validation';

const BookingForm = ({ onBookingSuccess }) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    slot: '',
    config: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const getTodayDateString = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const getApproxPrice = (config) => {
    switch (config) {
      case '2 BHK':
        return '₹82 Lakhs';
      case '3 BHK':
        return '₹1.05 Cr';
      case 'Duplex':
        return '₹1.65 Cr';
      default:
        return null;
    }
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return validateName(value);
      case 'email':
        return validateEmail(value);
      case 'phone':
        return validatePhone(value);
      case 'date':
        return validateDate(value);
      case 'slot':
        return validateSlot(value);
      case 'config':
        return validateConfig(value);
      default:
        return null;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === 'phone') {
      processedValue = value.replace(/[^\d]/g, ''); // phone allows numbers only
    }

    const nextValues = { ...values, [name]: processedValue };
    setValues(nextValues);

    // Clear error immediately if user resolves validation rule (on input)
    const err = validateField(name, processedValue);
    setErrors((prev) => ({
      ...prev,
      [name]: err ? err : null
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {
      name: validateField('name', values.name),
      email: validateField('email', values.email),
      phone: validateField('phone', values.phone),
      date: validateField('date', values.date),
      slot: validateField('slot', values.slot),
      config: validateField('config', values.config)
    };

    const activeErrors = {};
    let hasErrors = false;
    Object.keys(formErrors).forEach((key) => {
      if (formErrors[key]) {
        activeErrors[key] = formErrors[key];
        hasErrors = true;
      }
    });

    setErrors(activeErrors);
    
    // Mark everything as touched
    const touchedAll = {};
    Object.keys(values).forEach((key) => {
      touchedAll[key] = true;
    });
    setTouched(touchedAll);

    if (hasErrors) {
      // Focus on first invalid field
      const firstInvalidField = Object.keys(activeErrors)[0];
      const element = document.getElementById(firstInvalidField);
      if (element) {
        element.focus();
      }
      return;
    }

    // Success call
    onBookingSuccess(values);

    // Reset Form state
    setValues({
      name: '',
      email: '',
      phone: '',
      date: '',
      slot: '',
      config: '',
      notes: ''
    });
    setErrors({});
    setTouched({});
  };

  const priceInfo = getApproxPrice(values.config);

  return (
    <section id="booking-section" className="py-16 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xs font-semibold tracking-widest text-brand-green uppercase mb-2">
            Reservations
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-outfit">
            Schedule a Site Tour
          </h3>
          <div className="h-1 w-10 bg-brand-green mx-auto mt-3 rounded-full" />
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          
          {/* Full Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              autoComplete="name"
              placeholder="e.g. John Doe"
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={`w-full px-4 py-3 text-base rounded-xl border bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300 outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent ${
                touched.name && errors.name
                  ? 'border-red-500 bg-red-500/5 focus:ring-red-500'
                  : touched.name && !errors.name
                  ? 'border-emerald-500 dark:border-emerald-600 bg-emerald-500/5'
                  : 'border-slate-200 dark:border-slate-700'
              }`}
            />
            {touched.name && errors.name && (
              <span id="name-error" role="alert" className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                ⚠️ {errors.name}
              </span>
            )}
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              autoComplete="email"
              placeholder="e.g. name@example.com"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`w-full px-4 py-3 text-base rounded-xl border bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300 outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent ${
                touched.email && errors.email
                  ? 'border-red-500 bg-red-500/5 focus:ring-red-500'
                  : touched.email && !errors.email
                  ? 'border-emerald-500 dark:border-emerald-600 bg-emerald-500/5'
                  : 'border-slate-200 dark:border-slate-700'
              }`}
            />
            {touched.email && errors.email && (
              <span id="email-error" role="alert" className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                ⚠️ {errors.email}
              </span>
            )}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              inputMode="numeric"
              maxLength={10}
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              autoComplete="tel"
              placeholder="e.g. 9876543210"
              aria-invalid={errors.phone ? 'true' : 'false'}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={`w-full px-4 py-3 text-base rounded-xl border bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300 outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent ${
                touched.phone && errors.phone
                  ? 'border-red-500 bg-red-500/5 focus:ring-red-500'
                  : touched.phone && !errors.phone
                  ? 'border-emerald-500 dark:border-emerald-600 bg-emerald-500/5'
                  : 'border-slate-200 dark:border-slate-700'
              }`}
            />
            {touched.phone && errors.phone && (
              <span id="phone-error" role="alert" className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                ⚠️ {errors.phone}
              </span>
            )}
          </div>

          {/* Unit Type (Configurations with Price Display) */}
          <div className="flex flex-col">
            <label htmlFor="config" className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
              Interested Unit Type <span className="text-red-500">*</span>
            </label>
            <select
              id="config"
              name="config"
              value={values.config}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={errors.config ? 'true' : 'false'}
              aria-describedby={errors.config ? 'config-error' : undefined}
              className={`w-full px-4 py-3 text-base rounded-xl border bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300 outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent appearance-none ${
                touched.config && errors.config
                  ? 'border-red-500 bg-red-500/5 focus:ring-red-500'
                  : touched.config && !errors.config
                  ? 'border-emerald-500 dark:border-emerald-600 bg-emerald-500/5'
                  : 'border-slate-200 dark:border-slate-700'
              }`}
            >
              <option value="">Select Interested Unit Type</option>
              <option value="2 BHK">2 BHK Apartment</option>
              <option value="3 BHK">3 BHK Apartment</option>
              <option value="Duplex">Duplex Luxury Suite</option>
            </select>

            {/* Dynamic Approximate Price display */}
            <div className="mt-1.5 p-3 rounded-lg text-xs border bg-slate-100/50 dark:bg-slate-800/30 border-slate-200/40 dark:border-slate-700/40 transition-all duration-300">
              {priceInfo ? (
                <p className="flex justify-between items-center text-slate-700 dark:text-slate-250">
                  <span>Approximate Price:</span>
                  <span className="font-bold text-brand-green text-sm font-outfit">{priceInfo}*</span>
                </p>
              ) : (
                <p className="text-slate-400 dark:text-slate-500 italic">
                  Select a unit type to view approximate price
                </p>
              )}
            </div>

            {touched.config && errors.config && (
              <span id="config-error" role="alert" className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                ⚠️ {errors.config}
              </span>
            )}
          </div>

          {/* Preferred Date (Min set to today) */}
          <div className="flex flex-col">
            <label htmlFor="date" className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
              Preferred Visit Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              min={getTodayDateString()}
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={errors.date ? 'true' : 'false'}
              aria-describedby={errors.date ? 'date-error' : undefined}
              className={`w-full px-4 py-3 text-base rounded-xl border bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300 outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent ${
                touched.date && errors.date
                  ? 'border-red-500 bg-red-500/5 focus:ring-red-500'
                  : touched.date && !errors.date
                  ? 'border-emerald-500 dark:border-emerald-600 bg-emerald-500/5'
                  : 'border-slate-200 dark:border-slate-700'
              }`}
            />
            {touched.date && errors.date && (
              <span id="date-error" role="alert" className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                ⚠️ {errors.date}
              </span>
            )}
          </div>

          {/* Preferred Time Slot */}
          <div className="flex flex-col">
            <label htmlFor="slot" className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
              Preferred Time Slot <span className="text-red-500">*</span>
            </label>
            <select
              id="slot"
              name="slot"
              value={values.slot}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={errors.slot ? 'true' : 'false'}
              aria-describedby={errors.slot ? 'slot-error' : undefined}
              className={`w-full px-4 py-3 text-base rounded-xl border bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300 outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent appearance-none ${
                touched.slot && errors.slot
                  ? 'border-red-500 bg-red-500/5 focus:ring-red-500'
                  : touched.slot && !errors.slot
                  ? 'border-emerald-500 dark:border-emerald-600 bg-emerald-500/5'
                  : 'border-slate-200 dark:border-slate-700'
              }`}
            >
              <option value="">Select Preferred Time Slot</option>
              <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
              <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
              <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
              <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
            </select>
            {touched.slot && errors.slot && (
              <span id="slot-error" role="alert" className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                ⚠️ {errors.slot}
              </span>
            )}
          </div>

          {/* Message / Special Request (Optional) */}
          <div className="flex flex-col">
            <label htmlFor="notes" className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
              Message <span className="text-xs font-normal text-slate-400">(Optional)</span>
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={values.notes}
              onChange={handleChange}
              placeholder="Tell us about your requirements..."
              className="w-full px-4 py-3 text-base rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300 outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent resize-none min-h-[80px]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 bg-brand-green hover:bg-brand-green-hover text-white font-bold text-base rounded-xl shadow-md hover:shadow-brand-green/20 transition-all duration-300 cursor-pointer active:scale-[0.98]"
          >
            Book Site Visit
          </button>

        </form>
      </div>
    </section>
  );
};

export default BookingForm;
