#!/bin/bash

#ex7
parametroex07=$1
if [ -f "$parametroex07" ]
    then
        echo "$parametroex07, é um arquivo comum"
elif [ -d "$parametroex07" ]
    then
        echo "$parametroex07, é um diretorio"
else
    echo "$parametroex07, não existe"
fi
ls -l $parametroex07