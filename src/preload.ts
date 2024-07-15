// See the Electron documentation for details on how to use preload scripts:

import { contextBridge, ipcRenderer } from 'electron';

// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
contextBridge.exposeInMainWorld('electron', {
  getFiles: (directoryPath: string) =>
    ipcRenderer.invoke('getFiles', directoryPath),
  setClipboard: (listText: string) =>
    ipcRenderer.invoke('setClipboard', listText),
});
