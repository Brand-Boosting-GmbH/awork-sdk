/**
 * Class corresponding to Aworks TaskViews Endpoints
 * @category Endpoints
 * @see [TaskViews in Awork API Docs](https://openapi.awork.io/#/TaskViews)
 */
export class MeTaskViews extends TaskViews {
    /**
     * @typedef {Object} TaskViewCreateModel
     * @property {String} filter The filter query that is applied to the tasks results. The syntax follows the normal filter conventions that can be used on GET routes
     * @property {String} filterSettings The filter settings to display.
     * @property {String} name The name of the task view.
     * @property {Boolean} isShared If the task view is shared or not.
     */
    /**
     * Creates a new task view. The user will automatically subscribe to it in the process. If the provided filter string is invalid the request will fail with status 400.
     * @param {TaskViewCreateModel} taskViewCreateModel
     * @returns {Promise<TaskView>}
     */
    create(taskViewCreateModel: {
        /**
         * The filter query that is applied to the tasks results. The syntax follows the normal filter conventions that can be used on GET routes
         */
        filter: string;
        /**
         * The filter settings to display.
         */
        filterSettings: string;
        /**
         * The name of the task view.
         */
        name: string;
        /**
         * If the task view is shared or not.
         */
        isShared: boolean;
    }): Promise<TaskView>;
    /**
     * @typedef {TaskViewCreateModel} TaskViewUpdateModel
     */
    /**
     * Updates an existing task view. If the provided filter string is invalid the request will fail with status 400. Only the original author can update non-shared task view. Shared tasks lists can only be updated by the original author or someone with project planning permissions.
     * @param {TaskViewUpdateModel} taskViewUpdateModel The model to update the task view.
     * @returns {Promise<Array<TaskView>>}
     */
    update(taskViewUpdateModel: {
        /**
         * The filter query that is applied to the tasks results. The syntax follows the normal filter conventions that can be used on GET routes
         */
        filter: string;
        /**
         * The filter settings to display.
         */
        filterSettings: string;
        /**
         * The name of the task view.
         */
        name: string;
        /**
         * If the task view is shared or not.
         */
        isShared: boolean;
    }): Promise<Array<TaskView>>;
    /**
     * Deletes a task view. This also removes all subscriptions of the task view. Shared task views can be deleted by the original author or users with admin permissions. Private task views can only be deleted by the original author.
     * @returns {Promise<void>}
     */
    delete(): Promise<void>;
    /**
     * Subscribes the user to a shared task view. Afterwards the user can retrieve the matching tasks from /me/taskViews/id/tasks.
     * @param {String} taskViewId The id of the task view the user subscribes to.
     * @returns {Promise<void>}
     */
    subscribe(taskViewId: string): Promise<void>;
    /**
     * Removes the subscription from a user to a task view. Unsunscribing only works for shared task views.
     * @param {String} taskViewId The id of the task view the user unsubscribes to.
     * @returns {Promise<void>}
     */
    unsubscribe(taskViewId: string): Promise<void>;
    /**
     * Applies the filter of a task view the current user subscribed to and returns all matching tasks.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<Task>>}
     */
    tasks(options?: import('../global').ListOptions): Promise<Array<Task>>;
}
import { TaskViews } from "./TaskViews";
import { TaskView } from "../model/TaskView";
import { Task } from "../model/Task";
