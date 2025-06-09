# Electoral Reform App in Experience Builder

This is a side project with 3 primary objectives:

1. To train a local LLM on the [ArcGIS Experience Builder codebase](https://developers.arcgis.com/experience-builder/)
2. To deeper explore and understand the ArcGIS Experience Builder codebase, which I've worked with for a few years now but which always surprises me
3. To channel my interest in electoral and political reform into a hopefully useful web application that can show the effects of different apportionment methods, house sizes, election systems...and even different *states*.

I'm using ArcGIS Experience Builder 1.17 as the base framework for this project. This framework is built on top of TypeScript and React, and uses Webpack to run the development server. It has been extensively modified to accomodate the ArcGIS ecosystem and APIs, however, so it doesn't necessarily match up with instructions, tutorials, or yes, LLM suggestions that would work elsewhere. The framework has its own "optimized" version of React (`import { React } from 'jimu-core'`), completely takes over the Redux store (requiring you to write an extension to fully use it), and has what I *think* is a bespoke Webpack configuration in order to work with the developer made widgets -- but I'm not a Webpack guru, so I don't know. I just know that trying to search for what I did see didn't turn up anything for me. 

# Installation Instructions

One of the oddest quirks, IMHO, of this codebase is that the `./ArcGISExperienceBuilder/client/dist` folder *must* be present for `npm run dev` to work. Typically, I see the `/dist` folder get generated when you run the command, but here it's the other way around. My goal is to eventually add a script that will automagically grab the `/dist` folder from the ArcGIS Experience Builder download page and add it to where it needs to go. For now, you will have to do it manually.

## Current Method

1. Clone the repo, as usual.
2. Navigate to [the Experience Builder download page](https://developers.arcgis.com/experience-builder/guide/downloads/) and download the 1.17 ZIP.
3. Extract `./ArcGISExperienceBuilder/client/dist` and place it in the repo.
4. Follow the Experience Builder installation instructions as normal.

## Future Method

1. Use a script that says `npm getdist` and avoid this nonsense.

# Application Aspirations

## Current Focus

1. [ ] Create the basic layout for the app in the Builder, and layout the front end in code.
2. [ ] Translate the apportionment equations (Jefferson, Webster, Huntingon-Hill) into TypeScript. (Or call a Python script.)
3. [ ] Allow the user to set the size of the House
4. [ ] Allow the user to set total US population (useful for Cube Root quick button)
5. [ ] Allow the user to add certain set "states": DC, Puerto Rico, Commonwealth of the Northern Mariana Islands, Guam, city-states, reservations
6. [ ] Implement task #5 in the webmap, editing and updating feature/graphic layers as necessary.

## Future Goals

- Implement party list proportional representation (easy for state-wide votes)
- Implement "custom parties" (really just names, colors, and seats)
- *Possibly far future*: Implement district based voting (whether multi-member or single-member districts) and anti-gerrymandering tools
