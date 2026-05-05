import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../database/models/users.js';

export const register = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, location, gender, password, role } = req.body;

        if (!fullName || !email || !phoneNumber || !location || !gender || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user already exists
        const findUser = await User.findOne({ where: { email } });
        if (findUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // Normalize role
        let normalizedRole = "user";
        const roleStr = String(role || "").toLowerCase();
        if (roleStr === "admin" || roleStr === "1") {
            normalizedRole = "admin";
        } else if (roleStr === "seller" || roleStr === "2") {
            normalizedRole = "seller";
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const userAccount = await User.create({
            fullName,
            email,
            phoneNumber,
            location,
            gender,
            password: hashedPassword,
            role: normalizedRole
        });

        res.status(201).json({ 
            message: 'User created successfully! You can now log in.',
            user: { 
                id: userAccount.id, 
                email: userAccount.email, 
                role: userAccount.role 
            }
        });
    } catch (error) {
        console.error("Register error:", error);
        res.status(500).json({ 
            message: 'Registration failed', 
            error: error.message 
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate token
        const token = jwt.sign(
            { 
                id: user.id,
                role: user.role,
                fullName: user.fullName,
                email: user.email,
                phoneNumber: user.phoneNumber,
            }, 
            process.env.JWT_SECRET, 
            { expiresIn: '2h' }
        );

        res.status(200).json({ 
            message: "User logged in successfully", 
            token 
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ 
            message: 'Login failed', 
            error: error.message 
        });
    }
};