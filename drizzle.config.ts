import { config } from 'dotenv';
import { defineconfig } from 'drizzle-kit';

config( { path: '.env'});

export default defineconfig ({
    schema: './scr/lib/database/data.ts',
    out: './migrations', 
    driver: 'turso',
    dbCredentials: {
        url: process,
        authToken:process,
    }

})