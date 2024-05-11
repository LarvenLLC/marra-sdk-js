/**
 * Get a single project
 * @param {import('./types').Project['id'] | import('./types').Project['reference']} identifier - The project identifier
 * @returns {import('./types').Project}
 */
export function getProject(identifier: import('./types').Project['id'] | import('./types').Project['reference']): import('./types').Project;
/**
 * Add a project
 * @param {Project} project
 * @returns {import('./types').Project} - The added project
 */
export function createProject(project: Project): import('./types').Project;
/**
 * Update a project
 * @param {import('./types').Project} updates - The values to update
 * @param {import('./types').Project} project
 */
export function updateProject(identifier: any, updates: import('./types').Project): Promise<void>;
/**
 * Delete a project
 * @param {string} identifier - The project identifier
 */
export function deleteProject(identifier: string): Promise<void>;
