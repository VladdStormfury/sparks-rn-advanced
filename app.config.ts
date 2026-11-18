import { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: process.env.EXPO_PUBLIC_APP_NAME || (config.name as string),
    slug: config.slug ?? 'shelfscan'
  } satisfies ExpoConfig;
};