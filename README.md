# bpjs

yet another not-reinvent-the-wheel UI Framework

> This docs is highly still in progress

## Why

Because why not

## High-level preview

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
