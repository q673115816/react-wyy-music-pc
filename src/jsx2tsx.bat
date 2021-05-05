@echo off

rem 正在搜索...

for /f "delims=" %%i in ('dir /b /a-d /s "*.jsx"') do ren "%%i" "%%~ni.tsx"

rem 搜索完毕

@pause
