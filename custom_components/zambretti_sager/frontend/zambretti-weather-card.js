console.info("%c ZAMBRETTI & SAGER WEATHER CARD %c v2.0.1 ","color: white; background: #d97706; font-weight: 700; border-radius: 3px 0 0 3px; padding: 2px 5px;","color: #92400e; background: #fef3c7; font-weight: 700; border-radius: 0 3px 3px 0; padding: 2px 5px;"),window.customCards=window.customCards||[],window.customCards.some(o=>o.type==="zambretti-weather-card")||window.customCards.push({type:"zambretti-weather-card",name:"Zambretti & Sager Weather Card",description:"Weather forecasts (Modern iOS, Vintage Barometer, Compact Tile)",preview:!0,documentationURL:"https://github.com/meksspirt/zambretti_sager"}),window.customCards.some(o=>o.type==="custom:zambretti-weather-card")||window.customCards.push({type:"custom:zambretti-weather-card",name:"Zambretti & Sager Weather Card",description:"Weather forecasts (Modern iOS, Vintage Barometer, Compact Tile)",preview:!0,documentationURL:"https://github.com/meksspirt/zambretti_sager"});const X={en:{settled_fine:"Settled Fine",fine_weather:"Fine Weather",fine_becoming_less_settled:"Fine, Less Settled",fairly_fine_showery_later:"Fine, Showers Later",showery_becoming_more_unsettled:"Showery, Worsening",unsettled_rain_later:"Unsettled, Rain Later",rain_at_times_worse_later:"Rain, Worse Later",rain_at_times_becoming_very_unsettled:"Rain, Very Unsettled",very_unsettled_rain:"Very Unsettled, Rain",fine_possibly_showers:"Fine, Possibly Showers",fairly_fine_showers_likely:"Fine, Showers Likely",showery_bright_intervals:"Showery, Bright Intervals",changeable_some_rain:"Changeable, Some Rain",unsettled_rain_at_times:"Unsettled, Rain at Times",rain_at_frequent_intervals:"Frequent Rain",stormy_much_rain:"Stormy, Heavy Rain",becoming_fine:"Becoming Fine",fairly_fine_improving:"Fine, Improving",fairly_fine_possibly_showers_early:"Fine, Early Showers",showery_early_improving:"Early Showers, Improving",changeable_mending:"Changeable, Mending",rather_unsettled_clearing_later:"Unsettled, Clearing Later",unsettled_probably_improving:"Unsettled, Improving",unsettled_short_fine_intervals:"Unsettled, Short Fine",very_unsettled_finer_at_times:"Very Unsettled",stormy_possibly_improving:"Stormy, May Improve",stable:"Stable",sager_fair_improving:"Fair, improving",sager_fair_tending_to_deteriorate:"Fair, tending to deteriorate",sager_fair_no_change:"Fair, no important change",sager_unsettled_rain_likely:"Unsettled, rain likely",sager_unsettled_probably_improving:"Unsettled, probably improving",sager_unsettled_rain_at_times:"Unsettled, rain at times",sager_changeable_becoming_fairer:"Changeable, becoming fairer",sager_changeable_becoming_more_unsettled:"Changeable, more unsettled",sager_variable_slowly_improving:"Variable, slowly improving",sager_variable_slowly_deteriorating:"Variable, slowly deteriorating",sager_variable_some_change:"Variable, some change"},cs:{settled_fine:"P\u011Bkn\u011B, stabiln\u011B",fine_weather:"P\u011Bkn\xE9 po\u010Das\xED",fine_becoming_less_settled:"P\u011Bkn\u011B, m\xE9n\u011B stabiln\u011B",fairly_fine_showery_later:"Docela p\u011Bkn\u011B, p\u0159eh\xE1\u0148ky pozd\u011Bji",showery_becoming_more_unsettled:"P\u0159eh\xE1\u0148ky, zhor\u0161en\xED",unsettled_rain_later:"Nestabiln\u011B, d\xE9\u0161\u0165 pozd\u011Bji",rain_at_times_worse_later:"D\xE9\u0161\u0165, pozd\u011Bji h\u016F\u0159",rain_at_times_becoming_very_unsettled:"D\xE9\u0161\u0165, velmi nestabiln\u011B",very_unsettled_rain:"Velmi nestabiln\u011B, d\xE9\u0161\u0165",fine_possibly_showers:"P\u011Bkn\u011B, mo\u017En\xE9 p\u0159eh\xE1\u0148ky",fairly_fine_showers_likely:"Docela p\u011Bkn\u011B, p\u0159eh\xE1\u0148ky pravd\u011Bpodobn\xE9",showery_bright_intervals:"P\u0159eh\xE1\u0148ky, protrh\xE1v\xE1n\xED",changeable_some_rain:"Prom\u011Bnliv\u011B, trochu de\u0161t\u011B",unsettled_rain_at_times:"Nestabiln\u011B, ob\u010Das d\xE9\u0161\u0165",rain_at_frequent_intervals:"\u010Cast\xFD d\xE9\u0161\u0165",stormy_much_rain:"Bou\u0159liv\u011B, hodn\u011B de\u0161t\u011B",becoming_fine:"Zlep\u0161uje se",fairly_fine_improving:"Docela p\u011Bkn\u011B, zlep\u0161en\xED",fairly_fine_possibly_showers_early:"Docela p\u011Bkn\u011B, brzk\xE9 p\u0159eh\xE1\u0148ky",showery_early_improving:"Brzk\xE9 p\u0159eh\xE1\u0148ky, zlep\u0161en\xED",changeable_mending:"Prom\u011Bnliv\u011B, zlep\u0161en\xED",rather_unsettled_clearing_later:"Sp\xED\u0161e nestabiln\u011B, pozd\u011Bji protrh\xE1v\xE1n\xED",unsettled_probably_improving:"Nestabiln\u011B, pravd\u011Bpodobn\u011B zlep\u0161en\xED",unsettled_short_fine_intervals:"Nestabiln\u011B, kr\xE1tk\xE9 protrh\xE1v\xE1n\xED",very_unsettled_finer_at_times:"Velmi nestabiln\u011B, ob\u010Das l\xE9pe",stormy_possibly_improving:"Bou\u0159liv\u011B, mo\u017En\xE9 zlep\u0161en\xED",stable:"Stabiln\u011B",sager_fair_improving:"P\u011Bkn\xE9 po\u010Das\xED, zlep\u0161en\xED",sager_fair_tending_to_deteriorate:"P\u011Bkn\u011B, tendence ke zhor\u0161en\xED",sager_fair_no_change:"P\u011Bkn\xE9 po\u010Das\xED, bez v\xFDznamn\xE9 zm\u011Bny",sager_unsettled_rain_likely:"Nestabiln\u011B, d\xE9\u0161\u0165 pravd\u011Bpodobn\xFD",sager_unsettled_probably_improving:"Nestabiln\u011B, pravd\u011Bpodobn\u011B zlep\u0161en\xED",sager_unsettled_rain_at_times:"Nestabiln\u011B, ob\u010Das d\xE9\u0161\u0165",sager_changeable_becoming_fairer:"Prom\u011Bnliv\u011B, zlep\u0161uje se",sager_changeable_becoming_more_unsettled:"Prom\u011Bnliv\u011B, nestabiln\u011Bj\u0161\xED",sager_variable_slowly_improving:"Prom\u011Bnliv\u011B, pomal\xE9 zlep\u0161en\xED",sager_variable_slowly_deteriorating:"Prom\u011Bnliv\u011B, pomal\xE9 zhor\u0161en\xED",sager_variable_some_change:"Prom\u011Bnliv\u011B, o\u010Dek\xE1v\xE1na zm\u011Bna"},da:{settled_fine:"P\xE6nt, stabilt",fine_weather:"P\xE6nt vejr",fine_becoming_less_settled:"P\xE6nt, mindre stabilt",fairly_fine_showery_later:"Rimeligt p\xE6nt, byger senere",showery_becoming_more_unsettled:"Byger, forv\xE6rres",unsettled_rain_later:"Ustabilt, regn senere",rain_at_times_worse_later:"Regn, v\xE6rre senere",rain_at_times_becoming_very_unsettled:"Regn, meget ustabilt",very_unsettled_rain:"Meget ustabilt, regn",fine_possibly_showers:"P\xE6nt, mulige byger",fairly_fine_showers_likely:"Rimeligt p\xE6nt, byger sandsynlige",showery_bright_intervals:"Byger, opklaringer",changeable_some_rain:"Skiftende, lidt regn",unsettled_rain_at_times:"Ustabilt, regn til tider",rain_at_frequent_intervals:"Hyppig regn",stormy_much_rain:"Stormfuldt, meget regn",becoming_fine:"Forbedres",fairly_fine_improving:"Rimeligt p\xE6nt, forbedres",fairly_fine_possibly_showers_early:"Rimeligt p\xE6nt, tidlige byger",showery_early_improving:"Tidlige byger, forbedres",changeable_mending:"Skiftende, forbedres",rather_unsettled_clearing_later:"Ret ustabilt, klarer op senere",unsettled_probably_improving:"Ustabilt, sandsynlig forbedring",unsettled_short_fine_intervals:"Ustabilt, korte opklaringer",very_unsettled_finer_at_times:"Meget ustabilt, til tider bedre",stormy_possibly_improving:"Stormfuldt, mulig forbedring",stable:"Stabilt",sager_fair_improving:"P\xE6nt vejr, forbedres",sager_fair_tending_to_deteriorate:"P\xE6nt vejr, tendens til forv\xE6rring",sager_fair_no_change:"P\xE6nt vejr, ingen v\xE6sentlig \xE6ndring",sager_unsettled_rain_likely:"Ustabilt, regn sandsynlig",sager_unsettled_probably_improving:"Ustabilt, sandsynlig forbedring",sager_unsettled_rain_at_times:"Ustabilt, regn til tider",sager_changeable_becoming_fairer:"Skiftende, bliver p\xE6nere",sager_changeable_becoming_more_unsettled:"Skiftende, mere ustabilt",sager_variable_slowly_improving:"Variabelt, langsom forbedring",sager_variable_slowly_deteriorating:"Variabelt, langsom forv\xE6rring",sager_variable_some_change:"Variabelt, \xE6ndring forventes"},"de-AT":{settled_fine:"Sch\xF6n, best\xE4ndig",fine_weather:"Sch\xF6nes Wetter",fine_becoming_less_settled:"Sch\xF6n, weniger best\xE4ndig",fairly_fine_showery_later:"Ziemlich sch\xF6n, Schauer sp\xE4ter",showery_becoming_more_unsettled:"Schauer, Verschlechterung",unsettled_rain_later:"Unbest\xE4ndig, Regen sp\xE4ter",rain_at_times_worse_later:"Regen, sp\xE4ter schlechter",rain_at_times_becoming_very_unsettled:"Regen, sehr unbest\xE4ndig",very_unsettled_rain:"Sehr unbest\xE4ndig, Regen",fine_possibly_showers:"Sch\xF6n, Schauer m\xF6glich",fairly_fine_showers_likely:"Ziemlich sch\xF6n, Schauer wahrscheinlich",showery_bright_intervals:"Schauer, Auflockerungen",changeable_some_rain:"Wechselhaft, etwas Regen",unsettled_rain_at_times:"Unbest\xE4ndig, zeitweise Regen",rain_at_frequent_intervals:"H\xE4ufiger Regen",stormy_much_rain:"St\xFCrmisch, viel Regen",becoming_fine:"Wird sch\xF6ner",fairly_fine_improving:"Ziemlich sch\xF6n, besser",fairly_fine_possibly_showers_early:"Ziemlich sch\xF6n, fr\xFChe Schauer",showery_early_improving:"Fr\xFChe Schauer, besser",changeable_mending:"Wechselhaft, bessernd",rather_unsettled_clearing_later:"Unbest\xE4ndig, sp\xE4ter klarer",unsettled_probably_improving:"Unbest\xE4ndig, wohl besser",unsettled_short_fine_intervals:"Unbest\xE4ndig, kurze Aufheiterungen",very_unsettled_finer_at_times:"Sehr unbest\xE4ndig, zeitweise besser",stormy_possibly_improving:"St\xFCrmisch, m\xF6glicherweise besser",stable:"Stabil",sager_fair_improving:"Sch\xF6n, bessernd",sager_fair_tending_to_deteriorate:"Sch\xF6n, Tendenz zur Verschlechterung",sager_fair_no_change:"Sch\xF6n, keine wesentliche \xC4nderung",sager_unsettled_rain_likely:"Unbest\xE4ndig, Regen wahrscheinlich",sager_unsettled_probably_improving:"Unbest\xE4ndig, wohl besser",sager_unsettled_rain_at_times:"Unbest\xE4ndig, zeitweise Regen",sager_changeable_becoming_fairer:"Wechselhaft, wird sch\xF6ner",sager_changeable_becoming_more_unsettled:"Wechselhaft, unbest\xE4ndiger",sager_variable_slowly_improving:"Ver\xE4nderlich, langsam besser",sager_variable_slowly_deteriorating:"Ver\xE4nderlich, langsam schlechter",sager_variable_some_change:"Ver\xE4nderlich, \xC4nderung erwartet"},de:{settled_fine:"Sch\xF6n, best\xE4ndig",fine_weather:"Sch\xF6nes Wetter",fine_becoming_less_settled:"Sch\xF6n, weniger best\xE4ndig",fairly_fine_showery_later:"Ziemlich sch\xF6n, Schauer sp\xE4ter",showery_becoming_more_unsettled:"Schauer, Verschlechterung",unsettled_rain_later:"Unbest\xE4ndig, Regen sp\xE4ter",rain_at_times_worse_later:"Regen, sp\xE4ter schlechter",rain_at_times_becoming_very_unsettled:"Regen, sehr unbest\xE4ndig",very_unsettled_rain:"Sehr unbest\xE4ndig, Regen",fine_possibly_showers:"Sch\xF6n, Schauer m\xF6glich",fairly_fine_showers_likely:"Ziemlich sch\xF6n, Schauer wahrscheinlich",showery_bright_intervals:"Schauer, Auflockerungen",changeable_some_rain:"Wechselhaft, etwas Regen",unsettled_rain_at_times:"Unbest\xE4ndig, zeitweise Regen",rain_at_frequent_intervals:"H\xE4ufiger Regen",stormy_much_rain:"St\xFCrmisch, viel Regen",becoming_fine:"Wird sch\xF6ner",fairly_fine_improving:"Ziemlich sch\xF6n, besser",fairly_fine_possibly_showers_early:"Ziemlich sch\xF6n, fr\xFChe Schauer",showery_early_improving:"Fr\xFChe Schauer, besser",changeable_mending:"Wechselhaft, bessernd",rather_unsettled_clearing_later:"Unbest\xE4ndig, sp\xE4ter klarer",unsettled_probably_improving:"Unbest\xE4ndig, wohl besser",unsettled_short_fine_intervals:"Unbest\xE4ndig, kurze Aufheiterungen",very_unsettled_finer_at_times:"Sehr unbest\xE4ndig, zeitweise besser",stormy_possibly_improving:"St\xFCrmisch, m\xF6glicherweise besser",stable:"Stabil",sager_fair_improving:"Sch\xF6n, bessernd",sager_fair_tending_to_deteriorate:"Sch\xF6n, Tendenz zur Verschlechterung",sager_fair_no_change:"Sch\xF6n, keine wesentliche \xC4nderung",sager_unsettled_rain_likely:"Unbest\xE4ndig, Regen wahrscheinlich",sager_unsettled_probably_improving:"Unbest\xE4ndig, wohl besser",sager_unsettled_rain_at_times:"Unbest\xE4ndig, zeitweise Regen",sager_changeable_becoming_fairer:"Wechselhaft, wird sch\xF6ner",sager_changeable_becoming_more_unsettled:"Wechselhaft, unbest\xE4ndiger",sager_variable_slowly_improving:"Ver\xE4nderlich, langsam besser",sager_variable_slowly_deteriorating:"Ver\xE4nderlich, langsam schlechter",sager_variable_some_change:"Ver\xE4nderlich, \xC4nderung erwartet"},es:{settled_fine:"Buen tiempo estable",fine_weather:"Buen tiempo",fine_becoming_less_settled:"Buen tiempo, menos estable",fairly_fine_showery_later:"Bastante bueno, chubascos despu\xE9s",showery_becoming_more_unsettled:"Chubascos, empeorando",unsettled_rain_later:"Inestable, lluvia despu\xE9s",rain_at_times_worse_later:"Lluvia, empeorando despu\xE9s",rain_at_times_becoming_very_unsettled:"Lluvia, muy inestable",very_unsettled_rain:"Muy inestable, lluvia",fine_possibly_showers:"Buen tiempo, posibles chubascos",fairly_fine_showers_likely:"Bastante bueno, chubascos probables",showery_bright_intervals:"Chubascos, claros",changeable_some_rain:"Variable, algo de lluvia",unsettled_rain_at_times:"Inestable, lluvia a intervalos",rain_at_frequent_intervals:"Lluvia frecuente",stormy_much_rain:"Tormentoso, mucha lluvia",becoming_fine:"Mejorando",fairly_fine_improving:"Bastante bueno, mejorando",fairly_fine_possibly_showers_early:"Bastante bueno, chubascos tempranos",showery_early_improving:"Chubascos tempranos, mejorando",changeable_mending:"Variable, mejorando",rather_unsettled_clearing_later:"Inestable, despejando despu\xE9s",unsettled_probably_improving:"Inestable, probable mejora",unsettled_short_fine_intervals:"Inestable, claros breves",very_unsettled_finer_at_times:"Muy inestable, mejor a ratos",stormy_possibly_improving:"Tormentoso, posible mejora",stable:"Estable",sager_fair_improving:"Buen tiempo, mejorando",sager_fair_tending_to_deteriorate:"Buen tiempo, tendencia a empeorar",sager_fair_no_change:"Buen tiempo, sin cambios importantes",sager_unsettled_rain_likely:"Inestable, lluvia probable",sager_unsettled_probably_improving:"Inestable, probable mejora",sager_unsettled_rain_at_times:"Inestable, lluvia a intervalos",sager_changeable_becoming_fairer:"Variable, mejorando",sager_changeable_becoming_more_unsettled:"Variable, m\xE1s inestable",sager_variable_slowly_improving:"Variable, mejorando lentamente",sager_variable_slowly_deteriorating:"Variable, empeorando lentamente",sager_variable_some_change:"Variable, se esperan cambios"},hu:{settled_fine:"Sz\xE9p, stabil",fine_weather:"Sz\xE9p id\u0151",fine_becoming_less_settled:"Sz\xE9p, kev\xE9sb\xE9 stabil",fairly_fine_showery_later:"Eg\xE9sz sz\xE9p, k\xE9s\u0151bb z\xE1porok",showery_becoming_more_unsettled:"Z\xE1porok, roml\xE1s",unsettled_rain_later:"V\xE1ltoz\xE9kony, k\xE9s\u0151bb es\u0151",rain_at_times_worse_later:"Es\u0151, k\xE9s\u0151bb romlik",rain_at_times_becoming_very_unsettled:"Es\u0151, nagyon v\xE1ltoz\xE9kony",very_unsettled_rain:"Nagyon v\xE1ltoz\xE9kony, es\u0151",fine_possibly_showers:"Sz\xE9p, lehets\xE9ges z\xE1porok",fairly_fine_showers_likely:"Eg\xE9sz sz\xE9p, z\xE1porok val\xF3sz\xEDn\u0171ek",showery_bright_intervals:"Z\xE1porok, felh\u0151szakad\xE1sok",changeable_some_rain:"V\xE1ltoz\xE9kony, kev\xE9s es\u0151",unsettled_rain_at_times:"V\xE1ltoz\xE9kony, id\u0151nk\xE9nt es\u0151",rain_at_frequent_intervals:"Gyakori es\u0151",stormy_much_rain:"Viharos, sok es\u0151",becoming_fine:"Javul",fairly_fine_improving:"Eg\xE9sz sz\xE9p, javul",fairly_fine_possibly_showers_early:"Eg\xE9sz sz\xE9p, korai z\xE1porok",showery_early_improving:"Korai z\xE1porok, javul",changeable_mending:"V\xE1ltoz\xE9kony, javul",rather_unsettled_clearing_later:"Ink\xE1bb v\xE1ltoz\xE9kony, k\xE9s\u0151bb der\xFCl",unsettled_probably_improving:"V\xE1ltoz\xE9kony, val\xF3sz\xEDn\u0171 javul\xE1s",unsettled_short_fine_intervals:"V\xE1ltoz\xE9kony, r\xF6vid der\xFCl\xE9sek",very_unsettled_finer_at_times:"Nagyon v\xE1ltoz\xE9kony, id\u0151nk\xE9nt jobb",stormy_possibly_improving:"Viharos, lehets\xE9ges javul\xE1s",stable:"Stabil",sager_fair_improving:"Sz\xE9p id\u0151, javul",sager_fair_tending_to_deteriorate:"Sz\xE9p id\u0151, roml\xE1sra hajlik",sager_fair_no_change:"Sz\xE9p id\u0151, nincs jelent\u0151s v\xE1ltoz\xE1s",sager_unsettled_rain_likely:"V\xE1ltoz\xE9kony, es\u0151 val\xF3sz\xEDn\u0171",sager_unsettled_probably_improving:"V\xE1ltoz\xE9kony, val\xF3sz\xEDn\u0171 javul\xE1s",sager_unsettled_rain_at_times:"V\xE1ltoz\xE9kony, id\u0151nk\xE9nt es\u0151",sager_changeable_becoming_fairer:"V\xE1ltoz\xE9kony, javul",sager_changeable_becoming_more_unsettled:"V\xE1ltoz\xE9kony, v\xE1ltoz\xE9konyabb",sager_variable_slowly_improving:"V\xE1ltoz\xF3, lass\xFA javul\xE1s",sager_variable_slowly_deteriorating:"V\xE1ltoz\xF3, lass\xFA roml\xE1s",sager_variable_some_change:"V\xE1ltoz\xF3, v\xE1ltoz\xE1s v\xE1rhat\xF3"},it:{settled_fine:"Bel tempo stabile",fine_weather:"Bel tempo",fine_becoming_less_settled:"Bel tempo, meno stabile",fairly_fine_showery_later:"Abbastanza bello, rovesci dopo",showery_becoming_more_unsettled:"Rovesci, peggioramento",unsettled_rain_later:"Instabile, pioggia dopo",rain_at_times_worse_later:"Pioggia, peggioramento dopo",rain_at_times_becoming_very_unsettled:"Pioggia, molto instabile",very_unsettled_rain:"Molto instabile, pioggia",fine_possibly_showers:"Bel tempo, possibili rovesci",fairly_fine_showers_likely:"Abbastanza bello, rovesci probabili",showery_bright_intervals:"Rovesci, schiarite",changeable_some_rain:"Variabile, qualche pioggia",unsettled_rain_at_times:"Instabile, pioggia a tratti",rain_at_frequent_intervals:"Pioggia frequente",stormy_much_rain:"Tempestoso, molta pioggia",becoming_fine:"In miglioramento",fairly_fine_improving:"Abbastanza bello, in miglioramento",fairly_fine_possibly_showers_early:"Abbastanza bello, rovesci precoci",showery_early_improving:"Rovesci precoci, in miglioramento",changeable_mending:"Variabile, in miglioramento",rather_unsettled_clearing_later:"Instabile, schiarite dopo",unsettled_probably_improving:"Instabile, probabile miglioramento",unsettled_short_fine_intervals:"Instabile, brevi schiarite",very_unsettled_finer_at_times:"Molto instabile, migliora a tratti",stormy_possibly_improving:"Tempestoso, possibile miglioramento",stable:"Stabile",sager_fair_improving:"Bel tempo, in miglioramento",sager_fair_tending_to_deteriorate:"Bel tempo, tendenza al peggioramento",sager_fair_no_change:"Bel tempo, nessun cambiamento importante",sager_unsettled_rain_likely:"Instabile, pioggia probabile",sager_unsettled_probably_improving:"Instabile, probabile miglioramento",sager_unsettled_rain_at_times:"Instabile, pioggia a tratti",sager_changeable_becoming_fairer:"Variabile, in miglioramento",sager_changeable_becoming_more_unsettled:"Variabile, pi\xF9 instabile",sager_variable_slowly_improving:"Variabile, miglioramento lento",sager_variable_slowly_deteriorating:"Variabile, peggioramento lento",sager_variable_some_change:"Variabile, cambiamenti attesi"},ja:{settled_fine:"\u5B89\u5B9A\u3057\u305F\u597D\u5929",fine_weather:"\u597D\u5929",fine_becoming_less_settled:"\u597D\u5929\u3001\u4E0D\u5B89\u5B9A\u5316",fairly_fine_showery_later:"\u3084\u3084\u597D\u5929\u3001\u5F8C\u306B\u306B\u308F\u304B\u96E8",showery_becoming_more_unsettled:"\u306B\u308F\u304B\u96E8\u3001\u60AA\u5316",unsettled_rain_later:"\u4E0D\u5B89\u5B9A\u3001\u5F8C\u306B\u96E8",rain_at_times_worse_later:"\u6642\u3005\u96E8\u3001\u5F8C\u306B\u60AA\u5316",rain_at_times_becoming_very_unsettled:"\u6642\u3005\u96E8\u3001\u975E\u5E38\u306B\u4E0D\u5B89\u5B9A",very_unsettled_rain:"\u975E\u5E38\u306B\u4E0D\u5B89\u5B9A\u3001\u96E8",fine_possibly_showers:"\u597D\u5929\u3001\u306B\u308F\u304B\u96E8\u306E\u53EF\u80FD\u6027",fairly_fine_showers_likely:"\u3084\u3084\u597D\u5929\u3001\u306B\u308F\u304B\u96E8\u306E\u53EF\u80FD\u6027\u5927",showery_bright_intervals:"\u306B\u308F\u304B\u96E8\u3001\u6674\u308C\u9593",changeable_some_rain:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u5C0F\u96E8",unsettled_rain_at_times:"\u4E0D\u5B89\u5B9A\u3001\u6642\u3005\u96E8",rain_at_frequent_intervals:"\u983B\u7E41\u306A\u96E8",stormy_much_rain:"\u5D50\u3001\u5927\u96E8",becoming_fine:"\u56DE\u5FA9\u50BE\u5411",fairly_fine_improving:"\u3084\u3084\u597D\u5929\u3001\u6539\u5584",fairly_fine_possibly_showers_early:"\u3084\u3084\u597D\u5929\u3001\u65E9\u3044\u306B\u308F\u304B\u96E8",showery_early_improving:"\u65E9\u3044\u306B\u308F\u304B\u96E8\u3001\u6539\u5584",changeable_mending:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u6539\u5584",rather_unsettled_clearing_later:"\u3084\u3084\u4E0D\u5B89\u5B9A\u3001\u5F8C\u306B\u6674\u308C",unsettled_probably_improving:"\u4E0D\u5B89\u5B9A\u3001\u304A\u305D\u3089\u304F\u6539\u5584",unsettled_short_fine_intervals:"\u4E0D\u5B89\u5B9A\u3001\u77ED\u3044\u6674\u308C\u9593",very_unsettled_finer_at_times:"\u975E\u5E38\u306B\u4E0D\u5B89\u5B9A\u3001\u6642\u3005\u6539\u5584",stormy_possibly_improving:"\u5D50\u3001\u6539\u5584\u306E\u53EF\u80FD\u6027",stable:"\u5B89\u5B9A",sager_fair_improving:"\u597D\u5929\u3001\u6539\u5584",sager_fair_tending_to_deteriorate:"\u597D\u5929\u3001\u60AA\u5316\u50BE\u5411",sager_fair_no_change:"\u597D\u5929\u3001\u5927\u304D\u306A\u5909\u5316\u306A\u3057",sager_unsettled_rain_likely:"\u4E0D\u5B89\u5B9A\u3001\u96E8\u306E\u53EF\u80FD\u6027",sager_unsettled_probably_improving:"\u4E0D\u5B89\u5B9A\u3001\u304A\u305D\u3089\u304F\u6539\u5584",sager_unsettled_rain_at_times:"\u4E0D\u5B89\u5B9A\u3001\u6642\u3005\u96E8",sager_changeable_becoming_fairer:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u6539\u5584\u50BE\u5411",sager_changeable_becoming_more_unsettled:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u3088\u308A\u4E0D\u5B89\u5B9A",sager_variable_slowly_improving:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u7DE9\u3084\u304B\u306B\u6539\u5584",sager_variable_slowly_deteriorating:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u7DE9\u3084\u304B\u306B\u60AA\u5316",sager_variable_some_change:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u5909\u5316\u3042\u308A"},ko:{settled_fine:"\uB9D1\uACE0 \uC548\uC815\uC801",fine_weather:"\uC88B\uC740 \uB0A0\uC528",fine_becoming_less_settled:"\uC88B\uC74C, \uBD88\uC548\uC815\uD574\uC9D0",fairly_fine_showery_later:"\uAF64 \uC88B\uC74C, \uB098\uC911\uC5D0 \uC18C\uB098\uAE30",showery_becoming_more_unsettled:"\uC18C\uB098\uAE30, \uC545\uD654",unsettled_rain_later:"\uBD88\uC548\uC815, \uB098\uC911\uC5D0 \uBE44",rain_at_times_worse_later:"\uBE44, \uB098\uC911\uC5D0 \uC545\uD654",rain_at_times_becoming_very_unsettled:"\uBE44, \uB9E4\uC6B0 \uBD88\uC548\uC815",very_unsettled_rain:"\uB9E4\uC6B0 \uBD88\uC548\uC815, \uBE44",fine_possibly_showers:"\uC88B\uC74C, \uC18C\uB098\uAE30 \uAC00\uB2A5",fairly_fine_showers_likely:"\uAF64 \uC88B\uC74C, \uC18C\uB098\uAE30 \uAC00\uB2A5\uC131",showery_bright_intervals:"\uC18C\uB098\uAE30, \uAC04\uD5D0\uC801 \uB9D1\uC74C",changeable_some_rain:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uC57D\uD55C \uBE44",unsettled_rain_at_times:"\uBD88\uC548\uC815, \uB54C\uB54C\uB85C \uBE44",rain_at_frequent_intervals:"\uC7A6\uC740 \uBE44",stormy_much_rain:"\uD3ED\uD48D, \uB9CE\uC740 \uBE44",becoming_fine:"\uAC1C\uC120 \uC911",fairly_fine_improving:"\uAF64 \uC88B\uC74C, \uAC1C\uC120",fairly_fine_possibly_showers_early:"\uAF64 \uC88B\uC74C, \uC774\uB978 \uC18C\uB098\uAE30",showery_early_improving:"\uC774\uB978 \uC18C\uB098\uAE30, \uAC1C\uC120",changeable_mending:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uAC1C\uC120",rather_unsettled_clearing_later:"\uB2E4\uC18C \uBD88\uC548\uC815, \uB098\uC911\uC5D0 \uAC2C",unsettled_probably_improving:"\uBD88\uC548\uC815, \uC544\uB9C8 \uAC1C\uC120",unsettled_short_fine_intervals:"\uBD88\uC548\uC815, \uC9E7\uC740 \uB9D1\uC74C",very_unsettled_finer_at_times:"\uB9E4\uC6B0 \uBD88\uC548\uC815, \uB54C\uB54C\uB85C \uAC1C\uC120",stormy_possibly_improving:"\uD3ED\uD48D, \uAC1C\uC120 \uAC00\uB2A5",stable:"\uC548\uC815",sager_fair_improving:"\uC88B\uC740 \uB0A0\uC528, \uAC1C\uC120",sager_fair_tending_to_deteriorate:"\uC88B\uC74C, \uC545\uD654 \uACBD\uD5A5",sager_fair_no_change:"\uC88B\uC740 \uB0A0\uC528, \uD070 \uBCC0\uD654 \uC5C6\uC74C",sager_unsettled_rain_likely:"\uBD88\uC548\uC815, \uBE44 \uAC00\uB2A5\uC131",sager_unsettled_probably_improving:"\uBD88\uC548\uC815, \uC544\uB9C8 \uAC1C\uC120",sager_unsettled_rain_at_times:"\uBD88\uC548\uC815, \uB54C\uB54C\uB85C \uBE44",sager_changeable_becoming_fairer:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uAC1C\uC120 \uACBD\uD5A5",sager_changeable_becoming_more_unsettled:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uB354 \uBD88\uC548\uC815",sager_variable_slowly_improving:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uC11C\uC11C\uD788 \uAC1C\uC120",sager_variable_slowly_deteriorating:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uC11C\uC11C\uD788 \uC545\uD654",sager_variable_some_change:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uBCC0\uD654 \uC608\uC0C1"},nb:{settled_fine:"Fint, stabilt",fine_weather:"Fint v\xE6r",fine_becoming_less_settled:"Fint, mindre stabilt",fairly_fine_showery_later:"Ganske fint, byger senere",showery_becoming_more_unsettled:"Byger, forverres",unsettled_rain_later:"Ustabilt, regn senere",rain_at_times_worse_later:"Regn, verre senere",rain_at_times_becoming_very_unsettled:"Regn, sv\xE6rt ustabilt",very_unsettled_rain:"Sv\xE6rt ustabilt, regn",fine_possibly_showers:"Fint, mulige byger",fairly_fine_showers_likely:"Ganske fint, byger sannsynlige",showery_bright_intervals:"Byger, opphold",changeable_some_rain:"Skiftende, litt regn",unsettled_rain_at_times:"Ustabilt, regn av og til",rain_at_frequent_intervals:"Hyppig regn",stormy_much_rain:"Stormfullt, mye regn",becoming_fine:"Forbedres",fairly_fine_improving:"Ganske fint, forbedres",fairly_fine_possibly_showers_early:"Ganske fint, tidlige byger",showery_early_improving:"Tidlige byger, forbedres",changeable_mending:"Skiftende, forbedres",rather_unsettled_clearing_later:"Ganske ustabilt, klarner senere",unsettled_probably_improving:"Ustabilt, sannsynlig forbedring",unsettled_short_fine_intervals:"Ustabilt, korte opphold",very_unsettled_finer_at_times:"Sv\xE6rt ustabilt, til tider bedre",stormy_possibly_improving:"Stormfullt, mulig forbedring",stable:"Stabilt",sager_fair_improving:"Fint v\xE6r, forbedres",sager_fair_tending_to_deteriorate:"Fint v\xE6r, tendens til forverring",sager_fair_no_change:"Fint v\xE6r, ingen viktig endring",sager_unsettled_rain_likely:"Ustabilt, regn sannsynlig",sager_unsettled_probably_improving:"Ustabilt, sannsynlig forbedring",sager_unsettled_rain_at_times:"Ustabilt, regn av og til",sager_changeable_becoming_fairer:"Skiftende, blir finere",sager_changeable_becoming_more_unsettled:"Skiftende, mer ustabilt",sager_variable_slowly_improving:"Variabelt, langsom forbedring",sager_variable_slowly_deteriorating:"Variabelt, langsom forverring",sager_variable_some_change:"Variabelt, endring forventes"},nl:{settled_fine:"Mooi, stabiel",fine_weather:"Mooi weer",fine_becoming_less_settled:"Mooi, minder stabiel",fairly_fine_showery_later:"Redelijk mooi, buien later",showery_becoming_more_unsettled:"Buien, verslechtering",unsettled_rain_later:"Onstabiel, regen later",rain_at_times_worse_later:"Regen, later slechter",rain_at_times_becoming_very_unsettled:"Regen, zeer onstabiel",very_unsettled_rain:"Zeer onstabiel, regen",fine_possibly_showers:"Mooi, mogelijk buien",fairly_fine_showers_likely:"Redelijk mooi, buien waarschijnlijk",showery_bright_intervals:"Buien, opklaringen",changeable_some_rain:"Wisselvallig, wat regen",unsettled_rain_at_times:"Onstabiel, regen af en toe",rain_at_frequent_intervals:"Frequente regen",stormy_much_rain:"Stormachtig, veel regen",becoming_fine:"Wordt mooier",fairly_fine_improving:"Redelijk mooi, verbetering",fairly_fine_possibly_showers_early:"Redelijk mooi, vroege buien",showery_early_improving:"Vroege buien, verbetering",changeable_mending:"Wisselvallig, verbetering",rather_unsettled_clearing_later:"Onstabiel, later opklaring",unsettled_probably_improving:"Onstabiel, waarschijnlijk beter",unsettled_short_fine_intervals:"Onstabiel, korte opklaringen",very_unsettled_finer_at_times:"Zeer onstabiel, soms beter",stormy_possibly_improving:"Stormachtig, mogelijk beter",stable:"Stabiel",sager_fair_improving:"Mooi weer, verbetering",sager_fair_tending_to_deteriorate:"Mooi weer, neiging tot verslechtering",sager_fair_no_change:"Mooi weer, geen belangrijke verandering",sager_unsettled_rain_likely:"Onstabiel, regen waarschijnlijk",sager_unsettled_probably_improving:"Onstabiel, waarschijnlijk beter",sager_unsettled_rain_at_times:"Onstabiel, regen af en toe",sager_changeable_becoming_fairer:"Wisselvallig, wordt mooier",sager_changeable_becoming_more_unsettled:"Wisselvallig, onstabieler",sager_variable_slowly_improving:"Variabel, langzaam beter",sager_variable_slowly_deteriorating:"Variabel, langzaam slechter",sager_variable_some_change:"Variabel, verandering verwacht"},pl:{settled_fine:"\u0141adna, stabilna pogoda",fine_weather:"\u0141adna pogoda",fine_becoming_less_settled:"\u0141adnie, mniej stabilnie",fairly_fine_showery_later:"Do\u015B\u0107 \u0142adnie, p\xF3\u017Aniej przelotne",showery_becoming_more_unsettled:"Przelotne, pogorszenie",unsettled_rain_later:"Niestabilnie, p\xF3\u017Aniej deszcz",rain_at_times_worse_later:"Deszcz, p\xF3\u017Aniej gorzej",rain_at_times_becoming_very_unsettled:"Deszcz, bardzo niestabilnie",very_unsettled_rain:"Bardzo niestabilnie, deszcz",fine_possibly_showers:"\u0141adnie, mo\u017Cliwe przelotne",fairly_fine_showers_likely:"Do\u015B\u0107 \u0142adnie, przelotne prawdopodobne",showery_bright_intervals:"Przelotne, przeja\u015Bnienia",changeable_some_rain:"Zmiennie, odrobin\u0119 deszczu",unsettled_rain_at_times:"Niestabilnie, deszcz okresami",rain_at_frequent_intervals:"Cz\u0119sty deszcz",stormy_much_rain:"Burzowo, du\u017Co deszczu",becoming_fine:"Poprawa pogody",fairly_fine_improving:"Do\u015B\u0107 \u0142adnie, poprawa",fairly_fine_possibly_showers_early:"Do\u015B\u0107 \u0142adnie, wczesne przelotne",showery_early_improving:"Wczesne przelotne, poprawa",changeable_mending:"Zmiennie, poprawa",rather_unsettled_clearing_later:"Niestabilnie, p\xF3\u017Aniej przeja\u015Bnienia",unsettled_probably_improving:"Niestabilnie, prawdopodobna poprawa",unsettled_short_fine_intervals:"Niestabilnie, kr\xF3tkie przeja\u015Bnienia",very_unsettled_finer_at_times:"Bardzo niestabilnie, chwilami lepiej",stormy_possibly_improving:"Burzowo, mo\u017Cliwa poprawa",stable:"Stabilnie",sager_fair_improving:"\u0141adna pogoda, poprawa",sager_fair_tending_to_deteriorate:"\u0141adna pogoda, tendencja do pogorszenia",sager_fair_no_change:"\u0141adna pogoda, bez istotnych zmian",sager_unsettled_rain_likely:"Niestabilnie, deszcz prawdopodobny",sager_unsettled_probably_improving:"Niestabilnie, prawdopodobna poprawa",sager_unsettled_rain_at_times:"Niestabilnie, deszcz okresami",sager_changeable_becoming_fairer:"Zmiennie, poprawa",sager_changeable_becoming_more_unsettled:"Zmiennie, bardziej niestabilnie",sager_variable_slowly_improving:"Zmiennie, powolna poprawa",sager_variable_slowly_deteriorating:"Zmiennie, powolne pogorszenie",sager_variable_some_change:"Zmiennie, oczekiwane zmiany"},pt:{settled_fine:"Bom tempo est\xE1vel",fine_weather:"Bom tempo",fine_becoming_less_settled:"Bom tempo, menos est\xE1vel",fairly_fine_showery_later:"Razoavelmente bom, aguaceiros depois",showery_becoming_more_unsettled:"Aguaceiros, piora",unsettled_rain_later:"Inst\xE1vel, chuva depois",rain_at_times_worse_later:"Chuva, piora depois",rain_at_times_becoming_very_unsettled:"Chuva, muito inst\xE1vel",very_unsettled_rain:"Muito inst\xE1vel, chuva",fine_possibly_showers:"Bom tempo, poss\xEDveis aguaceiros",fairly_fine_showers_likely:"Razoavelmente bom, aguaceiros prov\xE1veis",showery_bright_intervals:"Aguaceiros, claros",changeable_some_rain:"Vari\xE1vel, alguma chuva",unsettled_rain_at_times:"Inst\xE1vel, chuva por vezes",rain_at_frequent_intervals:"Chuva frequente",stormy_much_rain:"Tempestuoso, muita chuva",becoming_fine:"A melhorar",fairly_fine_improving:"Razoavelmente bom, a melhorar",fairly_fine_possibly_showers_early:"Razoavelmente bom, aguaceiros cedo",showery_early_improving:"Aguaceiros cedo, a melhorar",changeable_mending:"Vari\xE1vel, a melhorar",rather_unsettled_clearing_later:"Inst\xE1vel, clareia depois",unsettled_probably_improving:"Inst\xE1vel, prov\xE1vel melhoria",unsettled_short_fine_intervals:"Inst\xE1vel, claros breves",very_unsettled_finer_at_times:"Muito inst\xE1vel, melhora \xE0s vezes",stormy_possibly_improving:"Tempestuoso, poss\xEDvel melhoria",stable:"Est\xE1vel",sager_fair_improving:"Bom tempo, a melhorar",sager_fair_tending_to_deteriorate:"Bom tempo, tend\xEAncia a piorar",sager_fair_no_change:"Bom tempo, sem altera\xE7\xE3o importante",sager_unsettled_rain_likely:"Inst\xE1vel, chuva prov\xE1vel",sager_unsettled_probably_improving:"Inst\xE1vel, prov\xE1vel melhoria",sager_unsettled_rain_at_times:"Inst\xE1vel, chuva por vezes",sager_changeable_becoming_fairer:"Vari\xE1vel, a melhorar",sager_changeable_becoming_more_unsettled:"Vari\xE1vel, mais inst\xE1vel",sager_variable_slowly_improving:"Vari\xE1vel, melhoria lenta",sager_variable_slowly_deteriorating:"Vari\xE1vel, piora lenta",sager_variable_some_change:"Vari\xE1vel, mudan\xE7as esperadas"},sv:{settled_fine:"Fint, stabilt",fine_weather:"Fint v\xE4der",fine_becoming_less_settled:"Fint, mindre stabilt",fairly_fine_showery_later:"Ganska fint, skurar senare",showery_becoming_more_unsettled:"Skurar, f\xF6rs\xE4mras",unsettled_rain_later:"Ostadigt, regn senare",rain_at_times_worse_later:"Regn, s\xE4mre senare",rain_at_times_becoming_very_unsettled:"Regn, mycket ostadigt",very_unsettled_rain:"Mycket ostadigt, regn",fine_possibly_showers:"Fint, m\xF6jliga skurar",fairly_fine_showers_likely:"Ganska fint, skurar troliga",showery_bright_intervals:"Skurar, uppeh\xE5ll",changeable_some_rain:"Ombytligt, lite regn",unsettled_rain_at_times:"Ostadigt, regn ibland",rain_at_frequent_intervals:"Frekvent regn",stormy_much_rain:"Stormigt, mycket regn",becoming_fine:"F\xF6rb\xE4ttras",fairly_fine_improving:"Ganska fint, f\xF6rb\xE4ttras",fairly_fine_possibly_showers_early:"Ganska fint, tidiga skurar",showery_early_improving:"Tidiga skurar, f\xF6rb\xE4ttras",changeable_mending:"Ombytligt, f\xF6rb\xE4ttras",rather_unsettled_clearing_later:"Ganska ostadigt, klarnar senare",unsettled_probably_improving:"Ostadigt, troligen f\xF6rb\xE4ttring",unsettled_short_fine_intervals:"Ostadigt, korta uppeh\xE5ll",very_unsettled_finer_at_times:"Mycket ostadigt, ibland b\xE4ttre",stormy_possibly_improving:"Stormigt, m\xF6jlig f\xF6rb\xE4ttring",stable:"Stabilt",sager_fair_improving:"Fint v\xE4der, f\xF6rb\xE4ttras",sager_fair_tending_to_deteriorate:"Fint v\xE4der, tendens att f\xF6rs\xE4mras",sager_fair_no_change:"Fint v\xE4der, ingen viktig f\xF6r\xE4ndring",sager_unsettled_rain_likely:"Ostadigt, regn troligt",sager_unsettled_probably_improving:"Ostadigt, troligen f\xF6rb\xE4ttring",sager_unsettled_rain_at_times:"Ostadigt, regn ibland",sager_changeable_becoming_fairer:"Ombytligt, blir finare",sager_changeable_becoming_more_unsettled:"Ombytligt, mer ostadigt",sager_variable_slowly_improving:"Variabelt, l\xE5ngsam f\xF6rb\xE4ttring",sager_variable_slowly_deteriorating:"Variabelt, l\xE5ngsam f\xF6rs\xE4mring",sager_variable_some_change:"Variabelt, f\xF6r\xE4ndring v\xE4ntas"},tr:{settled_fine:"G\xFCzel, stabil",fine_weather:"G\xFCzel hava",fine_becoming_less_settled:"G\xFCzel, daha az stabil",fairly_fine_showery_later:"Olduk\xE7a g\xFCzel, sonra sa\u011Fanak",showery_becoming_more_unsettled:"Sa\u011Fanak, k\xF6t\xFCle\u015Fme",unsettled_rain_later:"Dalgal\u0131, sonra ya\u011Fmur",rain_at_times_worse_later:"Ya\u011Fmur, sonra k\xF6t\xFCle\u015Fme",rain_at_times_becoming_very_unsettled:"Ya\u011Fmur, \xE7ok dalgal\u0131",very_unsettled_rain:"\xC7ok dalgal\u0131, ya\u011Fmur",fine_possibly_showers:"G\xFCzel, sa\u011Fanak olas\u0131",fairly_fine_showers_likely:"Olduk\xE7a g\xFCzel, sa\u011Fanak muhtemel",showery_bright_intervals:"Sa\u011Fanak, a\xE7\u0131lmalar",changeable_some_rain:"De\u011Fi\u015Fken, biraz ya\u011Fmur",unsettled_rain_at_times:"Dalgal\u0131, ara s\u0131ra ya\u011Fmur",rain_at_frequent_intervals:"S\u0131k ya\u011Fmur",stormy_much_rain:"F\u0131rt\u0131nal\u0131, \xE7ok ya\u011Fmur",becoming_fine:"D\xFCzeliyor",fairly_fine_improving:"Olduk\xE7a g\xFCzel, d\xFCzeliyor",fairly_fine_possibly_showers_early:"Olduk\xE7a g\xFCzel, erken sa\u011Fanak",showery_early_improving:"Erken sa\u011Fanak, d\xFCzeliyor",changeable_mending:"De\u011Fi\u015Fken, d\xFCzeliyor",rather_unsettled_clearing_later:"Dalgal\u0131, sonra a\xE7\u0131l\u0131yor",unsettled_probably_improving:"Dalgal\u0131, muhtemelen d\xFCzeliyor",unsettled_short_fine_intervals:"Dalgal\u0131, k\u0131sa a\xE7\u0131lmalar",very_unsettled_finer_at_times:"\xC7ok dalgal\u0131, ara s\u0131ra d\xFCzeliyor",stormy_possibly_improving:"F\u0131rt\u0131nal\u0131, d\xFCzelme olas\u0131",stable:"Stabil",sager_fair_improving:"G\xFCzel hava, d\xFCzeliyor",sager_fair_tending_to_deteriorate:"G\xFCzel hava, k\xF6t\xFCle\u015Fme e\u011Filimi",sager_fair_no_change:"G\xFCzel hava, \xF6nemli de\u011Fi\u015Fiklik yok",sager_unsettled_rain_likely:"Dalgal\u0131, ya\u011Fmur olas\u0131",sager_unsettled_probably_improving:"Dalgal\u0131, muhtemelen d\xFCzeliyor",sager_unsettled_rain_at_times:"Dalgal\u0131, ara s\u0131ra ya\u011Fmur",sager_changeable_becoming_fairer:"De\u011Fi\u015Fken, d\xFCzeliyor",sager_changeable_becoming_more_unsettled:"De\u011Fi\u015Fken, daha dalgal\u0131",sager_variable_slowly_improving:"De\u011Fi\u015Fken, yava\u015F d\xFCzelme",sager_variable_slowly_deteriorating:"De\u011Fi\u015Fken, yava\u015F k\xF6t\xFCle\u015Fme",sager_variable_some_change:"De\u011Fi\u015Fken, de\u011Fi\u015Fiklik bekleniyor"},uk:{settled_fine:"\u042F\u0441\u043D\u043E, \u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E",fine_weather:"\u0413\u0430\u0440\u043D\u0430 \u043F\u043E\u0433\u043E\u0434\u0430",fine_becoming_less_settled:"\u0414\u043E\u0431\u0440\u0435, \u043C\u043E\u0436\u043B\u0438\u0432\u0435 \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",fairly_fine_showery_later:"\u0414\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0431\u0440\u0435, \u0437\u0433\u043E\u0434\u043E\u043C \u0434\u043E\u0449\u0456",showery_becoming_more_unsettled:"\u0414\u043E\u0449\u043E\u0432\u043E, \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",unsettled_rain_later:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449 \u043F\u0456\u0437\u043D\u0456\u0448\u0435",rain_at_times_worse_later:"\u0414\u043E\u0449\u0456, \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F \u043F\u0456\u0437\u043D\u0456\u0448\u0435",rain_at_times_becoming_very_unsettled:"\u0414\u043E\u0449\u0456, \u0434\u0443\u0436\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E",very_unsettled_rain:"\u0414\u0443\u0436\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449",fine_possibly_showers:"\u0414\u043E\u0431\u0440\u0435, \u043C\u043E\u0436\u043B\u0438\u0432\u0456 \u0437\u043B\u0438\u0432\u0438",fairly_fine_showers_likely:"\u0414\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0431\u0440\u0435, \u0437\u043B\u0438\u0432\u0438 \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0456",showery_bright_intervals:"\u0417\u043B\u0438\u0432\u0438, \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F",changeable_some_rain:"\u041C\u0456\u043D\u043B\u0438\u0432\u0430, \u043D\u0435\u0432\u0435\u043B\u0438\u043A\u0438\u0439 \u0434\u043E\u0449",unsettled_rain_at_times:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449\u0456 \u043F\u0435\u0440\u0456\u043E\u0434\u0438\u0447\u043D\u043E",rain_at_frequent_intervals:"\u0427\u0430\u0441\u0442\u0456 \u0434\u043E\u0449\u0456",stormy_much_rain:"\u0428\u0442\u043E\u0440\u043C\u043E\u0432\u043E, \u0441\u0438\u043B\u044C\u043D\u0456 \u0434\u043E\u0449\u0456",becoming_fine:"\u041F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u043F\u043E\u0433\u043E\u0434\u0438",fairly_fine_improving:"\u0414\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0431\u0440\u0435, \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",fairly_fine_possibly_showers_early:"\u0414\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0431\u0440\u0435, \u0440\u0430\u043D\u043D\u0456 \u0437\u043B\u0438\u0432\u0438",showery_early_improving:"\u0420\u0430\u043D\u043D\u0456 \u0437\u043B\u0438\u0432\u0438, \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",changeable_mending:"\u041C\u0456\u043D\u043B\u0438\u0432\u0430, \u043F\u043E\u043A\u0440\u0430\u0449\u0443\u0454\u0442\u044C\u0441\u044F",rather_unsettled_clearing_later:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F \u043F\u0456\u0437\u043D\u0456\u0448\u0435",unsettled_probably_improving:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0435 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",unsettled_short_fine_intervals:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u043A\u043E\u0440\u043E\u0442\u043A\u0456 \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F",very_unsettled_finer_at_times:"\u0414\u0443\u0436\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0447\u0430\u0441\u043E\u043C \u043A\u0440\u0430\u0449\u0435",stormy_possibly_improving:"\u0428\u0442\u043E\u0440\u043C\u043E\u0432\u043E, \u043C\u043E\u0436\u043B\u0438\u0432\u0435 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",stable:"\u0421\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E",sager_fair_improving:"\u0413\u0430\u0440\u043D\u0430 \u043F\u043E\u0433\u043E\u0434\u0430, \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",sager_fair_tending_to_deteriorate:"\u041F\u043E\u043A\u0438 \u0434\u043E\u0431\u0440\u0435, \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",sager_fair_no_change:"\u0413\u0430\u0440\u043D\u0430 \u043F\u043E\u0433\u043E\u0434\u0430, \u0431\u0435\u0437 \u0437\u043C\u0456\u043D",sager_unsettled_rain_likely:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449 \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0438\u0439",sager_unsettled_probably_improving:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0435 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",sager_unsettled_rain_at_times:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449\u0456 \u043F\u0435\u0440\u0456\u043E\u0434\u0438\u0447\u043D\u043E",sager_changeable_becoming_fairer:"\u041C\u0456\u043D\u043B\u0438\u0432\u0430, \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F",sager_changeable_becoming_more_unsettled:"\u041C\u0456\u043D\u043B\u0438\u0432\u0430, \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",sager_variable_slowly_improving:"\u0417\u043C\u0456\u043D\u043D\u0430, \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u0435 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",sager_variable_slowly_deteriorating:"\u0417\u043C\u0456\u043D\u043D\u0430, \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u0435 \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",sager_variable_some_change:"\u0417\u043C\u0456\u043D\u043D\u0430, \u043E\u0447\u0456\u043A\u0443\u044E\u0442\u044C\u0441\u044F \u0437\u043C\u0456\u043D\u0438"},"zh-Hans":{settled_fine:"\u6674\u6717\u7A33\u5B9A",fine_weather:"\u5929\u6C14\u826F\u597D",fine_becoming_less_settled:"\u826F\u597D\uFF0C\u8D8B\u4E8E\u4E0D\u7A33\u5B9A",fairly_fine_showery_later:"\u8F83\u597D\uFF0C\u7A0D\u540E\u9635\u96E8",showery_becoming_more_unsettled:"\u9635\u96E8\uFF0C\u8F6C\u5DEE",unsettled_rain_later:"\u4E0D\u7A33\u5B9A\uFF0C\u7A0D\u540E\u964D\u96E8",rain_at_times_worse_later:"\u65F6\u6709\u964D\u96E8\uFF0C\u7A0D\u540E\u8F6C\u5DEE",rain_at_times_becoming_very_unsettled:"\u65F6\u6709\u964D\u96E8\uFF0C\u975E\u5E38\u4E0D\u7A33\u5B9A",very_unsettled_rain:"\u975E\u5E38\u4E0D\u7A33\u5B9A\uFF0C\u6709\u96E8",fine_possibly_showers:"\u826F\u597D\uFF0C\u53EF\u80FD\u6709\u9635\u96E8",fairly_fine_showers_likely:"\u8F83\u597D\uFF0C\u53EF\u80FD\u6709\u9635\u96E8",showery_bright_intervals:"\u9635\u96E8\uFF0C\u95F4\u6674",changeable_some_rain:"\u591A\u53D8\uFF0C\u6709\u5C0F\u96E8",unsettled_rain_at_times:"\u4E0D\u7A33\u5B9A\uFF0C\u65F6\u6709\u964D\u96E8",rain_at_frequent_intervals:"\u9891\u7E41\u964D\u96E8",stormy_much_rain:"\u66B4\u98CE\u96E8\uFF0C\u5927\u96E8",becoming_fine:"\u8F6C\u597D",fairly_fine_improving:"\u8F83\u597D\uFF0C\u6539\u5584\u4E2D",fairly_fine_possibly_showers_early:"\u8F83\u597D\uFF0C\u65E9\u671F\u53EF\u80FD\u6709\u9635\u96E8",showery_early_improving:"\u65E9\u671F\u9635\u96E8\uFF0C\u6539\u5584\u4E2D",changeable_mending:"\u591A\u53D8\uFF0C\u597D\u8F6C\u4E2D",rather_unsettled_clearing_later:"\u8F83\u4E0D\u7A33\u5B9A\uFF0C\u7A0D\u540E\u8F6C\u6674",unsettled_probably_improving:"\u4E0D\u7A33\u5B9A\uFF0C\u53EF\u80FD\u597D\u8F6C",unsettled_short_fine_intervals:"\u4E0D\u7A33\u5B9A\uFF0C\u77ED\u6682\u6674\u6717",very_unsettled_finer_at_times:"\u975E\u5E38\u4E0D\u7A33\u5B9A\uFF0C\u65F6\u6709\u597D\u8F6C",stormy_possibly_improving:"\u66B4\u98CE\u96E8\uFF0C\u53EF\u80FD\u597D\u8F6C",stable:"\u7A33\u5B9A",sager_fair_improving:"\u5929\u6C14\u826F\u597D\uFF0C\u6539\u5584\u4E2D",sager_fair_tending_to_deteriorate:"\u76EE\u524D\u826F\u597D\uFF0C\u8D8B\u4E8E\u8F6C\u5DEE",sager_fair_no_change:"\u5929\u6C14\u826F\u597D\uFF0C\u65E0\u660E\u663E\u53D8\u5316",sager_unsettled_rain_likely:"\u4E0D\u7A33\u5B9A\uFF0C\u53EF\u80FD\u6709\u96E8",sager_unsettled_probably_improving:"\u4E0D\u7A33\u5B9A\uFF0C\u53EF\u80FD\u597D\u8F6C",sager_unsettled_rain_at_times:"\u4E0D\u7A33\u5B9A\uFF0C\u65F6\u6709\u964D\u96E8",sager_changeable_becoming_fairer:"\u591A\u53D8\uFF0C\u8D8B\u4E8E\u597D\u8F6C",sager_changeable_becoming_more_unsettled:"\u591A\u53D8\uFF0C\u8D8B\u4E8E\u66F4\u4E0D\u7A33\u5B9A",sager_variable_slowly_improving:"\u591A\u53D8\uFF0C\u7F13\u6162\u597D\u8F6C",sager_variable_slowly_deteriorating:"\u591A\u53D8\uFF0C\u7F13\u6162\u8F6C\u5DEE",sager_variable_some_change:"\u591A\u53D8\uFF0C\u9884\u8BA1\u6709\u53D8\u5316"},"zh-Hant":{settled_fine:"\u6674\u6717\u7A69\u5B9A",fine_weather:"\u5929\u6C23\u826F\u597D",fine_becoming_less_settled:"\u826F\u597D\uFF0C\u8DA8\u65BC\u4E0D\u7A69\u5B9A",fairly_fine_showery_later:"\u8F03\u597D\uFF0C\u7A0D\u5F8C\u9663\u96E8",showery_becoming_more_unsettled:"\u9663\u96E8\uFF0C\u8F49\u5DEE",unsettled_rain_later:"\u4E0D\u7A69\u5B9A\uFF0C\u7A0D\u5F8C\u964D\u96E8",rain_at_times_worse_later:"\u6642\u6709\u964D\u96E8\uFF0C\u7A0D\u5F8C\u8F49\u5DEE",rain_at_times_becoming_very_unsettled:"\u6642\u6709\u964D\u96E8\uFF0C\u975E\u5E38\u4E0D\u7A69\u5B9A",very_unsettled_rain:"\u975E\u5E38\u4E0D\u7A69\u5B9A\uFF0C\u6709\u96E8",fine_possibly_showers:"\u826F\u597D\uFF0C\u53EF\u80FD\u6709\u9663\u96E8",fairly_fine_showers_likely:"\u8F03\u597D\uFF0C\u53EF\u80FD\u6709\u9663\u96E8",showery_bright_intervals:"\u9663\u96E8\uFF0C\u9593\u6674",changeable_some_rain:"\u591A\u8B8A\uFF0C\u6709\u5C0F\u96E8",unsettled_rain_at_times:"\u4E0D\u7A69\u5B9A\uFF0C\u6642\u6709\u964D\u96E8",rain_at_frequent_intervals:"\u983B\u7E41\u964D\u96E8",stormy_much_rain:"\u66B4\u98A8\u96E8\uFF0C\u5927\u96E8",becoming_fine:"\u8F49\u597D",fairly_fine_improving:"\u8F03\u597D\uFF0C\u6539\u5584\u4E2D",fairly_fine_possibly_showers_early:"\u8F03\u597D\uFF0C\u65E9\u671F\u53EF\u80FD\u6709\u9663\u96E8",showery_early_improving:"\u65E9\u671F\u9663\u96E8\uFF0C\u6539\u5584\u4E2D",changeable_mending:"\u591A\u8B8A\uFF0C\u597D\u8F49\u4E2D",rather_unsettled_clearing_later:"\u8F03\u4E0D\u7A69\u5B9A\uFF0C\u7A0D\u5F8C\u8F49\u6674",unsettled_probably_improving:"\u4E0D\u7A69\u5B9A\uFF0C\u53EF\u80FD\u597D\u8F49",unsettled_short_fine_intervals:"\u4E0D\u7A69\u5B9A\uFF0C\u77ED\u66AB\u6674\u6717",very_unsettled_finer_at_times:"\u975E\u5E38\u4E0D\u7A69\u5B9A\uFF0C\u6642\u6709\u597D\u8F49",stormy_possibly_improving:"\u66B4\u98A8\u96E8\uFF0C\u53EF\u80FD\u597D\u8F49",stable:"\u7A69\u5B9A",sager_fair_improving:"\u5929\u6C23\u826F\u597D\uFF0C\u6539\u5584\u4E2D",sager_fair_tending_to_deteriorate:"\u76EE\u524D\u826F\u597D\uFF0C\u8DA8\u65BC\u8F49\u5DEE",sager_fair_no_change:"\u5929\u6C23\u826F\u597D\uFF0C\u7121\u660E\u986F\u8B8A\u5316",sager_unsettled_rain_likely:"\u4E0D\u7A69\u5B9A\uFF0C\u53EF\u80FD\u6709\u96E8",sager_unsettled_probably_improving:"\u4E0D\u7A69\u5B9A\uFF0C\u53EF\u80FD\u597D\u8F49",sager_unsettled_rain_at_times:"\u4E0D\u7A69\u5B9A\uFF0C\u6642\u6709\u964D\u96E8",sager_changeable_becoming_fairer:"\u591A\u8B8A\uFF0C\u8DA8\u65BC\u597D\u8F49",sager_changeable_becoming_more_unsettled:"\u591A\u8B8A\uFF0C\u8DA8\u65BC\u66F4\u4E0D\u7A69\u5B9A",sager_variable_slowly_improving:"\u591A\u8B8A\uFF0C\u7DE9\u6162\u597D\u8F49",sager_variable_slowly_deteriorating:"\u591A\u8B8A\uFF0C\u7DE9\u6162\u8F49\u5DEE",sager_variable_some_change:"\u591A\u8B8A\uFF0C\u9810\u8A08\u6709\u8B8A\u5316"},ru:{settled_fine:"\u0421\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E",fine_weather:"\u042F\u0441\u043D\u0430\u044F \u043F\u043E\u0433\u043E\u0434\u0430",fine_becoming_less_settled:"\u042F\u0441\u043D\u043E, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",fairly_fine_showery_later:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E, \u043F\u043E\u0437\u0436\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043F\u0435\u0440\u0435\u043B\u0438\u0432\u043D\u044B\u0435 \u0434\u043E\u0436\u0434\u0438",showery_becoming_more_unsettled:"\u041F\u0435\u0440\u0435\u043B\u0438\u0432\u043D\u044B\u0435 \u0434\u043E\u0436\u0434\u0438, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0431\u043E\u043B\u0435\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",unsettled_rain_later:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u043F\u043E\u0437\u0436\u0435 \u0434\u043E\u0436\u0434\u044C",rain_at_times_worse_later:"\u041F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u043E\u0436\u0434\u044C, \u043F\u043E\u0437\u0436\u0435 \u0443\u0445\u0443\u0434\u0448\u0435\u043D\u0438\u0435",rain_at_times_becoming_very_unsettled:"\u041F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u043E\u0436\u0434\u044C, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043E\u0447\u0435\u043D\u044C \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",very_unsettled_rain:"\u041E\u0447\u0435\u043D\u044C \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0434\u043E\u0436\u0434\u044C",fine_possibly_showers:"\u042F\u0441\u043D\u043E, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043B\u0438\u0432\u043D\u0438",fairly_fine_showers_likely:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E, \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u044B \u043B\u0438\u0432\u043D\u0438",showery_bright_intervals:"\u041B\u0438\u0432\u043D\u0438, \u0441 \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u044F\u043C\u0438",changeable_some_rain:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043F\u043E\u0433\u043E\u0434\u0430, \u043C\u0435\u0441\u0442\u0430\u043C\u0438 \u0434\u043E\u0436\u0434\u044C",unsettled_rain_at_times:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0440\u0435\u043C\u0435\u043D\u0430\u043C\u0438 \u0434\u043E\u0436\u0434\u044C",rain_at_frequent_intervals:"\u0427\u0430\u0441\u0442\u044B\u0435 \u0434\u043E\u0436\u0434\u0438",stormy_much_rain:"\u0413\u0440\u043E\u0437\u043E\u0432\u0430\u044F \u043F\u043E\u0433\u043E\u0434\u0430, \u0441\u0438\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u0436\u0434\u044C",becoming_fine:"\u0421\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u044F\u0441\u043D\u043E",fairly_fine_improving:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u0442\u0441\u044F",fairly_fine_possibly_showers_early:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E, \u0443\u0442\u0440\u043E\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043B\u0438\u0432\u043D\u0438",showery_early_improving:"\u0420\u0430\u043D\u043D\u0438\u043C \u0443\u0442\u0440\u043E\u043C \u0434\u043E\u0436\u0434\u0438, \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u0435 \u043F\u043E\u0433\u043E\u0434\u044B",changeable_mending:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u0442\u0441\u044F",rather_unsettled_clearing_later:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u043F\u043E\u0437\u0436\u0435 \u043F\u0440\u043E\u044F\u0441\u043D\u044F\u0435\u0442\u0441\u044F",unsettled_probably_improving:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u0441\u044F",unsettled_short_fine_intervals:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0435 \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u044F",very_unsettled_finer_at_times:"\u041E\u0447\u0435\u043D\u044C \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0440\u0435\u043C\u0435\u043D\u0430\u043C\u0438 \u043F\u0440\u043E\u044F\u0441\u043D\u044F\u0435\u0442\u0441\u044F",stormy_possibly_improving:"\u0413\u0440\u043E\u0437\u043E\u0432\u043E, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u0441\u044F",stable:"\u0421\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",sager_fair_improving:"\u042F\u0441\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u0442\u0441\u044F",sager_fair_tending_to_deteriorate:"\u0421\u0435\u0439\u0447\u0430\u0441 \u044F\u0441\u043D\u043E, \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u044F \u043A \u0443\u0445\u0443\u0434\u0448\u0435\u043D\u0438\u044E",sager_fair_no_change:"\u042F\u0441\u043D\u043E, \u0431\u0435\u0437 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439",sager_unsettled_rain_likely:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0435\u0440\u043E\u044F\u0442\u0435\u043D \u0434\u043E\u0436\u0434\u044C",sager_unsettled_probably_improving:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u0441\u044F",sager_unsettled_rain_at_times:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0440\u0435\u043C\u0435\u043D\u0430\u043C\u0438 \u0434\u043E\u0436\u0434\u044C",sager_changeable_becoming_fairer:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u044F\u0441\u043D\u0435\u0435",sager_changeable_becoming_more_unsettled:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0431\u043E\u043B\u0435\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",sager_variable_slowly_improving:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u043F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u0442\u0441\u044F",sager_variable_slowly_deteriorating:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u043F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u0443\u0445\u0443\u0434\u0448\u0430\u0435\u0442\u0441\u044F",sager_variable_some_change:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u043E\u0436\u0438\u0434\u0430\u044E\u0442\u0441\u044F \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"},fr:{settled_fine:"Temps stable et beau",fine_weather:"Beau temps",fine_becoming_less_settled:"Beau, devenant moins stable",fairly_fine_showery_later:"Assez beau, averses plus tard",showery_becoming_more_unsettled:"Averses, devenant plus instable",unsettled_rain_later:"Instable, pluie plus tard",rain_at_times_worse_later:"Pluie par moments, aggravation plus tard",rain_at_times_becoming_very_unsettled:"Pluie par moments, devenant tr\xE8s instable",very_unsettled_rain:"Tr\xE8s instable, pluie",fine_possibly_showers:"Beau temps, averses possibles",fairly_fine_showers_likely:"Temps assez beau, averses probables",showery_bright_intervals:"Averses, \xE9claircies par moments",changeable_some_rain:"Temps variable, quelques averses",unsettled_rain_at_times:"Temps instable, averses par moments",rain_at_frequent_intervals:"Averses fr\xE9quentes",stormy_much_rain:"Orageux, fortes averses",becoming_fine:"Temps s'am\xE9liorant",fairly_fine_improving:"Temps assez beau, s'am\xE9liorant",fairly_fine_possibly_showers_early:"Temps assez beau, averses possibles en d\xE9but de journ\xE9e",showery_early_improving:"Averses t\xF4t dans la journ\xE9e, am\xE9lioration",changeable_mending:"Temps variable, s'am\xE9liorant",rather_unsettled_clearing_later:"Temps plut\xF4t instable, s'\xE9claircissant plus tard",unsettled_probably_improving:"Temps instable, s'am\xE9liorant probablement",unsettled_short_fine_intervals:"Temps instable, courtes \xE9claircies",very_unsettled_finer_at_times:"Temps tr\xE8s instable, s'am\xE9liorant par moments",stormy_possibly_improving:"Orageux, s'am\xE9liorant peut-\xEAtre",stable:"Stable",sager_fair_improving:"Temps clair, s'am\xE9liorant",sager_fair_tending_to_deteriorate:"Temps clair actuellement, tendance \xE0 la d\xE9t\xE9rioration",sager_fair_no_change:"Temps clair, pas de changement notable",sager_unsettled_rain_likely:"Temps instable, pluie probable",sager_unsettled_probably_improving:"Temps instable, s'am\xE9liorant probablement",sager_unsettled_rain_at_times:"Temps instable, averses par moments",sager_changeable_becoming_fairer:"Temps changeant, s'\xE9claircissant progressivement",sager_changeable_becoming_more_unsettled:"Temps changeant, devenant plus instable",sager_variable_slowly_improving:"Temps variable, s'am\xE9liorant lentement",sager_variable_slowly_deteriorating:"Temps variable, se d\xE9t\xE9riorant lentement",sager_variable_some_change:"Temps variable, quelques changements attendus"}},ie={en:"Precip",ru:"\u041E\u0441\u0430\u0434\u043A\u0438",fr:"Pr\xE9cip.",de:"Niederschlag",es:"Precip.",it:"Precip.",pl:"Opady","zh-Hans":"\u964D\u6C34","zh-Hant":"\u964D\u6C34",nl:"Neerslag",pt:"Precip.",uk:"\u041E\u043F\u0430\u0434\u0438",ja:"\u964D\u6C34",ko:"\uAC15\uC218",cs:"Sr\xE1\u017Eky",sv:"Nederb.",da:"Nedb.",nb:"Nedb.",hu:"Csapad\xE9k",tr:"Ya\u011F\u0131\u015F"},re={en:{storm:"STORMY",rain:"RAIN",change:"CHANGE",fair:"FAIR",very_dry:"VERY DRY",falling:"FALLING",steady:"STEADY",rising:"RISING",delta_3h:"\u0394 3 HOURS",aneroid:"ANEROID BAROMETER",compensated:"Compensated for Temperature",current:"Current",history_3h:"3h ago",trend:"Trend"},ru:{storm:"\u0428\u0422\u041E\u0420\u041C",rain:"\u0414\u041E\u0416\u0414\u042C",change:"\u041F\u0415\u0420\u0415\u041C\u0415\u041D\u041D\u041E",fair:"\u042F\u0421\u041D\u041E",very_dry:"\u0421\u0423\u0428\u042C",falling:"\u041F\u0410\u0414\u0415\u041D\u0418\u0415",steady:"\u0421\u0422\u041E\u0419\u041A\u041E",rising:"\u0420\u041E\u0421\u0422",delta_3h:"\u0394 3 \u0427\u0410\u0421\u0410",aneroid:"\u0411\u0410\u0420\u041E\u041C\u0415\u0422\u0420-\u0410\u041D\u0415\u0420\u041E\u0418\u0414",compensated:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0438\u044F",current:"\u0422\u0435\u043A\u0443\u0449\u0435\u0435",history_3h:"3 \u0447 \u043D\u0430\u0437\u0430\u0434",trend:"\u0422\u0440\u0435\u043D\u0434"},de:{storm:"STURM",rain:"REGEN",change:"VER\xC4NDERLICH",fair:"SCH\xD6N",very_dry:"BEST\xC4NDIG",falling:"FALLEND",steady:"BEST\xC4NDIG",rising:"STEIGEND",delta_3h:"\u0394 3 STD",aneroid:"ANEROID-BAROMETER",compensated:"Temperaturkompensiert",current:"Aktuell",history_3h:"Vor 3 Std",trend:"Trend"},es:{storm:"TEMPESTAD",rain:"LLUVIA",change:"VARIABLE",fair:"BUEN TIEMPO",very_dry:"MUY SECO",falling:"BAJANDO",steady:"ESTABLE",rising:"SUBIENDO",delta_3h:"\u0394 3 HORAS",aneroid:"BAR\xD3METRO ANEROIDE",compensated:"Compensado por Temperatura",current:"Actual",history_3h:"Hace 3h",trend:"Tendencia"},fr:{storm:"TEMP\xCATE",rain:"PLUIE",change:"VARIABLE",fair:"BEAU TEMPS",very_dry:"TR\xC8S SEC",falling:"BAISSE",steady:"STABLE",rising:"HAUSSE",delta_3h:"\u0394 3 HEURES",aneroid:"BAROM\xC8TRE AN\xC9RO\xCFDE",compensated:"Compens\xE9 en Temp\xE9rature",current:"Actuel",history_3h:"Il y a 3h",trend:"Tendance"},it:{storm:"TEMPESTA",rain:"PIOGGIA",change:"VARIABILE",fair:"BEL TEMPO",very_dry:"MOLTO SECCO",falling:"CALO",steady:"STABILE",rising:"SALITA",delta_3h:"\u0394 3 ORE",aneroid:"BAROMETRO ANEROIDE",compensated:"Compensato in Temperatura",current:"Attuale",history_3h:"3 ore fa",trend:"Tendenza"},pl:{storm:"BURZA",rain:"DESZCZ",change:"ZMIENNIE",fair:"POGODNIE",very_dry:"BARDZO SUCHO",falling:"SPADEK",steady:"STABILNIE",rising:"WZROST",delta_3h:"\u0394 3 GODZ",aneroid:"BAROMETR ANEROID",compensated:"Kompensacja Temperatury",current:"Bie\u017C\u0105ce",history_3h:"3h temu",trend:"Trend"},pt:{storm:"TEMPESTADE",rain:"CHUVA",change:"VARI\xC1VEL",fair:"BOM TEMPO",very_dry:"MUITO SECO",falling:"QUEDA",steady:"EST\xC1VEL",rising:"ALTA",delta_3h:"\u0394 3 HORAS",aneroid:"BAR\xD3METRO ANEROIDE",compensated:"Compensado por Temperatura",current:"Atual",history_3h:"H\xE1 3h",trend:"Tend\xEAncia"},uk:{storm:"\u0428\u0422\u041E\u0420\u041C",rain:"\u0414\u041E\u0429",change:"\u041C\u0406\u041D\u041B\u0418\u0412\u041E",fair:"\u042F\u0421\u041D\u041E",very_dry:"\u0421\u0423\u0428\u0410",falling:"\u041F\u0410\u0414\u0406\u041D\u041D\u042F",steady:"\u0421\u0422\u0406\u0419\u041A\u041E",rising:"\u0417\u0420\u041E\u0421\u0422\u0410\u041D\u041D\u042F",delta_3h:"\u0394 3 \u0413\u041E\u0414",aneroid:"\u0411\u0410\u0420\u041E\u041C\u0415\u0422\u0420-\u0410\u041D\u0415\u0420\u041E\u0407\u0414",compensated:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0430 \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0456\u044F",current:"\u041F\u043E\u0442\u043E\u0447\u043D\u0438\u0439",history_3h:"3 \u0433\u043E\u0434 \u0442\u043E\u043C\u0443",trend:"\u0422\u0440\u0435\u043D\u0434"},"zh-Hans":{storm:"\u66B4\u98CE\u96E8",rain:"\u964D\u96E8",change:"\u591A\u53D8",fair:"\u6674\u6717",very_dry:"\u5E72\u71E5",falling:"\u4E0B\u964D",steady:"\u7A33\u5B9A",rising:"\u4E0A\u5347",delta_3h:"\u0394 3\u5C0F\u65F6",aneroid:"\u65E0\u6DB2\u6C14\u538B\u8868",compensated:"\u6E29\u5EA6\u8865\u507F\u578B",current:"\u5F53\u524D",history_3h:"3\u5C0F\u65F6\u524D",trend:"\u8D8B\u52BF"},"zh-Hant":{storm:"\u66B4\u98A8\u96E8",rain:"\u964D\u96E8",change:"\u591A\u8B8A",fair:"\u6674\u6717",very_dry:"\u4E7E\u71E5",falling:"\u4E0B\u964D",steady:"\u7A69\u5B9A",rising:"\u4E0A\u5347",delta_3h:"\u0394 3\u5C0F\u6642",aneroid:"\u7121\u6DB2\u6C23\u58D3\u8868",compensated:"\u6EAB\u5EA6\u88DC\u511F\u578B",current:"\u7576\u524D",history_3h:"3\u5C0F\u6642\u524D",trend:"\u8DA8\u52E2"},ja:{storm:"\u5D50",rain:"\u96E8",change:"\u5909\u5316",fair:"\u597D\u5929",very_dry:"\u4E7E\u71E5",falling:"\u4F4E\u4E0B",steady:"\u5B89\u5B9A",rising:"\u4E0A\u6607",delta_3h:"\u0394 3\u6642\u9593",aneroid:"\u30A2\u30CD\u30ED\u30A4\u30C9\u6C17\u5727\u8A08",compensated:"\u6E29\u5EA6\u88DC\u6B63\u6E08",current:"\u73FE\u5728",history_3h:"3\u6642\u9593\u524D",trend:"\u50BE\u5411"},ko:{storm:"\uD3ED\uD48D",rain:"\uBE44",change:"\uBCC0\uB355",fair:"\uB9D1\uC74C",very_dry:"\uAC74\uC870",falling:"\uD558\uAC15",steady:"\uC548\uC815",rising:"\uC0C1\uC2B9",delta_3h:"\u0394 3\uC2DC\uAC04",aneroid:"\uC544\uB124\uB85C\uC774\uB4DC \uAE30\uC555\uACC4",compensated:"\uC628\uB3C4 \uBCF4\uC815\uB428",current:"\uD604\uC7AC",history_3h:"3\uC2DC\uAC04 \uC804",trend:"\uCD94\uC138"},cs:{storm:"BOU\u0158E",rain:"D\xC9\u0160\u0164",change:"PROM\u011ANLIVO",fair:"P\u011AKN\u011A",very_dry:"VELMI SUCHO",falling:"POKLES",steady:"UST\xC1LENO",rising:"VZESTUP",delta_3h:"\u0394 3 HOD",aneroid:"ANEROIDN\xCD BAROMETR",compensated:"Teplotn\u011B kompenzov\xE1no",current:"Nyn\xED",history_3h:"P\u0159ed 3h",trend:"Trend"},sv:{storm:"STORM",rain:"REGN",change:"OMBYTLIGT",fair:"VACKERT",very_dry:"MYCKET TORRT",falling:"FALLANDE",steady:"STADIGT",rising:"STIGANDE",delta_3h:"\u0394 3 TIM",aneroid:"ANEROIDBAROMETER",compensated:"Temperaturkompenserad",current:"Nu",history_3h:"3 tim sedan",trend:"Trend"},da:{storm:"STORM",rain:"REGN",change:"FORANDERLIGT",fair:"SMUKT",very_dry:"MEGET T\xD8RT",falling:"FALDENDE",steady:"STABILT",rising:"STIGENDE",delta_3h:"\u0394 3 TIMER",aneroid:"ANEROIDBAROMETER",compensated:"Temperaturkompenseret",current:"Nu",history_3h:"3t siden",trend:"Trend"},nb:{storm:"STORM",rain:"REGN",change:"SKIFTENDE",fair:"PENT",very_dry:"SV\xC6RT T\xD8RT",falling:"FALLENDE",steady:"STABILT",rising:"STIGENDE",delta_3h:"\u0394 3 TIMER",aneroid:"ANEROIDBAROMETER",compensated:"Temperaturkompensert",current:"N\xE5",history_3h:"3t siden",trend:"Trend"},nl:{storm:"STORM",rain:"REGEN",change:"VERANDERLIJK",fair:"MOOI",very_dry:"ZEER DROOG",falling:"DALEND",steady:"STABIEL",rising:"STIJGEND",delta_3h:"\u0394 3 UUR",aneroid:"ANERO\xCFDE BAROMETER",compensated:"Temperatuurgecompenseerd",current:"Nu",history_3h:"3u geleden",trend:"Trend"},hu:{storm:"VIHAR",rain:"ES\u0150",change:"V\xC1LTOZ\xC9KONY",fair:"SZ\xC9P ID\u0150",very_dry:"NAGYON SZ\xC1RAZ",falling:"S\xDCLLYED",steady:"\xC1LLAND\xD3",rising:"EMELKEDIK",delta_3h:"\u0394 3 \xD3RA",aneroid:"ANEROID BAROM\xC9TER",compensated:"H\u0151m\xE9rs\xE9klet-kompenz\xE1lt",current:"Jelenlegi",history_3h:"3 \xF3r\xE1ja",trend:"Trend"},tr:{storm:"FIRTINA",rain:"YA\u011EMUR",change:"DE\u011E\u0130\u015EKEN",fair:"A\xC7IK",very_dry:"\xC7OK KURU",falling:"D\xDC\u015E\xDC\u015E",steady:"SAB\u0130T",rising:"Y\xDCKSEL\u0130\u015E",delta_3h:"\u0394 3 SAAT",aneroid:"ANERO\u0130T BAROMETRE",compensated:"S\u0131cakl\u0131k Dengelemeli",current:"\u015Eimdiki",history_3h:"3s \xF6nce",trend:"Trend"}};function Q(o){if(!o)return"en";if(o==="auto")return"auto";if(o.startsWith("zh"))return o.includes("Hant")?"zh-Hant":"zh-Hans";if(o.startsWith("pt"))return"pt";if(o.startsWith("nb")||o.startsWith("no"))return"nb";const t=o.split("-")[0];return X[o]?o:X[t]?t:"en"}function he(o,t){const i=Q(o==="auto"?t||"en":o);return X[i]||X.en}function me(o,t){const i=Q(o==="auto"?t||"en":o);return ie[i]||ie.en}function fe(o,t){const i=Q(o==="auto"?t||"en":o);return re[i]||re.en}const J={settled_fine:"sunny",fine_weather:"sunny",fine_becoming_less_settled:"partlycloudy",fairly_fine_showery_later:"partlycloudy",showery_becoming_more_unsettled:"rainy",unsettled_rain_later:"cloudy",rain_at_times_worse_later:"rainy",rain_at_times_becoming_very_unsettled:"pouring",very_unsettled_rain:"pouring",fine_possibly_showers:"partlycloudy",fairly_fine_showers_likely:"partlycloudy",showery_bright_intervals:"rainy",changeable_some_rain:"cloudy",unsettled_rain_at_times:"rainy",rain_at_frequent_intervals:"pouring",stormy_much_rain:"lightning-rainy",becoming_fine:"partlycloudy",fairly_fine_improving:"partlycloudy",fairly_fine_possibly_showers_early:"partlycloudy",showery_early_improving:"rainy",changeable_mending:"cloudy",rather_unsettled_clearing_later:"cloudy",unsettled_probably_improving:"cloudy",unsettled_short_fine_intervals:"cloudy",very_unsettled_finer_at_times:"pouring",stormy_possibly_improving:"lightning-rainy",stable:"partlycloudy"},ne={sunny:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g>
      <animateTransform attributeName="transform" type="rotate"
        from="0 32 32" to="360 32 32" dur="20s"
        repeatCount="indefinite" calcMode="linear"/>
      <circle cx="32" cy="32" r="12" fill="#FFD700"/>
      <g stroke="#FFD700" stroke-width="2.5" stroke-linecap="round">
        <line x1="32" y1="6"  x2="32" y2="13"/>
        <line x1="32" y1="51" x2="32" y2="58"/>
        <line x1="6"  y1="32" x2="13" y2="32"/>
        <line x1="51" y1="32" x2="58" y2="32"/>
        <line x1="13.8" y1="13.8" x2="18.9" y2="18.9"/>
        <line x1="45.1" y1="45.1" x2="50.2" y2="50.2"/>
        <line x1="50.2" y1="13.8" x2="45.1" y2="18.9"/>
        <line x1="18.9" y1="45.1" x2="13.8" y2="50.2"/>
      </g>
    </g>
  </svg>`,night_clear:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 10a22 22 0 1 1-22 24 16 16 0 0 0 22-24z" fill="#E8E8C8"/>
    <circle cx="44" cy="16" r="1.8" fill="#FFF" opacity="0.5">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="14" cy="12" r="1.2" fill="#FFF" opacity="0.4">
      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="52" cy="8"  r="1.0" fill="#FFF" opacity="0.35">
      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="10" cy="46" r="1.4" fill="#FFF" opacity="0.3">
      <animate attributeName="opacity" values="0.15;0.55;0.15" dur="4.0s" repeatCount="indefinite"/>
    </circle>
    <circle cx="54" cy="42" r="0.9" fill="#FFF" opacity="0.3">
      <animate attributeName="opacity" values="0.15;0.5;0.15" dur="3.1s" repeatCount="indefinite"/>
    </circle>
  </svg>`,partlycloudy:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g>
      <animateTransform attributeName="transform" type="rotate"
        from="0 22 26" to="360 22 26" dur="24s"
        repeatCount="indefinite" calcMode="linear"/>
      <circle cx="22" cy="26" r="9" fill="#FFD700" opacity="0.95"/>
    </g>
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0;4,0;0,0" dur="9s" repeatCount="indefinite" calcMode="linear"/>
      <ellipse cx="36" cy="36" rx="16" ry="10" fill="#B0BEC5"/>
      <ellipse cx="26" cy="34" rx="12" ry="9"  fill="#CFD8DC"/>
      <ellipse cx="44" cy="37" rx="10" ry="7"  fill="#B0BEC5"/>
    </g>
  </svg>`,cloudy:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="-5,0;5,0;-5,0" dur="12s" repeatCount="indefinite" calcMode="linear"/>
      <ellipse cx="32" cy="30" rx="20" ry="12" fill="#90A4AE"/>
      <ellipse cx="22" cy="34" rx="14" ry="10" fill="#B0BEC5"/>
      <ellipse cx="44" cy="35" rx="13" ry="9"  fill="#90A4AE"/>
    </g>
  </svg>`,rainy:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="-3,0;3,0;-3,0" dur="8s" repeatCount="indefinite" calcMode="linear"/>
      <ellipse cx="32" cy="24" rx="18" ry="11" fill="#78909C"/>
      <ellipse cx="22" cy="28" rx="13" ry="9"  fill="#90A4AE"/>
      <ellipse cx="42" cy="28" rx="12" ry="8"  fill="#78909C"/>
    </g>
    <g fill="#64B5F6">
      <line x1="22" y1="38" x2="20" y2="50" stroke="#64B5F6" stroke-width="2" stroke-linecap="round">
        <animate attributeName="y1" values="38;40;38" dur="1.2s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="50;52;50" dur="1.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite"/>
      </line>
      <line x1="32" y1="36" x2="30" y2="48" stroke="#64B5F6" stroke-width="2" stroke-linecap="round">
        <animate attributeName="y1" values="36;38;36" dur="1.4s" begin="0.3s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="48;50;48" dur="1.4s" begin="0.3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0;1" dur="1.4s" begin="0.3s" repeatCount="indefinite"/>
      </line>
      <line x1="42" y1="38" x2="40" y2="50" stroke="#64B5F6" stroke-width="2" stroke-linecap="round">
        <animate attributeName="y1" values="38;40;38" dur="1.1s" begin="0.6s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="50;52;50" dur="1.1s" begin="0.6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0;1" dur="1.1s" begin="0.6s" repeatCount="indefinite"/>
      </line>
    </g>
  </svg>`,pouring:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="-2,0;3,0;-2,0" dur="7s" repeatCount="indefinite" calcMode="linear"/>
      <ellipse cx="32" cy="22" rx="18" ry="11" fill="#546E7A"/>
      <ellipse cx="22" cy="26" rx="13" ry="9"  fill="#607D8B"/>
      <ellipse cx="42" cy="26" rx="12" ry="8"  fill="#546E7A"/>
    </g>
    <g stroke="#42A5F5" stroke-width="2.2" stroke-linecap="round">
      <line x1="20" y1="36" x2="17" y2="50">
        <animate attributeName="y1" values="36;38;36" dur="0.9s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="50;52;50" dur="0.9s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0;1" dur="0.9s" repeatCount="indefinite"/>
      </line>
      <line x1="29" y1="34" x2="26" y2="48">
        <animate attributeName="y1" values="34;36;34" dur="0.8s" begin="0.2s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="48;50;48" dur="0.8s" begin="0.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0;1" dur="0.8s" begin="0.2s" repeatCount="indefinite"/>
      </line>
      <line x1="38" y1="36" x2="35" y2="50">
        <animate attributeName="y1" values="36;38;36" dur="1.0s" begin="0.1s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="50;52;50" dur="1.0s" begin="0.1s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0;1" dur="1.0s" begin="0.1s" repeatCount="indefinite"/>
      </line>
      <line x1="47" y1="34" x2="44" y2="48">
        <animate attributeName="y1" values="34;36;34" dur="0.85s" begin="0.45s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="48;50;48" dur="0.85s" begin="0.45s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0;1" dur="0.85s" begin="0.45s" repeatCount="indefinite"/>
      </line>
    </g>
  </svg>`,"lightning-rainy":`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="-2,0;2,0;-2,0" dur="6s" repeatCount="indefinite" calcMode="linear"/>
      <ellipse cx="32" cy="20" rx="18" ry="11" fill="#37474F"/>
      <ellipse cx="22" cy="25" rx="13" ry="9"  fill="#455A64"/>
      <ellipse cx="42" cy="25" rx="12" ry="8"  fill="#37474F"/>
    </g>
    <polygon points="34,32 27,44 33,44 28,55 39,40 33,40" fill="#FFD740">
      <animate attributeName="opacity" values="1;0.2;1;0.2;1" dur="2.8s" repeatCount="indefinite"/>
    </polygon>
    <g stroke="#64B5F6" stroke-width="2" stroke-linecap="round">
      <line x1="20" y1="38" x2="18" y2="48">
        <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite"/>
      </line>
      <line x1="46" y1="37" x2="44" y2="47">
        <animate attributeName="opacity" values="1;0;1" dur="0.9s" begin="0.5s" repeatCount="indefinite"/>
      </line>
    </g>
  </svg>`,snowy:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="-3,0;3,0;-3,0" dur="10s" repeatCount="indefinite" calcMode="linear"/>
      <ellipse cx="32" cy="24" rx="18" ry="11" fill="#B0BEC5"/>
      <ellipse cx="22" cy="28" rx="13" ry="9"  fill="#CFD8DC"/>
      <ellipse cx="42" cy="28" rx="12" ry="8"  fill="#B0BEC5"/>
    </g>
    <g fill="white">
      <circle cx="20" cy="40" r="2.2">
        <animate attributeName="cy" values="40;56;40" dur="2.0s" repeatCount="indefinite" calcMode="linear"/>
        <animate attributeName="opacity" values="1;0;1" dur="2.0s" repeatCount="indefinite"/>
      </circle>
      <circle cx="30" cy="37" r="1.6">
        <animate attributeName="cy" values="37;53;37" dur="2.3s" begin="0.4s" repeatCount="indefinite" calcMode="linear"/>
        <animate attributeName="opacity" values="1;0;1" dur="2.3s" begin="0.4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="40" cy="40" r="2.0">
        <animate attributeName="cy" values="40;56;40" dur="1.8s" begin="0.8s" repeatCount="indefinite" calcMode="linear"/>
        <animate attributeName="opacity" values="1;0;1" dur="1.8s" begin="0.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="50" cy="37" r="1.4">
        <animate attributeName="cy" values="37;53;37" dur="2.5s" begin="0.2s" repeatCount="indefinite" calcMode="linear"/>
        <animate attributeName="opacity" values="1;0;1" dur="2.5s" begin="0.2s" repeatCount="indefinite"/>
      </circle>
    </g>
  </svg>`,windy:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#90A4AE" stroke-width="2.5" stroke-linecap="round" fill="none">
      <path d="M4 18 Q18 11 32 18 Q46 25 60 18">
        <animate attributeName="d"
          values="M4 18 Q18 11 32 18 Q46 25 60 18;M4 18 Q18 25 32 18 Q46 11 60 18;M4 18 Q18 11 32 18 Q46 25 60 18"
          dur="3.0s" repeatCount="indefinite" calcMode="linear"/>
      </path>
      <path d="M4 30 Q18 23 32 30 Q46 37 60 30">
        <animate attributeName="d"
          values="M4 30 Q18 23 32 30 Q46 37 60 30;M4 30 Q18 37 32 30 Q46 23 60 30;M4 30 Q18 23 32 30 Q46 37 60 30"
          dur="3.5s" begin="0.5s" repeatCount="indefinite" calcMode="linear"/>
      </path>
      <path d="M4 42 Q18 35 32 42 Q46 49 60 42">
        <animate attributeName="d"
          values="M4 42 Q18 35 32 42 Q46 49 60 42;M4 42 Q18 49 32 42 Q46 35 60 42;M4 42 Q18 35 32 42 Q46 49 60 42"
          dur="2.8s" begin="1.0s" repeatCount="indefinite" calcMode="linear"/>
      </path>
    </g>
  </svg>`},ae={settled_fine:"sunny",fine_weather:"sunny",fine_becoming_less_settled:"partlycloudy",fairly_fine_showery_later:"partlycloudy",showery_becoming_more_unsettled:"rainy",unsettled_rain_later:"cloudy",rain_at_times_worse_later:"rainy",rain_at_times_becoming_very_unsettled:"pouring",very_unsettled_rain:"pouring",fine_possibly_showers:"partlycloudy",fairly_fine_showers_likely:"partlycloudy",showery_bright_intervals:"rainy",changeable_some_rain:"cloudy",unsettled_rain_at_times:"rainy",rain_at_frequent_intervals:"pouring",stormy_much_rain:"lightning-rainy",becoming_fine:"partlycloudy",fairly_fine_improving:"partlycloudy",fairly_fine_possibly_showers_early:"partlycloudy",showery_early_improving:"rainy",changeable_mending:"cloudy",rather_unsettled_clearing_later:"cloudy",unsettled_probably_improving:"cloudy",unsettled_short_fine_intervals:"cloudy",very_unsettled_finer_at_times:"pouring",stormy_possibly_improving:"lightning-rainy",stable:"partlycloudy"};function se(o,t){return o==="settled_fine"||o==="fine_weather"?t?"night_clear":"sunny":ae[o]||"partlycloudy"}function k(o){return o==null?"":String(o).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ee(o,t=""){const i=ne[o]||ne.partlycloudy;if(!t)return i.replace("<svg ",'<svg role="img" ');const a=k(t);return i.replace("<svg ",`<svg role="img" aria-label="${a}" `)}const ue={sunny:{bg:"linear-gradient(135deg,#FF8C00 0%,#FFA500 40%,#FFD700 100%)"},night_clear:{bg:"linear-gradient(135deg,#070B14 0%,#0F172A 50%,#1E293B 100%)"},partlycloudy:{bg:"linear-gradient(135deg,#FF8C00 0%,#BBDEFB 50%,#FFFFFF 100%)"},cloudy:{bg:"linear-gradient(135deg,#606C76 0%,#7E8A95 50%,#A2AEB8 100%)"},rainy:{bg:"linear-gradient(135deg,#425363 0%,#54677A 50%,#70879C 100%)"},pouring:{bg:"linear-gradient(135deg,#1C242D 0%,#2B3745 50%,#3F5063 100%)"},"lightning-rainy":{bg:"linear-gradient(135deg,#23153A 0%,#43286B 50%,#6943A3 100%)"},snowy:{bg:"linear-gradient(135deg,#B8C6D4 0%,#DDE5ED 50%,#F4F7FA 100%)"},windy:{bg:"linear-gradient(135deg,#5F9EA0 0%,#87B6B8 50%,#B4D3D4 100%)"}},oe={bg:"linear-gradient(135deg,#1565C0 0%,#1976D2 100%)"};function ye(o){return ue[o]||oe}function be(o,t){if(t===void 0||t>=100||typeof t!="number"||isNaN(t))return o;const i=Math.max(0,Math.min(100,t)),a=Math.round(i/100*255).toString(16).padStart(2,"0").toUpperCase();return o.replace(/#([0-9a-fA-F]{6})(?![0-9a-fA-F])/gi,`#$1${a}`)}function xe(o,t){return(t[o]||o||"\u2014").split(/[,\s]+/).filter(Boolean).slice(0,2).join(" ")}let te=0;function le(o){return o==null?"":["N","NE","E","SE","S","SW","W","NW"][Math.round(o%360/45)%8]}function _e(o,t,i){if(o==null)return null;const a=parseFloat(o);if(isNaN(a))return null;const _=(i||"m/s").toLowerCase().replace(" ",""),n=(t||"m/s").toLowerCase().replace(" ","");let s;return _==="km/h"||_==="kmh"?s=a/3.6:_==="mph"?s=a/2.23694:_==="kn"||_==="kt"||_==="knots"?s=a/1.94384:s=a,n==="mph"?`${(s*2.23694).toFixed(1)} mph`:n==="km/h"||n==="kmh"?`${Math.round(s*3.6)} km/h`:n==="kn"||n==="kt"?`${(s*1.94384).toFixed(1)} kn`:`${s.toFixed(1)} m/s`}function ve(o,t,i,a={},_={}){const n=o!=null&&!isNaN(o)?o:1013.25,s=t!=null&&!isNaN(t)?t:n,c=i!=null&&!isNaN(i)?i:n-s,y=960,m=1060,x=-120,p=120;function v(e){const r=Math.max(y,Math.min(m,e));return x+(r-y)/(m-y)*(p-x)}function E(e){return Math.max(-4,Math.min(4,e))/4*45}const L=v(n),C=v(s),z=E(c),O=_.showSubdial!==!1,f="vb"+ ++te,M=200,d=200;let V="",A="";for(let e=960;e<=1060;e+=1){const l=(v(e)-90)*(Math.PI/180),g=e%10===0,$=e%5===0,P=168,j=g?152:$?157:162,H=g?1.6:$?1:.6,G=(M+P*Math.cos(l)).toFixed(1),W=(d+P*Math.sin(l)).toFixed(1),U=(M+j*Math.cos(l)).toFixed(1),q=(d+j*Math.sin(l)).toFixed(1);if(V+=`<line x1="${G}" y1="${W}" x2="${U}" y2="${q}" stroke="#2e200c" stroke-width="${H}" stroke-linecap="round"/>`,g){const K=(M+138*Math.cos(l)).toFixed(1),Y=(d+138*Math.sin(l)+3.5).toFixed(1);A+=`<text x="${K}" y="${Y}" font-size="9" font-weight="800" fill="#1c1204">${e}</text>`}}for(let e=720;e<=795;e+=5){const r=e*1.33322;if(r>=y&&r<=m){const g=(v(r)-90)*(Math.PI/180),$=(M+143*Math.cos(g)).toFixed(1),P=(d+143*Math.sin(g)).toFixed(1),j=(M+148*Math.cos(g)).toFixed(1),H=(d+148*Math.sin(g)).toFixed(1);if(V+=`<line x1="${$}" y1="${P}" x2="${j}" y2="${H}" stroke="#7d6739" stroke-width="0.8"/>`,e%10===0){const G=(M+125*Math.cos(g)).toFixed(1),W=(d+125*Math.sin(g)+2.5).toFixed(1);A+=`<text x="${G}" y="${W}" font-size="7" font-weight="700" fill="#5e491c">${e}</text>`}}}const R=k(a.storm||"STORMY"),I=k(a.rain||"RAIN"),B=k(a.change||"CHANGE"),b=k(a.fair||"FAIR"),S=k(a.very_dry||"VERY DRY"),D=k(a.falling||"FALLING"),h=k(a.steady||"STEADY"),N=k(a.rising||"RISING"),w=k(a.delta_3h||"\u0394 3 HOURS"),F=k(a.aneroid||"ANEROID BAROMETER"),u=k(a.compensated||"Compensated for Temperature");return`<svg role="img" aria-label="${k(`${a.aneroid||"ANEROID BAROMETER"}: ${n.toFixed(1)} hPa, \u03943h ${c>=0?"+":""}${c.toFixed(1)} hPa`)}" viewBox="0 0 400 400" class="vintage-dial-svg" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="${f}_bezel" cx="50%" cy="50%" r="50%">
        <stop offset="85%" stop-color="#4a3718" />
        <stop offset="92%" stop-color="#cfab56" />
        <stop offset="96%" stop-color="#fdf3a9" />
        <stop offset="98%" stop-color="#8a6721" />
        <stop offset="100%" stop-color="#2a1d08" />
      </radialGradient>
      <linearGradient id="${f}_brass" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d4af37" />
        <stop offset="25%" stop-color="#fff2a3" />
        <stop offset="50%" stop-color="#99731d" />
        <stop offset="75%" stop-color="#ffd966" />
        <stop offset="100%" stop-color="#5e440e" />
      </linearGradient>
      <radialGradient id="${f}_parchment" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fffdf5" />
        <stop offset="65%" stop-color="#f5eed7" />
        <stop offset="88%" stop-color="#e6dcbc" />
        <stop offset="100%" stop-color="#c4b48d" />
      </radialGradient>
      <linearGradient id="${f}_steel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1c2536" />
        <stop offset="50%" stop-color="#2b3b54" />
        <stop offset="100%" stop-color="#0f1622" />
      </linearGradient>
      <linearGradient id="${f}_gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#e5c158" />
        <stop offset="50%" stop-color="#fff5b8" />
        <stop offset="100%" stop-color="#9a741c" />
      </linearGradient>
      <filter id="${f}_shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
      </filter>
    </defs>

    <!-- Outer Brass Bezel -->
    <circle cx="200" cy="200" r="196" fill="url(#${f}_bezel)" stroke="#1a1103" stroke-width="2" />
    
    <!-- Brass Screws -->
    <g fill="#ffd966" stroke="#4a3718" stroke-width="1">
      <circle cx="200" cy="10" r="3.5" />
      <circle cx="200" cy="390" r="3.5" />
      <circle cx="10" cy="200" r="3.5" />
      <circle cx="390" cy="200" r="3.5" />
      <circle cx="66" cy="66" r="3.5" />
      <circle cx="334" cy="66" r="3.5" />
      <circle cx="66" cy="334" r="3.5" />
      <circle cx="334" cy="334" r="3.5" />
    </g>

    <!-- Inner Stepped Brass Rim -->
    <circle cx="200" cy="200" r="176" fill="none" stroke="url(#${f}_brass)" stroke-width="8" />
    <circle cx="200" cy="200" r="172" fill="none" stroke="#2a1e09" stroke-width="1.5" />

    <!-- Parchment Dial Face -->
    <circle cx="200" cy="200" r="170" fill="url(#${f}_parchment)" />
    <circle cx="200" cy="200" r="170" fill="none" stroke="#8c7849" stroke-width="1" opacity="0.6" />
    <circle cx="200" cy="200" r="148" fill="none" stroke="#a08955" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.7" />
    <circle cx="200" cy="200" r="115" fill="none" stroke="#a08955" stroke-width="0.6" opacity="0.5" />

    <!-- Weather Condition Arc Labels -->
    <g font-family="'Cinzel', Georgia, serif" font-weight="800" text-anchor="middle" fill="#2d1f0e">
      <text transform="translate(110, 275) rotate(-45)" font-size="11" letter-spacing="1">${R}</text>
      <text transform="translate(96, 185) rotate(-22)" font-size="11.5" letter-spacing="1.5">${I}</text>
      <text transform="translate(200, 94)" font-size="13" font-weight="900" letter-spacing="2.5" fill="#1f1406">${B}</text>
      <text transform="translate(304, 185) rotate(22)" font-size="11.5" letter-spacing="1.5">${b}</text>
      <text transform="translate(290, 275) rotate(45)" font-size="11" letter-spacing="1">${S}</text>
    </g>

    <!-- Center Inscription -->
    <g text-anchor="middle">
      <text x="200" y="145" font-family="'Cinzel', Georgia, serif" font-size="11" font-weight="bold" fill="#523d1c" letter-spacing="3">${F}</text>
      <path d="M 140 152 Q 200 156 260 152" fill="none" stroke="#7a5d2e" stroke-width="0.8" />
      <text x="200" y="166" font-family="'Playfair Display', Georgia, serif" font-style="italic" font-size="9" fill="#755a2f">${u}</text>
    </g>

    <!-- Sub-Dial: 3h Pressure Trend Indicator -->
    ${O?`
    <g class="v-subdial" transform="translate(200, 260)">
      <circle cx="0" cy="0" r="32" fill="#f4ebd0" stroke="#8a7346" stroke-width="1.2" />
      <circle cx="0" cy="0" r="30" fill="none" stroke="#b09b6c" stroke-width="0.5" stroke-dasharray="1.5 1.5" />
      <text x="-18" y="16" font-family="'Cinzel', Georgia, serif" font-size="6.5" font-weight="bold" fill="#8f2d18" text-anchor="middle">${D}</text>
      <text x="0" y="-19" font-family="'Cinzel', Georgia, serif" font-size="6.5" font-weight="bold" fill="#4d3b20" text-anchor="middle">${h}</text>
      <text x="18" y="16" font-family="'Cinzel', Georgia, serif" font-size="6.5" font-weight="bold" fill="#1b5e20" text-anchor="middle">${N}</text>
      <text x="0" y="11" font-family="sans-serif" font-size="6" fill="#7a6745" text-anchor="middle">${w}</text>
      <line x1="-24" y1="0" x2="-20" y2="0" stroke="#4a391e" stroke-width="0.8"/>
      <line x1="0" y1="-24" x2="0" y2="-20" stroke="#4a391e" stroke-width="0.8"/>
      <line x1="24" y1="0" x2="20" y2="0" stroke="#4a391e" stroke-width="0.8"/>
      <g class="v-needle-trend" style="transform-origin:0px 0px; transform:rotate(${z.toFixed(1)}deg);">
        <path d="M -1.5 6 L -0.6 -22 L 0.6 -22 L 1.5 6 Z" fill="#8f2d18" />
        <circle cx="0" cy="0" r="3" fill="#3a2a11" stroke="#ffd966" stroke-width="0.6"/>
      </g>
    </g>`:""}

    <!-- Scale Ticks & Numbers -->
    <g stroke-linecap="round">${V}</g>
    <g font-family="'Cinzel', Georgia, serif" font-size="8.5" font-weight="700" fill="#2e200c" text-anchor="middle">${A}</g>

    <!-- NEEDLE 1: Reference Marker (3 Hours Ago) - Gold/Brass -->
    <g class="v-needle-ref" style="transform-origin:200px 200px; transform:rotate(${C.toFixed(1)}deg);" filter="url(#${f}_shadow)">
      <path d="M 197 60 L 200 48 L 203 60 L 201 100 L 199 100 Z" fill="url(#${f}_gold)" stroke="#664d12" stroke-width="0.7"/>
      <circle cx="200" cy="54" r="2.2" fill="#ffeaa7"/>
      <circle cx="200" cy="245" r="7" fill="none" stroke="url(#${f}_gold)" stroke-width="1.8"/>
      <line x1="200" y1="200" x2="200" y2="238" stroke="url(#${f}_gold)" stroke-width="1.8"/>
    </g>

    <!-- NEEDLE 2: Main Active Pressure Needle - Blued Steel -->
    <g class="v-needle-main" style="transform-origin:200px 200px; transform:rotate(${L.toFixed(1)}deg);" filter="url(#${f}_shadow)">
      <path d="M 198.5 200 L 197 105 Q 194 92 195.5 82 Q 197 72 200 45 Q 203 72 204.5 82 Q 206 92 203 105 L 201.5 200 Z" fill="url(#${f}_steel)"/>
      <line x1="200" y1="52" x2="200" y2="190" stroke="#718ba8" stroke-width="0.8" opacity="0.6"/>
      <polygon points="200,80 203.5,88 200,96 196.5,88" fill="#d4af37" stroke="#332408" stroke-width="0.5"/>
      <circle cx="200" cy="88" r="1.2" fill="#1b2838"/>
      <path d="M 198 200 L 196.5 240 Q 192 250 200 256 Q 208 250 203.5 240 L 202 200 Z" fill="url(#${f}_steel)"/>
      <circle cx="200" cy="245" r="4.5" fill="#151d2a" stroke="#d4af37" stroke-width="0.8"/>
    </g>

    <!-- Central Brass Hub -->
    <g filter="url(#${f}_shadow)">
      <circle cx="200" cy="200" r="18" fill="url(#${f}_brass)" stroke="#3d2c0e" stroke-width="1.5"/>
      <circle cx="200" cy="200" r="15" fill="#a8842c" stroke="#523c10" stroke-width="1"/>
      <circle cx="200" cy="200" r="9" fill="url(#${f}_bezel)" stroke="#2b1c05" stroke-width="1"/>
      <circle cx="200" cy="200" r="5" fill="#fdf0a6"/>
      <line x1="197" y1="197" x2="203" y2="203" stroke="#523c10" stroke-width="1"/>
    </g>

    <!-- Glass Reflection -->
    <circle cx="200" cy="200" r="170" fill="none" opacity="0.3" pointer-events="none"/>
  </svg>`}function ce(o,t=""){const n=2*Math.PI*44,s=n*.75,c=n-s,y=s*(o/100),m=n-y,x=-225,p=o<30?"#90CAF9":o<60?"#42A5F5":"#1565C0",v="pw"+ ++te,E=t?`${t}: ${o}%`:`Precipitation: ${o}%`;return`<svg role="img" aria-label="${k(E)}" viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <defs>
      <linearGradient id="${v}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${p}" stop-opacity="0.75"/>
        <stop offset="100%" stop-color="${p}" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="44" fill="none"
      stroke="rgba(255,255,255,0.20)" stroke-width="10"
      stroke-dasharray="${s.toFixed(2)} ${c.toFixed(2)}"
      stroke-linecap="round" transform="rotate(${x} 60 60)"/>
    <circle cx="60" cy="60" r="44" fill="none"
      stroke="url(#${v})" stroke-width="10"
      stroke-dasharray="${y.toFixed(2)} ${m.toFixed(2)}"
      stroke-linecap="round" transform="rotate(${x} 60 60)"
      style="transition:stroke-dasharray .9s ease"/>
    <text x="60" y="60" text-anchor="middle" dominant-baseline="central"
      fill="white" font-size="22" font-weight="900"
      font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">${o}%</text>
  </svg>`}function de(o,t,i){if(!o||o.length===0)return'<div class="tl-empty">\u2014 no trend data yet \u2014</div>';const a=i?28:34;function _(s){return`${String(s.getHours()).padStart(2,"0")}:${String(s.getMinutes()).padStart(2,"0")}`}return`<div class="tl-inner">${o.map((s,c)=>{const y=c===o.length-1,m=ae[s.state]||"partlycloudy",x=t[s.state]||s.state||"\u2014",p=x.split(/[,\s]+/)[0],v=_(s.t),E=s.isCurrent||y?" tl-current":"",L=ee(m,`${v}: ${x}`),C=y?"":'<div class="tl-arrow">\u203A</div>';return`
      <div class="tl-step${E}">
        <div class="tl-icon" style="width:${a}px;height:${a}px">${L}</div>
        <div class="tl-lbl">${k(p)}</div>
        <div class="tl-time">${k(v)}</div>
      </div>
      ${C}`}).join("")}</div>`}function ge(o,t,i){if(!o||o.length<2)return'<div class="hchart-empty">\u2014 no history data yet \u2014</div>';const a=560,_=i?150:200,n={top:22,right:16,bottom:38,left:56},s=a-n.left-n.right,c=_-n.top-n.bottom,y=i?11:13,m="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",x="hc"+ ++te;let p=o.filter(e=>e.p!=null),v=o.filter(e=>e.precip!=null);if(p.length>=4){const e=[...p].map($=>$.p).sort(($,P)=>$-P),r=e[Math.floor(e.length*.25)],l=e[Math.floor(e.length*.75)],g=l-r;p=p.filter($=>$.p>=r-3*g&&$.p<=l+3*g)}let E=980,L=1040;if(p.length){const e=p.map($=>$.p),r=Math.min(...e),l=Math.max(...e),g=Math.max(2,(l-r)*.15);E=Math.floor(r-g),L=Math.ceil(l+g)}const C=o[0].t.getTime(),z=o[o.length-1].t.getTime(),O=z-C||1;function f(e){return n.left+(e.getTime()-C)/O*s}function M(e){return n.top+(1-(e-E)/(L-E))*c}function d(e){return n.top+(1-e/100)*c}function V(e,r){return e.length?e.map((l,g)=>`${g===0?"M":"L"}${f(l.t).toFixed(1)},${r(g===0?e[0][r===M?"p":"precip"]:l[r===M?"p":"precip"]).toFixed(1)}`).join(" "):""}const A=p.map((e,r)=>`${r===0?"M":"L"}${f(e.t).toFixed(1)},${M(e.p).toFixed(1)}`).join(" "),R=v.map((e,r)=>`${r===0?"M":"L"}${f(e.t).toFixed(1)},${d(e.precip).toFixed(1)}`).join(" "),I=p.length?A+` L${f(p[p.length-1].t).toFixed(1)},${(n.top+c).toFixed(1)} L${f(p[0].t).toFixed(1)},${(n.top+c).toFixed(1)} Z`:"",B=i?3:4,b=Math.ceil((L-E)/(B-1)/5)*5,S=[];for(let e=Math.ceil(E/5)*5;e<=L;e+=b)S.push(e);const D=[0,25,50,75,100],h=[];{const e=new Date(C);e.setMinutes(0,0,0),e.setHours(e.getHours()+1);const r=new Date(e);for(;r.getTime()<=z;)r.getHours()%6===0&&h.push({t:new Date(r),label:`${String(r.getHours()).padStart(2,"0")}:00`}),r.setHours(r.getHours()+1)}const N=f(new Date(z));let w="";if(p.length){const e=p[p.length-1],r=f(e.t),l=M(e.p);w=`
      <circle cx="${r.toFixed(1)}" cy="${l.toFixed(1)}" r="5" fill="#90CAF9" stroke="#fff" stroke-width="1.5"/>
      <text x="${(r-8).toFixed(1)}" y="${(l+14).toFixed(1)}" text-anchor="middle"
        fill="#90CAF9" font-size="${y+2}" font-weight="800"
        font-family="${m}">${e.p.toFixed(1)}</text>`}let F="";if(v.length){const e=v[v.length-1],r=f(e.t),l=d(e.precip);F=`
      <circle cx="${r.toFixed(1)}" cy="${l.toFixed(1)}" r="4.5" fill="rgba(255,255,255,0.90)" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
      <text x="${(r-8).toFixed(1)}" y="${(l-10).toFixed(1)}" text-anchor="middle"
        fill="rgba(255,255,255,0.85)" font-size="${y+1}" font-weight="700"
        font-family="${m}">${e.precip.toFixed(0)}%</text>`}const u=v.length?R+` L${f(v[v.length-1].t).toFixed(1)},${(n.top+c).toFixed(1)} L${f(v[0].t).toFixed(1)},${(n.top+c).toFixed(1)} Z`:"";let T="24-hour pressure and precipitation chart";if(p.length){const e=p.map(r=>r.p);T=`24-hour pressure and precipitation chart: pressure from ${Math.min(...e).toFixed(1)} to ${Math.max(...e).toFixed(1)} hPa`}return`<svg role="img" aria-label="${k(T)}" viewBox="0 0 ${a} ${_}" class="history-chart-svg" xmlns="http://www.w3.org/2000/svg"
    style="width:100%;height:100%;display:block;overflow:visible;cursor:crosshair">
    <defs>
      <linearGradient id="${x}_p" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="#90CAF9" stop-opacity="0.40"/>
        <stop offset="100%" stop-color="#90CAF9" stop-opacity="0.05"/>
      </linearGradient>
      <linearGradient id="${x}_pr" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="rgba(255,255,255,0.22)" stop-opacity="1"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.02)" stop-opacity="1"/>
      </linearGradient>
      <clipPath id="${x}_clip">
        <rect x="${n.left}" y="${n.top}" width="${s}" height="${c}"/>
      </clipPath>
    </defs>

    <!-- Horizontal grid lines (pressure ticks) -->
    ${S.map(e=>{const r=M(e).toFixed(1);return`<line x1="${n.left}" y1="${r}" x2="${n.left+s}" y2="${r}"
        stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-dasharray="4 5"/>`}).join("")}
    <!-- Vertical grid lines (time ticks) -->
    ${h.map(({t:e})=>{const r=f(e).toFixed(1);return`<line x1="${r}" y1="${n.top}" x2="${r}" y2="${n.top+c}"
        stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="2 5"/>`}).join("")}

    <g clip-path="url(#${x}_clip)">
      <!-- Precip area fill -->
      ${u?`<path d="${u}" fill="url(#${x}_pr)"/>`:""}
      <!-- Precip line: dashed white, visible on any background -->
      ${R?`<path d="${R}" fill="none" stroke="rgba(255,255,255,0.72)"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        stroke-dasharray="5 4"/>`:""}
      <!-- Pressure area fill -->
      ${I?`<path d="${I}" fill="url(#${x}_p)"/>`:""}
      <!-- Pressure line: solid, on top -->
      ${A?`<path d="${A}" fill="none" stroke="#90CAF9"
        stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>`:""}
      ${w}
      ${F}
    </g>

    <!-- Left Y-axis labels (pressure) -->
    ${S.map(e=>{const r=M(e);return r<n.top-4||r>n.top+c+4?"":`<text x="${n.left-7}" y="${r.toFixed(1)}" text-anchor="end"
        dominant-baseline="middle" fill="rgba(255,255,255,0.70)"
        font-size="${y}" font-family="${m}">${e}</text>`}).join("")}

    <!-- Right Y-axis labels (precip %) \u2014 positioned inside right edge -->
    ${D.map(e=>{const r=d(e);return r<n.top-4||r>n.top+c+4?"":`<text x="${(n.left+s-2).toFixed(1)}" y="${r.toFixed(1)}" text-anchor="end"
        dominant-baseline="middle" fill="rgba(255,255,255,0.45)"
        font-size="${y-2}" font-family="${m}">${e}%</text>`}).join("")}

    <!-- X-axis time labels -->
    ${h.map(({t:e,label:r})=>{const l=f(e);return l<n.left+6||l>n.left+s-6?"":`<text x="${l.toFixed(1)}" y="${(n.top+c+15).toFixed(1)}" text-anchor="middle"
        fill="rgba(255,255,255,0.55)" font-size="${y}"
        font-family="${m}">${r}</text>`}).join("")}

    <!-- Axis borders -->
    <line x1="${n.left}" y1="${n.top}" x2="${n.left}" y2="${n.top+c}"
      stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
    <line x1="${n.left}" y1="${n.top+c}" x2="${n.left+s}" y2="${n.top+c}"
      stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>

    <!-- Legend -->
    <circle cx="${n.left+7}" cy="${n.top-7}" r="4" fill="#90CAF9"/>
    <text x="${n.left+15}" y="${n.top-4}" fill="rgba(255,255,255,0.70)"
      font-size="${y}" font-family="${m}" dominant-baseline="middle">hPa</text>
    <circle cx="${n.left+52}" cy="${n.top-7}" r="4" fill="rgba(255,255,255,0.80)"/>
    <text x="${n.left+60}" y="${n.top-4}" fill="rgba(255,255,255,0.60)"
      font-size="${y}" font-family="${m}" dominant-baseline="middle">precip %</text>

    <!-- Interactive Scrub Cursor & Tooltip -->
    <g class="hchart-scrub-cursor" style="opacity:0; pointer-events:none; transition:opacity 0.15s ease-out;">
      <line class="hchart-scrub-line" x1="${n.left}" y1="${n.top}" x2="${n.left}" y2="${n.top+c}" stroke="#FFD54F" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle class="hchart-scrub-dot-halo" cx="${n.left}" cy="${n.top}" r="8" fill="rgba(255,213,79,0.3)"/>
      <circle class="hchart-scrub-dot" cx="${n.left}" cy="${n.top}" r="4.5" fill="#FFD54F" stroke="#ffffff" stroke-width="1.5"/>
      <g class="hchart-scrub-tip" transform="translate(${n.left+40}, ${n.top+10})">
        <rect x="-38" y="-11" width="76" height="22" rx="6" fill="#0f172a" stroke="#FFD54F" stroke-width="1" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"/>
        <text class="hchart-scrub-tip-txt" x="0" y="3.5" fill="#ffffff" font-size="${y+1}" font-weight="700" text-anchor="middle" font-family="${m}">1014.2 hPa</text>
      </g>
    </g>
  </svg>`}function pe(o,t){if(o==null)return null;const i=typeof o=="number"?o:parseFloat(o);if(isNaN(i))return null;switch((t||"hpa").trim().toLowerCase()){case"hpa":case"mbar":return i;case"mmhg":return i*1.33322387415;case"inhg":return i*33.863886666667;case"psi":return i*68.947572932;case"pa":return i/100;case"kpa":return i*10;case"bar":return i*1e3;default:return i}}class we extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config={},this._historyPoints=null,this._historyFetching=!1}static async getConfigElement(){return await import(new URL("./zambretti-weather-card-editor.js",import.meta.url).href),document.createElement("zambretti-weather-card-editor")}static getStubConfig(t){let i="sensor.zambretti_forecast",a="sensor.sager_forecast",_="sensor.zambretti_forecast_6h",n="sensor.zambretti_forecast_12h",s="sensor.zambretti_forecast_24h",c="sensor.precipitation_probability";if(t&&t.states){const y=Object.keys(t.states),m=x=>y.find(p=>p.includes(x));i=m("zambretti_forecast")||m("zambretti")||i,a=m("sager_forecast")||m("sager")||a,_=m("zambretti_forecast_6h")||m("forecast_6h")||_,n=m("zambretti_forecast_12h")||m("forecast_12h")||n,s=m("zambretti_forecast_24h")||m("forecast_24h")||s,c=m("precip_probability")||m("precipitation_probability")||c}return{entity_zambretti:i,entity_sager:a,entity_6h:_,entity_12h:n,entity_24h:s,entity_precip:c,entity_wind_speed:"",card_style:"modern",show_wind:!0,show_sager:!0,show_precip:!0,show_forecasts:!0,show_trend:!1,show_history:!1,language:"auto",wind_unit:"m/s",compact:!1,auto_theme:!0,theme_alpha:100}}setConfig(t){this._rendered=!1,this._entitiesResolved=!1,(t.show_history!==this._config.show_history||t.show_trend!==this._config.show_trend)&&(this._historyPoints=null,this._timelineSteps=null),this._config={entity_zambretti:"sensor.zambretti_forecast",entity_sager:"sensor.sager_forecast",entity_6h:"sensor.zambretti_forecast_6h",entity_12h:"sensor.zambretti_forecast_12h",entity_24h:"sensor.zambretti_forecast_24h",entity_precip:"sensor.precipitation_probability",entity_wind_speed:"",show_wind:!0,show_trend:!1,show_history:!1,language:"auto",wind_unit:"m/s",compact:!1,show_sager:!0,show_precip:!0,show_forecasts:!0,auto_theme:!0,theme_alpha:t.theme_alpha??100,custom_bg:"linear-gradient(135deg,#1565C0 0%,#1976D2 100%)",...t}}_resolveEntities(t){const i=t?.states||{},a={};let _=this._config.entity_zambretti;(!_||!i[_])&&(_=Object.keys(i).find(c=>{if(!c.startsWith("sensor."))return!1;const y=c.slice(7);return y==="zambretti_forecast"||y.endsWith("_zambretti_forecast")||y.endsWith("_zambretti")})),_&&(a.entity_zambretti=_);let n="";_&&(_.endsWith("_zambretti_forecast")?n=_.slice(0,-18):_.endsWith("_zambretti")?n=_.slice(0,-9):(_==="sensor.zambretti_forecast"||_==="sensor.zambretti")&&(n="sensor."));const s={entity_sager:["sager_forecast","sager"],entity_6h:["zambretti_forecast_6h","forecast_6h"],entity_12h:["zambretti_forecast_12h","forecast_12h"],entity_24h:["zambretti_forecast_24h","forecast_24h"],entity_precip:["precipitation_probability","precip_probability"],entity_pressure:["pressure","barometric_pressure"]};for(const[c,y]of Object.entries(s)){const m=this._config[c];if(m&&i[m]&&(!n||m.startsWith(n))){a[c]=m;continue}let x=null;if(n)for(const p of y){const v=`${n}${p}`;if(i[v]){x=v;break}}x||(x=Object.keys(i).find(p=>{if(!p.startsWith("sensor."))return!1;const v=p.slice(7);return y.some(E=>v===E||v.endsWith(`_${E}`))})),x&&(a[c]=x)}return a}set hass(t){const i=this._hass;if(this._hass=t,!this._entitiesResolved){const c=this._resolveEntities(t);Object.keys(c).length>0&&(this._config={...this._config,...c}),this._entitiesResolved=!0}const a=this._config.entity_zambretti,_=i?.states?.[a]?.state,n=t?.states?.[a]?.state,s=(_==="unavailable"||_==="unknown"||!_)&&n&&n!=="unavailable"&&n!=="unknown";(this._config.show_history||this._config.show_trend)&&this._scheduleHistoryFetch(s),this._rendered?this._patch():this._render()}_scheduleHistoryFetch(t=!1){if(this._historyFetching)return;const i=this._config;if(!i.show_history&&!i.show_trend)return;if(typeof document<"u"&&document.hidden){this._historyFetchPending=!0;return}const a=Date.now(),n=Array.isArray(this._historyPoints)&&this._historyPoints.length>=2||Array.isArray(this._timelineSteps)&&this._timelineSteps.length>0?300*1e3:15*1e3;!t&&this._historyFetchedAt&&a-this._historyFetchedAt<n||(this._historyFetching=!0,this._doFetchHistory().then(()=>{this._historyFetching=!1,this._historyFetchedAt=Date.now(),this._rendered&&(typeof document>"u"||!document.hidden)&&(this._config.show_history&&this._patchChart(),this._config.show_trend&&this._patchTimeline())}).catch(()=>{this._historyFetching=!1}))}async _doFetchHistory(){if(!this._hass)return;const t=this._config,i=new Date,a=t.entity_zambretti,_=t.entity_precip,n=this._attr(a,"pressure_sensor",null)||t.entity_pressure||null;if(!a&&!_&&!n)return;const s=t.show_history!==!1&&!!t.show_history,c=t.show_trend!==!1&&!!t.show_trend;if(!s&&!c)return;const y=c||!n&&s,m=s&&t.show_precip!==!1&&!!_,x=s&&!!n;if(!y&&!m&&!x)return;const p=new Date(i.getTime()-1440*60*1e3),v=new Date(i.getTime()-2880*60*1e3);try{let z=function(e){return Math.round(e.getTime()/(300*1e3))},O=function(e){return e.lu!=null?new Date(e.lu*1e3):e.last_updated?new Date(e.last_updated):new Date},f=function(e){return e.state??e.s??null},M=function(e){return e.attributes??e.a??{}};const[E,L,C]=await Promise.all([y&&a?this._hass.callWS({type:"history/history_during_period",start_time:v.toISOString(),end_time:i.toISOString(),entity_ids:[a],minimal_response:!1,no_attributes:!1,significant_changes_only:!1}):Promise.resolve({}),m&&_?this._hass.callWS({type:"history/history_during_period",start_time:p.toISOString(),end_time:i.toISOString(),entity_ids:[_],minimal_response:!0,no_attributes:!0,significant_changes_only:!1}):Promise.resolve({}),x&&n?this._hass.callWS({type:"history/history_during_period",start_time:p.toISOString(),end_time:i.toISOString(),entity_ids:[n],minimal_response:!0,no_attributes:!0,significant_changes_only:!1}):Promise.resolve({})]),d=new Map,V=E[a]||[],A=p.getTime(),R=this._attr(a,"pressure_hpa",null),I=R!=null&&!isNaN(parseFloat(R))?parseFloat(R):NaN;if(n){const e=C[n]||[],r=this._attr(n,"unit_of_measurement","hPa"),l=this._state(n),g=pe(l,r);let $=0;!isNaN(I)&&g!=null&&!isNaN(g)&&($=I-g);for(const j of e){const H=O(j);if(H.getTime()<A)continue;const G=z(H),W=f(j),U=pe(W,r);d.has(G)||d.set(G,{t:H,p:null,precip:null}),U!=null&&!isNaN(U)&&(d.get(G).p=U+$)}const P=isNaN(I)?g!=null?g+$:null:I;if(P!=null&&!isNaN(P)){const j=z(i);d.has(j)||d.set(j,{t:i,p:null,precip:null}),d.get(j).p=P}}else{for(const e of V){const r=O(e);if(r.getTime()<A)continue;const l=z(r),g=M(e),$=parseFloat(g.pressure_hpa);d.has(l)||d.set(l,{t:r,p:null,precip:null}),isNaN($)||(d.get(l).p=$)}if(!isNaN(I)){const e=z(i);d.has(e)||d.set(e,{t:i,p:null,precip:null}),d.get(e).p=I}}let B=[...d.keys()].sort((e,r)=>e-r),b=null;for(const e of B){const r=d.get(e);r.p!=null?b=r.p:b!=null&&(r.p=b)}let S=null;for(const e of B)if(d.get(e).p!=null){S=d.get(e).p;break}if(S!=null)for(const e of B){const r=d.get(e);if(r.p!=null)break;r.p=S}const h=(L[_]||[]).map(e=>({t:O(e),v:parseFloat(f(e))})).filter(e=>!isNaN(e.v)).sort((e,r)=>e.t-r.t),N=parseFloat(this._hass?.states?.[_]?.state);if(!isNaN(N)){const e=z(i);d.has(e)||d.set(e,{t:i,p:null,precip:null}),d.get(e).precip=N,h.push({t:i,v:N}),h.sort((r,l)=>r.t-l.t)}if(h.length){for(const{t:l,v:g}of h){if(l.getTime()<A)continue;const $=z(l);d.has($)||d.set($,{t:l,p:null,precip:null}),d.get($).precip=g}B.length=0,B.push(...[...d.keys()].sort((l,g)=>l-g)),b=null;for(const l of B){const g=d.get(l);g.p!=null?b=g.p:b!=null&&(g.p=b)}if(S!=null)for(const l of B){const g=d.get(l);if(g.p!=null)break;g.p=S}let e=0,r=h[0].v;for(const l of B){const g=d.get(l).t.getTime();for(;e+1<h.length&&h[e+1].t.getTime()<=g;)e++;h[e].t.getTime()<=g&&(r=h[e].v),d.get(l).precip==null&&(d.get(l).precip=r)}}this._historyPoints=B.map(e=>d.get(e));const w=V.map(e=>({t:O(e),state:f(e)})).filter(e=>e.state&&e.state!=="unknown"&&e.state!=="unavailable").sort((e,r)=>e.t-r.t),F=[];for(const e of w){const r=F[F.length-1];if(!(r&&r.state===e.state)){if(r&&e.t.getTime()-r.t.getTime()<1800*1e3){r.state=e.state,r.t=e.t;continue}F.push({t:e.t,state:e.state})}}const u=F.slice(-7),T=this._hass.states[a]?.state;if(T&&T!=="unknown"&&T!=="unavailable"){const e=u[u.length-1];!e||e.state!==T?u.push({t:new Date,state:T,isCurrent:!0}):(e.isCurrent=!0,e.t=new Date)}this._timelineSteps=u}catch{this._historyPoints=[],this._timelineSteps=[]}}_patchChart(){const t=this.shadowRoot?.querySelector(".history-chart-wrap");if(!t){this._rendered=!1,this._render();return}const i=!!this._config.compact;t.style.height=`${i?150:200}px`;const a=this._labels();t.innerHTML=ge(this._historyPoints,a,i),this._setupHistoryScrubbing()}_setupHistoryScrubbing(){const t=this.shadowRoot?.querySelector(".history-chart-svg");if(!t||!Array.isArray(this._historyPoints)||this._historyPoints.length<2)return;let i=this._historyPoints.filter(h=>h.p!=null);if(i.length<2)return;const a=this._historyPoints.filter(h=>h.precip!=null),_=this.shadowRoot?.querySelector(".history-title"),n='<svg aria-hidden="true" viewBox="0 0 16 16" width="12" height="12" style="vertical-align:-1px;margin-right:4px;opacity:0.7"><polyline points="1,12 5,6 8,9 11,4 15,7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>24h',s=t.querySelector(".hchart-scrub-cursor"),c=t.querySelector(".hchart-scrub-line"),y=t.querySelector(".hchart-scrub-dot"),m=t.querySelector(".hchart-scrub-dot-halo"),x=t.querySelector(".hchart-scrub-tip"),p=t.querySelector(".hchart-scrub-tip-txt");if(!s||!c||!y||!x)return;if(i.length>=4){const h=[...i].map(u=>u.p).sort((u,T)=>u-T),N=h[Math.floor(h.length*.25)],w=h[Math.floor(h.length*.75)],F=w-N;i=i.filter(u=>u.p>=N-3*F&&u.p<=w+3*F)}if(i.length<2)return;const v=!!this._config.compact,E=560,L=v?150:200,C={top:22,right:16,bottom:38,left:56},z=E-C.left-C.right,O=L-C.top-C.bottom,f=i.map(h=>h.p),M=Math.min(...f),d=Math.max(...f),V=Math.max(2,(d-M)*.15),A=Math.floor(M-V),R=Math.ceil(d+V),I=this._historyPoints[0].t.getTime(),B=this._historyPoints[this._historyPoints.length-1].t.getTime(),b=Math.max(B-I,1),S=h=>{const N=t.getBoundingClientRect(),w=h.touches?h.touches[0].clientX:h.clientX,u=Math.max(0,Math.min(1,(w-N.left)/N.width))*E,T=Math.max(C.left,Math.min(C.left+z,u)),e=I+(T-C.left)/z*b;let r=i[0],l=1/0;for(const q of i){const Z=Math.abs(q.t.getTime()-e);Z<l&&(l=Z,r=q)}const g=C.top+(1-(r.p-A)/(R-A))*O,$=C.left+(r.t.getTime()-I)/b*z;s.style.opacity="1",c.setAttribute("x1",$.toFixed(1)),c.setAttribute("x2",$.toFixed(1)),y.setAttribute("cx",$.toFixed(1)),y.setAttribute("cy",g.toFixed(1)),m&&(m.setAttribute("cx",$.toFixed(1)),m.setAttribute("cy",g.toFixed(1)));const P=Math.max(C.left+40,Math.min(C.left+z-40,$)),j=Math.max(C.top+10,g-18);x.setAttribute("transform",`translate(${P.toFixed(1)}, ${j.toFixed(1)})`),p&&(p.textContent=`${r.p.toFixed(1)} hPa`);const G=((new Date().getTime()-r.t.getTime())/(3600*1e3)).toFixed(1),W=r.t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});let U="";if(a.length){let q=a[0],Z=1/0;for(const K of a){const Y=Math.abs(K.t.getTime()-e);Y<Z&&(Z=Y,q=K)}q&&q.precip>0&&(U=` \xB7 \u{1F4A7} ${q.precip.toFixed(0)}%`)}_&&(_.innerHTML=`<span style="color:#FFD54F">\u23F1 ${W} (-${G}h): <b>${r.p.toFixed(1)} hPa</b>${U}</span>`)},D=()=>{s.style.opacity="0",_&&(_.innerHTML=n)};t.onmousemove=S,t.onmouseleave=D,t.ontouchmove=h=>{h.preventDefault(),S(h)},t.ontouchend=D}_patchTimeline(){const t=this.shadowRoot?.querySelector(".trend-timeline-wrap");if(!t){this._rendered=!1,this._render();return}const i=this._labels();t.innerHTML=de(this._timelineSteps,i,!!this._config.compact)}connectedCallback(){this._bgHandler=t=>{if(this._config&&this._config.auto_theme===!1){this._config={...this._config,custom_bg:t.detail.bg};const i=this.shadowRoot.querySelector("ha-card");i&&(i.style.background=t.detail.bg)}},window.addEventListener("zambretti-bg-preview",this._bgHandler),this._visibilityHandler=()=>{typeof document<"u"&&!document.hidden&&this._historyFetchPending&&(this._historyFetchPending=!1,this._scheduleHistoryFetch())},typeof document<"u"&&document.addEventListener("visibilitychange",this._visibilityHandler)}disconnectedCallback(){window.removeEventListener("zambretti-bg-preview",this._bgHandler),this._visibilityHandler&&typeof document<"u"&&document.removeEventListener("visibilitychange",this._visibilityHandler)}_state(t){return this._hass?.states?.[t]?.state??null}_attr(t,i,a){return this._hass?.states?.[t]?.attributes?.[i]??a}_labels(){return he(this._config.language||"auto",this._hass?.language||"en")}_vintageLabels(){return fe(this._config.language||"auto",this._hass?.language||"en")}_precipLabel(){return me(this._config.language||"auto",this._hass?.language||"en")}_computeThemeBg(t,i){const a=this._config;if(i&&!a.custom_bg)return"radial-gradient(circle at 50% 25%, #2d1f14 0%, #19110a 55%, #0d0805 100%)";const _=a.auto_theme!==!1,n=_?ye(t).bg:a.custom_bg||oe.bg;return _?be(n,a.theme_alpha):n}_render(){if(!this._hass)return;const t=this._config,i=this._labels(),a=!!t.compact,_=t.card_style==="vintage",n=t.card_style==="tile",s=this._state(t.entity_zambretti),c=this._state(t.entity_sager),y=this._state(t.entity_6h),m=this._state(t.entity_12h),x=this._state(t.entity_24h),p=Math.max(0,Math.min(100,parseInt(this._state(t.entity_precip)||"0",10)||0)),v=this._attr(t.entity_zambretti,"is_night",!1),E=se(s,v),L=v&&(s==="settled_fine"||s==="fine_weather")?"night_clear":J[s]||"partlycloudy",C=t.show_wind!==!1;let z="";if(C){const w=t.entity_wind_speed||t.entity_zambretti,F=t.entity_wind_speed?this._state(t.entity_wind_speed):this._attr(t.entity_zambretti,"wind_speed",null),u=this._attr(w,"unit_of_measurement","m/s"),T=this._attr(t.entity_zambretti,"wind_degrees",null),e=this._attr(t.entity_zambretti,"wind_direction",null)||le(T),r=_e(F,t.wind_unit||"m/s",u);z=r?e?`${e} ${r}`:r:e||""}const f={bg:this._computeThemeBg(L,_)},M=i[s]||s||"\u2014",d=i[c]||c||"\u2014",V=ee(E,M),A=this._precipLabel(),R=t.show_precip!==!1,I=t.show_forecasts!==!1,B=t.show_sager!==!1,b=!!t.show_history,S=!!t.show_trend,D=[{label:"6h",key:y},{label:"12h",key:m},{label:"24h",key:x}].map(w=>{const F=i[w.key]||w.key||"\u2014",u=ee(J[w.key]||"partlycloudy",`${w.label}: ${F}`);return`
      <div class="fc">
        <span class="fc-time">${k(w.label)}</span>
        <span class="fc-icon">${u}</span>
        <span class="fc-lbl">${k(F)}</span>
      </div>`}).join("");let h="";if(n){const w=this._attr(t.entity_zambretti,"pressure_hpa",null)??this._state(t.entity_pressure),F=w!=null?parseFloat(w):1013.2,u=this._attr(t.entity_zambretti,"pressure_delta_3h",null),T=u!=null?parseFloat(u):0,e=this._attr(t.entity_zambretti,"trend","\u2192 Steady"),r=T>=1.4?"#4ade80":T<=-1.4?"#f87171":"#facc15",l=T>=1.4?"#86efac":T<=-1.4?"#fca5a5":"#fef08a";h=`
        <div class="tile-container">
          <div class="tile-header-wrap">
            <div class="tile-icon-box">${V}</div>
            <div class="tile-text-group">
              <div class="tile-title">${k(M)}</div>
              ${B?`<div class="tile-subtitle">${k(d)}</div>`:""}
            </div>
            <div class="tile-trend-pill">
              <span class="tile-trend-dot" style="background:${r}"></span>
              <span class="tile-trend-text" style="color:${l}">${k(e)}</span>
            </div>
          </div>
          <div class="tile-bottom-chips">
            <div class="tile-chips-left">
              ${R?`<span class="tile-chip tile-chip-precip">\u{1F4A7} ${k(p)}%</span>`:""}
              ${C&&z?`<span class="tile-chip tile-chip-wind">\u{1F4A8} ${k(z)}</span>`:""}
            </div>
            <span class="tile-chip tile-chip-pressure">\u23F1 ${F!=null&&!isNaN(F)?F.toFixed(1):"\u2014"} hPa</span>
          </div>
        </div>
      `}else if(_){const w=this._vintageLabels(),F=this._attr(t.entity_zambretti,"pressure_hpa",null)??this._state(t.entity_pressure),u=F!=null?parseFloat(F):1013.2,T=this._attr(t.entity_zambretti,"pressure_3h_ago",null),e=this._attr(t.entity_zambretti,"pressure_delta_3h",null),r=e!=null?parseFloat(e):0,l=T!=null?parseFloat(T):u-r,g=this._attr(t.entity_zambretti,"trend","\u2192 Steady"),$=ve(u,l,r,w,{showSubdial:t.show_subdial!==!1,compact:a}),P=r>=1.4?"#86efac":r<=-1.4?"#fca5a5":"#fef08a";h=`
        <div class="vintage-container">
          <div class="vintage-dial-wrap">${$}</div>
          <div class="vintage-readout">
            <div class="vintage-main-bar">
              <div class="vintage-forecast-title">${k(M)}</div>
              ${B?`<div class="vintage-sager-sub"><span class="vintage-badge">Sager</span> <span>${k(d)}</span></div>`:""}
            </div>
            <div class="vintage-metrics-grid">
              <div class="vintage-metric-box">
                <div class="vintage-metric-lbl">${k(w.current||"Current")}</div>
                <div class="vintage-metric-val v-p-hpa">${u!=null&&!isNaN(u)?u.toFixed(1):"\u2014"} <span style="font-size:0.75em;font-weight:400;color:#d4af37">hPa</span></div>
                <div class="vintage-metric-sub v-p-mm">${u!=null&&!isNaN(u)?(u*.750062).toFixed(1)+" mmHg":""}</div>
              </div>
              <div class="vintage-metric-box">
                <div class="vintage-metric-lbl">${k(w.trend||"Trend")} (3h)</div>
                <div class="vintage-metric-val v-trend-delta" style="color:${P}">${r!=null&&!isNaN(r)?(r>=0?"+":"")+r.toFixed(1)+" hPa":"\u2014"}</div>
                <div class="vintage-metric-sub v-trend-lbl">${k(g)}</div>
              </div>
            </div>
          </div>
        </div>
        ${I?`<div class="cell forecast-row" style="border-top:1px solid rgba(212,175,55,0.20)">${D}</div>`:""}
        <div class="footer" style="border-top:1px solid rgba(212,175,55,0.20)">
          ${z?`<span class="footer-wind">\u{1F4A8} ${k(z)}</span>`:""}
          ${R?`<span class="footer-precip">\u{1F4A7} ${k(A)}: ${k(p)}%</span>`:""}
        </div>
      `}else h=`
        <div class="grid" style="grid-template-columns:${R?"1fr 1fr":"1fr"}">
          <div class="cell main-cell">
            <div class="main-icon">${V}</div>
            <div class="main-info">
              <div class="main-label">${k(M)}</div>
              <div class="main-sub">Zambretti</div>
            </div>
          </div>
          ${R?`
          <div class="cell precip-cell">
            <div class="precip-title">${k(A)}</div>
            <div class="precip-widget">${ce(p,A)}</div>
          </div>`:""}
          ${I?`
          <div class="cell forecast-row">${D}</div>`:""}
        </div>
        <div class="footer">
          ${z?`<span class="footer-wind">\u{1F4A8} ${k(z)}</span>`:""}
          ${B?`
          <span class="footer-badge">Sager</span>
          <span class="footer-text">${k(d)}</span>`:""}
        </div>
      `;this.shadowRoot.innerHTML=`
      <style>${this._css(f,a,R,_,n)}</style>
      <ha-card>
        ${h}
        ${S?`
        <div class="trend-section">
          <div class="trend-title"><svg aria-hidden="true" viewBox="0 0 16 16" width="12" height="12" style="vertical-align:-1px;margin-right:4px;opacity:0.7"><circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="8" y1="4" x2="8" y2="8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="8" y1="8.5" x2="11" y2="10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>Trend</div>
          <div class="trend-timeline-wrap">${de(this._timelineSteps,i,a)}</div>
        </div>`:""}
        ${b?`
        <div class="history-section">
          <div class="history-title"><svg aria-hidden="true" viewBox="0 0 16 16" width="12" height="12" style="vertical-align:-1px;margin-right:4px;opacity:0.7"><polyline points="1,12 5,6 8,9 11,4 15,7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>24h</div>
          <div class="history-chart-wrap" style="height:${a?150:200}px">${ge(this._historyPoints,i,a)}</div>
        </div>`:""}
      </ha-card>`;const N=this.shadowRoot.querySelector("ha-card");N&&(N.style.background=f.bg),b&&this._setupHistoryScrubbing(),this._lastIconKey=E,this._lastThemeBg=f.bg,this._lastPrecip=p,this._lastStyle=t.card_style,this._rendered=!0}_patch(){if(!this._hass||!this._rendered)return;const t=this._config,i=this._labels(),a=this.shadowRoot,_=t.card_style==="vintage",n=t.card_style==="tile",s=this._state(t.entity_zambretti),c=this._state(t.entity_sager),y=this._state(t.entity_6h),m=this._state(t.entity_12h),x=this._state(t.entity_24h),p=Math.max(0,Math.min(100,parseInt(this._state(t.entity_precip)||"0",10)||0)),v=this._attr(t.entity_zambretti,"is_night",!1),E=se(s,v),L=v&&(s==="settled_fine"||s==="fine_weather")?"night_clear":J[s]||"partlycloudy",C=this._computeThemeBg(L,_);if(E!==this._lastIconKey||C!==this._lastThemeBg||t.card_style!==this._lastStyle){this._rendered=!1,this._render();return}const z=i[s]||s||"\u2014",O=i[c]||c||"\u2014",f=a.querySelector(".main-label");f&&f.textContent!==z&&(f.textContent=z);const M=a.querySelector(".main-icon svg, .tile-icon-box svg");M&&M.getAttribute("aria-label")!==z&&M.setAttribute("aria-label",z);const d=a.querySelector(".footer-text");d&&d.textContent!==O&&(d.textContent=O);const V=t.show_wind!==!1;let A="";if(V){const b=t.entity_wind_speed||t.entity_zambretti,S=t.entity_wind_speed?this._state(t.entity_wind_speed):this._attr(t.entity_zambretti,"wind_speed",null),D=this._attr(b,"unit_of_measurement","m/s"),h=this._attr(t.entity_zambretti,"wind_degrees",null),N=this._attr(t.entity_zambretti,"wind_direction",null)||le(h),w=_e(S,t.wind_unit||"m/s",D);A=w?N?`${N} ${w}`:w:N||""}const R=a.querySelector(".footer-wind");if(R){const b=A?`\u{1F4A8} ${A}`:"";R.textContent!==b&&(R.textContent=b),R.style.display=V?"":"none"}if(n){const b=this._attr(t.entity_zambretti,"pressure_hpa",null)??this._state(t.entity_pressure),S=b!=null?parseFloat(b):1013.2,D=this._attr(t.entity_zambretti,"pressure_delta_3h",null),h=D!=null?parseFloat(D):0,N=this._attr(t.entity_zambretti,"trend","\u2192 Steady"),w=h>=1.4?"#4ade80":h<=-1.4?"#f87171":"#facc15",F=h>=1.4?"#86efac":h<=-1.4?"#fca5a5":"#fef08a",u=a.querySelector(".tile-title");u&&u.textContent!==z&&(u.textContent=z);const T=a.querySelector(".tile-subtitle");T&&T.textContent!==O&&(T.textContent=O);const e=a.querySelector(".tile-trend-dot");e&&(e.style.background=w);const r=a.querySelector(".tile-trend-text");r&&(r.textContent!==N&&(r.textContent=N),r.style.color=F);const l=a.querySelector(".tile-chip-precip");l&&(l.textContent=`\u{1F4A7} ${p}%`);const g=a.querySelector(".tile-chip-pressure");g&&(g.textContent=`\u23F1 ${S.toFixed(1)} hPa`)}if(_){const b=this._attr(t.entity_zambretti,"pressure_hpa",null)??this._state(t.entity_pressure),S=b!=null?parseFloat(b):1013.2,D=this._attr(t.entity_zambretti,"pressure_3h_ago",null),h=this._attr(t.entity_zambretti,"pressure_delta_3h",null),N=h!=null?parseFloat(h):0,w=D!=null?parseFloat(D):S-N,F=this._attr(t.entity_zambretti,"trend","\u2192 Steady"),u=S!=null&&!isNaN(S)?S:1013.25,T=w!=null&&!isNaN(w)?w:u,e=N!=null&&!isNaN(N)?N:u-T,r=-120+(Math.max(960,Math.min(1060,u))-960)/100*240,l=-120+(Math.max(960,Math.min(1060,T))-960)/100*240,g=Math.max(-4,Math.min(4,e))/4*45,$=a.querySelector(".v-needle-main");$&&($.style.transform=`rotate(${r.toFixed(1)}deg)`);const P=a.querySelector(".v-needle-ref");P&&(P.style.transform=`rotate(${l.toFixed(1)}deg)`);const j=a.querySelector(".v-needle-trend");j&&(j.style.transform=`rotate(${g.toFixed(1)}deg)`);const H=a.querySelector(".vintage-forecast-title");H&&H.textContent!==z&&(H.textContent=z);const G=a.querySelector(".v-p-hpa");G&&(G.innerHTML=`${u.toFixed(1)} <span style="font-size:0.7em;font-weight:400;opacity:0.7">hPa</span>`);const W=a.querySelector(".v-p-mm");W&&(W.textContent=`${(u*.750062).toFixed(1)} mmHg`);const U=a.querySelector(".v-trend-delta");U&&(U.textContent=`${e>=0?"+":""}${e.toFixed(1)} hPa`,U.style.color=e>=1.4?"#4ade80":e<=-1.4?"#f87171":"#fef08a");const q=a.querySelector(".v-trend-lbl");q&&(q.textContent=F);const Z=this._precipLabel(),K=a.querySelector(".footer-precip");K&&(K.textContent=`\u{1F4A7} ${Z}: ${p}%`)}const I=a.querySelectorAll(".fc-lbl"),B=[y,m,x];if(I.forEach((b,S)=>{const D=i[B[S]]||B[S]||"\u2014";b.textContent!==D&&(b.textContent=D)}),p!==this._lastPrecip){const b=a.querySelector(".precip-widget");b&&(b.innerHTML=ce(p)),this._lastPrecip=p}if(t.show_trend&&this._timelineSteps){const b=this._timelineSteps[this._timelineSteps.length-1];s&&s!=="unknown"&&s!=="unavailable"&&b&&b.state!==s&&(this._timelineSteps.forEach(S=>{S.isCurrent=!1}),this._timelineSteps.push({t:new Date,state:s,isCurrent:!0}),this._timelineSteps.length>8&&this._timelineSteps.shift(),this._patchTimeline())}t.show_history&&this._historyPoints&&this._historyPoints.length>=2&&a.querySelector(".hchart-empty")&&this._patchChart(),t.show_trend&&this._timelineSteps&&this._timelineSteps.length>0&&a.querySelector(".tl-empty")&&this._patchTimeline()}_css(t,i,a=!0,_=!1,n=!1){const s=i?.82:1,c=Math.round(72*s),y=(1.15*s).toFixed(2),m=(.72*s).toFixed(2),x=Math.round(42*s),p=(.8*s).toFixed(2),v=Math.round(118*s),E=(.75*s).toFixed(2);return`
      :host { display:block; }
      ha-card {
        border-radius:22px; overflow:hidden;
        box-shadow:0 8px 36px rgba(0,0,0,0.30);
        font-family:var(--primary-font-family,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif);
        color:#fff; padding:0; border:none;
      }
      .grid {
        display:grid;
        grid-template-columns:1fr 1fr;
        grid-template-rows:auto auto;
      }
      .cell { padding:${i?"12px 10px":"16px 14px"}; }

      .main-cell {
        grid-column:1; grid-row:1;
        display:flex; align-items:center;
        gap:${i?10:13}px;
        border-right:1px solid rgba(255,255,255,0.12);
        border-bottom:1px solid rgba(255,255,255,0.12);
      }
      .main-icon {
        flex:0 0 ${c}px; width:${c}px; height:${c}px;
        filter:drop-shadow(0 2px 8px rgba(0,0,0,0.35));
      }
      .main-icon svg { width:100%; height:100%; }
      .main-info { flex:1; min-width:0; }
      .main-label {
        font-size:${y}rem; font-weight:700; line-height:1.25;
        letter-spacing:-0.01em; text-shadow:0 1px 6px rgba(0,0,0,0.35);
      }
      .main-sub {
        font-size:${m}rem; font-weight:600;
        letter-spacing:0.08em; text-transform:uppercase;
        opacity:0.58; margin-top:4px;
      }

      .precip-cell {
        grid-column:2; grid-row:1;
        display:flex; flex-direction:column;
        align-items:center; justify-content:center; gap:2px;
        border-bottom:1px solid rgba(255,255,255,0.12);
        padding:${i?"10px 6px":"12px 8px"};
      }
      .precip-title {
        font-size:${E}rem; font-weight:800;
        letter-spacing:0.12em; text-transform:uppercase;
        text-shadow:0 1px 4px rgba(0,0,0,0.35);
      }
      .precip-widget { width:${v}px; height:${v}px; }

      /* \u2500\u2500 Tile / Mushroom View Mode \u2500\u2500 */
      .tile-container {
        display:flex; flex-direction:column; justify-content:space-between;
        padding:${i?"12px 14px":"16px 18px"};
        box-sizing:border-box;
        background:linear-gradient(145deg, rgba(15, 23, 42, 0.52) 0%, rgba(15, 23, 42, 0.74) 100%);
        backdrop-filter:blur(18px); -webkit-backdrop-filter:blur(18px);
        border:1px solid rgba(255, 255, 255, 0.16);
        border-radius:22px;
        box-shadow:inset 0 1px 1px rgba(255, 255, 255, 0.14), 0 8px 32px rgba(0, 0, 0, 0.25);
        min-height:${i?"110px":"130px"};
      }
      .tile-header-wrap {
        display:flex; align-items:center; justify-content:space-between;
        gap:${i?10:14}px;
      }
      .tile-icon-box {
        width:${i?"42px":"50px"}; height:${i?"42px":"50px"};
        flex-shrink:0;
        border-radius:16px;
        background:rgba(255, 255, 255, 0.12);
        border:1px solid rgba(255, 255, 255, 0.20);
        display:flex; align-items:center; justify-content:center;
        padding:4px;
        box-shadow:0 4px 12px rgba(0,0,0,0.15);
        filter:drop-shadow(0 2px 6px rgba(0,0,0,0.30));
      }
      .tile-icon-box svg { width:100%; height:100%; display:block; }
      .tile-text-group {
        flex:1; min-width:0;
      }
      .tile-title {
        font-size:${(1.12*s).toFixed(2)}rem; font-weight:700;
        line-height:1.22; letter-spacing:-0.015em;
        color:#ffffff;
        text-shadow:0 1px 4px rgba(0,0,0,0.45);
        white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
      }
      .tile-subtitle {
        font-size:${(.74*s).toFixed(2)}rem; font-weight:500;
        color:rgba(255,255,255,0.85); margin-top:2px;
        line-height:1.25;
        white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
        text-shadow:0 1px 3px rgba(0,0,0,0.35);
      }
      .tile-trend-pill {
        font-size:${(.7*s).toFixed(2)}rem; font-weight:700;
        letter-spacing:0.02em; border-radius:20px;
        padding:4px 10px; border:1px solid rgba(255,255,255,0.20);
        background:rgba(0, 0, 0, 0.42);
        white-space:nowrap; flex-shrink:0;
        display:inline-flex; align-items:center; gap:5px;
        box-shadow:0 2px 6px rgba(0,0,0,0.20);
      }
      .tile-trend-dot {
        width:7px; height:7px; border-radius:50%; flex-shrink:0;
      }
      .tile-bottom-chips {
        display:flex; align-items:center; justify-content:space-between;
        margin-top:${i?8:12}px; padding-top:${i?6:8}px;
        border-top:1px solid rgba(255,255,255,0.12);
        gap:8px; flex-wrap:wrap;
      }
      .tile-chips-left {
        display:flex; align-items:center; gap:6px; flex-wrap:wrap;
      }
      .tile-chip {
        font-size:${(.74*s).toFixed(2)}rem; font-weight:700;
        padding:3px 9px; border-radius:12px;
        display:inline-flex; align-items:center; gap:4px;
        box-shadow:0 2px 6px rgba(0,0,0,0.15);
      }
      .tile-chip-precip {
        background:rgba(14, 165, 233, 0.22);
        border:1px solid rgba(56, 189, 248, 0.35);
        color:#bae6fd;
      }
      .tile-chip-wind {
        background:rgba(255, 255, 255, 0.10);
        border:1px solid rgba(255, 255, 255, 0.16);
        color:#f1f5f9;
      }
      .tile-chip-pressure {
        background:rgba(0, 0, 0, 0.35);
        border:1px solid rgba(255, 255, 255, 0.20);
        color:#ffffff; font-family:monospace;
      }

      /* \u2500\u2500 Vintage Barometer Mode \u2500\u2500 */
      .vintage-container {
        display:flex; flex-direction:column; align-items:center;
        padding:${i?"12px 10px 8px":"16px 14px 10px"};
        box-sizing:border-box;
      }
      .vintage-dial-wrap {
        position:relative;
        width:100%; max-width:${i?"280px":"330px"};
        aspect-ratio:1 / 1;
        display:flex; align-items:center; justify-content:center;
        filter:drop-shadow(0 14px 28px rgba(0,0,0,0.65)) drop-shadow(0 2px 6px rgba(0,0,0,0.40));
        margin:0 auto;
      }
      .vintage-dial-svg {
        width:100%; height:100%; display:block;
      }
      .v-needle-main, .v-needle-ref, .v-needle-trend {
        transition: transform 0.85s cubic-bezier(0.34, 1.35, 0.64, 1);
      }
      .vintage-readout {
        width:100%; margin-top:${i?"10px":"14px"};
        display:flex; flex-direction:column; gap:10px;
      }
      .vintage-main-bar {
        background:linear-gradient(180deg, rgba(42, 30, 15, 0.90) 0%, rgba(20, 14, 7, 0.98) 100%);
        border:1px solid rgba(212, 175, 55, 0.40);
        border-radius:14px;
        padding:${i?"8px 10px":"10px 14px"};
        text-align:center;
        box-shadow:inset 0 1px 1px rgba(255, 235, 170, 0.25), 0 4px 16px rgba(0, 0, 0, 0.50);
      }
      .vintage-forecast-title {
        font-family:'Cinzel', Georgia, serif;
        font-size:${(1.16*s).toFixed(2)}rem; font-weight:800;
        color:#ffd966; letter-spacing:0.025em;
        text-shadow:0 2px 6px rgba(0,0,0,0.85), 0 0 12px rgba(255,217,102,0.25);
      }
      .vintage-sager-sub {
        font-size:${(.76*s).toFixed(2)}rem; font-weight:500;
        color:rgba(254, 243, 199, 0.85);
        margin-top:4px;
        display:flex; align-items:center; justify-content:center; gap:6px;
      }
      .vintage-badge {
        font-size:0.62rem; font-weight:800; letter-spacing:0.10em;
        text-transform:uppercase; background:rgba(255,217,102,0.20);
        border:1px solid rgba(255,217,102,0.45); border-radius:5px;
        padding:1px 6px; color:#ffd966;
      }
      .vintage-metrics-grid {
        display:grid; grid-template-columns:1fr 1fr;
        gap:10px;
      }
      .vintage-metric-box {
        background:linear-gradient(180deg, rgba(35, 25, 12, 0.82) 0%, rgba(16, 11, 5, 0.94) 100%);
        border:1px solid rgba(212, 175, 55, 0.30);
        border-radius:12px;
        padding:8px 10px; text-align:center;
        box-shadow:inset 0 1px 1px rgba(255, 235, 170, 0.15), 0 4px 12px rgba(0, 0, 0, 0.35);
      }
      .vintage-metric-lbl {
        font-family:'Cinzel', Georgia, serif;
        font-size:${(.66*s).toFixed(2)}rem; font-weight:700;
        letter-spacing:0.10em; text-transform:uppercase;
        color:#d4af37; opacity:0.90;
      }
      .vintage-metric-val {
        font-size:${(1.05*s).toFixed(2)}rem; font-weight:800;
        color:#ffffff; margin-top:2px; font-family:monospace;
        text-shadow:0 1px 4px rgba(0,0,0,0.6);
      }
      .vintage-metric-sub {
        font-size:${(.72*s).toFixed(2)}rem; font-weight:600;
        color:rgba(254, 243, 199, 0.75); margin-top:2px;
      }

      .forecast-row {
        grid-column:1/-1; grid-row:2;
        display:grid; grid-template-columns:1fr 1fr 1fr; padding:0;
      }
      .fc {
        display:flex; flex-direction:column; align-items:center;
        padding:${i?"8px 4px 10px":"10px 6px 14px"};
        border-right:1px solid rgba(255,255,255,0.09); gap:3px;
      }
      .fc:last-child { border-right:none; }
      .fc-time {
        font-size:${(.82*s).toFixed(2)}rem; font-weight:800;
        letter-spacing:0.06em; text-transform:uppercase;
        color:rgba(255,255,255,0.95);
        background:rgba(255,255,255,0.15); border-radius:5px; padding:1px 7px;
      }
      .fc-icon {
        width:${x}px; height:${x}px;
        display:flex; align-items:center; justify-content:center; opacity:0.90;
      }
      .fc-icon svg { width:100%; height:100%; }
      .fc-lbl {
        font-size:${(.96*s).toFixed(2)}rem; font-weight:700;
        text-align:center; line-height:1.25; color:#fff;
        text-shadow:0 1px 3px rgba(0,0,0,0.3);
      }

      .footer {
        display:flex; align-items:center; gap:10px; flex-wrap:wrap;
        padding:${i?"6px 12px 8px":"8px 16px 10px"};
        background:rgba(0,0,0,0.20);
        border-top:1px solid rgba(255,255,255,0.09);
      }
      .footer-wind {
        font-size:${(.72*s).toFixed(2)}rem; font-weight:600;
        opacity:0.90; letter-spacing:0.04em; white-space:nowrap;
      }
      .footer-badge {
        font-size:0.62rem; font-weight:700; letter-spacing:0.10em;
        text-transform:uppercase; background:rgba(255,255,255,0.16);
        border:1px solid rgba(255,255,255,0.28); border-radius:5px;
        padding:2px 8px; white-space:nowrap; flex-shrink:0;
      }
      .footer-text {
        font-size:${p}rem; font-weight:500; opacity:0.80; line-height:1.3;
      }

      /* \u2500\u2500 Trend timeline section \u2500\u2500 */
      .trend-section {
        padding:${i?"8px 10px 10px":"10px 14px 12px"};
        border-top:1px solid rgba(255,255,255,0.09);
        background:rgba(0,0,0,0.12);
      }
      .trend-title {
        font-size:${(.68*s).toFixed(2)}rem; font-weight:700;
        letter-spacing:0.10em; text-transform:uppercase;
        color:rgba(255,255,255,0.55); margin-bottom:${i?5:7}px;
      }
      .trend-timeline-wrap { width:100%; overflow-x:auto; }
      .tl-inner {
        display:flex; align-items:center; gap:0;
        min-width:max-content; padding-bottom:2px;
      }
      .tl-step {
        display:flex; flex-direction:column; align-items:center;
        gap:3px; padding:${i?"3px 6px":"4px 8px"};
        border-radius:10px;
        background:rgba(255,255,255,0.06);
        border:1px solid rgba(255,255,255,0.08);
        transition:background 0.3s;
        min-width:${i?52:62}px;
      }
      .tl-step.tl-current {
        background:rgba(255,255,255,0.20);
        border-color:rgba(255,255,255,0.35);
        box-shadow:0 0 10px rgba(255,255,255,0.12);
      }
      .tl-icon { flex-shrink:0; }
      .tl-icon svg { width:100%; height:100%; display:block; }
      .tl-lbl {
        font-size:${(.68*s).toFixed(2)}rem; font-weight:600;
        color:rgba(255,255,255,0.90); text-align:center;
        line-height:1.2; max-width:${i?52:62}px;
        overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
      }
      .tl-current .tl-lbl { color:#fff; font-weight:700; }
      .tl-time {
        font-size:${(.6*s).toFixed(2)}rem; font-weight:500;
        color:rgba(255,255,255,0.50); letter-spacing:0.03em;
      }
      .tl-current .tl-time { color:rgba(255,255,255,0.80); }
      .tl-arrow {
        font-size:${i?"1.1rem":"1.3rem"}; color:rgba(255,255,255,0.30);
        padding:0 ${i?3:4}px; flex-shrink:0; user-select:none;
        align-self:center; margin-bottom:14px;
      }
      .tl-empty {
        font-size:0.75rem; color:rgba(255,255,255,0.35);
        font-style:italic; padding:8px 0;
      }

      /* \u2500\u2500 History chart section \u2500\u2500 */
      .history-section {
        padding:${i?"8px 0 0":"10px 0 0"};
        border-top:1px solid rgba(255,255,255,0.09);
        background:rgba(0,0,0,0.15);
        overflow:visible;
      }
      .history-title {
        font-size:${(.68*s).toFixed(2)}rem; font-weight:700;
        letter-spacing:0.10em; text-transform:uppercase;
        color:rgba(255,255,255,0.55);
        margin-bottom:${i?2:4}px;
        padding:0 ${i?"10px":"14px"};
      }
      .history-chart-wrap {
        width:100%;
        /* height is set inline per render to allow live updates */
      }
      .hchart-empty {
        display:flex; align-items:center; justify-content:center;
        height:${i?100:130}px;
        font-size:0.80rem; color:rgba(255,255,255,0.35);
        font-style:italic;
      }
    `}getCardSize(){let t=3;return this._config.show_trend&&(t+=1),this._config.show_history&&(t+=2),t}}customElements.get("zambretti-weather-card")||customElements.define("zambretti-weather-card",we),window.customCards=window.customCards||[],window.customCards.some(o=>o.type==="zambretti-weather-card")||window.customCards.push({type:"zambretti-weather-card",name:"Zambretti & Sager Weather Card",description:"Weather forecasts (Modern iOS, Vintage Barometer, Compact Tile)",preview:!0,documentationURL:"https://github.com/meksspirt/zambretti_sager"}),window.customCards.some(o=>o.type==="custom:zambretti-weather-card")||window.customCards.push({type:"custom:zambretti-weather-card",name:"Zambretti & Sager Weather Card",description:"Weather forecasts (Modern iOS, Vintage Barometer, Compact Tile)",preview:!0,documentationURL:"https://github.com/meksspirt/zambretti_sager"});
