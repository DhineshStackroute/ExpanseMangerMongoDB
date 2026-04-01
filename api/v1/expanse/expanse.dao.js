// handle the poure database logic - defien DAO layer

// access Expanse Model
const expanseModel = require('./expanse.entity')
// import { v4 as uuidv4 } from 'uuid';
const uuidv4 = require('uuid')


function addExapnseToDB(expaseDetails) {

    console.log("expanse",expaseDetails)
    return new Promise((resolve, reject) => {
    
        let newExapnse = new expanseModel();
        newExapnse.expenseId = "6d785e23-e297-4cff-9317-dc9f01803ecb";
        newExapnse.exapnseDetails = exapnseDetails.name;
        newExapnse.amount = exapnseDetails.amount;
        newExapnse.spendon= Date.now();
        console.log("newExapnse", newExapnse)
        newExapnse.save((error, addedExapnse) => {
            if (error) {
                reject({ message: "Internal Server Error", status: 500 });
            }
            else
            {
                resolve({message:"Expanse Added Sucessfully", status:201, ExpaneInfo: addedExapnse.expenseId})
            }
        })

    })

}
function getAllExpansesFromDb() {

}

module.exports = {
    addExapnseToDB,
    getAllExpansesFromDb
}