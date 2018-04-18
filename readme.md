# Frontend Recruiting Task

## The task
You will be building a new contact database admin interface for Medify,
so we can easily manage and view our employees.

## Provided goodies
We provide a server with a REST API for creating new contact
resources. These contacts are essentially fictional employees of Medify.

Here is a description of the contacts API that you’ll be using:

**GET** `/contacts`

Retrieve a list of all *Contacts*. This endpoint also supports
filtering on all *Contact* properties except `id`. Any item matching
all - if any - filters will be returned.
`/contacts?<contact_property>=<filter_value>`.

**POST** `/contacts`

Create a new *Contact* object. All *Contact* properties are required.

**GET** `/contacts/<string:id>`

Returns a contact - if any - with the given `id`.

**PUT** `/contacts/<string:id>`

Updates a contact - if any - with the given `id`. All properties are
required except `id`.

#### Contact Object
All properties are of type String:

`id` - Unique identifier

`first_name` First name

`last_name` Last name

`title` Role title

`color` Arbitrary HTML color code without # prefix

`image` URL to avatar

`location` Location as timezone https://en.wikipedia.org/wiki/Tz_database

`team` Function level team


## Getting started
Install dependencies:

Install virtualenv if necessary:
```
pip install virtualenv
```

Setup work environment
```
virtualenv env
source env/bin/activate
pip install -r requirements.txt
```

Run the API server:

```
python runserver.py
```

Fetch the list of contacts to verify that things are working:

```
curl http://127.0.0.1:5000/contacts
```

## What you need to do
You need to implement a client side admin system that talks to our
API where one could add, remove and update contacts.  The interface of
this admin system is completely up to you.

**Requirements**
We would like you to write this admin system in React.js since that is our
frontend tool of choice.

You may use any third party packages of choice .

If you need to speed up the design process we recommend that you use
a third party UI framework like: https://www.material-ui.com/#/
that we use internally.

## Delivery

The application should be delivered as a `git` repository, preferably hosted on
GitHub.

If we need to do anything special to run your code (e.g. CocoaPods/Carthage
installations or Module dependencies), please note that in an accompanying
README text file.

Any thoughts or reflections of the tasks should be written in a file called thoughts.md 
in the repository.

## What we look for
Imagine that your solution will be delivered to production as-is, and
maintained by your fellow engineers. However, remember that this is just 
a task to see how you work with building applications in
React JS. Focus on the parts that you think is most important to display
your skills as a developer. You should not spend more than 5 hours to complete
this task, so make sure you prioritize correctly.

