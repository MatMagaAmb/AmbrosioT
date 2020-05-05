#!/bin/bash
#ex 4
cami="/home/ambrosio/Documentos/ambrosio/shell/t2.sh"
if [ -e "$cami" ]
    then
        echo "o caminho $cami existe "
            if [ -w "$cami" ]
            then 
                echo  "Você tem permissão para editar $cami"
             else
                echo  "Você não tem permissão para editar $cami"
fi
else
    echo "o caminho $cami não existe"
fi