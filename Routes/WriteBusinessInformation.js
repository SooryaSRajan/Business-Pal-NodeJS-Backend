const Express = require("express");
const BusinessInformationModel = require("../Models/BusinessInformationModel");
const router = Express.Router();
const admin = require("firebase-admin");
const serviceAccount = require("../Key/fcm-key.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

router.post("/write", async (request, response) => {
    const {
        BusinessName,
        BusinessCaption,
        BusinessDescription,
        CreatedTime,
        BusinessLocationLatitude,
        BusinessLocationLongitude,
        EmailID
    } = request.body;

    console.log(BusinessName, BusinessCaption, BusinessDescription, BusinessLocationLatitude, BusinessLocationLongitude)
    const BusinessDataInstance = new BusinessInformationModel({
        BusinessName: BusinessName,
        BusinessCaption: BusinessCaption,
        BusinessDescription: BusinessDescription,
        CreatedTime: CreatedTime,
        BusinessLocationLatitude: BusinessLocationLatitude,
        BusinessLocationLongitude: BusinessLocationLongitude,
        EmailID: EmailID
    });

    BusinessDataInstance.save()
        .then(data => {
            console.log(data)

            const messaging = admin.messaging()
            const payload = {
                notification: {
                    title: BusinessName,
                    body: "A new business vendor wants your support!"
                },
                topic: 'business'
            };


            messaging.send(payload)
                .then((result) => {
                    console.log(result)
                })


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
