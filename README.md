# Real Time Bus Tracker

## Description

This project pulls data from 511.org and adds markers depicting the locations of all public transit vehicles in San Francisco. These marker positions are updated every 1.5 minutes.

## How to Run

Before running the application, you need to set up your API keys. Please follow these steps:

1. Obtain a Google Maps API key from: https://developers.google.com/maps/documentation/javascript/get-api-key

2. Obtain an API key from 511.org from: https://511.org/open-data/token

3. In the file 'index.html' look for and replace the placeholder "YOUR_API_KEY_HERE" with the API key from Google Maps.

4. In the file 'mapanimation.js' look for and replace the placeholder "YOUR_API_KEY_HERE" with the key you obtained from 511.org

Friendly reminder--don't share your API keys on the internet!

## Roadmap

Future improvements may include increasing the rate limit for incoming data so that marker positions can be updated more frequently as well as adding more information-rich marker tooltips and additional toggleable data layers.

## Credits & Acknowledgements

- Favicon from https://favicon.io/emoji-favicons/bus
- Project created as an assignment for MIT xPRO Full Stack Web Dev course, Sept 2023 cohort

## License

Copyright (c) <2023> <copyright Joseph D Della Malva>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
