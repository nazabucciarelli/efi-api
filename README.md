# efi-api
This repository stores the source code of the API for the Final Evaluation in the Programming III subject at iTEC, with professor in charge Agustín Invaldi.

You can clone the front-end client made in Next for the full experience.
- see the [Front-end Repository](https://github.com/faculemo/efi-front)


## Getting Started

First, clone this repo and install dependencies:

```bash
npm install
```

Once installed, start the database. It must be done inside src/:
```bash
cd src && npx sequelize-cli db:start
```

Then, you should go back to the root and run the proyect by using:
```bash
cd .. && npm start
```

additionally, you can install the seeders by going again into src/ and running:
```bash
cd src && npx sequelize-cli db:seed:all
```

please note that you must start the server at least once to run the seeders.


## Contributors:
- [Nazareno Bucciarelli](https://github.com/nazabucciarelli)
- [Luca "El Teclas" Petrocchi](https://github.com/LucaPetrocchi)
- [Facundo Esteban Lemo](https://github.com/FacuLemo)
- [Valentino Arballo](https://github.com/valentinoarballo)