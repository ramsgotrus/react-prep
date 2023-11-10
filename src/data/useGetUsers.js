
export const users =
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere",
    "body": "quia "
}


export const EditUser = {
    userId: 1, id: 1, title: 'ram', body: 'Bodyhererereerererr'
}

export const getUsers = () => {
    return new Promise((resolve, reject) => {
        resolve({
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere",
            "body": "quia "
        }
        )
    })
}

export const updateUser = (editUser) => {
    console.log(typeof editUser)
    return new Promise((resolve, reject) => {

        if (editUser) {
            resolve('Sucess')
        }
        else reject('reject')
    })

}

