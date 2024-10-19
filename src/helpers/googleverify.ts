import {OAuth2Client} from 'google-auth-library';
import * as dotenv from 'dotenv';
const client = new OAuth2Client();

dotenv.config()

export const googleverify = async(id_token:string = '') => {
    const ticket = await client.verifyIdToken({
        idToken: id_token,
        audience: process.env.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    console.log(payload);
}
