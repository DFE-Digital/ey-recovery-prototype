# early-years-foundation-recovery
A research prototype for the Early years Recovery

## Set up

Follow the install guide here: https://govuk-prototype-kit.herokuapp.com/docs/install

## Updating prototype variables

The `app/data/session-data-defaults.js` file contains variables you can change within the prototype. For example, the value of `defaultUserName` will publish what you add throughout the prototype. 

## Admin settings

The [admin page](https://teaching-vacancies-prototype.london.cloudapps.digital/admin) contains feature flags to turn on/off various things in the prototype. The changes apply to your session only. 

## Add CloudFoundry for releases

This should be as simple as installing CloudFoundry by running:
`brew install cloudfoundry/tap/cf-cli@8`

### When using M1 Mac
You need to perform a workaround to use with Arm achitecture: 
1. Create a Rosetta terminal: Navigate to `/Applications/Utilities` in Finder. Right click on Terminal, click 'Duplicate'. Rename this new terminal something helpful, e.g. 'Rosetta Terminal'. Right click on Rosetta Terminal, click 'Get Info' and check the box 'Open using Rosetta'
2. You will need to have an additional Rosetta version of Homebrew, which will be installed in the default location for an Intel chip. To do this open Rosetta Terminal and install homebrew following instructions on the [homebrew website](https://brew.sh/).
3. To make it easier to differentiate between the two versions of homebrew, create an alias for the one you have just installed. To do this: `alias ibrew='arch -x86_64 /usr/local/Homebrew/bin/brew'`
4. Verify that this has worked by typing `alias`. You should see it there.
5. Run `ibrew install cloudfoundry/tap/cf-cli@8`

### Potential Issues:

Rosetta is not installed. To install it, run `softwareupdate --install-rosetta`

You may get a permissions error on step 5 above. If so, run the following, as recommended in the output:
`sudo chown -R $(whoami) /usr/local/share/zsh /usr/local/share/zsh/site-functions`. Retry step 5.
