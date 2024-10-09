import jwt from "jsonwebtoken";
import { AdminModel } from "../models/Admin.js"; // Assuming your AdminModel is imported correctly
import dotenv from 'dotenv';
dotenv.config();

export const VerifyAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
            try {
                if (err) {
                    return res.status(401).json({ error: "Unauthorized" });
                }
                const admin = await AdminModel.findById(payload._id);
                if (!admin) {
                    return res.status(403).json({ error: "ADMIN AUTHORIZATION FAILED" });
                }
                req.admin = admin; // Attach admin details to request object
                next();
            } catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
    } else {
        return res.status(403).json({ error: "Forbidden" });
    }
};
