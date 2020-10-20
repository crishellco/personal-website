---
title: 'Vuelidate: Effortless Error Messaging'
description: 'This article shows how I was able to use a renderless component to make Vuelidate form error messages simple, decoupled, and reusable.'
createdAt: '2019-10-24 00:00:00'
---

**[Vuelidate](http://vuelidate.netlify.com/)** is a fantastic library for form validation in Vue. However, there is one missing link. The workflow to render human-readable validation error messages needs to be implemented by the developer and often results in code duplication, multiple sources of truth, and tightly-coupled components.

The purpose of this story is to share how I’ve solved this problem in my own code through trial and error, resulting in a simple, decoupled, and reusable solution.

**The documented way of displaying errors with [Vuelidate](http://vuelidate.netlify.com/):**

- Conditionally show hard-coded errors, checking invalid or dirty status multiple times

- Requires knowledge of validations for each input

- Brittle — template requires updating if any new validations are added

- Not DRY (don’t repeat yourself)

<resizing-iframe gist-id="379d20dcb2bdf6b1851be1b9d7a61d17"></resizing-iframe>

**A better way, using a FormGroup component:**

There are a few schools of thought here.

1. Create a component that handles rendering errors, providing a simple but rigid way to display errors. (I provided an example **FormGroupWithErrors** in the repo)

1. Use a **renderless** component that passes the data needed via the default scoped-slot, which allows the consumer to decide how and where to show errors.

I prefer the latter. In essence, a component that decorates an input with consistent validation data and messages.

**The Form:**

- Wrap your input in the **FormGroup** component, which exposes the scoped slot values **invalid** and **errors**

- Full control over how errors are displayed

- No knowledge of validation on the input needed

- DRY

<resizing-iframe gist-id="87342a5010c4aa79a96955597cacb0a4"></resizing-iframe>

**The Renderless FormGroup Component:**

- Translates all errors, including interpolation of params, in a single component (I used[ lodash templating](https://lodash.com/docs/4.17.15#template))

- Computes a true invalid value based on if the input is dirty and has validation errors

- Provides invalid and compiled errors as scoped-slot variables.

<resizing-iframe gist-id="9f953a1be735ea5733f186294ea6f715"></resizing-iframe>

**In Action:**

![](https://cdn-images-1.medium.com/max/2640/1*vTdskNT73AcHLDXYxrXAiA.gif)

**Code Sandbox:**

<iframe src="https://codesandbox.io/embed/vue-template-1fn36?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden; margin-bottom: 1rem"
     title="Vue Template"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<br />
<br />

**Vuelidate:**

https://vuelidate.netlify.com/#getting-started

**Learn More About Renderless Components:**

https://adamwathan.me/renderless-components-in-vuejs/

**Code From This Story:**

https://github.com/crishellco/vuelidate--form-group
