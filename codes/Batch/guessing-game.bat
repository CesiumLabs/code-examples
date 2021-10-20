@echo off
echo guessing game!
title guessing game!  
set /a answer=%random%
set /a max_tries=30   
cls

:guessing
echo max tries left: %max_tries%
set /p inp=guess a number:      
if %inp% EQU %answer% goto win
if %inp% LSS %answer% echo higher!
if %inp% GTR %answer% echo lower!
set /a max_tries=%max_tries%-1
if %max_tries% EQU 0 goto lose

echo. && goto guessing

:win
echo you won! the answer is %answer%.
goto end

:lose
echo you lost! the answer is %answer%.

:end
