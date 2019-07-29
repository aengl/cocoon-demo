# Cocoon

Cocoon is designed around task automation, but offers instant feedback through interactive visualisations, making it especially attractive for tasks involving large datasets.

Though tasks are defined declaratively using [YAML](https://yaml.org), Cocoon comes with a feature-rich, browser-based editor that lets users build complex automation workflows using direct manipulation.

Our design goals for Cocoon are:

- **Interactive**: We aim at making exploring and working with large datasets a fun experience, through rich visualisations and instant feedback.
- **Extensible**: Cocoon leverages the [npm](https://npmjs.com) ecosystem for creating and importing task nodes and visualisations.
- **Modern**: Using [TypeScript](https://www.typescriptlang.org) and [React](https://reactjs.org) means that most web developers will be right at home when extending Cocoon's functionality.
- **Fast**: Cocoon's editor uses a dedicated [Node.js](https://nodejs.org) instance for processing (that can even be run remotely), to ensure that the UI is always responsive.

## Features

Here's a visual rundown of Cocoon's main functionality:

### Define a Dataflow in YAML

![](/resources/import.gif)

Each data processing operation in Cocoon happens in a node, which is visually represented as a graph in the editor.

![](/resources/drag&drop.gif)

The graph can be created with simple direct manipulation technqiues, like drag & drop, right in the browser editor.

### Inspect Data

![](/resources/inspect.gif)

The data at each node can be inspected in the browser's developer console.

### Interactive Visualisations

### Merge Datasources & Create Recommendations

### Custom Nodes

### Semi-automated Workflows

## Getting Started

Interested in giving Cocoon a try yourself? While we're not ready to fully open source Cocoon quite yet, there is a [free distribution version hosted on NPM](https://www.npmjs.com/package/@cocoon/cocoon).

Follow these instructions to run the examples in this repository, or to build your own workflow:

1. Make sure to have a [recent version of Node.js](https://nodejs.org/en/download/) installed.

2. Install the dependencies by running `npm install` or `yarn`.

3. Run any of the examples. We recommend starting with:

   ```sh
   npm run example:simple-api
   ```

If you want to create a new workflow, simply create an empty `.yml` file and point your browser to it.

## Why Cocoon?

Cocoon was initially developed for internal purposes only. Even when working with a small team of data scientists, data processing scripts are often hard to read and even more difficult to maintain. For most projects, we ended up having to make sense of a clutter of Python and Bash scripts, Excel sheets and Databases on various servers.

The purpose of Cocoon isn't to replace any of these tools, but rather to unify them into a self-documenting way. Adopting Cocoon shouldn't mean migrating your existing scripts and resources, but rather automating their usage while, at the same time, documenting them and making them more accessible to new developers.

But Cocoon is not the first flow-based data processing environment, of course. So you should make sure that these more mature tools don't fit your needs better:

### [Node-RED](https://nodered.org)

Flow-based, built with Node.js, using JSON. Node-RED has a strong focus on interacting with APIs and IOT devices. Unlike Cocoon it supports real-time streaming of data, but doesn't have any integrated data mining/visualisation capabilities. While somewhat similar from a technical perspective, the project's aim and direction is very different.

### [KNIME](https://www.knime.com)

Cocoon is heavily inspired by KNIME. It is a flow-based Data Mining tool with a huge community and an impressive collection of extensions and integrations. If KNIME's extensions fit your bill, it is almost certainly the better choice. Cocoon was mainly born out of frustration with KNIME's lack of extensibility, dated UI and lackluster UX.

### [Luna](https://www.luna-lang.org)

What makes Luna special is that it is a functional language that has a visual mapping. If the prospect of writing Haskell-like code that can also be represented and edited in a visual way excites you, have a look at this impressive project. (If you're more of an OO-kind of person, check out [Julia](https://julialang.org) instead). Although it is worth noting that Cocoon can be extended using [elm](https://elm-lang.org), [Reason](https://reasonml.github.io) or any other language that can compile to JS.

## Using Cocoon

Although the team behind Cocoon has been using it in production for many months now, we are still in the early stages of development.

If you think you have a good use-case for Cocoon or want to support its development, or if you have questions/feedback, we'd be eager to hear from you.

### Industry

Most commercial applications will likely require custom nodes and visualisation to get the most out of Cocoon. We're happy to consult, or take full-time or half-time positions to tailor the workflow to your needs.

### Research

All of Cocoon's developers have masters degrees (AI/computer science) with a strong background in visual analytics. If you can offer one or more PhD position where Cocoon could aid through data mining, machine learning or visual analytics, we are interested in hearing about it!

## Contact

For questions, feedback and offers, either open an issue in this repository or write directly to [aengl](https://github.com/aengl).
