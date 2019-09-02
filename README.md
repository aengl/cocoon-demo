# Cocoon

Cocoon is designed around task automation, but offers instant feedback through interactive visualisations, making it especially attractive for tasks involving large datasets.

![](/resources/intro.png)

Though tasks are defined declaratively using [YAML](https://yaml.org), Cocoon comes with a feature-rich, browser-based editor that lets users build complex automation workflows using direct manipulation.

Design goals for Cocoon are:

- **Interactive**: Exploring and working with large datasets should be a fun experience, through rich visualisations and instant feedback.
- **Extensible**: Cocoon leverages the [npm](https://npmjs.com) ecosystem for creating and importing task nodes and visualisations.
- **Modern**: Using JS/[TypeScript](https://www.typescriptlang.org) and [React](https://reactjs.org) means that most web developers will be right at home when extending Cocoon's functionality.
- **Fast**: Cocoon's editor uses a dedicated [Node.js](https://nodejs.org) instance for processing (that can even be run remotely), to ensure that the UI is always responsive.

## Features

### Define a Dataflow in YAML

- Each data processing operation in Cocoon happens in a node, which is visually represented as a graph in the editor.

  ![](/resources/import.gif)

- The graph can be created with simple direct manipulation techniques, like drag & drop, right in the browser editor.

  ![](/resources/drag&drop.gif)

### Inspect Data

- The data at each node can be inspected in the browser's developer console.

  ![](/resources/inspect.gif)

### Interactive Visualisations

- Visualisations can be attached to nodes in order to facilitate in-depth exploration of the data at any step in the process.

  ![](/resources/view.gif)

- Visualisations are fully interactive and can interface with the node's state, allowing visual definitions of complex filter criteria.

  ![](/resources/scatterplot.gif)

- By attaching visualisations to connected nodes, Cocoon automatically synchronises them, creating a powerful [brushing & linking](https://en.wikipedia.org/wiki/Brushing_and_linking) environment.

  ![](/resources/brushing&linking.gif)

### Custom Nodes

- Cocoon's biggest emphasis is on extensibility. Custom nodes are simple Javascript objects wrapping a function. Code changes reflect immediately.

  ![](/resources/circle.gif)

### Merge Datasources & Create Recommendations

Coming soon.

### Semi-automated Workflows

Coming soon.

## Getting Started

Interested in giving Cocoon a try yourself? While we're not ready to fully open source Cocoon quite yet, there is a [free distribution version hosted on npm](https://www.npmjs.com/package/@cocoon/cocoon).

Before running any of the examples in this repository, follow this setup:

1. Make sure to have a [recent version of Node.js](https://nodejs.org/en/download/) and [yarn](yarnpkg.com/lang/en/docs/install/) installed.

1. Clone this repository:

   ```sh
   git clone https://github.com/aengl/cocoon-demo.git
   cd cocoon-demo
   ```

1. Install the project dependencies.

   ```sh
   yarn
   ```

### Examples

To learn the basics, we recommended that you start with the [Simple API](/examples/simple-api) example by running:

```sh
yarn example:simple-api
```

While there's no step-by-step tutorial for Cocoon, the examples are generally filled with documentation that try and explain various concepts and are all aimed at beginners. They can technically be studied in any order, but some of the basics are only explained in the simpler examples, to avoid repetition. Our recommended order is:

1. [simple-api](/examples/simple-api)

   Teaches the basics of creating a custom dataflow by querying an API, along with re-shaping, inspecting and visualising the data.

1. [brushing-and-linking](/examples/brushing-and-linking)

   By linking different visualisations on the same data together, brushing becomes a powerful data exploration tool.

1. [custom-nodes](/examples/custom-nodes)

   Shows how custom nodes and views can be implemented in Cocoon using Javascript and [React](https://reactjs.org/). It also provides some templates for writing nodes and views in [TypeScript](https://www.typescriptlang.org/), and a brief note on how to debug nodes.

1. [interop](/examples/interop)

   Don't re-invent the wheel! Interoperability in Cocoon lets us to combine scripts in Python, R, and other languages to get the best from all worlds.

1. [testing](/examples/testing)

   Examples for unit-testing nodes, integration-testing entire Cocoon definition files, and how Cocoon itself can be used for end-to-end testing.

### Custom Project

If you want to create a custom workflow, you can bootstrap a new Cocoon project without cloning this repository. Just make sure you have Node.js installed and run:

```sh
npx @cocoon/cocoon init my-project
```

Use the `--yarn` flag to install dependencies using [yarn](yarnpkg.com):

```sh
npx @cocoon/cocoon init my-project --yarn
```

Cocoon will create a new folder called `my-project` and install all prerequisites.

You can then launch the editor with:

```sh
cd my-project
npm run editor
```

### Documentation

A reference documentation for nodes and views [can be found here](https://cocoon-docs.aen.now.sh).

## Why Cocoon?

Cocoon was initially developed for internal purposes only. Even when working with a small team of data scientists, data processing scripts are often hard to read and even more difficult to maintain. For many projects, one ends up having to make sense of a clutter of Python and Bash scripts, Excel sheets and Databases on various servers.

The purpose of Cocoon isn't to replace any of these tools, but rather to unify them into a self-documenting way. Adopting Cocoon shouldn't mean migrating your existing scripts and resources, but rather automating their usage while, at the same time, documenting them and making them more accessible to new developers.

But Cocoon is not the first flow-based data processing environment, of course. So you should make sure that the following more mature tools don't fit your needs better:

### [Node-RED](https://nodered.org)

Flow-based, built with Node.js, using JSON. Node-RED has a strong focus on interacting with APIs and IOT devices. Unlike Cocoon it supports real-time streaming of data, but doesn't have any integrated data mining/visualisation capabilities. While somewhat similar from a technical perspective, the project's aim and direction is very different.

### [KNIME](https://www.knime.com)

Cocoon is heavily inspired by KNIME. It is a flow-based Data Mining tool with a huge community and an impressive collection of extensions and integrations. If KNIME's extensions fit your bill, it is almost certainly the better choice. Cocoon was mainly born out of frustration with KNIME's lack of extensibility, dated UI and lackluster UX.

### [Luna](https://www.luna-lang.org)

What makes Luna special is that it is a functional language that has a visual mapping. If the prospect of writing Haskell-like code that can also be represented and edited in a visual way excites you, have a look at this impressive project. (If you're more of an OO kind of person, check out [Julia](https://julialang.org) instead). Although it is worth noting that Cocoon can be extended using [elm](https://elm-lang.org), [Reason](https://reasonml.github.io) or any other language that can compile to JS.

## Using Cocoon

Although the team behind Cocoon has been using it in production for many months now, we are still in the early stages of development.

If you think you have a good use-case for Cocoon or want to support its development, or if you have questions/feedback, we'd be eager to hear from you.

### Industry

Most commercial applications will likely require custom nodes and visualisation to get the most out of Cocoon. We're happy to consult, or take full-time or half-time positions to tailor the workflow to your needs.

### Research

All of Cocoon's developers have masters degrees (AI/computer science) with a strong background in visual analytics. If you can offer one or more PhD position where Cocoon could aid through data mining, machine learning or visual analytics, we are interested in hearing about it!

## Contact

For questions, feedback and offers, either open an issue in this repository or write directly to [aengl](https://github.com/aengl).
