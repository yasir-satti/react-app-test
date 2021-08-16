# My first React App and React Testing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and then ejected by running 'npm run eject'

There a few apps:

1. App: original app from 'create-react-app'

2. App2: Hello app with passing message in props ( https://www.freecodecamp.org/news/react-examples-reactjs/ )

3. Counter: simple counter component ( https://www.freecodecamp.org/news/testing-react-hooks/ )

4. AppCounter: counter with Basic Hook useState
   ( https://www.freecodecamp.org/news/testing-react-hooks/ )
   uses AppBtnIncrement component

# Running the apps

In file index.js just remove comments from app you want to run

ReactDOM.render(
<React.StrictMode>
{/_ <App /> _/}
{/_ <App2 /> _/}
{/_ <Counter /> _/}
{/_ <AppCounter /> _/}
<AppBtnIncrement />
</React.StrictMode>,
document.getElementById('root')
);

# Testing

App.test.js has unit test cases for above apps.

I used both react testing frameworks:

1. Enzyme ( both snapshot testing and implementation details testing)
2. react testing library ( @testing-library/react )
