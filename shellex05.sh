#!/bin/bash

#5
minhaFrase="shell script usando estrutura de repetição for terminal"
if [ -n "$minhaFrase" ]
then 
    for palavras in $minhaFrase
    do
        echo "$palavras"
    done
else
    echo "a string esta vazia"
fi