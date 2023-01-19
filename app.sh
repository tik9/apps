
bew=bewerbung
bewerbung=$HOME/$bew
de=2_de.pdf
en=2_en.pdf

other=en
function app {
    if [ $1 = en ]; then other=de ;fi
    bew_final=$bewerbung/$bew.pdf
    rm $bew_final
    # ls $HOME/2_$other.pdf
    # out
    if [ ! -f $HOME/2_$other.pdf ]; then
        mv $bewerbung/2_$other.pdf $HOME
    fi
    # in
    if [ ! -f $bewerbung/2_${1:-de}.pdf ]; then
        mv $HOME/2_${1:-de}.pdf $bewerbung
    fi
    pdfunite $bewerbung/*.pdf $bew_final
    ls -lh $bewerbung
}

app en

# $@