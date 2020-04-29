#!/bin/bash

#ex6
read -p "digite um caminho aqui -->" caminho06
if [ -f "$caminho06" ]
    then
        echo "$caminho06, é um arquivo comum"
elif [ -d "$caminho06" ]
    then
        echo "$caminho06, é um diretorio"
else
    echo "$caminho06, não existe"
fi
ls -l $caminho06
