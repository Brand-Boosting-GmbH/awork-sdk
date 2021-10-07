/**
 * @typedef {Object} FilterQuery
 */
/**
 * @typedef {Object} ListOptions
 * @property {Number} [page] The current page number
 * @property {Number} [pageSize] How many items should be returned on each page. Maximum of 1000.
 * @property {(FilterQuery|String)} [filterBy] Filter String or FilterQuery
 */
/**
 * @typedef {('attach_money'|'poll'|'golf_course'|'all_inclusive'|'portrait'|'timeline'|'transform'|'description'|'folder'|'computer'|'web'|'phone_iphone'|'cloud'|'local_movies'|'shopping_cart'|'brush'|'image'|'camera_alt'|'movie_creation'|'public'|'whatshot'|'extension'|'explore'|'lock'|'settings'|'stars'|'store'|'school'|'local_bar'|'question_answer'|'favorite'|'work'|'flight_takeoff'|'map'|'local_dining')} Icon Possible awork icons.
 */
/**
 * @typedef {('red'|'coral'|'yellow'|'green'|'teal'|'arctic'|'blue'|'azure'|'purple'|'violet')} Color Colors supported by awork.
 */
/**
 * Awork Class
 * @category Util
 */
export class Awork {
    /**
     * @param {({apiKey: String})} init
     */
    constructor({ apiKey }: ({
        apiKey: string;
    }));
    client: Client;
    /**
     * The Absence Endpoints allow you to manage Absences for users.
     * @returns {Absences}
     */
    get absences(): Absences;
    /**
     * API users are required to create API keys. CHanges made by a client using API key are shown in the UI as the associated API user.
     * @returns {ApiUsers}
     */
    get apiUsers(): ApiUsers;
    /**
     * The autopilot endpoints allow you to manage the awork autopilot for projects.
     * @returns {UsersAssignedTasks}
     */
    get assignedTasks(): UsersAssignedTasks;
    /**
     * The autopilot endpoint allow you to manage the awork autopilot for projects.
     * @returns {Autopilots}
     */
    get autopilot(): Autopilots;
    /**
     * Client applications are important for the external login flow used by your applications. These endpoints allow you to manage the client applications registered by your workspace.
     * @returns {ClientApplications}
     */
    get clientApplications(): ClientApplications;
    /**
     * The company endpoints allow you to add and manage companies and their details.
     * @returns {Companies}
     */
    get companies(): Companies;
    /**
     * The file endpoints to get non shared and non temporary files.
     * @returns {Files}
     */
    get files(): Files;
    /**
     * The project milestone endpoints allow you to work with the basic project milestone data.
     * @returns {ProjectMilestones}
     */
    get projectMilestones(): ProjectMilestones;
    /**
     * The project roles endpoints allow you to define roles for your project members You can assign members to these roles on each project. If the roles are linked to the project types then the roles are available in every project using this type. When you want to delete a project role which is still in use, you are required to specify which role the currently assigned members should be assigned to instead.
     * @returns {ProjectRoles}
     */
    get projectRoles(): ProjectRoles;
    /**
     * The project status endpoints allow you to define statuses for projects. A status defines the current situation of a project. The statuses of a project type have an order which defines the flow the project typically goes through. Statuses can also be unlinked from the typical flow.
     * @returns {ProjectStatuses}
     */
    get projectStatuses(): ProjectStatuses;
    /**
     * The project templates endpoints allow you to define different templates for projects.
     * @returns {ProjectTemplates}
     */
    get projectTemplates(): ProjectTemplates;
    /**
     * The project types endpoints allow you to define different types for projects. The project types contain the basic information of the project. This includes the project roles, statuses and status orders.
     * @returns {ProjectTypes}
     */
    get projectTypes(): ProjectTypes;
    /**
     * The task dependency endpoints allow you to get all task dependencies of a project or a task. Every Task can have multiple predeccessors and one successor
     * @returns {TaskDependencies}
     */
    get taskDependencied(): TaskDependencies;
    /**
     * Task views are saved filters on project tasks. They can be stored by users and shared within the workspace. Users can subscribe to shared task views to use them.
     * @returns {TaskViews}
     */
    get taskViews(): TaskViews;
    /**
     * The projects endpoints allow you to work with the basic project data. When creating a project, we generate a unique key which will be used as part of the unique project task key of this project. If you don't assign a customer to the project, the project will be an internal project. In addition to the normal operation you can handle the project members and tags of the projects. When you assign a user to this project as a project member, you need to specify a project role for this project member. The available roles depend on the type of the project. You can also make one member responsible for the project, which means that we will notify this person if anything of interest happens in the project. The tags help you to add additional values to your projects and to find them faster. If you create new tags, they will be available for all other projects, too.
     * @returns {Projects}
     */
    get projects(): Projects;
    /**
     * Task bundles allow users to define templates for tasks and lists that can be added to a project at any time. Task templates define the tasks that will be created, and task list template define the task lists that will be created. As with tasks, task templates can be in multiple task list templates.
     * @returns {TaskBundles}
     */
    get taskBundles(): TaskBundles;
    /**
     * The teams endpoints are used to manage the details of your team.
     * @returns {Teams}
     */
    get teams(): Teams;
    /**
     * The temporary file endpoints allow you to upload and update files that do not have a connection to any entity. The files can be linked to an entity later. They don’t show up in awork before they are either linked to a file or marked as a global file. Only the user who uploaded the file has access to the temporary file.
     * @returns {temporaryFiles}
     */
    get temporaryFiles(): any;
    /**
     * The endpoints can be used for general operations on existing time entries. A time entry can be linked to a task and / or project, although it can also be created for the user themselves without any entity link. If the time entry is linked to a project it is also indirectly linked to the company of that project. Similarly, the time entry is automatically linked to the project of the the task.
     * @returns {TimeEntries}
     */
    get timeEntries(): TimeEntries;
    /**
     * The endpoints to manage the time reports.
     * @returns {timeReports}
     */
    get timeReports(): any;
    /**
     * The type of work endpoints allow you to manage your types of work. They are helpful to describe the type of a task or a time entry.
     * @returns {TypesOfWork}
     */
    get typesOfWork(): any;
    /**
     * The users endpoints allow you to manage the users of your workspace as well as their contact details.
     * @returns {Users}
     */
    get users(): Users;
    /**
     * Webhooks can be used to get notified about events happening. These endpoints allow you to configure webhooks. Read more about webhooks in the developer documentation above.
     * @returns {Webhooks}
     */
    get webhooks(): Webhooks;
    /**
     * The Tasks endpoints can be used for general task operations and batch operations. The batch operations include changing the task status, assigning users and more.
     * @returns {Tasks}
     */
    get tasks(): Tasks;
    get me(): {
        assignedTasks: MeAssignedTasks;
        dashboards: MeDashboards;
        projectTasks: MeProjectTasks;
        taskViews: MeTaskViews;
        timeTrackings: MeTimeTrackings;
        userOtherPrivateSubtasks: any;
        userPrivateSubtasks: any;
        users: MeUsers;
        usersPrivateTasks: MeUsersPrivateTasks;
    };
}
export type FilterQuery = any;
export type ListOptions = {
    /**
     * The current page number
     */
    page?: number;
    /**
     * How many items should be returned on each page. Maximum of 1000.
     */
    pageSize?: number;
    /**
     * Filter String or FilterQuery
     */
    filterBy?: (FilterQuery | string);
};
/**
 * Possible awork icons.
 */
export type Icon = ('attach_money' | 'poll' | 'golf_course' | 'all_inclusive' | 'portrait' | 'timeline' | 'transform' | 'description' | 'folder' | 'computer' | 'web' | 'phone_iphone' | 'cloud' | 'local_movies' | 'shopping_cart' | 'brush' | 'image' | 'camera_alt' | 'movie_creation' | 'public' | 'whatshot' | 'extension' | 'explore' | 'lock' | 'settings' | 'stars' | 'store' | 'school' | 'local_bar' | 'question_answer' | 'favorite' | 'work' | 'flight_takeoff' | 'map' | 'local_dining');
/**
 * Colors supported by awork.
 */
export type Color = ('red' | 'coral' | 'yellow' | 'green' | 'teal' | 'arctic' | 'blue' | 'azure' | 'purple' | 'violet');
import { Client } from "./client";
import { Absences } from "./endpoints/Absences";
import { ApiUsers } from "./endpoints/ApiUsers";
import { UsersAssignedTasks } from "./endpoints/UsersAssignedTasks";
import { Autopilots } from "./endpoints/Autopilots";
import { ClientApplications } from "./endpoints/ClientApplications";
import { Companies } from "./endpoints/Companies";
import { Files } from "./endpoints/Files";
import { ProjectMilestones } from "./endpoints/ProjectMilestones";
import { ProjectRoles } from "./endpoints/ProjectRoles";
import { ProjectStatuses } from "./endpoints/ProjectStatuses";
import { ProjectTemplates } from "./endpoints/ProjectTemplates";
import { ProjectTypes } from "./endpoints/ProjectTypes";
import { TaskDependencies } from "./endpoints/TaskDependencies";
import { TaskViews } from "./endpoints/TaskViews";
import { Projects } from "./endpoints/Projects";
import { TaskBundles } from "./endpoints/TaskBundles";
import { Teams } from "./endpoints/Teams";
import { TimeEntries } from "./endpoints/TimeEntries";
import { Users } from "./endpoints/Users";
import { Webhooks } from "./endpoints/Webhooks";
import { Tasks } from "./endpoints/Tasks";
import { MeAssignedTasks } from "./endpoints/MeAssignedTasks";
import { MeDashboards } from "./endpoints/MeDashboards";
import { MeProjectTasks } from "./endpoints/MeProjectTasks";
import { MeTaskViews } from "./endpoints/MeTaskViews";
import { MeTimeTrackings } from "./endpoints/MeTimeTrackings";
import { MeUsers } from "./endpoints/MeUsers";
import { MeUsersPrivateTasks } from "./endpoints/MeUsersPrivateTasks";
