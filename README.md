# Example Component Library

## Up & Running
`$ npm install` or `$ yarn`

## Overview
This component lib is set up to use [styled-components](https://github.com/styled-components/styled-components) and [polished](https://github.com/styled-components/polished) 💅. This is a starter for you to create your own components and easily publish them to npm.

### File Structure

##### ELEMENTS
`lib/elements` is intended to contain your smallest reusable components, e.g. Buttons, Inputs, etc.


##### COMPONENTS
`lib/components` is intended to contain combinations of these elements, e.g. SearchField, DropDown, etc.

##### STYLES
`lib/styles` is inteded to contain your global styles that you would like to include throughout the application, e.g. colors, animations, themes, etc.

## Local Development

### Linter
_**NOTE:** The linter will run against everything in the `lib` directory. I've added an initial `.eslintrc` file for some basic configuration. Feel free to edit or replace it as needed._

Run once:
```
$ npm run lint
```

Run the watch script:
```
$ npm run lint:watch
```

### Tests
_**NOTE:** As there are no components added by default, there are no tests. But the infrastructure is set up for you to run your tests. This app is setup to use Mocha, Enzyme, and Expect. The `test` script is looking for test files with a `.spec.js` extension, e.g. MyComponent.spec.js._
Run once:
```
$ npm test
```

Run the watch script:
```
$ npm run test:watch
```

### Build
_**NOTE:** When you run `build`, Babel will create a `build` directory. This is what your users will interact with when they use your library. Nothing in `lib` gets shipped with your published module._

Run once:
```
$ npm run build
```

Run the watch script:
```
$ npm run build:watch
```

_**NOTE:** the build script runs in the `prepublish` script just before you publish to npm._

## Publishing
If you already have an account with npm, you can simply run:
```
$ npm login
$ npm publish
```

If you don't have an account with npm:

_**NOTE:** Your email address is public_
```
$ npm set init.author.name "Your Name"
$ npm set init.author.email "you@example.com"
$ npm set init.author.url "http://yourblog.com"
$ npm adduser
$ npm publish
```

## Contributing
If you'd like to contribute to this app, please raise an issue and/or submit a pull request. Please be sure to follow the [Code of Conduct](CODE_OF_CONDUCT.md) when contributing.
