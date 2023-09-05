# Awork SDK

An (almost) complete JavaScript API wrapper for project management software [Awork](https://awork.com).
The goal of this project is to provide a comprehensive set of tools to interact with the Awork REST API when working with JavaScript.
This library can be imported as a CommonJS or ES module and supports autocompletion via .d.ts files.

Please be aware: Awork is a product of awork GmbH. This project is maintained by [Brand Boosting GmbH](https://brand-boosting.de) and is not endorsed by awork GmbH in any way.

## Resources:

* [Awork SDK Reference](https://brand-boosting-gmbh.github.io/awork-sdk/index.html) (every endpoint in detail)

* [The Awork Developer Portal](https://developers.awork.com/)

## Found a bug?

This library is quite new and there may be bugs. [Please open an issue](https://github.com/Brand-Boosting-GmbH/awork-sdk/issues) if you think you encountered a bug.

## ToDos

We are trying to maintain this project as actively as possible.
[Please open an issue](https://github.com/Brand-Boosting-GmbH/awork-sdk/issues) if you have a specific feature request.

- [ ] Documenting the OAuthClient and OAuthServer Class
- [ ] EasyOAuth Service for serverless applications
- [ ] Migrate to TypeScript
- [ ] Write actually useful tests
- [ ] Write Reference Home Page

## Installation:

<pre>
$ npm i @brandboostinggmbh/awork-sdk
</pre>

<pre>
import { Awork } from '@brandboostinggmbh/awork-sdk/dist'
const awork = new Awork({ apiKey: YOUR_API_KEY })
</pre>

## Usage:

Most endpoints include the CRUD operations (get, list, create, update and delete).
Sometimes there are additional business operations. (setArchived, removeProjectMember, addTags)
Nested endpoints can be chained. (eg. ```awork.projects.files(YOUR_PROJECT_ID).list()```)


##### Get a specific project

<pre>
await awork.projects.get( YOUR_PROJECT_ID )
</pre>

##### Get a list of teams

<pre>
await awork.teams.list()
</pre>

##### Create a new user

<pre>
await awork.users.create({
        firstName: 'John', 
        lastName: 'Smith',
        birthDate: '2021-09-21T08:30:26.7764709+00:00',
        gender: 'Male',
        title: 'Dr.',
        position: 'Manager',
        language: 'de-DE',
        capacityPerWeek: null,
        accountId: null
})
</pre>

##### Update a specific task

<pre>
await awork.tasks.update(YOUR_TASK_ID, {
    plannedDuration: 3600,
    remainingDuration: 1800,
    name: 'Fly me to the Moon',
    description: 'I want to be up there.',
    isPrio: false,
    startOn: null,
    dueOn: '2021-10-23T14:16:29.3420729Z',
    laneOrder: 0
})
</pre>

##### Delete a company

<pre>
await awork.companies.delete('ff11b111-11b1-1111-ab1111b11b11')
</pre>

##### Add tag to specific task

<pre>
await awork.tasks.tags(taskId).addTags([
    {
        name: 'CI/CD',
        color: 'blue'
    }
])
</pre>

##### Create TaskList inside specific project

<pre>
await awork.projects.taskLists(YOUR_PROJECT_ID).create({
    name: 'Moon Flight Preperations',
    order: 0
})
</pre>

##### Pagination and filtering

<pre>
await awork.projects.taskLists(YOUR_PROJECT_ID).list(
    {
        page: 2,
        pageSize: 20,
        filterBy: "Name eq 'Moon Flight Preperations'"
    }
)
</pre>

## Acknowledgements

Thanks to [Nils Czernig](https://www.linkedin.com/in/nils-czernig-301a1160/) at Awork for providing us with an unlimited demo workspace.

<img title="" src="https://brand-boosting-gmbh.github.io/awork-sdk/assets/brandboosting.png" alt="" width="169"><img title="" src="https://brand-boosting-gmbh.github.io/awork-sdk/assets/awork.png" alt="" width="176">


