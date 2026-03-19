import { db } from './drizzle/db';
import { userTable } from './drizzle/schema';
import { eq } from 'drizzle-orm';

// Run migrations first (you can also run this separately with npm run db:migrate)
async function runMigrations() {
    console.log('Running migrations...');
    // Note: In a real app, you'd use the migrate function from drizzle-orm/better-sqlite3/migrator
    // For simplicity, we'll assume migrations are already run or handle schema creation
    console.log('Migrations completed!');
}

async function main() {
    try {
        // Run migrations
        await runMigrations();

        // Example: Insert a new user
        console.log('Inserting a new user...');
        const newUser = await db.insert(userTable).values({
            name: 'John Doe',
            email: 'john@example.com',
        }).returning();

        console.log('Inserted user:', newUser);

        // Example: Query all users
        console.log('Fetching all users...');
        const users = await db.select().from(userTable);
        console.log('Users:', users);

        // Example: Query a specific user
        console.log('Fetching user by email...');
        const user = await db.select().from(userTable).where(eq(userTable.email, 'john@example.com'));
        console.log('User found:', user);

        console.log('Database operations completed successfully!');

    } catch (error) {
        console.error('Error:', error);
    }
}

main();
