const { User } = require("../models/user.model");


async function userSignup(req, res) {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        const hashedPassword = await User.hashPassword(password);
        // console.log(hashedPassword);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        const token = user.generateToken();
        // console.log("inside userSignup:", token);

        return res.status(201).json({ token, user });
    } catch (error) {
        // console.error("Signup Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

async function userLogin(req, res){
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email }).select("+password");
        if (!existingUser) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const isMatch = await existingUser.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const token = existingUser.generateToken();
        return res.status(201).json({ token, user: {id: existingUser._id, name: existingUser.name, email: existingUser.email} });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


module.exports = {
    userSignup,
    userLogin
}