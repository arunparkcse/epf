@echo off
echo ============================================
echo  EPF Angular - Clean Install
echo ============================================
echo.

cd /d "%~dp0"

echo [1/3] Removing node_modules...
if exist node_modules (
    rmdir /s /q node_modules
    echo       Done.
) else (
    echo       node_modules not found, skipping.
)

echo.
echo [2/3] Removing package-lock.json...
if exist package-lock.json (
    del /f /q package-lock.json
    echo       Done.
) else (
    echo       package-lock.json not found, skipping.
)

echo.
echo [3/3] Running npm install...
call npm install
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] npm install failed. Make sure Node.js is installed:
    echo         https://nodejs.org
    pause
    exit /b 1
)

echo.
echo ============================================
echo  Install complete! Now run:
echo    ng serve
echo  or double-click start-dev.bat
echo ============================================
pause
