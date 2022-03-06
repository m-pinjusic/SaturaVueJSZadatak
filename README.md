# Satura Quasar App (satura-zadatak)

Task for insight into the ability to perform work

## Install the dependencies


```
npm install -g @quasar/cli
```

```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
npm run lint
```

### Format the files

```bash
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

### If error

If there is a error “quasar. ps1 cannot be loaded because running scripts is disabled on this system…”.
Run Poweshell and run command “Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned “.

## User guide:

On first view is list of all users. It takes couple of seconds to load. To find user by his email, name or username you can type it on search bar above table. To choose user click on check box of that user and then click button Login. 
After login, name of the user will be displayed on left side of header and logout button will appear on the right side of header. Open menu with button on left side to see available tabs.
On "About me" page is a list of all information about user. At the end of Address list is a button that goes to Google Maps location of user/company.
If you are logged in as user with email that ends with ".net", you will see tab called "Admin only" in drawer. On page "Admin only" is list of all admin tasks.

## Functions test:

On first view there should be a loading indication on table until data is loaded. If user is not checked on table, button for login will be disabled. If menu is opened while user is not logged, tab About me is disabled. If user is logged and on some page other than user list page, by clicking on logout, page should go to main page/userlist page.

## APIs used:

For storage is used Vuex and for fetching data is used Axios. 

## Things to solve:

Inside router/index.js, Vuex storage can be accessed but calling any getter shows only empty state variables. That is the reason why router authentication cannot be done properly because in Vuex store is a value users logg and admin status.
