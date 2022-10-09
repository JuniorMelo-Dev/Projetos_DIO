interface IUser {
    name: string,
    email: string
}

class CreateUserService {
    execute({ name, email}:IUser){
        const data = []

        data.push({name, email})

        return data
    }
}

export { CreateUserService }