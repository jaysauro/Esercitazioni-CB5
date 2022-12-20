export function Button() {
    const consLog = () => {
        console.log("Hai cliccato il pulsante, vero?");
    };

    return (
        <button
            aria-label="Sei su un bottone da non cliccare"
            className="btn"
            onClick={consLog}
        ></button>    
    );
}