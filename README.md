# Chop My Url!

A shortener URL example deployed to [Now 2.0](https://now.sh/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on [Now](https://now.sh/).

### Prerequisites

To run this example locally, you need [NodeJS](https://nodejs.org/).

Testing each API endpoint individually:

```shell
$ npm i
$ mongo_chop_user=yourdbuser mongo_chop_passnode=yourdbpass node back/handlers/chop.js
$ mongo_chop_user=yourdbuser mongo_chop_passnode=yourdbpass node back/handlers/redirect.js
```

## Running the tests

Tests can be run by executing:

```
npm run test
```

## Deployment

To deploy this example, you need to install `now-cli`:

```
$ npm i -g now
```

Then, simply:

```
$ now
```

## Built With

* [Koa](https://koajs.com/) - Next gen web framework for Node
* [Milligram](https://milligram.io/) - A minimalist CSS framework
* [Mongoose](https://mongoosejs.com/) - Elegant mongodb object modeling for node.js

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
