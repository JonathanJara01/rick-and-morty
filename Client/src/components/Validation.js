const validateData = (data) => {
    let errors = {};
    if(!data.email.includes('@')){
        errors.e1 = 'Invalid email';
    }
    if(!data.email){
        errors.e2 = 'Invalid email';
    }
    if(data.email.length > 35){
        errors.e3 = 'Invalid email';
    };
    if(!/\d/.test(data.password)){
        errors.p1 = 'Invalid password';
    };
    if(data.password.length < 6 || data.password.length > 10){
        errors.p2 = 'Invalid password';
    };
    return errors;
};

export default validateData;