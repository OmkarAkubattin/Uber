const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({ email, password, fullname, vehicle }) => {
    if(!email || !password || !fullname || !vehicle){
        throw new Error("All fields are required");
    }

    const captain = await captainModel.create({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname,
        },
        email,
        password: password,
        vehicle: {
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType,
        },
    });
    console.log(captain);
    return captain;
}