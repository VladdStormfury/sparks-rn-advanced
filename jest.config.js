const ESM_PACKAGES_TO_TRANSFORM = [
  '.pnpm',
  'react-native',
  '@react-native',
  '@react-native-community',
  'expo',
  '@expo',
  '@expo-google-fonts',
  'react-navigation',
  '@react-navigation',
  '@sentry/react-native',
  'native-base',
  'standard-navigation',
  'msw',
  '@msw',
  '@mswjs',
  'until-async',
  'rettime',
  'headers-polyfill',
  'is-node-process',
  'outvariant',
  'strict-event-emitter',
  '@open-draft',
  'tough-cookie',
  'cookie',
  'type-fest',
];

process.env.EXPO_PUBLIC_USE_RN_FETCH = '1';

const jestExpoPreset = require('jest-expo/jest-preset');
const presetTransform = jestExpoPreset.transform;

module.exports = {
  preset: 'jest-expo',
  testEnvironment: jestExpoPreset.testEnvironment,
  watchman: false,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    ...presetTransform,
    '\\.mjs$': presetTransform['\\.[jt]sx?$'],
  },
  modulePathIgnorePatterns: ['<rootDir>/.stryker-tmp/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: [
    `/node_modules/(?!(${ESM_PACKAGES_TO_TRANSFORM.join('|')}))`,
    '/node_modules/react-native-reanimated/plugin/',
    '/node_modules/@react-native/babel-preset/',
  ],
  fakeTimers: {
    enableGlobally: false,
    doNotFake: ['nextTick', 'setImmediate', 'clearImmediate', 'queueMicrotask'],
  },
};
