/**
 * Class corresponding to Aworks Users Endpoints
 * @category Endpoints
 * @see [Users in Awork API Docs](https://openapi.awork.io/#/Users)
 */
export class MeUsers extends Users {
    /**
     * Returns the currently logged-in user and workspace.
     * @returns {Promise<User>}
     */
    get(): Promise<User>;
}
import { Users } from "./Users";
import { User } from "../model/User";
