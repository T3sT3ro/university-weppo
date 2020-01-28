const pg = require('pg');
// const R = require('ramda');

const cs = 'postgres://tooster:xxx@localhost:5432/tooster';

async function fetchNow() {

    const client = new pg.Client(cs);

    try {
        await client.connect();

        let result = await client.query("INSERT INTO person(name, surname) VALUES ('Kent', 'Clark') RETURNING id;");
        let id = result.rows[0].id;
        console.log(result.rows);
        result = await client.query(`UPDATE person SET surname='bark' WHERE id=${id} RETURNING person.*;`);
        console.log(result.rows);
        result = await client.query(`DELETE FROM person WHERE name='Kent' AND id=${id};`);

        await client.query(`
            begin;
            INSERT INTO workplace(name) VALUES('moon');
            INSERT INTO person(name, surname) VALUES('Buzz', 'Astral');
            INSERT INTO works(person_id, work_id) VALUES ((SELECT max(id) FROM workplace), (SELECT max(id) FROM person));
            commit;
        `)
        result = await client.query(`SELECT * FROM person;`);
        console.log(result.rows);

        reult = await client.query(`
            begin;
            INSERT INTO workplace(name) VALUES('kitkat factory');
            INSERT INTO person(name, surname) 			VALUES('Kitty', 'Kat');
            INSERT INTO works(person_id, work_id) VALUES((SELECT id FROM person WHERE name='Kitty'), (SELECT id FROM workplace WHERE name='kitkat factory'));
            INSERT INTO works(person_id, work_id) VALUES((SELECT id FROM person WHERE name='Kitty'), (SELECT id FROM workplace WHERE name='uni'));

            commit;
        `);

        await client.query(`
        INSERT INTO person(name, surname) 
            (SELECT md5(random()::text)::varchar(20), md5(random()::text)::varchar(20) from generate_series(1,50000));
        CREATE INDEX person_index ON person`);
        // return R.prop('id', R.head(result.rows));
    } finally {
        client.end()
    }
}

fetchNow().then(now => console.log(now));