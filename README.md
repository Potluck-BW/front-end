# front-end

- Welcome to your `Basic Single Page Application Repository`. Use this to start your own Greenfield Project using ReactJS and common industry standards.

- This repository assumes a handful of industry practices and standards. We strive to keep you on the bleeding edge of the industry and as a result, we have made some opinions for you so that you don't have to; you're welcome.

- The following was built using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) for base boiler-plating. We will maintain the dependencies as according to their specifications as an Engineering Organization.

## Requirements

- [Labs Engineering Standard requirements found here](https://labs.lambdaschool.com/topics/node-js/)

## Getting Started

### Setup Steps

- Fork and clone the repo to install it as your own remote.
  - **note** please [be sure to set your remote](https://help.github.jp/enterprise/2.11/user/articles/changing-a-remote-s-url/) for this repo to point to your Labs Team Front End Repository.
- run: `npm install` to download all dependencies.
- run: `npm start` to start your local development server.

## Errors on Deploy

- Are you seeing an error on `npm start` that looks something like this?
  ![npm start fail](https://tk-assets.lambdaschool.com/e1b1f8c9-612d-4744-b413-36ebf29f0337_image4.png)

- Head over to the `package.json` file and please modify your scripts in order to allocate more memory for the 'craco' package. More information on 'craco' and why we use it [can be found here](https://github.com/gsoft-inc/craco).

```js
"start": "craco --max_old_space_size=4096 start",
"build": "craco --max_old_space_size=4096 build",
```

## Components

- We feel that you shouldn't have to spend time as a developer worrying about where your files should go and your architectural decisions that you'd have to make if you started from scratch.
- Following the patterns we've laid out for your and the definitions of 'components' will help you focus on getting work done, rather than spending time deliberating on 'how' your work will get done.
- Please see [the following documentation](./src/components/README.md) on how to work with and structure your components in this app.

## Testing your App.

- In accordance with our [Labs Engineering Standards](https://labs.lambdaschool.com/) this app uses common practices for Unit/Integration Testing using:
  [React Testing Library](https://github.com/testing-library/react-testing-library)
  [Jest](https://jestjs.io/)
- For examples on how to test your application and more information please see [the following documentation](./src/__tests__/README.md).

## Contributing

- As this repository is a Work In Progress (WIP) we'd love to hear more about what is working for you and what could be improved. [Please use the `Issues` tab in Github](https://github.com/Lambda-School-Labs/labs-spa-starter/issues) to submit and file any issues that come up during your development cycle. Issues should be related to things like, documentation, bugs that come up with the existing flow, architectural discussion, suggestions for improvements, and anything that you find cumbersome about getting started and working through a product cycle using these tools.
- **Please use `Labels` when filing issues** try and include screenshots of bugs and steps to reproduce.
