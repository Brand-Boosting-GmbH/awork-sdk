# Awork SDK Node.js

A complete node-js wrapper for the awork API.

Note: This SDK is unofficial and its maintained by [Brand Boosting GmbH](https://brand-boosting.de)

## Installation:

<pre>
$ npm i @brandboostinggmbh/awork-sdk
</pre>

After the installation you have to import Awork and create a new Awork object with your api key as parameter:

<pre>
import { Awork } from '@brandboostinggmbh/awork-sdk/dist'
const awork = new Awork({ apiKey: YOUR_API_KEY })
</pre>

## Usage:

* Can be used to synchronize Awork with other platforms.

* Allows to manage entire Awork with it.

## Examples:

Most endpoints include the get, list, create, update and delete methods.



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
await awork.tasks.update( YOUR_TASK_ID, {
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

##### Delete  a company

<pre>
await awork.companies.delete({
    companyId: 'ff11b111-11b1-1111-ab1111b11b11'
    contactInfoId: 'ff22b222-22b2-2222-ab2222b22b22'
})
</pre>


## Documentations:

* [The Docs of the awork SDK](https://brand-boosting-gmbh.github.io/awork-sdk/index.html) in which you can find all the Endpoints documented in detail.

* [The awork.io Developer Docs](https://developers.awork.io/)

<img title="" src="https://brand-boosting-gmbh.github.io/awork-sdk/assets/brandboosting.png" alt="" width="169"><img title="" src="https://brand-boosting-gmbh.github.io/awork-sdk/assets/awork.png" alt="" width="176">

