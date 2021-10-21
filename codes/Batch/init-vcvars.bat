:: this script initiates visual studio's C/C++ compiler for command prompt.
:: portable on most windows releases.

@echo off

set LASTCWD=%cd%

cd "C:\Program Files (x86)\Microsoft Visual Studio"

for /f %%d in ('dir /a:d /b') do (
    if not defined VS_VER (
        set VS_VER=%%d
    )
)

echo visual studio edition found: %VS_VER%

cd ".\%VS_VER%\Community\VC\Auxiliary\Build"

if "%PROCESSOR_ARCHITECTURE%" == "X86" (
    echo 32-bit machine found. initiating environment for x86...
    call vcvars32.bat > nul
) else (
    echo 64-bit machine found. initiating environment for x64...
    call vcvars64.bat > nul
)

echo done.

:end
cd %LASTCWD%
