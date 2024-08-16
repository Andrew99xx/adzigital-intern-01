import locationIcon from '../assets/contact/location-pin.svg';
import call from '../assets/contact/call.png';
import clock from '../assets/contact/clock.png';

export const formData = [
    { label: 'Your name', type: 'text', name: 'name', placeholder: 'Abc' },
    { label: 'Email address', type: 'email', name: 'email', placeholder: 'Abc@def.com' },
    { label: 'Subject', type: 'text', name: 'subject', placeholder: 'This is an optional' },
    { label: 'Message', type: 'textarea', name: 'message', placeholder: 'Hi! I’d like to ask about' },
  ]; 

  export const contactDetailsData = [
    {
      icon: locationIcon,
      title: 'Address',
      details: ['236 5th SE Avenue, New York NY10000, United States'],
    },
    {
      icon: call,
      title: 'Phone',
      details: ['Mobile: +(84) 546-6789', 'Hotline: +(84) 456-6789'],
    },
    {
      icon: clock,
      title: 'Working Time',
      details: ['Monday-Friday: 9:00 - 22:00', 'Saturday-Sunday: 9:00 - 21:00'],
    },
  ];