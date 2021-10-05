const resolvedPromise = () => { //resolved promise method resolves promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'message':'promise resolved'});
        }, 500);
    });
}

const rejectedPromise = () => { //rejected promise method rejects promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({'error':'promise rejected'});
        }, 500);
    });
}

resolvedPromise().then(res => console.log(res)) //retreives resolved promise
rejectedPromise().catch(err => console.log(err)) //retreives rejected promise