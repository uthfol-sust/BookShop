import { Client, Account} from "appwrite";
import conf from "../conf";

class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Appwrite URL
            .setProject(conf.appwriteProjectId); // Appwrite project ID

        this.account = new Account(this.client); // Initialize Account instance
    }

    // Create a new user account
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password);
            if (name) {
                // Update user preferences to store the name
                await this.account.updatePrefs({ name });
            }
            console.log("Account created:", userAccount); // Debug log
            return userAccount;
        } catch (error) {
            console.error("Error creating account:", error);
            throw error;
        }
    }

    // Login an existing user
    async login(email, password) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            console.log("Login successful:", session); // Debug log
            return session;
        } catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
    }

    // Fetch the current logged-in user
    async getCurrentUser() {
        try {
            const user = await this.account.get();
            console.log("Current user:", user); // Debug log
            return user;
        } catch (error) {
            console.warn("No user logged in:", error);
            return null;
        }
    }

    // Log out the current user
    async logout() {
        try {
            await this.account.deleteSessions();
            console.log("Logout successful"); // Debug log
        } catch (error) {
            console.error("Error logging out:", error);
            throw error;
        }
    }

    // Update user information
    async updateUser(setUser) {
        try {
            const currentUser = await this.getCurrentUser();
            console.log("Fetched current user:", currentUser); // Debug log
            if (currentUser) {
                setUser({
                    name: currentUser.prefs?.name || '',
                    email: currentUser.email,
                    isLoggedIn: true,
                });
            } else {
                setUser({
                    name: '',
                    email: '',
                    isLoggedIn: false,
                });
            }
        } catch (error) {
            console.error("Error fetching current user:", error);
        }
    }
}

// Export the instance of AuthService
const authService = new AuthService();
export default authService;
