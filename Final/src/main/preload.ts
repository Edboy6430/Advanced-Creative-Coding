// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

import { contextBridge, ipcRenderer } from "electron"

contextBridge.exposeInMainWorld("electronAPI", {
	
	handleBackground: (callback: any) => {
		
		return ipcRenderer.on("update-background", callback)
	},

	leftPlayerTouchMovement: (callback: any) => ipcRenderer.on("left-player-touch-movement", callback),
	rightPlayerTouchMovement: (callback: any) => ipcRenderer.on("right-player-touch-movement", callback),

	startGame: (callback: any) => ipcRenderer.on("start-game", callback),
	resetGame: (callback: any) => ipcRenderer.on("reset-game", callback)
})