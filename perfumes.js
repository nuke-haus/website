
NH = {};
NH.trilogies = [];
NH.perfumes = [];
NH.notes = [];
NH.invalidNote = {
	id: "invalid",
	name: "INVALID",
	desc: "Invalid."
}

MINOR = 1;
NORMAL = 2;
MAJOR = 3;

NH.getNote = function(id) {
	for (let ingredient of NH.notes) {
		if (ingredient.id == id) {
			return ingredient;
		}
	}
	return NH.invalidNote;
}

NH.getNotes = function(perfume) {
	return perfume.notes;
}

function addTrilogy(data) {
	NH.trilogies.push(data);
}

function getTrilogy(number) {
	for (let trilogy of NH.trilogies) {
		if (trilogy.number === number) {
			return trilogy;
		}
	}
	return null;
}

function addNote(data) {
	NH.notes.push(data);
}

function addPerfume(data) {
	NH.perfumes.push(data);
}

function sortNotes() {
	NH.notes.sort((a, b) => {return a.id.localeCompare(b.id)});
}

function note(name, strength) {
	return {
		note: NH.getNote(name),
		strength: strength
	}
}

// -------------------------------------------------
//  NOTES
// -------------------------------------------------

addNote({
	id: 'tobacco',
	name: 'TOBACCO',
	desc: ''
});

addNote({
	id: 'pineapple',
	name: 'PINEAPPLE',
	desc: ''
});

addNote({
	id: 'sweet_orange',
	name: 'SWEET ORANGE',
	desc: ''
});

addNote({
	id: 'ylang_ylang',
	name: 'YLANG YLANG',
	desc: ''
});

addNote({
	id: 'labdanum',
	name: 'LABDANUM',
	desc: ''
});

addNote({
	id: 'pink_pepper',
	name: 'PINK PEPPER',
	desc: ''
});

addNote({
	id: 'cassia',
	name: 'CASSIA',
	desc: ''
});

addNote({
	id: 'amber',
	name: 'AMBER',
	desc: ''
});

addNote({
	id: 'amyris_wood',
	name: 'AMYRIS WOOD',
	desc: ''
});

addNote({
	id: 'musk',
	name: 'MUSK',
	desc: ''
});

addNote({
	id: 'vanilla',
	name: 'VANILLA',
	desc: ''
});

addNote({
	id: 'plum',
	name: 'PLUM',
	desc: ''
});

addNote({
	id: 'orris_root',
	name: 'ORRIS ROOT',
	desc: ''
});

addNote({
	id: 'violet',
	name: 'VIOLET',
	desc: ''
});

addNote({
	id: 'saffron',
	name: 'SAFFRON',
	desc: ''
});

addNote({
	id: 'dark_caramel',
	name: 'DARK CARAMEL',
	desc: ''
});

addNote({
	id: 'myrrh',
	name: 'MYRRH',
	desc: ''
});

addNote({
	id: 'benzoin',
	name: 'BENZOIN',
	desc: ''
});

addNote({
	id: 'elemi',
	name: 'ELEMI',
	desc: ''
});

addNote({
	id: 'rose',
	name: 'ROSE',
	desc: ''
});

addNote({
	id: 'clove',
	name: 'CLOVE',
	desc: ''
});

addNote({
	id: 'iris',
	name: 'IRIS',
	desc: ''
});

addNote({
	id: 'green_apple',
	name: 'GREEN APPLE',
	desc: ''
});

addNote({
	id: 'raspberry',
	name: 'RASPBERRY',
	desc: ''
});

addNote({
	id: 'immortelle',
	name: 'IMMORTELLE',
	desc: ''
});

addNote({
	id: 'grape',
	name: 'GRAPE',
	desc: ''
});

addNote({
	id: 'blackcurrant',
	name: 'BLACKCURRANT',
	desc: ''
});

addNote({
	id: 'tonka_bean',
	name: 'TONKA BEAN',
	desc: ''
});

addNote({
	id: 'vetiver',
	name: 'VETIVER',
	desc: ''
});

addNote({
	id: 'lemon',
	name: 'LEMON',
	desc: ''
});

addNote({
	id: 'green_mandarin',
	name: 'GREEN MANDARIN',
	desc: ''
});

addNote({
	id: 'ginger',
	name: 'GINGER',
	desc: ''
});

addNote({
	id: 'linden_blossom',
	name: 'LINDEN BLOSSOM',
	desc: ''
});

addNote({
	id: 'clary_sage',
	name: 'CLARY SAGE',
	desc: ''
});

addNote({
	id: 'nutmeg',
	name: 'NUTMEG',
	desc: ''
});

addNote({
	id: 'cardamom',
	name: 'CARDAMOM',
	desc: ''
});

addNote({
	id: 'sandalwood',
	name: 'SANDALWOOD',
	desc: ''
});

addNote({
	id: 'jasmine',
	name: 'JASMINE',
	desc: ''
});

addNote({
	id: 'sand',
	name: 'SAND',
	desc: ''
});

addNote({
	id: 'ambergris',
	name: 'AMBERGRIS',
	desc: ''
});

addNote({
	id: 'petitgrain',
	name: 'PETITGRAIN',
	desc: ''
});

addNote({
	id: 'ivy',
	name: 'IVY',
	desc: ''
});

addNote({
	id: 'star_anise',
	name: 'STAR ANISE',
	desc: ''
});

addNote({
	id: 'black_frankincense',
	name: 'BLACK FRANKINCENSE',
	desc: ''
});

addNote({
	id: 'gurjun_balsam',
	name: 'GURJUN BALSAM',
	desc: ''
});

addNote({
	id: 'siam_wood',
	name: 'SIAM WOOD',
	desc: ''
});

addNote({
	id: 'cypriol',
	name: 'CYPRIOL',
	desc: ''
});

addNote({
	id: 'tolu_balsam',
	name: 'TOLU BALSAM',
	desc: ''
});

addNote({
	id: 'birch',
	name: 'BIRCH',
	desc: ''
});

addNote({
	id: 'choya_raal',
	name: 'CHOYA RAAL',
	desc: ''
});

addNote({
	id: 'coffee',
	name: 'COFFEE',
	desc: ''
});

addNote({
	id: 'oud',
	name: 'OUD',
	desc: ''
});

addNote({
	id: 'cedar',
	name: 'CEDAR',
	desc: ''
});

addNote({
	id: 'oakmoss',
	name: 'OAKMOSS',
	desc: ''
});

addNote({
	id: 'carnation',
	name: 'CARNATION',
	desc: ''
});

sortNotes();

// -------------------------------------------------
//  TRILOGIES
// -------------------------------------------------

addTrilogy({
	number: '001',
	//name: 'DISCOVERY',
	name: 'DISCOVERY',
	desc: ["IF YOU ARE READING THIS, THEN YOU HAVE SOMEHOW FOUND MY WEBSITE BEFORE I WAS ABLE TO RELEASE MY FIRST TRILOGY... STAY TUNED."]
	//desc: [ "MY APPROACH TO FORMULATION AS AN INDEPENDENT PERFUMER HAS BEEN TO DIVE STRAIGHT IN AND MAKE A LOT OF MISTAKES. THIS TRILOGY TOOK OVER A YEAR OF WORK TO COMPLETE, AND WAS DONE IN PARALLEL WITH THE DEVELOPMENT OF MY FORMULATION SOFTWARE.",
	//		"THESE FRAGRANCES ARE EXPLORATORY ENDEAVORS MAKING USE OF A BROAD SPECTRUM OF MATERIALS. AS FINISHED CONCEPTS, THEY HAVE SURVIVED SO MANY OF MY IMPULSIVE DECISIONS THAT THEY NO LONGER RESEMBLE THEIR INITIAL PREMISE. THEY ARE ABERRATIONS GIVEN LIFE IN THE SPIRIT OF DISCOVERY."
	//]
});

// -------------------------------------------------
//  PERFUMES
// -------------------------------------------------

addPerfume({
	id: 'fata_morgana',
	number: '001',
	trilogy: '001',
	name: 'FATA MORGANA',
	desc: [],
	image: 'img/perfume/fata_morgana.png',
	bigImage: 'https://i.imgur.com/Cu765JD.png',
	topNotes: [note('lemon', NORMAL)],
	heartNotes: [note('elemi', NORMAL)],
	baseNotes: [note('benzoin', NORMAL)],
	dynamicScore: 0, // 0 is linear, 10 is dynamic
	complexityScore: 10, // 0 is minimalist, 10 is complex
	genderScore: 8, // 0 is male, 10 is female. 
	sillageScore: 8, // 0 is skin scent, 10 is nuclear
	longevityScore: 7, // 0 is trash, 10 is forever
	weatherScore: 3 // 0 is dead of winter, 10 is hottest day of summer
});

addPerfume({
	id: 'atlas_null',
	number: '002',
	trilogy: '001',
	name: 'ATLAS NULL',
	desc: [],
	image: 'img/perfume/atlas_null.png',
	bigImage: 'https://i.imgur.com/AcL7vje.png',
	topNotes: [note('petitgrain', NORMAL)],
	heartNotes: [note('rose', NORMAL)],
	baseNotes: [note('labdanum', NORMAL)],
	dynamicScore: 2, // 0 is linear, 10 is dynamic
	complexityScore: 7, // 0 is minimalist, 10 is a lot of notes
	genderScore: 8, // 0 is male, 10 is female. 
	sillageScore: 8, // 0 is skin scent, 10 is nuclear
	longevityScore: 7, // 0 is trash, 10 is forever
	weatherScore: 3 // 0 is dead of winter, 10 is hottest day of summer
});

addPerfume({
	id: 'deep_hex',
	number: '003',
	trilogy: '001',
	name: 'DEEP HEX',
	desc: [],
	image: 'img/perfume/deep_hex.png',
	bigImage: 'https://i.imgur.com/zxD9adx.png',
	topNotes: [note('plum', NORMAL)],
	heartNotes: [note('violet', NORMAL)],
	baseNotes: [note('cypriol', NORMAL)],
	dynamicScore: 2, // 0 is linear, 10 is dynamic
	complexityScore: 7, // 0 is minimalist, 10 is a lot of notes
	genderScore: 8, // 0 is male, 10 is female. 
	sillageScore: 8, // 0 is skin scent, 10 is nuclear
	longevityScore: 7, // 0 is trash, 10 is forever
	weatherScore: 3 // 0 is dead of winter, 10 is hottest day of summer
});
