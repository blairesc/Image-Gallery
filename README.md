
# Splash

This is a front end project of a gallery website for free stock images and videos.

Splash has three pages namely: Home, Videos, and Challenges. The Home and <br>
Videos pages search an input and display a grid of images and videos respectively. <br>
The contributor's name and user image is displayed on each card when hovered. 

The Challenges page displays the current challenge as well as the past challenges that are closed.

[![Netlify Status](https://api.netlify.com/api/v1/badges/c393fd5e-299e-4c8e-a85c-5c5b162e7578/deploy-status)](https://app.netlify.com/sites/splash-gallery/deploys)

## Video Demo
https://user-images.githubusercontent.com/59707565/206288694-1d7af803-5e1f-460c-88ff-4f54d6467757.mp4



## Live Link
https://splash-gallery.netlify.app/


## Authors
- [@blairedesouza](https://github.com/blairesc)


## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Accent Color| ![#07a081](https://via.placeholder.com/15/07a081/07a081.png) `#07a081`|



## API Reference

### Pixabay API

#### Search Images

```http
  https://pixabay.com/api/?key=${key}&q=${searchTerm}&image_type=photo&per_page=${per_page}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `key` | `string` | **Required**. API key |
| `q` | `string` | 	A URL encoded search term. If omitted, all images are returned. This value may not exceed 100 characters. |
| `image_type` | `string` | Filter results by image type. |
| `per_page` | `integer` | Determine the number of results per page. |


#### Search Videos
```http
  https://pixabay.com/api/videos/?key=${key}&q=${searchTerm}&per_page=${per_page}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `key` | `string` | **Required**. API key |
| `q` | `string` | 	A URL encoded search term. If omitted, all videos are returned. This value may not exceed 100 characters. |
| `per_page` | `integer` | Determine the number of results per page. |


## Tech Stack

**Client:** HTML, TailwindCSS, React


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
