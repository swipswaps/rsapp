{
  "name": "rsapp",
  "version": "1.0.7",
  "description": "",
  "main": "main.js",
  "dependencies": {
    "child_process": "^1.0.2",
    "colors": "^1.3.3",
    "electron": "^3.1.8",
    "electron-context-menu": "^0.10.1",
    "electron-store": "^2.0.0",
    "executive": "^1.6.3",
    "ffmpeg-static": "^2.4.0",
    "fs": "0.0.1-security",
    "node-media-server": "2.1.0",
    "path": "^0.12.7",
    "process": "^0.11.10",
    "request": "^2.88.0",
    "say": "^0.15.0",
    "tree-kill": "^1.2.1"
  },
  "devDependencies": {
    "electron-packager": "^9.1.0"
  },
  "scripts": {
    "start": "MALLOC_CHECK_=0 electron .",
    "package-all": "./scripts/package-all-script.sh $npm_package_version",
    "package-mac": "electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds",
    "package-win": "electron-packager . --overwrite --asar=false --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=\"rsobshelper\"",
    "package-linux": "electron-packager . --overwrite --platform=linux --arch=x64 --icon=assets/icons/png/icon.png --prune=true --out=release-builds"
  },
  "build": {
    "asarUnpack": [
      "**/app/node_modules/ffmpeg-static/*"
    ]
  },
  "author": "",
  "license": "ISC"
}
