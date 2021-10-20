:: usage: find.bat <filename>

@echo off
for /f %%I in ('dir /a:-d-s-h /s /b *') do (
    if %%~nxI == %1 echo %%I
)
