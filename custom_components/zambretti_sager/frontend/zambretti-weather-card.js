var ae=new Set(["cs","da","de","de-AT","en","es","fr","hu","it","ja","ko","nb","nl","pl","pt","ru","sv","tr","uk","zh-Hans","zh-Hant"]),ne={en:{settled_fine:"Settled Fine",fine_weather:"Fine Weather",fine_becoming_less_settled:"Fine, Less Settled",fairly_fine_showery_later:"Fine, Showers Later",showery_becoming_more_unsettled:"Showery, Worsening",unsettled_rain_later:"Unsettled, Rain Later",rain_at_times_worse_later:"Rain, Worse Later",rain_at_times_becoming_very_unsettled:"Rain, Very Unsettled",very_unsettled_rain:"Very Unsettled, Rain",fine_possibly_showers:"Fine, Possibly Showers",fairly_fine_showers_likely:"Fine, Showers Likely",showery_bright_intervals:"Showery, Bright Intervals",changeable_some_rain:"Changeable, Some Rain",unsettled_rain_at_times:"Unsettled, Rain at Times",rain_at_frequent_intervals:"Frequent Rain",stormy_much_rain:"Stormy, Heavy Rain",becoming_fine:"Becoming Fine",fairly_fine_improving:"Fine, Improving",fairly_fine_possibly_showers_early:"Fine, Early Showers",showery_early_improving:"Early Showers, Improving",changeable_mending:"Changeable, Mending",rather_unsettled_clearing_later:"Unsettled, Clearing Later",unsettled_probably_improving:"Unsettled, Improving",unsettled_short_fine_intervals:"Unsettled, Short Fine",very_unsettled_finer_at_times:"Very Unsettled",stormy_possibly_improving:"Stormy, May Improve",stable:"Stable",sager_fair_improving:"Fair, improving",sager_fair_tending_to_deteriorate:"Fair, tending to deteriorate",sager_fair_no_change:"Fair, no important change",sager_unsettled_rain_likely:"Unsettled, rain likely",sager_unsettled_probably_improving:"Unsettled, probably improving",sager_unsettled_rain_at_times:"Unsettled, rain at times",sager_changeable_becoming_fairer:"Changeable, becoming fairer",sager_changeable_becoming_more_unsettled:"Changeable, more unsettled",sager_variable_slowly_improving:"Variable, slowly improving",sager_variable_slowly_deteriorating:"Variable, slowly deteriorating",sager_variable_some_change:"Variable, some change"},cs:{settled_fine:"P\u011Bkn\u011B, stabiln\u011B",fine_weather:"P\u011Bkn\xE9 po\u010Das\xED",fine_becoming_less_settled:"P\u011Bkn\u011B, m\xE9n\u011B stabiln\u011B",fairly_fine_showery_later:"Docela p\u011Bkn\u011B, p\u0159eh\xE1\u0148ky pozd\u011Bji",showery_becoming_more_unsettled:"P\u0159eh\xE1\u0148ky, zhor\u0161en\xED",unsettled_rain_later:"Nestabiln\u011B, d\xE9\u0161\u0165 pozd\u011Bji",rain_at_times_worse_later:"D\xE9\u0161\u0165, pozd\u011Bji h\u016F\u0159",rain_at_times_becoming_very_unsettled:"D\xE9\u0161\u0165, velmi nestabiln\u011B",very_unsettled_rain:"Velmi nestabiln\u011B, d\xE9\u0161\u0165",fine_possibly_showers:"P\u011Bkn\u011B, mo\u017En\xE9 p\u0159eh\xE1\u0148ky",fairly_fine_showers_likely:"Docela p\u011Bkn\u011B, p\u0159eh\xE1\u0148ky pravd\u011Bpodobn\xE9",showery_bright_intervals:"P\u0159eh\xE1\u0148ky, protrh\xE1v\xE1n\xED",changeable_some_rain:"Prom\u011Bnliv\u011B, trochu de\u0161t\u011B",unsettled_rain_at_times:"Nestabiln\u011B, ob\u010Das d\xE9\u0161\u0165",rain_at_frequent_intervals:"\u010Cast\xFD d\xE9\u0161\u0165",stormy_much_rain:"Bou\u0159liv\u011B, hodn\u011B de\u0161t\u011B",becoming_fine:"Zlep\u0161uje se",fairly_fine_improving:"Docela p\u011Bkn\u011B, zlep\u0161en\xED",fairly_fine_possibly_showers_early:"Docela p\u011Bkn\u011B, brzk\xE9 p\u0159eh\xE1\u0148ky",showery_early_improving:"Brzk\xE9 p\u0159eh\xE1\u0148ky, zlep\u0161en\xED",changeable_mending:"Prom\u011Bnliv\u011B, zlep\u0161en\xED",rather_unsettled_clearing_later:"Sp\xED\u0161e nestabiln\u011B, pozd\u011Bji protrh\xE1v\xE1n\xED",unsettled_probably_improving:"Nestabiln\u011B, pravd\u011Bpodobn\u011B zlep\u0161en\xED",unsettled_short_fine_intervals:"Nestabiln\u011B, kr\xE1tk\xE9 protrh\xE1v\xE1n\xED",very_unsettled_finer_at_times:"Velmi nestabiln\u011B, ob\u010Das l\xE9pe",stormy_possibly_improving:"Bou\u0159liv\u011B, mo\u017En\xE9 zlep\u0161en\xED",stable:"Stabiln\u011B",sager_fair_improving:"P\u011Bkn\xE9 po\u010Das\xED, zlep\u0161en\xED",sager_fair_tending_to_deteriorate:"P\u011Bkn\u011B, tendence ke zhor\u0161en\xED",sager_fair_no_change:"P\u011Bkn\xE9 po\u010Das\xED, bez v\xFDznamn\xE9 zm\u011Bny",sager_unsettled_rain_likely:"Nestabiln\u011B, d\xE9\u0161\u0165 pravd\u011Bpodobn\xFD",sager_unsettled_probably_improving:"Nestabiln\u011B, pravd\u011Bpodobn\u011B zlep\u0161en\xED",sager_unsettled_rain_at_times:"Nestabiln\u011B, ob\u010Das d\xE9\u0161\u0165",sager_changeable_becoming_fairer:"Prom\u011Bnliv\u011B, zlep\u0161uje se",sager_changeable_becoming_more_unsettled:"Prom\u011Bnliv\u011B, nestabiln\u011Bj\u0161\xED",sager_variable_slowly_improving:"Prom\u011Bnliv\u011B, pomal\xE9 zlep\u0161en\xED",sager_variable_slowly_deteriorating:"Prom\u011Bnliv\u011B, pomal\xE9 zhor\u0161en\xED",sager_variable_some_change:"Prom\u011Bnliv\u011B, o\u010Dek\xE1v\xE1na zm\u011Bna"},da:{settled_fine:"P\xE6nt, stabilt",fine_weather:"P\xE6nt vejr",fine_becoming_less_settled:"P\xE6nt, mindre stabilt",fairly_fine_showery_later:"Rimeligt p\xE6nt, byger senere",showery_becoming_more_unsettled:"Byger, forv\xE6rres",unsettled_rain_later:"Ustabilt, regn senere",rain_at_times_worse_later:"Regn, v\xE6rre senere",rain_at_times_becoming_very_unsettled:"Regn, meget ustabilt",very_unsettled_rain:"Meget ustabilt, regn",fine_possibly_showers:"P\xE6nt, mulige byger",fairly_fine_showers_likely:"Rimeligt p\xE6nt, byger sandsynlige",showery_bright_intervals:"Byger, opklaringer",changeable_some_rain:"Skiftende, lidt regn",unsettled_rain_at_times:"Ustabilt, regn til tider",rain_at_frequent_intervals:"Hyppig regn",stormy_much_rain:"Stormfuldt, meget regn",becoming_fine:"Forbedres",fairly_fine_improving:"Rimeligt p\xE6nt, forbedres",fairly_fine_possibly_showers_early:"Rimeligt p\xE6nt, tidlige byger",showery_early_improving:"Tidlige byger, forbedres",changeable_mending:"Skiftende, forbedres",rather_unsettled_clearing_later:"Ret ustabilt, klarer op senere",unsettled_probably_improving:"Ustabilt, sandsynlig forbedring",unsettled_short_fine_intervals:"Ustabilt, korte opklaringer",very_unsettled_finer_at_times:"Meget ustabilt, til tider bedre",stormy_possibly_improving:"Stormfuldt, mulig forbedring",stable:"Stabilt",sager_fair_improving:"P\xE6nt vejr, forbedres",sager_fair_tending_to_deteriorate:"P\xE6nt vejr, tendens til forv\xE6rring",sager_fair_no_change:"P\xE6nt vejr, ingen v\xE6sentlig \xE6ndring",sager_unsettled_rain_likely:"Ustabilt, regn sandsynlig",sager_unsettled_probably_improving:"Ustabilt, sandsynlig forbedring",sager_unsettled_rain_at_times:"Ustabilt, regn til tider",sager_changeable_becoming_fairer:"Skiftende, bliver p\xE6nere",sager_changeable_becoming_more_unsettled:"Skiftende, mere ustabilt",sager_variable_slowly_improving:"Variabelt, langsom forbedring",sager_variable_slowly_deteriorating:"Variabelt, langsom forv\xE6rring",sager_variable_some_change:"Variabelt, \xE6ndring forventes"},"de-AT":{settled_fine:"Sch\xF6n, best\xE4ndig",fine_weather:"Sch\xF6nes Wetter",fine_becoming_less_settled:"Sch\xF6n, weniger best\xE4ndig",fairly_fine_showery_later:"Ziemlich sch\xF6n, Schauer sp\xE4ter",showery_becoming_more_unsettled:"Schauer, Verschlechterung",unsettled_rain_later:"Unbest\xE4ndig, Regen sp\xE4ter",rain_at_times_worse_later:"Regen, sp\xE4ter schlechter",rain_at_times_becoming_very_unsettled:"Regen, sehr unbest\xE4ndig",very_unsettled_rain:"Sehr unbest\xE4ndig, Regen",fine_possibly_showers:"Sch\xF6n, Schauer m\xF6glich",fairly_fine_showers_likely:"Ziemlich sch\xF6n, Schauer wahrscheinlich",showery_bright_intervals:"Schauer, Auflockerungen",changeable_some_rain:"Wechselhaft, etwas Regen",unsettled_rain_at_times:"Unbest\xE4ndig, zeitweise Regen",rain_at_frequent_intervals:"H\xE4ufiger Regen",stormy_much_rain:"St\xFCrmisch, viel Regen",becoming_fine:"Wird sch\xF6ner",fairly_fine_improving:"Ziemlich sch\xF6n, besser",fairly_fine_possibly_showers_early:"Ziemlich sch\xF6n, fr\xFChe Schauer",showery_early_improving:"Fr\xFChe Schauer, besser",changeable_mending:"Wechselhaft, bessernd",rather_unsettled_clearing_later:"Unbest\xE4ndig, sp\xE4ter klarer",unsettled_probably_improving:"Unbest\xE4ndig, wohl besser",unsettled_short_fine_intervals:"Unbest\xE4ndig, kurze Aufheiterungen",very_unsettled_finer_at_times:"Sehr unbest\xE4ndig, zeitweise besser",stormy_possibly_improving:"St\xFCrmisch, m\xF6glicherweise besser",stable:"Stabil",sager_fair_improving:"Sch\xF6n, bessernd",sager_fair_tending_to_deteriorate:"Sch\xF6n, Tendenz zur Verschlechterung",sager_fair_no_change:"Sch\xF6n, keine wesentliche \xC4nderung",sager_unsettled_rain_likely:"Unbest\xE4ndig, Regen wahrscheinlich",sager_unsettled_probably_improving:"Unbest\xE4ndig, wohl besser",sager_unsettled_rain_at_times:"Unbest\xE4ndig, zeitweise Regen",sager_changeable_becoming_fairer:"Wechselhaft, wird sch\xF6ner",sager_changeable_becoming_more_unsettled:"Wechselhaft, unbest\xE4ndiger",sager_variable_slowly_improving:"Ver\xE4nderlich, langsam besser",sager_variable_slowly_deteriorating:"Ver\xE4nderlich, langsam schlechter",sager_variable_some_change:"Ver\xE4nderlich, \xC4nderung erwartet"},de:{settled_fine:"Sch\xF6n, best\xE4ndig",fine_weather:"Sch\xF6nes Wetter",fine_becoming_less_settled:"Sch\xF6n, weniger best\xE4ndig",fairly_fine_showery_later:"Ziemlich sch\xF6n, Schauer sp\xE4ter",showery_becoming_more_unsettled:"Schauer, Verschlechterung",unsettled_rain_later:"Unbest\xE4ndig, Regen sp\xE4ter",rain_at_times_worse_later:"Regen, sp\xE4ter schlechter",rain_at_times_becoming_very_unsettled:"Regen, sehr unbest\xE4ndig",very_unsettled_rain:"Sehr unbest\xE4ndig, Regen",fine_possibly_showers:"Sch\xF6n, Schauer m\xF6glich",fairly_fine_showers_likely:"Ziemlich sch\xF6n, Schauer wahrscheinlich",showery_bright_intervals:"Schauer, Auflockerungen",changeable_some_rain:"Wechselhaft, etwas Regen",unsettled_rain_at_times:"Unbest\xE4ndig, zeitweise Regen",rain_at_frequent_intervals:"H\xE4ufiger Regen",stormy_much_rain:"St\xFCrmisch, viel Regen",becoming_fine:"Wird sch\xF6ner",fairly_fine_improving:"Ziemlich sch\xF6n, besser",fairly_fine_possibly_showers_early:"Ziemlich sch\xF6n, fr\xFChe Schauer",showery_early_improving:"Fr\xFChe Schauer, besser",changeable_mending:"Wechselhaft, bessernd",rather_unsettled_clearing_later:"Unbest\xE4ndig, sp\xE4ter klarer",unsettled_probably_improving:"Unbest\xE4ndig, wohl besser",unsettled_short_fine_intervals:"Unbest\xE4ndig, kurze Aufheiterungen",very_unsettled_finer_at_times:"Sehr unbest\xE4ndig, zeitweise besser",stormy_possibly_improving:"St\xFCrmisch, m\xF6glicherweise besser",stable:"Stabil",sager_fair_improving:"Sch\xF6n, bessernd",sager_fair_tending_to_deteriorate:"Sch\xF6n, Tendenz zur Verschlechterung",sager_fair_no_change:"Sch\xF6n, keine wesentliche \xC4nderung",sager_unsettled_rain_likely:"Unbest\xE4ndig, Regen wahrscheinlich",sager_unsettled_probably_improving:"Unbest\xE4ndig, wohl besser",sager_unsettled_rain_at_times:"Unbest\xE4ndig, zeitweise Regen",sager_changeable_becoming_fairer:"Wechselhaft, wird sch\xF6ner",sager_changeable_becoming_more_unsettled:"Wechselhaft, unbest\xE4ndiger",sager_variable_slowly_improving:"Ver\xE4nderlich, langsam besser",sager_variable_slowly_deteriorating:"Ver\xE4nderlich, langsam schlechter",sager_variable_some_change:"Ver\xE4nderlich, \xC4nderung erwartet"},es:{settled_fine:"Buen tiempo estable",fine_weather:"Buen tiempo",fine_becoming_less_settled:"Buen tiempo, menos estable",fairly_fine_showery_later:"Bastante bueno, chubascos despu\xE9s",showery_becoming_more_unsettled:"Chubascos, empeorando",unsettled_rain_later:"Inestable, lluvia despu\xE9s",rain_at_times_worse_later:"Lluvia, empeorando despu\xE9s",rain_at_times_becoming_very_unsettled:"Lluvia, muy inestable",very_unsettled_rain:"Muy inestable, lluvia",fine_possibly_showers:"Buen tiempo, posibles chubascos",fairly_fine_showers_likely:"Bastante bueno, chubascos probables",showery_bright_intervals:"Chubascos, claros",changeable_some_rain:"Variable, algo de lluvia",unsettled_rain_at_times:"Inestable, lluvia a intervalos",rain_at_frequent_intervals:"Lluvia frecuente",stormy_much_rain:"Tormentoso, mucha lluvia",becoming_fine:"Mejorando",fairly_fine_improving:"Bastante bueno, mejorando",fairly_fine_possibly_showers_early:"Bastante bueno, chubascos tempranos",showery_early_improving:"Chubascos tempranos, mejorando",changeable_mending:"Variable, mejorando",rather_unsettled_clearing_later:"Inestable, despejando despu\xE9s",unsettled_probably_improving:"Inestable, probable mejora",unsettled_short_fine_intervals:"Inestable, claros breves",very_unsettled_finer_at_times:"Muy inestable, mejor a ratos",stormy_possibly_improving:"Tormentoso, posible mejora",stable:"Estable",sager_fair_improving:"Buen tiempo, mejorando",sager_fair_tending_to_deteriorate:"Buen tiempo, tendencia a empeorar",sager_fair_no_change:"Buen tiempo, sin cambios importantes",sager_unsettled_rain_likely:"Inestable, lluvia probable",sager_unsettled_probably_improving:"Inestable, probable mejora",sager_unsettled_rain_at_times:"Inestable, lluvia a intervalos",sager_changeable_becoming_fairer:"Variable, mejorando",sager_changeable_becoming_more_unsettled:"Variable, m\xE1s inestable",sager_variable_slowly_improving:"Variable, mejorando lentamente",sager_variable_slowly_deteriorating:"Variable, empeorando lentamente",sager_variable_some_change:"Variable, se esperan cambios"},hu:{settled_fine:"Sz\xE9p, stabil",fine_weather:"Sz\xE9p id\u0151",fine_becoming_less_settled:"Sz\xE9p, kev\xE9sb\xE9 stabil",fairly_fine_showery_later:"Eg\xE9sz sz\xE9p, k\xE9s\u0151bb z\xE1porok",showery_becoming_more_unsettled:"Z\xE1porok, roml\xE1s",unsettled_rain_later:"V\xE1ltoz\xE9kony, k\xE9s\u0151bb es\u0151",rain_at_times_worse_later:"Es\u0151, k\xE9s\u0151bb romlik",rain_at_times_becoming_very_unsettled:"Es\u0151, nagyon v\xE1ltoz\xE9kony",very_unsettled_rain:"Nagyon v\xE1ltoz\xE9kony, es\u0151",fine_possibly_showers:"Sz\xE9p, lehets\xE9ges z\xE1porok",fairly_fine_showers_likely:"Eg\xE9sz sz\xE9p, z\xE1porok val\xF3sz\xEDn\u0171ek",showery_bright_intervals:"Z\xE1porok, felh\u0151szakad\xE1sok",changeable_some_rain:"V\xE1ltoz\xE9kony, kev\xE9s es\u0151",unsettled_rain_at_times:"V\xE1ltoz\xE9kony, id\u0151nk\xE9nt es\u0151",rain_at_frequent_intervals:"Gyakori es\u0151",stormy_much_rain:"Viharos, sok es\u0151",becoming_fine:"Javul",fairly_fine_improving:"Eg\xE9sz sz\xE9p, javul",fairly_fine_possibly_showers_early:"Eg\xE9sz sz\xE9p, korai z\xE1porok",showery_early_improving:"Korai z\xE1porok, javul",changeable_mending:"V\xE1ltoz\xE9kony, javul",rather_unsettled_clearing_later:"Ink\xE1bb v\xE1ltoz\xE9kony, k\xE9s\u0151bb der\xFCl",unsettled_probably_improving:"V\xE1ltoz\xE9kony, val\xF3sz\xEDn\u0171 javul\xE1s",unsettled_short_fine_intervals:"V\xE1ltoz\xE9kony, r\xF6vid der\xFCl\xE9sek",very_unsettled_finer_at_times:"Nagyon v\xE1ltoz\xE9kony, id\u0151nk\xE9nt jobb",stormy_possibly_improving:"Viharos, lehets\xE9ges javul\xE1s",stable:"Stabil",sager_fair_improving:"Sz\xE9p id\u0151, javul",sager_fair_tending_to_deteriorate:"Sz\xE9p id\u0151, roml\xE1sra hajlik",sager_fair_no_change:"Sz\xE9p id\u0151, nincs jelent\u0151s v\xE1ltoz\xE1s",sager_unsettled_rain_likely:"V\xE1ltoz\xE9kony, es\u0151 val\xF3sz\xEDn\u0171",sager_unsettled_probably_improving:"V\xE1ltoz\xE9kony, val\xF3sz\xEDn\u0171 javul\xE1s",sager_unsettled_rain_at_times:"V\xE1ltoz\xE9kony, id\u0151nk\xE9nt es\u0151",sager_changeable_becoming_fairer:"V\xE1ltoz\xE9kony, javul",sager_changeable_becoming_more_unsettled:"V\xE1ltoz\xE9kony, v\xE1ltoz\xE9konyabb",sager_variable_slowly_improving:"V\xE1ltoz\xF3, lass\xFA javul\xE1s",sager_variable_slowly_deteriorating:"V\xE1ltoz\xF3, lass\xFA roml\xE1s",sager_variable_some_change:"V\xE1ltoz\xF3, v\xE1ltoz\xE1s v\xE1rhat\xF3"},it:{settled_fine:"Bel tempo stabile",fine_weather:"Bel tempo",fine_becoming_less_settled:"Bel tempo, meno stabile",fairly_fine_showery_later:"Abbastanza bello, rovesci dopo",showery_becoming_more_unsettled:"Rovesci, peggioramento",unsettled_rain_later:"Instabile, pioggia dopo",rain_at_times_worse_later:"Pioggia, peggioramento dopo",rain_at_times_becoming_very_unsettled:"Pioggia, molto instabile",very_unsettled_rain:"Molto instabile, pioggia",fine_possibly_showers:"Bel tempo, possibili rovesci",fairly_fine_showers_likely:"Abbastanza bello, rovesci probabili",showery_bright_intervals:"Rovesci, schiarite",changeable_some_rain:"Variabile, qualche pioggia",unsettled_rain_at_times:"Instabile, pioggia a tratti",rain_at_frequent_intervals:"Pioggia frequente",stormy_much_rain:"Tempestoso, molta pioggia",becoming_fine:"In miglioramento",fairly_fine_improving:"Abbastanza bello, in miglioramento",fairly_fine_possibly_showers_early:"Abbastanza bello, rovesci precoci",showery_early_improving:"Rovesci precoci, in miglioramento",changeable_mending:"Variabile, in miglioramento",rather_unsettled_clearing_later:"Instabile, schiarite dopo",unsettled_probably_improving:"Instabile, probabile miglioramento",unsettled_short_fine_intervals:"Instabile, brevi schiarite",very_unsettled_finer_at_times:"Molto instabile, migliora a tratti",stormy_possibly_improving:"Tempestoso, possibile miglioramento",stable:"Stabile",sager_fair_improving:"Bel tempo, in miglioramento",sager_fair_tending_to_deteriorate:"Bel tempo, tendenza al peggioramento",sager_fair_no_change:"Bel tempo, nessun cambiamento importante",sager_unsettled_rain_likely:"Instabile, pioggia probabile",sager_unsettled_probably_improving:"Instabile, probabile miglioramento",sager_unsettled_rain_at_times:"Instabile, pioggia a tratti",sager_changeable_becoming_fairer:"Variabile, in miglioramento",sager_changeable_becoming_more_unsettled:"Variabile, pi\xF9 instabile",sager_variable_slowly_improving:"Variabile, miglioramento lento",sager_variable_slowly_deteriorating:"Variabile, peggioramento lento",sager_variable_some_change:"Variabile, cambiamenti attesi"},ja:{settled_fine:"\u5B89\u5B9A\u3057\u305F\u597D\u5929",fine_weather:"\u597D\u5929",fine_becoming_less_settled:"\u597D\u5929\u3001\u4E0D\u5B89\u5B9A\u5316",fairly_fine_showery_later:"\u3084\u3084\u597D\u5929\u3001\u5F8C\u306B\u306B\u308F\u304B\u96E8",showery_becoming_more_unsettled:"\u306B\u308F\u304B\u96E8\u3001\u60AA\u5316",unsettled_rain_later:"\u4E0D\u5B89\u5B9A\u3001\u5F8C\u306B\u96E8",rain_at_times_worse_later:"\u6642\u3005\u96E8\u3001\u5F8C\u306B\u60AA\u5316",rain_at_times_becoming_very_unsettled:"\u6642\u3005\u96E8\u3001\u975E\u5E38\u306B\u4E0D\u5B89\u5B9A",very_unsettled_rain:"\u975E\u5E38\u306B\u4E0D\u5B89\u5B9A\u3001\u96E8",fine_possibly_showers:"\u597D\u5929\u3001\u306B\u308F\u304B\u96E8\u306E\u53EF\u80FD\u6027",fairly_fine_showers_likely:"\u3084\u3084\u597D\u5929\u3001\u306B\u308F\u304B\u96E8\u306E\u53EF\u80FD\u6027\u5927",showery_bright_intervals:"\u306B\u308F\u304B\u96E8\u3001\u6674\u308C\u9593",changeable_some_rain:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u5C0F\u96E8",unsettled_rain_at_times:"\u4E0D\u5B89\u5B9A\u3001\u6642\u3005\u96E8",rain_at_frequent_intervals:"\u983B\u7E41\u306A\u96E8",stormy_much_rain:"\u5D50\u3001\u5927\u96E8",becoming_fine:"\u56DE\u5FA9\u50BE\u5411",fairly_fine_improving:"\u3084\u3084\u597D\u5929\u3001\u6539\u5584",fairly_fine_possibly_showers_early:"\u3084\u3084\u597D\u5929\u3001\u65E9\u3044\u306B\u308F\u304B\u96E8",showery_early_improving:"\u65E9\u3044\u306B\u308F\u304B\u96E8\u3001\u6539\u5584",changeable_mending:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u6539\u5584",rather_unsettled_clearing_later:"\u3084\u3084\u4E0D\u5B89\u5B9A\u3001\u5F8C\u306B\u6674\u308C",unsettled_probably_improving:"\u4E0D\u5B89\u5B9A\u3001\u304A\u305D\u3089\u304F\u6539\u5584",unsettled_short_fine_intervals:"\u4E0D\u5B89\u5B9A\u3001\u77ED\u3044\u6674\u308C\u9593",very_unsettled_finer_at_times:"\u975E\u5E38\u306B\u4E0D\u5B89\u5B9A\u3001\u6642\u3005\u6539\u5584",stormy_possibly_improving:"\u5D50\u3001\u6539\u5584\u306E\u53EF\u80FD\u6027",stable:"\u5B89\u5B9A",sager_fair_improving:"\u597D\u5929\u3001\u6539\u5584",sager_fair_tending_to_deteriorate:"\u597D\u5929\u3001\u60AA\u5316\u50BE\u5411",sager_fair_no_change:"\u597D\u5929\u3001\u5927\u304D\u306A\u5909\u5316\u306A\u3057",sager_unsettled_rain_likely:"\u4E0D\u5B89\u5B9A\u3001\u96E8\u306E\u53EF\u80FD\u6027",sager_unsettled_probably_improving:"\u4E0D\u5B89\u5B9A\u3001\u304A\u305D\u3089\u304F\u6539\u5584",sager_unsettled_rain_at_times:"\u4E0D\u5B89\u5B9A\u3001\u6642\u3005\u96E8",sager_changeable_becoming_fairer:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u6539\u5584\u50BE\u5411",sager_changeable_becoming_more_unsettled:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u3088\u308A\u4E0D\u5B89\u5B9A",sager_variable_slowly_improving:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u7DE9\u3084\u304B\u306B\u6539\u5584",sager_variable_slowly_deteriorating:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u7DE9\u3084\u304B\u306B\u60AA\u5316",sager_variable_some_change:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u5909\u5316\u3042\u308A"},ko:{settled_fine:"\uB9D1\uACE0 \uC548\uC815\uC801",fine_weather:"\uC88B\uC740 \uB0A0\uC528",fine_becoming_less_settled:"\uC88B\uC74C, \uBD88\uC548\uC815\uD574\uC9D0",fairly_fine_showery_later:"\uAF64 \uC88B\uC74C, \uB098\uC911\uC5D0 \uC18C\uB098\uAE30",showery_becoming_more_unsettled:"\uC18C\uB098\uAE30, \uC545\uD654",unsettled_rain_later:"\uBD88\uC548\uC815, \uB098\uC911\uC5D0 \uBE44",rain_at_times_worse_later:"\uBE44, \uB098\uC911\uC5D0 \uC545\uD654",rain_at_times_becoming_very_unsettled:"\uBE44, \uB9E4\uC6B0 \uBD88\uC548\uC815",very_unsettled_rain:"\uB9E4\uC6B0 \uBD88\uC548\uC815, \uBE44",fine_possibly_showers:"\uC88B\uC74C, \uC18C\uB098\uAE30 \uAC00\uB2A5",fairly_fine_showers_likely:"\uAF64 \uC88B\uC74C, \uC18C\uB098\uAE30 \uAC00\uB2A5\uC131",showery_bright_intervals:"\uC18C\uB098\uAE30, \uAC04\uD5D0\uC801 \uB9D1\uC74C",changeable_some_rain:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uC57D\uD55C \uBE44",unsettled_rain_at_times:"\uBD88\uC548\uC815, \uB54C\uB54C\uB85C \uBE44",rain_at_frequent_intervals:"\uC7A6\uC740 \uBE44",stormy_much_rain:"\uD3ED\uD48D, \uB9CE\uC740 \uBE44",becoming_fine:"\uAC1C\uC120 \uC911",fairly_fine_improving:"\uAF64 \uC88B\uC74C, \uAC1C\uC120",fairly_fine_possibly_showers_early:"\uAF64 \uC88B\uC74C, \uC774\uB978 \uC18C\uB098\uAE30",showery_early_improving:"\uC774\uB978 \uC18C\uB098\uAE30, \uAC1C\uC120",changeable_mending:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uAC1C\uC120",rather_unsettled_clearing_later:"\uB2E4\uC18C \uBD88\uC548\uC815, \uB098\uC911\uC5D0 \uAC2C",unsettled_probably_improving:"\uBD88\uC548\uC815, \uC544\uB9C8 \uAC1C\uC120",unsettled_short_fine_intervals:"\uBD88\uC548\uC815, \uC9E7\uC740 \uB9D1\uC74C",very_unsettled_finer_at_times:"\uB9E4\uC6B0 \uBD88\uC548\uC815, \uB54C\uB54C\uB85C \uAC1C\uC120",stormy_possibly_improving:"\uD3ED\uD48D, \uAC1C\uC120 \uAC00\uB2A5",stable:"\uC548\uC815",sager_fair_improving:"\uC88B\uC740 \uB0A0\uC528, \uAC1C\uC120",sager_fair_tending_to_deteriorate:"\uC88B\uC74C, \uC545\uD654 \uACBD\uD5A5",sager_fair_no_change:"\uC88B\uC740 \uB0A0\uC528, \uD070 \uBCC0\uD654 \uC5C6\uC74C",sager_unsettled_rain_likely:"\uBD88\uC548\uC815, \uBE44 \uAC00\uB2A5\uC131",sager_unsettled_probably_improving:"\uBD88\uC548\uC815, \uC544\uB9C8 \uAC1C\uC120",sager_unsettled_rain_at_times:"\uBD88\uC548\uC815, \uB54C\uB54C\uB85C \uBE44",sager_changeable_becoming_fairer:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uAC1C\uC120 \uACBD\uD5A5",sager_changeable_becoming_more_unsettled:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uB354 \uBD88\uC548\uC815",sager_variable_slowly_improving:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uC11C\uC11C\uD788 \uAC1C\uC120",sager_variable_slowly_deteriorating:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uC11C\uC11C\uD788 \uC545\uD654",sager_variable_some_change:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uBCC0\uD654 \uC608\uC0C1"},nb:{settled_fine:"Fint, stabilt",fine_weather:"Fint v\xE6r",fine_becoming_less_settled:"Fint, mindre stabilt",fairly_fine_showery_later:"Ganske fint, byger senere",showery_becoming_more_unsettled:"Byger, forverres",unsettled_rain_later:"Ustabilt, regn senere",rain_at_times_worse_later:"Regn, verre senere",rain_at_times_becoming_very_unsettled:"Regn, sv\xE6rt ustabilt",very_unsettled_rain:"Sv\xE6rt ustabilt, regn",fine_possibly_showers:"Fint, mulige byger",fairly_fine_showers_likely:"Ganske fint, byger sannsynlige",showery_bright_intervals:"Byger, opphold",changeable_some_rain:"Skiftende, litt regn",unsettled_rain_at_times:"Ustabilt, regn av og til",rain_at_frequent_intervals:"Hyppig regn",stormy_much_rain:"Stormfullt, mye regn",becoming_fine:"Forbedres",fairly_fine_improving:"Ganske fint, forbedres",fairly_fine_possibly_showers_early:"Ganske fint, tidlige byger",showery_early_improving:"Tidlige byger, forbedres",changeable_mending:"Skiftende, forbedres",rather_unsettled_clearing_later:"Ganske ustabilt, klarner senere",unsettled_probably_improving:"Ustabilt, sannsynlig forbedring",unsettled_short_fine_intervals:"Ustabilt, korte opphold",very_unsettled_finer_at_times:"Sv\xE6rt ustabilt, til tider bedre",stormy_possibly_improving:"Stormfullt, mulig forbedring",stable:"Stabilt",sager_fair_improving:"Fint v\xE6r, forbedres",sager_fair_tending_to_deteriorate:"Fint v\xE6r, tendens til forverring",sager_fair_no_change:"Fint v\xE6r, ingen viktig endring",sager_unsettled_rain_likely:"Ustabilt, regn sannsynlig",sager_unsettled_probably_improving:"Ustabilt, sannsynlig forbedring",sager_unsettled_rain_at_times:"Ustabilt, regn av og til",sager_changeable_becoming_fairer:"Skiftende, blir finere",sager_changeable_becoming_more_unsettled:"Skiftende, mer ustabilt",sager_variable_slowly_improving:"Variabelt, langsom forbedring",sager_variable_slowly_deteriorating:"Variabelt, langsom forverring",sager_variable_some_change:"Variabelt, endring forventes"},nl:{settled_fine:"Mooi, stabiel",fine_weather:"Mooi weer",fine_becoming_less_settled:"Mooi, minder stabiel",fairly_fine_showery_later:"Redelijk mooi, buien later",showery_becoming_more_unsettled:"Buien, verslechtering",unsettled_rain_later:"Onstabiel, regen later",rain_at_times_worse_later:"Regen, later slechter",rain_at_times_becoming_very_unsettled:"Regen, zeer onstabiel",very_unsettled_rain:"Zeer onstabiel, regen",fine_possibly_showers:"Mooi, mogelijk buien",fairly_fine_showers_likely:"Redelijk mooi, buien waarschijnlijk",showery_bright_intervals:"Buien, opklaringen",changeable_some_rain:"Wisselvallig, wat regen",unsettled_rain_at_times:"Onstabiel, regen af en toe",rain_at_frequent_intervals:"Frequente regen",stormy_much_rain:"Stormachtig, veel regen",becoming_fine:"Wordt mooier",fairly_fine_improving:"Redelijk mooi, verbetering",fairly_fine_possibly_showers_early:"Redelijk mooi, vroege buien",showery_early_improving:"Vroege buien, verbetering",changeable_mending:"Wisselvallig, verbetering",rather_unsettled_clearing_later:"Onstabiel, later opklaring",unsettled_probably_improving:"Onstabiel, waarschijnlijk beter",unsettled_short_fine_intervals:"Onstabiel, korte opklaringen",very_unsettled_finer_at_times:"Zeer onstabiel, soms beter",stormy_possibly_improving:"Stormachtig, mogelijk beter",stable:"Stabiel",sager_fair_improving:"Mooi weer, verbetering",sager_fair_tending_to_deteriorate:"Mooi weer, neiging tot verslechtering",sager_fair_no_change:"Mooi weer, geen belangrijke verandering",sager_unsettled_rain_likely:"Onstabiel, regen waarschijnlijk",sager_unsettled_probably_improving:"Onstabiel, waarschijnlijk beter",sager_unsettled_rain_at_times:"Onstabiel, regen af en toe",sager_changeable_becoming_fairer:"Wisselvallig, wordt mooier",sager_changeable_becoming_more_unsettled:"Wisselvallig, onstabieler",sager_variable_slowly_improving:"Variabel, langzaam beter",sager_variable_slowly_deteriorating:"Variabel, langzaam slechter",sager_variable_some_change:"Variabel, verandering verwacht"},pl:{settled_fine:"\u0141adna, stabilna pogoda",fine_weather:"\u0141adna pogoda",fine_becoming_less_settled:"\u0141adnie, mniej stabilnie",fairly_fine_showery_later:"Do\u015B\u0107 \u0142adnie, p\xF3\u017Aniej przelotne",showery_becoming_more_unsettled:"Przelotne, pogorszenie",unsettled_rain_later:"Niestabilnie, p\xF3\u017Aniej deszcz",rain_at_times_worse_later:"Deszcz, p\xF3\u017Aniej gorzej",rain_at_times_becoming_very_unsettled:"Deszcz, bardzo niestabilnie",very_unsettled_rain:"Bardzo niestabilnie, deszcz",fine_possibly_showers:"\u0141adnie, mo\u017Cliwe przelotne",fairly_fine_showers_likely:"Do\u015B\u0107 \u0142adnie, przelotne prawdopodobne",showery_bright_intervals:"Przelotne, przeja\u015Bnienia",changeable_some_rain:"Zmiennie, odrobin\u0119 deszczu",unsettled_rain_at_times:"Niestabilnie, deszcz okresami",rain_at_frequent_intervals:"Cz\u0119sty deszcz",stormy_much_rain:"Burzowo, du\u017Co deszczu",becoming_fine:"Poprawa pogody",fairly_fine_improving:"Do\u015B\u0107 \u0142adnie, poprawa",fairly_fine_possibly_showers_early:"Do\u015B\u0107 \u0142adnie, wczesne przelotne",showery_early_improving:"Wczesne przelotne, poprawa",changeable_mending:"Zmiennie, poprawa",rather_unsettled_clearing_later:"Niestabilnie, p\xF3\u017Aniej przeja\u015Bnienia",unsettled_probably_improving:"Niestabilnie, prawdopodobna poprawa",unsettled_short_fine_intervals:"Niestabilnie, kr\xF3tkie przeja\u015Bnienia",very_unsettled_finer_at_times:"Bardzo niestabilnie, chwilami lepiej",stormy_possibly_improving:"Burzowo, mo\u017Cliwa poprawa",stable:"Stabilnie",sager_fair_improving:"\u0141adna pogoda, poprawa",sager_fair_tending_to_deteriorate:"\u0141adna pogoda, tendencja do pogorszenia",sager_fair_no_change:"\u0141adna pogoda, bez istotnych zmian",sager_unsettled_rain_likely:"Niestabilnie, deszcz prawdopodobny",sager_unsettled_probably_improving:"Niestabilnie, prawdopodobna poprawa",sager_unsettled_rain_at_times:"Niestabilnie, deszcz okresami",sager_changeable_becoming_fairer:"Zmiennie, poprawa",sager_changeable_becoming_more_unsettled:"Zmiennie, bardziej niestabilnie",sager_variable_slowly_improving:"Zmiennie, powolna poprawa",sager_variable_slowly_deteriorating:"Zmiennie, powolne pogorszenie",sager_variable_some_change:"Zmiennie, oczekiwane zmiany"},pt:{settled_fine:"Bom tempo est\xE1vel",fine_weather:"Bom tempo",fine_becoming_less_settled:"Bom tempo, menos est\xE1vel",fairly_fine_showery_later:"Razoavelmente bom, aguaceiros depois",showery_becoming_more_unsettled:"Aguaceiros, piora",unsettled_rain_later:"Inst\xE1vel, chuva depois",rain_at_times_worse_later:"Chuva, piora depois",rain_at_times_becoming_very_unsettled:"Chuva, muito inst\xE1vel",very_unsettled_rain:"Muito inst\xE1vel, chuva",fine_possibly_showers:"Bom tempo, poss\xEDveis aguaceiros",fairly_fine_showers_likely:"Razoavelmente bom, aguaceiros prov\xE1veis",showery_bright_intervals:"Aguaceiros, claros",changeable_some_rain:"Vari\xE1vel, alguma chuva",unsettled_rain_at_times:"Inst\xE1vel, chuva por vezes",rain_at_frequent_intervals:"Chuva frequente",stormy_much_rain:"Tempestuoso, muita chuva",becoming_fine:"A melhorar",fairly_fine_improving:"Razoavelmente bom, a melhorar",fairly_fine_possibly_showers_early:"Razoavelmente bom, aguaceiros cedo",showery_early_improving:"Aguaceiros cedo, a melhorar",changeable_mending:"Vari\xE1vel, a melhorar",rather_unsettled_clearing_later:"Inst\xE1vel, clareia depois",unsettled_probably_improving:"Inst\xE1vel, prov\xE1vel melhoria",unsettled_short_fine_intervals:"Inst\xE1vel, claros breves",very_unsettled_finer_at_times:"Muito inst\xE1vel, melhora \xE0s vezes",stormy_possibly_improving:"Tempestuoso, poss\xEDvel melhoria",stable:"Est\xE1vel",sager_fair_improving:"Bom tempo, a melhorar",sager_fair_tending_to_deteriorate:"Bom tempo, tend\xEAncia a piorar",sager_fair_no_change:"Bom tempo, sem altera\xE7\xE3o importante",sager_unsettled_rain_likely:"Inst\xE1vel, chuva prov\xE1vel",sager_unsettled_probably_improving:"Inst\xE1vel, prov\xE1vel melhoria",sager_unsettled_rain_at_times:"Inst\xE1vel, chuva por vezes",sager_changeable_becoming_fairer:"Vari\xE1vel, a melhorar",sager_changeable_becoming_more_unsettled:"Vari\xE1vel, mais inst\xE1vel",sager_variable_slowly_improving:"Vari\xE1vel, melhoria lenta",sager_variable_slowly_deteriorating:"Vari\xE1vel, piora lenta",sager_variable_some_change:"Vari\xE1vel, mudan\xE7as esperadas"},sv:{settled_fine:"Fint, stabilt",fine_weather:"Fint v\xE4der",fine_becoming_less_settled:"Fint, mindre stabilt",fairly_fine_showery_later:"Ganska fint, skurar senare",showery_becoming_more_unsettled:"Skurar, f\xF6rs\xE4mras",unsettled_rain_later:"Ostadigt, regn senare",rain_at_times_worse_later:"Regn, s\xE4mre senare",rain_at_times_becoming_very_unsettled:"Regn, mycket ostadigt",very_unsettled_rain:"Mycket ostadigt, regn",fine_possibly_showers:"Fint, m\xF6jliga skurar",fairly_fine_showers_likely:"Ganska fint, skurar troliga",showery_bright_intervals:"Skurar, uppeh\xE5ll",changeable_some_rain:"Ombytligt, lite regn",unsettled_rain_at_times:"Ostadigt, regn ibland",rain_at_frequent_intervals:"Frekvent regn",stormy_much_rain:"Stormigt, mycket regn",becoming_fine:"F\xF6rb\xE4ttras",fairly_fine_improving:"Ganska fint, f\xF6rb\xE4ttras",fairly_fine_possibly_showers_early:"Ganska fint, tidiga skurar",showery_early_improving:"Tidiga skurar, f\xF6rb\xE4ttras",changeable_mending:"Ombytligt, f\xF6rb\xE4ttras",rather_unsettled_clearing_later:"Ganska ostadigt, klarnar senare",unsettled_probably_improving:"Ostadigt, troligen f\xF6rb\xE4ttring",unsettled_short_fine_intervals:"Ostadigt, korta uppeh\xE5ll",very_unsettled_finer_at_times:"Mycket ostadigt, ibland b\xE4ttre",stormy_possibly_improving:"Stormigt, m\xF6jlig f\xF6rb\xE4ttring",stable:"Stabilt",sager_fair_improving:"Fint v\xE4der, f\xF6rb\xE4ttras",sager_fair_tending_to_deteriorate:"Fint v\xE4der, tendens att f\xF6rs\xE4mras",sager_fair_no_change:"Fint v\xE4der, ingen viktig f\xF6r\xE4ndring",sager_unsettled_rain_likely:"Ostadigt, regn troligt",sager_unsettled_probably_improving:"Ostadigt, troligen f\xF6rb\xE4ttring",sager_unsettled_rain_at_times:"Ostadigt, regn ibland",sager_changeable_becoming_fairer:"Ombytligt, blir finare",sager_changeable_becoming_more_unsettled:"Ombytligt, mer ostadigt",sager_variable_slowly_improving:"Variabelt, l\xE5ngsam f\xF6rb\xE4ttring",sager_variable_slowly_deteriorating:"Variabelt, l\xE5ngsam f\xF6rs\xE4mring",sager_variable_some_change:"Variabelt, f\xF6r\xE4ndring v\xE4ntas"},tr:{settled_fine:"G\xFCzel, stabil",fine_weather:"G\xFCzel hava",fine_becoming_less_settled:"G\xFCzel, daha az stabil",fairly_fine_showery_later:"Olduk\xE7a g\xFCzel, sonra sa\u011Fanak",showery_becoming_more_unsettled:"Sa\u011Fanak, k\xF6t\xFCle\u015Fme",unsettled_rain_later:"Dalgal\u0131, sonra ya\u011Fmur",rain_at_times_worse_later:"Ya\u011Fmur, sonra k\xF6t\xFCle\u015Fme",rain_at_times_becoming_very_unsettled:"Ya\u011Fmur, \xE7ok dalgal\u0131",very_unsettled_rain:"\xC7ok dalgal\u0131, ya\u011Fmur",fine_possibly_showers:"G\xFCzel, sa\u011Fanak olas\u0131",fairly_fine_showers_likely:"Olduk\xE7a g\xFCzel, sa\u011Fanak muhtemel",showery_bright_intervals:"Sa\u011Fanak, a\xE7\u0131lmalar",changeable_some_rain:"De\u011Fi\u015Fken, biraz ya\u011Fmur",unsettled_rain_at_times:"Dalgal\u0131, ara s\u0131ra ya\u011Fmur",rain_at_frequent_intervals:"S\u0131k ya\u011Fmur",stormy_much_rain:"F\u0131rt\u0131nal\u0131, \xE7ok ya\u011Fmur",becoming_fine:"D\xFCzeliyor",fairly_fine_improving:"Olduk\xE7a g\xFCzel, d\xFCzeliyor",fairly_fine_possibly_showers_early:"Olduk\xE7a g\xFCzel, erken sa\u011Fanak",showery_early_improving:"Erken sa\u011Fanak, d\xFCzeliyor",changeable_mending:"De\u011Fi\u015Fken, d\xFCzeliyor",rather_unsettled_clearing_later:"Dalgal\u0131, sonra a\xE7\u0131l\u0131yor",unsettled_probably_improving:"Dalgal\u0131, muhtemelen d\xFCzeliyor",unsettled_short_fine_intervals:"Dalgal\u0131, k\u0131sa a\xE7\u0131lmalar",very_unsettled_finer_at_times:"\xC7ok dalgal\u0131, ara s\u0131ra d\xFCzeliyor",stormy_possibly_improving:"F\u0131rt\u0131nal\u0131, d\xFCzelme olas\u0131",stable:"Stabil",sager_fair_improving:"G\xFCzel hava, d\xFCzeliyor",sager_fair_tending_to_deteriorate:"G\xFCzel hava, k\xF6t\xFCle\u015Fme e\u011Filimi",sager_fair_no_change:"G\xFCzel hava, \xF6nemli de\u011Fi\u015Fiklik yok",sager_unsettled_rain_likely:"Dalgal\u0131, ya\u011Fmur olas\u0131",sager_unsettled_probably_improving:"Dalgal\u0131, muhtemelen d\xFCzeliyor",sager_unsettled_rain_at_times:"Dalgal\u0131, ara s\u0131ra ya\u011Fmur",sager_changeable_becoming_fairer:"De\u011Fi\u015Fken, d\xFCzeliyor",sager_changeable_becoming_more_unsettled:"De\u011Fi\u015Fken, daha dalgal\u0131",sager_variable_slowly_improving:"De\u011Fi\u015Fken, yava\u015F d\xFCzelme",sager_variable_slowly_deteriorating:"De\u011Fi\u015Fken, yava\u015F k\xF6t\xFCle\u015Fme",sager_variable_some_change:"De\u011Fi\u015Fken, de\u011Fi\u015Fiklik bekleniyor"},uk:{settled_fine:"\u042F\u0441\u043D\u043E, \u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E",fine_weather:"\u0413\u0430\u0440\u043D\u0430 \u043F\u043E\u0433\u043E\u0434\u0430",fine_becoming_less_settled:"\u0414\u043E\u0431\u0440\u0435, \u043C\u043E\u0436\u043B\u0438\u0432\u0435 \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",fairly_fine_showery_later:"\u0414\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0431\u0440\u0435, \u0437\u0433\u043E\u0434\u043E\u043C \u0434\u043E\u0449\u0456",showery_becoming_more_unsettled:"\u0414\u043E\u0449\u043E\u0432\u043E, \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",unsettled_rain_later:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449 \u043F\u0456\u0437\u043D\u0456\u0448\u0435",rain_at_times_worse_later:"\u0414\u043E\u0449\u0456, \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F \u043F\u0456\u0437\u043D\u0456\u0448\u0435",rain_at_times_becoming_very_unsettled:"\u0414\u043E\u0449\u0456, \u0434\u0443\u0436\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E",very_unsettled_rain:"\u0414\u0443\u0436\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449",fine_possibly_showers:"\u0414\u043E\u0431\u0440\u0435, \u043C\u043E\u0436\u043B\u0438\u0432\u0456 \u0437\u043B\u0438\u0432\u0438",fairly_fine_showers_likely:"\u0414\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0431\u0440\u0435, \u0437\u043B\u0438\u0432\u0438 \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0456",showery_bright_intervals:"\u0417\u043B\u0438\u0432\u0438, \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F",changeable_some_rain:"\u041C\u0456\u043D\u043B\u0438\u0432\u0430, \u043D\u0435\u0432\u0435\u043B\u0438\u043A\u0438\u0439 \u0434\u043E\u0449",unsettled_rain_at_times:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449\u0456 \u043F\u0435\u0440\u0456\u043E\u0434\u0438\u0447\u043D\u043E",rain_at_frequent_intervals:"\u0427\u0430\u0441\u0442\u0456 \u0434\u043E\u0449\u0456",stormy_much_rain:"\u0428\u0442\u043E\u0440\u043C\u043E\u0432\u043E, \u0441\u0438\u043B\u044C\u043D\u0456 \u0434\u043E\u0449\u0456",becoming_fine:"\u041F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u043F\u043E\u0433\u043E\u0434\u0438",fairly_fine_improving:"\u0414\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0431\u0440\u0435, \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",fairly_fine_possibly_showers_early:"\u0414\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0431\u0440\u0435, \u0440\u0430\u043D\u043D\u0456 \u0437\u043B\u0438\u0432\u0438",showery_early_improving:"\u0420\u0430\u043D\u043D\u0456 \u0437\u043B\u0438\u0432\u0438, \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",changeable_mending:"\u041C\u0456\u043D\u043B\u0438\u0432\u0430, \u043F\u043E\u043A\u0440\u0430\u0449\u0443\u0454\u0442\u044C\u0441\u044F",rather_unsettled_clearing_later:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F \u043F\u0456\u0437\u043D\u0456\u0448\u0435",unsettled_probably_improving:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0435 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",unsettled_short_fine_intervals:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u043A\u043E\u0440\u043E\u0442\u043A\u0456 \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F",very_unsettled_finer_at_times:"\u0414\u0443\u0436\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0447\u0430\u0441\u043E\u043C \u043A\u0440\u0430\u0449\u0435",stormy_possibly_improving:"\u0428\u0442\u043E\u0440\u043C\u043E\u0432\u043E, \u043C\u043E\u0436\u043B\u0438\u0432\u0435 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",stable:"\u0421\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E",sager_fair_improving:"\u0413\u0430\u0440\u043D\u0430 \u043F\u043E\u0433\u043E\u0434\u0430, \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",sager_fair_tending_to_deteriorate:"\u041F\u043E\u043A\u0438 \u0434\u043E\u0431\u0440\u0435, \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",sager_fair_no_change:"\u0413\u0430\u0440\u043D\u0430 \u043F\u043E\u0433\u043E\u0434\u0430, \u0431\u0435\u0437 \u0437\u043C\u0456\u043D",sager_unsettled_rain_likely:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449 \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0438\u0439",sager_unsettled_probably_improving:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0435 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",sager_unsettled_rain_at_times:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449\u0456 \u043F\u0435\u0440\u0456\u043E\u0434\u0438\u0447\u043D\u043E",sager_changeable_becoming_fairer:"\u041C\u0456\u043D\u043B\u0438\u0432\u0430, \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F",sager_changeable_becoming_more_unsettled:"\u041C\u0456\u043D\u043B\u0438\u0432\u0430, \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",sager_variable_slowly_improving:"\u0417\u043C\u0456\u043D\u043D\u0430, \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u0435 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",sager_variable_slowly_deteriorating:"\u0417\u043C\u0456\u043D\u043D\u0430, \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u0435 \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",sager_variable_some_change:"\u0417\u043C\u0456\u043D\u043D\u0430, \u043E\u0447\u0456\u043A\u0443\u044E\u0442\u044C\u0441\u044F \u0437\u043C\u0456\u043D\u0438"},"zh-Hans":{settled_fine:"\u6674\u6717\u7A33\u5B9A",fine_weather:"\u5929\u6C14\u826F\u597D",fine_becoming_less_settled:"\u826F\u597D\uFF0C\u8D8B\u4E8E\u4E0D\u7A33\u5B9A",fairly_fine_showery_later:"\u8F83\u597D\uFF0C\u7A0D\u540E\u9635\u96E8",showery_becoming_more_unsettled:"\u9635\u96E8\uFF0C\u8F6C\u5DEE",unsettled_rain_later:"\u4E0D\u7A33\u5B9A\uFF0C\u7A0D\u540E\u964D\u96E8",rain_at_times_worse_later:"\u65F6\u6709\u964D\u96E8\uFF0C\u7A0D\u540E\u8F6C\u5DEE",rain_at_times_becoming_very_unsettled:"\u65F6\u6709\u964D\u96E8\uFF0C\u975E\u5E38\u4E0D\u7A33\u5B9A",very_unsettled_rain:"\u975E\u5E38\u4E0D\u7A33\u5B9A\uFF0C\u6709\u96E8",fine_possibly_showers:"\u826F\u597D\uFF0C\u53EF\u80FD\u6709\u9635\u96E8",fairly_fine_showers_likely:"\u8F83\u597D\uFF0C\u53EF\u80FD\u6709\u9635\u96E8",showery_bright_intervals:"\u9635\u96E8\uFF0C\u95F4\u6674",changeable_some_rain:"\u591A\u53D8\uFF0C\u6709\u5C0F\u96E8",unsettled_rain_at_times:"\u4E0D\u7A33\u5B9A\uFF0C\u65F6\u6709\u964D\u96E8",rain_at_frequent_intervals:"\u9891\u7E41\u964D\u96E8",stormy_much_rain:"\u66B4\u98CE\u96E8\uFF0C\u5927\u96E8",becoming_fine:"\u8F6C\u597D",fairly_fine_improving:"\u8F83\u597D\uFF0C\u6539\u5584\u4E2D",fairly_fine_possibly_showers_early:"\u8F83\u597D\uFF0C\u65E9\u671F\u53EF\u80FD\u6709\u9635\u96E8",showery_early_improving:"\u65E9\u671F\u9635\u96E8\uFF0C\u6539\u5584\u4E2D",changeable_mending:"\u591A\u53D8\uFF0C\u597D\u8F6C\u4E2D",rather_unsettled_clearing_later:"\u8F83\u4E0D\u7A33\u5B9A\uFF0C\u7A0D\u540E\u8F6C\u6674",unsettled_probably_improving:"\u4E0D\u7A33\u5B9A\uFF0C\u53EF\u80FD\u597D\u8F6C",unsettled_short_fine_intervals:"\u4E0D\u7A33\u5B9A\uFF0C\u77ED\u6682\u6674\u6717",very_unsettled_finer_at_times:"\u975E\u5E38\u4E0D\u7A33\u5B9A\uFF0C\u65F6\u6709\u597D\u8F6C",stormy_possibly_improving:"\u66B4\u98CE\u96E8\uFF0C\u53EF\u80FD\u597D\u8F6C",stable:"\u7A33\u5B9A",sager_fair_improving:"\u5929\u6C14\u826F\u597D\uFF0C\u6539\u5584\u4E2D",sager_fair_tending_to_deteriorate:"\u76EE\u524D\u826F\u597D\uFF0C\u8D8B\u4E8E\u8F6C\u5DEE",sager_fair_no_change:"\u5929\u6C14\u826F\u597D\uFF0C\u65E0\u660E\u663E\u53D8\u5316",sager_unsettled_rain_likely:"\u4E0D\u7A33\u5B9A\uFF0C\u53EF\u80FD\u6709\u96E8",sager_unsettled_probably_improving:"\u4E0D\u7A33\u5B9A\uFF0C\u53EF\u80FD\u597D\u8F6C",sager_unsettled_rain_at_times:"\u4E0D\u7A33\u5B9A\uFF0C\u65F6\u6709\u964D\u96E8",sager_changeable_becoming_fairer:"\u591A\u53D8\uFF0C\u8D8B\u4E8E\u597D\u8F6C",sager_changeable_becoming_more_unsettled:"\u591A\u53D8\uFF0C\u8D8B\u4E8E\u66F4\u4E0D\u7A33\u5B9A",sager_variable_slowly_improving:"\u591A\u53D8\uFF0C\u7F13\u6162\u597D\u8F6C",sager_variable_slowly_deteriorating:"\u591A\u53D8\uFF0C\u7F13\u6162\u8F6C\u5DEE",sager_variable_some_change:"\u591A\u53D8\uFF0C\u9884\u8BA1\u6709\u53D8\u5316"},"zh-Hant":{settled_fine:"\u6674\u6717\u7A69\u5B9A",fine_weather:"\u5929\u6C23\u826F\u597D",fine_becoming_less_settled:"\u826F\u597D\uFF0C\u8DA8\u65BC\u4E0D\u7A69\u5B9A",fairly_fine_showery_later:"\u8F03\u597D\uFF0C\u7A0D\u5F8C\u9663\u96E8",showery_becoming_more_unsettled:"\u9663\u96E8\uFF0C\u8F49\u5DEE",unsettled_rain_later:"\u4E0D\u7A69\u5B9A\uFF0C\u7A0D\u5F8C\u964D\u96E8",rain_at_times_worse_later:"\u6642\u6709\u964D\u96E8\uFF0C\u7A0D\u5F8C\u8F49\u5DEE",rain_at_times_becoming_very_unsettled:"\u6642\u6709\u964D\u96E8\uFF0C\u975E\u5E38\u4E0D\u7A69\u5B9A",very_unsettled_rain:"\u975E\u5E38\u4E0D\u7A69\u5B9A\uFF0C\u6709\u96E8",fine_possibly_showers:"\u826F\u597D\uFF0C\u53EF\u80FD\u6709\u9663\u96E8",fairly_fine_showers_likely:"\u8F03\u597D\uFF0C\u53EF\u80FD\u6709\u9663\u96E8",showery_bright_intervals:"\u9663\u96E8\uFF0C\u9593\u6674",changeable_some_rain:"\u591A\u8B8A\uFF0C\u6709\u5C0F\u96E8",unsettled_rain_at_times:"\u4E0D\u7A69\u5B9A\uFF0C\u6642\u6709\u964D\u96E8",rain_at_frequent_intervals:"\u983B\u7E41\u964D\u96E8",stormy_much_rain:"\u66B4\u98A8\u96E8\uFF0C\u5927\u96E8",becoming_fine:"\u8F49\u597D",fairly_fine_improving:"\u8F03\u597D\uFF0C\u6539\u5584\u4E2D",fairly_fine_possibly_showers_early:"\u8F03\u597D\uFF0C\u65E9\u671F\u53EF\u80FD\u6709\u9663\u96E8",showery_early_improving:"\u65E9\u671F\u9663\u96E8\uFF0C\u6539\u5584\u4E2D",changeable_mending:"\u591A\u8B8A\uFF0C\u597D\u8F49\u4E2D",rather_unsettled_clearing_later:"\u8F03\u4E0D\u7A69\u5B9A\uFF0C\u7A0D\u5F8C\u8F49\u6674",unsettled_probably_improving:"\u4E0D\u7A69\u5B9A\uFF0C\u53EF\u80FD\u597D\u8F49",unsettled_short_fine_intervals:"\u4E0D\u7A69\u5B9A\uFF0C\u77ED\u66AB\u6674\u6717",very_unsettled_finer_at_times:"\u975E\u5E38\u4E0D\u7A69\u5B9A\uFF0C\u6642\u6709\u597D\u8F49",stormy_possibly_improving:"\u66B4\u98A8\u96E8\uFF0C\u53EF\u80FD\u597D\u8F49",stable:"\u7A69\u5B9A",sager_fair_improving:"\u5929\u6C23\u826F\u597D\uFF0C\u6539\u5584\u4E2D",sager_fair_tending_to_deteriorate:"\u76EE\u524D\u826F\u597D\uFF0C\u8DA8\u65BC\u8F49\u5DEE",sager_fair_no_change:"\u5929\u6C23\u826F\u597D\uFF0C\u7121\u660E\u986F\u8B8A\u5316",sager_unsettled_rain_likely:"\u4E0D\u7A69\u5B9A\uFF0C\u53EF\u80FD\u6709\u96E8",sager_unsettled_probably_improving:"\u4E0D\u7A69\u5B9A\uFF0C\u53EF\u80FD\u597D\u8F49",sager_unsettled_rain_at_times:"\u4E0D\u7A69\u5B9A\uFF0C\u6642\u6709\u964D\u96E8",sager_changeable_becoming_fairer:"\u591A\u8B8A\uFF0C\u8DA8\u65BC\u597D\u8F49",sager_changeable_becoming_more_unsettled:"\u591A\u8B8A\uFF0C\u8DA8\u65BC\u66F4\u4E0D\u7A69\u5B9A",sager_variable_slowly_improving:"\u591A\u8B8A\uFF0C\u7DE9\u6162\u597D\u8F49",sager_variable_slowly_deteriorating:"\u591A\u8B8A\uFF0C\u7DE9\u6162\u8F49\u5DEE",sager_variable_some_change:"\u591A\u8B8A\uFF0C\u9810\u8A08\u6709\u8B8A\u5316"},ru:{settled_fine:"\u0421\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E",fine_weather:"\u042F\u0441\u043D\u0430\u044F \u043F\u043E\u0433\u043E\u0434\u0430",fine_becoming_less_settled:"\u042F\u0441\u043D\u043E, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",fairly_fine_showery_later:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E, \u043F\u043E\u0437\u0436\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043F\u0435\u0440\u0435\u043B\u0438\u0432\u043D\u044B\u0435 \u0434\u043E\u0436\u0434\u0438",showery_becoming_more_unsettled:"\u041F\u0435\u0440\u0435\u043B\u0438\u0432\u043D\u044B\u0435 \u0434\u043E\u0436\u0434\u0438, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0431\u043E\u043B\u0435\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",unsettled_rain_later:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u043F\u043E\u0437\u0436\u0435 \u0434\u043E\u0436\u0434\u044C",rain_at_times_worse_later:"\u041F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u043E\u0436\u0434\u044C, \u043F\u043E\u0437\u0436\u0435 \u0443\u0445\u0443\u0434\u0448\u0435\u043D\u0438\u0435",rain_at_times_becoming_very_unsettled:"\u041F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u043E\u0436\u0434\u044C, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043E\u0447\u0435\u043D\u044C \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",very_unsettled_rain:"\u041E\u0447\u0435\u043D\u044C \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0434\u043E\u0436\u0434\u044C",fine_possibly_showers:"\u042F\u0441\u043D\u043E, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043B\u0438\u0432\u043D\u0438",fairly_fine_showers_likely:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E, \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u044B \u043B\u0438\u0432\u043D\u0438",showery_bright_intervals:"\u041B\u0438\u0432\u043D\u0438, \u0441 \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u044F\u043C\u0438",changeable_some_rain:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043F\u043E\u0433\u043E\u0434\u0430, \u043C\u0435\u0441\u0442\u0430\u043C\u0438 \u0434\u043E\u0436\u0434\u044C",unsettled_rain_at_times:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0440\u0435\u043C\u0435\u043D\u0430\u043C\u0438 \u0434\u043E\u0436\u0434\u044C",rain_at_frequent_intervals:"\u0427\u0430\u0441\u0442\u044B\u0435 \u0434\u043E\u0436\u0434\u0438",stormy_much_rain:"\u0413\u0440\u043E\u0437\u043E\u0432\u0430\u044F \u043F\u043E\u0433\u043E\u0434\u0430, \u0441\u0438\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u0436\u0434\u044C",becoming_fine:"\u0421\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u044F\u0441\u043D\u043E",fairly_fine_improving:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u0442\u0441\u044F",fairly_fine_possibly_showers_early:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E, \u0443\u0442\u0440\u043E\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043B\u0438\u0432\u043D\u0438",showery_early_improving:"\u0420\u0430\u043D\u043D\u0438\u043C \u0443\u0442\u0440\u043E\u043C \u0434\u043E\u0436\u0434\u0438, \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u0435 \u043F\u043E\u0433\u043E\u0434\u044B",changeable_mending:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u0442\u0441\u044F",rather_unsettled_clearing_later:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u043F\u043E\u0437\u0436\u0435 \u043F\u0440\u043E\u044F\u0441\u043D\u044F\u0435\u0442\u0441\u044F",unsettled_probably_improving:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u0441\u044F",unsettled_short_fine_intervals:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0435 \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u044F",very_unsettled_finer_at_times:"\u041E\u0447\u0435\u043D\u044C \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0440\u0435\u043C\u0435\u043D\u0430\u043C\u0438 \u043F\u0440\u043E\u044F\u0441\u043D\u044F\u0435\u0442\u0441\u044F",stormy_possibly_improving:"\u0413\u0440\u043E\u0437\u043E\u0432\u043E, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u0441\u044F",stable:"\u0421\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",sager_fair_improving:"\u042F\u0441\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u0442\u0441\u044F",sager_fair_tending_to_deteriorate:"\u0421\u0435\u0439\u0447\u0430\u0441 \u044F\u0441\u043D\u043E, \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u044F \u043A \u0443\u0445\u0443\u0434\u0448\u0435\u043D\u0438\u044E",sager_fair_no_change:"\u042F\u0441\u043D\u043E, \u0431\u0435\u0437 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439",sager_unsettled_rain_likely:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0435\u0440\u043E\u044F\u0442\u0435\u043D \u0434\u043E\u0436\u0434\u044C",sager_unsettled_probably_improving:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u0441\u044F",sager_unsettled_rain_at_times:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0440\u0435\u043C\u0435\u043D\u0430\u043C\u0438 \u0434\u043E\u0436\u0434\u044C",sager_changeable_becoming_fairer:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u044F\u0441\u043D\u0435\u0435",sager_changeable_becoming_more_unsettled:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0431\u043E\u043B\u0435\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",sager_variable_slowly_improving:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u043F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u0442\u0441\u044F",sager_variable_slowly_deteriorating:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u043F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u0443\u0445\u0443\u0434\u0448\u0430\u0435\u0442\u0441\u044F",sager_variable_some_change:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u043E\u0436\u0438\u0434\u0430\u044E\u0442\u0441\u044F \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"},fr:{settled_fine:"Temps stable et beau",fine_weather:"Beau temps",fine_becoming_less_settled:"Beau, devenant moins stable",fairly_fine_showery_later:"Assez beau, averses plus tard",showery_becoming_more_unsettled:"Averses, devenant plus instable",unsettled_rain_later:"Instable, pluie plus tard",rain_at_times_worse_later:"Pluie par moments, aggravation plus tard",rain_at_times_becoming_very_unsettled:"Pluie par moments, devenant tr\xE8s instable",very_unsettled_rain:"Tr\xE8s instable, pluie",fine_possibly_showers:"Beau temps, averses possibles",fairly_fine_showers_likely:"Temps assez beau, averses probables",showery_bright_intervals:"Averses, \xE9claircies par moments",changeable_some_rain:"Temps variable, quelques averses",unsettled_rain_at_times:"Temps instable, averses par moments",rain_at_frequent_intervals:"Averses fr\xE9quentes",stormy_much_rain:"Orageux, fortes averses",becoming_fine:"Temps s'am\xE9liorant",fairly_fine_improving:"Temps assez beau, s'am\xE9liorant",fairly_fine_possibly_showers_early:"Temps assez beau, averses possibles en d\xE9but de journ\xE9e",showery_early_improving:"Averses t\xF4t dans la journ\xE9e, am\xE9lioration",changeable_mending:"Temps variable, s'am\xE9liorant",rather_unsettled_clearing_later:"Temps plut\xF4t instable, s'\xE9claircissant plus tard",unsettled_probably_improving:"Temps instable, s'am\xE9liorant probablement",unsettled_short_fine_intervals:"Temps instable, courtes \xE9claircies",very_unsettled_finer_at_times:"Temps tr\xE8s instable, s'am\xE9liorant par moments",stormy_possibly_improving:"Orageux, s'am\xE9liorant peut-\xEAtre",stable:"Stable",sager_fair_improving:"Temps clair, s'am\xE9liorant",sager_fair_tending_to_deteriorate:"Temps clair actuellement, tendance \xE0 la d\xE9t\xE9rioration",sager_fair_no_change:"Temps clair, pas de changement notable",sager_unsettled_rain_likely:"Temps instable, pluie probable",sager_unsettled_probably_improving:"Temps instable, s'am\xE9liorant probablement",sager_unsettled_rain_at_times:"Temps instable, averses par moments",sager_changeable_becoming_fairer:"Temps changeant, s'\xE9claircissant progressivement",sager_changeable_becoming_more_unsettled:"Temps changeant, devenant plus instable",sager_variable_slowly_improving:"Temps variable, s'am\xE9liorant lentement",sager_variable_slowly_deteriorating:"Temps variable, se d\xE9t\xE9riorant lentement",sager_variable_some_change:"Temps variable, quelques changements attendus"}},se={en:"Precip",ru:"\u041E\u0441\u0430\u0434\u043A\u0438",fr:"Pr\xE9cip.",de:"Niederschlag","de-AT":"Niederschlag",es:"Precip.",it:"Precip.",pl:"Opady","zh-Hans":"\u964D\u6C34","zh-Hant":"\u964D\u6C34",nl:"Neerslag",pt:"Precip.",uk:"\u041E\u043F\u0430\u0434\u0438",ja:"\u964D\u6C34",ko:"\uAC15\uC218",cs:"Sr\xE1\u017Eky",sv:"Nederb.",da:"Nedb.",nb:"Nedb.",hu:"Csapad\xE9k",tr:"Ya\u011F\u0131\u015F"},oe={en:{storm:"STORMY",rain:"RAIN",change:"CHANGE",fair:"FAIR",very_dry:"VERY DRY",falling:"FALLING",steady:"STEADY",rising:"RISING",delta_3h:"\u0394 3 HOURS",aneroid:"ANEROID BAROMETER",compensated:"Compensated for Temperature",current:"Current",history_3h:"3h ago",trend:"Trend"},ru:{storm:"\u0428\u0422\u041E\u0420\u041C",rain:"\u0414\u041E\u0416\u0414\u042C",change:"\u041F\u0415\u0420\u0415\u041C\u0415\u041D\u041D\u041E",fair:"\u042F\u0421\u041D\u041E",very_dry:"\u0421\u0423\u0428\u042C",falling:"\u041F\u0410\u0414\u0415\u041D\u0418\u0415",steady:"\u0421\u0422\u041E\u0419\u041A\u041E",rising:"\u0420\u041E\u0421\u0422",delta_3h:"\u0394 3 \u0427\u0410\u0421\u0410",aneroid:"\u0411\u0410\u0420\u041E\u041C\u0415\u0422\u0420-\u0410\u041D\u0415\u0420\u041E\u0418\u0414",compensated:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0438\u044F",current:"\u0422\u0435\u043A\u0443\u0449\u0435\u0435",history_3h:"3 \u0447 \u043D\u0430\u0437\u0430\u0434",trend:"\u0422\u0440\u0435\u043D\u0434"},de:{storm:"STURM",rain:"REGEN",change:"VER\xC4NDERLICH",fair:"SCH\xD6N",very_dry:"BEST\xC4NDIG",falling:"FALLEND",steady:"BEST\xC4NDIG",rising:"STEIGEND",delta_3h:"\u0394 3 STD",aneroid:"ANEROID-BAROMETER",compensated:"Temperaturkompensiert",current:"Aktuell",history_3h:"Vor 3 Std",trend:"Trend"},"de-AT":{storm:"STURM",rain:"REGEN",change:"VER\xC4NDERLICH",fair:"SCH\xD6N",very_dry:"BEST\xC4NDIG",falling:"FALLEND",steady:"BEST\xC4NDIG",rising:"STEIGEND",delta_3h:"\u0394 3 STD",aneroid:"ANEROID-BAROMETER",compensated:"Temperaturkompensiert",current:"Aktuell",history_3h:"Vor 3 Std",trend:"Trend"},es:{storm:"TEMPESTAD",rain:"LLUVIA",change:"VARIABLE",fair:"BUEN TIEMPO",very_dry:"MUY SECO",falling:"BAJANDO",steady:"ESTABLE",rising:"SUBIENDO",delta_3h:"\u0394 3 HORAS",aneroid:"BAR\xD3METRO ANEROIDE",compensated:"Compensado por Temperatura",current:"Actual",history_3h:"Hace 3h",trend:"Tendencia"},fr:{storm:"TEMP\xCATE",rain:"PLUIE",change:"VARIABLE",fair:"BEAU TEMPS",very_dry:"TR\xC8S SEC",falling:"BAISSE",steady:"STABLE",rising:"HAUSSE",delta_3h:"\u0394 3 HEURES",aneroid:"BAROM\xC8TRE AN\xC9RO\xCFDE",compensated:"Compens\xE9 en Temp\xE9rature",current:"Actuel",history_3h:"Il y a 3h",trend:"Tendance"},it:{storm:"TEMPESTA",rain:"PIOGGIA",change:"VARIABILE",fair:"BEL TEMPO",very_dry:"MOLTO SECCO",falling:"CALO",steady:"STABILE",rising:"SALITA",delta_3h:"\u0394 3 ORE",aneroid:"BAROMETRO ANEROIDE",compensated:"Compensato in Temperatura",current:"Attuale",history_3h:"3 ore fa",trend:"Tendenza"},pl:{storm:"BURZA",rain:"DESZCZ",change:"ZMIENNIE",fair:"POGODNIE",very_dry:"BARDZO SUCHO",falling:"SPADEK",steady:"STABILNIE",rising:"WZROST",delta_3h:"\u0394 3 GODZ",aneroid:"BAROMETR ANEROID",compensated:"Kompensacja Temperatury",current:"Bie\u017C\u0105ce",history_3h:"3h temu",trend:"Trend"},pt:{storm:"TEMPESTADE",rain:"CHUVA",change:"VARI\xC1VEL",fair:"BOM TEMPO",very_dry:"MUITO SECO",falling:"QUEDA",steady:"EST\xC1VEL",rising:"ALTA",delta_3h:"\u0394 3 HORAS",aneroid:"BAR\xD3METRO ANEROIDE",compensated:"Compensado por Temperatura",current:"Atual",history_3h:"H\xE1 3h",trend:"Tend\xEAncia"},uk:{storm:"\u0428\u0422\u041E\u0420\u041C",rain:"\u0414\u041E\u0429",change:"\u041C\u0406\u041D\u041B\u0418\u0412\u041E",fair:"\u042F\u0421\u041D\u041E",very_dry:"\u0421\u0423\u0428\u0410",falling:"\u041F\u0410\u0414\u0406\u041D\u041D\u042F",steady:"\u0421\u0422\u0406\u0419\u041A\u041E",rising:"\u0417\u0420\u041E\u0421\u0422\u0410\u041D\u041D\u042F",delta_3h:"\u0394 3 \u0413\u041E\u0414",aneroid:"\u0411\u0410\u0420\u041E\u041C\u0415\u0422\u0420-\u0410\u041D\u0415\u0420\u041E\u0407\u0414",compensated:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0430 \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0456\u044F",current:"\u041F\u043E\u0442\u043E\u0447\u043D\u0438\u0439",history_3h:"3 \u0433\u043E\u0434 \u0442\u043E\u043C\u0443",trend:"\u0422\u0440\u0435\u043D\u0434"},"zh-Hans":{storm:"\u66B4\u98CE\u96E8",rain:"\u964D\u96E8",change:"\u591A\u53D8",fair:"\u6674\u6717",very_dry:"\u5E72\u71E5",falling:"\u4E0B\u964D",steady:"\u7A33\u5B9A",rising:"\u4E0A\u5347",delta_3h:"\u0394 3\u5C0F\u65F6",aneroid:"\u65E0\u6DB2\u6C14\u538B\u8868",compensated:"\u6E29\u5EA6\u8865\u507F\u578B",current:"\u5F53\u524D",history_3h:"3\u5C0F\u65F6\u524D",trend:"\u8D8B\u52BF"},"zh-Hant":{storm:"\u66B4\u98A8\u96E8",rain:"\u964D\u96E8",change:"\u591A\u8B8A",fair:"\u6674\u6717",very_dry:"\u4E7E\u71E5",falling:"\u4E0B\u964D",steady:"\u7A69\u5B9A",rising:"\u4E0A\u5347",delta_3h:"\u0394 3\u5C0F\u6642",aneroid:"\u7121\u6DB2\u6C23\u58D3\u8868",compensated:"\u6EAB\u5EA6\u88DC\u511F\u578B",current:"\u7576\u524D",history_3h:"3\u5C0F\u6642\u524D",trend:"\u8DA8\u52E2"},ja:{storm:"\u5D50",rain:"\u96E8",change:"\u5909\u5316",fair:"\u597D\u5929",very_dry:"\u4E7E\u71E5",falling:"\u4F4E\u4E0B",steady:"\u5B89\u5B9A",rising:"\u4E0A\u6607",delta_3h:"\u0394 3\u6642\u9593",aneroid:"\u30A2\u30CD\u30ED\u30A4\u30C9\u6C17\u5727\u8A08",compensated:"\u6E29\u5EA6\u88DC\u6B63\u6E08",current:"\u73FE\u5728",history_3h:"3\u6642\u9593\u524D",trend:"\u50BE\u5411"},ko:{storm:"\uD3ED\uD48D",rain:"\uBE44",change:"\uBCC0\uB355",fair:"\uB9D1\uC74C",very_dry:"\uAC74\uC870",falling:"\uD558\uAC15",steady:"\uC548\uC815",rising:"\uC0C1\uC2B9",delta_3h:"\u0394 3\uC2DC\uAC04",aneroid:"\uC544\uB124\uB85C\uC774\uB4DC \uAE30\uC555\uACC4",compensated:"\uC628\uB3C4 \uBCF4\uC815\uB428",current:"\uD604\uC7AC",history_3h:"3\uC2DC\uAC04 \uC804",trend:"\uCD94\uC138"},cs:{storm:"BOU\u0158E",rain:"D\xC9\u0160\u0164",change:"PROM\u011ANLIVO",fair:"P\u011AKN\u011A",very_dry:"VELMI SUCHO",falling:"POKLES",steady:"UST\xC1LENO",rising:"VZESTUP",delta_3h:"\u0394 3 HOD",aneroid:"ANEROIDN\xCD BAROMETR",compensated:"Teplotn\u011B kompenzov\xE1no",current:"Nyn\xED",history_3h:"P\u0159ed 3h",trend:"Trend"},sv:{storm:"STORM",rain:"REGN",change:"OMBYTLIGT",fair:"VACKERT",very_dry:"MYCKET TORRT",falling:"FALLANDE",steady:"STADIGT",rising:"STIGANDE",delta_3h:"\u0394 3 TIM",aneroid:"ANEROIDBAROMETER",compensated:"Temperaturkompenserad",current:"Nu",history_3h:"3 tim sedan",trend:"Trend"},da:{storm:"STORM",rain:"REGN",change:"FORANDERLIGT",fair:"SMUKT",very_dry:"MEGET T\xD8RT",falling:"FALDENDE",steady:"STABILT",rising:"STIGENDE",delta_3h:"\u0394 3 TIMER",aneroid:"ANEROIDBAROMETER",compensated:"Temperaturkompenseret",current:"Nu",history_3h:"3t siden",trend:"Trend"},nb:{storm:"STORM",rain:"REGN",change:"SKIFTENDE",fair:"PENT",very_dry:"SV\xC6RT T\xD8RT",falling:"FALLENDE",steady:"STABILT",rising:"STIGENDE",delta_3h:"\u0394 3 TIMER",aneroid:"ANEROIDBAROMETER",compensated:"Temperaturkompensert",current:"N\xE5",history_3h:"3t siden",trend:"Trend"},nl:{storm:"STORM",rain:"REGEN",change:"VERANDERLIJK",fair:"MOOI",very_dry:"ZEER DROOG",falling:"DALEND",steady:"STABIEL",rising:"STIJGEND",delta_3h:"\u0394 3 UUR",aneroid:"ANERO\xCFDE BAROMETER",compensated:"Temperatuurgecompenseerd",current:"Nu",history_3h:"3u geleden",trend:"Trend"},hu:{storm:"VIHAR",rain:"ES\u0150",change:"V\xC1LTOZ\xC9KONY",fair:"SZ\xC9P ID\u0150",very_dry:"NAGYON SZ\xC1RAZ",falling:"S\xDCLLYED",steady:"\xC1LLAND\xD3",rising:"EMELKEDIK",delta_3h:"\u0394 3 \xD3RA",aneroid:"ANEROID BAROM\xC9TER",compensated:"H\u0151m\xE9rs\xE9klet-kompenz\xE1lt",current:"Jelenlegi",history_3h:"3 \xF3r\xE1ja",trend:"Trend"},tr:{storm:"FIRTINA",rain:"YA\u011EMUR",change:"DE\u011E\u0130\u015EKEN",fair:"A\xC7IK",very_dry:"\xC7OK KURU",falling:"D\xDC\u015E\xDC\u015E",steady:"SAB\u0130T",rising:"Y\xDCKSEL\u0130\u015E",delta_3h:"\u0394 3 SAAT",aneroid:"ANERO\u0130T BAROMETRE",compensated:"S\u0131cakl\u0131k Dengelemeli",current:"\u015Eimdiki",history_3h:"3s \xF6nce",trend:"Trend"}};function Y(d){if(!d)return"en";if(d==="auto")return"auto";if(d.startsWith("zh"))return d.includes("Hant")||d.includes("TW")||d.includes("HK")?"zh-Hant":"zh-Hans";if(d.startsWith("pt"))return"pt";if(d.startsWith("nb")||d.startsWith("no")||d.startsWith("nn"))return"nb";if(ae.has(d))return d;let e=d.split("-")[0];return ae.has(e)?e:"en"}function le(d,e){let i=Y(d==="auto"?e||"en":d);return ne[i]||ne.en}function de(d,e){let i=Y(d==="auto"?e||"en":d);return se[i]||se.en}function ce(d,e){let i=Y(d==="auto"?e||"en":d);return oe[i]||oe.en}console.info("%c ZAMBRETTI & SAGER WEATHER CARD %c v2.1.1 ","color: white; background: #d97706; font-weight: 700; border-radius: 3px 0 0 3px; padding: 2px 5px;","color: #92400e; background: #fef3c7; font-weight: 700; border-radius: 0 3px 3px 0; padding: 2px 5px;");var J={settled_fine:"sunny",fine_weather:"sunny",fine_becoming_less_settled:"partlycloudy",fairly_fine_showery_later:"partlycloudy",showery_becoming_more_unsettled:"rainy",unsettled_rain_later:"cloudy",rain_at_times_worse_later:"rainy",rain_at_times_becoming_very_unsettled:"pouring",very_unsettled_rain:"pouring",fine_possibly_showers:"partlycloudy",fairly_fine_showers_likely:"partlycloudy",showery_bright_intervals:"rainy",changeable_some_rain:"cloudy",unsettled_rain_at_times:"rainy",rain_at_frequent_intervals:"pouring",stormy_much_rain:"lightning-rainy",becoming_fine:"partlycloudy",fairly_fine_improving:"partlycloudy",fairly_fine_possibly_showers_early:"partlycloudy",showery_early_improving:"rainy",changeable_mending:"cloudy",rather_unsettled_clearing_later:"cloudy",unsettled_probably_improving:"cloudy",unsettled_short_fine_intervals:"cloudy",very_unsettled_finer_at_times:"pouring",stormy_possibly_improving:"lightning-rainy",stable:"partlycloudy"},_e={sunny:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
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
  </svg>`},be={settled_fine:"sunny",fine_weather:"sunny",fine_becoming_less_settled:"partlycloudy",fairly_fine_showery_later:"partlycloudy",showery_becoming_more_unsettled:"rainy",unsettled_rain_later:"cloudy",rain_at_times_worse_later:"rainy",rain_at_times_becoming_very_unsettled:"pouring",very_unsettled_rain:"pouring",fine_possibly_showers:"partlycloudy",fairly_fine_showers_likely:"partlycloudy",showery_bright_intervals:"rainy",changeable_some_rain:"cloudy",unsettled_rain_at_times:"rainy",rain_at_frequent_intervals:"pouring",stormy_much_rain:"lightning-rainy",becoming_fine:"partlycloudy",fairly_fine_improving:"partlycloudy",fairly_fine_possibly_showers_early:"partlycloudy",showery_early_improving:"rainy",changeable_mending:"cloudy",rather_unsettled_clearing_later:"cloudy",unsettled_probably_improving:"cloudy",unsettled_short_fine_intervals:"cloudy",very_unsettled_finer_at_times:"pouring",stormy_possibly_improving:"lightning-rainy",stable:"partlycloudy"};function ge(d,e){return d==="settled_fine"||d==="fine_weather"?e?"night_clear":"sunny":be[d]||"partlycloudy"}function v(d){return d==null?"":String(d).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function te(d,e=""){let i=_e[d]||_e.partlycloudy;if(!e)return i.replace("<svg ",'<svg role="img" ');let r=v(e);return i.replace("<svg ",`<svg role="img" aria-label="${r}" `)}var ve={sunny:{bg:"linear-gradient(135deg,#FF8C00 0%,#FFA500 40%,#FFD700 100%)"},night_clear:{bg:"linear-gradient(135deg,#070B14 0%,#0F172A 50%,#1E293B 100%)"},partlycloudy:{bg:"linear-gradient(135deg,#FF8C00 0%,#BBDEFB 50%,#FFFFFF 100%)"},cloudy:{bg:"linear-gradient(135deg,#606C76 0%,#7E8A95 50%,#A2AEB8 100%)"},rainy:{bg:"linear-gradient(135deg,#425363 0%,#54677A 50%,#70879C 100%)"},pouring:{bg:"linear-gradient(135deg,#1C242D 0%,#2B3745 50%,#3F5063 100%)"},"lightning-rainy":{bg:"linear-gradient(135deg,#23153A 0%,#43286B 50%,#6943A3 100%)"},snowy:{bg:"linear-gradient(135deg,#B8C6D4 0%,#DDE5ED 50%,#F4F7FA 100%)"},windy:{bg:"linear-gradient(135deg,#5F9EA0 0%,#87B6B8 50%,#B4D3D4 100%)"}},we={bg:"linear-gradient(135deg,#1565C0 0%,#1976D2 100%)"};function xe(d){return ve[d]||we}function ke(d,e){if(e===void 0||e>=100||typeof e!="number"||isNaN(e))return d;let i=Math.max(0,Math.min(100,e)),r=Math.round(i/100*255).toString(16).padStart(2,"0").toUpperCase();return d.replace(/#([0-9a-fA-F]{6})(?![0-9a-fA-F])/gi,`#$1${r}`)}var re=0;function he(d){return d==null?"":["N","NE","E","SE","S","SW","W","NW"][Math.round(d%360/45)%8]}function pe(d,e,i){if(d==null)return null;let r=parseFloat(d);if(isNaN(r))return null;let o=(i||"m/s").toLowerCase().replace(" ",""),a=(e||"m/s").toLowerCase().replace(" ",""),s;return o==="km/h"||o==="kmh"?s=r/3.6:o==="mph"?s=r/2.23694:o==="kn"||o==="kt"||o==="knots"?s=r/1.94384:s=r,a==="mph"?`${(s*2.23694).toFixed(1)} mph`:a==="km/h"||a==="kmh"?`${Math.round(s*3.6)} km/h`:a==="kn"||a==="kt"?`${(s*1.94384).toFixed(1)} kn`:`${s.toFixed(1)} m/s`}function Se(d,e,i,r={},o={}){let a=d!=null&&!isNaN(d)?d:1013.25,s=e!=null&&!isNaN(e)?e:a,l=i!=null&&!isNaN(i)?i:a-s,w=960,h=1060,_=-120,m=120;function f(t){let n=Math.max(w,Math.min(h,t));return _+(n-w)/(h-w)*(m-_)}function S(t){return Math.max(-4,Math.min(4,t))/4*45}let A=f(a),k=f(s),N=S(l),j=o.showSubdial!==!1,p="vb"+ ++re,z=200,b=200,V="",C="";for(let t=960;t<=1060;t+=1){let c=(f(t)-90)*(Math.PI/180),g=t%10===0,u=t%5===0,B=168,O=g?152:u?157:162,U=g?1.6:u?1:.6,L=(z+B*Math.cos(c)).toFixed(1),G=(b+B*Math.sin(c)).toFixed(1),Z=(z+O*Math.cos(c)).toFixed(1),W=(b+O*Math.sin(c)).toFixed(1);if(V+=`<line x1="${L}" y1="${G}" x2="${Z}" y2="${W}" stroke="#2e200c" stroke-width="${U}" stroke-linecap="round"/>`,g){let Q=(z+138*Math.cos(c)).toFixed(1),q=(b+138*Math.sin(c)+3.5).toFixed(1);C+=`<text x="${Q}" y="${q}" font-size="9" font-weight="800" fill="#1c1204">${t}</text>`}}for(let t=720;t<=795;t+=5){let n=t*1.33322;if(n>=w&&n<=h){let g=(f(n)-90)*(Math.PI/180),u=(z+143*Math.cos(g)).toFixed(1),B=(b+143*Math.sin(g)).toFixed(1),O=(z+148*Math.cos(g)).toFixed(1),U=(b+148*Math.sin(g)).toFixed(1);if(V+=`<line x1="${u}" y1="${B}" x2="${O}" y2="${U}" stroke="#7d6739" stroke-width="0.8"/>`,t%10===0){let L=(z+125*Math.cos(g)).toFixed(1),G=(b+125*Math.sin(g)+2.5).toFixed(1);C+=`<text x="${L}" y="${G}" font-size="7" font-weight="700" fill="#5e491c">${t}</text>`}}}let D=v(r.storm||"STORMY"),F=v(r.rain||"RAIN"),E=v(r.change||"CHANGE"),R=v(r.fair||"FAIR"),I=v(r.very_dry||"VERY DRY"),x=v(r.falling||"FALLING"),y=v(r.steady||"STEADY"),T=v(r.rising||"RISING"),$=v(r.delta_3h||"\u0394 3 HOURS"),M=v(r.aneroid||"ANEROID BAROMETER"),H=v(r.compensated||"Compensated for Temperature");return`<svg role="img" aria-label="${v(`${r.aneroid||"ANEROID BAROMETER"}: ${a.toFixed(1)} hPa, \u03943h ${l>=0?"+":""}${l.toFixed(1)} hPa`)}" viewBox="0 0 400 400" class="vintage-dial-svg" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="${p}_bezel" cx="50%" cy="50%" r="50%">
        <stop offset="85%" stop-color="#4a3718" />
        <stop offset="92%" stop-color="#cfab56" />
        <stop offset="96%" stop-color="#fdf3a9" />
        <stop offset="98%" stop-color="#8a6721" />
        <stop offset="100%" stop-color="#2a1d08" />
      </radialGradient>
      <linearGradient id="${p}_brass" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d4af37" />
        <stop offset="25%" stop-color="#fff2a3" />
        <stop offset="50%" stop-color="#99731d" />
        <stop offset="75%" stop-color="#ffd966" />
        <stop offset="100%" stop-color="#5e440e" />
      </linearGradient>
      <radialGradient id="${p}_parchment" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fffdf5" />
        <stop offset="65%" stop-color="#f5eed7" />
        <stop offset="88%" stop-color="#e6dcbc" />
        <stop offset="100%" stop-color="#c4b48d" />
      </radialGradient>
      <linearGradient id="${p}_steel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1c2536" />
        <stop offset="50%" stop-color="#2b3b54" />
        <stop offset="100%" stop-color="#0f1622" />
      </linearGradient>
      <linearGradient id="${p}_gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#e5c158" />
        <stop offset="50%" stop-color="#fff5b8" />
        <stop offset="100%" stop-color="#9a741c" />
      </linearGradient>
      <filter id="${p}_shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
      </filter>
    </defs>

    <!-- Outer Brass Bezel -->
    <circle cx="200" cy="200" r="196" fill="url(#${p}_bezel)" stroke="#1a1103" stroke-width="2" />
    
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
    <circle cx="200" cy="200" r="176" fill="none" stroke="url(#${p}_brass)" stroke-width="8" />
    <circle cx="200" cy="200" r="172" fill="none" stroke="#2a1e09" stroke-width="1.5" />

    <!-- Parchment Dial Face -->
    <circle cx="200" cy="200" r="170" fill="url(#${p}_parchment)" />
    <circle cx="200" cy="200" r="170" fill="none" stroke="#8c7849" stroke-width="1" opacity="0.6" />
    <circle cx="200" cy="200" r="148" fill="none" stroke="#a08955" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.7" />
    <circle cx="200" cy="200" r="115" fill="none" stroke="#a08955" stroke-width="0.6" opacity="0.5" />

    <!-- Weather Condition Arc Labels -->
    <g font-family="'Cinzel', Georgia, serif" font-weight="800" text-anchor="middle" fill="#2d1f0e">
      <text transform="translate(110, 275) rotate(-45)" font-size="11" letter-spacing="1">${D}</text>
      <text transform="translate(96, 185) rotate(-22)" font-size="11.5" letter-spacing="1.5">${F}</text>
      <text transform="translate(200, 94)" font-size="13" font-weight="900" letter-spacing="2.5" fill="#1f1406">${E}</text>
      <text transform="translate(304, 185) rotate(22)" font-size="11.5" letter-spacing="1.5">${R}</text>
      <text transform="translate(290, 275) rotate(45)" font-size="11" letter-spacing="1">${I}</text>
    </g>

    <!-- Center Inscription -->
    <g text-anchor="middle">
      <text x="200" y="145" font-family="'Cinzel', Georgia, serif" font-size="11" font-weight="bold" fill="#523d1c" letter-spacing="3">${M}</text>
      <path d="M 140 152 Q 200 156 260 152" fill="none" stroke="#7a5d2e" stroke-width="0.8" />
      <text x="200" y="166" font-family="'Playfair Display', Georgia, serif" font-style="italic" font-size="9" fill="#755a2f">${H}</text>
    </g>

    <!-- Sub-Dial: 3h Pressure Trend Indicator -->
    ${j?`
    <g class="v-subdial" transform="translate(200, 260)">
      <circle cx="0" cy="0" r="32" fill="#f4ebd0" stroke="#8a7346" stroke-width="1.2" />
      <circle cx="0" cy="0" r="30" fill="none" stroke="#b09b6c" stroke-width="0.5" stroke-dasharray="1.5 1.5" />
      <text x="-18" y="16" font-family="'Cinzel', Georgia, serif" font-size="6.5" font-weight="bold" fill="#8f2d18" text-anchor="middle">${x}</text>
      <text x="0" y="-19" font-family="'Cinzel', Georgia, serif" font-size="6.5" font-weight="bold" fill="#4d3b20" text-anchor="middle">${y}</text>
      <text x="18" y="16" font-family="'Cinzel', Georgia, serif" font-size="6.5" font-weight="bold" fill="#1b5e20" text-anchor="middle">${T}</text>
      <text x="0" y="11" font-family="sans-serif" font-size="6" fill="#7a6745" text-anchor="middle">${$}</text>
      <line x1="-24" y1="0" x2="-20" y2="0" stroke="#4a391e" stroke-width="0.8"/>
      <line x1="0" y1="-24" x2="0" y2="-20" stroke="#4a391e" stroke-width="0.8"/>
      <line x1="24" y1="0" x2="20" y2="0" stroke="#4a391e" stroke-width="0.8"/>
      <g class="v-needle-trend" style="transform-origin:0px 0px; transform:rotate(${N.toFixed(1)}deg);">
        <path d="M -1.5 6 L -0.6 -22 L 0.6 -22 L 1.5 6 Z" fill="#8f2d18" />
        <circle cx="0" cy="0" r="3" fill="#3a2a11" stroke="#ffd966" stroke-width="0.6"/>
      </g>
    </g>`:""}

    <!-- Scale Ticks & Numbers -->
    <g stroke-linecap="round">${V}</g>
    <g font-family="'Cinzel', Georgia, serif" font-size="8.5" font-weight="700" fill="#2e200c" text-anchor="middle">${C}</g>

    <!-- NEEDLE 1: Reference Marker (3 Hours Ago) - Gold/Brass -->
    <g class="v-needle-ref" style="transform-origin:200px 200px; transform:rotate(${k.toFixed(1)}deg);" filter="url(#${p}_shadow)">
      <path d="M 197 60 L 200 48 L 203 60 L 201 100 L 199 100 Z" fill="url(#${p}_gold)" stroke="#664d12" stroke-width="0.7"/>
      <circle cx="200" cy="54" r="2.2" fill="#ffeaa7"/>
      <circle cx="200" cy="245" r="7" fill="none" stroke="url(#${p}_gold)" stroke-width="1.8"/>
      <line x1="200" y1="200" x2="200" y2="238" stroke="url(#${p}_gold)" stroke-width="1.8"/>
    </g>

    <!-- NEEDLE 2: Main Active Pressure Needle - Blued Steel -->
    <g class="v-needle-main" style="transform-origin:200px 200px; transform:rotate(${A.toFixed(1)}deg);" filter="url(#${p}_shadow)">
      <path d="M 198.5 200 L 197 105 Q 194 92 195.5 82 Q 197 72 200 45 Q 203 72 204.5 82 Q 206 92 203 105 L 201.5 200 Z" fill="url(#${p}_steel)"/>
      <line x1="200" y1="52" x2="200" y2="190" stroke="#718ba8" stroke-width="0.8" opacity="0.6"/>
      <polygon points="200,80 203.5,88 200,96 196.5,88" fill="#d4af37" stroke="#332408" stroke-width="0.5"/>
      <circle cx="200" cy="88" r="1.2" fill="#1b2838"/>
      <path d="M 198 200 L 196.5 240 Q 192 250 200 256 Q 208 250 203.5 240 L 202 200 Z" fill="url(#${p}_steel)"/>
      <circle cx="200" cy="245" r="4.5" fill="#151d2a" stroke="#d4af37" stroke-width="0.8"/>
    </g>

    <!-- Central Brass Hub -->
    <g filter="url(#${p}_shadow)">
      <circle cx="200" cy="200" r="18" fill="url(#${p}_brass)" stroke="#3d2c0e" stroke-width="1.5"/>
      <circle cx="200" cy="200" r="15" fill="#a8842c" stroke="#523c10" stroke-width="1"/>
      <circle cx="200" cy="200" r="9" fill="url(#${p}_bezel)" stroke="#2b1c05" stroke-width="1"/>
      <circle cx="200" cy="200" r="5" fill="#fdf0a6"/>
      <line x1="197" y1="197" x2="203" y2="203" stroke="#523c10" stroke-width="1"/>
    </g>

    <!-- Glass Reflection -->
    <circle cx="200" cy="200" r="170" fill="none" opacity="0.3" pointer-events="none"/>
  </svg>`}function me(d,e=""){let i=d!=null&&!Number.isNaN(d),r=i?Math.max(0,Math.min(100,d)):0,o=44,a=60,s=60,l=2*Math.PI*o,w=l*.75,h=l-w,_=w*(r/100),m=l-_,f=-225,S=r<30?"#90CAF9":r<60?"#42A5F5":"#1565C0",A="pw"+ ++re,k=i?`${r}%`:"\u2014",N=e?`${e}: ${k}`:`Precipitation: ${k}`;return`<svg role="img" aria-label="${v(N)}" viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <defs>
      <linearGradient id="${A}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${S}" stop-opacity="0.75"/>
        <stop offset="100%" stop-color="${S}" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <circle cx="${a}" cy="${s}" r="${o}" fill="none"
      stroke="rgba(255,255,255,0.20)" stroke-width="10"
      stroke-dasharray="${w.toFixed(2)} ${h.toFixed(2)}"
      stroke-linecap="round" transform="rotate(${f} ${a} ${s})"/>
    <circle cx="${a}" cy="${s}" r="${o}" fill="none"
      stroke="url(#${A})" stroke-width="10"
      stroke-dasharray="${_.toFixed(2)} ${m.toFixed(2)}"
      stroke-linecap="round" transform="rotate(${f} ${a} ${s})"
      style="transition:stroke-dasharray .9s ease"/>
    <text x="${a}" y="${s}" text-anchor="middle" dominant-baseline="central"
      fill="white" font-size="22" font-weight="900"
      font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">${k}</text>
  </svg>`}function ue(d,e,i){if(!d||d.length===0)return'<div class="tl-empty">\u2014 no trend data yet \u2014</div>';let r=i?28:34;function o(s){return`${String(s.getHours()).padStart(2,"0")}:${String(s.getMinutes()).padStart(2,"0")}`}return`<div class="tl-inner">${d.map((s,l)=>{let w=l===d.length-1,h=be[s.state]||"partlycloudy",_=e[s.state]||s.state||"\u2014",m=_.split(/[,\s]+/)[0],f=o(s.t),S=s.isCurrent||w?" tl-current":"",A=te(h,`${f}: ${_}`),k=w?"":'<div class="tl-arrow">\u203A</div>';return`
      <div class="tl-step${S}">
        <div class="tl-icon" style="width:${r}px;height:${r}px">${A}</div>
        <div class="tl-lbl">${v(m)}</div>
        <div class="tl-time">${v(f)}</div>
      </div>
      ${k}`}).join("")}</div>`}function fe(d,e,i){if(!d||d.length<2)return'<div class="hchart-empty">\u2014 no history data yet \u2014</div>';let r=560,o=i?150:200,a={top:22,right:16,bottom:38,left:56},s=r-a.left-a.right,l=o-a.top-a.bottom,w=i?11:13,h="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",_="hc"+ ++re,m=d.filter(t=>t.p!=null),f=d.filter(t=>t.precip!=null);if(m.length>=4){let t=[...m].map(u=>u.p).sort((u,B)=>u-B),n=t[Math.floor(t.length*.25)],c=t[Math.floor(t.length*.75)],g=c-n;m=m.filter(u=>u.p>=n-3*g&&u.p<=c+3*g)}let S=980,A=1040;if(m.length){let t=m.map(u=>u.p),n=Math.min(...t),c=Math.max(...t),g=Math.max(2,(c-n)*.15);S=Math.floor(n-g),A=Math.ceil(c+g)}let k=d[0].t.getTime(),N=d[d.length-1].t.getTime(),j=N-k||1;function p(t){return a.left+(t.getTime()-k)/j*s}function z(t){return a.top+(1-(t-S)/(A-S))*l}function b(t){return a.top+(1-t/100)*l}function V(t,n){return t.length?t.map((c,g)=>`${g===0?"M":"L"}${p(c.t).toFixed(1)},${n(g===0?t[0][n===z?"p":"precip"]:c[n===z?"p":"precip"]).toFixed(1)}`).join(" "):""}let C=m.map((t,n)=>`${n===0?"M":"L"}${p(t.t).toFixed(1)},${z(t.p).toFixed(1)}`).join(" "),D=f.map((t,n)=>`${n===0?"M":"L"}${p(t.t).toFixed(1)},${b(t.precip).toFixed(1)}`).join(" "),F=m.length?C+` L${p(m[m.length-1].t).toFixed(1)},${(a.top+l).toFixed(1)} L${p(m[0].t).toFixed(1)},${(a.top+l).toFixed(1)} Z`:"",E=i?3:4,R=Math.ceil((A-S)/(E-1)/5)*5,I=[];for(let t=Math.ceil(S/5)*5;t<=A;t+=R)I.push(t);let x=[0,25,50,75,100],y=[];{let t=new Date(k);t.setMinutes(0,0,0),t.setHours(t.getHours()+1);let n=new Date(t);for(;n.getTime()<=N;)n.getHours()%6===0&&y.push({t:new Date(n),label:`${String(n.getHours()).padStart(2,"0")}:00`}),n.setHours(n.getHours()+1)}let T=p(new Date(N)),$="";if(m.length){let t=m[m.length-1],n=p(t.t),c=z(t.p);$=`
      <circle cx="${n.toFixed(1)}" cy="${c.toFixed(1)}" r="5" fill="#90CAF9" stroke="#fff" stroke-width="1.5"/>
      <text x="${(n-8).toFixed(1)}" y="${(c+14).toFixed(1)}" text-anchor="middle"
        fill="#90CAF9" font-size="${w+2}" font-weight="800"
        font-family="${h}">${t.p.toFixed(1)}</text>`}let M="";if(f.length){let t=f[f.length-1],n=p(t.t),c=b(t.precip);M=`
      <circle cx="${n.toFixed(1)}" cy="${c.toFixed(1)}" r="4.5" fill="rgba(255,255,255,0.90)" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
      <text x="${(n-8).toFixed(1)}" y="${(c-10).toFixed(1)}" text-anchor="middle"
        fill="rgba(255,255,255,0.85)" font-size="${w+1}" font-weight="700"
        font-family="${h}">${t.precip.toFixed(0)}%</text>`}let H=f.length?D+` L${p(f[f.length-1].t).toFixed(1)},${(a.top+l).toFixed(1)} L${p(f[0].t).toFixed(1)},${(a.top+l).toFixed(1)} Z`:"",P="24-hour pressure and precipitation chart";if(m.length){let t=m.map(n=>n.p);P=`24-hour pressure and precipitation chart: pressure from ${Math.min(...t).toFixed(1)} to ${Math.max(...t).toFixed(1)} hPa`}return`<svg role="img" aria-label="${v(P)}" viewBox="0 0 ${r} ${o}" class="history-chart-svg" xmlns="http://www.w3.org/2000/svg"
    style="width:100%;height:100%;display:block;overflow:visible;cursor:crosshair">
    <defs>
      <linearGradient id="${_}_p" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="#90CAF9" stop-opacity="0.40"/>
        <stop offset="100%" stop-color="#90CAF9" stop-opacity="0.05"/>
      </linearGradient>
      <linearGradient id="${_}_pr" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="rgba(255,255,255,0.22)" stop-opacity="1"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.02)" stop-opacity="1"/>
      </linearGradient>
      <clipPath id="${_}_clip">
        <rect x="${a.left}" y="${a.top}" width="${s}" height="${l}"/>
      </clipPath>
    </defs>

    <!-- Horizontal grid lines (pressure ticks) -->
    ${I.map(t=>{let n=z(t).toFixed(1);return`<line x1="${a.left}" y1="${n}" x2="${a.left+s}" y2="${n}"
        stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-dasharray="4 5"/>`}).join("")}
    <!-- Vertical grid lines (time ticks) -->
    ${y.map(({t})=>{let n=p(t).toFixed(1);return`<line x1="${n}" y1="${a.top}" x2="${n}" y2="${a.top+l}"
        stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="2 5"/>`}).join("")}

    <g clip-path="url(#${_}_clip)">
      <!-- Precip area fill -->
      ${H?`<path d="${H}" fill="url(#${_}_pr)"/>`:""}
      <!-- Precip line: dashed white, visible on any background -->
      ${D?`<path d="${D}" fill="none" stroke="rgba(255,255,255,0.72)"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        stroke-dasharray="5 4"/>`:""}
      <!-- Pressure area fill -->
      ${F?`<path d="${F}" fill="url(#${_}_p)"/>`:""}
      <!-- Pressure line: solid, on top -->
      ${C?`<path d="${C}" fill="none" stroke="#90CAF9"
        stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>`:""}
      ${$}
      ${M}
    </g>

    <!-- Left Y-axis labels (pressure) -->
    ${I.map(t=>{let n=z(t);return n<a.top-4||n>a.top+l+4?"":`<text x="${a.left-7}" y="${n.toFixed(1)}" text-anchor="end"
        dominant-baseline="middle" fill="rgba(255,255,255,0.70)"
        font-size="${w}" font-family="${h}">${t}</text>`}).join("")}

    <!-- Right Y-axis labels (precip %) \u2014 positioned inside right edge -->
    ${x.map(t=>{let n=b(t);return n<a.top-4||n>a.top+l+4?"":`<text x="${(a.left+s-2).toFixed(1)}" y="${n.toFixed(1)}" text-anchor="end"
        dominant-baseline="middle" fill="rgba(255,255,255,0.45)"
        font-size="${w-2}" font-family="${h}">${t}%</text>`}).join("")}

    <!-- X-axis time labels -->
    ${y.map(({t,label:n})=>{let c=p(t);return c<a.left+6||c>a.left+s-6?"":`<text x="${c.toFixed(1)}" y="${(a.top+l+15).toFixed(1)}" text-anchor="middle"
        fill="rgba(255,255,255,0.55)" font-size="${w}"
        font-family="${h}">${n}</text>`}).join("")}

    <!-- Axis borders -->
    <line x1="${a.left}" y1="${a.top}" x2="${a.left}" y2="${a.top+l}"
      stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
    <line x1="${a.left}" y1="${a.top+l}" x2="${a.left+s}" y2="${a.top+l}"
      stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>

    <!-- Legend -->
    <circle cx="${a.left+7}" cy="${a.top-7}" r="4" fill="#90CAF9"/>
    <text x="${a.left+15}" y="${a.top-4}" fill="rgba(255,255,255,0.70)"
      font-size="${w}" font-family="${h}" dominant-baseline="middle">hPa</text>
    <circle cx="${a.left+52}" cy="${a.top-7}" r="4" fill="rgba(255,255,255,0.80)"/>
    <text x="${a.left+60}" y="${a.top-4}" fill="rgba(255,255,255,0.60)"
      font-size="${w}" font-family="${h}" dominant-baseline="middle">precip %</text>

    <!-- Interactive Scrub Cursor & Tooltip -->
    <g class="hchart-scrub-cursor" style="opacity:0; pointer-events:none; transition:opacity 0.15s ease-out;">
      <line class="hchart-scrub-line" x1="${a.left}" y1="${a.top}" x2="${a.left}" y2="${a.top+l}" stroke="#FFD54F" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle class="hchart-scrub-dot-halo" cx="${a.left}" cy="${a.top}" r="8" fill="rgba(255,213,79,0.3)"/>
      <circle class="hchart-scrub-dot" cx="${a.left}" cy="${a.top}" r="4.5" fill="#FFD54F" stroke="#ffffff" stroke-width="1.5"/>
      <g class="hchart-scrub-tip" transform="translate(${a.left+40}, ${a.top+10})">
        <rect x="-38" y="-11" width="76" height="22" rx="6" fill="#0f172a" stroke="#FFD54F" stroke-width="1" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"/>
        <text class="hchart-scrub-tip-txt" x="0" y="3.5" fill="#ffffff" font-size="${w+1}" font-weight="700" text-anchor="middle" font-family="${h}">1014.2 hPa</text>
      </g>
    </g>
  </svg>`}function X(d,e){if(d==null)return null;let i=typeof d=="number"?d:parseFloat(d);if(isNaN(i))return null;switch((e||"hpa").trim().toLowerCase()){case"hpa":case"mbar":return i;case"mmhg":return i*1.33322387415;case"inhg":return i*33.863886666667;case"psi":return i*68.947572932;case"pa":return i/100;case"kpa":return i*10;case"bar":return i*1e3;default:return i}}var ee={entity_zambretti:"sensor.zambretti_forecast",entity_sager:"sensor.sager_forecast",entity_6h:"sensor.zambretti_forecast_6h",entity_12h:"sensor.zambretti_forecast_12h",entity_24h:"sensor.zambretti_forecast_24h",entity_precip:"sensor.precipitation_probability"},ye={zambretti_forecast:"entity_zambretti",sager_forecast:"entity_sager",zambretti_forecast_6h:"entity_6h",zambretti_forecast_12h:"entity_12h",zambretti_forecast_24h:"entity_24h",precipitation_probability:"entity_precip"},ie=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config={},this._historyPoints=null,this._historyFetching=!1,this.shadowRoot.addEventListener("click",e=>{let i=e.target?.closest?.("[data-more-info]");i&&this._openMoreInfo(i.getAttribute("data-more-info"))}),this.shadowRoot.addEventListener("keydown",e=>{let i=e.target?.closest?.("[data-more-info]");i&&(e.key==="Enter"?(e.preventDefault(),this._openMoreInfo(i.getAttribute("data-more-info"))):e.key===" "&&e.preventDefault())}),this.shadowRoot.addEventListener("keyup",e=>{let i=e.target?.closest?.("[data-more-info]");i&&e.key===" "&&(e.preventDefault(),this._openMoreInfo(i.getAttribute("data-more-info")))})}_openMoreInfo(e){!e||!this._hass?.states?.[e]||this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}_moreInfoAttrs(e){return!e||!this._hass?.states?.[e]?"":`data-more-info="${v(e)}" role="button" tabindex="0"`}static async getConfigElement(){return await import(new URL("./zambretti-weather-card-editor.js?v=2.1.1",import.meta.url).href),document.createElement("zambretti-weather-card-editor")}static getStubConfig(e,i,r){let o={...ee},a=e?.entities;if(a&&typeof a=="object"){let l=Object.values(a).filter(w=>w&&w.platform==="zambretti_sager"&&typeof w.entity_id=="string"&&w.entity_id.startsWith("sensor."));if(l.length>0){let h=(l.find(_=>_.translation_key==="zambretti_forecast")||l[0]).device_id;for(let _ of l){if(h&&_.device_id&&_.device_id!==h)continue;let m=ye[_.translation_key];m&&(o[m]=_.entity_id)}}}let s=Array.isArray(i)&&i.length>0?i:Array.isArray(r)&&r.length>0?r:e&&e.states?Object.keys(e.states):[];if(s.length>0){let l=(...w)=>s.find(h=>{if(typeof h!="string"||!h.startsWith("sensor."))return!1;let _=h.slice(7);return w.some(m=>_===m||_.endsWith(`_${m}`))});e?.states?.[o.entity_zambretti]||(o.entity_zambretti=l("zambretti_forecast","zambretti")||o.entity_zambretti),e?.states?.[o.entity_sager]||(o.entity_sager=l("sager_forecast","sager")||o.entity_sager),e?.states?.[o.entity_6h]||(o.entity_6h=l("zambretti_forecast_6h","forecast_6h")||o.entity_6h),e?.states?.[o.entity_12h]||(o.entity_12h=l("zambretti_forecast_12h","forecast_12h")||o.entity_12h),e?.states?.[o.entity_24h]||(o.entity_24h=l("zambretti_forecast_24h","forecast_24h")||o.entity_24h),e?.states?.[o.entity_precip]||(o.entity_precip=l("precipitation_probability","precip_probability")||o.entity_precip)}return{...o,entity_wind_speed:"",card_style:"modern",show_wind:!0,show_sager:!0,show_precip:!0,show_forecasts:!0,show_trend:!1,show_history:!1,language:"auto",wind_unit:"m/s",compact:!1,auto_theme:!0,theme_alpha:100}}setConfig(e){if(!e||typeof e!="object")throw new Error("Invalid configuration");let i=this._config||{},r={...ee,entity_wind_speed:"",show_wind:!0,show_trend:!1,show_history:!1,language:"auto",wind_unit:"m/s",compact:!1,show_sager:!0,show_precip:!0,show_forecasts:!0,auto_theme:!0,theme_alpha:e.theme_alpha??100,custom_bg:"linear-gradient(135deg,#1565C0 0%,#1976D2 100%)",...e};if(this._hass&&this._rendered){let o=new Set([...Object.keys(i),...Object.keys(r)]),a=!0;for(let s of o)if(!(s==="custom_bg"||s==="theme_alpha")&&i[s]!==r[s]){a=!1;break}if(a){this._config=r;let s=this._state(r.entity_zambretti),w=this._attr(r.entity_zambretti,"is_night",!1)&&(s==="settled_fine"||s==="fine_weather")?"night_clear":J[s]||"partlycloudy",h=this._computeThemeBg(w,r.card_style==="vintage"),_=this.shadowRoot.querySelector("ha-card");_&&(_.style.background=h),this._lastThemeBg=h;return}}if(this._rendered=!1,this._entitiesResolved=!1,(r.show_history!==i.show_history||r.show_trend!==i.show_trend)&&(this._historyPoints=null,this._timelineSteps=null),this._config=r,this._hass){let o=this._resolveEntities(this._hass);Object.keys(o).length>0&&(this._config={...this._config,...o}),this._entitiesResolved=!0,this._render()}}_resolveEntities(e){let i=e?.states||{},r=e?.entities,o={},a=this._config.entity_zambretti;if(!a||!i[a]){if(r&&typeof r=="object"){let h=Object.values(r).find(_=>_&&_.platform==="zambretti_sager"&&_.translation_key==="zambretti_forecast"&&i[_.entity_id]);h&&(a=h.entity_id)}(!a||!i[a])&&(a=Object.keys(i).find(h=>{if(!h.startsWith("sensor."))return!1;let _=h.slice(7);return _==="zambretti_forecast"||_.endsWith("_zambretti_forecast")||_.endsWith("_zambretti")}))}a&&(o.entity_zambretti=a);let s=a&&r&&typeof r=="object"?r[a]:null;if(s&&s.device_id){let h=s.device_id;for(let _ of Object.values(r)){if(!_||_.platform!=="zambretti_sager"||_.device_id!==h)continue;let m=ye[_.translation_key];if(!m||m==="entity_zambretti")continue;let f=this._config[m],S=f&&r[f]?r[f].device_id:null;(!f||!i[f]||f===ee[m]&&S!==h)&&i[_.entity_id]&&(o[m]=_.entity_id)}}let l="";a&&(a.endsWith("_zambretti_forecast")?l=a.slice(0,-18):a.endsWith("_zambretti")?l=a.slice(0,-9):(a==="sensor.zambretti_forecast"||a==="sensor.zambretti")&&(l="sensor."));let w={entity_sager:["sager_forecast","sager"],entity_6h:["zambretti_forecast_6h","forecast_6h"],entity_12h:["zambretti_forecast_12h","forecast_12h"],entity_24h:["zambretti_forecast_24h","forecast_24h"],entity_precip:["precipitation_probability","precip_probability"],entity_pressure:["pressure","barometric_pressure"]};for(let[h,_]of Object.entries(w)){if(o[h])continue;let m=this._config[h];if(m&&i[m]&&(!l||m.startsWith(l))){o[h]=m;continue}let f=null;if(l)for(let S of _){let A=`${l}${S}`;if(i[A]){f=A;break}}f||(f=Object.keys(i).find(S=>{if(!S.startsWith("sensor."))return!1;let A=S.slice(7);return _.some(k=>A===k||A.endsWith(`_${k}`))})),f&&(o[h]=f)}return o}set hass(e){let i=this._hass;if(this._hass=e,!this._entitiesResolved){let l=this._resolveEntities(e);Object.keys(l).length>0&&(this._config={...this._config,...l}),this._entitiesResolved=!0}let r=this._config.entity_zambretti,o=i?.states?.[r]?.state,a=e?.states?.[r]?.state,s=(o==="unavailable"||o==="unknown"||!o)&&a&&a!=="unavailable"&&a!=="unknown";if((this._config.show_history||this._config.show_trend)&&this._scheduleHistoryFetch(s),!this._rendered)this._render();else if(i&&e){let l=[this._config.entity_zambretti,this._config.entity_sager,this._config.entity_6h,this._config.entity_12h,this._config.entity_24h,this._config.entity_precip,this._config.entity_wind_speed,this._config.entity_pressure].filter(Boolean),w=(this._config.language==="auto"||!this._config.language)&&i.language!==e.language;(w||l.some(_=>i.states?.[_]!==e.states?.[_]))&&(w?(this._rendered=!1,this._render()):this._patch())}else this._patch()}_scheduleHistoryFetch(e=!1){if(this._historyFetching)return;let i=this._config;if(!i.show_history&&!i.show_trend)return;if(typeof document<"u"&&document.hidden){this._historyFetchPending=!0;return}let r=Date.now(),a=Array.isArray(this._historyPoints)&&this._historyPoints.length>=2||Array.isArray(this._timelineSteps)&&this._timelineSteps.length>0?300*1e3:15*1e3;!e&&this._historyFetchedAt&&r-this._historyFetchedAt<a||(this._historyFetching=!0,this._doFetchHistory().then(()=>{this._historyFetching=!1,this._historyFetchedAt=Date.now(),this._rendered&&(typeof document>"u"||!document.hidden)&&(this._config.show_history&&this._patchChart(),this._config.show_trend&&this._patchTimeline())}).catch(()=>{this._historyFetching=!1}))}async _doFetchHistory(){if(!this._hass)return;let e=this._config,i=new Date,r=e.entity_zambretti,o=e.entity_precip,a=this._attr(r,"pressure_sensor",null)||e.entity_pressure||null;if(!r&&!o&&!a)return;let s=e.show_history!==!1&&!!e.show_history,l=e.show_trend!==!1&&!!e.show_trend;if(!s&&!l)return;let w=l||!a&&s,h=s&&e.show_precip!==!1&&!!o,_=s&&!!a;if(!w&&!h&&!_)return;let m=new Date(i.getTime()-1440*60*1e3),f=new Date(i.getTime()-2880*60*1e3);try{let N=function(t){return Math.round(t.getTime()/(300*1e3))},j=function(t){return t.lu!=null?new Date(t.lu*1e3):t.last_updated?new Date(t.last_updated):new Date},p=function(t){return t.state??t.s??null},z=function(t){return t.attributes??t.a??{}},[S,A,k]=await Promise.all([w&&r?this._hass.callWS({type:"history/history_during_period",start_time:f.toISOString(),end_time:i.toISOString(),entity_ids:[r],minimal_response:!1,no_attributes:!1,significant_changes_only:!1}):Promise.resolve({}),h&&o?this._hass.callWS({type:"history/history_during_period",start_time:m.toISOString(),end_time:i.toISOString(),entity_ids:[o],minimal_response:!0,no_attributes:!0,significant_changes_only:!1}):Promise.resolve({}),_&&a?this._hass.callWS({type:"history/history_during_period",start_time:m.toISOString(),end_time:i.toISOString(),entity_ids:[a],minimal_response:!0,no_attributes:!0,significant_changes_only:!1}):Promise.resolve({})]),b=new Map,V=S[r]||[],C=m.getTime(),D=this._attr(r,"pressure_hpa",null),F=D!=null&&!isNaN(parseFloat(D))?parseFloat(D):NaN;if(a){let t=k[a]||[],n=this._attr(a,"unit_of_measurement","hPa"),c=this._state(a),g=X(c,n),u=0;!isNaN(F)&&g!=null&&!isNaN(g)&&(u=F-g);for(let O of t){let U=j(O);if(U.getTime()<C)continue;let L=N(U),G=p(O),Z=X(G,n);b.has(L)||b.set(L,{t:U,p:null,precip:null}),Z!=null&&!isNaN(Z)&&(b.get(L).p=Z+u)}let B=isNaN(F)?g!=null?g+u:null:F;if(B!=null&&!isNaN(B)){let O=N(i);b.has(O)||b.set(O,{t:i,p:null,precip:null}),b.get(O).p=B}}else{for(let t of V){let n=j(t);if(n.getTime()<C)continue;let c=N(n),g=z(t),u=parseFloat(g.pressure_hpa);b.has(c)||b.set(c,{t:n,p:null,precip:null}),isNaN(u)||(b.get(c).p=u)}if(!isNaN(F)){let t=N(i);b.has(t)||b.set(t,{t:i,p:null,precip:null}),b.get(t).p=F}}let E=[...b.keys()].sort((t,n)=>t-n),R=null;for(let t of E){let n=b.get(t);n.p!=null?R=n.p:R!=null&&(n.p=R)}let I=null;for(let t of E)if(b.get(t).p!=null){I=b.get(t).p;break}if(I!=null)for(let t of E){let n=b.get(t);if(n.p!=null)break;n.p=I}let y=(A[o]||[]).map(t=>({t:j(t),v:parseFloat(p(t))})).filter(t=>!isNaN(t.v)).sort((t,n)=>t.t-n.t),T=parseFloat(this._hass?.states?.[o]?.state);if(!isNaN(T)){let t=N(i);b.has(t)||b.set(t,{t:i,p:null,precip:null}),b.get(t).precip=T,y.push({t:i,v:T}),y.sort((n,c)=>n.t-c.t)}if(y.length){for(let{t:c,v:g}of y){if(c.getTime()<C)continue;let u=N(c);b.has(u)||b.set(u,{t:c,p:null,precip:null}),b.get(u).precip=g}E.length=0,E.push(...[...b.keys()].sort((c,g)=>c-g)),R=null;for(let c of E){let g=b.get(c);g.p!=null?R=g.p:R!=null&&(g.p=R)}if(I!=null)for(let c of E){let g=b.get(c);if(g.p!=null)break;g.p=I}let t=0,n=y[0].v;for(let c of E){let g=b.get(c).t.getTime();for(;t+1<y.length&&y[t+1].t.getTime()<=g;)t++;y[t].t.getTime()<=g&&(n=y[t].v),b.get(c).precip==null&&(b.get(c).precip=n)}}this._historyPoints=E.map(t=>b.get(t));let $=V.map(t=>({t:j(t),state:p(t)})).filter(t=>t.state&&t.state!=="unknown"&&t.state!=="unavailable").sort((t,n)=>t.t-n.t),M=[];for(let t of $){let n=M[M.length-1];if(!(n&&n.state===t.state)){if(n&&t.t.getTime()-n.t.getTime()<1800*1e3){n.state=t.state,n.t=t.t;continue}M.push({t:t.t,state:t.state})}}let H=M.slice(-7),P=this._hass.states[r]?.state;if(P&&P!=="unknown"&&P!=="unavailable"){let t=H[H.length-1];!t||t.state!==P?H.push({t:new Date,state:P,isCurrent:!0}):(t.isCurrent=!0,t.t=new Date)}this._timelineSteps=H}catch{this._historyPoints=[],this._timelineSteps=[]}}_patchChart(){let e=this.shadowRoot?.querySelector(".history-chart-wrap");if(!e){this._rendered=!1,this._render();return}let i=!!this._config.compact;e.style.height=`${i?150:200}px`;let r=this._labels();e.innerHTML=fe(this._historyPoints,r,i),this._setupHistoryScrubbing()}_setupHistoryScrubbing(){let e=this.shadowRoot?.querySelector(".history-chart-svg");if(!e||!Array.isArray(this._historyPoints)||this._historyPoints.length<2)return;let i=this._historyPoints.filter(y=>y.p!=null);if(i.length<2)return;let r=this._historyPoints.filter(y=>y.precip!=null),o=this.shadowRoot?.querySelector(".history-title"),a='<svg aria-hidden="true" viewBox="0 0 16 16" width="12" height="12" style="vertical-align:-1px;margin-right:4px;opacity:0.7"><polyline points="1,12 5,6 8,9 11,4 15,7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>24h',s=e.querySelector(".hchart-scrub-cursor"),l=e.querySelector(".hchart-scrub-line"),w=e.querySelector(".hchart-scrub-dot"),h=e.querySelector(".hchart-scrub-dot-halo"),_=e.querySelector(".hchart-scrub-tip"),m=e.querySelector(".hchart-scrub-tip-txt");if(!s||!l||!w||!_)return;if(i.length>=4){let y=[...i].map(H=>H.p).sort((H,P)=>H-P),T=y[Math.floor(y.length*.25)],$=y[Math.floor(y.length*.75)],M=$-T;i=i.filter(H=>H.p>=T-3*M&&H.p<=$+3*M)}if(i.length<2)return;let f=!!this._config.compact,S=560,A=f?150:200,k={top:22,right:16,bottom:38,left:56},N=S-k.left-k.right,j=A-k.top-k.bottom,p=i.map(y=>y.p),z=Math.min(...p),b=Math.max(...p),V=Math.max(2,(b-z)*.15),C=Math.floor(z-V),D=Math.ceil(b+V),F=this._historyPoints[0].t.getTime(),E=this._historyPoints[this._historyPoints.length-1].t.getTime(),R=Math.max(E-F,1),I=y=>{let T=e.getBoundingClientRect(),$=y.touches?y.touches[0].clientX:y.clientX,H=Math.max(0,Math.min(1,($-T.left)/T.width))*S,P=Math.max(k.left,Math.min(k.left+N,H)),t=F+(P-k.left)/N*R,n=i[0],c=1/0;for(let W of i){let K=Math.abs(W.t.getTime()-t);K<c&&(c=K,n=W)}let g=k.top+(1-(n.p-C)/(D-C))*j,u=k.left+(n.t.getTime()-F)/R*N;s.style.opacity="1",l.setAttribute("x1",u.toFixed(1)),l.setAttribute("x2",u.toFixed(1)),w.setAttribute("cx",u.toFixed(1)),w.setAttribute("cy",g.toFixed(1)),h&&(h.setAttribute("cx",u.toFixed(1)),h.setAttribute("cy",g.toFixed(1)));let B=Math.max(k.left+40,Math.min(k.left+N-40,u)),O=Math.max(k.top+10,g-18);_.setAttribute("transform",`translate(${B.toFixed(1)}, ${O.toFixed(1)})`),m&&(m.textContent=`${n.p.toFixed(1)} hPa`);let L=((new Date().getTime()-n.t.getTime())/(3600*1e3)).toFixed(1),G=n.t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),Z="";if(r.length){let W=r[0],K=1/0;for(let Q of r){let q=Math.abs(Q.t.getTime()-t);q<K&&(K=q,W=Q)}W&&W.precip>0&&(Z=` \xB7 \u{1F4A7} ${W.precip.toFixed(0)}%`)}o&&(o.innerHTML=`<span style="color:#FFD54F">\u23F1 ${G} (-${L}h): <b>${n.p.toFixed(1)} hPa</b>${Z}</span>`)},x=()=>{s.style.opacity="0",o&&(o.innerHTML=a)};e.onmousemove=I,e.onmouseleave=x,e.ontouchmove=y=>{y.preventDefault(),I(y)},e.ontouchend=x}_patchTimeline(){let e=this.shadowRoot?.querySelector(".trend-timeline-wrap");if(!e){this._rendered=!1,this._render();return}let i=this._labels();e.innerHTML=ue(this._timelineSteps,i,!!this._config.compact)}connectedCallback(){this._visibilityHandler||(this._visibilityHandler=()=>{typeof document<"u"&&!document.hidden&&this._historyFetchPending&&(this._historyFetchPending=!1,this._scheduleHistoryFetch())}),typeof document<"u"&&(document.removeEventListener("visibilitychange",this._visibilityHandler),document.addEventListener("visibilitychange",this._visibilityHandler))}disconnectedCallback(){this._visibilityHandler&&typeof document<"u"&&document.removeEventListener("visibilitychange",this._visibilityHandler)}_state(e){return this._hass?.states?.[e]?.state??null}_attr(e,i,r){return this._hass?.states?.[e]?.attributes?.[i]??r}_isUnavailable(e){return e==null||e===""||e==="unavailable"||e==="unknown"}_localizeState(e,i,r=!1){if(this._isUnavailable(e)){if(!r)return"\u2014";let o=e==="unknown"?"unknown":"unavailable";return this._hass?.localize?.(`state.default.${o}`)||(o==="unknown"?"Unknown":"Unavailable")}return i[e]||e}_readPressureHpa(){let e=this._config,i=this._state(e.entity_zambretti);if(!this._isUnavailable(i)){let r=this._attr(e.entity_zambretti,"pressure_hpa",null);if(r!=null){let o=parseFloat(r);if(!Number.isNaN(o))return o}}if(e.entity_pressure){let r=this._state(e.entity_pressure);if(!this._isUnavailable(r)){let o=this._attr(e.entity_pressure,"unit_of_measurement","hPa");return X(r,o)}}return null}_readPrecipPct(){let e=this._state(this._config.entity_precip);if(this._isUnavailable(e))return null;let i=parseInt(e,10);return Number.isNaN(i)?null:Math.max(0,Math.min(100,i))}_labels(){return le(this._config.language||"auto",this._hass?.language||"en")}_vintageLabels(){return ce(this._config.language||"auto",this._hass?.language||"en")}_precipLabel(){return de(this._config.language||"auto",this._hass?.language||"en")}_computeThemeBg(e,i){let r=this._config;if(i&&!r.custom_bg)return"radial-gradient(circle at 50% 25%, #2d1f14 0%, #19110a 55%, #0d0805 100%)";let o=r.auto_theme!==!1,a=o?xe(e).bg:r.custom_bg||we.bg;return o?ke(a,r.theme_alpha):a}_render(){if(!this._hass)return;let e=this._config,i=this._labels(),r=!!e.compact,o=e.card_style==="vintage",a=e.card_style==="tile",s=this._state(e.entity_zambretti),l=this._isUnavailable(s),w=this._state(e.entity_sager),h=this._state(e.entity_6h),_=this._state(e.entity_12h),m=this._state(e.entity_24h),f=this._readPrecipPct(),S=f!=null?`${f}%`:"\u2014",A=this._attr(e.entity_zambretti,"is_night",!1),k=ge(s,A),N=A&&(s==="settled_fine"||s==="fine_weather")?"night_clear":J[s]||"partlycloudy",j=e.show_wind!==!1,p=e.entity_wind_speed||e.entity_zambretti,z="";if(j){let t=e.entity_wind_speed?this._state(e.entity_wind_speed):l?null:this._attr(e.entity_zambretti,"wind_speed",null),n=this._attr(p,"unit_of_measurement","m/s"),c=l?null:this._attr(e.entity_zambretti,"wind_degrees",null),g=(l?null:this._attr(e.entity_zambretti,"wind_direction",null))||he(c),u=pe(t,e.wind_unit||"m/s",n);z=u?g?`${g} ${u}`:u:g||""}let V={bg:this._computeThemeBg(N,o)},C=this._localizeState(s,i,!0),D=this._localizeState(w,i,!1),F=te(k,C),E=this._precipLabel(),R=e.show_precip!==!1,I=e.show_forecasts!==!1,x=e.show_sager!==!1,y=!!e.show_history,T=!!e.show_trend,$=[{label:"6h",key:h,entityId:e.entity_6h},{label:"12h",key:_,entityId:e.entity_12h},{label:"24h",key:m,entityId:e.entity_24h}].map(t=>{let n=this._localizeState(t.key,i,!1),c=te(J[t.key]||"partlycloudy",`${t.label}: ${n}`);return`
      <div class="fc" ${this._moreInfoAttrs(t.entityId)}>
        <span class="fc-time">${v(t.label)}</span>
        <span class="fc-icon">${c}</span>
        <span class="fc-lbl">${v(n)}</span>
      </div>`}).join(""),M=this._moreInfoAttrs(e.entity_pressure||e.entity_zambretti),H="";if(a){let t=this._readPressureHpa(),n=l?null:this._attr(e.entity_zambretti,"pressure_delta_3h",null),c=n!=null&&!Number.isNaN(parseFloat(n))?parseFloat(n):null,g=l?"\u2014":this._attr(e.entity_zambretti,"trend","\u2192 Steady"),u=c==null?"#94a3b8":c>=1.4?"#4ade80":c<=-1.4?"#f87171":"#facc15",B=c==null?"#cbd5e1":c>=1.4?"#86efac":c<=-1.4?"#fca5a5":"#fef08a";H=`
        <div class="tile-container">
          <div class="tile-header-wrap">
            <div class="tile-icon-box" ${this._moreInfoAttrs(e.entity_zambretti)}>${F}</div>
            <div class="tile-text-group">
              <div class="tile-title" ${this._moreInfoAttrs(e.entity_zambretti)}>${v(C)}</div>
              ${x?`<div class="tile-subtitle" ${this._moreInfoAttrs(e.entity_sager)}>${v(D)}</div>`:""}
            </div>
            <div class="tile-trend-pill">
              <span class="tile-trend-dot" style="background:${u}"></span>
              <span class="tile-trend-text" style="color:${B}">${v(g)}</span>
            </div>
          </div>
          <div class="tile-bottom-chips">
            <div class="tile-chips-left">
              ${R?`<span class="tile-chip tile-chip-precip" ${this._moreInfoAttrs(e.entity_precip)}>\u{1F4A7} ${v(S)}</span>`:""}
              ${j&&z?`<span class="tile-chip tile-chip-wind" ${this._moreInfoAttrs(p)}>\u{1F4A8} ${v(z)}</span>`:""}
            </div>
            <span class="tile-chip tile-chip-pressure" ${M}>\u23F1 ${t!=null?`${t.toFixed(1)} hPa`:"\u2014"}</span>
          </div>
        </div>
      `}else if(o){let t=this._vintageLabels(),n=this._readPressureHpa(),c=l?null:this._attr(e.entity_zambretti,"pressure_3h_ago",null),g=l?null:this._attr(e.entity_zambretti,"pressure_delta_3h",null),u=g!=null&&!Number.isNaN(parseFloat(g))?parseFloat(g):null,B=n??1013.25,O=u??0,U=c!=null&&!Number.isNaN(parseFloat(c))?parseFloat(c):B-O,L=l?"\u2014":this._attr(e.entity_zambretti,"trend","\u2192 Steady"),G=Se(B,U,O,t,{showSubdial:e.show_subdial!==!1,compact:r}),Z=u==null?"#cbd5e1":u>=1.4?"#86efac":u<=-1.4?"#fca5a5":"#fef08a";H=`
        <div class="vintage-container">
          <div class="vintage-dial-wrap" ${M}>${G}</div>
          <div class="vintage-readout">
            <div class="vintage-main-bar">
              <div class="vintage-forecast-title" ${this._moreInfoAttrs(e.entity_zambretti)}>${v(C)}</div>
              ${x?`<div class="vintage-sager-sub" ${this._moreInfoAttrs(e.entity_sager)}><span class="vintage-badge">Sager</span> <span class="v-sager-lbl">${v(D)}</span></div>`:""}
            </div>
            <div class="vintage-metrics-grid">
              <div class="vintage-metric-box" ${M}>
                <div class="vintage-metric-lbl">${v(t.current||"Current")}</div>
                <div class="vintage-metric-val v-p-hpa">${n!=null?`${n.toFixed(1)} <span style="font-size:0.75em;font-weight:400;color:#d4af37">hPa</span>`:"\u2014"}</div>
                <div class="vintage-metric-sub v-p-mm">${n!=null?(n*.750062).toFixed(1)+" mmHg":""}</div>
              </div>
              <div class="vintage-metric-box">
                <div class="vintage-metric-lbl">${v(t.trend||"Trend")} (3h)</div>
                <div class="vintage-metric-val v-trend-delta" style="color:${Z}">${u!=null?(u>=0?"+":"")+u.toFixed(1)+" hPa":"\u2014"}</div>
                <div class="vintage-metric-sub v-trend-lbl">${v(L)}</div>
              </div>
            </div>
          </div>
        </div>
        ${I?`<div class="cell forecast-row" style="border-top:1px solid rgba(212,175,55,0.20)">${$}</div>`:""}
        <div class="footer" style="border-top:1px solid rgba(212,175,55,0.20)">
          ${z?`<span class="footer-wind" ${this._moreInfoAttrs(p)}>\u{1F4A8} ${v(z)}</span>`:""}
          ${R?`<span class="footer-precip" ${this._moreInfoAttrs(e.entity_precip)}>\u{1F4A7} ${v(E)}: ${v(S)}</span>`:""}
        </div>
      `}else H=`
        <div class="grid" style="grid-template-columns:${R?"1fr 1fr":"1fr"}">
          <div class="cell main-cell" ${this._moreInfoAttrs(e.entity_zambretti)}>
            <div class="main-icon">${F}</div>
            <div class="main-info">
              <div class="main-label">${v(C)}</div>
              <div class="main-sub">Zambretti</div>
            </div>
          </div>
          ${R?`
          <div class="cell precip-cell" ${this._moreInfoAttrs(e.entity_precip)}>
            <div class="precip-title">${v(E)}</div>
            <div class="precip-widget">${me(f,E)}</div>
          </div>`:""}
          ${I?`
          <div class="cell forecast-row">${$}</div>`:""}
        </div>
        <div class="footer">
          ${z?`<span class="footer-wind" ${this._moreInfoAttrs(p)}>\u{1F4A8} ${v(z)}</span>`:""}
          ${x?`
          <span class="footer-badge">Sager</span>
          <span class="footer-text" ${this._moreInfoAttrs(e.entity_sager)}>${v(D)}</span>`:""}
        </div>
      `;this.shadowRoot.innerHTML=`
      <style>${this._css(V,r,R,o,a)}</style>
      <ha-card class="${l?"is-unavailable":""}">
        ${H}
        ${T?`
        <div class="trend-section">
          <div class="trend-title"><svg aria-hidden="true" viewBox="0 0 16 16" width="12" height="12" style="vertical-align:-1px;margin-right:4px;opacity:0.7"><circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="8" y1="4" x2="8" y2="8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="8" y1="8.5" x2="11" y2="10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>Trend</div>
          <div class="trend-timeline-wrap">${ue(this._timelineSteps,i,r)}</div>
        </div>`:""}
        ${y?`
        <div class="history-section">
          <div class="history-title"><svg aria-hidden="true" viewBox="0 0 16 16" width="12" height="12" style="vertical-align:-1px;margin-right:4px;opacity:0.7"><polyline points="1,12 5,6 8,9 11,4 15,7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>24h</div>
          <div class="history-chart-wrap" style="height:${r?150:200}px">${fe(this._historyPoints,i,r)}</div>
        </div>`:""}
      </ha-card>`;let P=this.shadowRoot.querySelector("ha-card");P&&(P.style.background=V.bg),y&&this._setupHistoryScrubbing(),this._lastIconKey=k,this._lastThemeBg=V.bg,this._lastPrecip=f,this._lastStyle=e.card_style,this._lastUnavail=l,this._rendered=!0}_patch(){if(!this._hass||!this._rendered)return;let e=this._config,i=this._labels(),r=this.shadowRoot,o=e.card_style==="vintage",a=e.card_style==="tile",s=this._state(e.entity_zambretti),l=this._isUnavailable(s),w=this._state(e.entity_sager),h=this._state(e.entity_6h),_=this._state(e.entity_12h),m=this._state(e.entity_24h),f=this._readPrecipPct(),S=f!=null?`${f}%`:"\u2014",A=this._attr(e.entity_zambretti,"is_night",!1),k=ge(s,A),N=A&&(s==="settled_fine"||s==="fine_weather")?"night_clear":J[s]||"partlycloudy",j=this._computeThemeBg(N,o);if(k!==this._lastIconKey||j!==this._lastThemeBg||e.card_style!==this._lastStyle||l!==this._lastUnavail){this._rendered=!1,this._render();return}let p=this._localizeState(s,i,!0),z=this._localizeState(w,i,!1),b=r.querySelector(".main-label");b&&b.textContent!==p&&(b.textContent=p);let V=r.querySelector(".main-icon svg, .tile-icon-box svg");V&&V.getAttribute("aria-label")!==p&&V.setAttribute("aria-label",p);let C=r.querySelector(".footer-text");C&&C.textContent!==z&&(C.textContent=z);let D=e.show_wind!==!1,F="";if(D){let x=e.entity_wind_speed||e.entity_zambretti,y=e.entity_wind_speed?this._state(e.entity_wind_speed):l?null:this._attr(e.entity_zambretti,"wind_speed",null),T=this._attr(x,"unit_of_measurement","m/s"),$=l?null:this._attr(e.entity_zambretti,"wind_degrees",null),M=(l?null:this._attr(e.entity_zambretti,"wind_direction",null))||he($),H=pe(y,e.wind_unit||"m/s",T);F=H?M?`${M} ${H}`:H:M||""}let E=r.querySelector(".footer-wind");if(E){let x=F?`\u{1F4A8} ${F}`:"";E.textContent!==x&&(E.textContent=x),E.style.display=D&&F?"":"none"}if(a){let x=this._readPressureHpa(),y=l?null:this._attr(e.entity_zambretti,"pressure_delta_3h",null),T=y!=null&&!Number.isNaN(parseFloat(y))?parseFloat(y):null,$=l?"\u2014":this._attr(e.entity_zambretti,"trend","\u2192 Steady"),M=T==null?"#94a3b8":T>=1.4?"#4ade80":T<=-1.4?"#f87171":"#facc15",H=T==null?"#cbd5e1":T>=1.4?"#86efac":T<=-1.4?"#fca5a5":"#fef08a",P=r.querySelector(".tile-title");P&&P.textContent!==p&&(P.textContent=p);let t=r.querySelector(".tile-subtitle");t&&t.textContent!==z&&(t.textContent=z);let n=r.querySelector(".tile-trend-dot");n&&(n.style.background=M);let c=r.querySelector(".tile-trend-text");c&&(c.textContent!==$&&(c.textContent=$),c.style.color=H);let g=r.querySelector(".tile-chip-precip");g&&(g.textContent=`\u{1F4A7} ${S}`);let u=r.querySelector(".tile-chip-wind");u&&(u.textContent=F?`\u{1F4A8} ${F}`:"",u.style.display=D&&F?"":"none");let B=r.querySelector(".tile-chip-pressure");B&&(B.textContent=`\u23F1 ${x!=null?`${x.toFixed(1)} hPa`:"\u2014"}`)}if(o){let x=this._readPressureHpa(),y=l?null:this._attr(e.entity_zambretti,"pressure_3h_ago",null),T=l?null:this._attr(e.entity_zambretti,"pressure_delta_3h",null),$=T!=null&&!Number.isNaN(parseFloat(T))?parseFloat(T):null,M=x??1013.25,H=$??0,P=y!=null&&!Number.isNaN(parseFloat(y))?parseFloat(y):M-H,t=l?"\u2014":this._attr(e.entity_zambretti,"trend","\u2192 Steady"),n=-120+(Math.max(960,Math.min(1060,M))-960)/100*240,c=-120+(Math.max(960,Math.min(1060,P))-960)/100*240,g=Math.max(-4,Math.min(4,H))/4*45,u=r.querySelector(".v-needle-main");u&&(u.style.transform=`rotate(${n.toFixed(1)}deg)`);let B=r.querySelector(".v-needle-ref");B&&(B.style.transform=`rotate(${c.toFixed(1)}deg)`);let O=r.querySelector(".v-needle-trend");O&&(O.style.transform=`rotate(${g.toFixed(1)}deg)`);let U=r.querySelector(".vintage-forecast-title");U&&U.textContent!==p&&(U.textContent=p);let L=r.querySelector(".v-sager-lbl");L&&L.textContent!==z&&(L.textContent=z);let G=r.querySelector(".v-p-hpa");G&&(G.innerHTML=x!=null?`${x.toFixed(1)} <span style="font-size:0.75em;font-weight:400;color:#d4af37">hPa</span>`:"\u2014");let Z=r.querySelector(".v-p-mm");Z&&(Z.textContent=x!=null?`${(x*.750062).toFixed(1)} mmHg`:"");let W=r.querySelector(".v-trend-delta");W&&(W.textContent=$!=null?`${$>=0?"+":""}${$.toFixed(1)} hPa`:"\u2014",W.style.color=$==null?"#cbd5e1":$>=1.4?"#86efac":$<=-1.4?"#fca5a5":"#fef08a");let K=r.querySelector(".v-trend-lbl");K&&(K.textContent=t);let Q=this._precipLabel(),q=r.querySelector(".footer-precip");q&&(q.textContent=`\u{1F4A7} ${Q}: ${S}`)}let R=r.querySelectorAll(".fc-lbl"),I=[h,_,m];if(R.forEach((x,y)=>{let T=this._localizeState(I[y],i,!1);x.textContent!==T&&(x.textContent=T)}),f!==this._lastPrecip){let x=r.querySelector(".precip-widget");x&&(x.innerHTML=me(f,this._precipLabel())),this._lastPrecip=f}if(e.show_trend&&this._timelineSteps){let x=this._timelineSteps[this._timelineSteps.length-1];!l&&x&&x.state!==s&&(this._timelineSteps.forEach(y=>{y.isCurrent=!1}),this._timelineSteps.push({t:new Date,state:s,isCurrent:!0}),this._timelineSteps.length>8&&this._timelineSteps.shift(),this._patchTimeline())}e.show_history&&this._historyPoints&&this._historyPoints.length>=2&&r.querySelector(".hchart-empty")&&this._patchChart(),e.show_trend&&this._timelineSteps&&this._timelineSteps.length>0&&r.querySelector(".tl-empty")&&this._patchTimeline()}_css(e,i,r=!0,o=!1,a=!1){let s=i?.82:1,l=Math.round(72*s),w=(1.15*s).toFixed(2),h=(.72*s).toFixed(2),_=Math.round(42*s),m=(.8*s).toFixed(2),f=Math.round(118*s),S=(.75*s).toFixed(2);return`
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
        flex:0 0 ${l}px; width:${l}px; height:${l}px;
        filter:drop-shadow(0 2px 8px rgba(0,0,0,0.35));
      }
      .main-icon svg { width:100%; height:100%; }
      .main-info { flex:1; min-width:0; }
      .main-label {
        font-size:${w}rem; font-weight:700; line-height:1.25;
        letter-spacing:-0.01em; text-shadow:0 1px 6px rgba(0,0,0,0.35);
      }
      .main-sub {
        font-size:${h}rem; font-weight:600;
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
        font-size:${S}rem; font-weight:800;
        letter-spacing:0.12em; text-transform:uppercase;
        text-shadow:0 1px 4px rgba(0,0,0,0.35);
      }
      .precip-widget { width:${f}px; height:${f}px; }

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
        width:${_}px; height:${_}px;
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
        font-size:${m}rem; font-weight:500; opacity:0.80; line-height:1.3;
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
      [data-more-info] {
        cursor:pointer;
        border-radius:8px;
        transition:opacity 0.15s ease, background-color 0.15s ease;
      }
      [data-more-info]:hover {
        opacity:0.9;
      }
      [data-more-info]:focus-visible {
        outline:2px solid #ffffff;
        outline-offset:2px;
      }
      ha-card.is-unavailable .main-icon,
      ha-card.is-unavailable .tile-icon-box,
      ha-card.is-unavailable .vintage-dial-wrap,
      ha-card.is-unavailable .fc-icon {
        opacity:0.55;
        filter:grayscale(0.45);
      }
    `}getCardSize(){let i=this._config?.card_style==="tile"?2:3;return this._config?.show_trend&&(i+=1),this._config?.show_history&&(i+=2),i}getGridOptions(){let e=this._config?.card_style==="tile",i=e?2:3;return this._config?.show_trend&&(i+=1),this._config?.show_history&&(i+=2),{columns:e?6:12,rows:i,min_columns:6,min_rows:e?1:2}}};customElements.get("zambretti-weather-card")||customElements.define("zambretti-weather-card",ie);window.customCards=window.customCards||[];window.customCards.some(d=>d.type==="zambretti-weather-card")||window.customCards.push({type:"zambretti-weather-card",name:"Zambretti & Sager Weather Card",description:"Weather forecasts (Modern iOS, Vintage Barometer, Compact Tile)",preview:!0,documentationURL:"https://github.com/meksspirt/zambretti_sager"});
