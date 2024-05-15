/** @module Project **/

const axios = require('./api');

/**
 * @function getProject Get a single project
 * @param {import('./types').Project['id'] | import('./types').Project['reference']} identifier - The project identifier
 * @returns {import('./types').Project}
 */
async function getProject(identifier) {
	const {data} = await axios.get(`/project/${identifier}`);
	return data;
}

/**
 * @function createProject Add a project
 * @param {Project} project
 * @returns {import('./types').Project} - The added project
 */
async function createProject(project) {
	await axios.post('/project', project);
	return project;
}

/**
 * @function updateProject Update a project
 * @param {import('./types').Project} updates - The values to update
 * @param {import('./types').Project} project
 */
async function updateProject(identifier, updates) {
	await axios.patch(`/project/${identifier}`, updates);
	return;
}

/**
 * @function deleteProject Delete a project
 * @param {string} identifier - The project identifier
 */
async function deleteProject(identifier) {
	await axios.delete(`/project/${identifier}`);
	return;
}

module.exports = {
	getProject,
	createProject,
	updateProject,
	deleteProject,
};
