# movies-app
## deployed in: [Vercel](https://movies-app-shared-box.vercel.app/)

## App for rendering and searching movies using the MoviesDB public api, created with Vue js, totally responsive. Where we can find:

Login view with all its validations for email and password fields, and authentication in the main views using JWT, also used for the endpoints authentication:
![movies-app](https://user-images.githubusercontent.com/67027844/225067182-129850d1-13f9-44d5-9072-ee2c8a8b11d8.gif)

Home view with a list of popular movies with server side pagination of 20 items per page and a typeahead input implementation at the top with suggestions list comming from another endpoint, and overlapping the lists rendering when selecting an option, and the same pagination behavior, and also a query string implementation for sharing urls for specific searchs:
![movies-app-2](https://user-images.githubusercontent.com/67027844/225069205-4c254e7f-2061-4c95-9bdb-e0225e9e56ec.gif)

Movie detail view with an id param in the url to identify and request the specific movie to the endpoint, for sharing the urls. Rendering the result in its own view like this:
![movies-app-3](https://user-images.githubusercontent.com/67027844/225073539-6c994c05-598b-46c4-a540-06fd00937ca8.gif)

Favorites managed totally with UI logic and browser localStorage for remembering selections, and a client side paginated(5 items per page) list view for review the favorites list, where you can also select/unselect your favorite movies:
![movies-app-4](https://user-images.githubusercontent.com/67027844/225074515-6538b4f9-3e7a-4596-b38f-6efa89dd757d.gif)

### Responsive view
![movies-app-5](https://user-images.githubusercontent.com/67027844/225082209-b4f9b355-77d2-46d4-8bf3-e7f6a393fafc.gif)


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
