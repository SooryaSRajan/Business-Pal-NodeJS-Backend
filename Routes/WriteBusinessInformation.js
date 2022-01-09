const Express = require("express");
const BusinessInformationModel = require("../Models/BusinessInformationModel");
const router = Express.Router();

router.post("/write", async (request, response) => {
    const {
        BusinessName,
        BusinessCaption,
        BusinessDescription,
        CreatedTime,
        BusinessLocationLatitude,
        BusinessLocationLongitude
    } = request.body;

    console.log(BusinessName, BusinessCaption, BusinessDescription, BusinessLocationLatitude, BusinessLocationLongitude )
    const BusinessDataInstance = new BusinessInformationModel({
        BusinessName: BusinessName,
        BusinessCaption: BusinessCaption,
        BusinessDescription: BusinessDescription,
        CreatedTime: CreatedTime,
        BusinessLocationLatitude: BusinessLocationLatitude,
        BusinessLocationLongitude: BusinessLocationLongitude
    });

    BusinessDataInstance.save()
        .then(data => {
            console.log(data)
            response.status(200).send(data)
        })
        .catch(err => {
            console.log("ERROR")
            response.status(400).send(err)
        })
        .finally(() => {
        });
});

module.exports = router;
