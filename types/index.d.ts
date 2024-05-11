export = Marra;
/**
 * Initialize Marra SDK
 * @param {import('./types').Config} configuration - Configuration with API keys to initialize SDK
 */
declare function Marra({ clientID, clientSecret }: import('./types').Config): void;
declare namespace Marra {
    export { license, project, usage };
}
import license = require("./license");
import project = require("./project");
import usage = require("./usage");
