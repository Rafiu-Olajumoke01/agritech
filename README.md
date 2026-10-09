# Agritech

Agritech is a platform that helps farmers in rural areas sell their produce even when they have no internet connection.

Many farmers have only a basic phone and weak or no mobile data. Agritech lets them post their products by **SMS**. The platform then receives the message, turns it into a listing, and displays it on the website for buyers to see. It is designed to act as a middleman between farmers and final consumers.

## How it works

1. A farmer sends a text message describing what they are selling.
2. The backend receives and validates the message.
3. A product listing is created from it.
4. The listing appears on the website for buyers to browse.

## Tech stack

- **Frontend:** JavaScript (this repository)
- **Backend:** Python, Django (see the `agritech-backend` repository)
- **Messaging:** SMS, connected to the backend through a webhook

## Current status

- SMS message receiving and parsing is built and has been tested with simulated SMS requests.
- Connecting to a live SMS gateway is planned for the pilot stage.

## Planned

- Buyer ordering and order confirmation
- Agents who help farmers confirm and manage listings
- Payments and delivery coordination
- A pilot with one crop in one region

## Related repository

- [agritech-backend](https://github.com/Rafiu-Olajumoke01/agritech-backend): the Django backend that receives SMS, creates listings, and serves the data

## Author

Built by **Jummy**, a backend-focused software engineer working with Python, Django, Celery, Redis, and PostgreSQL.

GitHub: [Rafiu-Olajumoke01](https://github.com/Rafiu-Olajumoke01)
