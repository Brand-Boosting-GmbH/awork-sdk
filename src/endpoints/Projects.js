import '../globalTypedef'
import { Project } from "../model/Project"
import { ProjectMembers } from "./ProjectMembers"
import { EntityFiles } from "./EntityFiles"
import { ProjectProjectStatuses } from "./ProjectProjectStatuses"
import { TaskDependency } from '../model/TaskDependency'
import { Autopilots } from './Autopilots'
import { ProjectAutomations } from './ProjectAutomations'
import { ProjectMilestone } from '../model/ProjectMilestone'
import { EntityImages } from './EntityImages'
import { ProjectTasks } from './ProjectTasks'
import { ProjectSubtasks } from './ProjectSubtasks'
import { TaskLists } from './TaskLists'
import { EntityTags } from './EntityTags'
import { ProjectTaskStatuses } from './ProjectTaskStatuses'


/**
 * Class corresponding to Aworks Projects Endpoints
 * @category Endpoints
 * @see [Projects in Awork API Docs](https://openapi.awork.com/#/Projects)
 */
export class Projects {

    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client 
     */
    constructor(client) {
        /**
         * @private
         */
        this._client = client
    }

    /**
     * Returns the project with the specified id if the user has 'read' permissions of feature 'project-master-data'.
     * @param {String} projectId The id of the project.
     * @returns {Promise<Project>}
     */
    async get(projectId) {
        const response = await this._client.get(`/projects/${projectId}`)
        const data = response.data()
        return new Project(data)
    }

    /**
     * Returns all projects the user has 'read' permissions of feature 'project-master-data' for.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<Project>>}
     */
    async list(options) {
        const response = await this._client.get(`/projects`, options)
        const data = response.data()
        return data.map(d => new Project(d))
    }

    /**
     * @typedef {Object} ProjectCreateModel
     * @property {String} name The name of the Project
     * @property {String} [description] The project description.
     * @property {String} [startDate] The start date of the project.
     * @property {String} [dueDate] The due date of the project.
     * @property {String} [companyId] The id of the company.
     * @property {Number} [timeBudget] The time budget the project has in seconds.
     * @property {Boolean} [isBillableByDefault] Whether project times should be billable by default.
     * @property {String} [projectTypeId] The id of the project type of this project.
     * @property {String} [projectStatusId] The id of the project status.
     * @property {String} [projectTemplateId] The id of the template which is used to create the project.
     */

    /**
     * Creates a new project.
     * @param {ProjectCreateModel} project The project creation object
     * @returns {Promise<Project>}
     */
    async create(project) {
        const response = await this._client.post(`/projects`, project)
        const data = response.data()
        return new Project(data)
    }

    /**
     * @typedef {Object} ProjectUpdateModel
     * @property {String} [name] The name of the Project
     * @property {String} [description] The project description.
     * @property {String} [startDate] The start date of the project.
     * @property {String} [dueDate] The due date of the project.
     * @property {String} [companyId] The id of the company.
     * @property {Number} [timeBudget] The time budget the project has in seconds.
     * @property {Boolean} [isBillableByDefault] Whether project times should be billable by default.
     */

    /**
     * Updates the project with the specified id.
     * The user can update a project if he is the owner or he needs 'write' permissions of the feature 'project-master-data'.
     * @param {String} projectId The id of the project.
     * @param {ProjectUpdateModel} project The project update object
     * @returns {Promise<Project>}
     */
    async update(projectId, project) {
        const response = await this._client.put(`/projects/${projectId}`, project)
        const data = response.data()
        return new Project(data)
    }

    /**
     * @typedef {Object} DeleteProjectOptions
     * @property {Boolean} [deleteTimeTrackings] Set to true to delete also the related time trackings. If it is set to false the related time trackings are still there, but the project and task reference will be cleared. That will also happen if no request body is present.
     */

    /**
     * Deletes the project with the specified id. In the default case the related tasks of this project will also be deleted and the related time trackings of this project and all tasks loose the relation to the deleted project and tasks. To delete the time trackings as well, it is necessary to set the 'DeleteTimeTrackings' property of the post model to true.
     * 
     * The user can delete a project if he is the owner or he needs 'write' permissions of the feature 'project-master-data
     * @param {String} projectId The id of the project.
     * @param {DeleteProjectOptions} [options]
     * @returns {Promise<void>}
     */
    async delete(projectId, options = { deleteTimeTrackings: false }) {
        await this._client.post(`/projects/${projectId}/delete`, options)
    }

    /**
     * @typedef {Object} TaskBundleAddToProjectModel
     * @property {String} taskBundleId The id of the task bundle to add to the entity.
     * @property {String} projectTemplateId The id of the project template to get the task bundle from.
     * @property {String} defaultTaskListIdForEmails nullable
     */

    /**
     * Adds the task bundle to the project with the specified id.
     * @param {String} projectId The id of the project to add the task bundle.
     * @param {TaskBundleAddToProjectModel} taskBundelToBeAdded The model to add the task bundle to the project.
     * @returns {Promise<void>}
     */
    async addTaskBundle(projectId, taskBundelToBeAdded) {
        await this._client.post(`/projects/${projectId}/addtaskbundle`, taskBundelToBeAdded)
    }

    /**
     * Returns all task dependencies for a specific project. To get all dependencies of a project, the user needs project planning permissions on that project.
     * @param {String} projectId The id of the project.
     * @returns {Promise<Array<TaskDependency>>}
     */
    async taskDependencyList(projectId) {
        const response = await this._client.get(`/projects/${projectId}/taskdependencies`)
        const data = response.data()
        return data.map(d => new TaskDependency(d))
    }

    /**
     * Returns all project milestones of the specified project. The user needs 'read' permissions of feature 'project-planning-data' to get the data.
     * @param {String} projectId The id of the project.
     * @returns {Promise<Array<ProjectMilestone>>}
     */
    async milestoneList(projectId) {
        const response = await this._client.get(`projects/${projectId}/milestones`)
        const data = response.data()
        return data.map(d => new ProjectMilestone(d))
    }

    /**
     * Returns the {@link ProjectMembers} Endpoint with the specified project Id.
     * @param {String} projectId The id of the project.
     * @returns {ProjectMembers}
     */
    members(projectId) {
        return new ProjectMembers(this._client, projectId)
    }

    /**
     * Returns the {@link EntityFiles} Endpoint with the specified project Id and entityType 'projects'.
     * @param {String} projectId The id of the project.
     * @returns {EntityFiles}
     */
    files(projectId) { //projects = entityName, projectId = entityId
        return new EntityFiles(this._client, 'projects', projectId)
    }

    /**
     * Returns the {@link ProjectProjectStatuses} Endpoint with the specified project Id.
     * @param {String} projectId The id of the project.
     * @returns {ProjectProjectStatus}
     */
    projectStatuses(projectId) {
        return new ProjectProjectStatuses(this._client, projectId)
    }

    /**
      * Returns the {@link ProjectTaskStatuses} Endpoint with the specified project Id.
     * @param {String} projectId The id of the project.
     * @returns {ProjectTaskStatuses}
     */
    taskStatuses(projectId) {
        return new ProjectTaskStatuses(this._client, projectId)
    }

    /**
     * Returns the {@link Autopilots} Endpoint with the specified project Id.
     * @param {String} projectId The id of the project.
     * @returns {Autopilots}
     */
    autopilots(projectId) {
        return new Autopilots(this._client, projectId)
    }

    /**
     * Returns the {@link ProjectAutomations} Endpoint with the specified project Id.
     * @param {String} projectId The id of the project.
     * @returns {ProjectAutomations}
     */
    automations(projectId) {
        return new ProjectAutomations(this._client, projectId)
    }

    /**
     * Returns the {@link EntityImages} Endpoint with the specified project Id.
     * @param {String} projectId The id of the project.
     * @returns {EntityImages}
     */
    images(projectId) {
        return new EntityImages(this._client, 'projects', projectId)
    }

    /**
     * Returns the {@link ProjectTasks} Endpoint with the specified project Id.
     * @param {String} projectId The id of the project.
     * @returns {ProjectTasks}
     */
    tasks(projectId) {
        return new ProjectTasks(this._client, projectId)
    }

    /**
     * Returns the {@link ProjectsSubtasks} Endpoint with the specified project Id.
     * @param {String} projectId The id of the project.
     * @returns {ProjectsSubtasks}
     */
    projectSubtasks(projectId) {
        return new ProjectSubtasks(this._client, projectId)
    }

    /**
     * Returns the {@link TaskLists} Endpoint with the specified project Id.
     * @param {String} projectId The id of the project.
     * @returns {TaskLists}
     */
    taskLists(projectId) {
        return new TaskLists(this._client, 'projects', projectId)
    }

    /**
     * Returns the {@link EntityTags} Endpoint with the specified project Id and name.
     * @param {String} projectId The id of the project.
     * @returns 
     */
    tags(projectId) {
        return new EntityTags(this._client, 'projects', projectId)
    }

    /**
     * Returns the {@link EntityTags} Endpoint with the specified project Id and name.
     * @param {String} projectId The id of the project.
     * @returns 
     * @deprecated
     */
    entityTags(projectId) {
        return this.tags(projectId)
    }
}