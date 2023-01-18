const mongoose = require('mongoose');

const dbConnection = async () => {

    try {


        mongoose.set("strictQuery", false); //se debe colocar si o si para no tener error.

        await mongoose.connect(process.env.DB_CNN);
        console.log('DB onlined');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar BD')
    }

}
module.exports = {
    dbConnection
}