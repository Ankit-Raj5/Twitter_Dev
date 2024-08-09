import UserService from "../services/user-service.js";

const userService = new UserService();

export const signup =async (req, res)=>{
    try {
        const response = await userService.signup({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(201).json({
            message: 'Successfully created a new user',
            success: true,
            data: response,
            err: {}
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong at auth controller",
            success: false,
            data: {},
            err: error
        });
    }
}
