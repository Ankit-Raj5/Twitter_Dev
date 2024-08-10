import { UserRepository } from "../repository/index.js";

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signup(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async getUserByEmail(email){
        try {
            const user = await this.userRepository.findBy({email});
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async signin(data){
        try {
            const user = await this.getUserByEmail(data.email);
            if (!user) {
                throw {
                    message: 'Invalid email or password'
                };
            }
            if(!user.comparePassword(data.password)){
                throw {
                    message: 'Incorrect password'
                };
            }
            const token = user.genJWT();
            return token;
        } catch (error) {
            console.log(error);
        }
    }
}

export default UserService;