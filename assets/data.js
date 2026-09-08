/* WSET Level 2 study data: topics + mock exam questions.
   Topic order below is the recommended study order and drives "Read next". */

const EXAM_DATE = "2026-09-17";

const TOPICS = [
  /* ---------------------------------------------------------------- FOUNDATIONS */
  {
    id: "sat",
    name: "Tasting wine (the SAT)",
    group: "Foundations",
    swatch: "none",
    blurb: "The Systematic Approach to Tasting is the vocabulary the whole qualification is written in. Learn it first: every variety note below is just this grid filled in.",
    regions: [],
    profile: [
      { label: "Appearance", detail: "Intensity (pale / medium / deep) and colour. Whites: lemon-green, lemon, gold, amber. Rosé: pink, salmon, orange. Reds: purple, ruby, garnet, tawny." },
      { label: "Nose", detail: "Aroma intensity (light / medium / pronounced) and characteristics grouped as primary (grape), secondary (winemaking) and tertiary (age)." },
      { label: "Palate", detail: "Sweetness, acidity, tannin, alcohol, body, flavour intensity, flavour characteristics, finish (short / medium / long)." },
      { label: "Conclusion", detail: "Quality: faulty, poor, acceptable, good, very good, outstanding." }
    ],
    key: [
      "Sweetness scale: dry, off-dry, medium-dry, medium-sweet, sweet, luscious. Acidity, tannin, alcohol and body all run low / medium / high (with medium(-) and medium(+) available).",
      "Alcohol on the palate is read as warmth: low is under 11% abv, medium 11-13.9%, high 14%+. Fortified wines use their own scale (15-20%).",
      "Primary = fruit, floral, herbaceous, spice from the grape. Secondary = oak (vanilla, toast, cedar, smoke), malolactic conversion (butter, cream), lees (bread, biscuit, yoghurt).",
      "Tertiary = development: whites go to honey, nuts, dried fruit and petrol; reds to fig, prune, leather, forest floor, mushroom, game.",
      "Colour deepens in white wine as it ages and fades in red wine as it ages. Purple = young red; garnet then tawny = older red."
    ],
    traps: [
      "Do not confuse fruity with sweet. A bone-dry wine can be intensely fruity; sweetness is sugar you feel on the tip of the tongue.",
      "Body is not the same as alcohol, though high alcohol adds body. Tannin, sugar and flavour concentration also build body."
    ],
    related: ["grape-growing", "winemaking"]
  },
  {
    id: "grape-growing",
    name: "In the vineyard",
    group: "Foundations",
    swatch: "none",
    blurb: "Climate explains most of what a wine tastes like. If you can place a region on the cool / moderate / warm scale you can predict its style, and a large share of the exam rewards exactly that.",
    regions: [
      { name: "Cool climate", detail: "Average growing-season temperature 16.5C or below. Chablis, Mosel, Champagne, Marlborough, Central Otago, Tasmania. Gives higher acidity, lower alcohol, green-fruit and light-bodied wines." },
      { name: "Moderate climate", detail: "16.5-18.5C. Bordeaux, Piemonte, Tuscany, Rioja, Coonawarra, Sonoma. Red fruit to black fruit, medium acidity and alcohol." },
      { name: "Warm climate", detail: "18.5C and above. Barossa, southern Rhone, Douro, Mendoza, Central Valley of California. Lower acidity, higher alcohol, ripe black and cooked fruit." }
    ],
    profile: [
      { label: "As grapes ripen", detail: "Sugar rises, acid falls, tannins soften, and flavours move from green (bell pepper, gooseberry) to ripe (blackcurrant, peach) to dried or cooked (raisin, jam)." },
      { label: "What the vine needs", detail: "Warmth, sunlight, water and nutrients. Most vineyards sit between 30 and 50 degrees latitude in both hemispheres." }
    ],
    key: [
      "Latitude, altitude, proximity to water (a lake, river or ocean moderates temperature), ocean currents, fog, aspect (a slope facing the sun ripens more fully) and soil all modify a region's climate.",
      "Hazards: frost (spring, kills new buds), hail, drought, excessive rain at harvest (dilution and rot), fungal disease (downy and powdery mildew, grey rot), and pests including phylloxera, which is controlled by grafting onto American rootstock.",
      "Organic growing avoids most synthetic treatments; biodynamic adds a lunar calendar and preparations; sustainable balances environmental, social and economic concerns.",
      "Harvest can be by hand (essential on steep slopes and for whole-bunch or selective picking) or by machine (fast, cheap, can be done at night in the cool)."
    ],
    traps: [
      "Altitude and latitude both cool a site. A vineyard on the equator can still be cool if it is high enough (Salta in Argentina).",
      "Grey rot is bad; noble rot (Botrytis cinerea) on healthy ripe white grapes is desirable and makes Sauternes and Tokaji."
    ],
    related: ["winemaking", "sat", "labels"]
  },
  {
    id: "winemaking",
    name: "In the winery",
    group: "Foundations",
    swatch: "none",
    blurb: "Six or seven winemaking decisions account for nearly every stylistic difference between two wines from the same grape. Know what each one adds to the glass.",
    regions: [],
    profile: [
      { label: "White wine", detail: "Grapes are crushed and pressed before fermentation, so the juice has no skin contact. Cool fermentation (12-22C) preserves delicate fruit and floral aromas." },
      { label: "Red wine", detail: "Fermented on the skins at warmer temperatures (20-32C) to extract colour, tannin and flavour. Longer maceration means more tannin and colour." },
      { label: "Rosé", detail: "Short maceration on black skins (a few hours) then pressed off, or the free-run juice of a red ferment is bled off (saignee). Blending red and white wine is only permitted for rosé Champagne." }
    ],
    key: [
      "Fermentation: yeast converts sugar to alcohol and carbon dioxide, and stops when the sugar runs out or the yeast is killed by alcohol, cold, filtering or added spirit.",
      "Sweetness can be achieved by stopping fermentation early, adding unfermented grape juice (Sussreserve) or a sweetening component, or concentrating sugar in the grape via noble rot, drying, or freezing.",
      "Oak: small new barrels give the most flavour (vanilla, toast, cedar, smoke, coconut from American oak) plus soft tannin and slow oxygen exposure. Large old vessels give almost no flavour. Oak chips and staves are a cheap flavour source.",
      "Malolactic conversion changes sharp malic acid into softer lactic acid and can add buttery notes. It is standard for red wine and a stylistic choice for whites (typical in oaked Chardonnay, avoided in Sauvignon Blanc).",
      "Lees ageing, especially with stirring, adds body plus bread, biscuit and yoghurt notes.",
      "Bottling choices: inert stainless steel plus early bottling preserves fruit; ageing in bottle before release builds tertiary character."
    ],
    traps: [
      "Malolactic conversion is not fermentation of sugar and does not make a wine sweeter; it lowers acidity.",
      "A wine can be pale and still be tannic if it is Nebbiolo. Colour and tannin come from the skins but are not the same thing."
    ],
    related: ["sat", "champagne", "sweet-wines"]
  },
  {
    id: "labels",
    name: "Labels, law and wine styles",
    group: "Foundations",
    swatch: "none",
    blurb: "Label questions are free marks. What matters is knowing which countries name their wines after a place and which name them after a grape, and how the quality tiers stack up.",
    regions: [
      { name: "France", detail: "AOC / AOP is the top tier with the tightest rules; IGP is broader; Vin de France is the least restrictive and may name a variety and vintage." },
      { name: "Italy", detail: "DOCG (highest, e.g. Chianti, Barolo, Prosecco Superiore), DOC, then IGT. Riserva means extra ageing." },
      { name: "Spain", detail: "DOCa/DOQ (only Rioja and Priorat), DO, then Vino de la Tierra. Ageing terms: Genérico/Joven, Crianza, Reserva, Gran Reserva." },
      { name: "Germany", detail: "Prädikatswein is the top tier, then Qualitätswein (QbA), then Landwein and Deutscher Wein." },
      { name: "New World", detail: "USA uses AVAs; Australia uses Geographical Indications; a variety on the label generally requires 75-85% of that grape depending on the country." }
    ],
    profile: [
      { label: "PDO vs PGI", detail: "Protected Designation of Origin has tighter rules over a smaller area (grape varieties, yields, winemaking). Protected Geographical Indication covers a larger area with more freedom." },
      { label: "The rule of thumb", detail: "Old World labels lead with the place and assume you know the grape; New World labels lead with the grape." }
    ],
    key: [
      "Smaller and more specific place name usually means higher quality and higher price: Bordeaux AOC < Médoc AOC < Pauillac AOC.",
      "Compulsory label information includes country of origin, alcoholic strength, bottle volume, allergens (contains sulfites), lot number, bottler details and, for sparkling, sweetness.",
      "Terms that indicate style rather than origin: Old Vines, Reserve (legally meaningless in many countries), Estate Bottled, Single Vineyard.",
      "Price categories used in the exam: inexpensive, mid-priced, premium, super-premium. Quality levels: acceptable, good, very good, outstanding."
    ],
    traps: [
      "Reserva in Spain and Riserva in Italy are legally defined ageing terms. Reserve on a Californian or Australian label usually means nothing at all.",
      "Chablis, Sancerre and Barolo are places, not grapes: Chardonnay, Sauvignon Blanc and Nebbiolo respectively."
    ],
    related: ["chardonnay", "tempranillo", "sangiovese"]
  },

  /* ---------------------------------------------------------------- WHITE GRAPES */
  {
    id: "chardonnay",
    name: "Chardonnay",
    group: "White grapes",
    swatch: "gold",
    blurb: "The chameleon: no strong aromatic identity of its own, so it shows climate and winemaking more clearly than any other grape. That makes it the examiner's favourite tool for testing whether you understand oak and climate.",
    regions: [
      { name: "Chablis (Burgundy, France)", detail: "Cool climate, rarely oaked. High acidity, green apple, lemon, wet stone. Tiers: Petit Chablis, Chablis, Chablis Premier Cru, Chablis Grand Cru." },
      { name: "Côte d'Or (Burgundy)", detail: "The benchmark for oaked Chardonnay: Meursault, Puligny-Montrachet, Chassagne-Montrachet, Corton-Charlemagne. Barrel fermentation, lees stirring, malolactic conversion." },
      { name: "Mâconnais (Burgundy)", detail: "Warmer and better value: Mâcon-Villages, Saint-Véran, and the more concentrated Pouilly-Fuissé." },
      { name: "Australia", detail: "Yarra Valley, Adelaide Hills, Margaret River and Tasmania for restrained, citrus-driven styles; warmer areas for ripe tropical fruit." },
      { name: "California & Oregon", detail: "Cool coastal sites: Sonoma Coast, Russian River Valley, Carneros, Santa Barbara. Ripe stone and tropical fruit with generous oak in the classic style." },
      { name: "Elsewhere", detail: "Chile (Casablanca, Limarí), New Zealand, South Africa, Argentina, and Champagne, where it is one of the three principal grapes." }
    ],
    profile: [
      { label: "Structure", detail: "Dry, medium to high acidity depending on climate, medium to full body, medium to high alcohol." },
      { label: "Cool climate", detail: "Green apple, lemon, wet stone, high acidity, light to medium body." },
      { label: "Moderate climate", detail: "Citrus, white peach, melon." },
      { label: "Warm climate", detail: "Peach, banana, pineapple, mango, fuller body, lower acidity." },
      { label: "Winemaking marks", detail: "Oak gives vanilla, toast, cedar and smoke; malolactic conversion gives butter and cream; lees ageing gives bread and biscuit." }
    ],
    key: [
      "Chardonnay buds early, so it is vulnerable to spring frost, a real problem in Chablis.",
      "It is the only white grape permitted in Blanc de Blancs Champagne and is grown across the world in every price band.",
      "Unoaked styles are usually fermented in stainless steel at cool temperatures and bottled early to keep the fruit fresh."
    ],
    traps: [
      "A white Burgundy is Chardonnay even though the label never says so.",
      "Buttery notes come from malolactic conversion, not from oak; toast and vanilla come from oak. Exam questions often separate the two."
    ],
    related: ["winemaking", "champagne", "labels"]
  },
  {
    id: "sauvignon-blanc",
    name: "Sauvignon Blanc",
    group: "White grapes",
    swatch: "lemon",
    blurb: "High acid, pungently aromatic, almost always made to be drunk young. If a tasting note says gooseberry, elderflower and cut grass, this is the answer.",
    regions: [
      { name: "Loire Valley, France", detail: "Sancerre and Pouilly-Fumé are the classics: cool climate, unoaked, high acidity, green fruit and wet-stone character. Touraine offers a cheaper version." },
      { name: "Bordeaux, France", detail: "Blended with Sémillon. Bordeaux Blanc for fresh, inexpensive wine; Pessac-Léognan for premium oaked and lees-aged whites." },
      { name: "Marlborough, New Zealand", detail: "The modern benchmark: intensely aromatic passion fruit, grapefruit, elderflower and capsicum with searing acidity." },
      { name: "Chile", detail: "Cool coastal Casablanca, San Antonio and Leyda valleys." },
      { name: "South Africa", detail: "Elgin, Constantia and Durbanville for cool, herbaceous styles." },
      { name: "California", detail: "Often labelled Fumé Blanc when oaked." }
    ],
    profile: [
      { label: "Structure", detail: "Dry, high acidity, light to medium body, medium alcohol." },
      { label: "Cooler sites", detail: "Green apple, gooseberry, elderflower, grass, asparagus, green bell pepper." },
      { label: "Warmer or riper", detail: "Grapefruit, passion fruit and other tropical fruit." },
      { label: "With oak", detail: "Only in premium styles, most typically in Pessac-Léognan and Fumé Blanc: vanilla and toast over the herbaceous fruit." }
    ],
    key: [
      "Usually fermented cool in stainless steel and bottled early. Malolactic conversion is normally avoided to keep the acidity high.",
      "Sémillon plus Sauvignon Blanc affected by noble rot is the recipe for Sauternes.",
      "The grape is rarely aged; drink most examples within one to two years of the vintage."
    ],
    traps: [
      "Pouilly-Fumé (Loire, Sauvignon Blanc) is not Pouilly-Fuissé (Mâconnais, Chardonnay). This pair is examined constantly.",
      "Sancerre also produces some Pinot Noir red and rosé, but the white is always Sauvignon Blanc."
    ],
    related: ["chenin-blanc", "other-whites", "sweet-wines"]
  },
  {
    id: "pinot-grigio",
    name: "Pinot Grigio / Pinot Gris",
    group: "White grapes",
    swatch: "straw",
    blurb: "One grape, two deliberately different styles, distinguished on the label by which language the producer chose. The name signals the style.",
    regions: [
      { name: "Italy", detail: "Pinot Grigio delle Venezie DOC, Alto Adige and Friuli. Picked early for light-bodied, neutral, high-acid wine with lemon and pear. Alto Adige gives more concentrated versions." },
      { name: "Alsace, France", detail: "Pinot Gris here is rich, medium to full bodied, low to medium acidity, often off-dry, with tropical fruit, ginger, honey and smoke. Grand Cru and Vendanges Tardives styles exist." },
      { name: "Germany", detail: "Grauburgunder for dry styles; Ruländer for sweeter, richer ones." },
      { name: "New World", detail: "Oregon and New Zealand make textured, medium-bodied styles between the two European models; Australia labels lighter versions Grigio and richer ones Gris." }
    ],
    profile: [
      { label: "Italian Grigio style", detail: "Dry, high acidity, light body, light intensity: lemon, pear, apple. Made to be inexpensive and drunk young." },
      { label: "Alsace Gris style", detail: "Dry to medium-sweet, low to medium acidity, full body, high alcohol: peach, apricot, mango, ginger, honey." }
    ],
    key: [
      "The grape has a pinkish-grey skin, which can give the wine a deeper lemon or even faintly copper tint.",
      "It is a mutation of Pinot Noir, so it thrives in the same cool to moderate climates."
    ],
    traps: [
      "There is no grape called Pinot Grigio and another called Pinot Gris: it is the same variety and the difference is one of style and place."
    ],
    related: ["chardonnay", "aromatic-whites", "riesling"]
  },
  {
    id: "riesling",
    name: "Riesling",
    group: "White grapes",
    swatch: "lemon",
    blurb: "High acidity, low alcohol, wonderfully long-lived, and the grape whose German label terms carry the most exam marks. Learn the Prädikat ladder.",
    regions: [
      { name: "Mosel, Germany", detail: "Steep south-facing slate slopes above the river. Light-bodied, low alcohol (often 7-9%), searingly high acidity, green apple and lemon, frequently off-dry to sweet to balance the acid." },
      { name: "Rheingau & Pfalz, Germany", detail: "Rheingau is slightly fuller and often dry; Pfalz is warmer, riper and rounder." },
      { name: "Alsace, France", detail: "Almost always dry, medium body, more alcohol and citrus and stone fruit weight than Germany." },
      { name: "Austria", detail: "Wachau, Kremstal and Kamptal: dry, full, concentrated, high acid." },
      { name: "Clare & Eden Valley, Australia", detail: "Bone dry, high acidity, pronounced lime and grapefruit, developing toast and petrol with bottle age." },
      { name: "Elsewhere", detail: "Washington State, New York's Finger Lakes and New Zealand." }
    ],
    profile: [
      { label: "Structure", detail: "Dry to luscious, always high acidity, light to medium body, usually low to medium alcohol. Almost never oaked." },
      { label: "Youth", detail: "Green apple, lemon, lime, grapefruit, peach, apricot and floral notes." },
      { label: "With age", detail: "Honey, toast and the distinctive petrol or kerosene note." }
    ],
    key: [
      "Prädikat levels run by ripeness at harvest: Kabinett (lightest), Spätlese (late picked), Auslese (selected bunches, often botrytis), Beerenauslese (individually selected botrytised berries), Trockenbeerenauslese (shrivelled botrytised berries, luscious), and Eiswein (frozen grapes, no botrytis).",
      "Trocken on a German label means dry; Halbtrocken or Feinherb means off-dry.",
      "Riesling is not oaked: the winemaking aim is to preserve varietal aroma and acidity.",
      "Its high acidity plus sugar makes it one of the longest-lived white wines in the world."
    ],
    traps: [
      "A Spätlese is not necessarily sweet: the term describes ripeness at picking, and the wine can be fermented dry (Spätlese Trocken).",
      "Eiswein grapes are frozen on the vine and must be free of botrytis; Trockenbeerenauslese depends on botrytis. Do not swap them."
    ],
    related: ["sweet-wines", "aromatic-whites", "labels"]
  },
  {
    id: "chenin-blanc",
    name: "Chenin Blanc",
    group: "White grapes",
    swatch: "gold",
    blurb: "The most versatile white grape on the syllabus: dry, off-dry, sweet, sparkling and everything in between, all held together by very high acidity.",
    regions: [
      { name: "Vouvray & Montlouis (Loire, France)", detail: "Dry (sec), off-dry (demi-sec) and sweet (moelleux) still wines plus traditional-method sparkling. Style varies with the vintage." },
      { name: "Anjou & Saumur (Loire)", detail: "Saumur for sparkling and dry whites; Savennières for austere dry wine; Coteaux du Layon, Bonnezeaux and Quarts de Chaume for noble-rot sweet wines." },
      { name: "South Africa", detail: "The country's most planted variety, historically called Steen. Stellenbosch, Paarl and Swartland: inexpensive fresh styles and premium old-vine, oaked, concentrated ones." }
    ],
    profile: [
      { label: "Structure", detail: "Dry to sweet, high acidity, light to medium body, medium alcohol." },
      { label: "Aromas", detail: "Green apple, lemon, wet wool, chamomile and honey; ripe versions add peach and tropical fruit; sweet versions add honey and marmalade." },
      { label: "With age", detail: "Honey, toast and nuts. High acidity means the best examples last for decades." }
    ],
    key: [
      "High acidity makes it a natural base for sparkling wine (Crémant de Loire) and lets sweet versions stay balanced rather than cloying.",
      "It is susceptible to noble rot in the damp autumns of the Layon valley, which is why the Loire's great sweet wines are Chenin.",
      "In South Africa the best sites are old bush vines, often dry-farmed."
    ],
    traps: [
      "A Vouvray can be bone dry or richly sweet, so check for sec, demi-sec or moelleux on the label.",
      "Steen is Chenin Blanc, not a separate grape."
    ],
    related: ["sauvignon-blanc", "sweet-wines", "other-sparkling"]
  },
  {
    id: "aromatic-whites",
    name: "Aromatic whites: Gewurztraminer, Muscat, Viognier, Torrontés",
    group: "White grapes",
    swatch: "gold",
    blurb: "Four grapes with pronounced floral and perfumed aromas. They are grouped because the exam tests whether you can tell one perfume from another.",
    regions: [
      { name: "Gewurztraminer", detail: "Alsace above all, plus Germany, Alto Adige, New Zealand and Chile. Pronounced lychee, rose, ginger; low acidity, high alcohol, full body, often off-dry." },
      { name: "Muscat", detail: "Many forms worldwide. Dry in Alsace; sweet and lightly sparkling as Moscato d'Asti and Asti in Piemonte; fortified as Vin Doux Naturel in southern France and as Rutherglen Muscat in Australia." },
      { name: "Viognier", detail: "Condrieu in the northern Rhône is the benchmark; also Languedoc, California and Australia. Apricot, peach, honeysuckle; low acidity, full body, high alcohol." },
      { name: "Torrontés", detail: "Argentina, especially Salta at high altitude. Intense floral and grapey aromas but usually dry with medium acidity." }
    ],
    profile: [
      { label: "The shared signature", detail: "Pronounced aroma intensity that you can identify before tasting, usually floral or grapey, and generally low to medium acidity." },
      { label: "Telling them apart", detail: "Lychee and rose is Gewurztraminer. Grapey is Muscat. Apricot and honeysuckle is Viognier. Floral but dry and from high-altitude Argentina is Torrontés." }
    ],
    key: [
      "Muscat is the one major grape whose wine actually smells of grapes.",
      "In the northern Rhône a small proportion of Viognier may legally be co-fermented with Syrah in Côte-Rôtie.",
      "Gewurztraminer's low acidity and high alcohol make it a classic match for aromatic Asian dishes and for pungent cheese."
    ],
    traps: [
      "Aromatic does not mean sweet. Torrontés and Alsace Muscat are usually dry despite smelling perfumed and floral."
    ],
    related: ["pinot-grigio", "other-sparkling", "fortified-muscat"]
  },
  {
    id: "other-whites",
    name: "Other white varieties",
    group: "White grapes",
    swatch: "lemon",
    blurb: "The regional specialities. Each one is usually worth one exam question, and the question is nearly always which region it comes from.",
    regions: [
      { name: "Albariño", detail: "Rías Baixas, Galicia, Spain. Dry, high acidity, citrus and stone fruit, sometimes a saline note. Also Alvarinho in Vinho Verde, Portugal." },
      { name: "Grüner Veltliner", detail: "Austria's signature white (Niederösterreich, Wachau, Kamptal). Dry, high acidity, citrus and green fruit with a white-pepper note; premium versions are full and age-worthy." },
      { name: "Verdejo", detail: "Rueda, Spain. Dry, high acidity, citrus and a distinctive herbaceous, slightly bitter finish." },
      { name: "Garganega", detail: "The grape of Soave in the Veneto, Italy. Light to medium body, medium to high acidity, lemon and pear with an almond note. Soave Classico is the better zone." },
      { name: "Cortese", detail: "Gavi in Piemonte, Italy. Dry, high acidity, light body, green apple and lemon." },
      { name: "Fiano & Verdicchio", detail: "Fiano di Avellino in Campania (medium body, stone fruit, waxy); Verdicchio in Marche (high acid, citrus, almond)." },
      { name: "Assyrtiko", detail: "Santorini, Greece. Bone dry, very high acidity, citrus and stone character even in a hot climate." },
      { name: "Furmint", detail: "Tokaj, Hungary. High acidity; dry styles plus the botrytised sweet Tokaji Aszú." },
      { name: "Sémillon", detail: "Bordeaux (blended with Sauvignon Blanc, dry and sweet) and Hunter Valley, Australia (picked early, low alcohol, ages to toast and honey without oak)." }
    ],
    profile: [
      { label: "Common thread", detail: "Most are dry, unoaked, high in acidity and made to express a specific place." },
      { label: "Reading the question", detail: "The exam usually names the wine, not the grape: Soave means Garganega, Gavi means Cortese, Rueda means Verdejo, Rías Baixas means Albariño." }
    ],
    key: [
      "Vinho Verde in northern Portugal is light, low in alcohol, high in acid and often has a slight spritz.",
      "Trebbiano (Ugni Blanc in France) is high yielding and neutral, widely used for inexpensive wine and for brandy.",
      "Hunter Valley Sémillon is a classic example of a wine that gains complexity from bottle age with no oak involved."
    ],
    traps: [
      "Soave, Gavi, Rueda and Rías Baixas are places. Naming the grape for each of them is a standard exam question."
    ],
    related: ["sauvignon-blanc", "sweet-wines", "labels"]
  },

  /* ---------------------------------------------------------------- BLACK GRAPES */
  {
    id: "cabernet-sauvignon",
    name: "Cabernet Sauvignon",
    group: "Black grapes",
    swatch: "purple",
    blurb: "Small berries, thick skins, therefore deep colour and high tannin. It ripens late, so it needs a moderate to warm climate, and it is almost always blended in its homeland.",
    regions: [
      { name: "Médoc & Graves (Bordeaux, France)", detail: "The left bank, on gravel soils that drain and retain heat. Blended with Merlot and Cabernet Franc. Communes: Saint-Estèphe, Pauillac, Saint-Julien, Margaux; also Pessac-Léognan." },
      { name: "Napa Valley, California", detail: "Warm, ripe and full-bodied with generous new oak. Sub-districts include Oakville, Rutherford and Stags Leap District." },
      { name: "Coonawarra & Margaret River, Australia", detail: "Coonawarra for mint and eucalyptus over blackcurrant on terra rossa soil; Margaret River for structured Cabernet blends." },
      { name: "Chile", detail: "Maipo, Colchagua and the Central Valley: reliable, ripe blackcurrant with a herbal edge, good value." },
      { name: "Elsewhere", detail: "Stellenbosch in South Africa, Bolgheri and the Super Tuscans in Italy, and Argentina." }
    ],
    profile: [
      { label: "Structure", detail: "Dry, high tannin, high acidity, medium to full body, medium to high alcohol. Deep ruby to purple." },
      { label: "Aromas", detail: "Blackcurrant, black cherry, blackberry; a green bell pepper or leafy note if underripe; mint and eucalyptus in some Australian regions." },
      { label: "Oak & age", detail: "New oak gives cedar, vanilla, smoke and toast. With bottle age: cigar box, pencil shavings, leather, earth." }
    ],
    key: [
      "It is late ripening, so in a cool year it can taste herbaceous and in cool regions it may not ripen at all.",
      "Blending with Merlot adds flesh and softness in the middle of the palate; Cabernet Franc adds perfume and freshness.",
      "High tannin and acidity make it one of the most age-worthy red grapes and a natural partner for the finest new oak barrels.",
      "Classic food pairing: red meat, whose protein and fat soften the tannins."
    ],
    traps: [
      "Left bank Bordeaux (Médoc, Graves) is Cabernet-dominant; right bank (Saint-Émilion, Pomerol) is Merlot-dominant. Learn which bank is which.",
      "Cabernet Franc is a separate, earlier-ripening grape: lighter, more perfumed, with a leafy red-fruit character. It is the grape of Chinon and Bourgueil in the Loire."
    ],
    related: ["merlot", "labels", "syrah"]
  },
  {
    id: "merlot",
    name: "Merlot",
    group: "Black grapes",
    swatch: "ruby",
    blurb: "Early ripening, thinner skinned and softer than Cabernet Sauvignon, which is exactly why the two are blended. Two distinct international styles.",
    regions: [
      { name: "Right bank Bordeaux, France", detail: "Saint-Émilion and Pomerol on clay and limestone, blended with Cabernet Franc. Also the backbone of most inexpensive Bordeaux AOC red." },
      { name: "California & Washington, USA", detail: "Ripe, plummy, full-bodied, oaked." },
      { name: "Chile", detail: "Central Valley: soft, fruity, good value. Historically confused with Carmenère." },
      { name: "Elsewhere", detail: "Italy (from cheap Veneto blends to Super Tuscans), Australia, South Africa, Argentina and Romania." }
    ],
    profile: [
      { label: "International style", detail: "Picked late in warm climates: deep colour, full body, high alcohol, ripe blackberry, black plum and cooked fruit, soft tannins, often generous new oak." },
      { label: "Bordeaux style", detail: "Picked earlier in moderate climates: medium body, medium alcohol, higher acidity, fresh red fruit and plum with a leafy, herbaceous edge." },
      { label: "Structure", detail: "Dry, medium to high tannin but softer and rounder than Cabernet, medium acidity." }
    ],
    key: [
      "Merlot buds and ripens early, so it is at risk from spring frost but succeeds where Cabernet Sauvignon would not fully ripen.",
      "It is the most planted variety in Bordeaux by a wide margin.",
      "It is more approachable young than Cabernet Sauvignon, which is a large part of its commercial appeal."
    ],
    traps: [
      "Pomerol has no classification of growths, yet it produces some of the most expensive wine in Bordeaux."
    ],
    related: ["cabernet-sauvignon", "malbec-carmenere", "labels"]
  },
  {
    id: "pinot-noir",
    name: "Pinot Noir",
    group: "Black grapes",
    swatch: "ruby",
    blurb: "Thin skinned, early budding, disease prone and fussy about climate. It gives pale, perfumed, high-acid reds and only performs in cool to moderate places.",
    regions: [
      { name: "Burgundy, France", detail: "The benchmark. Côte de Nuits (Gevrey-Chambertin, Vosne-Romanée, Nuits-Saint-Georges) for the most structured; Côte de Beaune (Pommard, Volnay) and the cheaper Côte Chalonnaise. Hierarchy: regional, village, Premier Cru, Grand Cru." },
      { name: "Champagne, France", detail: "One of the three principal grapes, pressed quickly to give white juice for sparkling wine." },
      { name: "Germany", detail: "Spätburgunder, especially Baden and Pfalz: light to medium bodied, red fruited." },
      { name: "New Zealand", detail: "Central Otago (ripe, concentrated), Martinborough and Marlborough." },
      { name: "USA", detail: "Sonoma Coast, Russian River Valley, Carneros and Santa Barbara in California; Willamette Valley in Oregon." },
      { name: "Elsewhere", detail: "Yarra Valley, Mornington Peninsula and Tasmania in Australia; Casablanca and Leyda in Chile; Walker Bay in South Africa." }
    ],
    profile: [
      { label: "Structure", detail: "Dry, low to medium tannin, high acidity, light to medium body, medium alcohol. Pale ruby colour." },
      { label: "Cool climate", detail: "Red cherry, cranberry, raspberry, often with an earthy or floral note." },
      { label: "Warmer climate", detail: "Riper strawberry, red plum and even black cherry, with more body." },
      { label: "With age", detail: "Mushroom, forest floor, game, leather. Oak adds vanilla, smoke and clove." }
    ],
    key: [
      "The thin skins are why the wine is pale and low in tannin, and why the grape is prone to rot in damp weather.",
      "It buds early, exposing it to spring frost, and it mutates readily, giving many clones.",
      "Because it is delicate, oak is used with restraint: too much new oak buries the fruit."
    ],
    traps: [
      "A pale colour does not mean a light or simple wine. Great Burgundy is pale and intensely flavoured.",
      "Red Burgundy is Pinot Noir; white Burgundy is Chardonnay; Beaujolais, though in Burgundy's orbit, is Gamay."
    ],
    related: ["champagne", "gamay", "chardonnay"]
  },
  {
    id: "syrah",
    name: "Syrah / Shiraz",
    group: "Black grapes",
    swatch: "purple",
    blurb: "One grape, two names, and the name usually tells you the style. Syrah signals a peppery, restrained northern Rhône model; Shiraz signals ripe, sweet-fruited Australian richness.",
    regions: [
      { name: "Northern Rhône, France", detail: "The only black grape permitted. Hermitage and Côte-Rôtie are the top appellations; Crozes-Hermitage and Saint-Joseph are the affordable ones; Cornas is powerful and tannic. In Côte-Rôtie a little Viognier may be co-fermented." },
      { name: "Southern Rhône, France", detail: "A blending partner with Grenache and Mourvèdre in Châteauneuf-du-Pape, Gigondas and Côtes du Rhône." },
      { name: "Barossa Valley & McLaren Vale, Australia", detail: "Warm: deep, full-bodied, soft, high alcohol, blackberry and liquorice, often with American oak and old-vine concentration." },
      { name: "Cooler Australia", detail: "Hunter Valley (earthy, medium bodied), Heathcote, Canberra District and Great Southern for peppery, fresher styles." },
      { name: "Elsewhere", detail: "Chile, South Africa (Swartland, Stellenbosch), Washington State and southern France." }
    ],
    profile: [
      { label: "Structure", detail: "Dry, medium to high tannin, medium to high acidity, full body, medium to high alcohol. Deep purple." },
      { label: "Cool to moderate climate", detail: "Blackberry, black pepper, violet, herbal notes, sometimes smoky meat." },
      { label: "Warm climate", detail: "Blackberry and black cherry jam, liquorice, chocolate, soft tannins, high alcohol." },
      { label: "Oak & age", detail: "Vanilla, coconut (American oak), smoke; with age leather, earth and game." }
    ],
    key: [
      "Black pepper is the classic marker of cooler-climate Syrah and fades as the climate warms.",
      "GSM (Grenache, Syrah, Mourvèdre) is the standard blend of the southern Rhône and of Barossa and McLaren Vale.",
      "Australia's oldest surviving Shiraz vines are among the oldest producing vines in the world, since phylloxera never reached South Australia."
    ],
    traps: [
      "Petite Sirah is a different grape (Durif) and is not Syrah.",
      "Hermitage is a hill in the northern Rhône, not a producer or a grape."
    ],
    related: ["grenache", "cabernet-sauvignon", "grape-growing"]
  },
  {
    id: "grenache",
    name: "Grenache / Garnacha",
    group: "Black grapes",
    swatch: "ruby",
    blurb: "Late ripening, drought resistant and high in sugar, so it makes powerful, high-alcohol wines with soft tannins. It is a blender by nature.",
    regions: [
      { name: "Southern Rhône, France", detail: "The dominant grape of Châteauneuf-du-Pape (up to 13 varieties permitted), Gigondas, Vacqueyras and most Côtes du Rhône." },
      { name: "Spain", detail: "Called Garnacha. Priorat for concentrated, powerful old-vine reds on llicorella slate; a key blending grape in Rioja; also Navarra, Campo de Borja and Calatayud." },
      { name: "Australia", detail: "Barossa Valley and McLaren Vale, often as old bush vines and as part of GSM blends." },
      { name: "Rosé", detail: "The backbone of Tavel, Provence rosé and Navarra rosado." }
    ],
    profile: [
      { label: "Structure", detail: "Dry, low to medium tannin, low to medium acidity, full body, high alcohol (often 14.5%+). Colour is often pale to medium ruby." },
      { label: "Aromas", detail: "Ripe strawberry, red plum, red cherry, with herbal and sweet spice notes; can develop toffee and dried fruit with age." }
    ],
    key: [
      "Its high sugar accumulation is why so many southern Rhône wines are high in alcohol.",
      "Blending fixes what Grenache lacks: Syrah adds colour and pepper, Mourvèdre adds tannin and structure.",
      "It thrives in hot, dry, windy conditions and is often trained as low bush vines."
    ],
    traps: [
      "Grenache is frequently pale for its weight, so do not judge its power by colour.",
      "Châteauneuf-du-Pape is Grenache-led but is a blend; it is not a single-variety wine."
    ],
    related: ["syrah", "tempranillo", "service-storage"]
  },
  {
    id: "tempranillo",
    name: "Tempranillo",
    group: "Black grapes",
    swatch: "ruby",
    blurb: "Spain's leading black grape, and the vehicle for the Rioja ageing terms, which are among the most heavily examined label rules on the syllabus.",
    regions: [
      { name: "Rioja, Spain", detail: "Blended with Garnacha, Graciano and Mazuelo. Zones: Rioja Alta and Rioja Alavesa (cooler, finer) and Rioja Oriental (warmer, riper, higher alcohol)." },
      { name: "Ribera del Duero, Spain", detail: "High altitude, big diurnal range: deeper, more concentrated and more tannic than Rioja." },
      { name: "Toro & Navarra, Spain", detail: "Toro is warm and powerful with high alcohol." },
      { name: "Portugal", detail: "Known as Tinta Roriz in the Douro and Aragonez in the Alentejo; a component of Port." }
    ],
    profile: [
      { label: "Structure", detail: "Dry, medium to high tannin, medium to high acidity, medium to full body, medium to high alcohol." },
      { label: "Young", detail: "Strawberry, red cherry, red plum, sometimes with dried fruit in warmer sites." },
      { label: "With oak & age", detail: "Vanilla and coconut from American oak, then leather, tobacco, dried fruit and savoury notes. Traditional Rioja is aged long enough to arrive garnet and mellow." }
    ],
    key: [
      "Rioja ageing terms (red wine): Genérico/Joven with little or no ageing; Crianza needs 2 years total with at least 1 in oak; Reserva needs 3 years total with at least 1 in oak; Gran Reserva needs 2 years in oak plus 3 years in bottle.",
      "American oak is traditional in Rioja and contributes the coconut and sweet vanilla signature; French oak is now common in modern styles.",
      "The name comes from temprano, early, because it ripens early."
    ],
    traps: [
      "Rioja Alta is a zone; Rioja Alavesa is a different zone in the Basque Country. Rioja Baja was renamed Rioja Oriental.",
      "White Rioja exists and is usually Viura."
    ],
    related: ["labels", "grenache", "port"]
  },
  {
    id: "sangiovese",
    name: "Sangiovese",
    group: "Black grapes",
    swatch: "garnet",
    blurb: "Tuscany's grape and the definition of a food wine: high acidity, high tannin, sour red cherry and a savoury edge.",
    regions: [
      { name: "Chianti & Chianti Classico, Tuscany", detail: "Chianti DOCG covers a wide area; Chianti Classico DOCG is the historic heartland, with Riserva and the top Gran Selezione tiers." },
      { name: "Brunello di Montalcino, Tuscany", detail: "100% Sangiovese (locally Brunello), warmer and drier, powerful and long aged. Rosso di Montalcino is the younger, cheaper version." },
      { name: "Vino Nobile di Montepulciano, Tuscany", detail: "Sangiovese, here called Prugnolo Gentile. Not to be confused with the Montepulciano grape of Abruzzo." },
      { name: "Elsewhere", detail: "Romagna in Emilia-Romagna, and small plantings in California and Argentina." }
    ],
    profile: [
      { label: "Structure", detail: "Dry, high acidity, high tannin, medium body, medium to high alcohol. Pale to medium ruby, quickly turning garnet." },
      { label: "Aromas", detail: "Sour red cherry, red plum, dried herbs, tomato leaf; oak adds vanilla, smoke and cedar; age brings leather, earth and game." }
    ],
    key: [
      "Its acidity and tannin make it a classic partner for tomato-based dishes and cured meats.",
      "Chianti Classico must be at least 80% Sangiovese; a small amount of other varieties, including international ones, may be blended in.",
      "Super Tuscans were created outside the DOC rules using Cabernet Sauvignon and Merlot; many are now IGT Toscana or Bolgheri DOC."
    ],
    traps: [
      "Vino Nobile di Montepulciano is a Tuscan wine from Sangiovese; Montepulciano d'Abruzzo is a different grape in a different region. This is a favourite trick question.",
      "Brunello is not a separate variety, it is a local name for Sangiovese."
    ],
    related: ["nebbiolo", "other-italian-reds", "food-pairing"]
  },
  {
    id: "nebbiolo",
    name: "Nebbiolo",
    group: "Black grapes",
    swatch: "garnet",
    blurb: "Pale in the glass and ferocious on the palate. Highest tannin and highest acidity on the syllabus, from a grape that barely travels outside Piemonte.",
    regions: [
      { name: "Barolo, Piemonte, Italy", detail: "The most structured and long-lived, from the Langhe hills. Minimum ageing before release, traditionally in large old oak botti." },
      { name: "Barbaresco, Piemonte", detail: "Slightly warmer and earlier ripening, marginally lighter and more approachable than Barolo." },
      { name: "Langhe Nebbiolo, Piemonte", detail: "The entry-level DOC: same grape, less ageing, much lower price." },
      { name: "Valtellina, Lombardy", detail: "Steep alpine terraces; lighter, high-acid styles, plus the dried-grape Sforzato." }
    ],
    profile: [
      { label: "Structure", detail: "Dry, high tannin, high acidity, full body, high alcohol, yet pale ruby fading rapidly to garnet." },
      { label: "Aromas", detail: "Red cherry, red plum, dried herbs, rose and violet, tar; with age truffle, leather, mushroom and dried fruit." }
    ],
    key: [
      "The name is linked to nebbia, fog, which shrouds the Langhe hills at harvest; it is the last variety to be picked.",
      "It needs the best south-facing sites to ripen, since it buds early and ripens very late.",
      "Barolo and Barbaresco are both DOCG and both must be 100% Nebbiolo."
    ],
    traps: [
      "Do not judge Nebbiolo by its pale colour: it has the highest tannin of the varieties you are examined on.",
      "Barolo the wine comes from the Barolo zone in Piemonte, not from a grape called Barolo."
    ],
    related: ["sangiovese", "other-italian-reds", "sat"]
  },
  {
    id: "other-italian-reds",
    name: "Corvina, Montepulciano, Barbera & friends",
    group: "Black grapes",
    swatch: "ruby",
    blurb: "Italy's second rank of black grapes. Corvina carries the most exam weight because of the Valpolicella family of styles.",
    regions: [
      { name: "Corvina (Veneto)", detail: "The main grape of Valpolicella and Bardolino. Light body, high acidity, low to medium tannin, sour red cherry and almond." },
      { name: "Valpolicella styles", detail: "Valpolicella (light and fresh); Ripasso (refermented on Amarone skins for more body and alcohol); Amarone della Valpolicella (dried grapes, dry, full, 15%+, raisin and cooked fruit); Recioto della Valpolicella (dried grapes, sweet)." },
      { name: "Montepulciano (Abruzzo)", detail: "Deeply coloured, medium to high tannin, medium acidity, ripe black plum and blackberry. Inexpensive and reliable." },
      { name: "Barbera (Piemonte)", detail: "Barbera d'Asti and Barbera d'Alba. High acidity but low tannin, deep colour, red cherry and plum; sometimes oaked." },
      { name: "Nero d'Avola (Sicily)", detail: "Warm-climate, full-bodied, black fruit and sweet spice." }
    ],
    profile: [
      { label: "Appassimento", detail: "Grapes are dried on mats or racks for weeks after picking. Water evaporates, concentrating sugar, acid and flavour, giving raisined, high-alcohol wines." },
      { label: "The Valpolicella ladder", detail: "Light and fresh, then Ripasso, then Amarone: increasing body, alcohol, concentration and price. Recioto is the sweet member of the family." }
    ],
    key: [
      "Amarone is dry despite being made from dried grapes: fermentation is taken nearly to completion, leaving high alcohol and often a touch of residual sugar.",
      "Recioto stops fermentation early so the concentrated sugar remains.",
      "Barbera's combination of high acid and low tannin makes it unusually food-friendly and approachable young."
    ],
    traps: [
      "Montepulciano the grape (Abruzzo) versus Vino Nobile di Montepulciano the Tuscan wine from Sangiovese: know both.",
      "Ripasso is not simply cheap Amarone; it is Valpolicella refermented on the skins left over from Amarone."
    ],
    related: ["sangiovese", "nebbiolo", "sweet-wines"]
  },
  {
    id: "malbec-carmenere",
    name: "Malbec & Carmenère",
    group: "Black grapes",
    swatch: "purple",
    blurb: "Two Bordeaux exiles that found a new identity in South America. Both are exam staples for the region-plus-grape pairing.",
    regions: [
      { name: "Mendoza, Argentina", detail: "Malbec's modern home. High-altitude sub-regions such as Luján de Cuyo and the Uco Valley give fresher acidity, deeper colour and more perfume; irrigation comes from Andean snowmelt." },
      { name: "Cahors, France", detail: "Malbec's original home in south-west France, where it is often called Côt. More rustic, tannic and earthy than Argentina." },
      { name: "Chile", detail: "Carmenère's home, especially Colchagua, Rapel and Maipo. Ripens very late; picked too early it is aggressively herbaceous." }
    ],
    profile: [
      { label: "Malbec", detail: "Dry, deep purple, medium to high tannin (velvety in texture), medium acidity, full body, high alcohol; blackberry, black plum, violet, with vanilla and mocha from oak." },
      { label: "Carmenère", detail: "Dry, deep colour, medium to high tannin, medium acidity; blackberry and black plum with a signature green bell pepper and herbaceous note even when ripe." }
    ],
    key: [
      "Carmenère was mistaken for Merlot in Chile until DNA analysis identified it in the 1990s.",
      "Altitude is the key quality factor in Mendoza: cool nights preserve acidity and colour while days are hot and sunny.",
      "Both grapes are permitted in Bordeaux but are now barely planted there."
    ],
    traps: [
      "Green pepper in a Chilean red usually points to Carmenère rather than to a fault."
    ],
    related: ["merlot", "cabernet-sauvignon", "grape-growing"]
  },
  {
    id: "zinfandel",
    name: "Zinfandel / Primitivo",
    group: "Black grapes",
    swatch: "ruby",
    blurb: "The same grape on two continents, and the source of one of the world's best-selling pink wines.",
    regions: [
      { name: "California, USA", detail: "Lodi, Napa, Sonoma (Dry Creek Valley) and the Sierra Foothills, often from old bush vines." },
      { name: "Puglia, Italy", detail: "Called Primitivo: ripe, soft, inexpensive and warm-climate." }
    ],
    profile: [
      { label: "Red Zinfandel", detail: "Dry, medium to high tannin, medium acidity, full body, high alcohol (often 15%+); ripe blackberry, black cherry, jam, sweet spice and often a raisined note." },
      { label: "White Zinfandel", detail: "A medium-sweet pale pink wine made from the same black grape by limiting skin contact. Light, fruity and inexpensive." }
    ],
    key: [
      "Bunches ripen unevenly, so a single bunch can hold raisined and underripe berries at once, which pushes sugar and alcohol high.",
      "Old-vine plantings in California are prized for their concentration and low yields.",
      "American oak is common and reinforces the sweet spice and vanilla character."
    ],
    traps: [
      "White Zinfandel is not made from a white grape; the colour comes from very limited skin contact."
    ],
    related: ["grenache", "winemaking", "syrah"]
  },
  {
    id: "gamay",
    name: "Gamay",
    group: "Black grapes",
    swatch: "ruby",
    blurb: "Light, juicy and defined less by the grape than by carbonic maceration, the winemaking technique the exam wants you to recognise.",
    regions: [
      { name: "Beaujolais, France", detail: "The tiers: Beaujolais AOC (lightest), Beaujolais-Villages, and ten named Crus including Fleurie, Morgon, Moulin-à-Vent and Brouilly, which are fuller and can age." },
      { name: "Beaujolais Nouveau", detail: "Released on the third Thursday of November in the year of harvest; made almost entirely by carbonic maceration for maximum fruit and minimum tannin." },
      { name: "Loire Valley, France", detail: "Gamay is also grown in Touraine for light, fresh reds." }
    ],
    profile: [
      { label: "Structure", detail: "Dry, low tannin, high acidity, light to medium body, medium alcohol. Pale to medium ruby." },
      { label: "Aromas", detail: "Red cherry, raspberry, red plum; carbonic maceration adds banana, kirsch, bubblegum and cinnamon." },
      { label: "Cru Beaujolais", detail: "More structure, more concentration, sometimes oak, capable of several years in bottle." }
    ],
    key: [
      "Carbonic maceration ferments whole uncrushed bunches in a carbon-dioxide-filled vessel; fermentation starts inside the berry, extracting colour but very little tannin.",
      "Semi-carbonic maceration, where the weight of the bunches crushes the lower fruit, is the more common variant.",
      "Beaujolais is served slightly chilled, around 13C, like other light-bodied reds."
    ],
    traps: [
      "Beaujolais is Gamay, not Pinot Noir, even though it sits at the southern end of Burgundy."
    ],
    related: ["pinot-noir", "winemaking", "service-storage"]
  },
  {
    id: "other-reds",
    name: "Other black varieties",
    group: "Black grapes",
    swatch: "purple",
    blurb: "The rest of the black-grape list. Each is worth knowing for one fact: where it comes from and what makes it distinctive.",
    regions: [
      { name: "Pinotage", detail: "South Africa's own crossing of Pinot Noir and Cinsault. Deep colour, medium to high tannin, ripe black fruit, often with smoky, banana or coffee notes from winemaking." },
      { name: "Touriga Nacional", detail: "Portugal (Douro and Dão). Deeply coloured, high tannin, floral and blackberry-scented; a key Port variety and increasingly used for dry red." },
      { name: "Cabernet Franc", detail: "Loire (Chinon, Bourgueil, Saumur-Champigny) and a blending grape in Bordeaux. Lighter than Cabernet Sauvignon, red fruited, leafy and perfumed." },
      { name: "Mourvèdre / Monastrell", detail: "Southern France and south-east Spain. High tannin, full body, needs real heat to ripen; adds structure to GSM blends." },
      { name: "Cinsault & Carignan", detail: "Southern France and beyond; Cinsault is light and often used for rosé, Carignan is deeply coloured and high in tannin and acid." }
    ],
    profile: [
      { label: "Why they matter", detail: "They fill out blends and define national identity: Pinotage for South Africa, Touriga Nacional for Portugal." }
    ],
    key: [
      "Pinotage is a crossing (two varieties of the same species) rather than a hybrid (two different species).",
      "The Douro's red grapes double as Port grapes: Touriga Nacional, Touriga Franca, Tinta Roriz, Tinta Barroca and Tinto Cão."
    ],
    traps: [
      "Cabernet Franc is a parent of Cabernet Sauvignon (with Sauvignon Blanc), not a clone of it."
    ],
    related: ["port", "cabernet-sauvignon", "grenache"]
  },

  /* ---------------------------------------------------------------- SPARKLING */
  {
    id: "champagne",
    name: "Champagne & the traditional method",
    group: "Sparkling wines",
    swatch: "gold",
    blurb: "Learn this method properly and half the sparkling section answers itself, because every other traditional-method wine is a variation on it.",
    regions: [
      { name: "Champagne, France", detail: "A cool region in northern France; grapes ripen with high acidity and low sugar, which is exactly what a sparkling base wine needs. Chalk soils; key areas include Montagne de Reims, Côte des Blancs and Vallée de la Marne." },
      { name: "The three principal grapes", detail: "Chardonnay (citrus, floral, ages well), Pinot Noir (body, red fruit, structure) and Meunier (fruity, approachable young)." }
    ],
    profile: [
      { label: "How it is made", detail: "A dry, high-acid base wine is bottled with sugar and yeast (liqueur de tirage). The second fermentation happens in that bottle, trapping carbon dioxide. The wine then ages on the lees." },
      { label: "Autolysis", detail: "Ageing on dead yeast cells gives the biscuit, bread, pastry and toast aromas that define the style. Minimum lees ageing: 15 months total for non-vintage, 3 years for vintage." },
      { label: "Finishing", detail: "Riddling collects the sediment in the neck; disgorgement removes it; the dosage (liqueur d'expédition) tops the bottle up and sets the sweetness." },
      { label: "Taste", detail: "High acidity, medium body, green apple, citrus and white peach over biscuit and toast; long finish." }
    ],
    key: [
      "Sweetness levels: Brut Nature (0-3 g/L), Extra Brut (0-6), Brut (0-12), Extra Dry (12-17), Sec (17-32), Demi-Sec (32-50), Doux (50+). Brut is by far the most common.",
      "Non-vintage is a blend of several years to keep a consistent house style; vintage is made only in the best years from a single harvest.",
      "Blanc de Blancs is 100% Chardonnay; Blanc de Noirs is made from black grapes only; rosé Champagne is usually made by blending in red wine, uniquely permitted here.",
      "Other traditional-method wines: Crémant (Loire, Alsace, Bourgogne, Limoux), Cava, English sparkling, Franciacorta, Cap Classique in South Africa."
    ],
    traps: [
      "Extra Dry is sweeter than Brut. The names are historical, not logical, and this is examined often.",
      "The bubbles come from the second fermentation, not from injected gas; carbonation is only used for the cheapest sparkling wines."
    ],
    related: ["other-sparkling", "chardonnay", "pinot-noir"]
  },
  {
    id: "other-sparkling",
    name: "Prosecco, Cava, Asti & other sparkling",
    group: "Sparkling wines",
    swatch: "lemon",
    blurb: "The contrast set for Champagne. The exam wants you to link each wine to its grape, its region and, above all, its production method.",
    regions: [
      { name: "Prosecco (Veneto & Friuli, Italy)", detail: "Grape: Glera. Made by the tank method, which preserves fresh primary fruit. Prosecco DOC is the base; Conegliano Valdobbiadene and Asolo are the DOCG zones. Usually Brut or Extra Dry." },
      { name: "Cava (mainly Catalunya, Spain)", detail: "Traditional method. Grapes: Macabeo, Xarel-lo and Parellada, plus Chardonnay and Pinot Noir. Cava de Guarda is the entry level; Guarda Superior tiers include Reserva (18 months on lees) and Gran Reserva (30 months)." },
      { name: "Asti & Moscato d'Asti (Piemonte, Italy)", detail: "Grape: Muscat. A single fermentation in tank is stopped early, keeping sugar and a grapey, floral aroma. Asti is sweet and about 7% abv; Moscato d'Asti is lightly sparkling (frizzante) and around 5.5%." },
      { name: "Germany", detail: "Sekt: mostly inexpensive tank-method wine; Deutscher Sekt must be made from German-grown grapes, often Riesling." },
      { name: "England", detail: "Traditional method from Chardonnay, Pinot Noir and Meunier on chalk soils in Sussex, Kent and Hampshire; very high acidity and pronounced autolytic character." }
    ],
    profile: [
      { label: "Tank method (Charmat)", detail: "Second fermentation happens in a large pressurised tank, then the wine is filtered and bottled under pressure. Fast, cheap, and it keeps primary fruit and floral aromas: the right choice for aromatic grapes like Glera and Muscat." },
      { label: "Traditional method", detail: "Second fermentation in the bottle with lees ageing, giving autolytic biscuit and toast character. Slower and more expensive." },
      { label: "Prosecco taste", detail: "Light body, medium to high acidity, pear, apple, melon and white flowers; no biscuit character." }
    ],
    key: [
      "Match the method to the grape: aromatic grapes go in the tank so their perfume survives; neutral high-acid grapes go through the traditional method so autolysis can build complexity.",
      "Asti keeps its low alcohol because fermentation is stopped while sugar remains rather than by adding spirit.",
      "Carbonation (injecting CO2) is used only for the cheapest sparkling wines and gives large, short-lived bubbles."
    ],
    traps: [
      "Prosecco is never made by the traditional method in its mainstream styles, and Glera is the grape, not Prosecco itself.",
      "Cava is defined by method and rules, not solely by Catalunya: a small amount is produced elsewhere in Spain."
    ],
    related: ["champagne", "aromatic-whites", "winemaking"]
  },

  /* ---------------------------------------------------------------- SWEET & FORTIFIED */
  {
    id: "sweet-wines",
    name: "Sweet wines",
    group: "Sweet & fortified",
    swatch: "amber",
    blurb: "Four ways to concentrate sugar in a grape, and one way to stop the yeast. Know which method each famous sweet wine uses.",
    regions: [
      { name: "Sauternes & Barsac (Bordeaux, France)", detail: "Noble rot. Sémillon with Sauvignon Blanc and a little Muscadelle. Morning mists from the Ciron river and sunny afternoons create ideal botrytis conditions. Honey, apricot, marmalade, ginger, high acidity, oak ageing." },
      { name: "Tokaj, Hungary", detail: "Noble rot on Furmint. Botrytised aszú berries are added to a dry base wine; sweetness is shown in puttonyos, and Tokaji Aszú must have at least 120 g/L residual sugar. Orange marmalade, apricot, high acidity." },
      { name: "Germany & Austria", detail: "Beerenauslese and Trockenbeerenauslese rely on noble rot; Eiswein relies on freezing the grapes on the vine and must be free of botrytis." },
      { name: "Loire Valley, France", detail: "Coteaux du Layon, Bonnezeaux and Quarts de Chaume: botrytised Chenin Blanc with piercing acidity." },
      { name: "Italy", detail: "Recioto della Valpolicella and Recioto di Soave use dried grapes (appassimento); Vin Santo in Tuscany is also made from dried grapes." }
    ],
    profile: [
      { label: "Noble rot", detail: "Botrytis cinerea punctures ripe healthy skins in damp mornings followed by dry afternoons; water evaporates, concentrating sugar, acid and flavour, and adding honey and dried-apricot notes." },
      { label: "Drying grapes", detail: "Picked grapes are dried indoors or on the vine, concentrating sugar without botrytis character: raisin and cooked fruit." },
      { label: "Freezing grapes", detail: "Water freezes and is removed as ice at pressing, leaving concentrated juice. Pure, intense fruit with very high acidity." },
      { label: "Stopping fermentation", detail: "Chilling, filtering or adding spirit leaves unfermented sugar, as in Asti and in fortified wines." }
    ],
    key: [
      "Every great sweet wine needs high acidity for balance; without it the wine tastes cloying.",
      "Noble rot requires a very specific climate and makes yields tiny, which is why these wines are expensive.",
      "Late harvest (Vendanges Tardives in Alsace) means grapes picked well after normal ripeness; Sélection de Grains Nobles indicates botrytis-affected fruit."
    ],
    traps: [
      "Noble rot and grey rot are the same fungus; the difference is the condition of the grapes and the weather. Grey rot ruins the fruit.",
      "Eiswein is not made by putting grapes in a freezer under EU rules: they must freeze naturally on the vine."
    ],
    related: ["riesling", "chenin-blanc", "other-italian-reds"]
  },
  {
    id: "sherry",
    name: "Sherry",
    group: "Sweet & fortified",
    swatch: "amber",
    blurb: "Fortified after fermentation, so the base wine is bone dry. The style is then decided by flor: whether the wine grows a yeast layer or not.",
    regions: [
      { name: "Jerez, Andalucía, Spain", detail: "The towns of Jerez de la Frontera, El Puerto de Santa María and Sanlúcar de Barrameda. Hot climate cooled by the Atlantic; chalky white albariza soils retain winter rain." },
      { name: "Grapes", detail: "Palomino for all the dry styles; Pedro Ximénez (PX) and Moscatel for the sweet ones, dried in the sun before pressing." }
    ],
    profile: [
      { label: "Fino & Manzanilla", detail: "Fortified to about 15%, aged under a protective layer of flor yeast, which consumes oxygen and glycerol. Pale lemon, dry, light bodied, with a distinctive yeasty, bready, saline character. Manzanilla comes from Sanlúcar. Serve chilled and drink fresh once opened." },
      { label: "Amontillado", detail: "Begins under flor, then the flor dies or is killed by further fortification and the wine ages oxidatively. Amber, dry, nutty and yeasty at once." },
      { label: "Oloroso", detail: "Fortified to 17% or more from the start, which prevents flor. Aged in contact with oxygen: deep brown, dry, full bodied, walnut, toffee and caramel." },
      { label: "Sweet styles", detail: "Pedro Ximénez is intensely sweet, dark brown, with raisin, fig, treacle and coffee. Cream Sherry is a sweetened blend." }
    ],
    key: [
      "Sherry is aged in a solera: a fractional blending system where a portion is drawn from the oldest barrels and replaced from younger ones, so every bottle is a blend of many years and the house style stays consistent.",
      "Flor can only survive within a narrow alcohol band, roughly 15-15.5%, which is why the fortification level decides the style.",
      "Biological ageing (under flor) keeps the wine pale; oxidative ageing darkens it and builds nutty, caramel flavours."
    ],
    traps: [
      "All Sherry is fermented fully dry first. Any sweetness in the finished wine has been added, unlike Port where sweetness is original grape sugar.",
      "Fino is delicate and short lived; treat an open bottle like a white wine, not like Port."
    ],
    related: ["port", "fortified-muscat", "service-storage"]
  },
  {
    id: "port",
    name: "Port",
    group: "Sweet & fortified",
    swatch: "tawny",
    blurb: "Fortified during fermentation, which is why it is sweet. The two style families are defined by whether the wine matured in a sealed bottle or in wood.",
    regions: [
      { name: "Douro Valley, Portugal", detail: "Hot, dry, continental region on steep schist terraces. Grapes: Touriga Nacional, Touriga Franca, Tinta Roriz, Tinta Barroca and Tinto Cão." },
      { name: "Ageing", detail: "Traditionally matured in lodges at Vila Nova de Gaia near the cool coast." }
    ],
    profile: [
      { label: "How it is made", detail: "Fermentation is stopped after two or three days by adding grape spirit, killing the yeast while roughly half the sugar is still unfermented. The finished wine sits around 19-20% abv and is sweet." },
      { label: "Ruby styles (sealed from air)", detail: "Ruby, Reserve Ruby, Late Bottled Vintage and Vintage. Deep ruby to purple, full bodied, high tannin, intense blackberry, black cherry and plum. Vintage Port is from a single declared year, bottled after about 2 years, needs decanting and can age for decades." },
      { label: "Tawny styles (exposed to air)", detail: "Aged in small oak casks. Tawny brown, softer tannins, caramel, walnut, coffee, dried fruit. Sold with an indication of age: 10, 20, 30 or 40 years." },
      { label: "White Port", detail: "Made from white grapes, ranging from dry to sweet, often served long with tonic." }
    ],
    key: [
      "Vintage Port throws a heavy sediment because it is not filtered, so it must be decanted. Tawny is ready to pour.",
      "Late Bottled Vintage comes from a single year but is aged 4-6 years in wood before bottling, making it approachable on release.",
      "Colato / filtered LBV does not need decanting; unfiltered traditional LBV does."
    ],
    traps: [
      "Port is fortified during fermentation (sweet); Sherry is fortified after fermentation (dry). This single contrast is the most reliably examined fact in the fortified section.",
      "Tawny colour comes from oxidative ageing in wood, not from using less-ripe or paler grapes."
    ],
    related: ["sherry", "other-reds", "service-storage"]
  },
  {
    id: "fortified-muscat",
    name: "Fortified Muscat & Vins Doux Naturels",
    group: "Sweet & fortified",
    swatch: "tawny",
    blurb: "The small third family of fortified wines: sweet, grapey and made by the same fortify-during-fermentation logic as Port.",
    regions: [
      { name: "Southern France", detail: "Vin Doux Naturel: Muscat de Beaumes-de-Venise in the Rhône, Muscat de Rivesaltes and Muscat de Frontignan in the Languedoc-Roussillon. Usually protected from oxygen: pale, grapey, floral, with orange and peach notes." },
      { name: "Rutherglen, Victoria, Australia", detail: "Rutherglen Muscat: grapes are left to raisin on the vine, then fortified and aged oxidatively in barrel in a hot climate. Deep brown, luscious, with raisin, toffee, coffee and dried fig. Tiers: Rutherglen, Classic, Grand and Rare." },
      { name: "Portugal & Spain", detail: "Moscatel de Setúbal in Portugal; Moscatel as a sweetening and standalone style in Jerez." }
    ],
    profile: [
      { label: "Structure", detail: "Sweet to luscious, medium to high alcohol (15-20%), low to medium acidity, full body." },
      { label: "Aromas", detail: "Grape, orange blossom and peach in the fresh styles; raisin, toffee, coffee and caramel in oxidative styles." }
    ],
    key: [
      "Vin Doux Naturel is a misleading name: nothing about it is unfortified. Spirit is added during fermentation to leave natural grape sugar.",
      "Rutherglen Muscat is made in a solera-like fractional blending system and the tiers reflect increasing average age, sweetness and concentration."
    ],
    traps: [
      "Fresh, pale Muscat VDN and dark, treacly Rutherglen Muscat use the same grape family; the difference is oxygen and time."
    ],
    related: ["aromatic-whites", "port", "sherry"]
  },

  /* ---------------------------------------------------------------- SERVICE & PAIRING */
  {
    id: "food-pairing",
    name: "Wine and food pairing",
    group: "Service & pairing",
    swatch: "none",
    blurb: "This section is pure logic, not memory. Six food components change how a wine tastes, and the exam question is always which direction they push it.",
    regions: [],
    profile: [
      { label: "Sweetness in food", detail: "Makes wine seem less sweet and less fruity, and more acidic, more tannic and more bitter. The wine must be at least as sweet as the dish." },
      { label: "Umami in food", detail: "Same effect as sweetness: increases bitterness, acidity and astringency, reduces fruitiness. Asparagus, mushrooms, eggs and ripe soft cheese are the difficult ones." },
      { label: "Acidity in food", detail: "Makes wine seem less acidic, so sweeter and fruitier. A high-acid wine copes best with an acidic dish." },
      { label: "Salt in food", detail: "Makes wine seem less acidic and less astringent, and more fruity. Salt is the most wine-friendly component there is." },
      { label: "Fat & oil in food", detail: "Needs acidity or tannin in the wine to cut through and refresh the palate." },
      { label: "Chilli heat", detail: "Increases the burn of alcohol and the perception of bitterness and acidity, and reduces body and richness. Choose low-alcohol, off-dry, low-tannin wines." }
    ],
    key: [
      "The two components that make wine taste worse (sweetness and umami) are countered by matching sweetness in the wine or by adding salt and acid to the dish.",
      "The two components that make wine taste better (salt and acid) give you freedom to choose almost anything.",
      "Match intensity of flavour: a delicate wine is destroyed by a powerful dish, and vice versa.",
      "Classic matches: high-tannin red with red meat; high-acid white with oily fish or a creamy sauce; sweet wine with dessert or with blue cheese and foie gras; Fino Sherry with salty tapas."
    ],
    traps: [
      "The sweetest thing at the table has to be the wine. A dry wine with dessert tastes thin, sour and hollow.",
      "Tannin plus chilli is the classic bad pairing: it exaggerates the burn."
    ],
    related: ["service-storage", "sat", "sherry"]
  },
  {
    id: "service-storage",
    name: "Storage, service and faults",
    group: "Service & pairing",
    swatch: "none",
    blurb: "Practical marks, and easy ones. Temperatures, storage conditions and the four common faults are all directly examinable.",
    regions: [],
    profile: [
      { label: "Serving temperatures", detail: "Sparkling 6-10C; sweet 6-8C; light to medium white and rosé 7-10C; full-bodied white 10-13C; light red 13C; medium to full red 15-18C." },
      { label: "Storage conditions", detail: "Cool (10-15C) and constant, away from light and vibration, at moderate humidity (about 75%), with bottles on their side if sealed with a cork." },
      { label: "Order of service", detail: "Sparkling before still, white before red, light before heavy, dry before sweet, young before old." }
    ],
    key: [
      "Serving a wine too warm exaggerates alcohol; too cold mutes aroma and makes tannins seem harsher. Chilling emphasises acidity and reduces sweetness.",
      "Decanting separates a wine from its sediment (essential for Vintage Port and old reds) and aerates young tannic wines.",
      "Faults: cork taint (TCA) smells of damp cardboard and mutes the fruit; oxidation gives browning and stale, bruised-apple or sherry-like notes; heat damage gives cooked, jammy character and can push the cork out; reduction can smell of struck match or rotten egg; secondary fermentation in bottle makes a still wine cloudy and spritzy.",
      "Sulfur dioxide is used as an antioxidant and antiseptic, which is why labels state contains sulfites."
    ],
    traps: [
      "Storing bottles upright long term dries the cork and lets air in. Screwcapped wine does not have this problem.",
      "A wine that is simply too cold is not faulty; let it warm up before judging it."
    ],
    related: ["food-pairing", "port", "sat"]
  }
];

/* Mock exam questions. t = topic id, o = options, a = index of correct answer, e = explanation. */
const QUESTIONS = [
  { t: "sat", q: "A red wine appears pale garnet with a watery rim. What does this most likely tell you?", o: ["It is a young wine from a warm climate", "It has some bottle age and is probably from a thin-skinned variety", "It has been oxidised and is faulty", "It was fermented at a high temperature"], a: 1, e: "Red wines lose colour as they age, moving from purple to ruby to garnet to tawny. A pale garnet colour points to both age and a thin-skinned grape such as Pinot Noir or Nebbiolo. Warm-climate young reds are typically deep purple or ruby, and a browning colour alone is not enough to call a wine faulty." },
  { t: "sat", q: "Which group of aromas is classified as tertiary?", o: ["Green apple, lemon, gooseberry", "Vanilla, toast, butter", "Mushroom, forest floor, leather", "Rose, lychee, elderflower"], a: 2, e: "Tertiary aromas come from ageing, in bottle or oxidatively in cask: mushroom, forest floor, leather, game, dried fruit, honey and nuts. Primary aromas come from the grape (green apple, rose, lychee), and secondary aromas from winemaking such as oak (vanilla, toast) and malolactic conversion (butter)." },
  { t: "sat", q: "A wine is 12.5% abv. On the WSET scale, its alcohol level is described as:", o: ["Low", "Medium", "High", "Very high"], a: 1, e: "For still wines the scale is low (below 11%), medium (11-13.9%) and high (14% and above), so 12.5% is medium. Fortified wines use a separate scale of low (15-16.4%), medium (16.5-18.4%) and high (18.5-20%)." },
  { t: "sat", q: "Which statement about body is correct?", o: ["Body and alcohol mean the same thing", "Sugar, alcohol, tannin and flavour concentration all contribute to body", "Body is determined solely by tannin", "Body is measured only in red wines"], a: 1, e: "Body is the overall impression of weight and texture in the mouth, and several components build it: alcohol, residual sugar, tannin and the concentration of flavour. Alcohol is a major contributor but is not the same thing as body, and white wines have body too." },

  { t: "grape-growing", q: "Most of the world's vineyards are found between which latitudes?", o: ["10 and 25 degrees", "30 and 50 degrees", "45 and 65 degrees", "0 and 20 degrees"], a: 1, e: "The band between 30 and 50 degrees latitude in both hemispheres gives the balance of warmth and cool that grapevines need. Closer to the equator it is generally too hot, and beyond 50 degrees grapes struggle to ripen, although altitude and ocean currents can shift these limits." },
  { t: "grape-growing", q: "As grapes ripen on the vine, which change occurs?", o: ["Sugar falls and acidity rises", "Sugar rises and acidity falls", "Both sugar and acidity rise", "Both sugar and acidity fall"], a: 1, e: "Ripening accumulates sugar and reduces acidity, while flavours shift from green (herbaceous, tart) through ripe to dried or cooked. This is why cool climates give higher-acid, lower-alcohol wines and warm climates give riper, more alcoholic ones." },
  { t: "grape-growing", q: "Why is a vineyard at high altitude in a hot region, such as Salta in Argentina, able to make fresh, high-acid wines?", o: ["Higher altitude means more rainfall", "Temperatures fall with altitude, and cool nights preserve acidity", "The soil at altitude is more fertile", "Grapes ripen faster at altitude"], a: 1, e: "Temperature drops with altitude, and the wide day-to-night temperature difference lets grapes accumulate sugar and flavour by day while retaining acidity at night. Latitude alone does not determine climate; altitude, ocean currents, fog and proximity to water all modify it." },
  { t: "grape-growing", q: "Which vineyard hazard is controlled by grafting vines onto American rootstock?", o: ["Spring frost", "Powdery mildew", "Phylloxera", "Hail"], a: 2, e: "Phylloxera is a louse that feeds on vine roots and devastated Europe's vineyards in the nineteenth century. American vine species tolerate it, so grafting European vines onto American rootstock is the standard defence. Mildew is treated with sprays, and frost and hail are weather hazards." },

  { t: "winemaking", q: "What is the key difference between making red and white wine?", o: ["Red wine is fermented on the grape skins; white wine is normally pressed before fermentation", "Red wine always uses oak and white wine never does", "Red wine is fermented at cooler temperatures", "White wine is always made from white grapes"], a: 0, e: "Colour, tannin and much of the flavour in red wine are extracted from the skins during fermentation, so red must ferment on its skins, usually at 20-32C. White juice is normally separated from the skins before fermentation and fermented cooler, at 12-22C, to preserve delicate aromas." },
  { t: "winemaking", q: "Malolactic conversion in a wine produces which effect?", o: ["It increases the alcohol", "It converts sharp malic acid into softer lactic acid and can add buttery aromas", "It adds residual sugar", "It removes colour"], a: 1, e: "Malolactic conversion is carried out by bacteria, not yeast, and changes tart malic acid into softer lactic acid, lowering total acidity and sometimes adding buttery notes. It is standard for red wines and a stylistic choice for whites: usual in oaked Chardonnay, avoided in Sauvignon Blanc where high acidity is wanted." },
  { t: "winemaking", q: "Which vessel would give a wine the most oak flavour?", o: ["A large old oak cask", "A small new oak barrel", "A stainless steel tank", "A concrete egg"], a: 1, e: "The smaller the vessel the greater the ratio of wood surface to wine, and new oak has the most flavour compounds to give: vanilla, toast, cedar, smoke and coconut from American oak. Large old casks contribute very little flavour and act mainly as neutral storage that allows slow oxygen exposure." },
  { t: "winemaking", q: "How is most rosé wine made?", o: ["By blending finished red and white wine", "By short maceration on black grape skins before pressing", "By adding red colouring to white wine", "By fermenting white grapes on their skins"], a: 1, e: "Most rosé is made by giving the juice a few hours of contact with black grape skins, then pressing and fermenting it like a white wine, or by bleeding off juice from a red fermentation (saignée). Blending red and white wine is only permitted for rosé Champagne." },
  { t: "winemaking", q: "Ageing a wine on its lees, especially with stirring, contributes which characteristics?", o: ["Vanilla and cedar", "Bread, biscuit and a creamier texture", "Blackcurrant and mint", "Higher acidity"], a: 1, e: "Lees are the dead yeast cells left after fermentation. Ageing on them adds body and a creamy texture along with bread, biscuit and yoghurt notes. Vanilla and cedar come from oak, and lees contact does not raise acidity." },

  { t: "labels", q: "Which classification represents the tightest rules over the smallest area?", o: ["Vin de France", "IGP", "AOC / PDO", "Table wine"], a: 2, e: "Protected Designation of Origin, which in France is AOC or AOP, covers smaller, more specific areas with strict rules on permitted varieties, yields and winemaking. Protected Geographical Indication (IGP) covers a wider area with more freedom, and Vin de France has the fewest restrictions, though it may state variety and vintage." },
  { t: "labels", q: "A bottle is labelled Sancerre. Which grape is in the white wine?", o: ["Chardonnay", "Sauvignon Blanc", "Chenin Blanc", "Riesling"], a: 1, e: "Old World labels name the place and assume the grape is understood. White Sancerre, in the eastern Loire, is always Sauvignon Blanc, as is neighbouring Pouilly-Fumé. Do not confuse Pouilly-Fumé with Pouilly-Fuissé in the Mâconnais, which is Chardonnay." },
  { t: "labels", q: "Which of these terms has a legally defined ageing requirement?", o: ["Reserve on a Californian label", "Old Vines", "Rioja Gran Reserva", "Estate Bottled"], a: 2, e: "Rioja's Crianza, Reserva and Gran Reserva terms carry legal minimum ageing periods in oak and in bottle, as does Riserva in Italy. Reserve on a Californian or Australian label is a marketing term with no legal meaning, and Old Vines is likewise undefined in most countries." },
  { t: "labels", q: "Which German quality level is the highest?", o: ["Deutscher Wein", "Landwein", "Qualitätswein (QbA)", "Prädikatswein"], a: 3, e: "The German hierarchy runs Deutscher Wein, Landwein, Qualitätswein and, at the top, Prädikatswein, which is subdivided by ripeness at harvest into Kabinett, Spätlese, Auslese, Beerenauslese, Trockenbeerenauslese and Eiswein." },

  { t: "chardonnay", q: "Which description best fits a typical Chablis?", o: ["Full bodied with tropical fruit and pronounced vanilla oak", "High acidity, green apple, lemon and wet stone, usually unoaked", "Off-dry with lychee and rose", "Light bodied and low in acidity with banana notes"], a: 1, e: "Chablis sits at the cool northern edge of Burgundy, so its Chardonnay has high acidity and green fruit with a wet-stone character, and is generally made without new oak. Tropical fruit and heavy vanilla oak indicate a warm-climate, oak-matured style such as a classic Californian Chardonnay." },
  { t: "chardonnay", q: "A Chardonnay shows butter and cream on the nose. This most likely comes from:", o: ["New oak barrels", "Malolactic conversion", "Lees stirring", "Cool fermentation"], a: 1, e: "Buttery aromas are the hallmark of malolactic conversion, which converts malic acid to lactic acid. Oak provides vanilla, toast, cedar and smoke; lees ageing gives bread and biscuit; cool fermentation simply preserves primary fruit." },
  { t: "chardonnay", q: "Which appellation would you expect to produce full-bodied, oak-aged Chardonnay?", o: ["Petit Chablis", "Meursault", "Muscadet", "Sancerre"], a: 1, e: "Meursault, in the Côte de Beaune, is a benchmark for barrel-fermented, lees-aged, full-bodied white Burgundy. Petit Chablis is the lightest Chablis tier, Muscadet is made from Melon Blanc in the Loire, and Sancerre is Sauvignon Blanc." },
  { t: "chardonnay", q: "Why is Chardonnay particularly at risk in Chablis?", o: ["It ripens very late and often fails to ripen", "It buds early and is vulnerable to spring frost", "It is highly susceptible to phylloxera", "Its thick skins trap rot"], a: 1, e: "Chardonnay buds early, so its young shoots are exposed to spring frosts, a recurring threat in cool, northerly Chablis. Growers use sprinklers and heaters to protect the buds. Chardonnay ripens relatively early rather than late." },

  { t: "sauvignon-blanc", q: "Which set of aromas is most typical of cool-climate Sauvignon Blanc?", o: ["Lychee, rose and ginger", "Gooseberry, elderflower and grass", "Blackcurrant and cedar", "Banana and bubblegum"], a: 1, e: "Sauvignon Blanc from cool sites such as the Loire shows green fruit and pungent herbaceous notes: gooseberry, elderflower, cut grass, asparagus and green pepper. Riper, warmer sites push it toward passion fruit and grapefruit. Lychee and rose indicate Gewurztraminer." },
  { t: "sauvignon-blanc", q: "Marlborough is the leading Sauvignon Blanc region of which country?", o: ["Australia", "Chile", "New Zealand", "South Africa"], a: 2, e: "Marlborough, at the northern end of New Zealand's South Island, produces intensely aromatic Sauvignon Blanc with passion fruit, grapefruit and capsicum and very high acidity. Chile's cool sites are Casablanca, San Antonio and Leyda; South Africa's are Elgin, Constantia and Durbanville." },
  { t: "sauvignon-blanc", q: "In Bordeaux, Sauvignon Blanc is most often blended with which grape?", o: ["Sémillon", "Chardonnay", "Viognier", "Chenin Blanc"], a: 0, e: "Sauvignon Blanc and Sémillon are the classic white Bordeaux pair, in dry wines such as Pessac-Léognan and in the botrytised sweet wines of Sauternes. Sémillon brings body and waxy texture; Sauvignon Blanc brings acidity and aroma." },

  { t: "pinot-grigio", q: "Which style is typical of Pinot Gris from Alsace?", o: ["Light bodied, neutral, high acidity, lemon and pear", "Medium to full bodied, low to medium acidity, often off-dry, with ginger and honey", "Bone dry with pronounced grassy aromas", "Sparkling and low in alcohol"], a: 1, e: "Alsace picks Pinot Gris riper and makes a rich, medium to full-bodied wine, frequently off-dry, with tropical fruit, ginger, honey and smoke. The light, neutral, high-acid style is Italian Pinot Grigio, picked early to give an inexpensive, refreshing wine." },
  { t: "pinot-grigio", q: "Pinot Grigio and Pinot Gris are:", o: ["Two unrelated varieties", "The same variety, with the name signalling a style", "Different clones of Chardonnay", "A crossing of Pinot Noir and Riesling"], a: 1, e: "They are the same grape. Producers choose the Italian name for the light, crisp, early-picked style and the French name for the richer, riper Alsace-influenced style. The grape is itself a mutation of Pinot Noir and has pinkish-grey skins." },

  { t: "riesling", q: "Which term on a German label indicates a dry wine?", o: ["Trocken", "Spätlese", "Auslese", "Halbtrocken"], a: 0, e: "Trocken means dry and Halbtrocken (or Feinherb) means off-dry. Spätlese and Auslese are Prädikat levels describing ripeness at harvest, not sweetness in the finished wine, so a Spätlese Trocken is a dry wine made from late-picked grapes." },
  { t: "riesling", q: "Which is the correct order of Prädikat levels from least to most ripe at harvest?", o: ["Auslese, Spätlese, Kabinett, Beerenauslese", "Kabinett, Spätlese, Auslese, Beerenauslese", "Spätlese, Kabinett, Beerenauslese, Auslese", "Kabinett, Auslese, Spätlese, Trockenbeerenauslese"], a: 1, e: "The ladder is Kabinett, Spätlese (late picked), Auslese (selected bunches, often with some botrytis), Beerenauslese (individually selected botrytised berries) and Trockenbeerenauslese (shrivelled botrytised berries). Eiswein sits alongside BA in ripeness but comes from grapes frozen on the vine and free of botrytis." },
  { t: "riesling", q: "Aged Riesling classically develops which aroma?", o: ["Vanilla", "Petrol or kerosene", "Butter", "Coconut"], a: 1, e: "The petrol or kerosene note, alongside honey and toast, is the classic marker of bottle-aged Riesling. Vanilla and coconut come from oak, which Riesling almost never sees, and butter comes from malolactic conversion, which Riesling normally avoids to keep its acidity." },
  { t: "riesling", q: "Which Australian regions are best known for dry, high-acid, lime-scented Riesling?", o: ["Barossa Valley and McLaren Vale", "Clare Valley and Eden Valley", "Hunter Valley and Coonawarra", "Yarra Valley and Margaret River"], a: 1, e: "Clare Valley and Eden Valley in South Australia make bone-dry Riesling with high acidity and pronounced lime and grapefruit, which develops toast and petrol with age. Barossa and McLaren Vale are warm Shiraz and Grenache country; Coonawarra is Cabernet Sauvignon." },

  { t: "chenin-blanc", q: "Vouvray is made from which grape?", o: ["Sauvignon Blanc", "Chenin Blanc", "Melon Blanc", "Chardonnay"], a: 1, e: "Vouvray, in the Touraine district of the Loire, is Chenin Blanc, and may be dry (sec), off-dry (demi-sec), sweet (moelleux) or sparkling depending on the vintage and the producer's choice. Its high acidity is what allows all these styles to stay balanced." },
  { t: "chenin-blanc", q: "Which country grows the most Chenin Blanc, historically calling it Steen?", o: ["Australia", "Argentina", "South Africa", "New Zealand"], a: 2, e: "South Africa has the world's largest Chenin Blanc plantings, where it was long known as Steen. Styles run from inexpensive, fresh and unoaked to premium old-vine, oak-aged and concentrated, particularly from Stellenbosch, Paarl and Swartland." },

  { t: "aromatic-whites", q: "A white wine shows pronounced lychee, rose and ginger with low acidity and high alcohol. The grape is most likely:", o: ["Riesling", "Gewurztraminer", "Albariño", "Grüner Veltliner"], a: 1, e: "Lychee and rose are the signature of Gewurztraminer, which also gives full body, high alcohol and notably low acidity, and is often made off-dry. Riesling would have high acidity and low alcohol; Albariño and Grüner Veltliner are dry and citrus-driven." },
  { t: "aromatic-whites", q: "Condrieu, in the northern Rhône, is made from which grape?", o: ["Marsanne", "Viognier", "Roussanne", "Muscat"], a: 1, e: "Condrieu is 100% Viognier: full bodied, low in acidity, high in alcohol, with pronounced apricot, peach and honeysuckle. A small proportion of Viognier may also be co-fermented with Syrah in the neighbouring appellation of Côte-Rôtie." },
  { t: "aromatic-whites", q: "Torrontés is the signature aromatic white of which country?", o: ["Chile", "Argentina", "Spain", "Portugal"], a: 1, e: "Torrontés is Argentina's distinctive aromatic white, at its best in the high-altitude vineyards of Salta. It smells intensely floral and grapey but is normally dry with medium acidity, a good reminder that aromatic does not mean sweet." },

  { t: "other-whites", q: "Which grape is used to make Soave?", o: ["Cortese", "Garganega", "Verdejo", "Trebbiano"], a: 1, e: "Soave, in the Veneto, is made principally from Garganega: light to medium bodied, medium to high acidity, with lemon, pear and a characteristic almond note. Cortese makes Gavi in Piemonte, Verdejo makes Rueda in Spain, and Trebbiano is a high-yielding neutral variety." },
  { t: "other-whites", q: "Albariño is the leading white grape of which region?", o: ["Rueda", "Rías Baixas", "Ribera del Duero", "Priorat"], a: 1, e: "Albariño dominates Rías Baixas in Galicia, north-west Spain, giving dry, high-acid wines with citrus and stone fruit and sometimes a saline note. Rueda is Verdejo country, while Ribera del Duero and Priorat are red wine regions." },
  { t: "other-whites", q: "Grüner Veltliner is most closely associated with which country and flavour marker?", o: ["Germany, petrol", "Austria, white pepper", "Hungary, marmalade", "Greece, saline citrus"], a: 1, e: "Grüner Veltliner is Austria's signature white, grown in Niederösterreich including the Wachau and Kamptal. It is dry and high in acidity with citrus and green fruit and a distinctive white-pepper note. Assyrtiko from Santorini is the Greek wine with saline citrus character." },
  { t: "other-whites", q: "Hunter Valley Sémillon is unusual because it:", o: ["Is fermented in new oak barrels", "Is picked early, is low in alcohol, and develops toast and honey with age without oak", "Is always sweet", "Is a sparkling wine"], a: 1, e: "Hunter Valley Sémillon is picked early, giving low alcohol and high acidity, and is bottled without oak. In bottle it develops remarkable toast, honey and citrus complexity, making it a classic example of tertiary development with no oak involvement at all." },

  { t: "cabernet-sauvignon", q: "Which combination best describes Cabernet Sauvignon?", o: ["Pale colour, low tannin, high acidity", "Deep colour, high tannin, high acidity, blackcurrant", "Deep colour, low tannin, low acidity, strawberry", "Pale colour, high tannin, rose and tar"], a: 1, e: "Cabernet Sauvignon has small berries with thick skins, giving deep colour and high tannin, along with high acidity and blackcurrant fruit, often with cedar from oak. Pale with high tannin and rose and tar describes Nebbiolo; low tannin with strawberry suggests Grenache." },
  { t: "cabernet-sauvignon", q: "On the left bank of Bordeaux, Cabernet Sauvignon is usually blended with which grape to soften the wine?", o: ["Syrah", "Merlot", "Pinot Noir", "Tempranillo"], a: 1, e: "Merlot ripens earlier and gives softer tannins and fleshy plum fruit, filling out the middle palate of Cabernet-dominant left bank blends from the Médoc and Graves. Cabernet Franc adds perfume and freshness. Syrah is not permitted in Bordeaux." },
  { t: "cabernet-sauvignon", q: "A herbaceous green bell pepper note in Cabernet Sauvignon usually indicates:", o: ["The wine is faulty", "The grapes were not fully ripe", "Extended oak ageing", "Malolactic conversion"], a: 1, e: "Cabernet Sauvignon ripens late, so in cool sites or cool vintages it can retain a green bell pepper or leafy character from underripe fruit. It is not a fault, simply a marker of ripeness level. Coonawarra's mint and eucalyptus notes are a separate regional characteristic." },
  { t: "cabernet-sauvignon", q: "Which region is most closely associated with Cabernet Sauvignon grown on terra rossa soil?", o: ["Coonawarra", "Barossa Valley", "Hunter Valley", "Marlborough"], a: 0, e: "Coonawarra in South Australia is known for its terra rossa soil over limestone and for Cabernet Sauvignon with blackcurrant plus a distinctive mint and eucalyptus note. Barossa is Shiraz country, Hunter Valley is known for Sémillon and Shiraz, and Marlborough for Sauvignon Blanc." },

  { t: "merlot", q: "Which pair of appellations is on Bordeaux's Merlot-dominant right bank?", o: ["Pauillac and Margaux", "Saint-Émilion and Pomerol", "Saint-Julien and Saint-Estèphe", "Pessac-Léognan and Médoc"], a: 1, e: "Saint-Émilion and Pomerol sit on the right bank, on clay and limestone soils that suit early-ripening Merlot, blended with Cabernet Franc. Pauillac, Margaux, Saint-Julien, Saint-Estèphe, Médoc and Pessac-Léognan are all left bank, Cabernet Sauvignon-dominant." },
  { t: "merlot", q: "Compared with Cabernet Sauvignon, Merlot typically has:", o: ["Higher tannin and later ripening", "Softer tannin and earlier ripening", "Higher acidity and paler colour", "More pronounced green pepper character"], a: 1, e: "Merlot buds and ripens earlier than Cabernet Sauvignon and has thinner skins, so it gives softer, rounder tannins and is approachable younger. The trade-off is vulnerability to spring frost, and its early ripening is why it succeeds on Bordeaux's cooler, damper right bank clay." },

  { t: "pinot-noir", q: "Which set of characteristics is typical of Pinot Noir?", o: ["Deep purple, high tannin, blackcurrant", "Pale ruby, low to medium tannin, high acidity, red cherry", "Deep ruby, low acidity, jammy black fruit", "Pale lemon, high acidity, green apple"], a: 1, e: "Pinot Noir's thin skins give pale ruby colour and low to medium tannin, with high acidity and red fruit: cherry, cranberry and raspberry. With age it develops mushroom, forest floor and game. Deep purple with high tannin and blackcurrant describes Cabernet Sauvignon." },
  { t: "pinot-noir", q: "Which New Zealand region is most famous for Pinot Noir?", o: ["Central Otago", "Gisborne", "Hawke's Bay", "Nelson"], a: 0, e: "Central Otago, on the South Island, is the world's most southerly wine region and produces ripe, concentrated Pinot Noir; Martinborough and Marlborough are also important. Hawke's Bay is better known for Bordeaux varieties and Syrah." },
  { t: "pinot-noir", q: "Spätburgunder is the German name for which grape?", o: ["Pinot Gris", "Pinot Blanc", "Pinot Noir", "Sylvaner"], a: 2, e: "Spätburgunder is Pinot Noir, and Germany, especially Baden and the Pfalz, is a significant producer of light to medium-bodied, red-fruited examples. Grauburgunder is Pinot Gris and Weissburgunder is Pinot Blanc." },
  { t: "pinot-noir", q: "Why is Pinot Noir considered a difficult grape to grow?", o: ["It ripens too late for most regions", "It is thin skinned, buds early and is prone to rot and frost", "It has extremely high yields that must be controlled", "It is immune to disease but low in sugar"], a: 1, e: "Pinot Noir buds early, exposing it to spring frost, and its thin skins and tight bunches make it prone to rot in damp weather. It is also fussy about climate, needing cool to moderate conditions: too warm and it loses its delicate perfume and acidity." },

  { t: "syrah", q: "Which flavour is the classic marker of cool-climate Syrah?", o: ["Banana", "Black pepper", "Coconut", "Lychee"], a: 1, e: "Black pepper, alongside violet and blackberry, is the signature of Syrah from cooler sites such as the northern Rhône or cooler parts of Australia. As the climate warms, the pepper fades and the wine moves toward jammy blackberry, liquorice and chocolate. Coconut indicates American oak." },
  { t: "syrah", q: "Which appellation is in the northern Rhône?", o: ["Châteauneuf-du-Pape", "Gigondas", "Hermitage", "Tavel"], a: 2, e: "Hermitage, along with Côte-Rôtie, Crozes-Hermitage, Saint-Joseph and Cornas, is in the northern Rhône, where Syrah is the only permitted black grape. Châteauneuf-du-Pape, Gigondas and Tavel are all in the southern Rhône, where Grenache-based blends dominate." },
  { t: "syrah", q: "What does GSM stand for in Australian and Rhône blends?", o: ["Grenache, Sangiovese, Merlot", "Grenache, Syrah, Mourvèdre", "Gamay, Syrah, Malbec", "Garganega, Sémillon, Muscat"], a: 1, e: "GSM is Grenache, Syrah and Mourvèdre, the classic southern Rhône trio also used in Barossa Valley and McLaren Vale. Grenache brings ripe red fruit and alcohol, Syrah adds colour and pepper, and Mourvèdre contributes tannin and structure." },

  { t: "grenache", q: "Which is the dominant grape in most Châteauneuf-du-Pape?", o: ["Syrah", "Grenache", "Mourvèdre", "Cinsault"], a: 1, e: "Châteauneuf-du-Pape is a blend in which Grenache is normally dominant, supported by Syrah, Mourvèdre and up to thirteen permitted varieties in total. Grenache accumulates high sugar, which is why these wines are typically 14.5% abv or more." },
  { t: "grenache", q: "Garnacha grown in Priorat typically produces:", o: ["Light, low-alcohol wines with high acidity", "Concentrated, full-bodied wines with high alcohol from old vines on slate", "Sweet fortified wines", "Pale, aromatic rosé only"], a: 1, e: "Priorat's steep llicorella slate slopes and old, low-yielding bush vines give deeply concentrated, powerful, high-alcohol Garnacha and Cariñena blends. Priorat is one of only two Spanish regions with the top DOCa/DOQ classification, the other being Rioja." },

  { t: "tempranillo", q: "A red Rioja labelled Gran Reserva must be aged for a minimum of:", o: ["1 year in oak and 1 year in bottle", "2 years total with 1 in oak", "2 years in oak and 3 years in bottle", "5 years in oak"], a: 2, e: "For red Rioja, Gran Reserva requires at least 2 years in oak plus 3 years in bottle. Crianza needs 2 years total with at least 1 in oak, and Reserva needs 3 years total with at least 1 in oak. These terms are legally defined, unlike Reserve in most New World countries." },
  { t: "tempranillo", q: "The coconut and sweet vanilla character of traditional Rioja comes from:", o: ["Malolactic conversion", "American oak barrels", "Carbonic maceration", "Lees stirring"], a: 1, e: "American oak contributes pronounced vanilla and a distinctive coconut note, and it is the traditional choice in Rioja. Modern producers increasingly use French oak for subtler spice. Malolactic conversion gives butter, and carbonic maceration gives banana and kirsch." },
  { t: "tempranillo", q: "Tempranillo is known by which name in Portugal's Douro Valley?", o: ["Touriga Franca", "Tinta Roriz", "Tinta Barroca", "Trincadeira"], a: 1, e: "Tempranillo is called Tinta Roriz in the Douro and Aragonez in the Alentejo, and it is one of the five main Port varieties along with Touriga Nacional, Touriga Franca, Tinta Barroca and Tinto Cão." },

  { t: "sangiovese", q: "Which wine is made from 100% Sangiovese?", o: ["Chianti Classico", "Brunello di Montalcino", "Montepulciano d'Abruzzo", "Barbera d'Asti"], a: 1, e: "Brunello di Montalcino must be 100% Sangiovese, locally called Brunello. Chianti Classico requires a minimum of 80% Sangiovese and may include other varieties. Montepulciano d'Abruzzo is a different grape entirely, and Barbera d'Asti is Barbera." },
  { t: "sangiovese", q: "Which structural profile is typical of Sangiovese?", o: ["Low acidity and low tannin", "High acidity and high tannin with sour red cherry", "High acidity and low tannin with banana", "Low acidity and high alcohol with raisin"], a: 1, e: "Sangiovese combines high acidity with high tannin and shows sour red cherry, red plum and dried herbs, sometimes with a tomato-leaf note. That structure is exactly why it works so well with tomato-based dishes and cured meats." },
  { t: "sangiovese", q: "Vino Nobile di Montepulciano is made principally from:", o: ["The Montepulciano grape", "Sangiovese", "Nebbiolo", "Corvina"], a: 1, e: "Vino Nobile di Montepulciano is a Tuscan wine made mainly from Sangiovese, locally called Prugnolo Gentile, from the town of Montepulciano. The Montepulciano grape is grown in Abruzzo and makes the unrelated Montepulciano d'Abruzzo. This pair is a favourite exam trap." },

  { t: "nebbiolo", q: "Barolo and Barbaresco are made from which grape?", o: ["Barbera", "Nebbiolo", "Dolcetto", "Sangiovese"], a: 1, e: "Both are DOCG wines from Piemonte made entirely from Nebbiolo. Barolo is generally the most structured and long-lived; Barbaresco is slightly warmer and marginally more approachable. Langhe Nebbiolo is the entry-level DOC from the same grape." },
  { t: "nebbiolo", q: "Which description matches Nebbiolo?", o: ["Deeply coloured with low tannin and low acidity", "Pale ruby to garnet with high tannin, high acidity, rose and tar", "Deep purple with jammy blackberry and soft tannin", "Pale with pronounced gooseberry and grass"], a: 1, e: "Nebbiolo is deceptive: it is pale and turns garnet quickly, yet it has the highest tannin and acidity of the varieties on the syllabus, with red cherry, dried herbs, rose and tar, developing truffle and leather with age. Never judge its structure by its colour." },

  { t: "other-italian-reds", q: "Amarone della Valpolicella is made by which method?", o: ["Fortifying during fermentation", "Drying the grapes before fermentation (appassimento)", "Carbonic maceration", "Freezing the grapes on the vine"], a: 1, e: "Amarone uses appassimento: grapes are dried for weeks after picking, concentrating sugar and flavour. Fermentation runs nearly to completion, so the wine is dry but very high in alcohol, often 15% or more, with raisin and cooked-fruit character. Recioto uses the same drying but stops fermentation early to leave sweetness." },
  { t: "other-italian-reds", q: "Barbera is characterised by:", o: ["High acidity and low tannin", "High acidity and high tannin", "Low acidity and high tannin", "Low acidity and low tannin"], a: 0, e: "Barbera's unusual combination of high acidity with low tannin and deep colour makes it juicy, food-friendly and approachable young. That distinguishes it from its Piemontese neighbour Nebbiolo, which has both high acidity and formidable tannin." },
  { t: "other-italian-reds", q: "Valpolicella Ripasso is made by:", o: ["Blending Amarone with Valpolicella", "Refermenting Valpolicella on the skins left over from Amarone", "Drying the grapes for two months", "Ageing Valpolicella in new French oak"], a: 1, e: "Ripasso means re-passed: the base Valpolicella is refermented on the grape skins left over from Amarone production, which adds body, alcohol, colour and dried-fruit flavour. It sits between Valpolicella and Amarone in weight and price." },

  { t: "malbec-carmenere", q: "The most important Malbec region in Argentina is:", o: ["Salta", "Mendoza", "Patagonia", "San Juan"], a: 1, e: "Mendoza accounts for the great majority of Argentina's Malbec, with premium sub-regions such as Luján de Cuyo and the Uco Valley at higher altitude, where cool nights preserve acidity and colour. Salta is famous for high-altitude Torrontés." },
  { t: "malbec-carmenere", q: "A Chilean red shows blackberry with a distinct green bell pepper note. The grape is most likely:", o: ["Merlot", "Carmenère", "Pinot Noir", "Syrah"], a: 1, e: "Carmenère ripens very late and retains a signature herbaceous, green bell pepper character even when reasonably ripe. It was mistaken for Merlot in Chile until DNA testing identified it in the 1990s, which is why the two are so often contrasted." },

  { t: "zinfandel", q: "Zinfandel is known by which name in southern Italy?", o: ["Primitivo", "Negroamaro", "Aglianico", "Nero d'Avola"], a: 0, e: "Zinfandel and Primitivo are the same variety; Primitivo is grown mainly in Puglia. In California it gives high-alcohol, jammy reds with sweet spice, often from old bush vines, and it is also the base of the medium-sweet pink wine White Zinfandel." },
  { t: "zinfandel", q: "White Zinfandel is:", o: ["Made from a white mutation of Zinfandel", "A medium-sweet rosé made from black Zinfandel grapes with limited skin contact", "A dry white blend from California", "A fortified wine"], a: 1, e: "White Zinfandel is made from the black Zinfandel grape with only brief skin contact, giving a pale pink colour, and fermentation is stopped early to leave it medium-sweet. It is light, fruity and inexpensive, and was hugely commercially successful in the United States." },

  { t: "gamay", q: "Carbonic maceration produces which characteristic aromas?", o: ["Vanilla and toast", "Banana, kirsch and bubblegum", "Petrol and honey", "Walnut and caramel"], a: 1, e: "Carbonic maceration ferments whole uncrushed berries in a carbon-dioxide-filled vessel, extracting colour but very little tannin and creating banana, kirsch, bubblegum and cinnamon aromas. It is closely associated with Beaujolais, especially Beaujolais Nouveau." },
  { t: "gamay", q: "Fleurie, Morgon and Moulin-à-Vent are:", o: ["Producers in Burgundy", "Crus of Beaujolais", "Villages in the Loire", "Grand Cru vineyards in Chablis"], a: 1, e: "They are three of the ten Beaujolais Crus, the top tier of the region, above Beaujolais-Villages and Beaujolais AOC. Cru Beaujolais has more structure and concentration than basic Beaujolais and can develop in bottle for several years." },

  { t: "other-reds", q: "Pinotage is a crossing of which two varieties?", o: ["Cabernet Sauvignon and Merlot", "Pinot Noir and Cinsault", "Syrah and Grenache", "Pinot Noir and Chardonnay"], a: 1, e: "Pinotage was created in South Africa in 1925 by crossing Pinot Noir with Cinsault, then known locally as Hermitage, which is where the name comes from. It gives deeply coloured, medium to high tannin wines, sometimes with smoky, banana or coffee notes from winemaking." },
  { t: "other-reds", q: "Chinon and Bourgueil in the Loire produce red wine principally from:", o: ["Pinot Noir", "Gamay", "Cabernet Franc", "Malbec"], a: 2, e: "Cabernet Franc is the red grape of the middle Loire, giving medium-bodied wines with red fruit, a leafy herbaceous note and moderate tannin. It is also a blending partner in Bordeaux, especially on the right bank, and is a parent of Cabernet Sauvignon." },

  { t: "champagne", q: "Which three grapes are the principal varieties of Champagne?", o: ["Chardonnay, Pinot Noir, Meunier", "Chardonnay, Riesling, Pinot Noir", "Pinot Noir, Merlot, Chardonnay", "Chardonnay, Pinot Gris, Meunier"], a: 0, e: "Chardonnay brings citrus, florality and ageing potential; Pinot Noir gives body, structure and red fruit; Meunier gives fruity, approachable character for early drinking. Blanc de Blancs is 100% Chardonnay; Blanc de Noirs uses only the black grapes." },
  { t: "champagne", q: "In the traditional method, the bubbles are created by:", o: ["Injecting carbon dioxide into the wine", "A second fermentation in a sealed tank", "A second fermentation in the bottle in which the wine is sold", "Stopping the first fermentation early"], a: 2, e: "Liqueur de tirage (sugar and yeast) is added, the bottle is sealed, and the second fermentation happens inside it, trapping the carbon dioxide. The wine then ages on the lees in that same bottle, which is what produces the biscuit and toast autolytic character." },
  { t: "champagne", q: "Which of these Champagne sweetness terms indicates the driest wine?", o: ["Extra Dry", "Brut", "Sec", "Brut Nature"], a: 3, e: "Brut Nature has 0-3 g/L residual sugar, then Extra Brut (0-6), Brut (0-12), Extra Dry (12-17), Sec (17-32), Demi-Sec (32-50) and Doux (50+). The counter-intuitive point examiners love is that Extra Dry is sweeter than Brut." },
  { t: "champagne", q: "What is autolysis?", o: ["The conversion of malic acid to lactic acid", "The breakdown of dead yeast cells during lees ageing, giving biscuit and bread aromas", "The removal of sediment from the bottle neck", "The addition of sugar before bottling"], a: 1, e: "Autolysis is the breakdown of dead yeast cells while the wine ages on its lees, contributing biscuit, bread, pastry and toast aromas plus a creamier texture. Removing the sediment is disgorgement, and the final sugar addition is the dosage." },
  { t: "champagne", q: "Why is non-vintage Champagne blended from several years?", o: ["To use up poor quality wine", "To maintain a consistent house style despite vintage variation", "Because vintage dating is illegal in Champagne", "To increase the alcohol level"], a: 1, e: "Champagne's cool, marginal climate produces significant vintage variation, so houses blend reserve wines from earlier years to keep a consistent style year after year. Vintage Champagne is made only in the better years and must age on its lees for at least three years." },

  { t: "other-sparkling", q: "Prosecco is made from which grape and by which method?", o: ["Glera, tank method", "Glera, traditional method", "Trebbiano, tank method", "Chardonnay, traditional method"], a: 0, e: "Prosecco is made from Glera by the tank (Charmat) method, where the second fermentation takes place in a pressurised tank. This is quick and inexpensive and preserves Glera's fresh pear, apple and white-flower aromas, which lengthy lees ageing would mask." },
  { t: "other-sparkling", q: "Which grapes are traditional in Cava?", o: ["Chardonnay, Pinot Noir, Meunier", "Macabeo, Xarel-lo, Parellada", "Glera, Verdejo, Albariño", "Palomino, Pedro Ximénez, Moscatel"], a: 1, e: "Cava is made largely in Catalunya from Macabeo, Xarel-lo and Parellada, although Chardonnay and Pinot Noir are also permitted. Crucially, Cava uses the traditional method with bottle fermentation and lees ageing, unlike Prosecco." },
  { t: "other-sparkling", q: "Asti is low in alcohol, at around 7% abv, because:", o: ["It is diluted with water", "Fermentation is stopped early, leaving sugar unfermented", "It is fortified with grape spirit", "The grapes are picked very unripe"], a: 1, e: "Asti undergoes a single fermentation in tank, which is stopped while sugar remains, so the wine is sweet and low in alcohol and retains Muscat's grapey, floral aroma. Moscato d'Asti is lightly sparkling and lower still, at around 5.5%." },
  { t: "other-sparkling", q: "Why is the tank method preferred for aromatic grapes such as Glera and Muscat?", o: ["It is the only legal method for those grapes", "It preserves the primary floral and fruity aromas that lees ageing would mask", "It creates more autolytic character", "It produces higher alcohol"], a: 1, e: "The tank method is fast and keeps the wine away from extended lees contact, so delicate primary aromas survive intact. The traditional method suits neutral, high-acid base wines, where autolytic biscuit and toast character adds the complexity the grape itself does not provide." },

  { t: "sweet-wines", q: "Sauternes is made sweet by which method?", o: ["Drying the grapes indoors", "Noble rot (Botrytis cinerea)", "Freezing the grapes on the vine", "Adding grape spirit during fermentation"], a: 1, e: "Sauternes depends on noble rot, encouraged by morning mists off the Ciron river followed by warm sunny afternoons. The fungus perforates the skins, water evaporates, and sugar, acid and flavour concentrate, adding honey, apricot and marmalade character to Sémillon and Sauvignon Blanc." },
  { t: "sweet-wines", q: "Which sweet wine must be made from grapes free of botrytis?", o: ["Trockenbeerenauslese", "Tokaji Aszú", "Eiswein", "Sauternes"], a: 2, e: "Eiswein is made from healthy grapes that freeze naturally on the vine; the ice is removed at pressing, leaving concentrated juice with pure fruit and very high acidity. Trockenbeerenauslese, Tokaji Aszú and Sauternes all rely on noble rot." },
  { t: "sweet-wines", q: "Tokaji Aszú comes from which country and which principal grape?", o: ["Austria, Grüner Veltliner", "Hungary, Furmint", "Romania, Feteasca", "Slovenia, Riesling"], a: 1, e: "Tokaji Aszú is from the Tokaj region of Hungary and is based on Furmint, whose very high acidity balances the sweetness. Botrytised aszú berries are added to a dry base wine, and the finished wine must have at least 120 g/L residual sugar." },
  { t: "sweet-wines", q: "Why does every great sweet wine need high acidity?", o: ["To increase alcohol", "To balance the sugar so the wine does not taste cloying", "To encourage noble rot", "To deepen the colour"], a: 1, e: "Without high acidity a sweet wine tastes heavy and cloying. This is why the classic sweet-wine grapes, Riesling, Chenin Blanc, Furmint and Sémillon, are all naturally high in acid, and why the best examples can age for decades." },

  { t: "sherry", q: "Sherry is fortified:", o: ["During fermentation, leaving natural sugar", "After fermentation is complete, so the base wine is dry", "Before fermentation begins", "Only for the sweet styles"], a: 1, e: "Sherry is fermented completely dry and then fortified, which is why all its classic styles start out dry; any sweetness in the final wine is added later. Port is the opposite: it is fortified during fermentation, which kills the yeast and leaves natural grape sugar." },
  { t: "sherry", q: "Flor is:", o: ["A grape variety used in Jerez", "A layer of yeast that protects the wine from oxygen and gives Fino its character", "A style of oak barrel", "The name of the solera system"], a: 1, e: "Flor is a film of yeast that grows on the surface of the wine in partly filled barrels, consuming oxygen and glycerol and giving Fino and Manzanilla their pale colour and yeasty, bready, saline character. It survives only in a narrow alcohol band around 15-15.5%." },
  { t: "sherry", q: "Oloroso Sherry is:", o: ["Aged under flor and pale in colour", "Fortified to 17% or more and aged oxidatively, giving a deep brown colour and walnut flavour", "Always sweet", "Made from Pedro Ximénez"], a: 1, e: "Fortifying to 17% or above prevents flor from forming, so Oloroso ages in contact with oxygen, becoming deep brown and full bodied with walnut, toffee and caramel flavours. It is dry unless sweetened. Amontillado starts under flor and then continues oxidatively." },
  { t: "sherry", q: "Which grape is used for the dry styles of Sherry?", o: ["Pedro Ximénez", "Palomino", "Moscatel", "Airén"], a: 1, e: "Palomino is the grape for Fino, Manzanilla, Amontillado and Oloroso. Pedro Ximénez and Moscatel are sun-dried and used for the sweet styles and for sweetening blends such as Cream Sherry." },
  { t: "sherry", q: "The solera system is best described as:", o: ["A method of drying grapes in the sun", "A fractional blending system that keeps a consistent house style across vintages", "A vineyard classification in Jerez", "A type of fortification"], a: 1, e: "In a solera, wine is drawn from the oldest tier of barrels and replaced with wine from the next youngest, and so on. Every bottle is therefore a blend of many years, delivering consistency rather than vintage character. Rutherglen Muscat uses a similar approach." },

  { t: "port", q: "Port is sweet because:", o: ["Sugar is added after fermentation", "Grape spirit is added during fermentation, killing the yeast while sugar remains", "The grapes are dried before fermentation", "Fermentation is stopped by chilling"], a: 1, e: "Fermentation is halted after two or three days by adding grape spirit, which raises alcohol to around 19-20% and kills the yeast, leaving roughly half the grape sugar unfermented. Sherry, by contrast, is fortified only after it has fermented dry." },
  { t: "port", q: "Which style of Port needs decanting because of heavy sediment?", o: ["Tawny with an indication of age", "Ruby", "Vintage", "White Port"], a: 2, e: "Vintage Port is bottled after about two years without filtration and continues to develop in bottle for decades, throwing a heavy deposit. Tawny styles are aged in cask, are clarified before bottling and can be poured straight away. Traditional unfiltered LBV also benefits from decanting." },
  { t: "port", q: "Tawny Port gets its colour and flavour from:", o: ["Using paler grapes", "Extended oxidative ageing in small oak casks", "Blending in white Port", "Filtration"], a: 1, e: "Tawny styles spend years in small casks in contact with oxygen, which fades the colour to tawny brown and builds caramel, walnut, coffee and dried-fruit flavours. Age indications of 10, 20, 30 or 40 years describe the average age of the blend." },
  { t: "port", q: "Late Bottled Vintage Port differs from Vintage Port in that it:", o: ["Comes from several vintages blended together", "Is from a single year but aged 4-6 years in wood before bottling", "Is not fortified", "Is always white"], a: 1, e: "LBV comes from a single year, like Vintage Port, but spends four to six years in wood before bottling, so it is softer and ready to drink on release. Vintage Port is bottled after about two years and does its ageing in bottle." },

  { t: "fortified-muscat", q: "Rutherglen Muscat, from Victoria in Australia, is best described as:", o: ["Pale, dry and lightly sparkling", "Deep brown, luscious and oxidative, with raisin, toffee and coffee", "A dry table wine with white pepper notes", "A traditional-method sparkling wine"], a: 1, e: "Rutherglen Muscat comes from grapes left to raisin on the vine, then fortified and aged oxidatively in barrel in a hot climate, giving a deep brown, intensely sweet wine with raisin, toffee, coffee and dried fig. Tiers run Rutherglen, Classic, Grand and Rare." },
  { t: "fortified-muscat", q: "Muscat de Beaumes-de-Venise is an example of:", o: ["A Vin Doux Naturel", "A traditional-method sparkling wine", "A dry Alsace white", "A botrytised sweet wine"], a: 0, e: "It is a Vin Doux Naturel from the southern Rhône: grape spirit is added during fermentation to leave natural grape sugar. Despite the name, nothing about it is unfortified. These wines are usually protected from oxygen, staying pale, grapey and floral." },

  { t: "food-pairing", q: "How does salt in food affect the taste of wine?", o: ["It makes the wine seem more bitter and astringent", "It makes the wine seem less acidic and less astringent, and more fruity", "It makes the wine seem sweeter and heavier", "It has no measurable effect"], a: 1, e: "Salt is the most wine-friendly component on the plate: it softens the perception of acidity and tannin and lifts fruitiness. Acid in food does something similar. The two difficult components are sweetness and umami, which push wine toward bitterness and astringency." },
  { t: "food-pairing", q: "Which food component makes a wine taste more astringent and less fruity?", o: ["Salt", "Acid", "Umami", "Fat"], a: 2, e: "Umami, found in mushrooms, asparagus, eggs and ripe soft cheese, increases the perception of bitterness, acidity and astringency and reduces fruitiness, exactly as sweetness in food does. Adding salt or a squeeze of lemon to the dish can counteract it." },
  { t: "food-pairing", q: "When pairing wine with a dessert, the wine should be:", o: ["Drier than the dessert", "At least as sweet as the dessert", "High in tannin", "Served warm"], a: 1, e: "If the dish is sweeter than the wine, the wine will taste thin, hollow and unpleasantly acidic. The wine needs to match or exceed the sweetness of the dessert, which is why Sauternes, Tokaji and Recioto work where a dry white does not." },
  { t: "food-pairing", q: "Which wine would best suit a spicy chilli-heavy dish?", o: ["A high-tannin, high-alcohol red", "A low-alcohol, off-dry, low-tannin white", "A dry, oaked, full-bodied Chardonnay", "A tannic Vintage Port"], a: 1, e: "Chilli heat exaggerates the burn of alcohol and increases the perception of bitterness and astringency, so high-alcohol tannic reds make the burn worse. A low-alcohol, off-dry, low-tannin white such as an off-dry Riesling cools the palate and works with the spice." },

  { t: "service-storage", q: "What is the recommended long-term storage temperature for wine?", o: ["2-5C", "10-15C, constant", "18-20C", "As cold as possible"], a: 1, e: "A cool, constant 10-15C is ideal, with moderate humidity of around 75%, protection from light and vibration, and cork-sealed bottles stored on their side. Fluctuating temperature is more damaging than a steady temperature slightly outside the ideal range." },
  { t: "service-storage", q: "A wine smells of damp cardboard and its fruit seems muted. The most likely fault is:", o: ["Oxidation", "Cork taint (TCA)", "Heat damage", "Reduction"], a: 1, e: "Cork taint, caused by the compound TCA, gives damp cardboard and wet dog aromas and strips the fruit from the wine. Oxidation gives browning with stale, bruised-apple notes; heat damage gives cooked, jammy character; reduction smells of struck match or rotten egg." },
  { t: "service-storage", q: "Which serving temperature is correct for a full-bodied red wine?", o: ["6-8C", "7-10C", "10-13C", "15-18C"], a: 3, e: "Medium to full-bodied reds are served at 15-18C. Light reds are best around 13C, full-bodied whites at 10-13C, light whites and rosés at 7-10C, and sparkling and sweet wines coldest at 6-10C. Too warm and alcohol dominates; too cold and aromas are muted." },
  { t: "service-storage", q: "Why are cork-sealed bottles stored on their side?", o: ["To help the sediment settle evenly", "To keep the cork moist so it does not dry out and let air in", "To speed up ageing", "To prevent light damage"], a: 1, e: "A dry cork shrinks and lets oxygen into the bottle, oxidising the wine. Storing bottles on their side keeps the cork in contact with the wine and swollen. Screwcapped bottles do not have this problem and can be stored upright." },
  { t: "service-storage", q: "Decanting a young, tannic red wine is done mainly to:", o: ["Remove sediment", "Aerate the wine and soften the perception of tannin", "Chill the wine", "Remove sulfites"], a: 1, e: "Young tannic reds are decanted for aeration, which opens the aromas and softens the impression of tannin. Removing sediment is the reason for decanting old reds and Vintage Port. Decanting does not remove sulfites or change the temperature meaningfully." },

  { t: "sat", q: "Which SAT term describes how long the flavours persist after you have swallowed the wine?", o: ["Body", "Flavour intensity", "Finish", "Balance"], a: 2, e: "Finish is the length of time flavours last after swallowing, described as short, medium or long, and it is one of the clearest markers of quality. Body is the impression of weight, flavour intensity is how strong the flavours are while the wine is in your mouth, and balance is how well the components fit together." },
  { t: "sat", q: "A white wine is deep gold in colour. What is the most likely explanation?", o: ["It is young and was fermented in stainless steel", "It has bottle age, oak ageing or is a sweet wine", "It comes from a cool climate", "It has been chilled for too long"], a: 1, e: "White wines deepen in colour as they age, moving from lemon-green through lemon and gold to amber. Oak ageing and sweetness also deepen the colour. Remember that white wine gains colour with age while red wine loses it, which is the opposite of what most people expect." },
  { t: "sat", q: "Which of these is a secondary aroma?", o: ["Blackcurrant", "Vanilla from oak", "Mushroom", "Rose"], a: 1, e: "Secondary aromas come from winemaking rather than the grape or from ageing: oak gives vanilla, toast, cedar and smoke; malolactic conversion gives butter; lees ageing gives bread and biscuit. Blackcurrant and rose are primary aromas from the grape, and mushroom is tertiary, from age." },

  { t: "grape-growing", q: "What is diurnal range?", o: ["The difference between summer and winter temperatures", "The difference between daytime and night-time temperatures", "The number of daylight hours in the growing season", "The amount of rainfall during ripening"], a: 1, e: "Diurnal range is the day-to-night temperature difference. A wide range, common at altitude and in places like Mendoza and Ribera del Duero, lets grapes ripen and build sugar and flavour during warm days while cool nights preserve acidity and colour." },
  { t: "grape-growing", q: "Why are the steep, south-facing slopes of the Mosel so valuable?", o: ["They are easier to harvest by machine", "They maximise sunlight interception in a cool climate, helping grapes ripen", "They have the most fertile soil in Germany", "They protect the vines from birds"], a: 1, e: "In a cool, northerly region every degree of warmth counts. A steep slope angled toward the sun receives sunlight closer to perpendicular, and the dark slate soil absorbs and radiates heat. The trade-off is that these slopes must be worked entirely by hand." },
  { t: "grape-growing", q: "Which of these is a fungal disease that growers must treat in the vineyard?", o: ["Phylloxera", "Powdery mildew", "Frost", "Coulure"], a: 1, e: "Powdery and downy mildew are fungal diseases treated with sprays such as sulfur and copper-based Bordeaux mixture. Phylloxera is an insect pest controlled by grafting onto American rootstock, frost is a weather hazard, and coulure is a flowering problem that reduces fruit set." },

  { t: "winemaking", q: "Which compound is added to wine as an antioxidant and antiseptic?", o: ["Sulfur dioxide", "Tartaric acid", "Carbon dioxide", "Sucrose"], a: 0, e: "Sulfur dioxide protects wine from oxidation and from unwanted microbes, and is used at almost every stage from the vineyard to bottling. Its presence is why labels must state contains sulfites. Carbon dioxide is sometimes used to blanket wine against oxygen, but it is not the antiseptic." },
  { t: "winemaking", q: "Which technique is used to make an inexpensive wine taste oaky at low cost?", o: ["Fermenting in new French barriques", "Adding oak chips or staves to a stainless steel tank", "Extended lees stirring", "Carbonic maceration"], a: 1, e: "Oak chips, staves and powder deliver oak flavour quickly and cheaply in a neutral vessel, which is why so many inexpensive wines show vanilla and toast. They cannot reproduce the slow, gentle oxygen exposure and texture that ageing in an actual barrel provides." },

  { t: "labels", q: "Which is Italy's highest quality classification?", o: ["IGT", "DOC", "DOCG", "Vino da Tavola"], a: 2, e: "DOCG (Denominazione di Origine Controllata e Garantita) sits at the top, above DOC, with IGT below that as the broader geographical category. Barolo, Barbaresco, Chianti and Conegliano Valdobbiadene Prosecco Superiore are all DOCG." },
  { t: "labels", q: "A wine labelled Vin de France may state which of the following?", o: ["A single named vineyard", "The grape variety and the vintage", "A village name", "A Premier Cru classification"], a: 1, e: "Vin de France is the least restrictive French category: grapes can come from anywhere in the country, and the label may name the variety and vintage but not a specific region, village or vineyard. Naming smaller and more specific places is reserved for IGP and AOC wines." },
  { t: "labels", q: "In general, what does a more specific place name on an Old World label indicate?", o: ["A cheaper, higher-volume wine", "Tighter rules and usually higher quality and price", "A wine made from international varieties", "A wine intended for early drinking"], a: 1, e: "The pattern runs from broad to narrow: Bordeaux AOC, then Médoc AOC, then Pauillac AOC, with rules tightening and price rising at each step. The same logic applies in Burgundy, from regional to village to Premier Cru to Grand Cru." },

  { t: "chardonnay", q: "A Champagne labelled Blanc de Blancs is made from which grape?", o: ["Pinot Noir", "Chardonnay", "Meunier", "A blend of all three"], a: 1, e: "Blanc de Blancs means white from whites, and in Champagne that means 100% Chardonnay, typically giving a lighter, more citrus and floral style that ages well. Blanc de Noirs is white from blacks, made from Pinot Noir and Meunier." },
  { t: "chardonnay", q: "Pouilly-Fuissé is made from which grape, and where?", o: ["Sauvignon Blanc, in the Loire", "Chardonnay, in the Mâconnais", "Chenin Blanc, in the Loire", "Chardonnay, in Chablis"], a: 1, e: "Pouilly-Fuissé is a Chardonnay appellation in the Mâconnais, at the southern end of Burgundy, producing riper, fuller wines than Chablis. Do not confuse it with Pouilly-Fumé, which is Sauvignon Blanc in the Loire: the names differ by one word and the wines by everything." },
  { t: "chardonnay", q: "Which winemaking choice is most typical of an inexpensive, fruit-driven Chardonnay?", o: ["Barrel fermentation in new French oak", "Cool fermentation in stainless steel with early bottling", "Extended lees ageing for three years", "Carbonic maceration"], a: 1, e: "Cool fermentation in an inert vessel followed by early bottling preserves fresh primary fruit and keeps costs down. Barrel fermentation, long lees ageing and malolactic conversion are the tools of premium styles, and carbonic maceration is a red winemaking technique." },

  { t: "sauvignon-blanc", q: "Fumé Blanc on a Californian label indicates:", o: ["A sweet Sauvignon Blanc", "An oaked Sauvignon Blanc", "A sparkling wine", "A blend with Chardonnay"], a: 1, e: "Fumé Blanc is a marketing name coined in California for Sauvignon Blanc given some oak treatment. The grape is the same; the term signals the winemaking style, adding vanilla and toast over the variety's herbaceous fruit." },
  { t: "sauvignon-blanc", q: "Why is malolactic conversion normally avoided when making Sauvignon Blanc?", o: ["It would make the wine sweet", "It would reduce the high acidity and mask the aromatic character", "It is not permitted in the Loire", "It would increase the alcohol"], a: 1, e: "Sauvignon Blanc is prized for its high acidity and pungent aromatics. Malolactic conversion softens acidity and adds buttery notes that would blur the variety's signature gooseberry and elderflower character, so winemakers usually block it." },
  { t: "sauvignon-blanc", q: "The Casablanca Valley, a cool region known for Sauvignon Blanc, is in which country?", o: ["Argentina", "Chile", "South Africa", "New Zealand"], a: 1, e: "Casablanca is one of Chile's cool coastal valleys, along with San Antonio and Leyda, where morning fog and Pacific breezes preserve acidity. Chile's warmer inland Central Valley is better suited to Cabernet Sauvignon, Merlot and Carmenère." },

  { t: "pinot-grigio", q: "Grauburgunder is the German name for which grape?", o: ["Pinot Blanc", "Pinot Gris", "Pinot Noir", "Silvaner"], a: 1, e: "Grauburgunder is Pinot Gris made in a dry style; the same grape labelled Ruländer indicates a sweeter, richer wine. Weissburgunder is Pinot Blanc and Spätburgunder is Pinot Noir, so the Burgunder family names are worth memorising as a set." },
  { t: "pinot-grigio", q: "Which Italian region produces more concentrated, higher-quality Pinot Grigio from cool alpine vineyards?", o: ["Puglia", "Sicily", "Alto Adige", "Abruzzo"], a: 2, e: "Alto Adige, in the far north of Italy, has the altitude and cool nights to give Pinot Grigio real concentration and acidity. The bulk of inexpensive Italian Pinot Grigio comes from the higher-yielding vineyards of the Pinot Grigio delle Venezie DOC on the plains." },
  { t: "pinot-grigio", q: "What colour are Pinot Grigio grape skins?", o: ["Green-gold", "Pinkish grey", "Deep black", "Pale yellow"], a: 1, e: "The name gris, or grigio, means grey: the skins have a pinkish-grey tinge, which can give the finished wine a deeper lemon or faintly copper tint. It is a mutation of black-skinned Pinot Noir, which explains the colouring." },
  { t: "pinot-grigio", q: "Which structure is typical of inexpensive Italian Pinot Grigio?", o: ["Full body, low acidity, high alcohol", "Light body, high acidity, light flavour intensity", "Medium body with pronounced tropical fruit", "Off-dry with honey and ginger"], a: 1, e: "Picked early and fermented cool in stainless steel, Italian Pinot Grigio is deliberately light bodied, high in acidity and modest in flavour, offering lemon, pear and apple. The full-bodied, off-dry style with honey and ginger belongs to Alsace Pinot Gris." },

  { t: "riesling", q: "Why is slate soil valued in the Mosel?", o: ["It adds a mineral flavour directly to the wine", "It absorbs and radiates heat, helping grapes ripen in a cool climate", "It holds a great deal of water", "It prevents phylloxera"], a: 1, e: "Dark slate absorbs heat during the day and radiates it back to the vines, which matters enormously in a region this far north. It also drains well and is stable on very steep slopes. Vines do not take flavour compounds directly from soil." },
  { t: "riesling", q: "Which Prädikat level would produce the sweetest wine?", o: ["Kabinett", "Spätlese", "Auslese", "Trockenbeerenauslese"], a: 3, e: "Trockenbeerenauslese is made from individually selected berries that have shrivelled with noble rot, giving a luscious, intensely concentrated wine in tiny quantities. The ladder runs Kabinett, Spätlese, Auslese, Beerenauslese and then TBA, with Eiswein made from grapes frozen on the vine." },
  { t: "riesling", q: "Which combination is typical of a Mosel Riesling?", o: ["High alcohol, low acidity, full body", "Low alcohol, high acidity, light body, often off-dry", "High alcohol, high tannin, oak ageing", "Medium alcohol, low acidity, oaked"], a: 1, e: "Mosel Riesling is often only 7-9% abv, with piercing acidity, a light body and green apple and citrus fruit, and residual sugar is frequently left in to balance that acidity. Riesling is not oaked, and being a white wine it has no meaningful tannin." },

  { t: "chenin-blanc", q: "Savennières, in the Loire, produces which style of wine?", o: ["Sweet botrytised white", "Dry, high-acid Chenin Blanc", "Light red from Cabernet Franc", "Traditional-method sparkling"], a: 1, e: "Savennières is the Loire's benchmark for austere, dry, age-worthy Chenin Blanc. The sweet botrytised styles come from Coteaux du Layon, Bonnezeaux and Quarts de Chaume, and the sparkling wines from Saumur and Crémant de Loire." },
  { t: "chenin-blanc", q: "Coteaux du Layon is known for which style?", o: ["Dry Sauvignon Blanc", "Sweet Chenin Blanc affected by noble rot", "Sparkling rosé", "Tannic red"], a: 1, e: "The damp autumn mornings of the Layon valley, a tributary of the Loire, encourage noble rot on Chenin Blanc, and the grape's very high acidity keeps the resulting sweet wines fresh rather than cloying. Bonnezeaux and Quarts de Chaume are the top sites within it." },
  { t: "chenin-blanc", q: "Which grape is the base of most Crémant de Loire?", o: ["Chardonnay", "Chenin Blanc", "Sauvignon Blanc", "Melon Blanc"], a: 1, e: "Chenin Blanc's naturally high acidity makes it an excellent base for traditional-method sparkling wine, and it dominates Crémant de Loire as well as sparkling Vouvray and Saumur. Crémant wines are made by the traditional method but outside the Champagne region." },
  { t: "chenin-blanc", q: "A Vouvray labelled demi-sec is:", o: ["Bone dry", "Off-dry to medium-dry", "Fully sweet", "Sparkling"], a: 1, e: "Vouvray runs sec (dry), demi-sec (off-dry to medium-dry) and moelleux (sweet), with sparkling versions too. Because the style changes with the vintage and the producer's choice, you must read the label rather than assume." },

  { t: "aromatic-whites", q: "Which structural combination is typical of Gewurztraminer?", o: ["High acidity and low alcohol", "Low acidity and high alcohol", "High acidity and high tannin", "Low alcohol and light body"], a: 1, e: "Gewurztraminer gives full-bodied, high-alcohol wines with notably low acidity, which is part of why it can taste rich and almost oily even when technically dry. Combine that with pronounced lychee, rose and ginger and it is one of the easiest wines to identify blind." },
  { t: "aromatic-whites", q: "Which four varieties are the noble grapes of Alsace, permitted for Grand Cru wines?", o: ["Chardonnay, Sauvignon Blanc, Chenin, Viognier", "Riesling, Gewurztraminer, Pinot Gris, Muscat", "Riesling, Chardonnay, Muscat, Sylvaner", "Pinot Blanc, Pinot Gris, Pinot Noir, Riesling"], a: 1, e: "Riesling, Gewurztraminer, Pinot Gris and Muscat are the four noble varieties of Alsace and the only ones generally permitted for Grand Cru. Alsace is also unusual in France for labelling its wines by grape variety rather than by place alone." },
  { t: "aromatic-whites", q: "Which grape is unusual in that its wines genuinely smell of grapes?", o: ["Viognier", "Muscat", "Torrontés", "Gewurztraminer"], a: 1, e: "Muscat is the classic grapey grape, showing that character whether it is dry in Alsace, sweet and sparkling as Asti, or fortified as a Vin Doux Naturel. Viognier smells of apricot and honeysuckle, and Gewurztraminer of lychee and rose." },

  { t: "other-whites", q: "Which description best fits Vinho Verde?", o: ["Full bodied, oaked and high in alcohol", "Light bodied, low in alcohol, high in acidity, sometimes with a slight spritz", "Deep gold and sweet", "Tannic and age-worthy"], a: 1, e: "Vinho Verde comes from the cool, damp north-west of Portugal and is made in a deliberately light, fresh style, low in alcohol and high in acidity, often with a touch of spritz. Alvarinho, the same grape as Albariño, makes its more serious examples." },
  { t: "other-whites", q: "Assyrtiko is the signature white grape of which island?", o: ["Sicily", "Santorini", "Corsica", "Madeira"], a: 1, e: "Assyrtiko grows on the volcanic island of Santorini in Greece and is remarkable for retaining very high acidity despite a hot, sunny climate, giving bone-dry wines with citrus and a stony, saline character." },
  { t: "other-whites", q: "Rueda, in Spain, is best known for white wine made from which grape?", o: ["Albariño", "Verdejo", "Viura", "Palomino"], a: 1, e: "Verdejo dominates Rueda, giving dry, high-acid wines with citrus fruit and a distinctive herbaceous, slightly bitter finish. Albariño belongs to Rías Baixas, Viura is the main white of Rioja, and Palomino is the Sherry grape." },

  { t: "cabernet-sauvignon", q: "Which of these is a left bank Bordeaux commune?", o: ["Pomerol", "Saint-Émilion", "Pauillac", "Fronsac"], a: 2, e: "Pauillac sits on the left bank in the Médoc, alongside Saint-Estèphe, Saint-Julien and Margaux, and its wines are Cabernet Sauvignon-dominant. Pomerol, Saint-Émilion and Fronsac are on the right bank, where Merlot leads the blend." },
  { t: "cabernet-sauvignon", q: "Why do the gravel soils of the Médoc suit Cabernet Sauvignon?", o: ["They hold water, keeping the vines cool", "They drain well and retain heat, helping this late-ripening variety ripen", "They are very fertile and boost yields", "They protect against phylloxera"], a: 1, e: "Cabernet Sauvignon ripens late, so it needs every advantage. Gravel drains freely and stores daytime heat, releasing it to the vines, which helps the grapes reach full ripeness. The cooler, damper clay of the right bank suits early-ripening Merlot instead." },
  { t: "cabernet-sauvignon", q: "Which is a classic food match for a young, tannic Cabernet Sauvignon?", o: ["Grilled red meat", "Fresh oysters", "Lemon sorbet", "Thai green curry"], a: 0, e: "The protein and fat in red meat soften the perception of tannin, making the wine seem smoother and fruitier. Salt does the same. Oysters would clash with tannin, sweet dessert would strip the wine, and chilli heat exaggerates alcohol and bitterness." },

  { t: "merlot", q: "Which is the most planted grape variety in Bordeaux?", o: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc", "Sémillon"], a: 1, e: "Merlot is planted far more widely than Cabernet Sauvignon in Bordeaux, dominating the right bank and forming the backbone of most inexpensive Bordeaux AOC red. Its early ripening makes it more reliable across the region's variable climate." },
  { t: "merlot", q: "What is the main viticultural risk of Merlot's early budding?", o: ["Autumn rain at harvest", "Spring frost damaging the young shoots", "Sunburn in summer", "Phylloxera"], a: 1, e: "Budding early means the vine's fragile new shoots are out while spring frosts are still possible, and a frost at that point can destroy the crop. The compensation is that Merlot also ripens early, which is why it succeeds where Cabernet Sauvignon struggles." },
  { t: "merlot", q: "A Merlot with medium body, fresh red fruit, medium alcohol and a leafy herbaceous edge was most likely made in which style?", o: ["The international style from a warm climate", "The Bordeaux style, picked earlier in a moderate climate", "A fortified style", "A carbonic maceration style"], a: 1, e: "The Bordeaux style picks earlier and keeps freshness, giving medium body and red fruit with a leafy note. The international style, made in warm regions and picked late, gives deep colour, full body, high alcohol, ripe black fruit and generous new oak." },
  { t: "merlot", q: "Which statement about Pomerol is true?", o: ["It has an official classification of growths", "It is Merlot-dominant and has no official classification", "It is on the left bank", "It produces mainly white wine"], a: 1, e: "Pomerol is a small right bank appellation, dominated by Merlot on clay soils, and it has never adopted a classification of growths, yet it produces some of the most expensive wine in Bordeaux. The 1855 classification covers the left bank, and Saint-Émilion has its own separate system." },

  { t: "pinot-noir", q: "The Willamette Valley, a leading Pinot Noir region, is in which US state?", o: ["California", "Washington", "Oregon", "New York"], a: 2, e: "The Willamette Valley in Oregon has the cool, moderate conditions Pinot Noir demands. California's cool-climate Pinot Noir comes from Sonoma Coast, Russian River Valley, Carneros and Santa Barbara, where fog off the Pacific does the same job." },
  { t: "pinot-noir", q: "Which of these is a village in the Côte de Nuits?", o: ["Meursault", "Gevrey-Chambertin", "Pouilly-Fuissé", "Chablis"], a: 1, e: "Gevrey-Chambertin, along with Vosne-Romanée and Nuits-Saint-Georges, lies in the Côte de Nuits, the northern half of the Côte d'Or and the source of Burgundy's most structured red wines. Meursault is a white wine village in the Côte de Beaune." },
  { t: "pinot-noir", q: "Why is oak used sparingly with Pinot Noir?", o: ["Pinot Noir reacts badly with oak chemically", "Its delicate aromas are easily overwhelmed by too much new oak", "Oak would raise the tannin above legal limits", "Oak makes the wine sweet"], a: 1, e: "Pinot Noir's appeal lies in its perfumed red fruit and finesse, and heavy new oak buries that. Producers typically use a modest proportion of new barrels to add subtle vanilla, smoke and clove without masking the fruit." },

  { t: "syrah", q: "In Côte-Rôtie, Syrah may legally be co-fermented with a small proportion of which white grape?", o: ["Marsanne", "Viognier", "Roussanne", "Chardonnay"], a: 1, e: "Up to a small percentage of Viognier may be co-fermented with Syrah in Côte-Rôtie, adding aromatic lift and stabilising colour. Viognier's own appellation, Condrieu, lies immediately to the south in the northern Rhône." },
  { t: "syrah", q: "Which description best fits Barossa Valley Shiraz?", o: ["Light bodied with high acidity and red cherry", "Full bodied and high in alcohol with ripe blackberry, liquorice and soft tannins", "Pale with pronounced black pepper and low alcohol", "Off-dry with tropical fruit"], a: 1, e: "The Barossa is warm, so its Shiraz is deeply coloured, full bodied and high in alcohol, with ripe blackberry, liquorice and chocolate, soft tannins and often American oak. The peppery, fresher, medium-bodied style comes from cooler regions such as the northern Rhône, Heathcote or the Canberra District." },
  { t: "syrah", q: "Which Australian region is known for a cooler-climate, peppery style of Shiraz?", o: ["Riverland", "Heathcote", "Barossa Valley", "McLaren Vale"], a: 1, e: "Heathcote in Victoria, along with the Canberra District, Great Southern and the Hunter Valley, produces fresher, more peppery Shiraz. The Barossa, McLaren Vale and the irrigated inland Riverland are all warm, giving richer, riper styles." },

  { t: "grenache", q: "Which alcohol level is typical of a Grenache-based southern Rhône red?", o: ["Around 10%", "Around 12%", "14.5% or more", "Around 8%"], a: 2, e: "Grenache accumulates sugar readily in warm, dry conditions, so its wines commonly reach 14.5% abv or more, giving a full body and a warming finish, offset by relatively low tannin and pale to medium colour." },
  { t: "grenache", q: "Tavel, in the southern Rhône, is known for producing:", o: ["Full-bodied red wine", "Rosé", "Sweet white wine", "Sparkling wine"], a: 1, e: "Tavel is an appellation dedicated to rosé, made largely from Grenache and typically deeper coloured and fuller bodied than Provence rosé. Grenache is also the backbone of Provence rosé and Navarra rosado." },
  { t: "grenache", q: "Garnacha is the Spanish name for which grape?", o: ["Grenache", "Carignan", "Mourvèdre", "Tempranillo"], a: 0, e: "Garnacha is Grenache, a leading variety in Priorat, Rioja, Navarra and Campo de Borja. Carignan is Cariñena or Mazuelo in Spain, and Mourvèdre is Monastrell, so the Spanish and French names of this trio are worth learning together." },
  { t: "grenache", q: "What does Mourvèdre contribute to a GSM blend?", o: ["Bright acidity and low alcohol", "Tannin, colour and structure", "Aromatic lift and floral notes", "Residual sugar"], a: 1, e: "Mourvèdre needs real heat to ripen and brings deep colour, firm tannin and savoury structure to blends led by soft, high-alcohol Grenache. Syrah supplies colour and black pepper, so the three complement one another neatly." },

  { t: "tempranillo", q: "Compared with Rioja, Ribera del Duero is typically:", o: ["Lighter and lower in alcohol", "Deeper, more concentrated and more tannic, from higher altitude", "Sweeter", "Almost entirely white wine"], a: 1, e: "Ribera del Duero sits high on Spain's northern plateau with a wide diurnal range, producing more deeply coloured, concentrated and tannic Tempranillo. Rioja is generally more elegant, with the oak-ageing tradition central to its style." },
  { t: "tempranillo", q: "A red Rioja labelled Crianza must be aged for a minimum of:", o: ["1 year in total", "2 years in total, with at least 1 in oak", "3 years in total, with at least 1 in oak", "5 years in total"], a: 1, e: "Crianza requires 2 years total with at least 1 in oak. Reserva requires 3 years total with at least 1 in oak, and Gran Reserva requires 2 years in oak plus 3 years in bottle. Wine sold with little or no ageing is labelled Genérico or Joven." },
  { t: "tempranillo", q: "Which two Spanish regions hold the top DOCa/DOQ classification?", o: ["Rioja and Priorat", "Rioja and Ribera del Duero", "Rueda and Rías Baixas", "Priorat and Toro"], a: 0, e: "Rioja and Priorat are the only two regions with Spain's highest classification, DOCa in Spanish and DOQ in Catalan. Ribera del Duero, Toro, Rueda and Rías Baixas are all DO." },

  { t: "sangiovese", q: "What is the minimum proportion of Sangiovese in Chianti Classico?", o: ["50%", "80%", "90%", "100%"], a: 1, e: "Chianti Classico must contain at least 80% Sangiovese, with the remainder made up of permitted varieties including international grapes such as Cabernet Sauvignon and Merlot. Brunello di Montalcino, by contrast, must be 100% Sangiovese." },
  { t: "sangiovese", q: "Gran Selezione is:", o: ["A sweet Tuscan wine", "The top tier of Chianti Classico, above Riserva", "A Piemontese classification", "A term for unoaked Sangiovese"], a: 1, e: "The Chianti Classico hierarchy runs Annata, then Riserva, then Gran Selezione at the top, with stricter requirements on ageing and fruit sourcing. Note that Chianti Classico is a separate DOCG from the wider Chianti DOCG." },
  { t: "sangiovese", q: "Rosso di Montalcino is best described as:", o: ["A sweet wine from dried grapes", "A younger, less expensive Sangiovese from the same zone as Brunello", "A white wine", "A Chianti Classico Riserva"], a: 1, e: "Rosso di Montalcino comes from the same area and grape as Brunello but requires far less ageing, so it is released younger, costs less and is drunk earlier. Vino Nobile di Montepulciano has a similar junior partner in Rosso di Montepulciano." },

  { t: "nebbiolo", q: "Barolo and Barbaresco are produced in which Italian region?", o: ["Tuscany", "Veneto", "Piemonte", "Lombardy"], a: 2, e: "Both are in Piemonte in north-west Italy, in the Langhe hills near Alba. Tuscany is home to Chianti and Brunello, the Veneto to Soave and Valpolicella, and Lombardy to Franciacorta and the Nebbiolo of Valtellina." },
  { t: "nebbiolo", q: "Nebbiolo is usually the last variety picked in Piemonte because it:", o: ["Buds late", "Ripens very late in the season", "Needs frost before harvest", "Is dried after picking"], a: 1, e: "Nebbiolo buds early and ripens very late, often into late October when fog blankets the Langhe hills, and it needs the best south-facing sites to ripen at all. That long hang time is part of what builds its formidable tannin and acidity." },
  { t: "nebbiolo", q: "Langhe Nebbiolo typically differs from Barolo in that it:", o: ["Is made from a different grape", "Requires less ageing and is cheaper and earlier drinking", "Is always sweet", "Is a sparkling wine"], a: 1, e: "Langhe Nebbiolo is the same grape from the same broad area but under a DOC with far shorter ageing requirements, so it offers Nebbiolo character at a fraction of the price and can be enjoyed young." },
  { t: "nebbiolo", q: "How does Nebbiolo's colour typically behave with age?", o: ["It deepens from ruby to purple", "It moves quickly from pale ruby to garnet", "It stays deep purple for decades", "It turns pink"], a: 1, e: "Nebbiolo is pale to start with and loses colour quickly, taking on a garnet, orange-tinged rim while young. This is a classic trap: the wine looks light but has the highest tannin and acidity on the syllabus." },

  { t: "other-italian-reds", q: "Recioto della Valpolicella is:", o: ["A dry, high-alcohol wine from dried grapes", "A sweet wine from dried grapes", "A light, fresh everyday red", "A fortified wine"], a: 1, e: "Recioto uses the same appassimento drying as Amarone, but fermentation is stopped while sugar remains, giving a sweet wine. Amarone takes fermentation nearly to completion, so it ends up dry and very high in alcohol." },
  { t: "other-italian-reds", q: "Corvina is the principal grape of which wines?", o: ["Chianti and Brunello", "Valpolicella and Bardolino", "Barolo and Barbaresco", "Soave and Gavi"], a: 1, e: "Corvina dominates Valpolicella and Bardolino in the Veneto, giving light-bodied, high-acid wines with sour red cherry and an almond note. It is also the base for Ripasso, Amarone and Recioto." },
  { t: "other-italian-reds", q: "Nero d'Avola is the leading black grape of which region?", o: ["Sicily", "Piemonte", "Veneto", "Abruzzo"], a: 0, e: "Nero d'Avola is Sicily's flagship black grape, giving warm-climate wines that are full bodied with ripe black fruit and sweet spice. Montepulciano belongs to Abruzzo, Barbera and Nebbiolo to Piemonte, and Corvina to the Veneto." },

  { t: "malbec-carmenere", q: "Malbec is known by which name in Cahors, its original French home?", o: ["Côt", "Tannat", "Négrette", "Fer"], a: 0, e: "In Cahors, in south-west France, Malbec is traditionally called Côt, and the wines are firmer, more tannic and more earthy than the plush, violet-scented Argentinian style. Malbec is also a permitted but now rare Bordeaux variety." },
  { t: "malbec-carmenere", q: "The Uco Valley is a high-altitude sub-region of:", o: ["Colchagua, Chile", "Mendoza, Argentina", "Maipo, Chile", "Salta, Argentina"], a: 1, e: "The Uco Valley, along with Luján de Cuyo, is one of Mendoza's premium sub-regions, where altitude brings cooler nights, fresher acidity and deeper colour in Malbec. Salta, further north, is higher still and famous for Torrontés." },
  { t: "malbec-carmenere", q: "Until DNA testing in the 1990s, Carmenère in Chile was widely believed to be:", o: ["Cabernet Franc", "Merlot", "Syrah", "Malbec"], a: 1, e: "Chilean growers had planted Carmenère alongside Merlot and assumed the two were the same. Once identified, Carmenère became a Chilean signature, distinguished by its very late ripening and persistent green bell pepper note." },
  { t: "malbec-carmenere", q: "How are the vineyards of Mendoza typically irrigated?", o: ["Rainfall alone", "Meltwater from the Andes", "Desalinated sea water", "Groundwater pumped from the Pampas"], a: 1, e: "Mendoza is effectively desert, with very low rainfall, so vineyards depend on irrigation using snowmelt channelled down from the Andes. The dry, sunny conditions also mean very low disease pressure, which suits organic growing." },

  { t: "zinfandel", q: "Lodi, a major source of old-vine Zinfandel, is in:", o: ["Washington State", "California", "Oregon", "New York"], a: 1, e: "Lodi, in California's Central Valley, is known for old-vine Zinfandel, as are Sonoma's Dry Creek Valley and the Sierra Foothills. California and Puglia in Italy, where it is called Primitivo, are the grape's two heartlands." },
  { t: "zinfandel", q: "Why does Zinfandel often reach very high alcohol levels?", o: ["It is fortified", "Its bunches ripen unevenly, so sugar levels are pushed high to ripen all the fruit", "It is always picked late for botrytis", "It undergoes a second fermentation"], a: 1, e: "A single Zinfandel bunch can hold raisined, ripe and underripe berries at the same time. Waiting for the green berries to ripen means the rest shrivel further, driving up sugar and therefore alcohol, often to 15% or more." },
  { t: "zinfandel", q: "Primitivo is mainly grown in which part of Italy?", o: ["Piemonte", "Veneto", "Puglia", "Tuscany"], a: 2, e: "Primitivo, genetically the same variety as Zinfandel, is grown mainly in Puglia in the hot south-east of Italy, giving ripe, soft, generous reds that are usually good value." },
  { t: "zinfandel", q: "Which oak type is most associated with reinforcing Zinfandel's sweet spice and vanilla character?", o: ["French oak", "American oak", "Slovenian oak", "Acacia"], a: 1, e: "American oak gives stronger vanilla and a distinctive coconut note, which suits Zinfandel's ripe, jammy fruit. The same oak choice is traditional in Rioja and in warm-climate Australian Shiraz." },

  { t: "gamay", q: "When is Beaujolais Nouveau released?", o: ["The first Monday of October", "The third Thursday of November", "Christmas Eve", "The first day of spring"], a: 1, e: "Beaujolais Nouveau is released on the third Thursday of November in the same year as the harvest, only weeks after picking. It is made almost entirely by carbonic maceration for maximum fruit and minimum tannin, and is meant to be drunk immediately." },
  { t: "gamay", q: "Which is the highest tier of the Beaujolais hierarchy?", o: ["Beaujolais AOC", "Beaujolais-Villages", "The ten named Crus", "Beaujolais Nouveau"], a: 2, e: "The ten Crus, including Fleurie, Morgon, Moulin-à-Vent and Brouilly, sit at the top, above Beaujolais-Villages and Beaujolais AOC. Cru Beaujolais has more structure and concentration and can develop in bottle for several years." },
  { t: "gamay", q: "In semi-carbonic maceration, what starts the process?", o: ["Adding carbon dioxide to an empty vessel", "The weight of whole bunches crushing the grapes at the bottom, whose juice begins to ferment", "Heating the must to 60C", "Adding grape spirit"], a: 1, e: "In semi-carbonic maceration the vessel is filled with whole bunches; those at the bottom are crushed by the weight above and begin a normal fermentation, and the carbon dioxide produced fills the vessel so the intact berries above ferment internally. Full carbonic maceration fills the vessel with CO2 from the outset." },
  { t: "gamay", q: "Which structure is typical of Gamay?", o: ["High tannin and low acidity", "Low tannin and high acidity", "High tannin and high alcohol", "Low acidity and full body"], a: 1, e: "Gamay gives pale to medium ruby wines with low tannin, high acidity and light to medium body, showing red cherry and raspberry. That combination is why Beaujolais is one of the few reds routinely served lightly chilled, at around 13C." },

  { t: "other-reds", q: "Touriga Nacional is a leading black grape of which country?", o: ["Spain", "Portugal", "Italy", "Greece"], a: 1, e: "Touriga Nacional is grown in Portugal's Douro and Dão, giving deeply coloured, tannic, floral wines. It is one of the five principal Port varieties and is increasingly used for dry red wine as well." },
  { t: "other-reds", q: "Monastrell is the Spanish name for which grape?", o: ["Mourvèdre", "Carignan", "Grenache", "Cinsault"], a: 0, e: "Monastrell is Mourvèdre, grown widely in south-east Spain, where the heat lets this very late-ripening variety ripen fully. It gives full-bodied, high-tannin wines and is a structural component of GSM blends." },
  { t: "other-reds", q: "Cabernet Sauvignon is a natural crossing of which two varieties?", o: ["Cabernet Franc and Sauvignon Blanc", "Merlot and Cabernet Franc", "Pinot Noir and Cinsault", "Syrah and Mourvèdre"], a: 0, e: "Cabernet Sauvignon arose as a natural crossing of Cabernet Franc and Sauvignon Blanc, which explains the herbaceous, leafy notes both parents can show. Pinot Noir crossed with Cinsault gives Pinotage, South Africa's own variety." },
  { t: "other-reds", q: "Pinotage is the signature variety of which country?", o: ["Australia", "Chile", "South Africa", "Argentina"], a: 2, e: "Pinotage was bred in South Africa in 1925 and remains distinctively South African, giving deeply coloured wines with medium to high tannin and ripe black fruit, sometimes with smoky, banana or coffee notes from winemaking choices." },

  { t: "champagne", q: "What happens during disgorgement?", o: ["Sugar and yeast are added to start the second fermentation", "The frozen plug of sediment is removed from the bottle neck", "The bottles are gradually tilted and turned", "The wine is filtered and bottled under pressure"], a: 1, e: "After riddling has collected the sediment in the neck, the neck is frozen and the plug of lees expelled: that is disgorgement. The bottle is then topped up with the dosage, which sets the final sweetness, before the cork goes in." },
  { t: "champagne", q: "How long must vintage Champagne age on its lees as a minimum?", o: ["15 months", "2 years", "3 years", "5 years"], a: 2, e: "Vintage Champagne requires a minimum of 3 years on the lees, against 15 months in total for non-vintage. Longer lees contact deepens the biscuit, bread and toast autolytic character that defines the style." },

  { t: "other-sparkling", q: "Franciacorta is:", o: ["A tank-method sparkling wine from the Veneto", "A traditional-method sparkling wine from Lombardy, Italy", "A sweet Muscat from Piemonte", "A Spanish sparkling wine"], a: 1, e: "Franciacorta is Italy's leading traditional-method sparkling wine, made in Lombardy largely from Chardonnay and Pinot Noir, with lees ageing that gives autolytic character. Prosecco, by contrast, is made by the tank method." },
  { t: "other-sparkling", q: "Cava labelled Gran Reserva must spend a minimum of how long on its lees?", o: ["9 months", "18 months", "30 months", "5 years"], a: 2, e: "Within the Cava de Guarda Superior category, Reserva requires 18 months on the lees and Gran Reserva 30 months. Longer lees contact builds the biscuit and toast character that distinguishes these tiers from entry-level Cava de Guarda." },

  { t: "sweet-wines", q: "Which weather pattern is needed for noble rot to develop successfully?", o: ["Constant rain through the autumn", "Damp misty mornings followed by warm, dry, sunny afternoons", "Hot dry weather all season", "An early hard frost"], a: 1, e: "Morning humidity lets Botrytis cinerea take hold, and dry sunny afternoons stop it tipping over into destructive grey rot while water evaporates from the berries. Sauternes gets this from mists off the Ciron river; constant damp would simply rot the crop." },
  { t: "sweet-wines", q: "Vendanges Tardives on an Alsace label means:", o: ["Botrytis-affected grapes", "Late harvest", "Fortified wine", "Sparkling wine"], a: 1, e: "Vendanges Tardives means late harvest: grapes picked well after normal ripeness, giving concentrated wines that may be off-dry to sweet. Sélection de Grains Nobles is the higher Alsace category, made from individually selected botrytised berries." },

  { t: "sherry", q: "Manzanilla is a style of Fino matured in which town?", o: ["Jerez de la Frontera", "El Puerto de Santa María", "Sanlúcar de Barrameda", "Montilla"], a: 2, e: "Manzanilla is Fino aged in Sanlúcar de Barrameda on the Atlantic coast, where the cooler, more humid conditions sustain a thicker layer of flor year round, giving a particularly delicate, tangy and saline style." },
  { t: "sherry", q: "Which Sherry style is aged first under flor and then oxidatively?", o: ["Fino", "Amontillado", "Oloroso", "Pedro Ximénez"], a: 1, e: "Amontillado begins life under flor like a Fino, then the flor dies or is killed by further fortification and the wine continues ageing in contact with oxygen. The result is amber, dry and both yeasty and nutty. Oloroso never has flor; Fino never loses it." },

  { t: "port", q: "Port is produced in which valley?", o: ["The Dão", "The Douro", "The Alentejo", "The Duero in Spain"], a: 1, e: "Port comes from the Douro Valley in northern Portugal, on steep schist terraces, and was traditionally matured in lodges at Vila Nova de Gaia near the cooler coast. The same river is called the Duero in Spain, where it flows through Ribera del Duero." },
  { t: "port", q: "On a bottle labelled 20 Year Old Tawny, the number refers to:", o: ["The vintage year of the grapes", "The approximate average age of the wines in the blend", "The number of years in bottle", "The minimum age of the youngest wine"], a: 1, e: "Age-indicated Tawny is a blend, and 10, 20, 30 or 40 years indicates the approximate average age of the wines in it. Older blends show more intense caramel, walnut and dried-fruit character. Vintage Port, by contrast, comes from a single declared year." },

  { t: "fortified-muscat", q: "At what point is a Vin Doux Naturel fortified?", o: ["Before fermentation begins", "During fermentation, leaving natural grape sugar", "After fermentation is complete", "It is not fortified at all"], a: 1, e: "Despite the name, a Vin Doux Naturel is fortified: grape spirit is added during fermentation, killing the yeast and leaving natural grape sugar behind, exactly as with Port. Sherry is the contrast, fortified only after fermenting dry." },
  { t: "fortified-muscat", q: "Which is the correct order of Rutherglen Muscat tiers, from youngest to oldest?", o: ["Classic, Rutherglen, Grand, Rare", "Rutherglen, Classic, Grand, Rare", "Rare, Grand, Classic, Rutherglen", "Grand, Rare, Rutherglen, Classic"], a: 1, e: "The ladder runs Rutherglen, Classic, Grand and then Rare, with each step showing greater average age, sweetness, concentration and price. The wines are blended in a fractional system similar to a Sherry solera." },
  { t: "fortified-muscat", q: "Muscat de Rivesaltes and Muscat de Frontignan are made in which country?", o: ["Spain", "Italy", "France", "Portugal"], a: 2, e: "Both are Vins Doux Naturels from the Languedoc-Roussillon in southern France, alongside Muscat de Beaumes-de-Venise in the Rhône. These styles are usually protected from oxygen, staying pale, grapey and floral rather than turning brown." },
  { t: "fortified-muscat", q: "Why is Rutherglen Muscat deep brown with toffee and coffee flavours?", o: ["It is made from black grapes", "It is aged oxidatively in barrel in a hot climate", "It has caramel added", "It is aged under flor"], a: 1, e: "Grapes are left to raisin on the vine, then fortified and aged in barrel with deliberate oxygen exposure in Rutherglen's hot climate, which darkens the wine and builds raisin, toffee, coffee and dried fig character over many years." },

  { t: "food-pairing", q: "How does acidity in food affect a wine?", o: ["It makes the wine seem more acidic and harsh", "It makes the wine seem less acidic, and sweeter and fruitier", "It makes the wine seem more tannic", "It has no effect"], a: 1, e: "Acid in the dish softens the perception of acid in the wine and lifts its fruit, which is why a squeeze of lemon can rescue a difficult match. The wine still needs decent acidity of its own, or it will taste flabby beside the food." },
  { t: "food-pairing", q: "Which wine style works best with salty, oily tapas such as olives and fried fish?", o: ["A tannic young Cabernet Sauvignon", "A crisp, high-acid dry white or Fino Sherry", "A sweet Sauternes", "A full-bodied oaked red"], a: 1, e: "Salt softens acidity and tannin and lifts fruit, and high acidity cuts through oil and refreshes the palate, so a crisp dry white or a chilled Fino works beautifully. Tannic reds clash with salty fried fish, and a sweet wine would overwhelm it." },

  { t: "service-storage", q: "At what temperature should sparkling wine be served?", o: ["6-10C", "10-13C", "13-15C", "15-18C"], a: 0, e: "Sparkling wines are served coldest, at 6-10C, along with sweet wines at 6-8C. Cold temperatures keep the mousse fine and the acidity refreshing. Light whites and rosés follow at 7-10C, full whites at 10-13C, and reds from 13C up to 18C." },
  { t: "service-storage", q: "A still white wine is cloudy and slightly spritzy in the glass. The most likely cause is:", o: ["Cork taint", "An unintended second fermentation in the bottle", "Heat damage", "Excess sulfur dioxide"], a: 1, e: "A still wine that arrives cloudy with a light prickle has almost certainly refermented in bottle, leaving carbon dioxide and haze. Cork taint smells of damp cardboard, heat damage tastes cooked and may push the cork out, and excess sulfur smells acrid on the nose." }
];
