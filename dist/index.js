"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Awork = void 0;

var _client = require("./client");

var _Companies = require("./endpoints/Companies");

var _Projects = require("./endpoints/Projects");

var _Teams = require("./endpoints/Teams");

var _Tasks = require("./endpoints/Tasks");

var _Absences = require("./endpoints/Absences");

var _ApiUsers = require("./endpoints/ApiUsers");

var _UsersAssignedTasks = require("./endpoints/UsersAssignedTasks");

var _Autopilots = require("./endpoints/Autopilots");

var _ClientApplications = require("./endpoints/ClientApplications");

var _Files = require("./endpoints/Files");

var _ProjectMilestones = require("./endpoints/ProjectMilestones");

var _ProjectRoles = require("./endpoints/ProjectRoles");

var _ProjectTemplates = require("./endpoints/ProjectTemplates");

var _ProjectTypes = require("./endpoints/ProjectTypes");

var _TaskBundles = require("./endpoints/TaskBundles");

var _TaskDependencies = require("./endpoints/TaskDependencies");

var _TaskViews = require("./endpoints/TaskViews");

var _TemporaryFiles = require("./endpoints/TemporaryFiles");

var _TimeEntries = require("./endpoints/TimeEntries");

var _TimeReports = require("./endpoints/TimeReports");

var _Users = require("./endpoints/Users");

var _Webhooks = require("./endpoints/Webhooks");

var _TypesOfWork = require("./endpoints/TypesOfWork");

var _MeAssignedTasks = require("./endpoints/MeAssignedTasks");

var _MeDashboards = require("./endpoints/MeDashboards");

var _MeProjectTasks = require("./endpoints/MeProjectTasks");

var _MeTaskViews = require("./endpoints/MeTaskViews");

var _MeTimeTrackings = require("./endpoints/MeTimeTrackings");

var _MeUserOtherPrivateSubtasks = require("./endpoints/MeUserOtherPrivateSubtasks");

var _MeUsers = require("./endpoints/MeUsers");

var _MeUserPrivateSubtasks = require("./endpoints/MeUserPrivateSubtasks");

var _ProjectStatuses = require("./endpoints/ProjectStatuses");

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
class Awork {
  /**
   * @param {({apiKey: String})} init 
   */
  constructor({
    apiKey
  }) {
    this.client = new _client.Client(apiKey);
  }
  /**
   * The Absence Endpoints allow you to manage Absences for users.
   * @returns {Absences}
   */


  get absences() {
    return new _Absences.Absences(this.client);
  }
  /**
   * API users are required to create API keys. CHanges made by a client using API key are shown in the UI as the associated API user.
   * @returns {ApiUsers}
   */


  get apiUsers() {
    return new _ApiUsers.ApiUsers(this.client);
  }
  /**
   * The autopilot endpoints allow you to manage the awork autopilot for projects.
   * @returns {UsersAssignedTasks}
   */


  get assignedTasks() {
    return new _UsersAssignedTasks.UsersAssignedTasks(this.client);
  }
  /**
   * The autopilot endpoint allow you to manage the awork autopilot for projects.
   * @returns {Autopilots}
   */


  get autopilot() {
    return new _Autopilots.Autopilots(this.client);
  }
  /**
   * Client applications are important for the external login flow used by your applications. These endpoints allow you to manage the client applications registered by your workspace.
   * @returns {ClientApplications}
   */


  get clientApplications() {
    return new _ClientApplications.ClientApplications(this.client);
  }
  /**
   * The company endpoints allow you to add and manage companies and their details.
   * @returns {Companies}
   */


  get companies() {
    return new _Companies.Companies(this.client);
  }
  /**
   * The file endpoints to get non shared and non temporary files.
   * @returns {Files}
   */


  get files() {
    return new _Files.Files(this.client);
  }
  /**
   * The project milestone endpoints allow you to work with the basic project milestone data.
   * @returns {ProjectMilestones}
   */


  get projectMilestones() {
    return new _ProjectMilestones.ProjectMilestones(this.client);
  }
  /**
   * The project roles endpoints allow you to define roles for your project members You can assign members to these roles on each project. If the roles are linked to the project types then the roles are available in every project using this type. When you want to delete a project role which is still in use, you are required to specify which role the currently assigned members should be assigned to instead.
   * @returns {ProjectRoles}
   */


  get projectRoles() {
    return new _ProjectRoles.ProjectRoles(this.client);
  }
  /**
   * The project status endpoints allow you to define statuses for projects. A status defines the current situation of a project. The statuses of a project type have an order which defines the flow the project typically goes through. Statuses can also be unlinked from the typical flow.
   * @returns {ProjectStatuses}
   */


  get projectStatuses() {
    return new _ProjectStatuses.ProjectStatuses(this.client);
  }
  /**
   * The project templates endpoints allow you to define different templates for projects.
   * @returns {ProjectTemplates}
   */


  get projectTemplates() {
    return new _ProjectTemplates.ProjectTemplates(this.client);
  }
  /**
   * The project types endpoints allow you to define different types for projects. The project types contain the basic information of the project. This includes the project roles, statuses and status orders.
   * @returns {ProjectTypes}
   */


  get projectTypes() {
    return new _ProjectTypes.ProjectTypes(this.client);
  }
  /**
   * The task dependency endpoints allow you to get all task dependencies of a project or a task. Every Task can have multiple predeccessors and one successor
   * @returns {TaskDependencies}
   */


  get taskDependencied() {
    return new _TaskDependencies.TaskDependencies(this.client);
  }
  /**
   * Task views are saved filters on project tasks. They can be stored by users and shared within the workspace. Users can subscribe to shared task views to use them.
   * @returns {TaskViews}
   */


  get taskViews() {
    return new _TaskViews.TaskViews(this.client);
  }
  /**
   * The projects endpoints allow you to work with the basic project data. When creating a project, we generate a unique key which will be used as part of the unique project task key of this project. If you don't assign a customer to the project, the project will be an internal project. In addition to the normal operation you can handle the project members and tags of the projects. When you assign a user to this project as a project member, you need to specify a project role for this project member. The available roles depend on the type of the project. You can also make one member responsible for the project, which means that we will notify this person if anything of interest happens in the project. The tags help you to add additional values to your projects and to find them faster. If you create new tags, they will be available for all other projects, too.
   * @returns {Projects}
   */


  get projects() {
    return new _Projects.Projects(this.client);
  }
  /**
   * Task bundles allow users to define templates for tasks and lists that can be added to a project at any time. Task templates define the tasks that will be created, and task list template define the task lists that will be created. As with tasks, task templates can be in multiple task list templates.
   * @returns {TaskBundles}
   */


  get taskBundles() {
    return new _TaskBundles.TaskBundles(this.client);
  }
  /**
   * The teams endpoints are used to manage the details of your team.
   * @returns {Teams}
   */


  get teams() {
    return new _Teams.Teams(this.client);
  }
  /**
   * The temporary file endpoints allow you to upload and update files that do not have a connection to any entity. The files can be linked to an entity later. They don’t show up in awork before they are either linked to a file or marked as a global file. Only the user who uploaded the file has access to the temporary file.
   * @returns {temporaryFiles}
   */


  get temporaryFiles() {
    return new _TemporaryFiles.TemporaryFiles(this.client);
  }
  /**
   * The endpoints can be used for general operations on existing time entries. A time entry can be linked to a task and / or project, although it can also be created for the user themselves without any entity link. If the time entry is linked to a project it is also indirectly linked to the company of that project. Similarly, the time entry is automatically linked to the project of the the task.
   * @returns {TimeEntries}
   */


  get timeEntries() {
    return new _TimeEntries.TimeEntries(this.client);
  }
  /**
   * The endpoints to manage the time reports.
   * @returns {timeReports}
   */


  get timeReports() {
    return new _TimeReports.TimeReports(this.client);
  }
  /**
   * The type of work endpoints allow you to manage your types of work. They are helpful to describe the type of a task or a time entry.
   * @returns {TypesOfWork}
   */


  get typesOfWork() {
    return new _TypesOfWork.TypesOfWorks(this.client);
  }
  /**
   * The users endpoints allow you to manage the users of your workspace as well as their contact details.
   * @returns {Users}
   */


  get users() {
    return new _Users.Users(this.client);
  }
  /**
   * Webhooks can be used to get notified about events happening. These endpoints allow you to configure webhooks. Read more about webhooks in the developer documentation above.
   * @returns {Webhooks}
   */


  get webhooks() {
    return new _Webhooks.Webhooks(this.client);
  }
  /**
   * The Tasks endpoints can be used for general task operations and batch operations. The batch operations include changing the task status, assigning users and more.
   * @returns {Tasks}
   */


  get tasks() {
    return new _Tasks.Tasks(this.client);
  }

  get me() {
    return {
      assignedTasks: new _MeAssignedTasks.MeAssignedTasks(this.client),
      dashboards: new _MeDashboards.MeDashboards(this.client),
      projectTasks: new _MeProjectTasks.MeProjectTasks(this.client),
      taskViews: new _MeTaskViews.MeTaskViews(this.client),
      timeTrackings: new _MeTimeTrackings.MeTimeTrackings(this.client),
      userOtherPrivateSubtasks: new _MeUserOtherPrivateSubtasks.MeUserOtherPrivateSubtasks(this.client),
      userPrivateSubtasks: new _MeUserPrivateSubtasks.MeUserPrivateSubtasks(this.client),
      users: new _MeUsers.MeUsers(this.client),
      usersPrivateTasks: new _MeUserPrivateSubtasks.MeUserPrivateSubtasks(this.client)
    };
  }

}

exports.Awork = Awork;