

const isAuthenticatedGuard = async (to,from, next) => {
    return new Promise(() => {
        const random = Math.random() * 100
        if ( random > 50 ) {
            console.log('isAuthenticated')
            next()
        } else {
            console.log('!isAuthenticated')
            next({ name: 'pokemon-home'})
        }
    })
}


export default isAuthenticatedGuard