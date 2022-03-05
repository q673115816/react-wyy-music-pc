@echo off

rem 正在搜索...

for /f "delims=" %%i in ('dir /b /a-d /s "*.js"') do ren "%%i" "%%~ni.ts"

rem 搜索完毕

@pause
