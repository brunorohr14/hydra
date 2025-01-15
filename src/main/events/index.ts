import { appVersion, defaultDownloadsPath, isStaging } from "@main/constants";
import { ipcMain } from "electron";

import "./catalogue/get-catalogue";
import "./catalogue/get-game-shop-details";
import "./catalogue/get-how-long-to-beat";
import "./catalogue/get-random-game";
import "./catalogue/search-games";
import "./catalogue/get-game-stats";
import "./catalogue/get-trending-games";
import "./catalogue/get-publishers";
import "./catalogue/get-developers";
import "./hardware/get-disk-free-space";
import "./hardware/check-folder-write-permission";
import "./library/add-game-to-library";
import "./library/create-game-shortcut";
import "./library/close-game";
import "./library/delete-game-folder";
import "./library/get-game-by-object-id";
import "./library/get-library";
import "./library/open-game";
import "./library/open-game-executable-path";
import "./library/open-game-installer";
import "./library/open-game-installer-path";
import "./library/update-executable-path";
import "./library/update-launch-options";
import "./library/verify-executable-path";
import "./library/remove-game";
import "./library/remove-game-from-library";
import "./library/select-game-wine-prefix";
import "./library/reset-game-achievements";
import "./misc/open-checkout";
import "./misc/open-manage-account";
import "./misc/open-external";
import "./misc/show-open-dialog";
import "./misc/get-features";
import "./misc/show-item-in-folder";
import "./torrenting/cancel-game-download";
import "./torrenting/pause-game-download";
import "./torrenting/resume-game-download";
import "./torrenting/start-game-download";
import "./torrenting/pause-game-seed";
import "./torrenting/resume-game-seed";
import "./user-preferences/get-user-preferences";
import "./user-preferences/update-user-preferences";
import "./user-preferences/auto-launch";
import "./autoupdater/check-for-updates";
import "./autoupdater/restart-and-install-update";
import "./user-preferences/authenticate-real-debrid";
import "./download-sources/put-download-source";
import "./auth/sign-out";
import "./auth/open-auth-window";
import "./auth/get-session-hash";
import "./user/get-user";
import "./user/get-blocked-users";
import "./user/block-user";
import "./user/unblock-user";
import "./user/get-user-friends";
import "./user/get-user-stats";
import "./user/report-user";
import "./user/get-unlocked-achievements";
import "./user/get-compared-unlocked-achievements";
import "./profile/get-friend-requests";
import "./profile/get-me";
import "./profile/undo-friendship";
import "./profile/update-friend-request";
import "./profile/update-profile";
import "./profile/process-profile-image";
import "./profile/send-friend-request";
import "./profile/sync-friend-requests";
import "./cloud-save/download-game-artifact";
import "./cloud-save/get-game-artifacts";
import "./cloud-save/get-game-backup-preview";
import "./cloud-save/upload-save-game";
import "./cloud-save/delete-game-artifact";
import "./cloud-save/select-game-backup-path";
import "./notifications/publish-new-repacks-notification";
import { isPortableVersion } from "@main/helpers";

ipcMain.handle("ping", () => "pong");
ipcMain.handle("getVersion", () => appVersion);
ipcMain.handle("isStaging", () => isStaging);
ipcMain.handle("isPortableVersion", () => isPortableVersion());
ipcMain.handle("getDefaultDownloadsPath", () => defaultDownloadsPath);
