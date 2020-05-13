// CONFIGS
module.exports = {
    errors: {
        1: 'Please send all require data',
        2: 'Data is not in correct type',
        3: 'Unauthorized',
        4: 'Error in server side.We will check it as soon as possible',
        5: 'Not found document'
    },
    databaseKeys: {
        main: {
            keyPaths: {
                name: 'name',
                family: 'family',
                phone: 'phone',
                online: 'meta.online',
                location: 'meta.profile.location'
            }
        }
    },
    routes: {
        main: {
            findMany: {

            },
            findOne: {

            },
            updateOne: {

            },
            updateMany: {

            },
            deleteOne: {

            },
            deleteMany: {

            },
            createOne: {

            }
        }
    }
}