const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

const pathKey = path.resolve('../submissionmlgc-fabio-63115d5b3ef1')
     
async function storeData(id, data) {

  try {
    const db = new Firestore({
      projectId: 'submissionmlgc-fabio',
      keyFilename: pathKey,
    });
 
    const predictCollection = db.collection('predictions');
    return predictCollection.doc(id).set(data);
  }catch(error) {
    console.error(error);
  }
}
 
module.exports = storeData;