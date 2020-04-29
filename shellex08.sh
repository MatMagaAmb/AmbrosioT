#!/bin/bash

#ex8
parametroex08=$*
for par in $parametroex08
    do
        if [ -f "$par" ]
            then
                echo "$par, é um arquivo comum"
        elif [ -d "$par" ]
            then
                echo "$par, é um diretorio"
        else
            echo "$par, não existe"
        fi
ls -l $par
done