import axios from './api';

/**
 * Get a single project
 * @param {Project['id'] | Project['reference']} identifier - The project identifier
 * @returns {Project}
 */
export async function getProject(identifier) {
	const {data} = await axios.get(`/project/${identifier}`);
	return data;
}

/**
 * Add a project
 * @param {Project} project
 * @returns {Project} - The added project
 */
export async function createProject(project) {
	await axios.post('/project', project);
	return project;
}

/**
 * Update a project
 * @param {Project} updates - The values to update
 * @param {Returns} project
 */
export async function updateProject(identifier, updates) {
	await axios.patch(`/project/${identifier}`, updates);
	return;
}

/**
 * Delete a project
 * @param {string} identifier - The project identifier
 */
export async function deleteProject(identifier) {
	await axios.delete(`/project/${identifier}`);
	return;
}