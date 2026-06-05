function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times,${delay} apart`);

}
retry("Login Test");//takes default parameter values for argument not passed
retry("Registration Test", 5, 2000);//takes argument values as passed not the default 