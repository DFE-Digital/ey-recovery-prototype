# early-years-foundation-recovery
A research prototype for the Early Years Recovery

## Requirements 
node.js - version 16.x.x

## Getting started
1. Clone the repository
2. Make sure you have the correct version of node.js installed
3. Run ```npm install ``` to install dependencies
4. Run ```npm start``` to start the project

More detailed guidance is available on the prototype docs

## File structure
Many of the files inherit from previous versions, either in a previous milestone or in the 'extends' folder. These are then called, as necessary, in a later file with the following:
```
{% extends "../[PREVIOUS MILESTONE]/[FILE NAME]" %}
```

## Add CloudFoundry/Government PaaS for releases
This should be as simple as installing CloudFoundry by running:
`brew install cloudfoundry/tap/cf-cli@8`

### When using M1 Mac
You need to perform a workaround to use the Cloudfoundry CLI with Arm achitecture: 
1. Create a Rosetta terminal: Navigate to `/Applications/Utilities` in Finder. Right click on Terminal, click 'Duplicate'. Rename this new terminal something helpful, e.g. 'Rosetta Terminal'. Right click on Rosetta Terminal, click 'Get Info' and check the box 'Open using Rosetta'
2. You will need to have an additional Rosetta version of Homebrew, which will be installed in the default location for an Intel chip. To do this open Rosetta Terminal and install homebrew following instructions on the [homebrew website](https://brew.sh/).
3. To make it easier to differentiate between the two versions of homebrew, create an alias for the one you have just installed. To do this: `alias ibrew='arch -x86_64 /usr/local/Homebrew/bin/brew'`
4. Verify that this has worked by typing `alias`. You should see it there.
5. Run `ibrew install cloudfoundry/tap/cf-cli@8`

### Potential Issues:
Rosetta is not installed. To install it, run `softwareupdate --install-rosetta`

You may get a permissions error on step 5 above. If so, run the following, as recommended in the output:
`sudo chown -R $(whoami) /usr/local/share/zsh /usr/local/share/zsh/site-functions`. Retry step 5.