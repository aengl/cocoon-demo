# Cocoon

Cocoon is designed around task automation, but offers instant feedback through interactive visualisations, making it especially attractive for tasks involving large datasets.

Though tasks are defined declaratively using [YAML](https://yaml.org), Cocoon comes with a feature-rich, browser-based editor that lets users build complex automation workflows using direct manipulation.

Our design goals for Cocoon are:

- **Interactive**: We aim at making exploring and working with large datasets a fun experience, through rich visualisations and instant feedback.
- **Extensible**: Cocoon leverages the [NPM](https://npmjs.com) ecosystem for creating and importing task nodes and visualisations.
- **Modern**: Using [TypeScript](https://www.typescriptlang.org) and [React](https://reactjs.org) means that full-stack developers will be right at home when extending Cocoon's functionality.
- **Fast**: Cocoon's editor uses [Node.JS](https://nodejs.org) workers that can even be run remotely, to ensure that the UI is always responsive.

## Features

Here's a visual rundown of Cocoon's main functionality:

TODO

## Getting Started

Interested in giving Cocoon a try yourself? While we're not ready to fully open source Cocoon quite yet, there is a [free distribution version hosted on NPM](https://www.npmjs.com/package/@cocoon/cocoon).

Follow these instructions to run the demo workflow:

1. Make sure to have a [recent version of Node.JS](https://nodejs.org/en/download/) installed.

2. Install Cocoon:

   ```sh
   npm install -g @cocoon/cocoon
   ```

3. Set up a demo workflow:

   ```sh
   mkdir demo
   cd demo
   npm init
   npm install @cocoon/demo
   ```

4. Run the editor and browse to the `.yml` file in the demo folder:

   ```sh
   cocoon-editor
   ```

If you want to create a new workflow, simply create an empty `.yml` file and browse to that one instead.

## Using Cocoon

Although the team behind Cocoon has been using it in production for many months now, we are still in the early stages of development.

If you think you have a good use-case for Cocoon or want to support its development, or if you have questions/feedback, we'd be eager to hear from you.

### Industry

Most commercial applications will likely require custom nodes and visualisation to get the most out of Cocoon. We're happy to consult, or take full-time or half-time positions to tailor the workflow to your needs.

### Research

All of Cocoon's developers have masters degrees (AI/computer science) with a strong background in visual analytics. If you can offer one or more PhD position where Cocoon could aid through data mining, machine learning or visual analytics, we are interested in hearing about it!

## Contact

For questions, feedback and offers, please write directly to [aengl](https://github.com/aengl).
