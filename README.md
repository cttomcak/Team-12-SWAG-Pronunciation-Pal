# Pronunciation Pal
## Introduction
Effective pronunciation is a significant challenge for many language learners, often leading to communication barriers. Pronunciation Pal addresses this issue by offering a user-friendly platform for practice and improvement. The primary target audience includes individuals who are deaf and hard of hearing, language learners across various age groups and proficiency levels, and speech therapy clients.

## Milestone 1 Release Notes
The components of our project that are currently working for this submission are user authentication as well as a basic word info page. The user authentication uses email, name, and password. For the security of our users, the passwords are hashed and salted before storage. The basic word info page takes text (which can come from speech input) and generates info for the given words, including definition, phonemes, and official audio if available from the API.

## Milestone 2 Release Notes
The major development for this milestone was the main page. We implemented functionality and styling for the word search feature, where with the help of a free dictionary API, our code would output all the phonemes and visemes for the pronunciation of that word. For example, inputting the word 'test' into the textbox would output the definition, the phonemes, the pronunciation, and images for the necessary facial positions to pronounce the word (along with a short description of each position).

Also important, we have gathered the necessary speech sound diagrams and have uploaded them in the static folder alongside the visemes that currently appear on the site. We have not yet implemented the functionality to make them appear when using the word search feature, but that will come soon.

We also added a couple other components, like a global layout in +layout.svelte that provides a header and footer for all the pages on our site.

There are currently no other branches to review besides 'main'.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To build a docker image of the application run:

```bash
docker build . -t pronunciationpal:v1.0
```

Then, to run it as a container, use the following

```bash
docker run -p 3000:3000 pronunciationpal:v1.0
```

The version numbers may be set to whatever by changing v1.0 to any other version.

You can preview the production build with `npm run preview`.
