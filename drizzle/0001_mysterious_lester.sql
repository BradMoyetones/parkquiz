DROP TABLE `users`;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_game_sessions` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`game_id` integer NOT NULL,
	`score` integer NOT NULL,
	`duration_seconds` integer,
	`played_at` integer DEFAULT (strftime('%s', 'now')),
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`game_id`) REFERENCES `games`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_game_sessions`("id", "user_id", "game_id", "score", "duration_seconds", "played_at") SELECT "id", "user_id", "game_id", "score", "duration_seconds", "played_at" FROM `game_sessions`;--> statement-breakpoint
DROP TABLE `game_sessions`;--> statement-breakpoint
ALTER TABLE `__new_game_sessions` RENAME TO `game_sessions`;--> statement-breakpoint
PRAGMA foreign_keys=ON;