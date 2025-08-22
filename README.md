# Doorman: JavaScript Fingerprinting Library

## Overview

Doorman is a JavaScript library for browser fingerprinting. It works like a virtual doorman for your web application—recognizing returning users ("tenants") by their unique browser characteristics and letting recognized users in automatically, just as a doorman recognizes tenants and opens the door for them.

## The Doorman Analogy

Imagine a doorman at a building:

- The doorman observes people as they approach, noting their appearance, voice, and habits.
- When a tenant arrives, the doorman recognizes them and lets them in automatically, without needing to check their ID every time.
- Similarly, Doorman collects browser traits and generates a fingerprint. When a recognized user returns, Doorman can identify them and grant access or personalize their experience.

## Features

- Multiple fingerprinting helpers (canvas, fonts, plugins, etc.)
- Easy-to-use API for generating and checking fingerprints
- Configurable and extensible
- Works in modern browsers
- Tested and linted for reliability

## Installation

```bash
npm install doorman
```

## Usage Example

```js
import { recognizedPerson } from 'doorman';

// Get a unique identifier for the current visitor
const personId = recognizedPerson();

// Store personId in your database for future visits
savePersonIdToDatabase(personId);

// Later, when the user returns:
if (isPersonRecognized(personId)) {
  // Let the user in automatically
  console.log('Welcome back!');
} else {
  // Ask for login or show onboarding
  console.log('Please sign in.');
}
```

## API

**Exports:**

- `Doorman`: Main class for advanced usage and configuration
- `recognizedPerson()`: Returns a unique identifier for the current visitor even with cookies disabled and incognito mode!
- Other functions are used for displaying the individual strings used when generating the unique number for each user

## Why Use Doorman?

- Improve user experience by recognizing returning users
- Enhance security and fraud detection
- Identify trolls with multiple accounts
- Reduce friction for trusted tenants

## Disclaimer

Browser fingerprinting is a powerful tool, but it isn't always accurate. It should always be used in addition to other forms of authentication which are more reliable. It should also be used responsibly and in compliance with privacy regulations. Always inform users and obtain consent where required.
