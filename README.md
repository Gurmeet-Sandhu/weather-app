# Weather App

## About

This application display weather information for the following cities super-imposed on the Google Maps.
* Dease Lake
* Fort Nelson
* Terrace
* Prince George
* Whistler
* Revelstoke
* Creston

## Technologies Used

* Express
* Google Maps API
* Environment Canada Weather API

## Requirements
You need to have following programs installed on your local machine to run this application
* npm
* node

## Get an API key
Follow these steps to get an API key:

**Step1** Go to the [Google Cloud Platform Console](https://cloud.google.com/console/google/maps-apis/overview)

**Step2** Create a new project or select an existing project

![project](https://i.ibb.co/thtStmz/project.png)

**Step3** Go to "API & Services" page and click "ENABLE API AND SERVICES"

![services](https://i.ibb.co/VWsxmhj/services.png)

**Step4** Search for Maps JavaScript API and enable the API

![javascript API image](https://i.ibb.co/PGxGdGM/api.png)

**Step5** On the Credential page, Get an API key

![Credentials](https://i.ibb.co/GTHHYX3/credentials.png)


## How to build and run on the local machine

**Step1** Clone the Github repository
```
git clone https://github.com/Gurmeet-Sandhu/weather-app.git

```

**Step2** Create .env file in the root folder of you project and create a variable API_KEY and assign your API key to this variable

```
API_KEY = YOUR_API_KEY
```

**Step3** Install dependencies

```
npm install

```

**Step4** Run application on your local machine

```
npm start

```

