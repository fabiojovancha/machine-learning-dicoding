const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/dicoding-fabio/model.json');
}
module.exports = loadModel;