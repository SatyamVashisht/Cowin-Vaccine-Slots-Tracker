const axios = require('axios');
const Table = require('tty-table');
const { config, options } = require("./config");
module.exports = function (stateid) {
    axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateid}`, config)
        .then(function (response) {
            // console.table(response.data.states);
            let header = [{
                value: "district_id",
                headerColor: "cyan",
                color: "white",
                align: "left",
                alias: "DISTRICT ID",
                width: 20
            },
            {
                value: "district_name",
                alias: "DISTRICT NAME",
                color: "red",
                width: 40,
            }]
            const out = Table(header, response.data.districts, options).render()
            console.log(out); //prints output
        })
        .catch(function (error) {
            console.log(error.response);
        });
};