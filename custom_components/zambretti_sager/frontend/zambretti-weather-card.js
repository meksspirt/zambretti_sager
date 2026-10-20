console.info("%c ZAMBRETTI & SAGER WEATHER CARD %c v1.9.94 ","color: white; background: #d97706; font-weight: 700; border-radius: 3px 0 0 3px; padding: 2px 5px;","color: #92400e; background: #fef3c7; font-weight: 700; border-radius: 0 3px 3px 0; padding: 2px 5px;"),window.customCards=window.customCards||[],window.customCards.some(o=>o.type==="zambretti-weather-card")||window.customCards.push({type:"zambretti-weather-card",name:"Zambretti & Sager Weather Card",description:"Weather forecasts (Modern iOS, Vintage Barometer, Compact Tile)",preview:!0,documentationURL:"https://github.com/meksspirt/zambretti_sager"}),window.customCards.some(o=>o.type==="custom:zambretti-weather-card")||window.customCards.push({type:"custom:zambretti-weather-card",name:"Zambretti & Sager Weather Card",description:"Weather forecasts (Modern iOS, Vintage Barometer, Compact Tile)",preview:!0,documentationURL:"https://github.com/meksspirt/zambretti_sager"});const Y={en:{settled_fine:"Settled Fine",fine_weather:"Fine Weather",fine_becoming_less_settled:"Fine, Less Settled",fairly_fine_showery_later:"Fine, Showers Later",showery_becoming_more_unsettled:"Showery, Worsening",unsettled_rain_later:"Unsettled, Rain Later",rain_at_times_worse_later:"Rain, Worse Later",rain_at_times_becoming_very_unsettled:"Rain, Very Unsettled",very_unsettled_rain:"Very Unsettled, Rain",fine_possibly_showers:"Fine, Possibly Showers",fairly_fine_showers_likely:"Fine, Showers Likely",showery_bright_intervals:"Showery, Bright Intervals",changeable_some_rain:"Changeable, Some Rain",unsettled_rain_at_times:"Unsettled, Rain at Times",rain_at_frequent_intervals:"Frequent Rain",stormy_much_rain:"Stormy, Heavy Rain",becoming_fine:"Becoming Fine",fairly_fine_improving:"Fine, Improving",fairly_fine_possibly_showers_early:"Fine, Early Showers",showery_early_improving:"Early Showers, Improving",changeable_mending:"Changeable, Mending",rather_unsettled_clearing_later:"Unsettled, Clearing Later",unsettled_probably_improving:"Unsettled, Improving",unsettled_short_fine_intervals:"Unsettled, Short Fine",very_unsettled_finer_at_times:"Very Unsettled",stormy_possibly_improving:"Stormy, May Improve",stable:"Stable",sager_fair_improving:"Fair, improving",sager_fair_tending_to_deteriorate:"Fair, tending to deteriorate",sager_fair_no_change:"Fair, no important change",sager_unsettled_rain_likely:"Unsettled, rain likely",sager_unsettled_probably_improving:"Unsettled, probably improving",sager_unsettled_rain_at_times:"Unsettled, rain at times",sager_changeable_becoming_fairer:"Changeable, becoming fairer",sager_changeable_becoming_more_unsettled:"Changeable, more unsettled",sager_variable_slowly_improving:"Variable, slowly improving",sager_variable_slowly_deteriorating:"Variable, slowly deteriorating",sager_variable_some_change:"Variable, some change"},cs:{settled_fine:"P\u011Bkn\u011B, stabiln\u011B",fine_weather:"P\u011Bkn\xE9 po\u010Das\xED",fine_becoming_less_settled:"P\u011Bkn\u011B, m\xE9n\u011B stabiln\u011B",fairly_fine_showery_later:"Docela p\u011Bkn\u011B, p\u0159eh\xE1\u0148ky pozd\u011Bji",showery_becoming_more_unsettled:"P\u0159eh\xE1\u0148ky, zhor\u0161en\xED",unsettled_rain_later:"Nestabiln\u011B, d\xE9\u0161\u0165 pozd\u011Bji",rain_at_times_worse_later:"D\xE9\u0161\u0165, pozd\u011Bji h\u016F\u0159",rain_at_times_becoming_very_unsettled:"D\xE9\u0161\u0165, velmi nestabiln\u011B",very_unsettled_rain:"Velmi nestabiln\u011B, d\xE9\u0161\u0165",fine_possibly_showers:"P\u011Bkn\u011B, mo\u017En\xE9 p\u0159eh\xE1\u0148ky",fairly_fine_showers_likely:"Docela p\u011Bkn\u011B, p\u0159eh\xE1\u0148ky pravd\u011Bpodobn\xE9",showery_bright_intervals:"P\u0159eh\xE1\u0148ky, protrh\xE1v\xE1n\xED",changeable_some_rain:"Prom\u011Bnliv\u011B, trochu de\u0161t\u011B",unsettled_rain_at_times:"Nestabiln\u011B, ob\u010Das d\xE9\u0161\u0165",rain_at_frequent_intervals:"\u010Cast\xFD d\xE9\u0161\u0165",stormy_much_rain:"Bou\u0159liv\u011B, hodn\u011B de\u0161t\u011B",becoming_fine:"Zlep\u0161uje se",fairly_fine_improving:"Docela p\u011Bkn\u011B, zlep\u0161en\xED",fairly_fine_possibly_showers_early:"Docela p\u011Bkn\u011B, brzk\xE9 p\u0159eh\xE1\u0148ky",showery_early_improving:"Brzk\xE9 p\u0159eh\xE1\u0148ky, zlep\u0161en\xED",changeable_mending:"Prom\u011Bnliv\u011B, zlep\u0161en\xED",rather_unsettled_clearing_later:"Sp\xED\u0161e nestabiln\u011B, pozd\u011Bji protrh\xE1v\xE1n\xED",unsettled_probably_improving:"Nestabiln\u011B, pravd\u011Bpodobn\u011B zlep\u0161en\xED",unsettled_short_fine_intervals:"Nestabiln\u011B, kr\xE1tk\xE9 protrh\xE1v\xE1n\xED",very_unsettled_finer_at_times:"Velmi nestabiln\u011B, ob\u010Das l\xE9pe",stormy_possibly_improving:"Bou\u0159liv\u011B, mo\u017En\xE9 zlep\u0161en\xED",stable:"Stabiln\u011B",sager_fair_improving:"P\u011Bkn\xE9 po\u010Das\xED, zlep\u0161en\xED",sager_fair_tending_to_deteriorate:"P\u011Bkn\u011B, tendence ke zhor\u0161en\xED",sager_fair_no_change:"P\u011Bkn\xE9 po\u010Das\xED, bez v\xFDznamn\xE9 zm\u011Bny",sager_unsettled_rain_likely:"Nestabiln\u011B, d\xE9\u0161\u0165 pravd\u011Bpodobn\xFD",sager_unsettled_probably_improving:"Nestabiln\u011B, pravd\u011Bpodobn\u011B zlep\u0161en\xED",sager_unsettled_rain_at_times:"Nestabiln\u011B, ob\u010Das d\xE9\u0161\u0165",sager_changeable_becoming_fairer:"Prom\u011Bnliv\u011B, zlep\u0161uje se",sager_changeable_becoming_more_unsettled:"Prom\u011Bnliv\u011B, nestabiln\u011Bj\u0161\xED",sager_variable_slowly_improving:"Prom\u011Bnliv\u011B, pomal\xE9 zlep\u0161en\xED",sager_variable_slowly_deteriorating:"Prom\u011Bnliv\u011B, pomal\xE9 zhor\u0161en\xED",sager_variable_some_change:"Prom\u011Bnliv\u011B, o\u010Dek\xE1v\xE1na zm\u011Bna"},da:{settled_fine:"P\xE6nt, stabilt",fine_weather:"P\xE6nt vejr",fine_becoming_less_settled:"P\xE6nt, mindre stabilt",fairly_fine_showery_later:"Rimeligt p\xE6nt, byger senere",showery_becoming_more_unsettled:"Byger, forv\xE6rres",unsettled_rain_later:"Ustabilt, regn senere",rain_at_times_worse_later:"Regn, v\xE6rre senere",rain_at_times_becoming_very_unsettled:"Regn, meget ustabilt",very_unsettled_rain:"Meget ustabilt, regn",fine_possibly_showers:"P\xE6nt, mulige byger",fairly_fine_showers_likely:"Rimeligt p\xE6nt, byger sandsynlige",showery_bright_intervals:"Byger, opklaringer",changeable_some_rain:"Skiftende, lidt regn",unsettled_rain_at_times:"Ustabilt, regn til tider",rain_at_frequent_intervals:"Hyppig regn",stormy_much_rain:"Stormfuldt, meget regn",becoming_fine:"Forbedres",fairly_fine_improving:"Rimeligt p\xE6nt, forbedres",fairly_fine_possibly_showers_early:"Rimeligt p\xE6nt, tidlige byger",showery_early_improving:"Tidlige byger, forbedres",changeable_mending:"Skiftende, forbedres",rather_unsettled_clearing_later:"Ret ustabilt, klarer op senere",unsettled_probably_improving:"Ustabilt, sandsynlig forbedring",unsettled_short_fine_intervals:"Ustabilt, korte opklaringer",very_unsettled_finer_at_times:"Meget ustabilt, til tider bedre",stormy_possibly_improving:"Stormfuldt, mulig forbedring",stable:"Stabilt",sager_fair_improving:"P\xE6nt vejr, forbedres",sager_fair_tending_to_deteriorate:"P\xE6nt vejr, tendens til forv\xE6rring",sager_fair_no_change:"P\xE6nt vejr, ingen v\xE6sentlig \xE6ndring",sager_unsettled_rain_likely:"Ustabilt, regn sandsynlig",sager_unsettled_probably_improving:"Ustabilt, sandsynlig forbedring",sager_unsettled_rain_at_times:"Ustabilt, regn til tider",sager_changeable_becoming_fairer:"Skiftende, bliver p\xE6nere",sager_changeable_becoming_more_unsettled:"Skiftende, mere ustabilt",sager_variable_slowly_improving:"Variabelt, langsom forbedring",sager_variable_slowly_deteriorating:"Variabelt, langsom forv\xE6rring",sager_variable_some_change:"Variabelt, \xE6ndring forventes"},"de-AT":{settled_fine:"Sch\xF6n, best\xE4ndig",fine_weather:"Sch\xF6nes Wetter",fine_becoming_less_settled:"Sch\xF6n, weniger best\xE4ndig",fairly_fine_showery_later:"Ziemlich sch\xF6n, Schauer sp\xE4ter",showery_becoming_more_unsettled:"Schauer, Verschlechterung",unsettled_rain_later:"Unbest\xE4ndig, Regen sp\xE4ter",rain_at_times_worse_later:"Regen, sp\xE4ter schlechter",rain_at_times_becoming_very_unsettled:"Regen, sehr unbest\xE4ndig",very_unsettled_rain:"Sehr unbest\xE4ndig, Regen",fine_possibly_showers:"Sch\xF6n, Schauer m\xF6glich",fairly_fine_showers_likely:"Ziemlich sch\xF6n, Schauer wahrscheinlich",showery_bright_intervals:"Schauer, Auflockerungen",changeable_some_rain:"Wechselhaft, etwas Regen",unsettled_rain_at_times:"Unbest\xE4ndig, zeitweise Regen",rain_at_frequent_intervals:"H\xE4ufiger Regen",stormy_much_rain:"St\xFCrmisch, viel Regen",becoming_fine:"Wird sch\xF6ner",fairly_fine_improving:"Ziemlich sch\xF6n, besser",fairly_fine_possibly_showers_early:"Ziemlich sch\xF6n, fr\xFChe Schauer",showery_early_improving:"Fr\xFChe Schauer, besser",changeable_mending:"Wechselhaft, bessernd",rather_unsettled_clearing_later:"Unbest\xE4ndig, sp\xE4ter klarer",unsettled_probably_improving:"Unbest\xE4ndig, wohl besser",unsettled_short_fine_intervals:"Unbest\xE4ndig, kurze Aufheiterungen",very_unsettled_finer_at_times:"Sehr unbest\xE4ndig, zeitweise besser",stormy_possibly_improving:"St\xFCrmisch, m\xF6glicherweise besser",stable:"Stabil",sager_fair_improving:"Sch\xF6n, bessernd",sager_fair_tending_to_deteriorate:"Sch\xF6n, Tendenz zur Verschlechterung",sager_fair_no_change:"Sch\xF6n, keine wesentliche \xC4nderung",sager_unsettled_rain_likely:"Unbest\xE4ndig, Regen wahrscheinlich",sager_unsettled_probably_improving:"Unbest\xE4ndig, wohl besser",sager_unsettled_rain_at_times:"Unbest\xE4ndig, zeitweise Regen",sager_changeable_becoming_fairer:"Wechselhaft, wird sch\xF6ner",sager_changeable_becoming_more_unsettled:"Wechselhaft, unbest\xE4ndiger",sager_variable_slowly_improving:"Ver\xE4nderlich, langsam besser",sager_variable_slowly_deteriorating:"Ver\xE4nderlich, langsam schlechter",sager_variable_some_change:"Ver\xE4nderlich, \xC4nderung erwartet"},de:{settled_fine:"Sch\xF6n, best\xE4ndig",fine_weather:"Sch\xF6nes Wetter",fine_becoming_less_settled:"Sch\xF6n, weniger best\xE4ndig",fairly_fine_showery_later:"Ziemlich sch\xF6n, Schauer sp\xE4ter",showery_becoming_more_unsettled:"Schauer, Verschlechterung",unsettled_rain_later:"Unbest\xE4ndig, Regen sp\xE4ter",rain_at_times_worse_later:"Regen, sp\xE4ter schlechter",rain_at_times_becoming_very_unsettled:"Regen, sehr unbest\xE4ndig",very_unsettled_rain:"Sehr unbest\xE4ndig, Regen",fine_possibly_showers:"Sch\xF6n, Schauer m\xF6glich",fairly_fine_showers_likely:"Ziemlich sch\xF6n, Schauer wahrscheinlich",showery_bright_intervals:"Schauer, Auflockerungen",changeable_some_rain:"Wechselhaft, etwas Regen",unsettled_rain_at_times:"Unbest\xE4ndig, zeitweise Regen",rain_at_frequent_intervals:"H\xE4ufiger Regen",stormy_much_rain:"St\xFCrmisch, viel Regen",becoming_fine:"Wird sch\xF6ner",fairly_fine_improving:"Ziemlich sch\xF6n, besser",fairly_fine_possibly_showers_early:"Ziemlich sch\xF6n, fr\xFChe Schauer",showery_early_improving:"Fr\xFChe Schauer, besser",changeable_mending:"Wechselhaft, bessernd",rather_unsettled_clearing_later:"Unbest\xE4ndig, sp\xE4ter klarer",unsettled_probably_improving:"Unbest\xE4ndig, wohl besser",unsettled_short_fine_intervals:"Unbest\xE4ndig, kurze Aufheiterungen",very_unsettled_finer_at_times:"Sehr unbest\xE4ndig, zeitweise besser",stormy_possibly_improving:"St\xFCrmisch, m\xF6glicherweise besser",stable:"Stabil",sager_fair_improving:"Sch\xF6n, bessernd",sager_fair_tending_to_deteriorate:"Sch\xF6n, Tendenz zur Verschlechterung",sager_fair_no_change:"Sch\xF6n, keine wesentliche \xC4nderung",sager_unsettled_rain_likely:"Unbest\xE4ndig, Regen wahrscheinlich",sager_unsettled_probably_improving:"Unbest\xE4ndig, wohl besser",sager_unsettled_rain_at_times:"Unbest\xE4ndig, zeitweise Regen",sager_changeable_becoming_fairer:"Wechselhaft, wird sch\xF6ner",sager_changeable_becoming_more_unsettled:"Wechselhaft, unbest\xE4ndiger",sager_variable_slowly_improving:"Ver\xE4nderlich, langsam besser",sager_variable_slowly_deteriorating:"Ver\xE4nderlich, langsam schlechter",sager_variable_some_change:"Ver\xE4nderlich, \xC4nderung erwartet"},es:{settled_fine:"Buen tiempo estable",fine_weather:"Buen tiempo",fine_becoming_less_settled:"Buen tiempo, menos estable",fairly_fine_showery_later:"Bastante bueno, chubascos despu\xE9s",showery_becoming_more_unsettled:"Chubascos, empeorando",unsettled_rain_later:"Inestable, lluvia despu\xE9s",rain_at_times_worse_later:"Lluvia, empeorando despu\xE9s",rain_at_times_becoming_very_unsettled:"Lluvia, muy inestable",very_unsettled_rain:"Muy inestable, lluvia",fine_possibly_showers:"Buen tiempo, posibles chubascos",fairly_fine_showers_likely:"Bastante bueno, chubascos probables",showery_bright_intervals:"Chubascos, claros",changeable_some_rain:"Variable, algo de lluvia",unsettled_rain_at_times:"Inestable, lluvia a intervalos",rain_at_frequent_intervals:"Lluvia frecuente",stormy_much_rain:"Tormentoso, mucha lluvia",becoming_fine:"Mejorando",fairly_fine_improving:"Bastante bueno, mejorando",fairly_fine_possibly_showers_early:"Bastante bueno, chubascos tempranos",showery_early_improving:"Chubascos tempranos, mejorando",changeable_mending:"Variable, mejorando",rather_unsettled_clearing_later:"Inestable, despejando despu\xE9s",unsettled_probably_improving:"Inestable, probable mejora",unsettled_short_fine_intervals:"Inestable, claros breves",very_unsettled_finer_at_times:"Muy inestable, mejor a ratos",stormy_possibly_improving:"Tormentoso, posible mejora",stable:"Estable",sager_fair_improving:"Buen tiempo, mejorando",sager_fair_tending_to_deteriorate:"Buen tiempo, tendencia a empeorar",sager_fair_no_change:"Buen tiempo, sin cambios importantes",sager_unsettled_rain_likely:"Inestable, lluvia probable",sager_unsettled_probably_improving:"Inestable, probable mejora",sager_unsettled_rain_at_times:"Inestable, lluvia a intervalos",sager_changeable_becoming_fairer:"Variable, mejorando",sager_changeable_becoming_more_unsettled:"Variable, m\xE1s inestable",sager_variable_slowly_improving:"Variable, mejorando lentamente",sager_variable_slowly_deteriorating:"Variable, empeorando lentamente",sager_variable_some_change:"Variable, se esperan cambios"},hu:{settled_fine:"Sz\xE9p, stabil",fine_weather:"Sz\xE9p id\u0151",fine_becoming_less_settled:"Sz\xE9p, kev\xE9sb\xE9 stabil",fairly_fine_showery_later:"Eg\xE9sz sz\xE9p, k\xE9s\u0151bb z\xE1porok",showery_becoming_more_unsettled:"Z\xE1porok, roml\xE1s",unsettled_rain_later:"V\xE1ltoz\xE9kony, k\xE9s\u0151bb es\u0151",rain_at_times_worse_later:"Es\u0151, k\xE9s\u0151bb romlik",rain_at_times_becoming_very_unsettled:"Es\u0151, nagyon v\xE1ltoz\xE9kony",very_unsettled_rain:"Nagyon v\xE1ltoz\xE9kony, es\u0151",fine_possibly_showers:"Sz\xE9p, lehets\xE9ges z\xE1porok",fairly_fine_showers_likely:"Eg\xE9sz sz\xE9p, z\xE1porok val\xF3sz\xEDn\u0171ek",showery_bright_intervals:"Z\xE1porok, felh\u0151szakad\xE1sok",changeable_some_rain:"V\xE1ltoz\xE9kony, kev\xE9s es\u0151",unsettled_rain_at_times:"V\xE1ltoz\xE9kony, id\u0151nk\xE9nt es\u0151",rain_at_frequent_intervals:"Gyakori es\u0151",stormy_much_rain:"Viharos, sok es\u0151",becoming_fine:"Javul",fairly_fine_improving:"Eg\xE9sz sz\xE9p, javul",fairly_fine_possibly_showers_early:"Eg\xE9sz sz\xE9p, korai z\xE1porok",showery_early_improving:"Korai z\xE1porok, javul",changeable_mending:"V\xE1ltoz\xE9kony, javul",rather_unsettled_clearing_later:"Ink\xE1bb v\xE1ltoz\xE9kony, k\xE9s\u0151bb der\xFCl",unsettled_probably_improving:"V\xE1ltoz\xE9kony, val\xF3sz\xEDn\u0171 javul\xE1s",unsettled_short_fine_intervals:"V\xE1ltoz\xE9kony, r\xF6vid der\xFCl\xE9sek",very_unsettled_finer_at_times:"Nagyon v\xE1ltoz\xE9kony, id\u0151nk\xE9nt jobb",stormy_possibly_improving:"Viharos, lehets\xE9ges javul\xE1s",stable:"Stabil",sager_fair_improving:"Sz\xE9p id\u0151, javul",sager_fair_tending_to_deteriorate:"Sz\xE9p id\u0151, roml\xE1sra hajlik",sager_fair_no_change:"Sz\xE9p id\u0151, nincs jelent\u0151s v\xE1ltoz\xE1s",sager_unsettled_rain_likely:"V\xE1ltoz\xE9kony, es\u0151 val\xF3sz\xEDn\u0171",sager_unsettled_probably_improving:"V\xE1ltoz\xE9kony, val\xF3sz\xEDn\u0171 javul\xE1s",sager_unsettled_rain_at_times:"V\xE1ltoz\xE9kony, id\u0151nk\xE9nt es\u0151",sager_changeable_becoming_fairer:"V\xE1ltoz\xE9kony, javul",sager_changeable_becoming_more_unsettled:"V\xE1ltoz\xE9kony, v\xE1ltoz\xE9konyabb",sager_variable_slowly_improving:"V\xE1ltoz\xF3, lass\xFA javul\xE1s",sager_variable_slowly_deteriorating:"V\xE1ltoz\xF3, lass\xFA roml\xE1s",sager_variable_some_change:"V\xE1ltoz\xF3, v\xE1ltoz\xE1s v\xE1rhat\xF3"},it:{settled_fine:"Bel tempo stabile",fine_weather:"Bel tempo",fine_becoming_less_settled:"Bel tempo, meno stabile",fairly_fine_showery_later:"Abbastanza bello, rovesci dopo",showery_becoming_more_unsettled:"Rovesci, peggioramento",unsettled_rain_later:"Instabile, pioggia dopo",rain_at_times_worse_later:"Pioggia, peggioramento dopo",rain_at_times_becoming_very_unsettled:"Pioggia, molto instabile",very_unsettled_rain:"Molto instabile, pioggia",fine_possibly_showers:"Bel tempo, possibili rovesci",fairly_fine_showers_likely:"Abbastanza bello, rovesci probabili",showery_bright_intervals:"Rovesci, schiarite",changeable_some_rain:"Variabile, qualche pioggia",unsettled_rain_at_times:"Instabile, pioggia a tratti",rain_at_frequent_intervals:"Pioggia frequente",stormy_much_rain:"Tempestoso, molta pioggia",becoming_fine:"In miglioramento",fairly_fine_improving:"Abbastanza bello, in miglioramento",fairly_fine_possibly_showers_early:"Abbastanza bello, rovesci precoci",showery_early_improving:"Rovesci precoci, in miglioramento",changeable_mending:"Variabile, in miglioramento",rather_unsettled_clearing_later:"Instabile, schiarite dopo",unsettled_probably_improving:"Instabile, probabile miglioramento",unsettled_short_fine_intervals:"Instabile, brevi schiarite",very_unsettled_finer_at_times:"Molto instabile, migliora a tratti",stormy_possibly_improving:"Tempestoso, possibile miglioramento",stable:"Stabile",sager_fair_improving:"Bel tempo, in miglioramento",sager_fair_tending_to_deteriorate:"Bel tempo, tendenza al peggioramento",sager_fair_no_change:"Bel tempo, nessun cambiamento importante",sager_unsettled_rain_likely:"Instabile, pioggia probabile",sager_unsettled_probably_improving:"Instabile, probabile miglioramento",sager_unsettled_rain_at_times:"Instabile, pioggia a tratti",sager_changeable_becoming_fairer:"Variabile, in miglioramento",sager_changeable_becoming_more_unsettled:"Variabile, pi\xF9 instabile",sager_variable_slowly_improving:"Variabile, miglioramento lento",sager_variable_slowly_deteriorating:"Variabile, peggioramento lento",sager_variable_some_change:"Variabile, cambiamenti attesi"},ja:{settled_fine:"\u5B89\u5B9A\u3057\u305F\u597D\u5929",fine_weather:"\u597D\u5929",fine_becoming_less_settled:"\u597D\u5929\u3001\u4E0D\u5B89\u5B9A\u5316",fairly_fine_showery_later:"\u3084\u3084\u597D\u5929\u3001\u5F8C\u306B\u306B\u308F\u304B\u96E8",showery_becoming_more_unsettled:"\u306B\u308F\u304B\u96E8\u3001\u60AA\u5316",unsettled_rain_later:"\u4E0D\u5B89\u5B9A\u3001\u5F8C\u306B\u96E8",rain_at_times_worse_later:"\u6642\u3005\u96E8\u3001\u5F8C\u306B\u60AA\u5316",rain_at_times_becoming_very_unsettled:"\u6642\u3005\u96E8\u3001\u975E\u5E38\u306B\u4E0D\u5B89\u5B9A",very_unsettled_rain:"\u975E\u5E38\u306B\u4E0D\u5B89\u5B9A\u3001\u96E8",fine_possibly_showers:"\u597D\u5929\u3001\u306B\u308F\u304B\u96E8\u306E\u53EF\u80FD\u6027",fairly_fine_showers_likely:"\u3084\u3084\u597D\u5929\u3001\u306B\u308F\u304B\u96E8\u306E\u53EF\u80FD\u6027\u5927",showery_bright_intervals:"\u306B\u308F\u304B\u96E8\u3001\u6674\u308C\u9593",changeable_some_rain:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u5C0F\u96E8",unsettled_rain_at_times:"\u4E0D\u5B89\u5B9A\u3001\u6642\u3005\u96E8",rain_at_frequent_intervals:"\u983B\u7E41\u306A\u96E8",stormy_much_rain:"\u5D50\u3001\u5927\u96E8",becoming_fine:"\u56DE\u5FA9\u50BE\u5411",fairly_fine_improving:"\u3084\u3084\u597D\u5929\u3001\u6539\u5584",fairly_fine_possibly_showers_early:"\u3084\u3084\u597D\u5929\u3001\u65E9\u3044\u306B\u308F\u304B\u96E8",showery_early_improving:"\u65E9\u3044\u306B\u308F\u304B\u96E8\u3001\u6539\u5584",changeable_mending:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u6539\u5584",rather_unsettled_clearing_later:"\u3084\u3084\u4E0D\u5B89\u5B9A\u3001\u5F8C\u306B\u6674\u308C",unsettled_probably_improving:"\u4E0D\u5B89\u5B9A\u3001\u304A\u305D\u3089\u304F\u6539\u5584",unsettled_short_fine_intervals:"\u4E0D\u5B89\u5B9A\u3001\u77ED\u3044\u6674\u308C\u9593",very_unsettled_finer_at_times:"\u975E\u5E38\u306B\u4E0D\u5B89\u5B9A\u3001\u6642\u3005\u6539\u5584",stormy_possibly_improving:"\u5D50\u3001\u6539\u5584\u306E\u53EF\u80FD\u6027",stable:"\u5B89\u5B9A",sager_fair_improving:"\u597D\u5929\u3001\u6539\u5584",sager_fair_tending_to_deteriorate:"\u597D\u5929\u3001\u60AA\u5316\u50BE\u5411",sager_fair_no_change:"\u597D\u5929\u3001\u5927\u304D\u306A\u5909\u5316\u306A\u3057",sager_unsettled_rain_likely:"\u4E0D\u5B89\u5B9A\u3001\u96E8\u306E\u53EF\u80FD\u6027",sager_unsettled_probably_improving:"\u4E0D\u5B89\u5B9A\u3001\u304A\u305D\u3089\u304F\u6539\u5584",sager_unsettled_rain_at_times:"\u4E0D\u5B89\u5B9A\u3001\u6642\u3005\u96E8",sager_changeable_becoming_fairer:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u6539\u5584\u50BE\u5411",sager_changeable_becoming_more_unsettled:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u3088\u308A\u4E0D\u5B89\u5B9A",sager_variable_slowly_improving:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u7DE9\u3084\u304B\u306B\u6539\u5584",sager_variable_slowly_deteriorating:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u7DE9\u3084\u304B\u306B\u60AA\u5316",sager_variable_some_change:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u5909\u5316\u3042\u308A"},ko:{settled_fine:"\uB9D1\uACE0 \uC548\uC815\uC801",fine_weather:"\uC88B\uC740 \uB0A0\uC528",fine_becoming_less_settled:"\uC88B\uC74C, \uBD88\uC548\uC815\uD574\uC9D0",fairly_fine_showery_later:"\uAF64 \uC88B\uC74C, \uB098\uC911\uC5D0 \uC18C\uB098\uAE30",showery_becoming_more_unsettled:"\uC18C\uB098\uAE30, \uC545\uD654",unsettled_rain_later:"\uBD88\uC548\uC815, \uB098\uC911\uC5D0 \uBE44",rain_at_times_worse_later:"\uBE44, \uB098\uC911\uC5D0 \uC545\uD654",rain_at_times_becoming_very_unsettled:"\uBE44, \uB9E4\uC6B0 \uBD88\uC548\uC815",very_unsettled_rain:"\uB9E4\uC6B0 \uBD88\uC548\uC815, \uBE44",fine_possibly_showers:"\uC88B\uC74C, \uC18C\uB098\uAE30 \uAC00\uB2A5",fairly_fine_showers_likely:"\uAF64 \uC88B\uC74C, \uC18C\uB098\uAE30 \uAC00\uB2A5\uC131",showery_bright_intervals:"\uC18C\uB098\uAE30, \uAC04\uD5D0\uC801 \uB9D1\uC74C",changeable_some_rain:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uC57D\uD55C \uBE44",unsettled_rain_at_times:"\uBD88\uC548\uC815, \uB54C\uB54C\uB85C \uBE44",rain_at_frequent_intervals:"\uC7A6\uC740 \uBE44",stormy_much_rain:"\uD3ED\uD48D, \uB9CE\uC740 \uBE44",becoming_fine:"\uAC1C\uC120 \uC911",fairly_fine_improving:"\uAF64 \uC88B\uC74C, \uAC1C\uC120",fairly_fine_possibly_showers_early:"\uAF64 \uC88B\uC74C, \uC774\uB978 \uC18C\uB098\uAE30",showery_early_improving:"\uC774\uB978 \uC18C\uB098\uAE30, \uAC1C\uC120",changeable_mending:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uAC1C\uC120",rather_unsettled_clearing_later:"\uB2E4\uC18C \uBD88\uC548\uC815, \uB098\uC911\uC5D0 \uAC2C",unsettled_probably_improving:"\uBD88\uC548\uC815, \uC544\uB9C8 \uAC1C\uC120",unsettled_short_fine_intervals:"\uBD88\uC548\uC815, \uC9E7\uC740 \uB9D1\uC74C",very_unsettled_finer_at_times:"\uB9E4\uC6B0 \uBD88\uC548\uC815, \uB54C\uB54C\uB85C \uAC1C\uC120",stormy_possibly_improving:"\uD3ED\uD48D, \uAC1C\uC120 \uAC00\uB2A5",stable:"\uC548\uC815",sager_fair_improving:"\uC88B\uC740 \uB0A0\uC528, \uAC1C\uC120",sager_fair_tending_to_deteriorate:"\uC88B\uC74C, \uC545\uD654 \uACBD\uD5A5",sager_fair_no_change:"\uC88B\uC740 \uB0A0\uC528, \uD070 \uBCC0\uD654 \uC5C6\uC74C",sager_unsettled_rain_likely:"\uBD88\uC548\uC815, \uBE44 \uAC00\uB2A5\uC131",sager_unsettled_probably_improving:"\uBD88\uC548\uC815, \uC544\uB9C8 \uAC1C\uC120",sager_unsettled_rain_at_times:"\uBD88\uC548\uC815, \uB54C\uB54C\uB85C \uBE44",sager_changeable_becoming_fairer:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uAC1C\uC120 \uACBD\uD5A5",sager_changeable_becoming_more_unsettled:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uB354 \uBD88\uC548\uC815",sager_variable_slowly_improving:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uC11C\uC11C\uD788 \uAC1C\uC120",sager_variable_slowly_deteriorating:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uC11C\uC11C\uD788 \uC545\uD654",sager_variable_some_change:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uBCC0\uD654 \uC608\uC0C1"},nb:{settled_fine:"Fint, stabilt",fine_weather:"Fint v\xE6r",fine_becoming_less_settled:"Fint, mindre stabilt",fairly_fine_showery_later:"Ganske fint, byger senere",showery_becoming_more_unsettled:"Byger, forverres",unsettled_rain_later:"Ustabilt, regn senere",rain_at_times_worse_later:"Regn, verre senere",rain_at_times_becoming_very_unsettled:"Regn, sv\xE6rt ustabilt",very_unsettled_rain:"Sv\xE6rt ustabilt, regn",fine_possibly_showers:"Fint, mulige byger",fairly_fine_showers_likely:"Ganske fint, byger sannsynlige",showery_bright_intervals:"Byger, opphold",changeable_some_rain:"Skiftende, litt regn",unsettled_rain_at_times:"Ustabilt, regn av og til",rain_at_frequent_intervals:"Hyppig regn",stormy_much_rain:"Stormfullt, mye regn",becoming_fine:"Forbedres",fairly_fine_improving:"Ganske fint, forbedres",fairly_fine_possibly_showers_early:"Ganske fint, tidlige byger",showery_early_improving:"Tidlige byger, forbedres",changeable_mending:"Skiftende, forbedres",rather_unsettled_clearing_later:"Ganske ustabilt, klarner senere",unsettled_probably_improving:"Ustabilt, sannsynlig forbedring",unsettled_short_fine_intervals:"Ustabilt, korte opphold",very_unsettled_finer_at_times:"Sv\xE6rt ustabilt, til tider bedre",stormy_possibly_improving:"Stormfullt, mulig forbedring",stable:"Stabilt",sager_fair_improving:"Fint v\xE6r, forbedres",sager_fair_tending_to_deteriorate:"Fint v\xE6r, tendens til forverring",sager_fair_no_change:"Fint v\xE6r, ingen viktig endring",sager_unsettled_rain_likely:"Ustabilt, regn sannsynlig",sager_unsettled_probably_improving:"Ustabilt, sannsynlig forbedring",sager_unsettled_rain_at_times:"Ustabilt, regn av og til",sager_changeable_becoming_fairer:"Skiftende, blir finere",sager_changeable_becoming_more_unsettled:"Skiftende, mer ustabilt",sager_variable_slowly_improving:"Variabelt, langsom forbedring",sager_variable_slowly_deteriorating:"Variabelt, langsom forverring",sager_variable_some_change:"Variabelt, endring forventes"},nl:{settled_fine:"Mooi, stabiel",fine_weather:"Mooi weer",fine_becoming_less_settled:"Mooi, minder stabiel",fairly_fine_showery_later:"Redelijk mooi, buien later",showery_becoming_more_unsettled:"Buien, verslechtering",unsettled_rain_later:"Onstabiel, regen later",rain_at_times_worse_later:"Regen, later slechter",rain_at_times_becoming_very_unsettled:"Regen, zeer onstabiel",very_unsettled_rain:"Zeer onstabiel, regen",fine_possibly_showers:"Mooi, mogelijk buien",fairly_fine_showers_likely:"Redelijk mooi, buien waarschijnlijk",showery_bright_intervals:"Buien, opklaringen",changeable_some_rain:"Wisselvallig, wat regen",unsettled_rain_at_times:"Onstabiel, regen af en toe",rain_at_frequent_intervals:"Frequente regen",stormy_much_rain:"Stormachtig, veel regen",becoming_fine:"Wordt mooier",fairly_fine_improving:"Redelijk mooi, verbetering",fairly_fine_possibly_showers_early:"Redelijk mooi, vroege buien",showery_early_improving:"Vroege buien, verbetering",changeable_mending:"Wisselvallig, verbetering",rather_unsettled_clearing_later:"Onstabiel, later opklaring",unsettled_probably_improving:"Onstabiel, waarschijnlijk beter",unsettled_short_fine_intervals:"Onstabiel, korte opklaringen",very_unsettled_finer_at_times:"Zeer onstabiel, soms beter",stormy_possibly_improving:"Stormachtig, mogelijk beter",stable:"Stabiel",sager_fair_improving:"Mooi weer, verbetering",sager_fair_tending_to_deteriorate:"Mooi weer, neiging tot verslechtering",sager_fair_no_change:"Mooi weer, geen belangrijke verandering",sager_unsettled_rain_likely:"Onstabiel, regen waarschijnlijk",sager_unsettled_probably_improving:"Onstabiel, waarschijnlijk beter",sager_unsettled_rain_at_times:"Onstabiel, regen af en toe",sager_changeable_becoming_fairer:"Wisselvallig, wordt mooier",sager_changeable_becoming_more_unsettled:"Wisselvallig, onstabieler",sager_variable_slowly_improving:"Variabel, langzaam beter",sager_variable_slowly_deteriorating:"Variabel, langzaam slechter",sager_variable_some_change:"Variabel, verandering verwacht"},pl:{settled_fine:"\u0141adna, stabilna pogoda",fine_weather:"\u0141adna pogoda",fine_becoming_less_settled:"\u0141adnie, mniej stabilnie",fairly_fine_showery_later:"Do\u015B\u0107 \u0142adnie, p\xF3\u017Aniej przelotne",showery_becoming_more_unsettled:"Przelotne, pogorszenie",unsettled_rain_later:"Niestabilnie, p\xF3\u017Aniej deszcz",rain_at_times_worse_later:"Deszcz, p\xF3\u017Aniej gorzej",rain_at_times_becoming_very_unsettled:"Deszcz, bardzo niestabilnie",very_unsettled_rain:"Bardzo niestabilnie, deszcz",fine_possibly_showers:"\u0141adnie, mo\u017Cliwe przelotne",fairly_fine_showers_likely:"Do\u015B\u0107 \u0142adnie, przelotne prawdopodobne",showery_bright_intervals:"Przelotne, przeja\u015Bnienia",changeable_some_rain:"Zmiennie, odrobin\u0119 deszczu",unsettled_rain_at_times:"Niestabilnie, deszcz okresami",rain_at_frequent_intervals:"Cz\u0119sty deszcz",stormy_much_rain:"Burzowo, du\u017Co deszczu",becoming_fine:"Poprawa pogody",fairly_fine_improving:"Do\u015B\u0107 \u0142adnie, poprawa",fairly_fine_possibly_showers_early:"Do\u015B\u0107 \u0142adnie, wczesne przelotne",showery_early_improving:"Wczesne przelotne, poprawa",changeable_mending:"Zmiennie, poprawa",rather_unsettled_clearing_later:"Niestabilnie, p\xF3\u017Aniej przeja\u015Bnienia",unsettled_probably_improving:"Niestabilnie, prawdopodobna poprawa",unsettled_short_fine_intervals:"Niestabilnie, kr\xF3tkie przeja\u015Bnienia",very_unsettled_finer_at_times:"Bardzo niestabilnie, chwilami lepiej",stormy_possibly_improving:"Burzowo, mo\u017Cliwa poprawa",stable:"Stabilnie",sager_fair_improving:"\u0141adna pogoda, poprawa",sager_fair_tending_to_deteriorate:"\u0141adna pogoda, tendencja do pogorszenia",sager_fair_no_change:"\u0141adna pogoda, bez istotnych zmian",sager_unsettled_rain_likely:"Niestabilnie, deszcz prawdopodobny",sager_unsettled_probably_improving:"Niestabilnie, prawdopodobna poprawa",sager_unsettled_rain_at_times:"Niestabilnie, deszcz okresami",sager_changeable_becoming_fairer:"Zmiennie, poprawa",sager_changeable_becoming_more_unsettled:"Zmiennie, bardziej niestabilnie",sager_variable_slowly_improving:"Zmiennie, powolna poprawa",sager_variable_slowly_deteriorating:"Zmiennie, powolne pogorszenie",sager_variable_some_change:"Zmiennie, oczekiwane zmiany"},pt:{settled_fine:"Bom tempo est\xE1vel",fine_weather:"Bom tempo",fine_becoming_less_settled:"Bom tempo, menos est\xE1vel",fairly_fine_showery_later:"Razoavelmente bom, aguaceiros depois",showery_becoming_more_unsettled:"Aguaceiros, piora",unsettled_rain_later:"Inst\xE1vel, chuva depois",rain_at_times_worse_later:"Chuva, piora depois",rain_at_times_becoming_very_unsettled:"Chuva, muito inst\xE1vel",very_unsettled_rain:"Muito inst\xE1vel, chuva",fine_possibly_showers:"Bom tempo, poss\xEDveis aguaceiros",fairly_fine_showers_likely:"Razoavelmente bom, aguaceiros prov\xE1veis",showery_bright_intervals:"Aguaceiros, claros",changeable_some_rain:"Vari\xE1vel, alguma chuva",unsettled_rain_at_times:"Inst\xE1vel, chuva por vezes",rain_at_frequent_intervals:"Chuva frequente",stormy_much_rain:"Tempestuoso, muita chuva",becoming_fine:"A melhorar",fairly_fine_improving:"Razoavelmente bom, a melhorar",fairly_fine_possibly_showers_early:"Razoavelmente bom, aguaceiros cedo",showery_early_improving:"Aguaceiros cedo, a melhorar",changeable_mending:"Vari\xE1vel, a melhorar",rather_unsettled_clearing_later:"Inst\xE1vel, clareia depois",unsettled_probably_improving:"Inst\xE1vel, prov\xE1vel melhoria",unsettled_short_fine_intervals:"Inst\xE1vel, claros breves",very_unsettled_finer_at_times:"Muito inst\xE1vel, melhora \xE0s vezes",stormy_possibly_improving:"Tempestuoso, poss\xEDvel melhoria",stable:"Est\xE1vel",sager_fair_improving:"Bom tempo, a melhorar",sager_fair_tending_to_deteriorate:"Bom tempo, tend\xEAncia a piorar",sager_fair_no_change:"Bom tempo, sem altera\xE7\xE3o importante",sager_unsettled_rain_likely:"Inst\xE1vel, chuva prov\xE1vel",sager_unsettled_probably_improving:"Inst\xE1vel, prov\xE1vel melhoria",sager_unsettled_rain_at_times:"Inst\xE1vel, chuva por vezes",sager_changeable_becoming_fairer:"Vari\xE1vel, a melhorar",sager_changeable_becoming_more_unsettled:"Vari\xE1vel, mais inst\xE1vel",sager_variable_slowly_improving:"Vari\xE1vel, melhoria lenta",sager_variable_slowly_deteriorating:"Vari\xE1vel, piora lenta",sager_variable_some_change:"Vari\xE1vel, mudan\xE7as esperadas"},sv:{settled_fine:"Fint, stabilt",fine_weather:"Fint v\xE4der",fine_becoming_less_settled:"Fint, mindre stabilt",fairly_fine_showery_later:"Ganska fint, skurar senare",showery_becoming_more_unsettled:"Skurar, f\xF6rs\xE4mras",unsettled_rain_later:"Ostadigt, regn senare",rain_at_times_worse_later:"Regn, s\xE4mre senare",rain_at_times_becoming_very_unsettled:"Regn, mycket ostadigt",very_unsettled_rain:"Mycket ostadigt, regn",fine_possibly_showers:"Fint, m\xF6jliga skurar",fairly_fine_showers_likely:"Ganska fint, skurar troliga",showery_bright_intervals:"Skurar, uppeh\xE5ll",changeable_some_rain:"Ombytligt, lite regn",unsettled_rain_at_times:"Ostadigt, regn ibland",rain_at_frequent_intervals:"Frekvent regn",stormy_much_rain:"Stormigt, mycket regn",becoming_fine:"F\xF6rb\xE4ttras",fairly_fine_improving:"Ganska fint, f\xF6rb\xE4ttras",fairly_fine_possibly_showers_early:"Ganska fint, tidiga skurar",showery_early_improving:"Tidiga skurar, f\xF6rb\xE4ttras",changeable_mending:"Ombytligt, f\xF6rb\xE4ttras",rather_unsettled_clearing_later:"Ganska ostadigt, klarnar senare",unsettled_probably_improving:"Ostadigt, troligen f\xF6rb\xE4ttring",unsettled_short_fine_intervals:"Ostadigt, korta uppeh\xE5ll",very_unsettled_finer_at_times:"Mycket ostadigt, ibland b\xE4ttre",stormy_possibly_improving:"Stormigt, m\xF6jlig f\xF6rb\xE4ttring",stable:"Stabilt",sager_fair_improving:"Fint v\xE4der, f\xF6rb\xE4ttras",sager_fair_tending_to_deteriorate:"Fint v\xE4der, tendens att f\xF6rs\xE4mras",sager_fair_no_change:"Fint v\xE4der, ingen viktig f\xF6r\xE4ndring",sager_unsettled_rain_likely:"Ostadigt, regn troligt",sager_unsettled_probably_improving:"Ostadigt, troligen f\xF6rb\xE4ttring",sager_unsettled_rain_at_times:"Ostadigt, regn ibland",sager_changeable_becoming_fairer:"Ombytligt, blir finare",sager_changeable_becoming_more_unsettled:"Ombytligt, mer ostadigt",sager_variable_slowly_improving:"Variabelt, l\xE5ngsam f\xF6rb\xE4ttring",sager_variable_slowly_deteriorating:"Variabelt, l\xE5ngsam f\xF6rs\xE4mring",sager_variable_some_change:"Variabelt, f\xF6r\xE4ndring v\xE4ntas"},tr:{settled_fine:"G\xFCzel, stabil",fine_weather:"G\xFCzel hava",fine_becoming_less_settled:"G\xFCzel, daha az stabil",fairly_fine_showery_later:"Olduk\xE7a g\xFCzel, sonra sa\u011Fanak",showery_becoming_more_unsettled:"Sa\u011Fanak, k\xF6t\xFCle\u015Fme",unsettled_rain_later:"Dalgal\u0131, sonra ya\u011Fmur",rain_at_times_worse_later:"Ya\u011Fmur, sonra k\xF6t\xFCle\u015Fme",rain_at_times_becoming_very_unsettled:"Ya\u011Fmur, \xE7ok dalgal\u0131",very_unsettled_rain:"\xC7ok dalgal\u0131, ya\u011Fmur",fine_possibly_showers:"G\xFCzel, sa\u011Fanak olas\u0131",fairly_fine_showers_likely:"Olduk\xE7a g\xFCzel, sa\u011Fanak muhtemel",showery_bright_intervals:"Sa\u011Fanak, a\xE7\u0131lmalar",changeable_some_rain:"De\u011Fi\u015Fken, biraz ya\u011Fmur",unsettled_rain_at_times:"Dalgal\u0131, ara s\u0131ra ya\u011Fmur",rain_at_frequent_intervals:"S\u0131k ya\u011Fmur",stormy_much_rain:"F\u0131rt\u0131nal\u0131, \xE7ok ya\u011Fmur",becoming_fine:"D\xFCzeliyor",fairly_fine_improving:"Olduk\xE7a g\xFCzel, d\xFCzeliyor",fairly_fine_possibly_showers_early:"Olduk\xE7a g\xFCzel, erken sa\u011Fanak",showery_early_improving:"Erken sa\u011Fanak, d\xFCzeliyor",changeable_mending:"De\u011Fi\u015Fken, d\xFCzeliyor",rather_unsettled_clearing_later:"Dalgal\u0131, sonra a\xE7\u0131l\u0131yor",unsettled_probably_improving:"Dalgal\u0131, muhtemelen d\xFCzeliyor",unsettled_short_fine_intervals:"Dalgal\u0131, k\u0131sa a\xE7\u0131lmalar",very_unsettled_finer_at_times:"\xC7ok dalgal\u0131, ara s\u0131ra d\xFCzeliyor",stormy_possibly_improving:"F\u0131rt\u0131nal\u0131, d\xFCzelme olas\u0131",stable:"Stabil",sager_fair_improving:"G\xFCzel hava, d\xFCzeliyor",sager_fair_tending_to_deteriorate:"G\xFCzel hava, k\xF6t\xFCle\u015Fme e\u011Filimi",sager_fair_no_change:"G\xFCzel hava, \xF6nemli de\u011Fi\u015Fiklik yok",sager_unsettled_rain_likely:"Dalgal\u0131, ya\u011Fmur olas\u0131",sager_unsettled_probably_improving:"Dalgal\u0131, muhtemelen d\xFCzeliyor",sager_unsettled_rain_at_times:"Dalgal\u0131, ara s\u0131ra ya\u011Fmur",sager_changeable_becoming_fairer:"De\u011Fi\u015Fken, d\xFCzeliyor",sager_changeable_becoming_more_unsettled:"De\u011Fi\u015Fken, daha dalgal\u0131",sager_variable_slowly_improving:"De\u011Fi\u015Fken, yava\u015F d\xFCzelme",sager_variable_slowly_deteriorating:"De\u011Fi\u015Fken, yava\u015F k\xF6t\xFCle\u015Fme",sager_variable_some_change:"De\u011Fi\u015Fken, de\u011Fi\u015Fiklik bekleniyor"},uk:{settled_fine:"\u042F\u0441\u043D\u043E, \u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E",fine_weather:"\u0413\u0430\u0440\u043D\u0430 \u043F\u043E\u0433\u043E\u0434\u0430",fine_becoming_less_settled:"\u0414\u043E\u0431\u0440\u0435, \u043C\u043E\u0436\u043B\u0438\u0432\u0435 \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",fairly_fine_showery_later:"\u0414\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0431\u0440\u0435, \u0437\u0433\u043E\u0434\u043E\u043C \u0434\u043E\u0449\u0456",showery_becoming_more_unsettled:"\u0414\u043E\u0449\u043E\u0432\u043E, \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",unsettled_rain_later:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449 \u043F\u0456\u0437\u043D\u0456\u0448\u0435",rain_at_times_worse_later:"\u0414\u043E\u0449\u0456, \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F \u043F\u0456\u0437\u043D\u0456\u0448\u0435",rain_at_times_becoming_very_unsettled:"\u0414\u043E\u0449\u0456, \u0434\u0443\u0436\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E",very_unsettled_rain:"\u0414\u0443\u0436\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449",fine_possibly_showers:"\u0414\u043E\u0431\u0440\u0435, \u043C\u043E\u0436\u043B\u0438\u0432\u0456 \u0437\u043B\u0438\u0432\u0438",fairly_fine_showers_likely:"\u0414\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0431\u0440\u0435, \u0437\u043B\u0438\u0432\u0438 \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0456",showery_bright_intervals:"\u0417\u043B\u0438\u0432\u0438, \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F",changeable_some_rain:"\u041C\u0456\u043D\u043B\u0438\u0432\u0430, \u043D\u0435\u0432\u0435\u043B\u0438\u043A\u0438\u0439 \u0434\u043E\u0449",unsettled_rain_at_times:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449\u0456 \u043F\u0435\u0440\u0456\u043E\u0434\u0438\u0447\u043D\u043E",rain_at_frequent_intervals:"\u0427\u0430\u0441\u0442\u0456 \u0434\u043E\u0449\u0456",stormy_much_rain:"\u0428\u0442\u043E\u0440\u043C\u043E\u0432\u043E, \u0441\u0438\u043B\u044C\u043D\u0456 \u0434\u043E\u0449\u0456",becoming_fine:"\u041F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u043F\u043E\u0433\u043E\u0434\u0438",fairly_fine_improving:"\u0414\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0431\u0440\u0435, \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",fairly_fine_possibly_showers_early:"\u0414\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0431\u0440\u0435, \u0440\u0430\u043D\u043D\u0456 \u0437\u043B\u0438\u0432\u0438",showery_early_improving:"\u0420\u0430\u043D\u043D\u0456 \u0437\u043B\u0438\u0432\u0438, \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",changeable_mending:"\u041C\u0456\u043D\u043B\u0438\u0432\u0430, \u043F\u043E\u043A\u0440\u0430\u0449\u0443\u0454\u0442\u044C\u0441\u044F",rather_unsettled_clearing_later:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F \u043F\u0456\u0437\u043D\u0456\u0448\u0435",unsettled_probably_improving:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0435 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",unsettled_short_fine_intervals:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u043A\u043E\u0440\u043E\u0442\u043A\u0456 \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F",very_unsettled_finer_at_times:"\u0414\u0443\u0436\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0447\u0430\u0441\u043E\u043C \u043A\u0440\u0430\u0449\u0435",stormy_possibly_improving:"\u0428\u0442\u043E\u0440\u043C\u043E\u0432\u043E, \u043C\u043E\u0436\u043B\u0438\u0432\u0435 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",stable:"\u0421\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E",sager_fair_improving:"\u0413\u0430\u0440\u043D\u0430 \u043F\u043E\u0433\u043E\u0434\u0430, \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",sager_fair_tending_to_deteriorate:"\u041F\u043E\u043A\u0438 \u0434\u043E\u0431\u0440\u0435, \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",sager_fair_no_change:"\u0413\u0430\u0440\u043D\u0430 \u043F\u043E\u0433\u043E\u0434\u0430, \u0431\u0435\u0437 \u0437\u043C\u0456\u043D",sager_unsettled_rain_likely:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449 \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0438\u0439",sager_unsettled_probably_improving:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0435 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",sager_unsettled_rain_at_times:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449\u0456 \u043F\u0435\u0440\u0456\u043E\u0434\u0438\u0447\u043D\u043E",sager_changeable_becoming_fairer:"\u041C\u0456\u043D\u043B\u0438\u0432\u0430, \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F",sager_changeable_becoming_more_unsettled:"\u041C\u0456\u043D\u043B\u0438\u0432\u0430, \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",sager_variable_slowly_improving:"\u0417\u043C\u0456\u043D\u043D\u0430, \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u0435 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",sager_variable_slowly_deteriorating:"\u0417\u043C\u0456\u043D\u043D\u0430, \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u0435 \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",sager_variable_some_change:"\u0417\u043C\u0456\u043D\u043D\u0430, \u043E\u0447\u0456\u043A\u0443\u044E\u0442\u044C\u0441\u044F \u0437\u043C\u0456\u043D\u0438"},"zh-Hans":{settled_fine:"\u6674\u6717\u7A33\u5B9A",fine_weather:"\u5929\u6C14\u826F\u597D",fine_becoming_less_settled:"\u826F\u597D\uFF0C\u8D8B\u4E8E\u4E0D\u7A33\u5B9A",fairly_fine_showery_later:"\u8F83\u597D\uFF0C\u7A0D\u540E\u9635\u96E8",showery_becoming_more_unsettled:"\u9635\u96E8\uFF0C\u8F6C\u5DEE",unsettled_rain_later:"\u4E0D\u7A33\u5B9A\uFF0C\u7A0D\u540E\u964D\u96E8",rain_at_times_worse_later:"\u65F6\u6709\u964D\u96E8\uFF0C\u7A0D\u540E\u8F6C\u5DEE",rain_at_times_becoming_very_unsettled:"\u65F6\u6709\u964D\u96E8\uFF0C\u975E\u5E38\u4E0D\u7A33\u5B9A",very_unsettled_rain:"\u975E\u5E38\u4E0D\u7A33\u5B9A\uFF0C\u6709\u96E8",fine_possibly_showers:"\u826F\u597D\uFF0C\u53EF\u80FD\u6709\u9635\u96E8",fairly_fine_showers_likely:"\u8F83\u597D\uFF0C\u53EF\u80FD\u6709\u9635\u96E8",showery_bright_intervals:"\u9635\u96E8\uFF0C\u95F4\u6674",changeable_some_rain:"\u591A\u53D8\uFF0C\u6709\u5C0F\u96E8",unsettled_rain_at_times:"\u4E0D\u7A33\u5B9A\uFF0C\u65F6\u6709\u964D\u96E8",rain_at_frequent_intervals:"\u9891\u7E41\u964D\u96E8",stormy_much_rain:"\u66B4\u98CE\u96E8\uFF0C\u5927\u96E8",becoming_fine:"\u8F6C\u597D",fairly_fine_improving:"\u8F83\u597D\uFF0C\u6539\u5584\u4E2D",fairly_fine_possibly_showers_early:"\u8F83\u597D\uFF0C\u65E9\u671F\u53EF\u80FD\u6709\u9635\u96E8",showery_early_improving:"\u65E9\u671F\u9635\u96E8\uFF0C\u6539\u5584\u4E2D",changeable_mending:"\u591A\u53D8\uFF0C\u597D\u8F6C\u4E2D",rather_unsettled_clearing_later:"\u8F83\u4E0D\u7A33\u5B9A\uFF0C\u7A0D\u540E\u8F6C\u6674",unsettled_probably_improving:"\u4E0D\u7A33\u5B9A\uFF0C\u53EF\u80FD\u597D\u8F6C",unsettled_short_fine_intervals:"\u4E0D\u7A33\u5B9A\uFF0C\u77ED\u6682\u6674\u6717",very_unsettled_finer_at_times:"\u975E\u5E38\u4E0D\u7A33\u5B9A\uFF0C\u65F6\u6709\u597D\u8F6C",stormy_possibly_improving:"\u66B4\u98CE\u96E8\uFF0C\u53EF\u80FD\u597D\u8F6C",stable:"\u7A33\u5B9A",sager_fair_improving:"\u5929\u6C14\u826F\u597D\uFF0C\u6539\u5584\u4E2D",sager_fair_tending_to_deteriorate:"\u76EE\u524D\u826F\u597D\uFF0C\u8D8B\u4E8E\u8F6C\u5DEE",sager_fair_no_change:"\u5929\u6C14\u826F\u597D\uFF0C\u65E0\u660E\u663E\u53D8\u5316",sager_unsettled_rain_likely:"\u4E0D\u7A33\u5B9A\uFF0C\u53EF\u80FD\u6709\u96E8",sager_unsettled_probably_improving:"\u4E0D\u7A33\u5B9A\uFF0C\u53EF\u80FD\u597D\u8F6C",sager_unsettled_rain_at_times:"\u4E0D\u7A33\u5B9A\uFF0C\u65F6\u6709\u964D\u96E8",sager_changeable_becoming_fairer:"\u591A\u53D8\uFF0C\u8D8B\u4E8E\u597D\u8F6C",sager_changeable_becoming_more_unsettled:"\u591A\u53D8\uFF0C\u8D8B\u4E8E\u66F4\u4E0D\u7A33\u5B9A",sager_variable_slowly_improving:"\u591A\u53D8\uFF0C\u7F13\u6162\u597D\u8F6C",sager_variable_slowly_deteriorating:"\u591A\u53D8\uFF0C\u7F13\u6162\u8F6C\u5DEE",sager_variable_some_change:"\u591A\u53D8\uFF0C\u9884\u8BA1\u6709\u53D8\u5316"},"zh-Hant":{settled_fine:"\u6674\u6717\u7A69\u5B9A",fine_weather:"\u5929\u6C23\u826F\u597D",fine_becoming_less_settled:"\u826F\u597D\uFF0C\u8DA8\u65BC\u4E0D\u7A69\u5B9A",fairly_fine_showery_later:"\u8F03\u597D\uFF0C\u7A0D\u5F8C\u9663\u96E8",showery_becoming_more_unsettled:"\u9663\u96E8\uFF0C\u8F49\u5DEE",unsettled_rain_later:"\u4E0D\u7A69\u5B9A\uFF0C\u7A0D\u5F8C\u964D\u96E8",rain_at_times_worse_later:"\u6642\u6709\u964D\u96E8\uFF0C\u7A0D\u5F8C\u8F49\u5DEE",rain_at_times_becoming_very_unsettled:"\u6642\u6709\u964D\u96E8\uFF0C\u975E\u5E38\u4E0D\u7A69\u5B9A",very_unsettled_rain:"\u975E\u5E38\u4E0D\u7A69\u5B9A\uFF0C\u6709\u96E8",fine_possibly_showers:"\u826F\u597D\uFF0C\u53EF\u80FD\u6709\u9663\u96E8",fairly_fine_showers_likely:"\u8F03\u597D\uFF0C\u53EF\u80FD\u6709\u9663\u96E8",showery_bright_intervals:"\u9663\u96E8\uFF0C\u9593\u6674",changeable_some_rain:"\u591A\u8B8A\uFF0C\u6709\u5C0F\u96E8",unsettled_rain_at_times:"\u4E0D\u7A69\u5B9A\uFF0C\u6642\u6709\u964D\u96E8",rain_at_frequent_intervals:"\u983B\u7E41\u964D\u96E8",stormy_much_rain:"\u66B4\u98A8\u96E8\uFF0C\u5927\u96E8",becoming_fine:"\u8F49\u597D",fairly_fine_improving:"\u8F03\u597D\uFF0C\u6539\u5584\u4E2D",fairly_fine_possibly_showers_early:"\u8F03\u597D\uFF0C\u65E9\u671F\u53EF\u80FD\u6709\u9663\u96E8",showery_early_improving:"\u65E9\u671F\u9663\u96E8\uFF0C\u6539\u5584\u4E2D",changeable_mending:"\u591A\u8B8A\uFF0C\u597D\u8F49\u4E2D",rather_unsettled_clearing_later:"\u8F03\u4E0D\u7A69\u5B9A\uFF0C\u7A0D\u5F8C\u8F49\u6674",unsettled_probably_improving:"\u4E0D\u7A69\u5B9A\uFF0C\u53EF\u80FD\u597D\u8F49",unsettled_short_fine_intervals:"\u4E0D\u7A69\u5B9A\uFF0C\u77ED\u66AB\u6674\u6717",very_unsettled_finer_at_times:"\u975E\u5E38\u4E0D\u7A69\u5B9A\uFF0C\u6642\u6709\u597D\u8F49",stormy_possibly_improving:"\u66B4\u98A8\u96E8\uFF0C\u53EF\u80FD\u597D\u8F49",stable:"\u7A69\u5B9A",sager_fair_improving:"\u5929\u6C23\u826F\u597D\uFF0C\u6539\u5584\u4E2D",sager_fair_tending_to_deteriorate:"\u76EE\u524D\u826F\u597D\uFF0C\u8DA8\u65BC\u8F49\u5DEE",sager_fair_no_change:"\u5929\u6C23\u826F\u597D\uFF0C\u7121\u660E\u986F\u8B8A\u5316",sager_unsettled_rain_likely:"\u4E0D\u7A69\u5B9A\uFF0C\u53EF\u80FD\u6709\u96E8",sager_unsettled_probably_improving:"\u4E0D\u7A69\u5B9A\uFF0C\u53EF\u80FD\u597D\u8F49",sager_unsettled_rain_at_times:"\u4E0D\u7A69\u5B9A\uFF0C\u6642\u6709\u964D\u96E8",sager_changeable_becoming_fairer:"\u591A\u8B8A\uFF0C\u8DA8\u65BC\u597D\u8F49",sager_changeable_becoming_more_unsettled:"\u591A\u8B8A\uFF0C\u8DA8\u65BC\u66F4\u4E0D\u7A69\u5B9A",sager_variable_slowly_improving:"\u591A\u8B8A\uFF0C\u7DE9\u6162\u597D\u8F49",sager_variable_slowly_deteriorating:"\u591A\u8B8A\uFF0C\u7DE9\u6162\u8F49\u5DEE",sager_variable_some_change:"\u591A\u8B8A\uFF0C\u9810\u8A08\u6709\u8B8A\u5316"},ru:{settled_fine:"\u0421\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E",fine_weather:"\u042F\u0441\u043D\u0430\u044F \u043F\u043E\u0433\u043E\u0434\u0430",fine_becoming_less_settled:"\u042F\u0441\u043D\u043E, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",fairly_fine_showery_later:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E, \u043F\u043E\u0437\u0436\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043F\u0435\u0440\u0435\u043B\u0438\u0432\u043D\u044B\u0435 \u0434\u043E\u0436\u0434\u0438",showery_becoming_more_unsettled:"\u041F\u0435\u0440\u0435\u043B\u0438\u0432\u043D\u044B\u0435 \u0434\u043E\u0436\u0434\u0438, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0431\u043E\u043B\u0435\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",unsettled_rain_later:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u043F\u043E\u0437\u0436\u0435 \u0434\u043E\u0436\u0434\u044C",rain_at_times_worse_later:"\u041F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u043E\u0436\u0434\u044C, \u043F\u043E\u0437\u0436\u0435 \u0443\u0445\u0443\u0434\u0448\u0435\u043D\u0438\u0435",rain_at_times_becoming_very_unsettled:"\u041F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u043E\u0436\u0434\u044C, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043E\u0447\u0435\u043D\u044C \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",very_unsettled_rain:"\u041E\u0447\u0435\u043D\u044C \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0434\u043E\u0436\u0434\u044C",fine_possibly_showers:"\u042F\u0441\u043D\u043E, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043B\u0438\u0432\u043D\u0438",fairly_fine_showers_likely:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E, \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u044B \u043B\u0438\u0432\u043D\u0438",showery_bright_intervals:"\u041B\u0438\u0432\u043D\u0438, \u0441 \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u044F\u043C\u0438",changeable_some_rain:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043F\u043E\u0433\u043E\u0434\u0430, \u043C\u0435\u0441\u0442\u0430\u043C\u0438 \u0434\u043E\u0436\u0434\u044C",unsettled_rain_at_times:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0440\u0435\u043C\u0435\u043D\u0430\u043C\u0438 \u0434\u043E\u0436\u0434\u044C",rain_at_frequent_intervals:"\u0427\u0430\u0441\u0442\u044B\u0435 \u0434\u043E\u0436\u0434\u0438",stormy_much_rain:"\u0413\u0440\u043E\u0437\u043E\u0432\u0430\u044F \u043F\u043E\u0433\u043E\u0434\u0430, \u0441\u0438\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u0436\u0434\u044C",becoming_fine:"\u0421\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u044F\u0441\u043D\u043E",fairly_fine_improving:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u0442\u0441\u044F",fairly_fine_possibly_showers_early:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E, \u0443\u0442\u0440\u043E\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043B\u0438\u0432\u043D\u0438",showery_early_improving:"\u0420\u0430\u043D\u043D\u0438\u043C \u0443\u0442\u0440\u043E\u043C \u0434\u043E\u0436\u0434\u0438, \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u0435 \u043F\u043E\u0433\u043E\u0434\u044B",changeable_mending:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u0442\u0441\u044F",rather_unsettled_clearing_later:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u043F\u043E\u0437\u0436\u0435 \u043F\u0440\u043E\u044F\u0441\u043D\u044F\u0435\u0442\u0441\u044F",unsettled_probably_improving:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u0441\u044F",unsettled_short_fine_intervals:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0435 \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u044F",very_unsettled_finer_at_times:"\u041E\u0447\u0435\u043D\u044C \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0440\u0435\u043C\u0435\u043D\u0430\u043C\u0438 \u043F\u0440\u043E\u044F\u0441\u043D\u044F\u0435\u0442\u0441\u044F",stormy_possibly_improving:"\u0413\u0440\u043E\u0437\u043E\u0432\u043E, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u0441\u044F",stable:"\u0421\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",sager_fair_improving:"\u042F\u0441\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u0442\u0441\u044F",sager_fair_tending_to_deteriorate:"\u0421\u0435\u0439\u0447\u0430\u0441 \u044F\u0441\u043D\u043E, \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u044F \u043A \u0443\u0445\u0443\u0434\u0448\u0435\u043D\u0438\u044E",sager_fair_no_change:"\u042F\u0441\u043D\u043E, \u0431\u0435\u0437 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439",sager_unsettled_rain_likely:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0435\u0440\u043E\u044F\u0442\u0435\u043D \u0434\u043E\u0436\u0434\u044C",sager_unsettled_probably_improving:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u0441\u044F",sager_unsettled_rain_at_times:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0440\u0435\u043C\u0435\u043D\u0430\u043C\u0438 \u0434\u043E\u0436\u0434\u044C",sager_changeable_becoming_fairer:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u044F\u0441\u043D\u0435\u0435",sager_changeable_becoming_more_unsettled:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0431\u043E\u043B\u0435\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",sager_variable_slowly_improving:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u043F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u0442\u0441\u044F",sager_variable_slowly_deteriorating:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u043F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u0443\u0445\u0443\u0434\u0448\u0430\u0435\u0442\u0441\u044F",sager_variable_some_change:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u043E\u0436\u0438\u0434\u0430\u044E\u0442\u0441\u044F \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"},fr:{settled_fine:"Temps stable et beau",fine_weather:"Beau temps",fine_becoming_less_settled:"Beau, devenant moins stable",fairly_fine_showery_later:"Assez beau, averses plus tard",showery_becoming_more_unsettled:"Averses, devenant plus instable",unsettled_rain_later:"Instable, pluie plus tard",rain_at_times_worse_later:"Pluie par moments, aggravation plus tard",rain_at_times_becoming_very_unsettled:"Pluie par moments, devenant tr\xE8s instable",very_unsettled_rain:"Tr\xE8s instable, pluie",fine_possibly_showers:"Beau temps, averses possibles",fairly_fine_showers_likely:"Temps assez beau, averses probables",showery_bright_intervals:"Averses, \xE9claircies par moments",changeable_some_rain:"Temps variable, quelques averses",unsettled_rain_at_times:"Temps instable, averses par moments",rain_at_frequent_intervals:"Averses fr\xE9quentes",stormy_much_rain:"Orageux, fortes averses",becoming_fine:"Temps s'am\xE9liorant",fairly_fine_improving:"Temps assez beau, s'am\xE9liorant",fairly_fine_possibly_showers_early:"Temps assez beau, averses possibles en d\xE9but de journ\xE9e",showery_early_improving:"Averses t\xF4t dans la journ\xE9e, am\xE9lioration",changeable_mending:"Temps variable, s'am\xE9liorant",rather_unsettled_clearing_later:"Temps plut\xF4t instable, s'\xE9claircissant plus tard",unsettled_probably_improving:"Temps instable, s'am\xE9liorant probablement",unsettled_short_fine_intervals:"Temps instable, courtes \xE9claircies",very_unsettled_finer_at_times:"Temps tr\xE8s instable, s'am\xE9liorant par moments",stormy_possibly_improving:"Orageux, s'am\xE9liorant peut-\xEAtre",stable:"Stable",sager_fair_improving:"Temps clair, s'am\xE9liorant",sager_fair_tending_to_deteriorate:"Temps clair actuellement, tendance \xE0 la d\xE9t\xE9rioration",sager_fair_no_change:"Temps clair, pas de changement notable",sager_unsettled_rain_likely:"Temps instable, pluie probable",sager_unsettled_probably_improving:"Temps instable, s'am\xE9liorant probablement",sager_unsettled_rain_at_times:"Temps instable, averses par moments",sager_changeable_becoming_fairer:"Temps changeant, s'\xE9claircissant progressivement",sager_changeable_becoming_more_unsettled:"Temps changeant, devenant plus instable",sager_variable_slowly_improving:"Temps variable, s'am\xE9liorant lentement",sager_variable_slowly_deteriorating:"Temps variable, se d\xE9t\xE9riorant lentement",sager_variable_some_change:"Temps variable, quelques changements attendus"}},te={en:"Precip",ru:"\u041E\u0441\u0430\u0434\u043A\u0438",fr:"Pr\xE9cip.",de:"Niederschlag",es:"Precip.",it:"Precip.",pl:"Opady","zh-Hans":"\u964D\u6C34","zh-Hant":"\u964D\u6C34",nl:"Neerslag",pt:"Precip.",uk:"\u041E\u043F\u0430\u0434\u0438",ja:"\u964D\u6C34",ko:"\uAC15\uC218",cs:"Sr\xE1\u017Eky",sv:"Nederb.",da:"Nedb.",nb:"Nedb.",hu:"Csapad\xE9k",tr:"Ya\u011F\u0131\u015F"},ie={en:{storm:"STORMY",rain:"RAIN",change:"CHANGE",fair:"FAIR",very_dry:"VERY DRY",falling:"FALLING",steady:"STEADY",rising:"RISING",delta_3h:"\u0394 3 HOURS",aneroid:"ANEROID BAROMETER",compensated:"Compensated for Temperature",current:"Current",history_3h:"3h ago",trend:"Trend"},ru:{storm:"\u0428\u0422\u041E\u0420\u041C",rain:"\u0414\u041E\u0416\u0414\u042C",change:"\u041F\u0415\u0420\u0415\u041C\u0415\u041D\u041D\u041E",fair:"\u042F\u0421\u041D\u041E",very_dry:"\u0421\u0423\u0428\u042C",falling:"\u041F\u0410\u0414\u0415\u041D\u0418\u0415",steady:"\u0421\u0422\u041E\u0419\u041A\u041E",rising:"\u0420\u041E\u0421\u0422",delta_3h:"\u0394 3 \u0427\u0410\u0421\u0410",aneroid:"\u0411\u0410\u0420\u041E\u041C\u0415\u0422\u0420-\u0410\u041D\u0415\u0420\u041E\u0418\u0414",compensated:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0438\u044F",current:"\u0422\u0435\u043A\u0443\u0449\u0435\u0435",history_3h:"3 \u0447 \u043D\u0430\u0437\u0430\u0434",trend:"\u0422\u0440\u0435\u043D\u0434"},de:{storm:"STURM",rain:"REGEN",change:"VER\xC4NDERLICH",fair:"SCH\xD6N",very_dry:"BEST\xC4NDIG",falling:"FALLEND",steady:"BEST\xC4NDIG",rising:"STEIGEND",delta_3h:"\u0394 3 STD",aneroid:"ANEROID-BAROMETER",compensated:"Temperaturkompensiert",current:"Aktuell",history_3h:"Vor 3 Std",trend:"Trend"},es:{storm:"TEMPESTAD",rain:"LLUVIA",change:"VARIABLE",fair:"BUEN TIEMPO",very_dry:"MUY SECO",falling:"BAJANDO",steady:"ESTABLE",rising:"SUBIENDO",delta_3h:"\u0394 3 HORAS",aneroid:"BAR\xD3METRO ANEROIDE",compensated:"Compensado por Temperatura",current:"Actual",history_3h:"Hace 3h",trend:"Tendencia"},fr:{storm:"TEMP\xCATE",rain:"PLUIE",change:"VARIABLE",fair:"BEAU TEMPS",very_dry:"TR\xC8S SEC",falling:"BAISSE",steady:"STABLE",rising:"HAUSSE",delta_3h:"\u0394 3 HEURES",aneroid:"BAROM\xC8TRE AN\xC9RO\xCFDE",compensated:"Compens\xE9 en Temp\xE9rature",current:"Actuel",history_3h:"Il y a 3h",trend:"Tendance"},it:{storm:"TEMPESTA",rain:"PIOGGIA",change:"VARIABILE",fair:"BEL TEMPO",very_dry:"MOLTO SECCO",falling:"CALO",steady:"STABILE",rising:"SALITA",delta_3h:"\u0394 3 ORE",aneroid:"BAROMETRO ANEROIDE",compensated:"Compensato in Temperatura",current:"Attuale",history_3h:"3 ore fa",trend:"Tendenza"},pl:{storm:"BURZA",rain:"DESZCZ",change:"ZMIENNIE",fair:"POGODNIE",very_dry:"BARDZO SUCHO",falling:"SPADEK",steady:"STABILNIE",rising:"WZROST",delta_3h:"\u0394 3 GODZ",aneroid:"BAROMETR ANEROID",compensated:"Kompensacja Temperatury",current:"Bie\u017C\u0105ce",history_3h:"3h temu",trend:"Trend"},pt:{storm:"TEMPESTADE",rain:"CHUVA",change:"VARI\xC1VEL",fair:"BOM TEMPO",very_dry:"MUITO SECO",falling:"QUEDA",steady:"EST\xC1VEL",rising:"ALTA",delta_3h:"\u0394 3 HORAS",aneroid:"BAR\xD3METRO ANEROIDE",compensated:"Compensado por Temperatura",current:"Atual",history_3h:"H\xE1 3h",trend:"Tend\xEAncia"},uk:{storm:"\u0428\u0422\u041E\u0420\u041C",rain:"\u0414\u041E\u0429",change:"\u041C\u0406\u041D\u041B\u0418\u0412\u041E",fair:"\u042F\u0421\u041D\u041E",very_dry:"\u0421\u0423\u0428\u0410",falling:"\u041F\u0410\u0414\u0406\u041D\u041D\u042F",steady:"\u0421\u0422\u0406\u0419\u041A\u041E",rising:"\u0417\u0420\u041E\u0421\u0422\u0410\u041D\u041D\u042F",delta_3h:"\u0394 3 \u0413\u041E\u0414",aneroid:"\u0411\u0410\u0420\u041E\u041C\u0415\u0422\u0420-\u0410\u041D\u0415\u0420\u041E\u0407\u0414",compensated:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0430 \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0456\u044F",current:"\u041F\u043E\u0442\u043E\u0447\u043D\u0438\u0439",history_3h:"3 \u0433\u043E\u0434 \u0442\u043E\u043C\u0443",trend:"\u0422\u0440\u0435\u043D\u0434"},"zh-Hans":{storm:"\u66B4\u98CE\u96E8",rain:"\u964D\u96E8",change:"\u591A\u53D8",fair:"\u6674\u6717",very_dry:"\u5E72\u71E5",falling:"\u4E0B\u964D",steady:"\u7A33\u5B9A",rising:"\u4E0A\u5347",delta_3h:"\u0394 3\u5C0F\u65F6",aneroid:"\u65E0\u6DB2\u6C14\u538B\u8868",compensated:"\u6E29\u5EA6\u8865\u507F\u578B",current:"\u5F53\u524D",history_3h:"3\u5C0F\u65F6\u524D",trend:"\u8D8B\u52BF"},"zh-Hant":{storm:"\u66B4\u98A8\u96E8",rain:"\u964D\u96E8",change:"\u591A\u8B8A",fair:"\u6674\u6717",very_dry:"\u4E7E\u71E5",falling:"\u4E0B\u964D",steady:"\u7A69\u5B9A",rising:"\u4E0A\u5347",delta_3h:"\u0394 3\u5C0F\u6642",aneroid:"\u7121\u6DB2\u6C23\u58D3\u8868",compensated:"\u6EAB\u5EA6\u88DC\u511F\u578B",current:"\u7576\u524D",history_3h:"3\u5C0F\u6642\u524D",trend:"\u8DA8\u52E2"},ja:{storm:"\u5D50",rain:"\u96E8",change:"\u5909\u5316",fair:"\u597D\u5929",very_dry:"\u4E7E\u71E5",falling:"\u4F4E\u4E0B",steady:"\u5B89\u5B9A",rising:"\u4E0A\u6607",delta_3h:"\u0394 3\u6642\u9593",aneroid:"\u30A2\u30CD\u30ED\u30A4\u30C9\u6C17\u5727\u8A08",compensated:"\u6E29\u5EA6\u88DC\u6B63\u6E08",current:"\u73FE\u5728",history_3h:"3\u6642\u9593\u524D",trend:"\u50BE\u5411"},ko:{storm:"\uD3ED\uD48D",rain:"\uBE44",change:"\uBCC0\uB355",fair:"\uB9D1\uC74C",very_dry:"\uAC74\uC870",falling:"\uD558\uAC15",steady:"\uC548\uC815",rising:"\uC0C1\uC2B9",delta_3h:"\u0394 3\uC2DC\uAC04",aneroid:"\uC544\uB124\uB85C\uC774\uB4DC \uAE30\uC555\uACC4",compensated:"\uC628\uB3C4 \uBCF4\uC815\uB428",current:"\uD604\uC7AC",history_3h:"3\uC2DC\uAC04 \uC804",trend:"\uCD94\uC138"},cs:{storm:"BOU\u0158E",rain:"D\xC9\u0160\u0164",change:"PROM\u011ANLIVO",fair:"P\u011AKN\u011A",very_dry:"VELMI SUCHO",falling:"POKLES",steady:"UST\xC1LENO",rising:"VZESTUP",delta_3h:"\u0394 3 HOD",aneroid:"ANEROIDN\xCD BAROMETR",compensated:"Teplotn\u011B kompenzov\xE1no",current:"Nyn\xED",history_3h:"P\u0159ed 3h",trend:"Trend"},sv:{storm:"STORM",rain:"REGN",change:"OMBYTLIGT",fair:"VACKERT",very_dry:"MYCKET TORRT",falling:"FALLANDE",steady:"STADIGT",rising:"STIGANDE",delta_3h:"\u0394 3 TIM",aneroid:"ANEROIDBAROMETER",compensated:"Temperaturkompenserad",current:"Nu",history_3h:"3 tim sedan",trend:"Trend"},da:{storm:"STORM",rain:"REGN",change:"FORANDERLIGT",fair:"SMUKT",very_dry:"MEGET T\xD8RT",falling:"FALDENDE",steady:"STABILT",rising:"STIGENDE",delta_3h:"\u0394 3 TIMER",aneroid:"ANEROIDBAROMETER",compensated:"Temperaturkompenseret",current:"Nu",history_3h:"3t siden",trend:"Trend"},nb:{storm:"STORM",rain:"REGN",change:"SKIFTENDE",fair:"PENT",very_dry:"SV\xC6RT T\xD8RT",falling:"FALLENDE",steady:"STABILT",rising:"STIGENDE",delta_3h:"\u0394 3 TIMER",aneroid:"ANEROIDBAROMETER",compensated:"Temperaturkompensert",current:"N\xE5",history_3h:"3t siden",trend:"Trend"},nl:{storm:"STORM",rain:"REGEN",change:"VERANDERLIJK",fair:"MOOI",very_dry:"ZEER DROOG",falling:"DALEND",steady:"STABIEL",rising:"STIJGEND",delta_3h:"\u0394 3 UUR",aneroid:"ANERO\xCFDE BAROMETER",compensated:"Temperatuurgecompenseerd",current:"Nu",history_3h:"3u geleden",trend:"Trend"},hu:{storm:"VIHAR",rain:"ES\u0150",change:"V\xC1LTOZ\xC9KONY",fair:"SZ\xC9P ID\u0150",very_dry:"NAGYON SZ\xC1RAZ",falling:"S\xDCLLYED",steady:"\xC1LLAND\xD3",rising:"EMELKEDIK",delta_3h:"\u0394 3 \xD3RA",aneroid:"ANEROID BAROM\xC9TER",compensated:"H\u0151m\xE9rs\xE9klet-kompenz\xE1lt",current:"Jelenlegi",history_3h:"3 \xF3r\xE1ja",trend:"Trend"},tr:{storm:"FIRTINA",rain:"YA\u011EMUR",change:"DE\u011E\u0130\u015EKEN",fair:"A\xC7IK",very_dry:"\xC7OK KURU",falling:"D\xDC\u015E\xDC\u015E",steady:"SAB\u0130T",rising:"Y\xDCKSEL\u0130\u015E",delta_3h:"\u0394 3 SAAT",aneroid:"ANERO\u0130T BAROMETRE",compensated:"S\u0131cakl\u0131k Dengelemeli",current:"\u015Eimdiki",history_3h:"3s \xF6nce",trend:"Trend"}};function K(o){if(!o)return"en";if(o==="auto")return"auto";if(o.startsWith("zh"))return o.includes("Hant")?"zh-Hant":"zh-Hans";if(o.startsWith("pt"))return"pt";if(o.startsWith("nb")||o.startsWith("no"))return"nb";const t=o.split("-")[0];return Y[o]?o:Y[t]?t:"en"}function pe(o,t){const i=K(o==="auto"?t||"en":o);return Y[i]||Y.en}function he(o,t){const i=K(o==="auto"?t||"en":o);return te[i]||te.en}function me(o,t){const i=K(o==="auto"?t||"en":o);return ie[i]||ie.en}const X={settled_fine:"sunny",fine_weather:"sunny",fine_becoming_less_settled:"partlycloudy",fairly_fine_showery_later:"partlycloudy",showery_becoming_more_unsettled:"rainy",unsettled_rain_later:"cloudy",rain_at_times_worse_later:"rainy",rain_at_times_becoming_very_unsettled:"pouring",very_unsettled_rain:"pouring",fine_possibly_showers:"partlycloudy",fairly_fine_showers_likely:"partlycloudy",showery_bright_intervals:"rainy",changeable_some_rain:"cloudy",unsettled_rain_at_times:"rainy",rain_at_frequent_intervals:"pouring",stormy_much_rain:"lightning-rainy",becoming_fine:"partlycloudy",fairly_fine_improving:"partlycloudy",fairly_fine_possibly_showers_early:"partlycloudy",showery_early_improving:"rainy",changeable_mending:"cloudy",rather_unsettled_clearing_later:"cloudy",unsettled_probably_improving:"cloudy",unsettled_short_fine_intervals:"cloudy",very_unsettled_finer_at_times:"pouring",stormy_possibly_improving:"lightning-rainy",stable:"partlycloudy"},re={sunny:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
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
  </svg>`},ne={settled_fine:"sunny",fine_weather:"sunny",fine_becoming_less_settled:"partlycloudy",fairly_fine_showery_later:"partlycloudy",showery_becoming_more_unsettled:"rainy",unsettled_rain_later:"cloudy",rain_at_times_worse_later:"rainy",rain_at_times_becoming_very_unsettled:"pouring",very_unsettled_rain:"pouring",fine_possibly_showers:"partlycloudy",fairly_fine_showers_likely:"partlycloudy",showery_bright_intervals:"rainy",changeable_some_rain:"cloudy",unsettled_rain_at_times:"rainy",rain_at_frequent_intervals:"pouring",stormy_much_rain:"lightning-rainy",becoming_fine:"partlycloudy",fairly_fine_improving:"partlycloudy",fairly_fine_possibly_showers_early:"partlycloudy",showery_early_improving:"rainy",changeable_mending:"cloudy",rather_unsettled_clearing_later:"cloudy",unsettled_probably_improving:"cloudy",unsettled_short_fine_intervals:"cloudy",very_unsettled_finer_at_times:"pouring",stormy_possibly_improving:"lightning-rainy",stable:"partlycloudy"};function ae(o,t){return o==="settled_fine"||o==="fine_weather"?t?"night_clear":"sunny":ne[o]||"partlycloudy"}function J(o,t=""){const i=re[o]||re.partlycloudy;if(!t)return i.replace("<svg ",'<svg role="img" ');const a=String(t).replace(/"/g,"&quot;");return i.replace("<svg ",`<svg role="img" aria-label="${a}" `)}const fe={sunny:{bg:"linear-gradient(135deg,#FF8C00 0%,#FFA500 40%,#FFD700 100%)"},night_clear:{bg:"linear-gradient(135deg,#070B14 0%,#0F172A 50%,#1E293B 100%)"},partlycloudy:{bg:"linear-gradient(135deg,#FF8C00 0%,#BBDEFB 50%,#FFFFFF 100%)"},cloudy:{bg:"linear-gradient(135deg,#606C76 0%,#7E8A95 50%,#A2AEB8 100%)"},rainy:{bg:"linear-gradient(135deg,#425363 0%,#54677A 50%,#70879C 100%)"},pouring:{bg:"linear-gradient(135deg,#1C242D 0%,#2B3745 50%,#3F5063 100%)"},"lightning-rainy":{bg:"linear-gradient(135deg,#23153A 0%,#43286B 50%,#6943A3 100%)"},snowy:{bg:"linear-gradient(135deg,#B8C6D4 0%,#DDE5ED 50%,#F4F7FA 100%)"},windy:{bg:"linear-gradient(135deg,#5F9EA0 0%,#87B6B8 50%,#B4D3D4 100%)"}},se={bg:"linear-gradient(135deg,#1565C0 0%,#1976D2 100%)"};function ue(o){return fe[o]||se}function ye(o,t){if(t===void 0||t>=100||typeof t!="number"||isNaN(t))return o;const i=Math.max(0,Math.min(100,t)),a=Math.round(i/100*255).toString(16).padStart(2,"0").toUpperCase();return o.replace(/#([0-9a-fA-F]{6})(?![0-9a-fA-F])/gi,`#$1${a}`)}function we(o,t){return(t[o]||o||"\u2014").split(/[,\s]+/).filter(Boolean).slice(0,2).join(" ")}let ee=0;function oe(o){return o==null?"":["N","NE","E","SE","S","SW","W","NW"][Math.round(o%360/45)%8]}function le(o,t,i){if(o==null)return null;const a=parseFloat(o);if(isNaN(a))return null;const l=(i||"m/s").toLowerCase().replace(" ",""),r=(t||"m/s").toLowerCase().replace(" ","");let s;return l==="km/h"||l==="kmh"?s=a/3.6:l==="mph"?s=a/2.23694:l==="kn"||l==="kt"||l==="knots"?s=a/1.94384:s=a,r==="mph"?`${(s*2.23694).toFixed(1)} mph`:r==="km/h"||r==="kmh"?`${Math.round(s*3.6)} km/h`:r==="kn"||r==="kt"?`${(s*1.94384).toFixed(1)} kn`:`${s.toFixed(1)} m/s`}function be(o,t,i,a={},l={}){const r=o!=null&&!isNaN(o)?o:1013.25,s=t!=null&&!isNaN(t)?t:r,c=i!=null&&!isNaN(i)?i:r-s,u=960,m=1060,x=-120,p=120;function v(e){const n=Math.max(u,Math.min(m,e));return x+(n-u)/(m-u)*(p-x)}function C(e){return Math.max(-4,Math.min(4,e))/4*45}const I=v(r),M=v(s),$=C(c),L=l.showSubdial!==!1,f="vb"+ ++ee,E=200,d=200;let P="",N="";for(let e=960;e<=1060;e+=1){const _=(v(e)-90)*(Math.PI/180),g=e%10===0,k=e%5===0,V=168,O=g?152:k?157:162,j=g?1.6:k?1:.6,H=(E+V*Math.cos(_)).toFixed(1),q=(d+V*Math.sin(_)).toFixed(1),G=(E+O*Math.cos(_)).toFixed(1),U=(d+O*Math.sin(_)).toFixed(1);if(P+=`<line x1="${H}" y1="${q}" x2="${G}" y2="${U}" stroke="#2e200c" stroke-width="${j}" stroke-linecap="round"/>`,g){const Z=(E+138*Math.cos(_)).toFixed(1),Q=(d+138*Math.sin(_)+3.5).toFixed(1);N+=`<text x="${Z}" y="${Q}" font-size="9" font-weight="800" fill="#1c1204">${e}</text>`}}for(let e=720;e<=795;e+=5){const n=e*1.33322;if(n>=u&&n<=m){const g=(v(n)-90)*(Math.PI/180),k=(E+143*Math.cos(g)).toFixed(1),V=(d+143*Math.sin(g)).toFixed(1),O=(E+148*Math.cos(g)).toFixed(1),j=(d+148*Math.sin(g)).toFixed(1);if(P+=`<line x1="${k}" y1="${V}" x2="${O}" y2="${j}" stroke="#7d6739" stroke-width="0.8"/>`,e%10===0){const H=(E+125*Math.cos(g)).toFixed(1),q=(d+125*Math.sin(g)+2.5).toFixed(1);N+=`<text x="${H}" y="${q}" font-size="7" font-weight="700" fill="#5e491c">${e}</text>`}}}const A=a.storm||"STORMY",D=a.rain||"RAIN",R=a.change||"CHANGE",b=a.fair||"FAIR",F=a.very_dry||"VERY DRY",B=a.falling||"FALLING",h=a.steady||"STEADY",y=a.rising||"RISING",S=a.delta_3h||"\u0394 3 HOURS",z=a.aneroid||"ANEROID BAROMETER",w=a.compensated||"Compensated for Temperature";return`<svg role="img" aria-label="${`${z}: ${r.toFixed(1)} hPa, \u03943h ${c>=0?"+":""}${c.toFixed(1)} hPa`}" viewBox="0 0 400 400" class="vintage-dial-svg" xmlns="http://www.w3.org/2000/svg">
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
      <text transform="translate(110, 275) rotate(-45)" font-size="11" letter-spacing="1">${A}</text>
      <text transform="translate(96, 185) rotate(-22)" font-size="11.5" letter-spacing="1.5">${D}</text>
      <text transform="translate(200, 94)" font-size="13" font-weight="900" letter-spacing="2.5" fill="#1f1406">${R}</text>
      <text transform="translate(304, 185) rotate(22)" font-size="11.5" letter-spacing="1.5">${b}</text>
      <text transform="translate(290, 275) rotate(45)" font-size="11" letter-spacing="1">${F}</text>
    </g>

    <!-- Center Inscription -->
    <g text-anchor="middle">
      <text x="200" y="145" font-family="'Cinzel', Georgia, serif" font-size="11" font-weight="bold" fill="#523d1c" letter-spacing="3">${z}</text>
      <path d="M 140 152 Q 200 156 260 152" fill="none" stroke="#7a5d2e" stroke-width="0.8" />
      <text x="200" y="166" font-family="'Playfair Display', Georgia, serif" font-style="italic" font-size="9" fill="#755a2f">${w}</text>
    </g>

    <!-- Sub-Dial: 3h Pressure Trend Indicator -->
    ${L?`
    <g class="v-subdial" transform="translate(200, 260)">
      <circle cx="0" cy="0" r="32" fill="#f4ebd0" stroke="#8a7346" stroke-width="1.2" />
      <circle cx="0" cy="0" r="30" fill="none" stroke="#b09b6c" stroke-width="0.5" stroke-dasharray="1.5 1.5" />
      <text x="-18" y="16" font-family="'Cinzel', Georgia, serif" font-size="6.5" font-weight="bold" fill="#8f2d18" text-anchor="middle">${B}</text>
      <text x="0" y="-19" font-family="'Cinzel', Georgia, serif" font-size="6.5" font-weight="bold" fill="#4d3b20" text-anchor="middle">${h}</text>
      <text x="18" y="16" font-family="'Cinzel', Georgia, serif" font-size="6.5" font-weight="bold" fill="#1b5e20" text-anchor="middle">${y}</text>
      <text x="0" y="11" font-family="sans-serif" font-size="6" fill="#7a6745" text-anchor="middle">${S}</text>
      <line x1="-24" y1="0" x2="-20" y2="0" stroke="#4a391e" stroke-width="0.8"/>
      <line x1="0" y1="-24" x2="0" y2="-20" stroke="#4a391e" stroke-width="0.8"/>
      <line x1="24" y1="0" x2="20" y2="0" stroke="#4a391e" stroke-width="0.8"/>
      <g class="v-needle-trend" style="transform-origin:0px 0px; transform:rotate(${$.toFixed(1)}deg);">
        <path d="M -1.5 6 L -0.6 -22 L 0.6 -22 L 1.5 6 Z" fill="#8f2d18" />
        <circle cx="0" cy="0" r="3" fill="#3a2a11" stroke="#ffd966" stroke-width="0.6"/>
      </g>
    </g>`:""}

    <!-- Scale Ticks & Numbers -->
    <g stroke-linecap="round">${P}</g>
    <g font-family="'Cinzel', Georgia, serif" font-size="8.5" font-weight="700" fill="#2e200c" text-anchor="middle">${N}</g>

    <!-- NEEDLE 1: Reference Marker (3 Hours Ago) - Gold/Brass -->
    <g class="v-needle-ref" style="transform-origin:200px 200px; transform:rotate(${M.toFixed(1)}deg);" filter="url(#${f}_shadow)">
      <path d="M 197 60 L 200 48 L 203 60 L 201 100 L 199 100 Z" fill="url(#${f}_gold)" stroke="#664d12" stroke-width="0.7"/>
      <circle cx="200" cy="54" r="2.2" fill="#ffeaa7"/>
      <circle cx="200" cy="245" r="7" fill="none" stroke="url(#${f}_gold)" stroke-width="1.8"/>
      <line x1="200" y1="200" x2="200" y2="238" stroke="url(#${f}_gold)" stroke-width="1.8"/>
    </g>

    <!-- NEEDLE 2: Main Active Pressure Needle - Blued Steel -->
    <g class="v-needle-main" style="transform-origin:200px 200px; transform:rotate(${I.toFixed(1)}deg);" filter="url(#${f}_shadow)">
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
  </svg>`}function _e(o,t=""){const r=2*Math.PI*44,s=r*.75,c=r-s,u=s*(o/100),m=r-u,x=-225,p=o<30?"#90CAF9":o<60?"#42A5F5":"#1565C0",v="pw"+ ++ee;return`<svg role="img" aria-label="${t?`${t}: ${o}%`:`Precipitation: ${o}%`}" viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
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
      stroke-dasharray="${u.toFixed(2)} ${m.toFixed(2)}"
      stroke-linecap="round" transform="rotate(${x} 60 60)"
      style="transition:stroke-dasharray .9s ease"/>
    <text x="60" y="60" text-anchor="middle" dominant-baseline="central"
      fill="white" font-size="22" font-weight="900"
      font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">${o}%</text>
  </svg>`}function ce(o,t,i){if(!o||o.length===0)return'<div class="tl-empty">\u2014 no trend data yet \u2014</div>';const a=i?28:34;function l(s){return`${String(s.getHours()).padStart(2,"0")}:${String(s.getMinutes()).padStart(2,"0")}`}return`<div class="tl-inner">${o.map((s,c)=>{const u=c===o.length-1,m=ne[s.state]||"partlycloudy",x=t[s.state]||s.state||"\u2014",p=x.split(/[,\s]+/)[0],v=l(s.t),C=s.isCurrent||u?" tl-current":"",I=J(m,`${v}: ${x}`);return`
      <div class="tl-step${C}">
        <div class="tl-icon" style="width:${a}px;height:${a}px">${I}</div>
        <div class="tl-lbl">${p}</div>
        <div class="tl-time">${v}</div>
      </div>
      ${u?"":'<div class="tl-arrow">\u203A</div>'}`}).join("")}</div>`}function de(o,t,i){if(!o||o.length<2)return'<div class="hchart-empty">\u2014 no history data yet \u2014</div>';const a=560,l=i?150:200,r={top:22,right:16,bottom:38,left:56},s=a-r.left-r.right,c=l-r.top-r.bottom,u=i?11:13,m="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",x="hc"+ ++ee;let p=o.filter(e=>e.p!=null),v=o.filter(e=>e.precip!=null);if(p.length>=4){const e=[...p].map(k=>k.p).sort((k,V)=>k-V),n=e[Math.floor(e.length*.25)],_=e[Math.floor(e.length*.75)],g=_-n;p=p.filter(k=>k.p>=n-3*g&&k.p<=_+3*g)}let C=980,I=1040;if(p.length){const e=p.map(k=>k.p),n=Math.min(...e),_=Math.max(...e),g=Math.max(2,(_-n)*.15);C=Math.floor(n-g),I=Math.ceil(_+g)}const M=o[0].t.getTime(),$=o[o.length-1].t.getTime(),L=$-M||1;function f(e){return r.left+(e.getTime()-M)/L*s}function E(e){return r.top+(1-(e-C)/(I-C))*c}function d(e){return r.top+(1-e/100)*c}function P(e,n){return e.length?e.map((_,g)=>`${g===0?"M":"L"}${f(_.t).toFixed(1)},${n(g===0?e[0][n===E?"p":"precip"]:_[n===E?"p":"precip"]).toFixed(1)}`).join(" "):""}const N=p.map((e,n)=>`${n===0?"M":"L"}${f(e.t).toFixed(1)},${E(e.p).toFixed(1)}`).join(" "),A=v.map((e,n)=>`${n===0?"M":"L"}${f(e.t).toFixed(1)},${d(e.precip).toFixed(1)}`).join(" "),D=p.length?N+` L${f(p[p.length-1].t).toFixed(1)},${(r.top+c).toFixed(1)} L${f(p[0].t).toFixed(1)},${(r.top+c).toFixed(1)} Z`:"",R=i?3:4,b=Math.ceil((I-C)/(R-1)/5)*5,F=[];for(let e=Math.ceil(C/5)*5;e<=I;e+=b)F.push(e);const B=[0,25,50,75,100],h=[];{const e=new Date(M);e.setMinutes(0,0,0),e.setHours(e.getHours()+1);const n=new Date(e);for(;n.getTime()<=$;)n.getHours()%6===0&&h.push({t:new Date(n),label:`${String(n.getHours()).padStart(2,"0")}:00`}),n.setHours(n.getHours()+1)}const y=f(new Date($));let S="";if(p.length){const e=p[p.length-1],n=f(e.t),_=E(e.p);S=`
      <circle cx="${n.toFixed(1)}" cy="${_.toFixed(1)}" r="5" fill="#90CAF9" stroke="#fff" stroke-width="1.5"/>
      <text x="${(n-8).toFixed(1)}" y="${(_+14).toFixed(1)}" text-anchor="middle"
        fill="#90CAF9" font-size="${u+2}" font-weight="800"
        font-family="${m}">${e.p.toFixed(1)}</text>`}let z="";if(v.length){const e=v[v.length-1],n=f(e.t),_=d(e.precip);z=`
      <circle cx="${n.toFixed(1)}" cy="${_.toFixed(1)}" r="4.5" fill="rgba(255,255,255,0.90)" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
      <text x="${(n-8).toFixed(1)}" y="${(_-10).toFixed(1)}" text-anchor="middle"
        fill="rgba(255,255,255,0.85)" font-size="${u+1}" font-weight="700"
        font-family="${m}">${e.precip.toFixed(0)}%</text>`}const w=v.length?A+` L${f(v[v.length-1].t).toFixed(1)},${(r.top+c).toFixed(1)} L${f(v[0].t).toFixed(1)},${(r.top+c).toFixed(1)} Z`:"";let T="24-hour pressure and precipitation chart";if(p.length){const e=p.map(n=>n.p);T=`24-hour pressure and precipitation chart: pressure from ${Math.min(...e).toFixed(1)} to ${Math.max(...e).toFixed(1)} hPa`}return`<svg role="img" aria-label="${T}" viewBox="0 0 ${a} ${l}" class="history-chart-svg" xmlns="http://www.w3.org/2000/svg"
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
        <rect x="${r.left}" y="${r.top}" width="${s}" height="${c}"/>
      </clipPath>
    </defs>

    <!-- Horizontal grid lines (pressure ticks) -->
    ${F.map(e=>{const n=E(e).toFixed(1);return`<line x1="${r.left}" y1="${n}" x2="${r.left+s}" y2="${n}"
        stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-dasharray="4 5"/>`}).join("")}
    <!-- Vertical grid lines (time ticks) -->
    ${h.map(({t:e})=>{const n=f(e).toFixed(1);return`<line x1="${n}" y1="${r.top}" x2="${n}" y2="${r.top+c}"
        stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="2 5"/>`}).join("")}

    <g clip-path="url(#${x}_clip)">
      <!-- Precip area fill -->
      ${w?`<path d="${w}" fill="url(#${x}_pr)"/>`:""}
      <!-- Precip line: dashed white, visible on any background -->
      ${A?`<path d="${A}" fill="none" stroke="rgba(255,255,255,0.72)"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        stroke-dasharray="5 4"/>`:""}
      <!-- Pressure area fill -->
      ${D?`<path d="${D}" fill="url(#${x}_p)"/>`:""}
      <!-- Pressure line: solid, on top -->
      ${N?`<path d="${N}" fill="none" stroke="#90CAF9"
        stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>`:""}
      ${S}
      ${z}
    </g>

    <!-- Left Y-axis labels (pressure) -->
    ${F.map(e=>{const n=E(e);return n<r.top-4||n>r.top+c+4?"":`<text x="${r.left-7}" y="${n.toFixed(1)}" text-anchor="end"
        dominant-baseline="middle" fill="rgba(255,255,255,0.70)"
        font-size="${u}" font-family="${m}">${e}</text>`}).join("")}

    <!-- Right Y-axis labels (precip %) \u2014 positioned inside right edge -->
    ${B.map(e=>{const n=d(e);return n<r.top-4||n>r.top+c+4?"":`<text x="${(r.left+s-2).toFixed(1)}" y="${n.toFixed(1)}" text-anchor="end"
        dominant-baseline="middle" fill="rgba(255,255,255,0.45)"
        font-size="${u-2}" font-family="${m}">${e}%</text>`}).join("")}

    <!-- X-axis time labels -->
    ${h.map(({t:e,label:n})=>{const _=f(e);return _<r.left+6||_>r.left+s-6?"":`<text x="${_.toFixed(1)}" y="${(r.top+c+15).toFixed(1)}" text-anchor="middle"
        fill="rgba(255,255,255,0.55)" font-size="${u}"
        font-family="${m}">${n}</text>`}).join("")}

    <!-- Axis borders -->
    <line x1="${r.left}" y1="${r.top}" x2="${r.left}" y2="${r.top+c}"
      stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
    <line x1="${r.left}" y1="${r.top+c}" x2="${r.left+s}" y2="${r.top+c}"
      stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>

    <!-- Legend -->
    <circle cx="${r.left+7}" cy="${r.top-7}" r="4" fill="#90CAF9"/>
    <text x="${r.left+15}" y="${r.top-4}" fill="rgba(255,255,255,0.70)"
      font-size="${u}" font-family="${m}" dominant-baseline="middle">hPa</text>
    <circle cx="${r.left+52}" cy="${r.top-7}" r="4" fill="rgba(255,255,255,0.80)"/>
    <text x="${r.left+60}" y="${r.top-4}" fill="rgba(255,255,255,0.60)"
      font-size="${u}" font-family="${m}" dominant-baseline="middle">precip %</text>

    <!-- Interactive Scrub Cursor & Tooltip -->
    <g class="hchart-scrub-cursor" style="opacity:0; pointer-events:none; transition:opacity 0.15s ease-out;">
      <line class="hchart-scrub-line" x1="${r.left}" y1="${r.top}" x2="${r.left}" y2="${r.top+c}" stroke="#FFD54F" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle class="hchart-scrub-dot-halo" cx="${r.left}" cy="${r.top}" r="8" fill="rgba(255,213,79,0.3)"/>
      <circle class="hchart-scrub-dot" cx="${r.left}" cy="${r.top}" r="4.5" fill="#FFD54F" stroke="#ffffff" stroke-width="1.5"/>
      <g class="hchart-scrub-tip" transform="translate(${r.left+40}, ${r.top+10})">
        <rect x="-38" y="-11" width="76" height="22" rx="6" fill="#0f172a" stroke="#FFD54F" stroke-width="1" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"/>
        <text class="hchart-scrub-tip-txt" x="0" y="3.5" fill="#ffffff" font-size="${u+1}" font-weight="700" text-anchor="middle" font-family="${m}">1014.2 hPa</text>
      </g>
    </g>
  </svg>`}function ge(o,t){if(o==null)return null;const i=typeof o=="number"?o:parseFloat(o);if(isNaN(i))return null;switch((t||"hpa").trim().toLowerCase()){case"hpa":case"mbar":return i;case"mmhg":return i*1.33322387415;case"inhg":return i*33.863886666667;case"psi":return i*68.947572932;case"pa":return i/100;case"kpa":return i*10;case"bar":return i*1e3;default:return i}}class ve extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config={},this._historyPoints=null,this._historyFetching=!1}static async getConfigElement(){return await import(new URL("./zambretti-weather-card-editor.js",import.meta.url).href),document.createElement("zambretti-weather-card-editor")}static getStubConfig(t){let i="sensor.zambretti_forecast",a="sensor.sager_forecast",l="sensor.zambretti_forecast_6h",r="sensor.zambretti_forecast_12h",s="sensor.zambretti_forecast_24h",c="sensor.precipitation_probability";if(t&&t.states){const u=Object.keys(t.states),m=x=>u.find(p=>p.includes(x));i=m("zambretti_forecast")||m("zambretti")||i,a=m("sager_forecast")||m("sager")||a,l=m("zambretti_forecast_6h")||m("forecast_6h")||l,r=m("zambretti_forecast_12h")||m("forecast_12h")||r,s=m("zambretti_forecast_24h")||m("forecast_24h")||s,c=m("precip_probability")||m("precipitation_probability")||c}return{entity_zambretti:i,entity_sager:a,entity_6h:l,entity_12h:r,entity_24h:s,entity_precip:c,entity_wind_speed:"",card_style:"modern",show_wind:!0,show_sager:!0,show_precip:!0,show_forecasts:!0,show_trend:!1,show_history:!1,language:"auto",wind_unit:"m/s",compact:!1,auto_theme:!0,theme_alpha:100}}setConfig(t){this._rendered=!1,this._entitiesResolved=!1,(t.show_history!==this._config.show_history||t.show_trend!==this._config.show_trend)&&(this._historyPoints=null,this._timelineSteps=null),this._config={entity_zambretti:"sensor.zambretti_forecast",entity_sager:"sensor.sager_forecast",entity_6h:"sensor.zambretti_forecast_6h",entity_12h:"sensor.zambretti_forecast_12h",entity_24h:"sensor.zambretti_forecast_24h",entity_precip:"sensor.precipitation_probability",entity_wind_speed:"",show_wind:!0,show_trend:!1,show_history:!1,language:"auto",wind_unit:"m/s",compact:!1,show_sager:!0,show_precip:!0,show_forecasts:!0,auto_theme:!0,theme_alpha:t.theme_alpha??100,custom_bg:"linear-gradient(135deg,#1565C0 0%,#1976D2 100%)",...t}}_resolveEntities(t){const i=t?.states||{},a={};let l=this._config.entity_zambretti;(!l||!i[l])&&(l=Object.keys(i).find(c=>{if(!c.startsWith("sensor."))return!1;const u=c.slice(7);return u==="zambretti_forecast"||u.endsWith("_zambretti_forecast")||u.endsWith("_zambretti")})),l&&(a.entity_zambretti=l);let r="";l&&(l.endsWith("_zambretti_forecast")?r=l.slice(0,-18):l.endsWith("_zambretti")?r=l.slice(0,-9):(l==="sensor.zambretti_forecast"||l==="sensor.zambretti")&&(r="sensor."));const s={entity_sager:["sager_forecast","sager"],entity_6h:["zambretti_forecast_6h","forecast_6h"],entity_12h:["zambretti_forecast_12h","forecast_12h"],entity_24h:["zambretti_forecast_24h","forecast_24h"],entity_precip:["precipitation_probability","precip_probability"],entity_pressure:["pressure","barometric_pressure"]};for(const[c,u]of Object.entries(s)){const m=this._config[c];if(m&&i[m]&&(!r||m.startsWith(r))){a[c]=m;continue}let x=null;if(r)for(const p of u){const v=`${r}${p}`;if(i[v]){x=v;break}}x||(x=Object.keys(i).find(p=>{if(!p.startsWith("sensor."))return!1;const v=p.slice(7);return u.some(C=>v===C||v.endsWith(`_${C}`))})),x&&(a[c]=x)}return a}set hass(t){const i=this._hass;if(this._hass=t,!this._entitiesResolved){const c=this._resolveEntities(t);Object.keys(c).length>0&&(this._config={...this._config,...c}),this._entitiesResolved=!0}const a=this._config.entity_zambretti,l=i?.states?.[a]?.state,r=t?.states?.[a]?.state,s=(l==="unavailable"||l==="unknown"||!l)&&r&&r!=="unavailable"&&r!=="unknown";(this._config.show_history||this._config.show_trend)&&this._scheduleHistoryFetch(s),this._rendered?this._patch():this._render()}_scheduleHistoryFetch(t=!1){if(this._historyFetching)return;const i=this._config;if(!i.show_history&&!i.show_trend)return;if(typeof document<"u"&&document.hidden){this._historyFetchPending=!0;return}const a=Date.now(),r=Array.isArray(this._historyPoints)&&this._historyPoints.length>=2||Array.isArray(this._timelineSteps)&&this._timelineSteps.length>0?300*1e3:15*1e3;!t&&this._historyFetchedAt&&a-this._historyFetchedAt<r||(this._historyFetching=!0,this._doFetchHistory().then(()=>{this._historyFetching=!1,this._historyFetchedAt=Date.now(),this._rendered&&(typeof document>"u"||!document.hidden)&&(this._config.show_history&&this._patchChart(),this._config.show_trend&&this._patchTimeline())}).catch(()=>{this._historyFetching=!1}))}async _doFetchHistory(){if(!this._hass)return;const t=this._config,i=new Date,a=t.entity_zambretti,l=t.entity_precip,r=this._attr(a,"pressure_sensor",null)||t.entity_pressure||null;if(!a&&!l&&!r)return;const s=t.show_history!==!1&&!!t.show_history,c=t.show_trend!==!1&&!!t.show_trend;if(!s&&!c)return;const u=c||!r&&s,m=s&&t.show_precip!==!1&&!!l,x=s&&!!r;if(!u&&!m&&!x)return;const p=new Date(i.getTime()-1440*60*1e3),v=new Date(i.getTime()-2880*60*1e3);try{let $=function(e){return Math.round(e.getTime()/(300*1e3))},L=function(e){return e.lu!=null?new Date(e.lu*1e3):e.last_updated?new Date(e.last_updated):new Date},f=function(e){return e.state??e.s??null},E=function(e){return e.attributes??e.a??{}};const[C,I,M]=await Promise.all([u&&a?this._hass.callWS({type:"history/history_during_period",start_time:v.toISOString(),end_time:i.toISOString(),entity_ids:[a],minimal_response:!1,no_attributes:!1,significant_changes_only:!1}):Promise.resolve({}),m&&l?this._hass.callWS({type:"history/history_during_period",start_time:p.toISOString(),end_time:i.toISOString(),entity_ids:[l],minimal_response:!0,no_attributes:!0,significant_changes_only:!1}):Promise.resolve({}),x&&r?this._hass.callWS({type:"history/history_during_period",start_time:p.toISOString(),end_time:i.toISOString(),entity_ids:[r],minimal_response:!0,no_attributes:!0,significant_changes_only:!1}):Promise.resolve({})]),d=new Map,P=C[a]||[],N=p.getTime(),A=this._attr(a,"pressure_hpa",null),D=A!=null&&!isNaN(parseFloat(A))?parseFloat(A):NaN;if(r){const e=M[r]||[],n=this._attr(r,"unit_of_measurement","hPa"),_=this._state(r),g=ge(_,n);let k=0;!isNaN(D)&&g!=null&&!isNaN(g)&&(k=D-g);for(const O of e){const j=L(O);if(j.getTime()<N)continue;const H=$(j),q=f(O),G=ge(q,n);d.has(H)||d.set(H,{t:j,p:null,precip:null}),G!=null&&!isNaN(G)&&(d.get(H).p=G+k)}const V=isNaN(D)?g!=null?g+k:null:D;if(V!=null&&!isNaN(V)){const O=$(i);d.has(O)||d.set(O,{t:i,p:null,precip:null}),d.get(O).p=V}}else{for(const e of P){const n=L(e);if(n.getTime()<N)continue;const _=$(n),g=E(e),k=parseFloat(g.pressure_hpa);d.has(_)||d.set(_,{t:n,p:null,precip:null}),isNaN(k)||(d.get(_).p=k)}if(!isNaN(D)){const e=$(i);d.has(e)||d.set(e,{t:i,p:null,precip:null}),d.get(e).p=D}}let R=[...d.keys()].sort((e,n)=>e-n),b=null;for(const e of R){const n=d.get(e);n.p!=null?b=n.p:b!=null&&(n.p=b)}let F=null;for(const e of R)if(d.get(e).p!=null){F=d.get(e).p;break}if(F!=null)for(const e of R){const n=d.get(e);if(n.p!=null)break;n.p=F}const h=(I[l]||[]).map(e=>({t:L(e),v:parseFloat(f(e))})).filter(e=>!isNaN(e.v)).sort((e,n)=>e.t-n.t),y=parseFloat(this._hass?.states?.[l]?.state);if(!isNaN(y)){const e=$(i);d.has(e)||d.set(e,{t:i,p:null,precip:null}),d.get(e).precip=y,h.push({t:i,v:y}),h.sort((n,_)=>n.t-_.t)}if(h.length){for(const{t:_,v:g}of h){if(_.getTime()<N)continue;const k=$(_);d.has(k)||d.set(k,{t:_,p:null,precip:null}),d.get(k).precip=g}R.length=0,R.push(...[...d.keys()].sort((_,g)=>_-g)),b=null;for(const _ of R){const g=d.get(_);g.p!=null?b=g.p:b!=null&&(g.p=b)}if(F!=null)for(const _ of R){const g=d.get(_);if(g.p!=null)break;g.p=F}let e=0,n=h[0].v;for(const _ of R){const g=d.get(_).t.getTime();for(;e+1<h.length&&h[e+1].t.getTime()<=g;)e++;h[e].t.getTime()<=g&&(n=h[e].v),d.get(_).precip==null&&(d.get(_).precip=n)}}this._historyPoints=R.map(e=>d.get(e));const S=P.map(e=>({t:L(e),state:f(e)})).filter(e=>e.state&&e.state!=="unknown"&&e.state!=="unavailable").sort((e,n)=>e.t-n.t),z=[];for(const e of S){const n=z[z.length-1];if(!(n&&n.state===e.state)){if(n&&e.t.getTime()-n.t.getTime()<1800*1e3){n.state=e.state,n.t=e.t;continue}z.push({t:e.t,state:e.state})}}const w=z.slice(-7),T=this._hass.states[a]?.state;if(T&&T!=="unknown"&&T!=="unavailable"){const e=w[w.length-1];!e||e.state!==T?w.push({t:new Date,state:T,isCurrent:!0}):(e.isCurrent=!0,e.t=new Date)}this._timelineSteps=w}catch{this._historyPoints=[],this._timelineSteps=[]}}_patchChart(){const t=this.shadowRoot?.querySelector(".history-chart-wrap");if(!t){this._rendered=!1,this._render();return}const i=!!this._config.compact;t.style.height=`${i?150:200}px`;const a=this._labels();t.innerHTML=de(this._historyPoints,a,i),this._setupHistoryScrubbing()}_setupHistoryScrubbing(){const t=this.shadowRoot?.querySelector(".history-chart-svg");if(!t||!Array.isArray(this._historyPoints)||this._historyPoints.length<2)return;let i=this._historyPoints.filter(h=>h.p!=null);if(i.length<2)return;const a=this._historyPoints.filter(h=>h.precip!=null),l=this.shadowRoot?.querySelector(".history-title"),r='<svg aria-hidden="true" viewBox="0 0 16 16" width="12" height="12" style="vertical-align:-1px;margin-right:4px;opacity:0.7"><polyline points="1,12 5,6 8,9 11,4 15,7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>24h',s=t.querySelector(".hchart-scrub-cursor"),c=t.querySelector(".hchart-scrub-line"),u=t.querySelector(".hchart-scrub-dot"),m=t.querySelector(".hchart-scrub-dot-halo"),x=t.querySelector(".hchart-scrub-tip"),p=t.querySelector(".hchart-scrub-tip-txt");if(!s||!c||!u||!x)return;if(i.length>=4){const h=[...i].map(w=>w.p).sort((w,T)=>w-T),y=h[Math.floor(h.length*.25)],S=h[Math.floor(h.length*.75)],z=S-y;i=i.filter(w=>w.p>=y-3*z&&w.p<=S+3*z)}if(i.length<2)return;const v=!!this._config.compact,C=560,I=v?150:200,M={top:22,right:16,bottom:38,left:56},$=C-M.left-M.right,L=I-M.top-M.bottom,f=i.map(h=>h.p),E=Math.min(...f),d=Math.max(...f),P=Math.max(2,(d-E)*.15),N=Math.floor(E-P),A=Math.ceil(d+P),D=this._historyPoints[0].t.getTime(),R=this._historyPoints[this._historyPoints.length-1].t.getTime(),b=Math.max(R-D,1),F=h=>{const y=t.getBoundingClientRect(),S=h.touches?h.touches[0].clientX:h.clientX,w=Math.max(0,Math.min(1,(S-y.left)/y.width))*C,T=Math.max(M.left,Math.min(M.left+$,w)),e=D+(T-M.left)/$*b;let n=i[0],_=1/0;for(const U of i){const W=Math.abs(U.t.getTime()-e);W<_&&(_=W,n=U)}const g=M.top+(1-(n.p-N)/(A-N))*L,k=M.left+(n.t.getTime()-D)/b*$;s.style.opacity="1",c.setAttribute("x1",k.toFixed(1)),c.setAttribute("x2",k.toFixed(1)),u.setAttribute("cx",k.toFixed(1)),u.setAttribute("cy",g.toFixed(1)),m&&(m.setAttribute("cx",k.toFixed(1)),m.setAttribute("cy",g.toFixed(1)));const V=Math.max(M.left+40,Math.min(M.left+$-40,k)),O=Math.max(M.top+10,g-18);x.setAttribute("transform",`translate(${V.toFixed(1)}, ${O.toFixed(1)})`),p&&(p.textContent=`${n.p.toFixed(1)} hPa`);const H=((new Date().getTime()-n.t.getTime())/(3600*1e3)).toFixed(1),q=n.t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});let G="";if(a.length){let U=a[0],W=1/0;for(const Z of a){const Q=Math.abs(Z.t.getTime()-e);Q<W&&(W=Q,U=Z)}U&&U.precip>0&&(G=` \xB7 \u{1F4A7} ${U.precip.toFixed(0)}%`)}l&&(l.innerHTML=`<span style="color:#FFD54F">\u23F1 ${q} (-${H}h): <b>${n.p.toFixed(1)} hPa</b>${G}</span>`)},B=()=>{s.style.opacity="0",l&&(l.innerHTML=r)};t.onmousemove=F,t.onmouseleave=B,t.ontouchmove=h=>{h.preventDefault(),F(h)},t.ontouchend=B}_patchTimeline(){const t=this.shadowRoot?.querySelector(".trend-timeline-wrap");if(!t){this._rendered=!1,this._render();return}const i=this._labels();t.innerHTML=ce(this._timelineSteps,i,!!this._config.compact)}connectedCallback(){this._bgHandler=t=>{if(this._config&&this._config.auto_theme===!1){this._config={...this._config,custom_bg:t.detail.bg};const i=this.shadowRoot.querySelector("ha-card");i&&(i.style.background=t.detail.bg)}},window.addEventListener("zambretti-bg-preview",this._bgHandler),this._visibilityHandler=()=>{typeof document<"u"&&!document.hidden&&this._historyFetchPending&&(this._historyFetchPending=!1,this._scheduleHistoryFetch())},typeof document<"u"&&document.addEventListener("visibilitychange",this._visibilityHandler)}disconnectedCallback(){window.removeEventListener("zambretti-bg-preview",this._bgHandler),this._visibilityHandler&&typeof document<"u"&&document.removeEventListener("visibilitychange",this._visibilityHandler)}_state(t){return this._hass?.states?.[t]?.state??null}_attr(t,i,a){return this._hass?.states?.[t]?.attributes?.[i]??a}_labels(){return pe(this._config.language||"auto",this._hass?.language||"en")}_vintageLabels(){return me(this._config.language||"auto",this._hass?.language||"en")}_precipLabel(){return he(this._config.language||"auto",this._hass?.language||"en")}_computeThemeBg(t,i){const a=this._config;if(i&&!a.custom_bg)return"radial-gradient(circle at 50% 25%, #2d1f14 0%, #19110a 55%, #0d0805 100%)";const l=a.auto_theme!==!1,r=l?ue(t).bg:a.custom_bg||se.bg;return l?ye(r,a.theme_alpha):r}_render(){if(!this._hass)return;const t=this._config,i=this._labels(),a=!!t.compact,l=t.card_style==="vintage",r=t.card_style==="tile",s=this._state(t.entity_zambretti),c=this._state(t.entity_sager),u=this._state(t.entity_6h),m=this._state(t.entity_12h),x=this._state(t.entity_24h),p=Math.max(0,Math.min(100,parseInt(this._state(t.entity_precip)||"0",10)||0)),v=this._attr(t.entity_zambretti,"is_night",!1),C=ae(s,v),I=v&&(s==="settled_fine"||s==="fine_weather")?"night_clear":X[s]||"partlycloudy",M=t.show_wind!==!1;let $="";if(M){const y=t.entity_wind_speed||t.entity_zambretti,S=t.entity_wind_speed?this._state(t.entity_wind_speed):this._attr(t.entity_zambretti,"wind_speed",null),z=this._attr(y,"unit_of_measurement","m/s"),w=this._attr(t.entity_zambretti,"wind_degrees",null),T=this._attr(t.entity_zambretti,"wind_direction",null)||oe(w),e=le(S,t.wind_unit||"m/s",z);$=e?T?`${T} ${e}`:e:T||""}const f={bg:this._computeThemeBg(I,l)},E=i[s]||s||"\u2014",d=i[c]||c||"\u2014",P=J(C,E),N=this._precipLabel(),A=t.show_precip!==!1,D=t.show_forecasts!==!1,R=t.show_sager!==!1,b=!!t.show_history,F=!!t.show_trend,B=[{label:"6h",key:u},{label:"12h",key:m},{label:"24h",key:x}].map(y=>{const S=i[y.key]||y.key||"\u2014",z=J(X[y.key]||"partlycloudy",`${y.label}: ${S}`);return`
      <div class="fc">
        <span class="fc-time">${y.label}</span>
        <span class="fc-icon">${z}</span>
        <span class="fc-lbl">${S}</span>
      </div>`}).join("");let h="";if(r){const y=this._attr(t.entity_zambretti,"pressure_hpa",null)??this._state(t.entity_pressure),S=y!=null?parseFloat(y):1013.2,z=this._attr(t.entity_zambretti,"pressure_delta_3h",null),w=z!=null?parseFloat(z):0,T=this._attr(t.entity_zambretti,"trend","\u2192 Steady"),e=w>=1.4?"#4ade80":w<=-1.4?"#f87171":"#facc15",n=w>=1.4?"#86efac":w<=-1.4?"#fca5a5":"#fef08a";h=`
        <div class="tile-container">
          <div class="tile-header-wrap">
            <div class="tile-icon-box">${P}</div>
            <div class="tile-text-group">
              <div class="tile-title">${E}</div>
              ${R?`<div class="tile-subtitle">${d}</div>`:""}
            </div>
            <div class="tile-trend-pill">
              <span class="tile-trend-dot" style="background:${e}"></span>
              <span class="tile-trend-text" style="color:${n}">${T}</span>
            </div>
          </div>
          <div class="tile-bottom-chips">
            <div class="tile-chips-left">
              ${A?`<span class="tile-chip tile-chip-precip">\u{1F4A7} ${p}%</span>`:""}
              ${M&&$?`<span class="tile-chip tile-chip-wind">\u{1F4A8} ${$}</span>`:""}
            </div>
            <span class="tile-chip tile-chip-pressure">\u23F1 ${S!=null&&!isNaN(S)?S.toFixed(1):"\u2014"} hPa</span>
          </div>
        </div>
      `}else if(l){const y=this._vintageLabels(),S=this._attr(t.entity_zambretti,"pressure_hpa",null)??this._state(t.entity_pressure),z=S!=null?parseFloat(S):1013.2,w=this._attr(t.entity_zambretti,"pressure_3h_ago",null),T=this._attr(t.entity_zambretti,"pressure_delta_3h",null),e=T!=null?parseFloat(T):0,n=w!=null?parseFloat(w):z-e,_=this._attr(t.entity_zambretti,"trend","\u2192 Steady"),g=be(z,n,e,y,{showSubdial:t.show_subdial!==!1,compact:a}),k=e>=1.4?"#86efac":e<=-1.4?"#fca5a5":"#fef08a";h=`
        <div class="vintage-container">
          <div class="vintage-dial-wrap">${g}</div>
          <div class="vintage-readout">
            <div class="vintage-main-bar">
              <div class="vintage-forecast-title">${E}</div>
              ${R?`<div class="vintage-sager-sub"><span class="vintage-badge">Sager</span> <span>${d}</span></div>`:""}
            </div>
            <div class="vintage-metrics-grid">
              <div class="vintage-metric-box">
                <div class="vintage-metric-lbl">${y.current||"Current"}</div>
                <div class="vintage-metric-val v-p-hpa">${z!=null&&!isNaN(z)?z.toFixed(1):"\u2014"} <span style="font-size:0.75em;font-weight:400;color:#d4af37">hPa</span></div>
                <div class="vintage-metric-sub v-p-mm">${z!=null&&!isNaN(z)?(z*.750062).toFixed(1)+" mmHg":""}</div>
              </div>
              <div class="vintage-metric-box">
                <div class="vintage-metric-lbl">${y.trend||"Trend"} (3h)</div>
                <div class="vintage-metric-val v-trend-delta" style="color:${k}">${e!=null&&!isNaN(e)?(e>=0?"+":"")+e.toFixed(1)+" hPa":"\u2014"}</div>
                <div class="vintage-metric-sub v-trend-lbl">${_}</div>
              </div>
            </div>
          </div>
        </div>
        ${D?`<div class="cell forecast-row" style="border-top:1px solid rgba(212,175,55,0.20)">${B}</div>`:""}
        <div class="footer" style="border-top:1px solid rgba(212,175,55,0.20)">
          ${$?`<span class="footer-wind">\u{1F4A8} ${$}</span>`:""}
          ${A?`<span class="footer-precip">\u{1F4A7} ${N}: ${p}%</span>`:""}
        </div>
      `}else h=`
        <div class="grid" style="grid-template-columns:${A?"1fr 1fr":"1fr"}">
          <div class="cell main-cell">
            <div class="main-icon">${P}</div>
            <div class="main-info">
              <div class="main-label">${E}</div>
              <div class="main-sub">Zambretti</div>
            </div>
          </div>
          ${A?`
          <div class="cell precip-cell">
            <div class="precip-title">${N}</div>
            <div class="precip-widget">${_e(p,N)}</div>
          </div>`:""}
          ${D?`
          <div class="cell forecast-row">${B}</div>`:""}
        </div>
        <div class="footer">
          ${$?`<span class="footer-wind">\u{1F4A8} ${$}</span>`:""}
          ${R?`
          <span class="footer-badge">Sager</span>
          <span class="footer-text">${d}</span>`:""}
        </div>
      `;this.shadowRoot.innerHTML=`
      <style>${this._css(f,a,A,l,r)}</style>
      <ha-card style="background:${f.bg}">
        ${h}
        ${F?`
        <div class="trend-section">
          <div class="trend-title"><svg aria-hidden="true" viewBox="0 0 16 16" width="12" height="12" style="vertical-align:-1px;margin-right:4px;opacity:0.7"><circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="8" y1="4" x2="8" y2="8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="8" y1="8.5" x2="11" y2="10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>Trend</div>
          <div class="trend-timeline-wrap">${ce(this._timelineSteps,i,a)}</div>
        </div>`:""}
        ${b?`
        <div class="history-section">
          <div class="history-title"><svg aria-hidden="true" viewBox="0 0 16 16" width="12" height="12" style="vertical-align:-1px;margin-right:4px;opacity:0.7"><polyline points="1,12 5,6 8,9 11,4 15,7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>24h</div>
          <div class="history-chart-wrap" style="height:${a?150:200}px">${de(this._historyPoints,i,a)}</div>
        </div>`:""}
      </ha-card>`,b&&this._setupHistoryScrubbing(),this._lastIconKey=C,this._lastThemeBg=f.bg,this._lastPrecip=p,this._lastStyle=t.card_style,this._rendered=!0}_patch(){if(!this._hass||!this._rendered)return;const t=this._config,i=this._labels(),a=this.shadowRoot,l=t.card_style==="vintage",r=t.card_style==="tile",s=this._state(t.entity_zambretti),c=this._state(t.entity_sager),u=this._state(t.entity_6h),m=this._state(t.entity_12h),x=this._state(t.entity_24h),p=Math.max(0,Math.min(100,parseInt(this._state(t.entity_precip)||"0",10)||0)),v=this._attr(t.entity_zambretti,"is_night",!1),C=ae(s,v),I=v&&(s==="settled_fine"||s==="fine_weather")?"night_clear":X[s]||"partlycloudy",M=this._computeThemeBg(I,l);if(C!==this._lastIconKey||M!==this._lastThemeBg||t.card_style!==this._lastStyle){this._rendered=!1,this._render();return}const $=i[s]||s||"\u2014",L=i[c]||c||"\u2014",f=a.querySelector(".main-label");f&&f.textContent!==$&&(f.textContent=$);const E=a.querySelector(".main-icon svg, .tile-icon-box svg");E&&E.getAttribute("aria-label")!==$&&E.setAttribute("aria-label",$);const d=a.querySelector(".footer-text");d&&d.textContent!==L&&(d.textContent=L);const P=t.show_wind!==!1;let N="";if(P){const b=t.entity_wind_speed||t.entity_zambretti,F=t.entity_wind_speed?this._state(t.entity_wind_speed):this._attr(t.entity_zambretti,"wind_speed",null),B=this._attr(b,"unit_of_measurement","m/s"),h=this._attr(t.entity_zambretti,"wind_degrees",null),y=this._attr(t.entity_zambretti,"wind_direction",null)||oe(h),S=le(F,t.wind_unit||"m/s",B);N=S?y?`${y} ${S}`:S:y||""}const A=a.querySelector(".footer-wind");if(A){const b=N?`\u{1F4A8} ${N}`:"";A.textContent!==b&&(A.textContent=b),A.style.display=P?"":"none"}if(r){const b=this._attr(t.entity_zambretti,"pressure_hpa",null)??this._state(t.entity_pressure),F=b!=null?parseFloat(b):1013.2,B=this._attr(t.entity_zambretti,"pressure_delta_3h",null),h=B!=null?parseFloat(B):0,y=this._attr(t.entity_zambretti,"trend","\u2192 Steady"),S=h>=1.4?"#4ade80":h<=-1.4?"#f87171":"#facc15",z=h>=1.4?"#86efac":h<=-1.4?"#fca5a5":"#fef08a",w=a.querySelector(".tile-title");w&&w.textContent!==$&&(w.textContent=$);const T=a.querySelector(".tile-subtitle");T&&T.textContent!==L&&(T.textContent=L);const e=a.querySelector(".tile-trend-dot");e&&(e.style.background=S);const n=a.querySelector(".tile-trend-text");n&&(n.textContent!==y&&(n.textContent=y),n.style.color=z);const _=a.querySelector(".tile-chip-precip");_&&(_.textContent=`\u{1F4A7} ${p}%`);const g=a.querySelector(".tile-chip-pressure");g&&(g.textContent=`\u23F1 ${F.toFixed(1)} hPa`)}if(l){const b=this._attr(t.entity_zambretti,"pressure_hpa",null)??this._state(t.entity_pressure),F=b!=null?parseFloat(b):1013.2,B=this._attr(t.entity_zambretti,"pressure_3h_ago",null),h=this._attr(t.entity_zambretti,"pressure_delta_3h",null),y=h!=null?parseFloat(h):0,S=B!=null?parseFloat(B):F-y,z=this._attr(t.entity_zambretti,"trend","\u2192 Steady"),w=F!=null&&!isNaN(F)?F:1013.25,T=S!=null&&!isNaN(S)?S:w,e=y!=null&&!isNaN(y)?y:w-T,n=-120+(Math.max(960,Math.min(1060,w))-960)/100*240,_=-120+(Math.max(960,Math.min(1060,T))-960)/100*240,g=Math.max(-4,Math.min(4,e))/4*45,k=a.querySelector(".v-needle-main");k&&(k.style.transform=`rotate(${n.toFixed(1)}deg)`);const V=a.querySelector(".v-needle-ref");V&&(V.style.transform=`rotate(${_.toFixed(1)}deg)`);const O=a.querySelector(".v-needle-trend");O&&(O.style.transform=`rotate(${g.toFixed(1)}deg)`);const j=a.querySelector(".vintage-forecast-title");j&&j.textContent!==$&&(j.textContent=$);const H=a.querySelector(".v-p-hpa");H&&(H.innerHTML=`${w.toFixed(1)} <span style="font-size:0.7em;font-weight:400;opacity:0.7">hPa</span>`);const q=a.querySelector(".v-p-mm");q&&(q.textContent=`${(w*.750062).toFixed(1)} mmHg`);const G=a.querySelector(".v-trend-delta");G&&(G.textContent=`${e>=0?"+":""}${e.toFixed(1)} hPa`,G.style.color=e>=1.4?"#4ade80":e<=-1.4?"#f87171":"#fef08a");const U=a.querySelector(".v-trend-lbl");U&&(U.textContent=z);const W=this._precipLabel(),Z=a.querySelector(".footer-precip");Z&&(Z.textContent=`\u{1F4A7} ${W}: ${p}%`)}const D=a.querySelectorAll(".fc-lbl"),R=[u,m,x];if(D.forEach((b,F)=>{const B=i[R[F]]||R[F]||"\u2014";b.textContent!==B&&(b.textContent=B)}),p!==this._lastPrecip){const b=a.querySelector(".precip-widget");b&&(b.innerHTML=_e(p)),this._lastPrecip=p}if(t.show_trend&&this._timelineSteps){const b=this._timelineSteps[this._timelineSteps.length-1];s&&s!=="unknown"&&s!=="unavailable"&&b&&b.state!==s&&(this._timelineSteps.forEach(F=>{F.isCurrent=!1}),this._timelineSteps.push({t:new Date,state:s,isCurrent:!0}),this._timelineSteps.length>8&&this._timelineSteps.shift(),this._patchTimeline())}t.show_history&&this._historyPoints&&this._historyPoints.length>=2&&a.querySelector(".hchart-empty")&&this._patchChart(),t.show_trend&&this._timelineSteps&&this._timelineSteps.length>0&&a.querySelector(".tl-empty")&&this._patchTimeline()}_css(t,i,a=!0,l=!1,r=!1){const s=i?.82:1,c=Math.round(72*s),u=(1.15*s).toFixed(2),m=(.72*s).toFixed(2),x=Math.round(42*s),p=(.8*s).toFixed(2),v=Math.round(118*s),C=(.75*s).toFixed(2);return`
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
        font-size:${u}rem; font-weight:700; line-height:1.25;
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
        font-size:${C}rem; font-weight:800;
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
    `}getCardSize(){let t=3;return this._config.show_trend&&(t+=1),this._config.show_history&&(t+=2),t}}customElements.get("zambretti-weather-card")||customElements.define("zambretti-weather-card",ve),window.customCards=window.customCards||[],window.customCards.some(o=>o.type==="zambretti-weather-card")||window.customCards.push({type:"zambretti-weather-card",name:"Zambretti & Sager Weather Card",description:"Weather forecasts (Modern iOS, Vintage Barometer, Compact Tile)",preview:!0,documentationURL:"https://github.com/meksspirt/zambretti_sager"}),window.customCards.some(o=>o.type==="custom:zambretti-weather-card")||window.customCards.push({type:"custom:zambretti-weather-card",name:"Zambretti & Sager Weather Card",description:"Weather forecasts (Modern iOS, Vintage Barometer, Compact Tile)",preview:!0,documentationURL:"https://github.com/meksspirt/zambretti_sager"});
