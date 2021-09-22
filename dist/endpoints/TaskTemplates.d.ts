/**
 * Class corresponding to Aworks tasktemplates related part of the TaskBundles Endpoints
 * @category Endpoints
 * @see [TaskBundles in Awork API Docs](https://openapi.awork.io/#/TaskBundles)
 */
export class TaskTemplates {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     */
    constructor(client: import('../client/index').Client);
    /**@private */
    private _client;
    /**
     * @typedef {Object} Recurrency
     * @property {String} recurrencyRule
     * @property {Number} [recurrencyInterval]
     * @property {Number} [relativeDueOn] The relative due date and time of the task created from this recurrence rule, in seconds, from the moment of creating the task by a recurrence rule.
     * @property {String} recurrencyStartOn DateTime when recurring task creation will start, considering the set Recurrency Rule and Recurrency Interval.
     */
    /**
     * Returns the existing recurrency rule for one task template.
     * @param {String} taskTemplateId The id of the task template.
     * @returns {Promise<Recurrency>}
     */
    recurrency(taskTemplateId: string): Promise<{
        recurrencyRule: string;
        recurrencyInterval?: number;
        /**
         * The relative due date and time of the task created from this recurrence rule, in seconds, from the moment of creating the task by a recurrence rule.
         */
        relativeDueOn?: number;
        /**
         * DateTime when recurring task creation will start, considering the set Recurrency Rule and Recurrency Interval.
         */
        recurrencyStartOn: string;
    }>;
    /**
     * This method is used to assign users to a task template that belongs to a task bundle. You always need to pass all users you want to assign. If an already assigned user is not in the passed user id list, he/she gets unassigned.
     * Users need write permissions for the feature 'task-manage-config'.
     * @param {string} taskTemplateId The id of the task template.
     * @param {Array<String>} userIds An array with user ids.
     * @returns {Promise<void>}
     */
    setAssignees(taskTemplateId: string, userIds: Array<string>): Promise<void>;
    subTaskTemplates(taskTemplateId: any): TaskTemplateSubTaskTemplates;
}
import { TaskTemplateSubTaskTemplates } from "./TaskTemplateSubTaskTemplates";
