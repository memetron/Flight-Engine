import { Airport } from '../types';

export const airports: Airport[] = [
  {
    code: 'BCN',
    city: 'Barcelona',
    timezone: 'Europe/Central',
    location: {
      latitude: 41.3874,
      longitude: 2.1686,
    },
  },
  {
    code: 'DFW',
    city: 'Dallas',
    timezone: 'America/Chicago',
    location: {
      latitude: 32.8998,
      longitude: 97.0403,
    },
  },
  {
    code: 'JFK',
    city: 'New York City',
    timezone: 'America/New_York',
    location: {
      latitude: 40.6413,
      longitude: 73.7781,
    },
  },
  {
    code: 'SFO',
    city: 'San Francisco',
    timezone: 'America/Los_Angeles',
    location: {
      latitude: 37.6213,
      longitude: -122.379,
    },
  },
  {
    code: 'LHR',
    city: 'London',
    timezone: 'Europe/Greenwich',
    location: {
      latitude: 51.5072,
      longitude: 0.1276,
    },
  },
  {
    code: 'CDG',
    city: 'Paris',
    timezone: 'Europe/Central',
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
    },
  },
  {
    code: 'SXF',
    city: 'Berlin',
    timezone: 'Europe/Central',
    location: {
      latitude: 52.5200,
      longitude: 13.4050,
    },
  },
  {
    code: 'BLR',
    city: 'Bangalore',
    timezone: 'Europe/Central',
    location: {
      latitude: 12.9716,
      longitude: 77.5946,
    },
  }
];
