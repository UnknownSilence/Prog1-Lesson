var englishCatalog = ["APENGLAN HP",
    "APENGLIT HP",
    "CREAT WR AD",
    "DEBATE 1",
    "DEBATE 2",
    "DEBATE 3 AD",
    "ENG 1",
    "ENG 1 PIB",
    "ENG 1 PREAP",
    "ENG 1 PREAP-GT",
    "ENG 2",
    "ENG 2 PIB",
    "ENG 2 PREAP",
    "ENG 2 PREAP-GT",
    "ENG 3",
    "ENG 3 IB/SL",
    "ENG 4",
    "ENG 4 IB/HL",
    "ENGLISH 3 DUAL CREDIT",
    "ENGLISH 4 DUAL CREDIT",
    "IND ENG PREAP-GT",
    "JOUR 1",
    "PUBSPKG 1",
    "PUBSPKG 2",
    "PUBSPKG 3"
]
var mathCatalog = ["ADVANCED QUANTITATIVE REASONING",
    "ALG 1",
    "ALG 1 PREAP",
    "ALG 1 PREAP-GT",
    "ALG 2",
    "ALG 2 PREAP",
    "ALG 2 PREAP-GT",
    "APCALCAB",
    "APCALCBC",
    "ATSTATS",
    "COMPUTER SCIENCE AP",
    "GEOM",
    "GEOM PREAP",
    "GEOM PREAP-GT",
    "IND MATH PREAP/GT",
    "IND ST - ADV MATH DEC MAKING",
    "IND STUDY - COLL ALG DC",
    "MATH METH HL/IB",
    "MATH METH SL/IB",
    "MATH ST SL/IB",
    "PRE CAL AD",
    "PRE CAL DUAL CREDIT",
    "PRE CAL PREAP",
    "PRE CAL PREAP-GT",
    "PRE CAL PREIB",
    "STATISTICS"
]
var naturalSciCatalog = ["ANAT & PHY AD",
    "ANATOMY & PHYSIOLOGY DUAL CREDIT",
    "AP BIO",
    "AP ENVIR",
    "AP PHYSB",
    "AP PHYSICS 1",
    "AP PHYSICS 2",
    "AQ SCI",
    "ASTRONOMY",
    "BIO 1",
    "BIO 1 IB",
    "BIO 1 PREAP",
    "BIO 1 PREAP-GT",
    "BIO 1 PREIB",
    "BIO 2 IB",
    "BIOLOGY DUAL CREDIT",
    "CHEM 1",
    "CHEM 1 IB",
    "CHEM 1 PREAP",
    "CHEM 1 PREAP-GT",
    "CHEM 2 IB",
    "CHEM I/ADV",
    "CHEM PREIB",
    "CHEMISTRY/AP",
    "EARTH AND SPACE SCIENCE",
    "ENVIRONMENTAL SYSTEMS",
    "FORENSIC SCIENCE",
    "GMO",
    "IPC",
    "IPC PREAP",
    "IPC PREAP-GT",
    "MEDICAL MICROBIOLOGY",
    "PATHOPHYSIOLOGY",
    "PHYSICS 1",
    "PHYSICS 1 IB",
    "PHYSICS 1 PREIB",
    "PHYSICS 2 IB",
    "PHYSICS AD",
    "PHYSICS PREAP"
]
var socialSciCatalog = ["APMACRO",
    "APMICRO",
    "APUSGOVT",
    "APUSHIST",
    "CCP",
    "CORS&P",
    "ECO-FE",
    "EURO HIST AP",
    "GOVERNMENT DC",
    "GOVT",
    "HUMAN GEO AP",
    "IBHIST OF AM 1",
    "IBHIST OF AM 2",
    "MEXICAN AMERICAN STUDY",
    "PSY DC",
    "PSYCH",
    "PSYCHAP",
    "SOC",
    "SOC DC",
    "SPTSS",
    "SPTSS AFRICAN AMERICAN STUDY",
    "US HIST",
    "US HISTORY DC",
    "W GEO",
    "W GEO PREAP",
    "W GEO PREAP-GT",
    "W HIST",
    "W HIST AP"
]
var additionalNonCoreCatalog = ["CULTURAL & LINGUISTIC TOPICS IN LATIN",
    "FR-LANG AP",
    "FRENCH 1",
    "FRENCH 1 PIB",
    "FRENCH 2",
    "FRENCH 2 PIB",
    "FRENCH 2 PREAP",
    "FRENCH 3 PIB",
    "FRENCH 3 PREAP",
    "FRENCH 3 PREAP-GT",
    "FRENCH 3/AD",
    "FRENCH 4 IB",
    "FRENCH 4 PIB",
    "FRENCH 4 PREAP",
    "FRENCH 4/AD",
    "FRENCH 5 IB",
    "FRENCH 5/AD",
    "FRENCH 5/H",
    "FRENCH 6/AD",
    "GERMAN 1",
    "GERMAN 2",
    "GERMAN 2 PREAP",
    "GERMAN 3 PREAP",
    "GERMAN 3/AD",
    "GERMAN 4 AP",
    "GERMAN 4/AD",
    "GERMAN 4/H",
    "LATIN 1",
    "LATIN 2",
    "LATIN 2 PREAP",
    "LATIN 3 PREAP",
    "LATIN 3/AD",
    "LATIN 4 AP VIRGIL",
    "LATIN 4/AD",
    "LATIN 4/H",
    "SPAN 1",
    "SPAN 1 PIB",
    "SPAN 2",
    "SPAN 2 PIB",
    "SPAN 2 PREAP",
    "SPAN 3 PIB",
    "SPAN 3 PREAP",
    "SPAN 3/AD",
    "SPAN 3/H",
    "SPAN 4 IB",
    "SPAN 4 PIB",
    "SPAN 4 PREAP",
    "SPAN 4/AD",
    "SPAN 5 IB",
    "SPAN 5/AD",
    "SPAN 5/H",
    "SPAN 6/AD",
    "SPAN 6/H",
    "SPANISH FOR NATIVE SPEAKERS 1",
    "SPANISH FOR NATIVE SPEAKERS 2",
    "SPANISH FOR NATIVE SPEAKERS 3",
    "SPANISH LITERATURE AP",
    "SPANLANG AP",
    "THEORY OF KNOWLEDGE IB+"
]

/**
 * 
 * @param dropdownName - Name of the HTML class to look through
 * @param dropdownCatalog - Name of the array to pull data for dropdown population
 * 
 */
function populateDropdowns(dropdownName, dropdownCatalog) {
    for (let dropdown of dropdownName) {
        for (let i = 0; i < dropdownCatalog.length; i++) {
            let opt = dropdownCatalog[i];
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            dropdown.appendChild(el);
        }
    }
}

/**
 * 
 * Calling dropdown population functions with each unique parameter.
 * 
 * This fills the dropdown menus without having to manually code.
 * 
 */
window.addEventListener("load", function () {
    // -------------------------------------------------------------------
    var englishdropdowns = document.getElementsByClassName("englishdropdowns")
    populateDropdowns(englishdropdowns, englishCatalog)
    // -------------------------------------------------------------------
    var mathdropdowns = document.getElementsByClassName("mathdropdowns")
    populateDropdowns(mathdropdowns, mathCatalog)
    // -------------------------------------------------------------------
    var natsciencedropdowns = document.getElementsByClassName("natsciencedropdowns")
    populateDropdowns(natsciencedropdowns, naturalSciCatalog)
    // -------------------------------------------------------------------
    var additionalcoredropdowns = document.getElementsByClassName("additionalcoredropdowns")
    populateDropdowns(additionalcoredropdowns, englishCatalog)
    populateDropdowns(additionalcoredropdowns, mathCatalog)
    populateDropdowns(additionalcoredropdowns, naturalSciCatalog)
    // -------------------------------------------------------------------
    var socialscidropdowns = document.getElementsByClassName("socialscidropdowns")
    populateDropdowns(socialscidropdowns, socialSciCatalog)
    // -------------------------------------------------------------------
    var additionalanydropdowns = document.getElementsByClassName("additionalanydropdowns")
    populateDropdowns(additionalanydropdowns, additionalNonCoreCatalog)
    populateDropdowns(additionalanydropdowns, englishCatalog)
    populateDropdowns(additionalanydropdowns, mathCatalog)
    populateDropdowns(additionalanydropdowns, naturalSciCatalog)
    populateDropdowns(additionalanydropdowns, socialSciCatalog)
    // -------------------------------------------------------------------    
})



