const Express = require("express");
const BusinessInformationModel = require("../Models/BusinessInformationModel");
const router = Express.Router();

router.get("/read", async (request, response) => {

    BusinessInformationModel.find({}, function(err, data) {
        const dataMap = [];

        data.forEach(function(data) {
            delete data.__v;
            dataMap.push(data)
        });

        response.status(200).send(dataMap);
    });
});

module.exports = router;
