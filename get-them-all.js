export function getArchitects() {
    return [
        document.querySelectorAll('a.architect'), 
        document.querySelectorAll('a:not(.architect)')
    ];
}
export function getClassical() {
    return [
        document.querySelectorAll('a.architect.classical'), 
        document.querySelectorAll('a.architect:not(.classical)')
    ];
}
export function getActive() {
    return [
        document.querySelectorAll('a.architect.classical.active'), 
        document.querySelectorAll('a.architect.classical:not(.active)') 
    ];
}

export function getBonannoPisano() {
    return [
        document.getElementById('BonannoPisano'),
        document.querySelectorAll('a.architect.classical.active:not(#BonannoPisano)')
    ];
}