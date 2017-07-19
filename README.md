# minimal-react-app

I am going to refactor this repository into a tool to create React apps from a template with minimal build configuration and minimal project structure. Though inspired by https://github.com/facebookincubator/create-react-app, I have a few key design differences in mind:

- *No ejecting.* Fit the build configuration in a single webpack.config.js file, with no redundancy and no obscure build steps that aren't needed for the majority of projects. I shouldn't need to eject because the configuration should be simple enough that I don't want to hide it from view. Webpack is much friendlier now than when create-react-app first debuted. Let's fully embrace it.
- *No default files I have to delete.* Do not bundle a bunch of useless "hello, world" files like default favicons, logos, home pages, etc. I'm just going to delete these and write my own. All I want is packages, build configuration, and a project structure that is as unopinionated as possible.
