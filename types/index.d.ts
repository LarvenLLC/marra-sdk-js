/**
 * Initialize Marra SDK
 * @param {import('./src/types').Config} configuration - Configuration with API keys to initialize SDK
 */
export default function Marra({ clientID, clientSecret }: import('./src/types').Config): void;
export * from "./src/license";
export * from "./src/project";
export * from "./src/usage";
