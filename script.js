// Database reale estratto dal file docx dell'utente
const LIBRI_INIZIALI = [
  { id: 1, titolo: "Sport e immaginAzione", materia: "Educazione Fisica", prezzo: "10.00", info: "Libro completo/semi-completo." },
  { id: 2, titolo: "Curiosi di natura", materia: "Scienze", prezzo: "12.00", info: "Libro completo/semi-completo." },
  { id: 3, titolo: "Meet SCIENZE (A + B + C + D)", materia: "Scienze", prezzo: "16.00", info: "Libri completi, quattro volumi inclusi." },
  { id: 4, titolo: "Noi dentro la storia 1", materia: "Storia", prezzo: "11.50", info: "Volume 1 completo." },
  { id: 5, titolo: "In buone parole A (A + B + ESAME + QUAD. OPERATIVO)", materia: "Italiano Grammatica", prezzo: "18.00", info: "Set completo composto da 4 volumi totali." },
  { id: 6, titolo: "In buone parole A (A + ESAME + QUAD. OPERATIVO)", materia: "Italiano Grammatica", prezzo: "15.00", info: "Set composto da 3 volumi totali." },
  { id: 7, titolo: "Come scintille 2 (2 + LETTERATURA)", materia: "Italiano Antologia", prezzo: "14.00", info: "Include il volume 2 e il relativo tomo di Letteratura." },
  { id: 8, titolo: "Come scintille 3", materia: "Italiano Antologia", prezzo: "12.50", info: "Volume 3 completo." },
  { id: 9, titolo: "IDiscover premium 1", materia: "Inglese", prezzo: "11.00", info: "Volume 1, edizione premium." },
  { id: 10, titolo: "IDiscover premium 3", materia: "Inglese", prezzo: "11.00", info: "Volume 3, edizione premium." },
  { id: 11, titolo: "GOglobal plus 2", materia: "Inglese", prezzo: "10.50", info: "Volume 2." },
  { id: 12, titolo: "GOglobal plus 3", materia: "Inglese", prezzo: "10.50", info: "Volume 3." },
  { id: 13, titolo: "Stradivari A + B + C (Set 1)", materia: "Musica", prezzo: "15.00", info: "Tre volumi completi (A, B e C)." },
  { id: 14, titolo: "Stradivari A + B + C (Set 2)", materia: "Musica", prezzo: "15.00", info: "Tre volumi completi (A, B e C)." },
  { id: 15, titolo: "openArt A + B + LAB. DELLE COMP. (Set 1)", materia: "Storia dell'Arte", prezzo: "16.00", info: "Include Vol. A, Vol. B e Laboratorio delle competenze." },
  { id: 16, titolo: "openArt A + B + LAB. DELLE COMP. (Set 2)", materia: "Storia dell'Arte", prezzo: "16.00", info: "Include Vol. A, Vol. B e Laboratorio delle competenze." },
  { id: 17, titolo: "openArt V.U. + LAB. DELLE COMP.", materia: "Storia dell'Arte", prezzo: "14.00", info: "Volume Unico + Laboratorio delle competenze." },
  { id: 18, titolo: "MY TECH V.U. + Atlante + Disegno", materia: "Tecnologia", prezzo: "15.00", info: "Volume Unico con Atlante e blocco Disegno inclusi." },
  { id: 19, titolo: "MY TECH V.U. + Atlante + Disegno + Coding", materia: "Tecnologia", prezzo: "16.50", info: "Volume Unico completo di Atlante, Disegno e sezione Coding." },
  { id: 20, titolo: "Atlante + VERSO L’ESAME", materia: "Geografia", prezzo: "5.00", info: "Libricino incluso (senza libro principale). Originariamente in 'PIANETA in gioco 2030'." },
  { id: 21, titolo: "Noi cittadini", materia: "Storia / Ed. Civica", prezzo: "4.00", info: "Libricino incluso (senza libro principale). Originariamente in 'Noi dentro la storia'." },
  { id: 22, titolo: "OTTO PAROLE PER IL FUTURO", materia: "Educazione Civica", prezzo: "3.50", info: "Libricino integrativo incluso." },
  { id: 23, titolo: "EXAMENS + PARLER culture + GRAMMAIRE + PARLER ed. civique", materia: "Francese", prezzo: "9.00", info: "Allegati inclusi per ALLEZ ! Volume Essentiel (4 libricini)." },
  { id: 24, titolo: "EXAMENS + PARLER culture en poche", materia: "Francese", prezzo: "6.00", info: "Allegati inclusi per ALLEZ ! Volume Essentiel (2 libricini)." },
  { id: 25, titolo: "Quaderno operativo + Prontuario (ESATTO ! 3)", materia: "Matematica", prezzo: "6.50", info: "Libricini inclusi di supporto per la terza media." }
];

// Inizializzazione degli stati nel Browser (Default: disponibile)
function ottieniLibri() {
  const statiSalvati = localStorage.getItem('stati_libri');
  let stati = statiSalvati ? JSON.parse(statiSalvati) : {};

  return LIBRI_INIZIALI.map(libro => {
    return {
      ...libro,
      stato: stati[libro.id] || "disponibile" 
    };
  });
}

// Salva lo stato modificato nell'admin
function salvaStatoLibro(id, nuovoStato) {
  const statiSalvati = localStorage.getItem('stati_libri');
  let stati = statiSalvati ? JSON.parse(statiSalvati) : {};
  
  stati[id] = nuovoStato;
  localStorage.setItem('stati_libri', JSON.stringify(stati));
}