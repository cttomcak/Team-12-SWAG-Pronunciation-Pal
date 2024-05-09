/** Mappings of IPA phoneme symbols to visemes */
export const phoneme_to_viseme_dict: { [id: string] : string; } = {
    "p" : "PP",
    "b" : "PP",
    "t" : "DD",
    "d" : "DD",
    "ɾ" : "DD",
    "k" : "kk",
    "g" : "kk",
    "ɡ" : "kk",
    "f" : "FF",
    "v" : "FF",
    "θ" : "TH",
    "ð" : "TH",
    "s" : "SS",
    "z" : "SS",
    "ʃ" : "CH",
    "ʒ" : "CH",
    "h" : "CH",
    "m" : "PP",
    "n" : "nn",
    "ŋ" : "nn",
    "l" : "nn",
    "r" : "RR",
    "ɚ" : "RR",
    "ɹ" : "RR",
    "j" : "I",
    "w" : "U",
    "ɪ" : "I",
    "e" : "E",
    "æ" : "aa",
    "a" : "aa",
    "ɒ" : "O",
    "ʌ" : "U",
    "ʊ" : "U",
    "ə" : "E", // Changed from sil to E
    "ɜ" : "E",
    "ɛ" : "E",
    "ɔ" : "O",
    "ɑ" : "aa",
    "ɐ" : "O",
    "oː" : "O,RR", // Changed from 'O' to 'O,RR'
    "ɑː" : "aa",
    "ʉː" : "U",
    "i" : "I",
    "iː" : "I",
    "ɨ" : "I",
    "ɜː" : "E",
    "uː" : "U",
    "ɔː" : "O,RR", // Changed from 'O' to 'O,RR'
    "eɪ" : "E",
    "aɪ" : "aa,I", // Changed from 'aa' to 'aa,I'
    "ɔɪ" : "O,I", // Changed from 'O' to 'O,I'
    "aʊ" : "aa,U", // Changed from 'O' to 'aa,U'
    "əʊ" : "O",
    "ɪə" : "I",
    "eə" : "E",
    "ʊə" : "U",
    "tʃ" : "CH",
    "dʒ" : "CH",
    "oʊ" : "O",
};

/** Description of the 15 visemes used in this project.
Most sources say there's only 10-16 meaningfully different visemes. */
export const viseme_description_dict: { [id: string] : string; } = {
    "aa" : "Wide, open mouth shape",
    "CH" : "Spread lip position, resembling 'sh'",
    "DD" : "Sudden release of tongue from roof of mouth",
    "E" : "Neutral mouth position with mid-level tongue",
    "FF" : "Upper teeth touching lower lip, creating friction",
    "I" : "Relatively closed mouth with raised tongue",
    "kk" : "Strong closure of back of tongue against soft palate",
    "nn" : "Nasalized sound with closure of soft palate",
    "O" : "Rounded lip shape with partially open mouth",
    "PP" : "Complete closure of lips with pressure buildup",
    "RR" : "Slight constriction of tongue with lips slightly apart",
    "sil" : "Silence or neutral mouth position",
    "SS" : "Narrow opening between upper and lower teeth, frictional airflow",
    "TH" : "Tongue between or near teeth, creating fricative sound",
    "U" : "Rounded lip shape with relatively open mouth"
};

/** Mappings of IPA phoneme symbols to speech-sound diagrams */
export const phoneme_to_diagram_dict: { [id: string] : string; } = {
    "p" : "voiceless-bilabial-plosive",
    "b" : "voiced-bilabial-plosive",
    "t" : "voiceless-alveolar-plosive",
    "d" : "voiced-alveolar-plosive",
    "ɾ" : "voiced-alveolar-approximant", 
    "k" : "voiceless-velar-plosive",
    "g" : "voiced-velar-plosive",
    "ɡ" : "voiced-velar-plosive",
    "f" : "voiceless-labiodental-fricative",
    "v" : "voiced-labiodental-fricative",
    "θ" : "voiceless-dental-fricative",
    "ð" : "voiced-dental-fricative",
    "s" : "voiceless-alveolar-fricative",
    "z" : "voiced-alveolar-fricative",
    "ʃ" : "voiceless-postalveolar-fricative",
    "ʒ" : "voiced-postalveolar-fricative",
    "h" : "voiceless-postalveolar-fricative", 
    "m" : "voiced-bilabial-nasal",
    "n" : "voiced-alveolar-nasal",
    "ŋ" : "voiced-velar-nasal",
    "l" : "voiced-alveolar-approximant", 
    "r" : "voiced-alveolar-trill",
    "ɚ" : "voiced-postalveolar-fricative",
    "ɹ" : "voiced-alveolar-approximant",
    "j" : "voiced-palatal-approximant",
    "w" : "voiced-labial-velar-approximant",
    "ɪ" : "voiceless-labiodental-fricative",
    "e" : "voiced-alveolar-fricative",
    "æ" : "voiced-alveolar-plosive",
    "a" : "voiceless-alveolar-plosive",
    "ɒ" : "voiced-velar-nasal",
    "ʌ" : "voiceless-alveolar-fricative",
    "ʊ" : "voiced-labial-veolar-approximant",
    "ə" : "voiceless-alveolar-fricative",
    "ɜ" : "voiced-alveolar-approximant",
    "ɛ" : "voiceless-postalveolar-fricative",
    "ɔ" : "voiced-alveolar-approximant",
    "ɑ" : "voiced-velar-nasal",
    "ɐ" : "voiced-alveolar-approximant",
    "oː" : "voiced-alveolar-approximant,voiced-alveolar-trill",
    "ɑː" : "voiceless-postalveolar-fricative",
    "ʉː" : "voiced-bilabial-nasal",
    "i" : "voiced-palatal-approximant",
    "iː" : "voiced-palatal-approximant",
    "ɨ" : "voiced-palatal-approximant",
    "ɜː" : "voiced-alveolar-approximant",
    "uː" : "voiced-labial-velar-approximant",
    "ɔː" : "voiced-alveolar-approximant,voiced-alveolar-trill",
    "eɪ" : "voiced-alveolar-approximant",
    "aɪ" : "voiceless-postalveolar-fricative,voiceless-labiodental-fricative",
    "ɔɪ" : "voiced-labial-velar-approximant,voiceless-labiodental-fricative",
    "aʊ" : "voiceless-postalveolar-fricative,voiced-labial-velar-approximant",
    "əʊ" : "voiceless-postalveolar-fricative",
    "ɪə" : "voiced-postalveolar-fricative",
    "eə" : "voiced-postalveolar-fricative",
    "ʊə" : "voiced-alveolar-approximant",
    "tʃ" : "voiceless-postalveolar-fricative", 
    "dʒ" : "voiced-postalveolar-fricative", 
    "oʊ" : "voiced-labiodental-nasal",
};
