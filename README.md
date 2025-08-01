# react-native-more-trace

To track the events

## Installation

```sh
npm install react-native-more-trace
```

## Usage


```js
import Trace from 'react-native-more-trace';

// Initialise the sdk
 Trace.init({
    api_key: '',
    url: '',
    env: 'dev',
  });

// set the user id
Trace.setUserId('12345')

//track events
 Trace.trackEvents(eventName, payload);

 //Clear the data on logut
 Trace.clearData();

```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
