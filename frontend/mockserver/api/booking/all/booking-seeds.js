const faker = require('faker');

const COUNT_SEEDS = 20;

function createBooking() {
    let booking = [];

    for (let i = 1; i < COUNT_SEEDS; i++) {
        booking = [
            ...booking,
            {
                id: i,
                approved: faker.random.boolean(),
                placeId: i,
                userId: 2,
                ...createDateInterval(),
            },
        ];
    }

    return booking;
}

function createDateInterval() {
    let from;
    let to;

    do {
        from = faker.date.between('2019-01-01', '2020-01-01');
        to = faker.date.between('2019-01-01', '2020-01-01');
    } while (from.getTime() > to.getTime());

    return { from, to };
}

module.exports = createBooking();
