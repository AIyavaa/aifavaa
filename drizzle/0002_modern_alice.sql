CREATE TABLE `accessRequests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(128) NOT NULL,
	`email` varchar(320) NOT NULL,
	`company` varchar(256),
	`status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending',
	`unlockToken` varchar(128),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`reviewedAt` timestamp,
	CONSTRAINT `accessRequests_id` PRIMARY KEY(`id`)
);
