/**
 * Class corresponding to Aworks Projects Endpoints
 * @category Endpoints
 * @see [Projects in Awork API Docs](https://openapi.awork.io/#/Projects)
 */
export class Projects {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     */
    constructor(client: import('../client/index').Client);
    /**
     * @private
     */
    private _client;
    /**
     * Returns the project with the specified id if the user has 'read' permissions of feature 'project-master-data'.
     * @param {String} projectId The id of the project.
     * @returns {Promise<Project>}
     */
    get(projectId: string): Promise<Project>;
    /**
     * Returns all projects the user has 'read' permissions of feature 'project-master-data' for.
     * @param {ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<Project>>}
     */
    list(options?: ListOptions): Promise<Array<Project>>;
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
    create(project: {
        /**
         * The name of the Project
         */
        name: string;
        /**
         * The project description.
         */
        description?: string;
        /**
         * The start date of the project.
         */
        startDate?: string;
        /**
         * The due date of the project.
         */
        dueDate?: string;
        /**
         * The id of the company.
         */
        companyId?: string;
        /**
         * The time budget the project has in seconds.
         */
        timeBudget?: number;
        /**
         * Whether project times should be billable by default.
         */
        isBillableByDefault?: boolean;
        /**
         * The id of the project type of this project.
         */
        projectTypeId?: string;
        /**
         * The id of the project status.
         */
        projectStatusId?: string;
        /**
         * The id of the template which is used to create the project.
         */
        projectTemplateId?: string;
    }): Promise<Project>;
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
    update(projectId: string, project: {
        /**
         * The name of the Project
         */
        name?: string;
        /**
         * The project description.
         */
        description?: string;
        /**
         * The start date of the project.
         */
        startDate?: string;
        /**
         * The due date of the project.
         */
        dueDate?: string;
        /**
         * The id of the company.
         */
        companyId?: string;
        /**
         * The time budget the project has in seconds.
         */
        timeBudget?: number;
        /**
         * Whether project times should be billable by default.
         */
        isBillableByDefault?: boolean;
    }): Promise<Project>;
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
    delete(projectId: string, options?: {
        /**
         * Set to true to delete also the related time trackings. If it is set to false the related time trackings are still there, but the project and task reference will be cleared. That will also happen if no request body is present.
         */
        deleteTimeTrackings?: boolean;
    }): Promise<void>;
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
    addTaskBundle(projectId: string, taskBundelToBeAdded: {
        /**
         * The id of the task bundle to add to the entity.
         */
        taskBundleId: string;
        /**
         * The id of the project template to get the task bundle from.
         */
        projectTemplateId: string;
        /**
         * nullable
         */
        defaultTaskListIdForEmails: string;
    }): Promise<void>;
    /**
     * Returns all task dependencies for a specific project. To get all dependencies of a project, the user needs project planning permissions on that project.
     * @param {String} projectId The id of the project.
     * @returns {Promise<Array<TaskDependency>>}
     */
    taskDependencyList(projectId: string): Promise<Array<TaskDependency>>;
    /**
     * Returns all project milestones of the specified project. The user needs 'read' permissions of feature 'project-planning-data' to get the data.
     * @param {String} projectId The id of the project.
     * @returns {Promise<Array<ProjectMilestone>>}
     */
    milestoneList(projectId: string): Promise<Array<ProjectMilestone>>;
    /**
     * Returns the {@link ProjectMembers} Endpoint with the specified project Id.
     * @param {String} projectId The id of the project.
     * @returns {ProjectMembers}
     */
    members(projectId: string): ProjectMembers;
    /**
     * Returns the {@link EntityFiles} Endpoint with the specified project Id and entityType 'projects'.
     * @param {String} projectId The id of the project.
     * @returns {EntityFiles}
     */
    files(projectId: string): EntityFiles;
    /**
     * Returns the {@link ProjectProjectStatuses} Endpoint with the specified project Id.
     * @param {String} projectId The id of the project.
     * @returns {ProjectProjectStatus}
     */
    projectStatuses(projectId: string): any;
    /**
     * Returns the {@link Autopilots} Endpoint with the specified project Id.
     * @param {String} projectId The id of the project.
     * @returns {Autopilots}
     */
    autopilots(projectId: string): Autopilots;
    /**
     * Returns the {@link ProjectAutomations} Endpoint with the specified project Id.
     * @param {String} projectId The id of the project.
     * @returns {ProjectAutomations}
     */
    automations(projectId: string): ProjectAutomations;
    /**
     * Returns the {@link EntityImages} Endpoint with the specified project Id.
     * @param {String} projectId The id of the project.
     * @returns {EntityImages}
     */
    images(projectId: string): EntityImages;
    /**
     * Returns the {@link ProjectTasks} Endpoint with the specified project Id.
     * @param {String} projectId The id of the project.
     * @returns {ProjectTasks}
     */
    tasks(projectId: string): ProjectTasks;
    /**
     * Returns the {@link ProjectsSubtasks} Endpoint with the specified project Id.
     * @param {String} projectId The id of the project.
     * @returns {ProjectsSubtasks}
     */
    projectSubtasks(projectId: string): any;
}
import { Project } from "../model/Project";
import { TaskDependency } from "../model/TaskDependency";
import { ProjectMilestone } from "../model/ProjectMilestone";
import { ProjectMembers } from "./ProjectMembers";
import { EntityFiles } from "./EntityFiles";
import { Autopilots } from "./Autopilots";
import { ProjectAutomations } from "./ProjectAutomations";
import { EntityImages } from "./EntityImages";
import { ProjectTasks } from "./ProjectTasks";
