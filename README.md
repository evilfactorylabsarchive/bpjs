# bpjs

yet another not-reinvent-the-wheel JS Framework

> This docs is highly still in progress

## Why

Because why not

## Installation

Make sure you have Yarn or NPM installed. To start install this framework,
run this command in your terminal

```bash
$ yarn -v # or npm -v
```

If your terminal output something useful information (not command not found),
it means the installation was succeed.

## High-level preview

There are so many public APIs here let me breaking down it per main usage

### Component

Let's start by defining your "component", let's say a fancy button

```js
const FancyButton = document.createElement('button')

FancyButton.innerText = 'Click me'
FancyButton.className = 'c-button'

console.log(FancyButton) // <button class="c-button">Click me</button>

```

Now "mount" it to wherever you want

```js
document.body.appendChild(FancyButton)

```

That's it

### AJAX Request

XHR is so old-school and your mom ain't use IE anymore. Let's just use
`fetch` to send some request to server in asynchronous manner

```js
window.fetch(SOME_URL)
  .then(_ => _.json()) // parse response body text to json format
  .then(res => {
    console.log(res) // { data: [], meta: { status: 200 } }
  })
```

You can parse response body to whatever you want (array buffer, text, etc) but
common usage is json becasue this is javascript
