:: removes all node_modules directories in the current directory including all sub-directories

@echo off

for /f %%I in ('dir /a:d-h /s /b *') do (
    if "%%~nxI" == "node_modules" (
        echo deleting: %%I
        rd %%I /s /q > nul
    )
)
