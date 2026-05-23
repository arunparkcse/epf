@echo off
echo ============================================
echo  EPF Angular - Starting Dev Server
echo ============================================
echo.
cd /d "%~dp0"

where ng >nul 2>&1
if %errorlevel% neq 0 (
    echo Angular CLI not found globally. Trying local...
    call npx ng serve --open
) else (
    call ng serve --open
)
