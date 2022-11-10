
bew=bewerbung
bewerbung=$HOME/$bew
de=2_de.pdf
en=2_en.pdf

other=en
if [[ $1 == en ]]; then other=de ;fi

function app {
    bew_final=$bewerbung/$bew.pdf
    rm $bew_final
    
    # mv $HOME/1.pdf $bewerbung
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
app

function start { jekyll serve --baseurl '' ;}

$@