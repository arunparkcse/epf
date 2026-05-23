@echo off
echo ============================================
echo  EPF Angular - Production Build
echo ============================================
echo.
cd /d "%~dp0"

where ng >nul 2>&1
if %errorlevel% neq 0 (
    echo Angular CLI not found globally. Trying local...
    call npx ng build --configuration production
) else (
    call ng build --configuration production
)

echo.
echo ============================================
echo  Build output is in: dist\epf-angular\browser\
echo  Upload that folder to your web host.
echo ============================================
pause
