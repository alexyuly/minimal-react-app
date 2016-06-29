import createWebserver from './createWebserver';

const handleSuccess = port => console.log(`Serving on port ${port}`);
const handleFailure = error => console.log(error);
createWebserver(80).then(handleSuccess, handleFailure);
