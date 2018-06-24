# Bollitore – [![Build Status](https://travis-ci.org/fifthbeat/bollitore.svg?branch=master)](https://travis-ci.org/fifthbeat/bollitore)
**React JS minimal boilerplate**  based on `rect-create-app`

## Intro
This architecture is designed for agencies, the boilerplate provides a fast and reliable base on which build medium size webapps.   

## What you get 

### Folder structure 

### Commands 

- Start development env
  ```shell
  $ yarn start
  ```

- Start documentation development env
  ```shell
  $ yarn start:docs
  ```

- Build the project for release
  ```shell
  $ yarn build
  ```

- Build the docs for release
  ```shell
  $ yarn build:docs
  ```

- Not that much strict eslint
  ```shell
  $ yarn lint
  ```
- Generators
  - Generates a standard component in `src/components` and, optional, add the component to storybook providing specs and a test env. 
    ```shell
    $ yarn generate component
    ```

  - Redux connected component
    ```shell
    $ yarn generate containers
    ```

## Requirements

- Node >= 10.1  
- React create app >= 
- Storybook CLI >= 2.X

## Acknowledge

- Nicola Bertelloni – https://github.com/wanbinkimoon