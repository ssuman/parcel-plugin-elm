A parcel plugin that enables elm support 

# Usage
```
$ npm install parcel-plugin-elm -s
```

# Fullscreen Mode
There is a know issue in elm apps in fullscreen mode with parcel HMR(hot module replacement). If you make a change to any `.elm ` file, a new version of your app is appended to the DOM rather than replacing existing content. An option may be added to parcel to allow for full page reloading on save in the future, but a workaround right now is adding:
```
if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload();
  });
}
```
to your main javascript file used to mount elm.

This bug is only in fullscreen mode, so you embed your elm app to a DOM node that will also fix the issue.
