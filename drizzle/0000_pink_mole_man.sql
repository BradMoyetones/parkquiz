CREATE TABLE `game_sessions` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`game_id` integer NOT NULL,
	`score` integer NOT NULL,
	`duration_seconds` integer,
	`played_at` integer DEFAULT (strftime('%s', 'now')),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`game_id`) REFERENCES `games`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `games` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`type` text NOT NULL,
	`is_active` integer DEFAULT true
);
--> statement-breakpoint
CREATE UNIQUE INDEX `games_slug_unique` ON `games` (`slug`);--> statement-breakpoint
CREATE TABLE `roulette_items` (
	`id` text PRIMARY KEY NOT NULL,
	`game_id` integer,
	`text` text NOT NULL,
	`type` text NOT NULL,
	`color` text,
	FOREIGN KEY (`game_id`) REFERENCES `games`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `trivia_options` (
	`id` text PRIMARY KEY NOT NULL,
	`question_id` integer,
	`text` text NOT NULL,
	`is_correct` integer DEFAULT false,
	FOREIGN KEY (`question_id`) REFERENCES `trivia_questions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `trivia_questions` (
	`id` text PRIMARY KEY NOT NULL,
	`game_id` integer,
	`question` text NOT NULL,
	`explanation` text,
	`difficulty` text DEFAULT 'easy',
	FOREIGN KEY (`game_id`) REFERENCES `games`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text,
	`name` text DEFAULT 'Explorador Wakatá',
	`avatar` text,
	`is_guest` integer DEFAULT true,
	`created_at` integer DEFAULT (strftime('%s', 'now'))
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);