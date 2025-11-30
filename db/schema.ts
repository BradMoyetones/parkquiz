import { sqliteTable, text, integer, index } from 'drizzle-orm/sqlite-core';
import { relations, sql } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

// BETTER AUTH
export const user = sqliteTable('user', {
    id: text('id').primaryKey().$defaultFn(() => uuidv4()),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    emailVerified: integer('email_verified', { mode: 'boolean' }).default(false).notNull(),
    image: text('image'),
    createdAt: integer('created_at', { mode: 'timestamp_ms' })
        .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
        .notNull(),
    updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
        .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
        .$onUpdate(() => /* @__PURE__ */ new Date())
        .notNull(),
});

export const session = sqliteTable(
    'session',
    {
        id: text('id').primaryKey().$defaultFn(() => uuidv4()),
        expiresAt: integer('expires_at', { mode: 'timestamp_ms' }).notNull(),
        token: text('token').notNull().unique(),
        createdAt: integer('created_at', { mode: 'timestamp_ms' })
            .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
            .notNull(),
        updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
            .$onUpdate(() => /* @__PURE__ */ new Date())
            .notNull(),
        ipAddress: text('ip_address'),
        userAgent: text('user_agent'),
        userId: text('user_id')
            .notNull()
            .references(() => user.id, { onDelete: 'cascade' }),
    },
    (table) => [index('session_userId_idx').on(table.userId)]
);

export const account = sqliteTable(
    'account',
    {
        id: text('id').primaryKey().$defaultFn(() => uuidv4()),
        accountId: text('account_id').notNull(),
        providerId: text('provider_id').notNull(),
        userId: text('user_id')
            .notNull()
            .references(() => user.id, { onDelete: 'cascade' }),
        accessToken: text('access_token'),
        refreshToken: text('refresh_token'),
        idToken: text('id_token'),
        accessTokenExpiresAt: integer('access_token_expires_at', {
            mode: 'timestamp_ms',
        }),
        refreshTokenExpiresAt: integer('refresh_token_expires_at', {
            mode: 'timestamp_ms',
        }),
        scope: text('scope'),
        password: text('password'),
        createdAt: integer('created_at', { mode: 'timestamp_ms' })
            .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
            .notNull(),
        updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
            .$onUpdate(() => /* @__PURE__ */ new Date())
            .notNull(),
    },
    (table) => [index('account_userId_idx').on(table.userId)]
);

export const verification = sqliteTable(
    'verification',
    {
        id: text('id').primaryKey().$defaultFn(() => uuidv4()),
        identifier: text('identifier').notNull(),
        value: text('value').notNull(),
        expiresAt: integer('expires_at', { mode: 'timestamp_ms' }).notNull(),
        createdAt: integer('created_at', { mode: 'timestamp_ms' })
            .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
            .notNull(),
        updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
            .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
            .$onUpdate(() => /* @__PURE__ */ new Date())
            .notNull(),
    },
    (table) => [index('verification_identifier_idx').on(table.identifier)]
);

export const userRelations = relations(user, ({ many }) => ({
    sessions: many(session),
    accounts: many(account),
}));

export const sessionRelations = relations(session, ({ one }) => ({
    user: one(user, {
        fields: [session.userId],
        references: [user.id],
    }),
}));

export const accountRelations = relations(account, ({ one }) => ({
    user: one(user, {
        fields: [account.userId],
        references: [user.id],
    }),
}));

// ========================
// APP
// ========================

// --- 2. CATÁLOGO DE JUEGOS ---
// Para no tener los juegos hardcodeados en el front siempre.
export const games = sqliteTable('games', {
    id: text('id')
        .primaryKey()
        .$defaultFn(() => uuidv4()),
    slug: text('slug').unique().notNull(), // ej: 'trivia-wakata', 'ruleta-familiar'
    title: text('title').notNull(),
    description: text('description'),
    type: text('type').notNull(), // 'TRIVIA', 'ARCADE', 'ROULETTE'
    isActive: integer('is_active', { mode: 'boolean' }).default(true),
});

// --- 3. CONTENIDO DINÁMICO (CMS LIGERO) ---
// Esto te permite agregar preguntas desde BD sin tocar código.

// Tabla para preguntas de trivia
export const triviaQuestions = sqliteTable('trivia_questions', {
    id: text('id')
        .primaryKey()
        .$defaultFn(() => uuidv4()),
    gameId: integer('game_id').references(() => games.id),
    question: text('question').notNull(),
    explanation: text('explanation'), // El dato curioso al responder
    difficulty: text('difficulty').default('easy'), // easy, medium, hard
});

// Opciones de respuesta para las trivias
export const triviaOptions = sqliteTable('trivia_options', {
    id: text('id')
        .primaryKey()
        .$defaultFn(() => uuidv4()),
    questionId: integer('question_id').references(() => triviaQuestions.id),
    text: text('text').notNull(),
    isCorrect: integer('is_correct', { mode: 'boolean' }).default(false),
});

// Opciones para la ruleta (son dinámicas también)
export const rouletteItems = sqliteTable('roulette_items', {
    id: text('id')
        .primaryKey()
        .$defaultFn(() => uuidv4()),
    gameId: integer('game_id').references(() => games.id),
    text: text('text').notNull(), // "Imita a un mono"
    type: text('type').notNull(), // 'TRUTH', 'DARE', 'FACT'
    color: text('color'), // Hex code o clase de tailwind
});

// --- 4. PROGRESO Y GAMIFICACIÓN ---

// Sesiones de juego: Cada vez que alguien juega una partida
export const gameSessions = sqliteTable('game_sessions', {
    id: text('id')
        .primaryKey()
        .$defaultFn(() => uuidv4()),
    userId: text('user_id')
        .references(() => user.id)
        .notNull(),
    gameId: integer('game_id')
        .references(() => games.id)
        .notNull(),
    score: integer('score').notNull(), // Puntaje obtenido
    durationSeconds: integer('duration_seconds'), // Cuánto tardó (para desempates)
    playedAt: integer('played_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
});

// --- 5. RELACIONES (Drizzle Relations) ---
// Esto facilita las consultas tipo: "Traeme el juego con sus preguntas"

export const gamesRelations = relations(games, ({ many }) => ({
    questions: many(triviaQuestions),
    rouletteItems: many(rouletteItems),
    sessions: many(gameSessions),
}));

export const triviaQuestionsRelations = relations(triviaQuestions, ({ one, many }) => ({
    game: one(games, { fields: [triviaQuestions.gameId], references: [games.id] }),
    options: many(triviaOptions),
}));

export const triviaOptionsRelations = relations(triviaOptions, ({ one }) => ({
    question: one(triviaQuestions, { fields: [triviaOptions.questionId], references: [triviaQuestions.id] }),
}));

export const usersRelations = relations(user, ({ many }) => ({
    sessions: many(gameSessions),
}));

/*
  NOTA SOBRE MULTIPLAYER FUTURO:
  Cuando agregues sockets, necesitarás una tabla 'rooms' (salas).
  
  export const rooms = sqliteTable('rooms', {
    code: text('code').primaryKey(), // Código de 4 letras para unirse
    status: text('status'), // 'WAITING', 'PLAYING', 'FINISHED'
    hostId: text('host_id').references(() => users.id),
  });
*/
