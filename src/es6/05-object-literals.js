// Enhanced object literals

/* Con esto se hace la asignación de las variables sin necesidad
de hacerlo explicitamente siempre y cuando las variables y los
argumentos tienen el mismo nombre */
function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        uId
    }
}

console.log(newUser("gndx", 34, "MX,", 1));