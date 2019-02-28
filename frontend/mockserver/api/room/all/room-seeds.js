const faker = require('faker');

const COUNT_SEEDS = 20;
const EQUIPMENT = ['computer', 'phone', 'lan'];

let placeId = 0;

function createRooms() {
    let room = [];

    for (let i = 1; i <= COUNT_SEEDS; i++) {
        const roomWidth = faker.random.number({
            min: 2,
            max: 5,
        });

        const roomHeight = faker.random.number({
            min: 2,
            max: 5,
        });

        room = [
            ...room,
            {
                id: i,
                name: `Room ${i}`,
                placesList: cretePlaces(roomWidth, roomHeight),
                description: faker.lorem.paragraph(),
                width: roomWidth,
                height: roomHeight,
            },
        ];
    }

    return room;
}

function cretePlaces(roomWidth, roomHeight) {
    let places = [];
    const placeCount = faker.random.number({
        min: 0,
        max: roomWidth * roomHeight,
    });

    for (let i = 1; i <= placeCount; i++) {
        places = [
            ...places,
            {
                id: placeId++,
                name: `Place ${i}`,
                equipment: createEquipment(),
                description: faker.lorem.paragraph(),
                isUsed: faker.random.boolean(),
                isAvailableForBooking: faker.random.boolean(),
                ...createUniquePlacePosition(places, roomWidth, roomHeight),
            },
        ];
    }

    return places;
}

function createUniquePlacePosition(places, maxWidth, maxHeight) {
    let x;
    let y;

    do {
        x = faker.random.number({
            min: 0,
            max: maxWidth,
        });

        y = faker.random.number({
            min: 0,
            max: maxHeight,
        });
    } while (places.find(place => place.x === x && place.y === y));

    return { x, y };
}

function createEquipment() {
    let equipment = [];

    const equipmentCount = faker.random.number({
        min: 0,
        max: EQUIPMENT.length,
    });

    for (let i = 0; i < equipmentCount; i++) {
        equipment = [...equipment, EQUIPMENT[i]];
    }

    return equipment;
}

module.exports = createRooms();
