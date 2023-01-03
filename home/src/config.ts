export type Config = {
  AUTH0_DOMAIN: string;
  AUTH0_CLIENT_ID: string;
  AUTH0_CALLBACK_URL: string;
};

export function configFromProcessEnv(): Config {
  const config: Config = {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN!,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID!,
    AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL!,
  };

  // TODO: Replace the filter call with a map or reduce
  const missingKeys = Object.keys(config).filter((key) => {
    // @ts-ignore:
    const value = config[key];
    if (!value) {
      return true;
    }
    return false;
  });

  if (missingKeys.length > 0) {
    throw new Error(
      `Missing required environment variable(s): ${missingKeys.join(", ")}`
    );
  }

  return config;
}
