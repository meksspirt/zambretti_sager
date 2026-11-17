var se=new Set(["cs","da","de","de-AT","en","es","fr","hu","it","ja","ko","nb","nl","pl","pt","ru","sv","tr","uk","zh-Hans","zh-Hant"]),oe={en:{settled_fine:"Settled Fine",fine_weather:"Fine Weather",fine_becoming_less_settled:"Fine, Less Settled",fairly_fine_showery_later:"Fine, Showers Later",showery_becoming_more_unsettled:"Showery, Worsening",unsettled_rain_later:"Unsettled, Rain Later",rain_at_times_worse_later:"Rain, Worse Later",rain_at_times_becoming_very_unsettled:"Rain, Very Unsettled",very_unsettled_rain:"Very Unsettled, Rain",fine_possibly_showers:"Fine, Possibly Showers",fairly_fine_showers_likely:"Fine, Showers Likely",showery_bright_intervals:"Showery, Bright Intervals",changeable_some_rain:"Changeable, Some Rain",unsettled_rain_at_times:"Unsettled, Rain at Times",rain_at_frequent_intervals:"Frequent Rain",stormy_much_rain:"Stormy, Heavy Rain",becoming_fine:"Becoming Fine",fairly_fine_improving:"Fine, Improving",fairly_fine_possibly_showers_early:"Fine, Early Showers",showery_early_improving:"Early Showers, Improving",changeable_mending:"Changeable, Mending",rather_unsettled_clearing_later:"Unsettled, Clearing Later",unsettled_probably_improving:"Unsettled, Improving",unsettled_short_fine_intervals:"Unsettled, Short Fine",very_unsettled_finer_at_times:"Very Unsettled",stormy_possibly_improving:"Stormy, May Improve",stable:"Stable",sager_fair_improving:"Fair, improving",sager_fair_tending_to_deteriorate:"Fair, tending to deteriorate",sager_fair_no_change:"Fair, no important change",sager_unsettled_rain_likely:"Unsettled, rain likely",sager_unsettled_probably_improving:"Unsettled, probably improving",sager_unsettled_rain_at_times:"Unsettled, rain at times",sager_changeable_becoming_fairer:"Changeable, becoming fairer",sager_changeable_becoming_more_unsettled:"Changeable, more unsettled",sager_variable_slowly_improving:"Variable, slowly improving",sager_variable_slowly_deteriorating:"Variable, slowly deteriorating",sager_variable_some_change:"Variable, some change"},cs:{settled_fine:"P\u011Bkn\u011B, stabiln\u011B",fine_weather:"P\u011Bkn\xE9 po\u010Das\xED",fine_becoming_less_settled:"P\u011Bkn\u011B, m\xE9n\u011B stabiln\u011B",fairly_fine_showery_later:"Docela p\u011Bkn\u011B, p\u0159eh\xE1\u0148ky pozd\u011Bji",showery_becoming_more_unsettled:"P\u0159eh\xE1\u0148ky, zhor\u0161en\xED",unsettled_rain_later:"Nestabiln\u011B, d\xE9\u0161\u0165 pozd\u011Bji",rain_at_times_worse_later:"D\xE9\u0161\u0165, pozd\u011Bji h\u016F\u0159",rain_at_times_becoming_very_unsettled:"D\xE9\u0161\u0165, velmi nestabiln\u011B",very_unsettled_rain:"Velmi nestabiln\u011B, d\xE9\u0161\u0165",fine_possibly_showers:"P\u011Bkn\u011B, mo\u017En\xE9 p\u0159eh\xE1\u0148ky",fairly_fine_showers_likely:"Docela p\u011Bkn\u011B, p\u0159eh\xE1\u0148ky pravd\u011Bpodobn\xE9",showery_bright_intervals:"P\u0159eh\xE1\u0148ky, protrh\xE1v\xE1n\xED",changeable_some_rain:"Prom\u011Bnliv\u011B, trochu de\u0161t\u011B",unsettled_rain_at_times:"Nestabiln\u011B, ob\u010Das d\xE9\u0161\u0165",rain_at_frequent_intervals:"\u010Cast\xFD d\xE9\u0161\u0165",stormy_much_rain:"Bou\u0159liv\u011B, hodn\u011B de\u0161t\u011B",becoming_fine:"Zlep\u0161uje se",fairly_fine_improving:"Docela p\u011Bkn\u011B, zlep\u0161en\xED",fairly_fine_possibly_showers_early:"Docela p\u011Bkn\u011B, brzk\xE9 p\u0159eh\xE1\u0148ky",showery_early_improving:"Brzk\xE9 p\u0159eh\xE1\u0148ky, zlep\u0161en\xED",changeable_mending:"Prom\u011Bnliv\u011B, zlep\u0161en\xED",rather_unsettled_clearing_later:"Sp\xED\u0161e nestabiln\u011B, pozd\u011Bji protrh\xE1v\xE1n\xED",unsettled_probably_improving:"Nestabiln\u011B, pravd\u011Bpodobn\u011B zlep\u0161en\xED",unsettled_short_fine_intervals:"Nestabiln\u011B, kr\xE1tk\xE9 protrh\xE1v\xE1n\xED",very_unsettled_finer_at_times:"Velmi nestabiln\u011B, ob\u010Das l\xE9pe",stormy_possibly_improving:"Bou\u0159liv\u011B, mo\u017En\xE9 zlep\u0161en\xED",stable:"Stabiln\u011B",sager_fair_improving:"P\u011Bkn\xE9 po\u010Das\xED, zlep\u0161en\xED",sager_fair_tending_to_deteriorate:"P\u011Bkn\u011B, tendence ke zhor\u0161en\xED",sager_fair_no_change:"P\u011Bkn\xE9 po\u010Das\xED, bez v\xFDznamn\xE9 zm\u011Bny",sager_unsettled_rain_likely:"Nestabiln\u011B, d\xE9\u0161\u0165 pravd\u011Bpodobn\xFD",sager_unsettled_probably_improving:"Nestabiln\u011B, pravd\u011Bpodobn\u011B zlep\u0161en\xED",sager_unsettled_rain_at_times:"Nestabiln\u011B, ob\u010Das d\xE9\u0161\u0165",sager_changeable_becoming_fairer:"Prom\u011Bnliv\u011B, zlep\u0161uje se",sager_changeable_becoming_more_unsettled:"Prom\u011Bnliv\u011B, nestabiln\u011Bj\u0161\xED",sager_variable_slowly_improving:"Prom\u011Bnliv\u011B, pomal\xE9 zlep\u0161en\xED",sager_variable_slowly_deteriorating:"Prom\u011Bnliv\u011B, pomal\xE9 zhor\u0161en\xED",sager_variable_some_change:"Prom\u011Bnliv\u011B, o\u010Dek\xE1v\xE1na zm\u011Bna"},da:{settled_fine:"P\xE6nt, stabilt",fine_weather:"P\xE6nt vejr",fine_becoming_less_settled:"P\xE6nt, mindre stabilt",fairly_fine_showery_later:"Rimeligt p\xE6nt, byger senere",showery_becoming_more_unsettled:"Byger, forv\xE6rres",unsettled_rain_later:"Ustabilt, regn senere",rain_at_times_worse_later:"Regn, v\xE6rre senere",rain_at_times_becoming_very_unsettled:"Regn, meget ustabilt",very_unsettled_rain:"Meget ustabilt, regn",fine_possibly_showers:"P\xE6nt, mulige byger",fairly_fine_showers_likely:"Rimeligt p\xE6nt, byger sandsynlige",showery_bright_intervals:"Byger, opklaringer",changeable_some_rain:"Skiftende, lidt regn",unsettled_rain_at_times:"Ustabilt, regn til tider",rain_at_frequent_intervals:"Hyppig regn",stormy_much_rain:"Stormfuldt, meget regn",becoming_fine:"Forbedres",fairly_fine_improving:"Rimeligt p\xE6nt, forbedres",fairly_fine_possibly_showers_early:"Rimeligt p\xE6nt, tidlige byger",showery_early_improving:"Tidlige byger, forbedres",changeable_mending:"Skiftende, forbedres",rather_unsettled_clearing_later:"Ret ustabilt, klarer op senere",unsettled_probably_improving:"Ustabilt, sandsynlig forbedring",unsettled_short_fine_intervals:"Ustabilt, korte opklaringer",very_unsettled_finer_at_times:"Meget ustabilt, til tider bedre",stormy_possibly_improving:"Stormfuldt, mulig forbedring",stable:"Stabilt",sager_fair_improving:"P\xE6nt vejr, forbedres",sager_fair_tending_to_deteriorate:"P\xE6nt vejr, tendens til forv\xE6rring",sager_fair_no_change:"P\xE6nt vejr, ingen v\xE6sentlig \xE6ndring",sager_unsettled_rain_likely:"Ustabilt, regn sandsynlig",sager_unsettled_probably_improving:"Ustabilt, sandsynlig forbedring",sager_unsettled_rain_at_times:"Ustabilt, regn til tider",sager_changeable_becoming_fairer:"Skiftende, bliver p\xE6nere",sager_changeable_becoming_more_unsettled:"Skiftende, mere ustabilt",sager_variable_slowly_improving:"Variabelt, langsom forbedring",sager_variable_slowly_deteriorating:"Variabelt, langsom forv\xE6rring",sager_variable_some_change:"Variabelt, \xE6ndring forventes"},"de-AT":{settled_fine:"Sch\xF6n, best\xE4ndig",fine_weather:"Sch\xF6nes Wetter",fine_becoming_less_settled:"Sch\xF6n, weniger best\xE4ndig",fairly_fine_showery_later:"Ziemlich sch\xF6n, Schauer sp\xE4ter",showery_becoming_more_unsettled:"Schauer, Verschlechterung",unsettled_rain_later:"Unbest\xE4ndig, Regen sp\xE4ter",rain_at_times_worse_later:"Regen, sp\xE4ter schlechter",rain_at_times_becoming_very_unsettled:"Regen, sehr unbest\xE4ndig",very_unsettled_rain:"Sehr unbest\xE4ndig, Regen",fine_possibly_showers:"Sch\xF6n, Schauer m\xF6glich",fairly_fine_showers_likely:"Ziemlich sch\xF6n, Schauer wahrscheinlich",showery_bright_intervals:"Schauer, Auflockerungen",changeable_some_rain:"Wechselhaft, etwas Regen",unsettled_rain_at_times:"Unbest\xE4ndig, zeitweise Regen",rain_at_frequent_intervals:"H\xE4ufiger Regen",stormy_much_rain:"St\xFCrmisch, viel Regen",becoming_fine:"Wird sch\xF6ner",fairly_fine_improving:"Ziemlich sch\xF6n, besser",fairly_fine_possibly_showers_early:"Ziemlich sch\xF6n, fr\xFChe Schauer",showery_early_improving:"Fr\xFChe Schauer, besser",changeable_mending:"Wechselhaft, bessernd",rather_unsettled_clearing_later:"Unbest\xE4ndig, sp\xE4ter klarer",unsettled_probably_improving:"Unbest\xE4ndig, wohl besser",unsettled_short_fine_intervals:"Unbest\xE4ndig, kurze Aufheiterungen",very_unsettled_finer_at_times:"Sehr unbest\xE4ndig, zeitweise besser",stormy_possibly_improving:"St\xFCrmisch, m\xF6glicherweise besser",stable:"Stabil",sager_fair_improving:"Sch\xF6n, bessernd",sager_fair_tending_to_deteriorate:"Sch\xF6n, Tendenz zur Verschlechterung",sager_fair_no_change:"Sch\xF6n, keine wesentliche \xC4nderung",sager_unsettled_rain_likely:"Unbest\xE4ndig, Regen wahrscheinlich",sager_unsettled_probably_improving:"Unbest\xE4ndig, wohl besser",sager_unsettled_rain_at_times:"Unbest\xE4ndig, zeitweise Regen",sager_changeable_becoming_fairer:"Wechselhaft, wird sch\xF6ner",sager_changeable_becoming_more_unsettled:"Wechselhaft, unbest\xE4ndiger",sager_variable_slowly_improving:"Ver\xE4nderlich, langsam besser",sager_variable_slowly_deteriorating:"Ver\xE4nderlich, langsam schlechter",sager_variable_some_change:"Ver\xE4nderlich, \xC4nderung erwartet"},de:{settled_fine:"Sch\xF6n, best\xE4ndig",fine_weather:"Sch\xF6nes Wetter",fine_becoming_less_settled:"Sch\xF6n, weniger best\xE4ndig",fairly_fine_showery_later:"Ziemlich sch\xF6n, Schauer sp\xE4ter",showery_becoming_more_unsettled:"Schauer, Verschlechterung",unsettled_rain_later:"Unbest\xE4ndig, Regen sp\xE4ter",rain_at_times_worse_later:"Regen, sp\xE4ter schlechter",rain_at_times_becoming_very_unsettled:"Regen, sehr unbest\xE4ndig",very_unsettled_rain:"Sehr unbest\xE4ndig, Regen",fine_possibly_showers:"Sch\xF6n, Schauer m\xF6glich",fairly_fine_showers_likely:"Ziemlich sch\xF6n, Schauer wahrscheinlich",showery_bright_intervals:"Schauer, Auflockerungen",changeable_some_rain:"Wechselhaft, etwas Regen",unsettled_rain_at_times:"Unbest\xE4ndig, zeitweise Regen",rain_at_frequent_intervals:"H\xE4ufiger Regen",stormy_much_rain:"St\xFCrmisch, viel Regen",becoming_fine:"Wird sch\xF6ner",fairly_fine_improving:"Ziemlich sch\xF6n, besser",fairly_fine_possibly_showers_early:"Ziemlich sch\xF6n, fr\xFChe Schauer",showery_early_improving:"Fr\xFChe Schauer, besser",changeable_mending:"Wechselhaft, bessernd",rather_unsettled_clearing_later:"Unbest\xE4ndig, sp\xE4ter klarer",unsettled_probably_improving:"Unbest\xE4ndig, wohl besser",unsettled_short_fine_intervals:"Unbest\xE4ndig, kurze Aufheiterungen",very_unsettled_finer_at_times:"Sehr unbest\xE4ndig, zeitweise besser",stormy_possibly_improving:"St\xFCrmisch, m\xF6glicherweise besser",stable:"Stabil",sager_fair_improving:"Sch\xF6n, bessernd",sager_fair_tending_to_deteriorate:"Sch\xF6n, Tendenz zur Verschlechterung",sager_fair_no_change:"Sch\xF6n, keine wesentliche \xC4nderung",sager_unsettled_rain_likely:"Unbest\xE4ndig, Regen wahrscheinlich",sager_unsettled_probably_improving:"Unbest\xE4ndig, wohl besser",sager_unsettled_rain_at_times:"Unbest\xE4ndig, zeitweise Regen",sager_changeable_becoming_fairer:"Wechselhaft, wird sch\xF6ner",sager_changeable_becoming_more_unsettled:"Wechselhaft, unbest\xE4ndiger",sager_variable_slowly_improving:"Ver\xE4nderlich, langsam besser",sager_variable_slowly_deteriorating:"Ver\xE4nderlich, langsam schlechter",sager_variable_some_change:"Ver\xE4nderlich, \xC4nderung erwartet"},es:{settled_fine:"Buen tiempo estable",fine_weather:"Buen tiempo",fine_becoming_less_settled:"Buen tiempo, menos estable",fairly_fine_showery_later:"Bastante bueno, chubascos despu\xE9s",showery_becoming_more_unsettled:"Chubascos, empeorando",unsettled_rain_later:"Inestable, lluvia despu\xE9s",rain_at_times_worse_later:"Lluvia, empeorando despu\xE9s",rain_at_times_becoming_very_unsettled:"Lluvia, muy inestable",very_unsettled_rain:"Muy inestable, lluvia",fine_possibly_showers:"Buen tiempo, posibles chubascos",fairly_fine_showers_likely:"Bastante bueno, chubascos probables",showery_bright_intervals:"Chubascos, claros",changeable_some_rain:"Variable, algo de lluvia",unsettled_rain_at_times:"Inestable, lluvia a intervalos",rain_at_frequent_intervals:"Lluvia frecuente",stormy_much_rain:"Tormentoso, mucha lluvia",becoming_fine:"Mejorando",fairly_fine_improving:"Bastante bueno, mejorando",fairly_fine_possibly_showers_early:"Bastante bueno, chubascos tempranos",showery_early_improving:"Chubascos tempranos, mejorando",changeable_mending:"Variable, mejorando",rather_unsettled_clearing_later:"Inestable, despejando despu\xE9s",unsettled_probably_improving:"Inestable, probable mejora",unsettled_short_fine_intervals:"Inestable, claros breves",very_unsettled_finer_at_times:"Muy inestable, mejor a ratos",stormy_possibly_improving:"Tormentoso, posible mejora",stable:"Estable",sager_fair_improving:"Buen tiempo, mejorando",sager_fair_tending_to_deteriorate:"Buen tiempo, tendencia a empeorar",sager_fair_no_change:"Buen tiempo, sin cambios importantes",sager_unsettled_rain_likely:"Inestable, lluvia probable",sager_unsettled_probably_improving:"Inestable, probable mejora",sager_unsettled_rain_at_times:"Inestable, lluvia a intervalos",sager_changeable_becoming_fairer:"Variable, mejorando",sager_changeable_becoming_more_unsettled:"Variable, m\xE1s inestable",sager_variable_slowly_improving:"Variable, mejorando lentamente",sager_variable_slowly_deteriorating:"Variable, empeorando lentamente",sager_variable_some_change:"Variable, se esperan cambios"},hu:{settled_fine:"Sz\xE9p, stabil",fine_weather:"Sz\xE9p id\u0151",fine_becoming_less_settled:"Sz\xE9p, kev\xE9sb\xE9 stabil",fairly_fine_showery_later:"Eg\xE9sz sz\xE9p, k\xE9s\u0151bb z\xE1porok",showery_becoming_more_unsettled:"Z\xE1porok, roml\xE1s",unsettled_rain_later:"V\xE1ltoz\xE9kony, k\xE9s\u0151bb es\u0151",rain_at_times_worse_later:"Es\u0151, k\xE9s\u0151bb romlik",rain_at_times_becoming_very_unsettled:"Es\u0151, nagyon v\xE1ltoz\xE9kony",very_unsettled_rain:"Nagyon v\xE1ltoz\xE9kony, es\u0151",fine_possibly_showers:"Sz\xE9p, lehets\xE9ges z\xE1porok",fairly_fine_showers_likely:"Eg\xE9sz sz\xE9p, z\xE1porok val\xF3sz\xEDn\u0171ek",showery_bright_intervals:"Z\xE1porok, felh\u0151szakad\xE1sok",changeable_some_rain:"V\xE1ltoz\xE9kony, kev\xE9s es\u0151",unsettled_rain_at_times:"V\xE1ltoz\xE9kony, id\u0151nk\xE9nt es\u0151",rain_at_frequent_intervals:"Gyakori es\u0151",stormy_much_rain:"Viharos, sok es\u0151",becoming_fine:"Javul",fairly_fine_improving:"Eg\xE9sz sz\xE9p, javul",fairly_fine_possibly_showers_early:"Eg\xE9sz sz\xE9p, korai z\xE1porok",showery_early_improving:"Korai z\xE1porok, javul",changeable_mending:"V\xE1ltoz\xE9kony, javul",rather_unsettled_clearing_later:"Ink\xE1bb v\xE1ltoz\xE9kony, k\xE9s\u0151bb der\xFCl",unsettled_probably_improving:"V\xE1ltoz\xE9kony, val\xF3sz\xEDn\u0171 javul\xE1s",unsettled_short_fine_intervals:"V\xE1ltoz\xE9kony, r\xF6vid der\xFCl\xE9sek",very_unsettled_finer_at_times:"Nagyon v\xE1ltoz\xE9kony, id\u0151nk\xE9nt jobb",stormy_possibly_improving:"Viharos, lehets\xE9ges javul\xE1s",stable:"Stabil",sager_fair_improving:"Sz\xE9p id\u0151, javul",sager_fair_tending_to_deteriorate:"Sz\xE9p id\u0151, roml\xE1sra hajlik",sager_fair_no_change:"Sz\xE9p id\u0151, nincs jelent\u0151s v\xE1ltoz\xE1s",sager_unsettled_rain_likely:"V\xE1ltoz\xE9kony, es\u0151 val\xF3sz\xEDn\u0171",sager_unsettled_probably_improving:"V\xE1ltoz\xE9kony, val\xF3sz\xEDn\u0171 javul\xE1s",sager_unsettled_rain_at_times:"V\xE1ltoz\xE9kony, id\u0151nk\xE9nt es\u0151",sager_changeable_becoming_fairer:"V\xE1ltoz\xE9kony, javul",sager_changeable_becoming_more_unsettled:"V\xE1ltoz\xE9kony, v\xE1ltoz\xE9konyabb",sager_variable_slowly_improving:"V\xE1ltoz\xF3, lass\xFA javul\xE1s",sager_variable_slowly_deteriorating:"V\xE1ltoz\xF3, lass\xFA roml\xE1s",sager_variable_some_change:"V\xE1ltoz\xF3, v\xE1ltoz\xE1s v\xE1rhat\xF3"},it:{settled_fine:"Bel tempo stabile",fine_weather:"Bel tempo",fine_becoming_less_settled:"Bel tempo, meno stabile",fairly_fine_showery_later:"Abbastanza bello, rovesci dopo",showery_becoming_more_unsettled:"Rovesci, peggioramento",unsettled_rain_later:"Instabile, pioggia dopo",rain_at_times_worse_later:"Pioggia, peggioramento dopo",rain_at_times_becoming_very_unsettled:"Pioggia, molto instabile",very_unsettled_rain:"Molto instabile, pioggia",fine_possibly_showers:"Bel tempo, possibili rovesci",fairly_fine_showers_likely:"Abbastanza bello, rovesci probabili",showery_bright_intervals:"Rovesci, schiarite",changeable_some_rain:"Variabile, qualche pioggia",unsettled_rain_at_times:"Instabile, pioggia a tratti",rain_at_frequent_intervals:"Pioggia frequente",stormy_much_rain:"Tempestoso, molta pioggia",becoming_fine:"In miglioramento",fairly_fine_improving:"Abbastanza bello, in miglioramento",fairly_fine_possibly_showers_early:"Abbastanza bello, rovesci precoci",showery_early_improving:"Rovesci precoci, in miglioramento",changeable_mending:"Variabile, in miglioramento",rather_unsettled_clearing_later:"Instabile, schiarite dopo",unsettled_probably_improving:"Instabile, probabile miglioramento",unsettled_short_fine_intervals:"Instabile, brevi schiarite",very_unsettled_finer_at_times:"Molto instabile, migliora a tratti",stormy_possibly_improving:"Tempestoso, possibile miglioramento",stable:"Stabile",sager_fair_improving:"Bel tempo, in miglioramento",sager_fair_tending_to_deteriorate:"Bel tempo, tendenza al peggioramento",sager_fair_no_change:"Bel tempo, nessun cambiamento importante",sager_unsettled_rain_likely:"Instabile, pioggia probabile",sager_unsettled_probably_improving:"Instabile, probabile miglioramento",sager_unsettled_rain_at_times:"Instabile, pioggia a tratti",sager_changeable_becoming_fairer:"Variabile, in miglioramento",sager_changeable_becoming_more_unsettled:"Variabile, pi\xF9 instabile",sager_variable_slowly_improving:"Variabile, miglioramento lento",sager_variable_slowly_deteriorating:"Variabile, peggioramento lento",sager_variable_some_change:"Variabile, cambiamenti attesi"},ja:{settled_fine:"\u5B89\u5B9A\u3057\u305F\u597D\u5929",fine_weather:"\u597D\u5929",fine_becoming_less_settled:"\u597D\u5929\u3001\u4E0D\u5B89\u5B9A\u5316",fairly_fine_showery_later:"\u3084\u3084\u597D\u5929\u3001\u5F8C\u306B\u306B\u308F\u304B\u96E8",showery_becoming_more_unsettled:"\u306B\u308F\u304B\u96E8\u3001\u60AA\u5316",unsettled_rain_later:"\u4E0D\u5B89\u5B9A\u3001\u5F8C\u306B\u96E8",rain_at_times_worse_later:"\u6642\u3005\u96E8\u3001\u5F8C\u306B\u60AA\u5316",rain_at_times_becoming_very_unsettled:"\u6642\u3005\u96E8\u3001\u975E\u5E38\u306B\u4E0D\u5B89\u5B9A",very_unsettled_rain:"\u975E\u5E38\u306B\u4E0D\u5B89\u5B9A\u3001\u96E8",fine_possibly_showers:"\u597D\u5929\u3001\u306B\u308F\u304B\u96E8\u306E\u53EF\u80FD\u6027",fairly_fine_showers_likely:"\u3084\u3084\u597D\u5929\u3001\u306B\u308F\u304B\u96E8\u306E\u53EF\u80FD\u6027\u5927",showery_bright_intervals:"\u306B\u308F\u304B\u96E8\u3001\u6674\u308C\u9593",changeable_some_rain:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u5C0F\u96E8",unsettled_rain_at_times:"\u4E0D\u5B89\u5B9A\u3001\u6642\u3005\u96E8",rain_at_frequent_intervals:"\u983B\u7E41\u306A\u96E8",stormy_much_rain:"\u5D50\u3001\u5927\u96E8",becoming_fine:"\u56DE\u5FA9\u50BE\u5411",fairly_fine_improving:"\u3084\u3084\u597D\u5929\u3001\u6539\u5584",fairly_fine_possibly_showers_early:"\u3084\u3084\u597D\u5929\u3001\u65E9\u3044\u306B\u308F\u304B\u96E8",showery_early_improving:"\u65E9\u3044\u306B\u308F\u304B\u96E8\u3001\u6539\u5584",changeable_mending:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u6539\u5584",rather_unsettled_clearing_later:"\u3084\u3084\u4E0D\u5B89\u5B9A\u3001\u5F8C\u306B\u6674\u308C",unsettled_probably_improving:"\u4E0D\u5B89\u5B9A\u3001\u304A\u305D\u3089\u304F\u6539\u5584",unsettled_short_fine_intervals:"\u4E0D\u5B89\u5B9A\u3001\u77ED\u3044\u6674\u308C\u9593",very_unsettled_finer_at_times:"\u975E\u5E38\u306B\u4E0D\u5B89\u5B9A\u3001\u6642\u3005\u6539\u5584",stormy_possibly_improving:"\u5D50\u3001\u6539\u5584\u306E\u53EF\u80FD\u6027",stable:"\u5B89\u5B9A",sager_fair_improving:"\u597D\u5929\u3001\u6539\u5584",sager_fair_tending_to_deteriorate:"\u597D\u5929\u3001\u60AA\u5316\u50BE\u5411",sager_fair_no_change:"\u597D\u5929\u3001\u5927\u304D\u306A\u5909\u5316\u306A\u3057",sager_unsettled_rain_likely:"\u4E0D\u5B89\u5B9A\u3001\u96E8\u306E\u53EF\u80FD\u6027",sager_unsettled_probably_improving:"\u4E0D\u5B89\u5B9A\u3001\u304A\u305D\u3089\u304F\u6539\u5584",sager_unsettled_rain_at_times:"\u4E0D\u5B89\u5B9A\u3001\u6642\u3005\u96E8",sager_changeable_becoming_fairer:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u6539\u5584\u50BE\u5411",sager_changeable_becoming_more_unsettled:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u3088\u308A\u4E0D\u5B89\u5B9A",sager_variable_slowly_improving:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u7DE9\u3084\u304B\u306B\u6539\u5584",sager_variable_slowly_deteriorating:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u7DE9\u3084\u304B\u306B\u60AA\u5316",sager_variable_some_change:"\u5909\u308F\u308A\u3084\u3059\u3044\u3001\u5909\u5316\u3042\u308A"},ko:{settled_fine:"\uB9D1\uACE0 \uC548\uC815\uC801",fine_weather:"\uC88B\uC740 \uB0A0\uC528",fine_becoming_less_settled:"\uC88B\uC74C, \uBD88\uC548\uC815\uD574\uC9D0",fairly_fine_showery_later:"\uAF64 \uC88B\uC74C, \uB098\uC911\uC5D0 \uC18C\uB098\uAE30",showery_becoming_more_unsettled:"\uC18C\uB098\uAE30, \uC545\uD654",unsettled_rain_later:"\uBD88\uC548\uC815, \uB098\uC911\uC5D0 \uBE44",rain_at_times_worse_later:"\uBE44, \uB098\uC911\uC5D0 \uC545\uD654",rain_at_times_becoming_very_unsettled:"\uBE44, \uB9E4\uC6B0 \uBD88\uC548\uC815",very_unsettled_rain:"\uB9E4\uC6B0 \uBD88\uC548\uC815, \uBE44",fine_possibly_showers:"\uC88B\uC74C, \uC18C\uB098\uAE30 \uAC00\uB2A5",fairly_fine_showers_likely:"\uAF64 \uC88B\uC74C, \uC18C\uB098\uAE30 \uAC00\uB2A5\uC131",showery_bright_intervals:"\uC18C\uB098\uAE30, \uAC04\uD5D0\uC801 \uB9D1\uC74C",changeable_some_rain:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uC57D\uD55C \uBE44",unsettled_rain_at_times:"\uBD88\uC548\uC815, \uB54C\uB54C\uB85C \uBE44",rain_at_frequent_intervals:"\uC7A6\uC740 \uBE44",stormy_much_rain:"\uD3ED\uD48D, \uB9CE\uC740 \uBE44",becoming_fine:"\uAC1C\uC120 \uC911",fairly_fine_improving:"\uAF64 \uC88B\uC74C, \uAC1C\uC120",fairly_fine_possibly_showers_early:"\uAF64 \uC88B\uC74C, \uC774\uB978 \uC18C\uB098\uAE30",showery_early_improving:"\uC774\uB978 \uC18C\uB098\uAE30, \uAC1C\uC120",changeable_mending:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uAC1C\uC120",rather_unsettled_clearing_later:"\uB2E4\uC18C \uBD88\uC548\uC815, \uB098\uC911\uC5D0 \uAC2C",unsettled_probably_improving:"\uBD88\uC548\uC815, \uC544\uB9C8 \uAC1C\uC120",unsettled_short_fine_intervals:"\uBD88\uC548\uC815, \uC9E7\uC740 \uB9D1\uC74C",very_unsettled_finer_at_times:"\uB9E4\uC6B0 \uBD88\uC548\uC815, \uB54C\uB54C\uB85C \uAC1C\uC120",stormy_possibly_improving:"\uD3ED\uD48D, \uAC1C\uC120 \uAC00\uB2A5",stable:"\uC548\uC815",sager_fair_improving:"\uC88B\uC740 \uB0A0\uC528, \uAC1C\uC120",sager_fair_tending_to_deteriorate:"\uC88B\uC74C, \uC545\uD654 \uACBD\uD5A5",sager_fair_no_change:"\uC88B\uC740 \uB0A0\uC528, \uD070 \uBCC0\uD654 \uC5C6\uC74C",sager_unsettled_rain_likely:"\uBD88\uC548\uC815, \uBE44 \uAC00\uB2A5\uC131",sager_unsettled_probably_improving:"\uBD88\uC548\uC815, \uC544\uB9C8 \uAC1C\uC120",sager_unsettled_rain_at_times:"\uBD88\uC548\uC815, \uB54C\uB54C\uB85C \uBE44",sager_changeable_becoming_fairer:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uAC1C\uC120 \uACBD\uD5A5",sager_changeable_becoming_more_unsettled:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uB354 \uBD88\uC548\uC815",sager_variable_slowly_improving:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uC11C\uC11C\uD788 \uAC1C\uC120",sager_variable_slowly_deteriorating:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uC11C\uC11C\uD788 \uC545\uD654",sager_variable_some_change:"\uBCC0\uB355\uC2A4\uB7EC\uC6C0, \uBCC0\uD654 \uC608\uC0C1"},nb:{settled_fine:"Fint, stabilt",fine_weather:"Fint v\xE6r",fine_becoming_less_settled:"Fint, mindre stabilt",fairly_fine_showery_later:"Ganske fint, byger senere",showery_becoming_more_unsettled:"Byger, forverres",unsettled_rain_later:"Ustabilt, regn senere",rain_at_times_worse_later:"Regn, verre senere",rain_at_times_becoming_very_unsettled:"Regn, sv\xE6rt ustabilt",very_unsettled_rain:"Sv\xE6rt ustabilt, regn",fine_possibly_showers:"Fint, mulige byger",fairly_fine_showers_likely:"Ganske fint, byger sannsynlige",showery_bright_intervals:"Byger, opphold",changeable_some_rain:"Skiftende, litt regn",unsettled_rain_at_times:"Ustabilt, regn av og til",rain_at_frequent_intervals:"Hyppig regn",stormy_much_rain:"Stormfullt, mye regn",becoming_fine:"Forbedres",fairly_fine_improving:"Ganske fint, forbedres",fairly_fine_possibly_showers_early:"Ganske fint, tidlige byger",showery_early_improving:"Tidlige byger, forbedres",changeable_mending:"Skiftende, forbedres",rather_unsettled_clearing_later:"Ganske ustabilt, klarner senere",unsettled_probably_improving:"Ustabilt, sannsynlig forbedring",unsettled_short_fine_intervals:"Ustabilt, korte opphold",very_unsettled_finer_at_times:"Sv\xE6rt ustabilt, til tider bedre",stormy_possibly_improving:"Stormfullt, mulig forbedring",stable:"Stabilt",sager_fair_improving:"Fint v\xE6r, forbedres",sager_fair_tending_to_deteriorate:"Fint v\xE6r, tendens til forverring",sager_fair_no_change:"Fint v\xE6r, ingen viktig endring",sager_unsettled_rain_likely:"Ustabilt, regn sannsynlig",sager_unsettled_probably_improving:"Ustabilt, sannsynlig forbedring",sager_unsettled_rain_at_times:"Ustabilt, regn av og til",sager_changeable_becoming_fairer:"Skiftende, blir finere",sager_changeable_becoming_more_unsettled:"Skiftende, mer ustabilt",sager_variable_slowly_improving:"Variabelt, langsom forbedring",sager_variable_slowly_deteriorating:"Variabelt, langsom forverring",sager_variable_some_change:"Variabelt, endring forventes"},nl:{settled_fine:"Mooi, stabiel",fine_weather:"Mooi weer",fine_becoming_less_settled:"Mooi, minder stabiel",fairly_fine_showery_later:"Redelijk mooi, buien later",showery_becoming_more_unsettled:"Buien, verslechtering",unsettled_rain_later:"Onstabiel, regen later",rain_at_times_worse_later:"Regen, later slechter",rain_at_times_becoming_very_unsettled:"Regen, zeer onstabiel",very_unsettled_rain:"Zeer onstabiel, regen",fine_possibly_showers:"Mooi, mogelijk buien",fairly_fine_showers_likely:"Redelijk mooi, buien waarschijnlijk",showery_bright_intervals:"Buien, opklaringen",changeable_some_rain:"Wisselvallig, wat regen",unsettled_rain_at_times:"Onstabiel, regen af en toe",rain_at_frequent_intervals:"Frequente regen",stormy_much_rain:"Stormachtig, veel regen",becoming_fine:"Wordt mooier",fairly_fine_improving:"Redelijk mooi, verbetering",fairly_fine_possibly_showers_early:"Redelijk mooi, vroege buien",showery_early_improving:"Vroege buien, verbetering",changeable_mending:"Wisselvallig, verbetering",rather_unsettled_clearing_later:"Onstabiel, later opklaring",unsettled_probably_improving:"Onstabiel, waarschijnlijk beter",unsettled_short_fine_intervals:"Onstabiel, korte opklaringen",very_unsettled_finer_at_times:"Zeer onstabiel, soms beter",stormy_possibly_improving:"Stormachtig, mogelijk beter",stable:"Stabiel",sager_fair_improving:"Mooi weer, verbetering",sager_fair_tending_to_deteriorate:"Mooi weer, neiging tot verslechtering",sager_fair_no_change:"Mooi weer, geen belangrijke verandering",sager_unsettled_rain_likely:"Onstabiel, regen waarschijnlijk",sager_unsettled_probably_improving:"Onstabiel, waarschijnlijk beter",sager_unsettled_rain_at_times:"Onstabiel, regen af en toe",sager_changeable_becoming_fairer:"Wisselvallig, wordt mooier",sager_changeable_becoming_more_unsettled:"Wisselvallig, onstabieler",sager_variable_slowly_improving:"Variabel, langzaam beter",sager_variable_slowly_deteriorating:"Variabel, langzaam slechter",sager_variable_some_change:"Variabel, verandering verwacht"},pl:{settled_fine:"\u0141adna, stabilna pogoda",fine_weather:"\u0141adna pogoda",fine_becoming_less_settled:"\u0141adnie, mniej stabilnie",fairly_fine_showery_later:"Do\u015B\u0107 \u0142adnie, p\xF3\u017Aniej przelotne",showery_becoming_more_unsettled:"Przelotne, pogorszenie",unsettled_rain_later:"Niestabilnie, p\xF3\u017Aniej deszcz",rain_at_times_worse_later:"Deszcz, p\xF3\u017Aniej gorzej",rain_at_times_becoming_very_unsettled:"Deszcz, bardzo niestabilnie",very_unsettled_rain:"Bardzo niestabilnie, deszcz",fine_possibly_showers:"\u0141adnie, mo\u017Cliwe przelotne",fairly_fine_showers_likely:"Do\u015B\u0107 \u0142adnie, przelotne prawdopodobne",showery_bright_intervals:"Przelotne, przeja\u015Bnienia",changeable_some_rain:"Zmiennie, odrobin\u0119 deszczu",unsettled_rain_at_times:"Niestabilnie, deszcz okresami",rain_at_frequent_intervals:"Cz\u0119sty deszcz",stormy_much_rain:"Burzowo, du\u017Co deszczu",becoming_fine:"Poprawa pogody",fairly_fine_improving:"Do\u015B\u0107 \u0142adnie, poprawa",fairly_fine_possibly_showers_early:"Do\u015B\u0107 \u0142adnie, wczesne przelotne",showery_early_improving:"Wczesne przelotne, poprawa",changeable_mending:"Zmiennie, poprawa",rather_unsettled_clearing_later:"Niestabilnie, p\xF3\u017Aniej przeja\u015Bnienia",unsettled_probably_improving:"Niestabilnie, prawdopodobna poprawa",unsettled_short_fine_intervals:"Niestabilnie, kr\xF3tkie przeja\u015Bnienia",very_unsettled_finer_at_times:"Bardzo niestabilnie, chwilami lepiej",stormy_possibly_improving:"Burzowo, mo\u017Cliwa poprawa",stable:"Stabilnie",sager_fair_improving:"\u0141adna pogoda, poprawa",sager_fair_tending_to_deteriorate:"\u0141adna pogoda, tendencja do pogorszenia",sager_fair_no_change:"\u0141adna pogoda, bez istotnych zmian",sager_unsettled_rain_likely:"Niestabilnie, deszcz prawdopodobny",sager_unsettled_probably_improving:"Niestabilnie, prawdopodobna poprawa",sager_unsettled_rain_at_times:"Niestabilnie, deszcz okresami",sager_changeable_becoming_fairer:"Zmiennie, poprawa",sager_changeable_becoming_more_unsettled:"Zmiennie, bardziej niestabilnie",sager_variable_slowly_improving:"Zmiennie, powolna poprawa",sager_variable_slowly_deteriorating:"Zmiennie, powolne pogorszenie",sager_variable_some_change:"Zmiennie, oczekiwane zmiany"},pt:{settled_fine:"Bom tempo est\xE1vel",fine_weather:"Bom tempo",fine_becoming_less_settled:"Bom tempo, menos est\xE1vel",fairly_fine_showery_later:"Razoavelmente bom, aguaceiros depois",showery_becoming_more_unsettled:"Aguaceiros, piora",unsettled_rain_later:"Inst\xE1vel, chuva depois",rain_at_times_worse_later:"Chuva, piora depois",rain_at_times_becoming_very_unsettled:"Chuva, muito inst\xE1vel",very_unsettled_rain:"Muito inst\xE1vel, chuva",fine_possibly_showers:"Bom tempo, poss\xEDveis aguaceiros",fairly_fine_showers_likely:"Razoavelmente bom, aguaceiros prov\xE1veis",showery_bright_intervals:"Aguaceiros, claros",changeable_some_rain:"Vari\xE1vel, alguma chuva",unsettled_rain_at_times:"Inst\xE1vel, chuva por vezes",rain_at_frequent_intervals:"Chuva frequente",stormy_much_rain:"Tempestuoso, muita chuva",becoming_fine:"A melhorar",fairly_fine_improving:"Razoavelmente bom, a melhorar",fairly_fine_possibly_showers_early:"Razoavelmente bom, aguaceiros cedo",showery_early_improving:"Aguaceiros cedo, a melhorar",changeable_mending:"Vari\xE1vel, a melhorar",rather_unsettled_clearing_later:"Inst\xE1vel, clareia depois",unsettled_probably_improving:"Inst\xE1vel, prov\xE1vel melhoria",unsettled_short_fine_intervals:"Inst\xE1vel, claros breves",very_unsettled_finer_at_times:"Muito inst\xE1vel, melhora \xE0s vezes",stormy_possibly_improving:"Tempestuoso, poss\xEDvel melhoria",stable:"Est\xE1vel",sager_fair_improving:"Bom tempo, a melhorar",sager_fair_tending_to_deteriorate:"Bom tempo, tend\xEAncia a piorar",sager_fair_no_change:"Bom tempo, sem altera\xE7\xE3o importante",sager_unsettled_rain_likely:"Inst\xE1vel, chuva prov\xE1vel",sager_unsettled_probably_improving:"Inst\xE1vel, prov\xE1vel melhoria",sager_unsettled_rain_at_times:"Inst\xE1vel, chuva por vezes",sager_changeable_becoming_fairer:"Vari\xE1vel, a melhorar",sager_changeable_becoming_more_unsettled:"Vari\xE1vel, mais inst\xE1vel",sager_variable_slowly_improving:"Vari\xE1vel, melhoria lenta",sager_variable_slowly_deteriorating:"Vari\xE1vel, piora lenta",sager_variable_some_change:"Vari\xE1vel, mudan\xE7as esperadas"},sv:{settled_fine:"Fint, stabilt",fine_weather:"Fint v\xE4der",fine_becoming_less_settled:"Fint, mindre stabilt",fairly_fine_showery_later:"Ganska fint, skurar senare",showery_becoming_more_unsettled:"Skurar, f\xF6rs\xE4mras",unsettled_rain_later:"Ostadigt, regn senare",rain_at_times_worse_later:"Regn, s\xE4mre senare",rain_at_times_becoming_very_unsettled:"Regn, mycket ostadigt",very_unsettled_rain:"Mycket ostadigt, regn",fine_possibly_showers:"Fint, m\xF6jliga skurar",fairly_fine_showers_likely:"Ganska fint, skurar troliga",showery_bright_intervals:"Skurar, uppeh\xE5ll",changeable_some_rain:"Ombytligt, lite regn",unsettled_rain_at_times:"Ostadigt, regn ibland",rain_at_frequent_intervals:"Frekvent regn",stormy_much_rain:"Stormigt, mycket regn",becoming_fine:"F\xF6rb\xE4ttras",fairly_fine_improving:"Ganska fint, f\xF6rb\xE4ttras",fairly_fine_possibly_showers_early:"Ganska fint, tidiga skurar",showery_early_improving:"Tidiga skurar, f\xF6rb\xE4ttras",changeable_mending:"Ombytligt, f\xF6rb\xE4ttras",rather_unsettled_clearing_later:"Ganska ostadigt, klarnar senare",unsettled_probably_improving:"Ostadigt, troligen f\xF6rb\xE4ttring",unsettled_short_fine_intervals:"Ostadigt, korta uppeh\xE5ll",very_unsettled_finer_at_times:"Mycket ostadigt, ibland b\xE4ttre",stormy_possibly_improving:"Stormigt, m\xF6jlig f\xF6rb\xE4ttring",stable:"Stabilt",sager_fair_improving:"Fint v\xE4der, f\xF6rb\xE4ttras",sager_fair_tending_to_deteriorate:"Fint v\xE4der, tendens att f\xF6rs\xE4mras",sager_fair_no_change:"Fint v\xE4der, ingen viktig f\xF6r\xE4ndring",sager_unsettled_rain_likely:"Ostadigt, regn troligt",sager_unsettled_probably_improving:"Ostadigt, troligen f\xF6rb\xE4ttring",sager_unsettled_rain_at_times:"Ostadigt, regn ibland",sager_changeable_becoming_fairer:"Ombytligt, blir finare",sager_changeable_becoming_more_unsettled:"Ombytligt, mer ostadigt",sager_variable_slowly_improving:"Variabelt, l\xE5ngsam f\xF6rb\xE4ttring",sager_variable_slowly_deteriorating:"Variabelt, l\xE5ngsam f\xF6rs\xE4mring",sager_variable_some_change:"Variabelt, f\xF6r\xE4ndring v\xE4ntas"},tr:{settled_fine:"G\xFCzel, stabil",fine_weather:"G\xFCzel hava",fine_becoming_less_settled:"G\xFCzel, daha az stabil",fairly_fine_showery_later:"Olduk\xE7a g\xFCzel, sonra sa\u011Fanak",showery_becoming_more_unsettled:"Sa\u011Fanak, k\xF6t\xFCle\u015Fme",unsettled_rain_later:"Dalgal\u0131, sonra ya\u011Fmur",rain_at_times_worse_later:"Ya\u011Fmur, sonra k\xF6t\xFCle\u015Fme",rain_at_times_becoming_very_unsettled:"Ya\u011Fmur, \xE7ok dalgal\u0131",very_unsettled_rain:"\xC7ok dalgal\u0131, ya\u011Fmur",fine_possibly_showers:"G\xFCzel, sa\u011Fanak olas\u0131",fairly_fine_showers_likely:"Olduk\xE7a g\xFCzel, sa\u011Fanak muhtemel",showery_bright_intervals:"Sa\u011Fanak, a\xE7\u0131lmalar",changeable_some_rain:"De\u011Fi\u015Fken, biraz ya\u011Fmur",unsettled_rain_at_times:"Dalgal\u0131, ara s\u0131ra ya\u011Fmur",rain_at_frequent_intervals:"S\u0131k ya\u011Fmur",stormy_much_rain:"F\u0131rt\u0131nal\u0131, \xE7ok ya\u011Fmur",becoming_fine:"D\xFCzeliyor",fairly_fine_improving:"Olduk\xE7a g\xFCzel, d\xFCzeliyor",fairly_fine_possibly_showers_early:"Olduk\xE7a g\xFCzel, erken sa\u011Fanak",showery_early_improving:"Erken sa\u011Fanak, d\xFCzeliyor",changeable_mending:"De\u011Fi\u015Fken, d\xFCzeliyor",rather_unsettled_clearing_later:"Dalgal\u0131, sonra a\xE7\u0131l\u0131yor",unsettled_probably_improving:"Dalgal\u0131, muhtemelen d\xFCzeliyor",unsettled_short_fine_intervals:"Dalgal\u0131, k\u0131sa a\xE7\u0131lmalar",very_unsettled_finer_at_times:"\xC7ok dalgal\u0131, ara s\u0131ra d\xFCzeliyor",stormy_possibly_improving:"F\u0131rt\u0131nal\u0131, d\xFCzelme olas\u0131",stable:"Stabil",sager_fair_improving:"G\xFCzel hava, d\xFCzeliyor",sager_fair_tending_to_deteriorate:"G\xFCzel hava, k\xF6t\xFCle\u015Fme e\u011Filimi",sager_fair_no_change:"G\xFCzel hava, \xF6nemli de\u011Fi\u015Fiklik yok",sager_unsettled_rain_likely:"Dalgal\u0131, ya\u011Fmur olas\u0131",sager_unsettled_probably_improving:"Dalgal\u0131, muhtemelen d\xFCzeliyor",sager_unsettled_rain_at_times:"Dalgal\u0131, ara s\u0131ra ya\u011Fmur",sager_changeable_becoming_fairer:"De\u011Fi\u015Fken, d\xFCzeliyor",sager_changeable_becoming_more_unsettled:"De\u011Fi\u015Fken, daha dalgal\u0131",sager_variable_slowly_improving:"De\u011Fi\u015Fken, yava\u015F d\xFCzelme",sager_variable_slowly_deteriorating:"De\u011Fi\u015Fken, yava\u015F k\xF6t\xFCle\u015Fme",sager_variable_some_change:"De\u011Fi\u015Fken, de\u011Fi\u015Fiklik bekleniyor"},uk:{settled_fine:"\u042F\u0441\u043D\u043E, \u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E",fine_weather:"\u0413\u0430\u0440\u043D\u0430 \u043F\u043E\u0433\u043E\u0434\u0430",fine_becoming_less_settled:"\u0414\u043E\u0431\u0440\u0435, \u043C\u043E\u0436\u043B\u0438\u0432\u0435 \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",fairly_fine_showery_later:"\u0414\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0431\u0440\u0435, \u0437\u0433\u043E\u0434\u043E\u043C \u0434\u043E\u0449\u0456",showery_becoming_more_unsettled:"\u0414\u043E\u0449\u043E\u0432\u043E, \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",unsettled_rain_later:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449 \u043F\u0456\u0437\u043D\u0456\u0448\u0435",rain_at_times_worse_later:"\u0414\u043E\u0449\u0456, \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F \u043F\u0456\u0437\u043D\u0456\u0448\u0435",rain_at_times_becoming_very_unsettled:"\u0414\u043E\u0449\u0456, \u0434\u0443\u0436\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E",very_unsettled_rain:"\u0414\u0443\u0436\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449",fine_possibly_showers:"\u0414\u043E\u0431\u0440\u0435, \u043C\u043E\u0436\u043B\u0438\u0432\u0456 \u0437\u043B\u0438\u0432\u0438",fairly_fine_showers_likely:"\u0414\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0431\u0440\u0435, \u0437\u043B\u0438\u0432\u0438 \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0456",showery_bright_intervals:"\u0417\u043B\u0438\u0432\u0438, \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F",changeable_some_rain:"\u041C\u0456\u043D\u043B\u0438\u0432\u0430, \u043D\u0435\u0432\u0435\u043B\u0438\u043A\u0438\u0439 \u0434\u043E\u0449",unsettled_rain_at_times:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449\u0456 \u043F\u0435\u0440\u0456\u043E\u0434\u0438\u0447\u043D\u043E",rain_at_frequent_intervals:"\u0427\u0430\u0441\u0442\u0456 \u0434\u043E\u0449\u0456",stormy_much_rain:"\u0428\u0442\u043E\u0440\u043C\u043E\u0432\u043E, \u0441\u0438\u043B\u044C\u043D\u0456 \u0434\u043E\u0449\u0456",becoming_fine:"\u041F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u043F\u043E\u0433\u043E\u0434\u0438",fairly_fine_improving:"\u0414\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0431\u0440\u0435, \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",fairly_fine_possibly_showers_early:"\u0414\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0431\u0440\u0435, \u0440\u0430\u043D\u043D\u0456 \u0437\u043B\u0438\u0432\u0438",showery_early_improving:"\u0420\u0430\u043D\u043D\u0456 \u0437\u043B\u0438\u0432\u0438, \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",changeable_mending:"\u041C\u0456\u043D\u043B\u0438\u0432\u0430, \u043F\u043E\u043A\u0440\u0430\u0449\u0443\u0454\u0442\u044C\u0441\u044F",rather_unsettled_clearing_later:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F \u043F\u0456\u0437\u043D\u0456\u0448\u0435",unsettled_probably_improving:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0435 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",unsettled_short_fine_intervals:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u043A\u043E\u0440\u043E\u0442\u043A\u0456 \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F",very_unsettled_finer_at_times:"\u0414\u0443\u0436\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0447\u0430\u0441\u043E\u043C \u043A\u0440\u0430\u0449\u0435",stormy_possibly_improving:"\u0428\u0442\u043E\u0440\u043C\u043E\u0432\u043E, \u043C\u043E\u0436\u043B\u0438\u0432\u0435 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",stable:"\u0421\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E",sager_fair_improving:"\u0413\u0430\u0440\u043D\u0430 \u043F\u043E\u0433\u043E\u0434\u0430, \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",sager_fair_tending_to_deteriorate:"\u041F\u043E\u043A\u0438 \u0434\u043E\u0431\u0440\u0435, \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",sager_fair_no_change:"\u0413\u0430\u0440\u043D\u0430 \u043F\u043E\u0433\u043E\u0434\u0430, \u0431\u0435\u0437 \u0437\u043C\u0456\u043D",sager_unsettled_rain_likely:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449 \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0438\u0439",sager_unsettled_probably_improving:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0435 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",sager_unsettled_rain_at_times:"\u041D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E, \u0434\u043E\u0449\u0456 \u043F\u0435\u0440\u0456\u043E\u0434\u0438\u0447\u043D\u043E",sager_changeable_becoming_fairer:"\u041C\u0456\u043D\u043B\u0438\u0432\u0430, \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F",sager_changeable_becoming_more_unsettled:"\u041C\u0456\u043D\u043B\u0438\u0432\u0430, \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",sager_variable_slowly_improving:"\u0417\u043C\u0456\u043D\u043D\u0430, \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u0435 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F",sager_variable_slowly_deteriorating:"\u0417\u043C\u0456\u043D\u043D\u0430, \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u0435 \u043F\u043E\u0433\u0456\u0440\u0448\u0435\u043D\u043D\u044F",sager_variable_some_change:"\u0417\u043C\u0456\u043D\u043D\u0430, \u043E\u0447\u0456\u043A\u0443\u044E\u0442\u044C\u0441\u044F \u0437\u043C\u0456\u043D\u0438"},"zh-Hans":{settled_fine:"\u6674\u6717\u7A33\u5B9A",fine_weather:"\u5929\u6C14\u826F\u597D",fine_becoming_less_settled:"\u826F\u597D\uFF0C\u8D8B\u4E8E\u4E0D\u7A33\u5B9A",fairly_fine_showery_later:"\u8F83\u597D\uFF0C\u7A0D\u540E\u9635\u96E8",showery_becoming_more_unsettled:"\u9635\u96E8\uFF0C\u8F6C\u5DEE",unsettled_rain_later:"\u4E0D\u7A33\u5B9A\uFF0C\u7A0D\u540E\u964D\u96E8",rain_at_times_worse_later:"\u65F6\u6709\u964D\u96E8\uFF0C\u7A0D\u540E\u8F6C\u5DEE",rain_at_times_becoming_very_unsettled:"\u65F6\u6709\u964D\u96E8\uFF0C\u975E\u5E38\u4E0D\u7A33\u5B9A",very_unsettled_rain:"\u975E\u5E38\u4E0D\u7A33\u5B9A\uFF0C\u6709\u96E8",fine_possibly_showers:"\u826F\u597D\uFF0C\u53EF\u80FD\u6709\u9635\u96E8",fairly_fine_showers_likely:"\u8F83\u597D\uFF0C\u53EF\u80FD\u6709\u9635\u96E8",showery_bright_intervals:"\u9635\u96E8\uFF0C\u95F4\u6674",changeable_some_rain:"\u591A\u53D8\uFF0C\u6709\u5C0F\u96E8",unsettled_rain_at_times:"\u4E0D\u7A33\u5B9A\uFF0C\u65F6\u6709\u964D\u96E8",rain_at_frequent_intervals:"\u9891\u7E41\u964D\u96E8",stormy_much_rain:"\u66B4\u98CE\u96E8\uFF0C\u5927\u96E8",becoming_fine:"\u8F6C\u597D",fairly_fine_improving:"\u8F83\u597D\uFF0C\u6539\u5584\u4E2D",fairly_fine_possibly_showers_early:"\u8F83\u597D\uFF0C\u65E9\u671F\u53EF\u80FD\u6709\u9635\u96E8",showery_early_improving:"\u65E9\u671F\u9635\u96E8\uFF0C\u6539\u5584\u4E2D",changeable_mending:"\u591A\u53D8\uFF0C\u597D\u8F6C\u4E2D",rather_unsettled_clearing_later:"\u8F83\u4E0D\u7A33\u5B9A\uFF0C\u7A0D\u540E\u8F6C\u6674",unsettled_probably_improving:"\u4E0D\u7A33\u5B9A\uFF0C\u53EF\u80FD\u597D\u8F6C",unsettled_short_fine_intervals:"\u4E0D\u7A33\u5B9A\uFF0C\u77ED\u6682\u6674\u6717",very_unsettled_finer_at_times:"\u975E\u5E38\u4E0D\u7A33\u5B9A\uFF0C\u65F6\u6709\u597D\u8F6C",stormy_possibly_improving:"\u66B4\u98CE\u96E8\uFF0C\u53EF\u80FD\u597D\u8F6C",stable:"\u7A33\u5B9A",sager_fair_improving:"\u5929\u6C14\u826F\u597D\uFF0C\u6539\u5584\u4E2D",sager_fair_tending_to_deteriorate:"\u76EE\u524D\u826F\u597D\uFF0C\u8D8B\u4E8E\u8F6C\u5DEE",sager_fair_no_change:"\u5929\u6C14\u826F\u597D\uFF0C\u65E0\u660E\u663E\u53D8\u5316",sager_unsettled_rain_likely:"\u4E0D\u7A33\u5B9A\uFF0C\u53EF\u80FD\u6709\u96E8",sager_unsettled_probably_improving:"\u4E0D\u7A33\u5B9A\uFF0C\u53EF\u80FD\u597D\u8F6C",sager_unsettled_rain_at_times:"\u4E0D\u7A33\u5B9A\uFF0C\u65F6\u6709\u964D\u96E8",sager_changeable_becoming_fairer:"\u591A\u53D8\uFF0C\u8D8B\u4E8E\u597D\u8F6C",sager_changeable_becoming_more_unsettled:"\u591A\u53D8\uFF0C\u8D8B\u4E8E\u66F4\u4E0D\u7A33\u5B9A",sager_variable_slowly_improving:"\u591A\u53D8\uFF0C\u7F13\u6162\u597D\u8F6C",sager_variable_slowly_deteriorating:"\u591A\u53D8\uFF0C\u7F13\u6162\u8F6C\u5DEE",sager_variable_some_change:"\u591A\u53D8\uFF0C\u9884\u8BA1\u6709\u53D8\u5316"},"zh-Hant":{settled_fine:"\u6674\u6717\u7A69\u5B9A",fine_weather:"\u5929\u6C23\u826F\u597D",fine_becoming_less_settled:"\u826F\u597D\uFF0C\u8DA8\u65BC\u4E0D\u7A69\u5B9A",fairly_fine_showery_later:"\u8F03\u597D\uFF0C\u7A0D\u5F8C\u9663\u96E8",showery_becoming_more_unsettled:"\u9663\u96E8\uFF0C\u8F49\u5DEE",unsettled_rain_later:"\u4E0D\u7A69\u5B9A\uFF0C\u7A0D\u5F8C\u964D\u96E8",rain_at_times_worse_later:"\u6642\u6709\u964D\u96E8\uFF0C\u7A0D\u5F8C\u8F49\u5DEE",rain_at_times_becoming_very_unsettled:"\u6642\u6709\u964D\u96E8\uFF0C\u975E\u5E38\u4E0D\u7A69\u5B9A",very_unsettled_rain:"\u975E\u5E38\u4E0D\u7A69\u5B9A\uFF0C\u6709\u96E8",fine_possibly_showers:"\u826F\u597D\uFF0C\u53EF\u80FD\u6709\u9663\u96E8",fairly_fine_showers_likely:"\u8F03\u597D\uFF0C\u53EF\u80FD\u6709\u9663\u96E8",showery_bright_intervals:"\u9663\u96E8\uFF0C\u9593\u6674",changeable_some_rain:"\u591A\u8B8A\uFF0C\u6709\u5C0F\u96E8",unsettled_rain_at_times:"\u4E0D\u7A69\u5B9A\uFF0C\u6642\u6709\u964D\u96E8",rain_at_frequent_intervals:"\u983B\u7E41\u964D\u96E8",stormy_much_rain:"\u66B4\u98A8\u96E8\uFF0C\u5927\u96E8",becoming_fine:"\u8F49\u597D",fairly_fine_improving:"\u8F03\u597D\uFF0C\u6539\u5584\u4E2D",fairly_fine_possibly_showers_early:"\u8F03\u597D\uFF0C\u65E9\u671F\u53EF\u80FD\u6709\u9663\u96E8",showery_early_improving:"\u65E9\u671F\u9663\u96E8\uFF0C\u6539\u5584\u4E2D",changeable_mending:"\u591A\u8B8A\uFF0C\u597D\u8F49\u4E2D",rather_unsettled_clearing_later:"\u8F03\u4E0D\u7A69\u5B9A\uFF0C\u7A0D\u5F8C\u8F49\u6674",unsettled_probably_improving:"\u4E0D\u7A69\u5B9A\uFF0C\u53EF\u80FD\u597D\u8F49",unsettled_short_fine_intervals:"\u4E0D\u7A69\u5B9A\uFF0C\u77ED\u66AB\u6674\u6717",very_unsettled_finer_at_times:"\u975E\u5E38\u4E0D\u7A69\u5B9A\uFF0C\u6642\u6709\u597D\u8F49",stormy_possibly_improving:"\u66B4\u98A8\u96E8\uFF0C\u53EF\u80FD\u597D\u8F49",stable:"\u7A69\u5B9A",sager_fair_improving:"\u5929\u6C23\u826F\u597D\uFF0C\u6539\u5584\u4E2D",sager_fair_tending_to_deteriorate:"\u76EE\u524D\u826F\u597D\uFF0C\u8DA8\u65BC\u8F49\u5DEE",sager_fair_no_change:"\u5929\u6C23\u826F\u597D\uFF0C\u7121\u660E\u986F\u8B8A\u5316",sager_unsettled_rain_likely:"\u4E0D\u7A69\u5B9A\uFF0C\u53EF\u80FD\u6709\u96E8",sager_unsettled_probably_improving:"\u4E0D\u7A69\u5B9A\uFF0C\u53EF\u80FD\u597D\u8F49",sager_unsettled_rain_at_times:"\u4E0D\u7A69\u5B9A\uFF0C\u6642\u6709\u964D\u96E8",sager_changeable_becoming_fairer:"\u591A\u8B8A\uFF0C\u8DA8\u65BC\u597D\u8F49",sager_changeable_becoming_more_unsettled:"\u591A\u8B8A\uFF0C\u8DA8\u65BC\u66F4\u4E0D\u7A69\u5B9A",sager_variable_slowly_improving:"\u591A\u8B8A\uFF0C\u7DE9\u6162\u597D\u8F49",sager_variable_slowly_deteriorating:"\u591A\u8B8A\uFF0C\u7DE9\u6162\u8F49\u5DEE",sager_variable_some_change:"\u591A\u8B8A\uFF0C\u9810\u8A08\u6709\u8B8A\u5316"},ru:{settled_fine:"\u0421\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E",fine_weather:"\u042F\u0441\u043D\u0430\u044F \u043F\u043E\u0433\u043E\u0434\u0430",fine_becoming_less_settled:"\u042F\u0441\u043D\u043E, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043C\u0435\u043D\u0435\u0435 \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",fairly_fine_showery_later:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E, \u043F\u043E\u0437\u0436\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043F\u0435\u0440\u0435\u043B\u0438\u0432\u043D\u044B\u0435 \u0434\u043E\u0436\u0434\u0438",showery_becoming_more_unsettled:"\u041F\u0435\u0440\u0435\u043B\u0438\u0432\u043D\u044B\u0435 \u0434\u043E\u0436\u0434\u0438, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0431\u043E\u043B\u0435\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",unsettled_rain_later:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u043F\u043E\u0437\u0436\u0435 \u0434\u043E\u0436\u0434\u044C",rain_at_times_worse_later:"\u041F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u043E\u0436\u0434\u044C, \u043F\u043E\u0437\u0436\u0435 \u0443\u0445\u0443\u0434\u0448\u0435\u043D\u0438\u0435",rain_at_times_becoming_very_unsettled:"\u041F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u043E\u0436\u0434\u044C, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043E\u0447\u0435\u043D\u044C \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",very_unsettled_rain:"\u041E\u0447\u0435\u043D\u044C \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0434\u043E\u0436\u0434\u044C",fine_possibly_showers:"\u042F\u0441\u043D\u043E, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043B\u0438\u0432\u043D\u0438",fairly_fine_showers_likely:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E, \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u044B \u043B\u0438\u0432\u043D\u0438",showery_bright_intervals:"\u041B\u0438\u0432\u043D\u0438, \u0441 \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u044F\u043C\u0438",changeable_some_rain:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043F\u043E\u0433\u043E\u0434\u0430, \u043C\u0435\u0441\u0442\u0430\u043C\u0438 \u0434\u043E\u0436\u0434\u044C",unsettled_rain_at_times:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0440\u0435\u043C\u0435\u043D\u0430\u043C\u0438 \u0434\u043E\u0436\u0434\u044C",rain_at_frequent_intervals:"\u0427\u0430\u0441\u0442\u044B\u0435 \u0434\u043E\u0436\u0434\u0438",stormy_much_rain:"\u0413\u0440\u043E\u0437\u043E\u0432\u0430\u044F \u043F\u043E\u0433\u043E\u0434\u0430, \u0441\u0438\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u0436\u0434\u044C",becoming_fine:"\u0421\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u044F\u0441\u043D\u043E",fairly_fine_improving:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u0442\u0441\u044F",fairly_fine_possibly_showers_early:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u044F\u0441\u043D\u043E, \u0443\u0442\u0440\u043E\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043B\u0438\u0432\u043D\u0438",showery_early_improving:"\u0420\u0430\u043D\u043D\u0438\u043C \u0443\u0442\u0440\u043E\u043C \u0434\u043E\u0436\u0434\u0438, \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u0435 \u043F\u043E\u0433\u043E\u0434\u044B",changeable_mending:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u0442\u0441\u044F",rather_unsettled_clearing_later:"\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u043F\u043E\u0437\u0436\u0435 \u043F\u0440\u043E\u044F\u0441\u043D\u044F\u0435\u0442\u0441\u044F",unsettled_probably_improving:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u0441\u044F",unsettled_short_fine_intervals:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0435 \u043F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u044F",very_unsettled_finer_at_times:"\u041E\u0447\u0435\u043D\u044C \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0440\u0435\u043C\u0435\u043D\u0430\u043C\u0438 \u043F\u0440\u043E\u044F\u0441\u043D\u044F\u0435\u0442\u0441\u044F",stormy_possibly_improving:"\u0413\u0440\u043E\u0437\u043E\u0432\u043E, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u0441\u044F",stable:"\u0421\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",sager_fair_improving:"\u042F\u0441\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u0442\u0441\u044F",sager_fair_tending_to_deteriorate:"\u0421\u0435\u0439\u0447\u0430\u0441 \u044F\u0441\u043D\u043E, \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u044F \u043A \u0443\u0445\u0443\u0434\u0448\u0435\u043D\u0438\u044E",sager_fair_no_change:"\u042F\u0441\u043D\u043E, \u0431\u0435\u0437 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439",sager_unsettled_rain_likely:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0435\u0440\u043E\u044F\u0442\u0435\u043D \u0434\u043E\u0436\u0434\u044C",sager_unsettled_probably_improving:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E, \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u0441\u044F",sager_unsettled_rain_at_times:"\u041D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E, \u0432\u0440\u0435\u043C\u0435\u043D\u0430\u043C\u0438 \u0434\u043E\u0436\u0434\u044C",sager_changeable_becoming_fairer:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u044F\u0441\u043D\u0435\u0435",sager_changeable_becoming_more_unsettled:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0431\u043E\u043B\u0435\u0435 \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",sager_variable_slowly_improving:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u043F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u0442\u0441\u044F",sager_variable_slowly_deteriorating:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u043F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u0443\u0445\u0443\u0434\u0448\u0430\u0435\u0442\u0441\u044F",sager_variable_some_change:"\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u0447\u0438\u0432\u043E, \u043E\u0436\u0438\u0434\u0430\u044E\u0442\u0441\u044F \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"},fr:{settled_fine:"Temps stable et beau",fine_weather:"Beau temps",fine_becoming_less_settled:"Beau, devenant moins stable",fairly_fine_showery_later:"Assez beau, averses plus tard",showery_becoming_more_unsettled:"Averses, devenant plus instable",unsettled_rain_later:"Instable, pluie plus tard",rain_at_times_worse_later:"Pluie par moments, aggravation plus tard",rain_at_times_becoming_very_unsettled:"Pluie par moments, devenant tr\xE8s instable",very_unsettled_rain:"Tr\xE8s instable, pluie",fine_possibly_showers:"Beau temps, averses possibles",fairly_fine_showers_likely:"Temps assez beau, averses probables",showery_bright_intervals:"Averses, \xE9claircies par moments",changeable_some_rain:"Temps variable, quelques averses",unsettled_rain_at_times:"Temps instable, averses par moments",rain_at_frequent_intervals:"Averses fr\xE9quentes",stormy_much_rain:"Orageux, fortes averses",becoming_fine:"Temps s'am\xE9liorant",fairly_fine_improving:"Temps assez beau, s'am\xE9liorant",fairly_fine_possibly_showers_early:"Temps assez beau, averses possibles en d\xE9but de journ\xE9e",showery_early_improving:"Averses t\xF4t dans la journ\xE9e, am\xE9lioration",changeable_mending:"Temps variable, s'am\xE9liorant",rather_unsettled_clearing_later:"Temps plut\xF4t instable, s'\xE9claircissant plus tard",unsettled_probably_improving:"Temps instable, s'am\xE9liorant probablement",unsettled_short_fine_intervals:"Temps instable, courtes \xE9claircies",very_unsettled_finer_at_times:"Temps tr\xE8s instable, s'am\xE9liorant par moments",stormy_possibly_improving:"Orageux, s'am\xE9liorant peut-\xEAtre",stable:"Stable",sager_fair_improving:"Temps clair, s'am\xE9liorant",sager_fair_tending_to_deteriorate:"Temps clair actuellement, tendance \xE0 la d\xE9t\xE9rioration",sager_fair_no_change:"Temps clair, pas de changement notable",sager_unsettled_rain_likely:"Temps instable, pluie probable",sager_unsettled_probably_improving:"Temps instable, s'am\xE9liorant probablement",sager_unsettled_rain_at_times:"Temps instable, averses par moments",sager_changeable_becoming_fairer:"Temps changeant, s'\xE9claircissant progressivement",sager_changeable_becoming_more_unsettled:"Temps changeant, devenant plus instable",sager_variable_slowly_improving:"Temps variable, s'am\xE9liorant lentement",sager_variable_slowly_deteriorating:"Temps variable, se d\xE9t\xE9riorant lentement",sager_variable_some_change:"Temps variable, quelques changements attendus"}},le={en:"Precip",ru:"\u041E\u0441\u0430\u0434\u043A\u0438",fr:"Pr\xE9cip.",de:"Niederschlag","de-AT":"Niederschlag",es:"Precip.",it:"Precip.",pl:"Opady","zh-Hans":"\u964D\u6C34","zh-Hant":"\u964D\u6C34",nl:"Neerslag",pt:"Precip.",uk:"\u041E\u043F\u0430\u0434\u0438",ja:"\u964D\u6C34",ko:"\uAC15\uC218",cs:"Sr\xE1\u017Eky",sv:"Nederb.",da:"Nedb.",nb:"Nedb.",hu:"Csapad\xE9k",tr:"Ya\u011F\u0131\u015F"},de={en:{storm:"STORMY",rain:"RAIN",change:"CHANGE",fair:"FAIR",very_dry:"VERY DRY",falling:"FALLING",steady:"STEADY",rising:"RISING",delta_3h:"\u0394 3 HOURS",aneroid:"ANEROID BAROMETER",compensated:"Compensated for Temperature",current:"Current",history_3h:"3h ago",trend:"Trend"},ru:{storm:"\u0428\u0422\u041E\u0420\u041C",rain:"\u0414\u041E\u0416\u0414\u042C",change:"\u041F\u0415\u0420\u0415\u041C\u0415\u041D\u041D\u041E",fair:"\u042F\u0421\u041D\u041E",very_dry:"\u0421\u0423\u0428\u042C",falling:"\u041F\u0410\u0414\u0415\u041D\u0418\u0415",steady:"\u0421\u0422\u041E\u0419\u041A\u041E",rising:"\u0420\u041E\u0421\u0422",delta_3h:"\u0394 3 \u0427\u0410\u0421\u0410",aneroid:"\u0411\u0410\u0420\u041E\u041C\u0415\u0422\u0420-\u0410\u041D\u0415\u0420\u041E\u0418\u0414",compensated:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0438\u044F",current:"\u0422\u0435\u043A\u0443\u0449\u0435\u0435",history_3h:"3 \u0447 \u043D\u0430\u0437\u0430\u0434",trend:"\u0422\u0440\u0435\u043D\u0434"},de:{storm:"STURM",rain:"REGEN",change:"VER\xC4NDERLICH",fair:"SCH\xD6N",very_dry:"BEST\xC4NDIG",falling:"FALLEND",steady:"BEST\xC4NDIG",rising:"STEIGEND",delta_3h:"\u0394 3 STD",aneroid:"ANEROID-BAROMETER",compensated:"Temperaturkompensiert",current:"Aktuell",history_3h:"Vor 3 Std",trend:"Trend"},"de-AT":{storm:"STURM",rain:"REGEN",change:"VER\xC4NDERLICH",fair:"SCH\xD6N",very_dry:"BEST\xC4NDIG",falling:"FALLEND",steady:"BEST\xC4NDIG",rising:"STEIGEND",delta_3h:"\u0394 3 STD",aneroid:"ANEROID-BAROMETER",compensated:"Temperaturkompensiert",current:"Aktuell",history_3h:"Vor 3 Std",trend:"Trend"},es:{storm:"TEMPESTAD",rain:"LLUVIA",change:"VARIABLE",fair:"BUEN TIEMPO",very_dry:"MUY SECO",falling:"BAJANDO",steady:"ESTABLE",rising:"SUBIENDO",delta_3h:"\u0394 3 HORAS",aneroid:"BAR\xD3METRO ANEROIDE",compensated:"Compensado por Temperatura",current:"Actual",history_3h:"Hace 3h",trend:"Tendencia"},fr:{storm:"TEMP\xCATE",rain:"PLUIE",change:"VARIABLE",fair:"BEAU TEMPS",very_dry:"TR\xC8S SEC",falling:"BAISSE",steady:"STABLE",rising:"HAUSSE",delta_3h:"\u0394 3 HEURES",aneroid:"BAROM\xC8TRE AN\xC9RO\xCFDE",compensated:"Compens\xE9 en Temp\xE9rature",current:"Actuel",history_3h:"Il y a 3h",trend:"Tendance"},it:{storm:"TEMPESTA",rain:"PIOGGIA",change:"VARIABILE",fair:"BEL TEMPO",very_dry:"MOLTO SECCO",falling:"CALO",steady:"STABILE",rising:"SALITA",delta_3h:"\u0394 3 ORE",aneroid:"BAROMETRO ANEROIDE",compensated:"Compensato in Temperatura",current:"Attuale",history_3h:"3 ore fa",trend:"Tendenza"},pl:{storm:"BURZA",rain:"DESZCZ",change:"ZMIENNIE",fair:"POGODNIE",very_dry:"BARDZO SUCHO",falling:"SPADEK",steady:"STABILNIE",rising:"WZROST",delta_3h:"\u0394 3 GODZ",aneroid:"BAROMETR ANEROID",compensated:"Kompensacja Temperatury",current:"Bie\u017C\u0105ce",history_3h:"3h temu",trend:"Trend"},pt:{storm:"TEMPESTADE",rain:"CHUVA",change:"VARI\xC1VEL",fair:"BOM TEMPO",very_dry:"MUITO SECO",falling:"QUEDA",steady:"EST\xC1VEL",rising:"ALTA",delta_3h:"\u0394 3 HORAS",aneroid:"BAR\xD3METRO ANEROIDE",compensated:"Compensado por Temperatura",current:"Atual",history_3h:"H\xE1 3h",trend:"Tend\xEAncia"},uk:{storm:"\u0428\u0422\u041E\u0420\u041C",rain:"\u0414\u041E\u0429",change:"\u041C\u0406\u041D\u041B\u0418\u0412\u041E",fair:"\u042F\u0421\u041D\u041E",very_dry:"\u0421\u0423\u0428\u0410",falling:"\u041F\u0410\u0414\u0406\u041D\u041D\u042F",steady:"\u0421\u0422\u0406\u0419\u041A\u041E",rising:"\u0417\u0420\u041E\u0421\u0422\u0410\u041D\u041D\u042F",delta_3h:"\u0394 3 \u0413\u041E\u0414",aneroid:"\u0411\u0410\u0420\u041E\u041C\u0415\u0422\u0420-\u0410\u041D\u0415\u0420\u041E\u0407\u0414",compensated:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0430 \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0456\u044F",current:"\u041F\u043E\u0442\u043E\u0447\u043D\u0438\u0439",history_3h:"3 \u0433\u043E\u0434 \u0442\u043E\u043C\u0443",trend:"\u0422\u0440\u0435\u043D\u0434"},"zh-Hans":{storm:"\u66B4\u98CE\u96E8",rain:"\u964D\u96E8",change:"\u591A\u53D8",fair:"\u6674\u6717",very_dry:"\u5E72\u71E5",falling:"\u4E0B\u964D",steady:"\u7A33\u5B9A",rising:"\u4E0A\u5347",delta_3h:"\u0394 3\u5C0F\u65F6",aneroid:"\u65E0\u6DB2\u6C14\u538B\u8868",compensated:"\u6E29\u5EA6\u8865\u507F\u578B",current:"\u5F53\u524D",history_3h:"3\u5C0F\u65F6\u524D",trend:"\u8D8B\u52BF"},"zh-Hant":{storm:"\u66B4\u98A8\u96E8",rain:"\u964D\u96E8",change:"\u591A\u8B8A",fair:"\u6674\u6717",very_dry:"\u4E7E\u71E5",falling:"\u4E0B\u964D",steady:"\u7A69\u5B9A",rising:"\u4E0A\u5347",delta_3h:"\u0394 3\u5C0F\u6642",aneroid:"\u7121\u6DB2\u6C23\u58D3\u8868",compensated:"\u6EAB\u5EA6\u88DC\u511F\u578B",current:"\u7576\u524D",history_3h:"3\u5C0F\u6642\u524D",trend:"\u8DA8\u52E2"},ja:{storm:"\u5D50",rain:"\u96E8",change:"\u5909\u5316",fair:"\u597D\u5929",very_dry:"\u4E7E\u71E5",falling:"\u4F4E\u4E0B",steady:"\u5B89\u5B9A",rising:"\u4E0A\u6607",delta_3h:"\u0394 3\u6642\u9593",aneroid:"\u30A2\u30CD\u30ED\u30A4\u30C9\u6C17\u5727\u8A08",compensated:"\u6E29\u5EA6\u88DC\u6B63\u6E08",current:"\u73FE\u5728",history_3h:"3\u6642\u9593\u524D",trend:"\u50BE\u5411"},ko:{storm:"\uD3ED\uD48D",rain:"\uBE44",change:"\uBCC0\uB355",fair:"\uB9D1\uC74C",very_dry:"\uAC74\uC870",falling:"\uD558\uAC15",steady:"\uC548\uC815",rising:"\uC0C1\uC2B9",delta_3h:"\u0394 3\uC2DC\uAC04",aneroid:"\uC544\uB124\uB85C\uC774\uB4DC \uAE30\uC555\uACC4",compensated:"\uC628\uB3C4 \uBCF4\uC815\uB428",current:"\uD604\uC7AC",history_3h:"3\uC2DC\uAC04 \uC804",trend:"\uCD94\uC138"},cs:{storm:"BOU\u0158E",rain:"D\xC9\u0160\u0164",change:"PROM\u011ANLIVO",fair:"P\u011AKN\u011A",very_dry:"VELMI SUCHO",falling:"POKLES",steady:"UST\xC1LENO",rising:"VZESTUP",delta_3h:"\u0394 3 HOD",aneroid:"ANEROIDN\xCD BAROMETR",compensated:"Teplotn\u011B kompenzov\xE1no",current:"Nyn\xED",history_3h:"P\u0159ed 3h",trend:"Trend"},sv:{storm:"STORM",rain:"REGN",change:"OMBYTLIGT",fair:"VACKERT",very_dry:"MYCKET TORRT",falling:"FALLANDE",steady:"STADIGT",rising:"STIGANDE",delta_3h:"\u0394 3 TIM",aneroid:"ANEROIDBAROMETER",compensated:"Temperaturkompenserad",current:"Nu",history_3h:"3 tim sedan",trend:"Trend"},da:{storm:"STORM",rain:"REGN",change:"FORANDERLIGT",fair:"SMUKT",very_dry:"MEGET T\xD8RT",falling:"FALDENDE",steady:"STABILT",rising:"STIGENDE",delta_3h:"\u0394 3 TIMER",aneroid:"ANEROIDBAROMETER",compensated:"Temperaturkompenseret",current:"Nu",history_3h:"3t siden",trend:"Trend"},nb:{storm:"STORM",rain:"REGN",change:"SKIFTENDE",fair:"PENT",very_dry:"SV\xC6RT T\xD8RT",falling:"FALLENDE",steady:"STABILT",rising:"STIGENDE",delta_3h:"\u0394 3 TIMER",aneroid:"ANEROIDBAROMETER",compensated:"Temperaturkompensert",current:"N\xE5",history_3h:"3t siden",trend:"Trend"},nl:{storm:"STORM",rain:"REGEN",change:"VERANDERLIJK",fair:"MOOI",very_dry:"ZEER DROOG",falling:"DALEND",steady:"STABIEL",rising:"STIJGEND",delta_3h:"\u0394 3 UUR",aneroid:"ANERO\xCFDE BAROMETER",compensated:"Temperatuurgecompenseerd",current:"Nu",history_3h:"3u geleden",trend:"Trend"},hu:{storm:"VIHAR",rain:"ES\u0150",change:"V\xC1LTOZ\xC9KONY",fair:"SZ\xC9P ID\u0150",very_dry:"NAGYON SZ\xC1RAZ",falling:"S\xDCLLYED",steady:"\xC1LLAND\xD3",rising:"EMELKEDIK",delta_3h:"\u0394 3 \xD3RA",aneroid:"ANEROID BAROM\xC9TER",compensated:"H\u0151m\xE9rs\xE9klet-kompenz\xE1lt",current:"Jelenlegi",history_3h:"3 \xF3r\xE1ja",trend:"Trend"},tr:{storm:"FIRTINA",rain:"YA\u011EMUR",change:"DE\u011E\u0130\u015EKEN",fair:"A\xC7IK",very_dry:"\xC7OK KURU",falling:"D\xDC\u015E\xDC\u015E",steady:"SAB\u0130T",rising:"Y\xDCKSEL\u0130\u015E",delta_3h:"\u0394 3 SAAT",aneroid:"ANERO\u0130T BAROMETRE",compensated:"S\u0131cakl\u0131k Dengelemeli",current:"\u015Eimdiki",history_3h:"3s \xF6nce",trend:"Trend"}},ce={en:{alertStorm:"Storm",alertPressureDrop:"Rapid Fall",alertFrost:"Frost",alertFog:"Fog",confidence:"Confidence",consensus:"Consensus",snow:"Snow",fog:"Fog",dewPoint:"Dew point",accuracy24h:"24h accuracy",hit:"Hit",miss:"Miss",trendRisingFast:"Rising Fast",trendRising:"Rising",trendSteady:"Steady",trendFalling:"Falling",trendFallingFast:"Falling Fast",h24Label:"24h",unitHpa:"hPa",unitKmh:"km/h",unitMs:"m/s",unitMph:"mph",unitKn:"kn",compass:["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]},ru:{alertStorm:"\u0428\u0442\u043E\u0440\u043C",alertPressureDrop:"\u0420\u0435\u0437\u043A\u0438\u0439 \u0441\u043F\u0430\u0434",alertFrost:"\u0417\u0430\u043C\u043E\u0440\u043E\u0437\u043A\u0438",alertFog:"\u0422\u0443\u043C\u0430\u043D",confidence:"\u0423\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C",consensus:"\u041A\u043E\u043D\u0441\u0435\u043D\u0441\u0443\u0441",snow:"\u0421\u043D\u0435\u0433",fog:"\u0422\u0443\u043C\u0430\u043D",dewPoint:"\u0422\u043E\u0447\u043A\u0430 \u0440\u043E\u0441\u044B",accuracy24h:"\u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C 24\u0447",hit:"\u0421\u0431\u044B\u043B\u0441\u044F",miss:"\u041D\u0435 \u0441\u0431\u044B\u043B\u0441\u044F",trendRisingFast:"\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0440\u043E\u0441\u0442",trendRising:"\u0420\u043E\u0441\u0442",trendSteady:"\u0421\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E",trendFalling:"\u041F\u0430\u0434\u0435\u043D\u0438\u0435",trendFallingFast:"\u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u043F\u0430\u0434\u0435\u043D\u0438\u0435",h24Label:"24\u0447",unitHpa:"\u0433\u041F\u0430",unitKmh:"\u043A\u043C/\u0447",unitMs:"\u043C/\u0441",unitMph:"\u043C\u0438\u043B\u044C/\u0447",unitKn:"\u0443\u0437",compass:["\u0421","\u0421\u0421\u0412","\u0421\u0412","\u0412\u0421\u0412","\u0412","\u0412\u042E\u0412","\u042E\u0412","\u042E\u042E\u0412","\u042E","\u042E\u042E\u0417","\u042E\u0417","\u0417\u042E\u0417","\u0417","\u0417\u0421\u0417","\u0421\u0417","\u0421\u0421\u0417"]},uk:{alertStorm:"\u0428\u0442\u043E\u0440\u043C",alertPressureDrop:"\u0420\u0456\u0437\u043A\u0435 \u043F\u0430\u0434\u0456\u043D\u043D\u044F",alertFrost:"\u0417\u0430\u043C\u043E\u0440\u043E\u0437\u043A\u0438",alertFog:"\u0422\u0443\u043C\u0430\u043D",confidence:"\u0412\u043F\u0435\u0432\u043D\u0435\u043D\u0456\u0441\u0442\u044C",consensus:"\u041A\u043E\u043D\u0441\u0435\u043D\u0441\u0443\u0441",snow:"\u0421\u043D\u0456\u0433",fog:"\u0422\u0443\u043C\u0430\u043D",dewPoint:"\u0422\u043E\u0447\u043A\u0430 \u0440\u043E\u0441\u0438",accuracy24h:"\u0422\u043E\u0447\u043D\u0456\u0441\u0442\u044C 24\u0433",hit:"\u0421\u043F\u0440\u0430\u0432\u0434\u0438\u0432\u0441\u044F",miss:"\u041D\u0435 \u0441\u043F\u0440\u0430\u0432\u0434\u0438\u0432\u0441\u044F",trendRisingFast:"\u0428\u0432\u0438\u0434\u043A\u0435 \u0437\u0440\u043E\u0441\u0442\u0430\u043D\u043D\u044F",trendRising:"\u0417\u0440\u043E\u0441\u0442\u0430\u043D\u043D\u044F",trendSteady:"\u0421\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u043E",trendFalling:"\u041F\u0430\u0434\u0456\u043D\u043D\u044F",trendFallingFast:"\u0428\u0432\u0438\u0434\u043A\u0435 \u043F\u0430\u0434\u0456\u043D\u043D\u044F",h24Label:"24\u0433",unitHpa:"\u0433\u041F\u0430",unitKmh:"\u043A\u043C/\u0433\u043E\u0434",unitMs:"\u043C/\u0441",unitMph:"\u043C\u0438\u043B\u044C/\u0433\u043E\u0434",unitKn:"\u0432\u0443\u0437",compass:["\u041F\u043D","\u041F\u043D\u041F\u043D\u0421\u0445","\u041F\u043D\u0421\u0445","\u0421\u0445\u041F\u043D\u0421\u0445","\u0421\u0445","\u0421\u0445\u041F\u0434\u0421\u0445","\u041F\u0434\u0421\u0445","\u041F\u0434\u041F\u0434\u0421\u0445","\u041F\u0434","\u041F\u0434\u041F\u0434\u0417\u0445","\u041F\u0434\u0417\u0445","\u0417\u0445\u041F\u0434\u0417\u0445","\u0417\u0445","\u0417\u0445\u041F\u043D\u0417\u0445","\u041F\u043D\u0417\u0445","\u041F\u043D\u041F\u043D\u0417\u0445"]},de:{alertStorm:"Sturm",alertPressureDrop:"Druckabfall",alertFrost:"Frost",alertFog:"Nebel",confidence:"Konfidenz",consensus:"Konsens",snow:"Schnee",fog:"Nebel",dewPoint:"Taupunkt",accuracy24h:"24h-Genauigkeit",hit:"Treffer",miss:"Fehlschlag",trendRisingFast:"Schnell steigend",trendRising:"Steigend",trendSteady:"Best\xE4ndig",trendFalling:"Fallend",trendFallingFast:"Schnell fallend",h24Label:"24h",unitHpa:"hPa",unitKmh:"km/h",unitMs:"m/s",unitMph:"mph",unitKn:"kn",compass:["N","NNO","NO","ONO","O","OSO","SO","SSO","S","SSW","SW","WSW","W","WNW","NW","NNW"]},"de-AT":{alertStorm:"Sturm",alertPressureDrop:"Druckabfall",alertFrost:"Frost",alertFog:"Nebel",confidence:"Konfidenz",consensus:"Konsens",snow:"Schnee",fog:"Nebel",dewPoint:"Taupunkt",accuracy24h:"24h-Genauigkeit",hit:"Treffer",miss:"Fehlschlag",trendRisingFast:"Schnell steigend",trendRising:"Steigend",trendSteady:"Best\xE4ndig",trendFalling:"Fallend",trendFallingFast:"Schnell fallend",h24Label:"24h",unitHpa:"hPa",unitKmh:"km/h",unitMs:"m/s",unitMph:"mph",unitKn:"kn",compass:["N","NNO","NO","ONO","O","OSO","SO","SSO","S","SSW","SW","WSW","W","WNW","NW","NNW"]},fr:{alertStorm:"Temp\xEAte",alertPressureDrop:"Chute rapide",alertFrost:"Gel",alertFog:"Brouillard",confidence:"Confiance",consensus:"Consensus",snow:"Neige",fog:"Brouillard",dewPoint:"Point de ros\xE9e",accuracy24h:"Pr\xE9cision 24h",hit:"Exacte",miss:"Inexacte",trendRisingFast:"Hausse rapide",trendRising:"En hausse",trendSteady:"Stable",trendFalling:"En baisse",trendFallingFast:"Baisse rapide",h24Label:"24h",unitHpa:"hPa",unitKmh:"km/h",unitMs:"m/s",unitMph:"mph",unitKn:"nd",compass:["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSO","SO","OSO","O","ONO","NO","NNO"]},es:{alertStorm:"Tormenta",alertPressureDrop:"Ca\xEDda r\xE1pida",alertFrost:"Helada",alertFog:"Niebla",confidence:"Confianza",consensus:"Consenso",snow:"Nieve",fog:"Niebla",dewPoint:"Punto de roc\xEDo",accuracy24h:"Precisi\xF3n 24h",hit:"Acierto",miss:"Fallo",trendRisingFast:"Subida r\xE1pida",trendRising:"Subiendo",trendSteady:"Estable",trendFalling:"Bajando",trendFallingFast:"Bajada r\xE1pida",h24Label:"24h",unitHpa:"hPa",unitKmh:"km/h",unitMs:"m/s",unitMph:"mph",unitKn:"kn",compass:["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSO","SO","OSO","O","ONO","NO","NNO"]},it:{alertStorm:"Tempesta",alertPressureDrop:"Calo rapido",alertFrost:"Gelo",alertFog:"Nebbia",confidence:"Affidabilit\xE0",consensus:"Consenso",snow:"Neve",fog:"Nebbia",dewPoint:"Punto di rugiada",accuracy24h:"Accuratezza 24h",hit:"Centrata",miss:"Mancata",trendRisingFast:"Salita rapida",trendRising:"In salita",trendSteady:"Stabile",trendFalling:"In calo",trendFallingFast:"Calo rapido",h24Label:"24h",unitHpa:"hPa",unitKmh:"km/h",unitMs:"m/s",unitMph:"mph",unitKn:"kn",compass:["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSO","SO","OSO","O","ONO","NO","NNO"]},pt:{alertStorm:"Tempestade",alertPressureDrop:"Queda r\xE1pida",alertFrost:"Geada",alertFog:"Nevoeiro",confidence:"Confian\xE7a",consensus:"Consenso",snow:"Neve",fog:"Nevoeiro",dewPoint:"Ponto de orvalho",accuracy24h:"Precis\xE3o 24h",hit:"Acerto",miss:"Falha",trendRisingFast:"Subida r\xE1pida",trendRising:"Em alta",trendSteady:"Est\xE1vel",trendFalling:"Em queda",trendFallingFast:"Queda r\xE1pida",h24Label:"24h",unitHpa:"hPa",unitKmh:"km/h",unitMs:"m/s",unitMph:"mph",unitKn:"kn",compass:["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSO","SO","OSO","O","ONO","NO","NNO"]},nl:{alertStorm:"Storm",alertPressureDrop:"Snelle daling",alertFrost:"Vorst",alertFog:"Mist",confidence:"Betrouwbaarheid",consensus:"Consensus",snow:"Sneeuw",fog:"Mist",dewPoint:"Dauwpunt",accuracy24h:"24u nauwkeurigheid",hit:"Raak",miss:"Mis",trendRisingFast:"Snel stijgend",trendRising:"Stijgend",trendSteady:"Stabiel",trendFalling:"Dalend",trendFallingFast:"Snel dalend",h24Label:"24u",unitHpa:"hPa",unitKmh:"km/u",unitMs:"m/s",unitMph:"mph",unitKn:"kn",compass:["N","NNO","NO","ONO","O","OZO","ZO","ZZO","Z","ZZW","ZW","WZW","W","WNW","NW","NNW"]},pl:{alertStorm:"Burza",alertPressureDrop:"Szybki spadek",alertFrost:"Mr\xF3z",alertFog:"Mg\u0142a",confidence:"Pewno\u015B\u0107",consensus:"Konsensus",snow:"\u015Anieg",fog:"Mg\u0142a",dewPoint:"Punkt rosy",accuracy24h:"Trafno\u015B\u0107 24h",hit:"Trafiona",miss:"Nietrafiona",trendRisingFast:"Szybki wzrost",trendRising:"Wzrost",trendSteady:"Stabilnie",trendFalling:"Spadek",trendFallingFast:"Szybki spadek",h24Label:"24h",unitHpa:"hPa",unitKmh:"km/h",unitMs:"m/s",unitMph:"mph",unitKn:"w.",compass:["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]},cs:{alertStorm:"Bou\u0159ka",alertPressureDrop:"Rychl\xFD pokles",alertFrost:"Mr\xE1z",alertFog:"Mlha",confidence:"Spolehlivost",consensus:"Konsenzus",snow:"Sn\xEDh",fog:"Mlha",dewPoint:"Rosn\xFD bod",accuracy24h:"\xDAsp\u011B\u0161nost 24h",hit:"\xDAsp\u011Bch",miss:"Ne\xFAsp\u011Bch",trendRisingFast:"Rychl\xFD vzestup",trendRising:"Vzestup",trendSteady:"Ust\xE1leno",trendFalling:"Pokles",trendFallingFast:"Rychl\xFD pokles",h24Label:"24h",unitHpa:"hPa",unitKmh:"km/h",unitMs:"m/s",unitMph:"mph",unitKn:"uz",compass:["S","SSV","SV","VSV","V","VJV","JV","JJV","J","JJZ","JZ","ZJZ","Z","ZSZ","SZ","SSZ"]},da:{alertStorm:"Storm",alertPressureDrop:"Hurtigt fald",alertFrost:"Frost",alertFog:"T\xE5ge",confidence:"Sikkerhed",consensus:"Konsensus",snow:"Sne",fog:"T\xE5ge",dewPoint:"Dugpunkt",accuracy24h:"24t n\xF8jagtighed",hit:"Tr\xE6f",miss:"Forbier",trendRisingFast:"Stiger hurtigt",trendRising:"Stigende",trendSteady:"Stabilt",trendFalling:"Faldende",trendFallingFast:"Falder hurtigt",h24Label:"24t",unitHpa:"hPa",unitKmh:"km/t",unitMs:"m/s",unitMph:"mph",unitKn:"kn",compass:["N","NN\xD8","N\xD8","\xD8N\xD8","\xD8","\xD8S\xD8","S\xD8","SS\xD8","S","SSV","SV","VSV","V","VNV","NV","NNV"]},nb:{alertStorm:"Storm",alertPressureDrop:"Raskt fall",alertFrost:"Frost",alertFog:"T\xE5ke",confidence:"Tillit",consensus:"Konsensus",snow:"Sn\xF8",fog:"T\xE5ke",dewPoint:"Duggpunkt",accuracy24h:"24t n\xF8yaktighet",hit:"Treff",miss:"Bom",trendRisingFast:"Stiger raskt",trendRising:"Stigende",trendSteady:"Stabilt",trendFalling:"Fallende",trendFallingFast:"Faller raskt",h24Label:"24t",unitHpa:"hPa",unitKmh:"km/t",unitMs:"m/s",unitMph:"mph",unitKn:"kn",compass:["N","NN\xD8","N\xD8","\xD8N\xD8","\xD8","\xD8S\xD8","S\xD8","SS\xD8","S","SSV","SV","VSV","V","VNV","NV","NNV"]},sv:{alertStorm:"Storm",alertPressureDrop:"Snabbt fall",alertFrost:"Frost",alertFog:"Dimma",confidence:"Tillf\xF6rlitlighet",consensus:"Konsensus",snow:"Sn\xF6",fog:"Dimma",dewPoint:"Daggpunkt",accuracy24h:"24h tr\xE4ffs\xE4kerhet",hit:"Tr\xE4ff",miss:"Miss",trendRisingFast:"Stiger snabbt",trendRising:"Stigande",trendSteady:"Stadigt",trendFalling:"Fallande",trendFallingFast:"Faller snabbt",h24Label:"24h",unitHpa:"hPa",unitKmh:"km/h",unitMs:"m/s",unitMph:"mph",unitKn:"kn",compass:["N","NN\xD6","N\xD6","\xD6N\xD6","\xD6","\xD6S\xD6","S\xD6","SS\xD6","S","SSV","SV","VSV","V","VNV","NV","NNV"]},hu:{alertStorm:"Vihar",alertPressureDrop:"Gyors es\xE9s",alertFrost:"Fagy",alertFog:"K\xF6d",confidence:"Megb\xEDzhat\xF3s\xE1g",consensus:"Konszenzus",snow:"H\xF3",fog:"K\xF6d",dewPoint:"Harmatpont",accuracy24h:"24\xF3 pontoss\xE1g",hit:"Tal\xE1lat",miss:"T\xE9ves",trendRisingFast:"Gyors emelked\xE9s",trendRising:"Emelkedik",trendSteady:"\xC1lland\xF3",trendFalling:"S\xFCllyed",trendFallingFast:"Gyors s\xFCllyed\xE9s",h24Label:"24\xF3",unitHpa:"hPa",unitKmh:"km/h",unitMs:"m/s",unitMph:"mph",unitKn:"cs",compass:["\xC9","\xC9\xC9K","\xC9K","K\xC9K","K","KDK","DK","DDK","D","DDNy","DNy","NyDNy","Ny","Ny\xC9Ny","\xC9Ny","\xC9\xC9Ny"]},tr:{alertStorm:"F\u0131rt\u0131na",alertPressureDrop:"H\u0131zl\u0131 d\xFC\u015F\xFC\u015F",alertFrost:"Don",alertFog:"Sis",confidence:"G\xFCven",consensus:"Uzla\u015F\u0131",snow:"Kar",fog:"Sis",dewPoint:"\xC7i\u011F noktas\u0131",accuracy24h:"24s do\u011Fruluk",hit:"Tuttu",miss:"Tutmad\u0131",trendRisingFast:"H\u0131zl\u0131 y\xFCkseli\u015F",trendRising:"Y\xFCkseli\u015F",trendSteady:"Sabit",trendFalling:"D\xFC\u015F\xFC\u015F",trendFallingFast:"H\u0131zl\u0131 d\xFC\u015F\xFC\u015F",h24Label:"24s",unitHpa:"hPa",unitKmh:"km/sa",unitMs:"m/sn",unitMph:"mph",unitKn:"kn",compass:["K","KKD","KD","DKD","D","DGD","GD","GGD","G","GGB","GB","BGB","B","BKB","KB","KKB"]},ja:{alertStorm:"\u66B4\u98A8\u96E8",alertPressureDrop:"\u6025\u964D\u4E0B",alertFrost:"\u971C",alertFog:"\u9727",confidence:"\u4FE1\u983C\u5EA6",consensus:"\u5408\u610F\u4E88\u6E2C",snow:"\u96EA",fog:"\u9727",dewPoint:"\u9732\u70B9",accuracy24h:"24\u6642\u9593\u7CBE\u5EA6",hit:"\u7684\u4E2D",miss:"\u5916\u308C",trendRisingFast:"\u6025\u4E0A\u6607",trendRising:"\u4E0A\u6607",trendSteady:"\u5B89\u5B9A",trendFalling:"\u4F4E\u4E0B",trendFallingFast:"\u6025\u4F4E\u4E0B",h24Label:"24\u6642\u9593",unitHpa:"hPa",unitKmh:"km/h",unitMs:"m/s",unitMph:"mph",unitKn:"kt",compass:["\u5317","\u5317\u5317\u6771","\u5317\u6771","\u6771\u5317\u6771","\u6771","\u6771\u5357\u6771","\u5357\u6771","\u5357\u5357\u6771","\u5357","\u5357\u5357\u897F","\u5357\u897F","\u897F\u5357\u897F","\u897F","\u897F\u5317\u897F","\u5317\u897F","\u5317\u5317\u897F"]},ko:{alertStorm:"\uD3ED\uD48D",alertPressureDrop:"\uAE09\uB77D",alertFrost:"\uC11C\uB9AC",alertFog:"\uC548\uAC1C",confidence:"\uC2E0\uB8B0\uB3C4",consensus:"\uD569\uC758 \uC608\uBCF4",snow:"\uB208",fog:"\uC548\uAC1C",dewPoint:"\uC774\uC2AC\uC810",accuracy24h:"24\uC2DC\uAC04 \uC815\uD655\uB3C4",hit:"\uC801\uC911",miss:"\uBE57\uB098\uAC10",trendRisingFast:"\uAE09\uC0C1\uC2B9",trendRising:"\uC0C1\uC2B9",trendSteady:"\uC548\uC815",trendFalling:"\uD558\uAC15",trendFallingFast:"\uAE09\uD558\uAC15",h24Label:"24\uC2DC\uAC04",unitHpa:"hPa",unitKmh:"km/h",unitMs:"m/s",unitMph:"mph",unitKn:"kt",compass:["\uBD81","\uBD81\uBD81\uB3D9","\uBD81\uB3D9","\uB3D9\uBD81\uB3D9","\uB3D9","\uB3D9\uB0A8\uB3D9","\uB0A8\uB3D9","\uB0A8\uB0A8\uB3D9","\uB0A8","\uB0A8\uB0A8\uC11C","\uB0A8\uC11C","\uC11C\uB0A8\uC11C","\uC11C","\uC11C\uBD81\uC11C","\uBD81\uC11C","\uBD81\uBD81\uC11C"]},"zh-Hans":{alertStorm:"\u66B4\u98CE\u96E8",alertPressureDrop:"\u9AA4\u964D",alertFrost:"\u971C\u51BB",alertFog:"\u5927\u96FE",confidence:"\u7F6E\u4FE1\u5EA6",consensus:"\u7EFC\u5408\u5171\u8BC6",snow:"\u964D\u96EA",fog:"\u5927\u96FE",dewPoint:"\u9732\u70B9",accuracy24h:"24\u5C0F\u65F6\u51C6\u786E\u7387",hit:"\u547D\u4E2D",miss:"\u672A\u547D\u4E2D",trendRisingFast:"\u5FEB\u901F\u4E0A\u5347",trendRising:"\u4E0A\u5347",trendSteady:"\u7A33\u5B9A",trendFalling:"\u4E0B\u964D",trendFallingFast:"\u5FEB\u901F\u4E0B\u964D",h24Label:"24\u5C0F\u65F6",unitHpa:"hPa",unitKmh:"km/h",unitMs:"m/s",unitMph:"mph",unitKn:"\u8282",compass:["\u5317","\u5317\u4E1C\u5317","\u4E1C\u5317","\u4E1C\u4E1C\u5317","\u4E1C","\u4E1C\u4E1C\u5357","\u4E1C\u5357","\u5357\u4E1C\u5357","\u5357","\u5357\u897F\u5357","\u897F\u5357","\u897F\u897F\u5357","\u897F","\u897F\u897F\u5317","\u897F\u5317","\u5317\u897F\u5317"]},"zh-Hant":{alertStorm:"\u66B4\u98A8\u96E8",alertPressureDrop:"\u9A5F\u964D",alertFrost:"\u971C\u51CD",alertFog:"\u6FC3\u9727",confidence:"\u4FE1\u5FC3\u5EA6",consensus:"\u7D9C\u5408\u5171\u8B58",snow:"\u964D\u96EA",fog:"\u6FC3\u9727",dewPoint:"\u9732\u9EDE",accuracy24h:"24\u5C0F\u6642\u6E96\u78BA\u7387",hit:"\u547D\u4E2D",miss:"\u672A\u547D\u4E2D",trendRisingFast:"\u5FEB\u901F\u4E0A\u5347",trendRising:"\u4E0A\u5347",trendSteady:"\u7A69\u5B9A",trendFalling:"\u4E0B\u964D",trendFallingFast:"\u5FEB\u901F\u4E0B\u964D",h24Label:"24\u5C0F\u6642",unitHpa:"hPa",unitKmh:"km/h",unitMs:"m/s",unitMph:"mph",unitKn:"\u7BC0",compass:["\u5317","\u5317\u6771\u5317","\u6771\u5317","\u6771\u6771\u5317","\u6771","\u6771\u6771\u5357","\u6771\u5357","\u5357\u6771\u5357","\u5357","\u5357\u897F\u5357","\u897F\u5357","\u897F\u897F\u5357","\u897F","\u897F\u897F\u5317","\u897F\u5317","\u5317\u897F\u5317"]}};function Y(c){if(!c)return"en";if(c==="auto")return"auto";if(c.startsWith("zh"))return c.includes("Hant")||c.includes("TW")||c.includes("HK")?"zh-Hant":"zh-Hans";if(c.startsWith("pt"))return"pt";if(c.startsWith("nb")||c.startsWith("no")||c.startsWith("nn"))return"nb";if(se.has(c))return c;let e=c.split("-")[0];return se.has(e)?e:"en"}function ge(c,e){let t=Y(c==="auto"?e||"en":c);return oe[t]||oe.en}function he(c,e){let t=Y(c==="auto"?e||"en":c);return le[t]||le.en}function _e(c,e){let t=Y(c==="auto"?e||"en":c);return de[t]||de.en}function pe(c,e){let t=Y(c==="auto"?e||"en":c);return ce[t]||ce.en}console.info("%c ZAMBRETTI & SAGER WEATHER CARD %c v2.3.2 ","color: white; background: #d97706; font-weight: 700; border-radius: 3px 0 0 3px; padding: 2px 5px;","color: #92400e; background: #fef3c7; font-weight: 700; border-radius: 0 3px 3px 0; padding: 2px 5px;");var X={settled_fine:"sunny",fine_weather:"sunny",fine_becoming_less_settled:"partlycloudy",fairly_fine_showery_later:"partlycloudy",showery_becoming_more_unsettled:"rainy",unsettled_rain_later:"cloudy",rain_at_times_worse_later:"rainy",rain_at_times_becoming_very_unsettled:"pouring",very_unsettled_rain:"pouring",fine_possibly_showers:"partlycloudy",fairly_fine_showers_likely:"partlycloudy",showery_bright_intervals:"rainy",changeable_some_rain:"cloudy",unsettled_rain_at_times:"rainy",rain_at_frequent_intervals:"pouring",stormy_much_rain:"lightning-rainy",becoming_fine:"partlycloudy",fairly_fine_improving:"partlycloudy",fairly_fine_possibly_showers_early:"partlycloudy",showery_early_improving:"rainy",changeable_mending:"cloudy",rather_unsettled_clearing_later:"cloudy",unsettled_probably_improving:"cloudy",unsettled_short_fine_intervals:"cloudy",very_unsettled_finer_at_times:"pouring",stormy_possibly_improving:"lightning-rainy",stable:"partlycloudy"},ue={sunny:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
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
  </svg>`},xe={settled_fine:"sunny",fine_weather:"sunny",fine_becoming_less_settled:"partlycloudy",fairly_fine_showery_later:"partlycloudy",showery_becoming_more_unsettled:"rainy",unsettled_rain_later:"cloudy",rain_at_times_worse_later:"rainy",rain_at_times_becoming_very_unsettled:"pouring",very_unsettled_rain:"pouring",fine_possibly_showers:"partlycloudy",fairly_fine_showers_likely:"partlycloudy",showery_bright_intervals:"rainy",changeable_some_rain:"cloudy",unsettled_rain_at_times:"rainy",rain_at_frequent_intervals:"pouring",stormy_much_rain:"lightning-rainy",becoming_fine:"partlycloudy",fairly_fine_improving:"partlycloudy",fairly_fine_possibly_showers_early:"partlycloudy",showery_early_improving:"rainy",changeable_mending:"cloudy",rather_unsettled_clearing_later:"cloudy",unsettled_probably_improving:"cloudy",unsettled_short_fine_intervals:"cloudy",very_unsettled_finer_at_times:"pouring",stormy_possibly_improving:"lightning-rainy",stable:"partlycloudy"};function me(c,e){return c==="settled_fine"||c==="fine_weather"?e?"night_clear":"sunny":xe[c]||"partlycloudy"}function u(c){return c==null?"":String(c).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function re(c,e=""){let t=ue[c]||ue.partlycloudy;if(!e)return t.replace("<svg ",'<svg role="img" ');let n=u(e);return t.replace("<svg ",`<svg role="img" aria-label="${n}" `)}var Fe={sunny:{bg:"linear-gradient(135deg,#FF8C00 0%,#FFA500 40%,#FFD700 100%)"},night_clear:{bg:"linear-gradient(135deg,#070B14 0%,#0F172A 50%,#1E293B 100%)"},partlycloudy:{bg:"linear-gradient(135deg,#FF8C00 0%,#BBDEFB 50%,#FFFFFF 100%)"},cloudy:{bg:"linear-gradient(135deg,#606C76 0%,#7E8A95 50%,#A2AEB8 100%)"},rainy:{bg:"linear-gradient(135deg,#425363 0%,#54677A 50%,#70879C 100%)"},pouring:{bg:"linear-gradient(135deg,#1C242D 0%,#2B3745 50%,#3F5063 100%)"},"lightning-rainy":{bg:"linear-gradient(135deg,#23153A 0%,#43286B 50%,#6943A3 100%)"},snowy:{bg:"linear-gradient(135deg,#B8C6D4 0%,#DDE5ED 50%,#F4F7FA 100%)"},windy:{bg:"linear-gradient(135deg,#5F9EA0 0%,#87B6B8 50%,#B4D3D4 100%)"}},ze={bg:"linear-gradient(135deg,#1565C0 0%,#1976D2 100%)"};function Ae(c){return Fe[c]||ze}function Te(c,e){if(e===void 0||e>=100||typeof e!="number"||isNaN(e))return c;let t=Math.max(0,Math.min(100,e)),n=Math.round(t/100*255).toString(16).padStart(2,"0").toUpperCase();return c.replace(/#([0-9a-fA-F]{6})(?![0-9a-fA-F])/gi,`#$1${n}`)}var ae=0;function fe(c){return c==null?"":["N","NE","E","SE","S","SW","W","NW"][Math.round(c%360/45)%8]}var $e=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function ye(c,e){if(!c)return"";let t=$e.indexOf(String(c).trim().toUpperCase());return t>=0&&Array.isArray(e?.compass)&&e.compass[t]?e.compass[t]:c}function ee(c,e){if(!c||c==="\u2014"||c==="Unavailable")return"\u2014";let t=String(c);return t.includes("Rising Fast")?`\u2191\u2191 ${e?.trendRisingFast||"Rising Fast"}`:t.includes("Rising")?`\u2191 ${e?.trendRising||"Rising"}`:t.includes("Steady")?`\u2192 ${e?.trendSteady||"Steady"}`:t.includes("Falling Fast")?`\u2193\u2193 ${e?.trendFallingFast||"Falling Fast"}`:t.includes("Falling")?`\u2193 ${e?.trendFalling||"Falling"}`:t}function be(c,e,t,n=null){if(c==null)return null;let r=parseFloat(c);if(isNaN(r))return null;let a=(t||"m/s").toLowerCase().replace(" ",""),o=(e||"m/s").toLowerCase().replace(" ",""),i;return a==="km/h"||a==="kmh"?i=r/3.6:a==="mph"?i=r/2.23694:a==="kn"||a==="kt"||a==="knots"?i=r/1.94384:i=r,o==="mph"?`${(i*2.23694).toFixed(1)} ${n?.unitMph||"mph"}`:o==="km/h"||o==="kmh"?`${Math.round(i*3.6)} ${n?.unitKmh||"km/h"}`:o==="kn"||o==="kt"?`${(i*1.94384).toFixed(1)} ${n?.unitKn||"kn"}`:`${i.toFixed(1)} ${n?.unitMs||"m/s"}`}function Me(c,e,t,n={},r={}){let a=c!=null&&!isNaN(c)?c:1013.25,o=e!=null&&!isNaN(e)?e:a,i=t!=null&&!isNaN(t)?t:a-o,g=960,f=1060,b=-120,y=120;function m(s){let p=Math.max(g,Math.min(f,s));return b+(p-g)/(f-g)*(y-b)}function w(s){return Math.max(-4,Math.min(4,s))/4*45}let S=m(a),k=m(o),z=w(i),L=r.showSubdial!==!1,H="vb"+ ++ae,C=200,h=200,j="",V="";for(let s=960;s<=1060;s+=1){let l=(m(s)-90)*(Math.PI/180),d=s%10===0,v=s%5===0,M=168,x=d?152:v?157:162,P=d?1.6:v?1:.6,R=(C+M*Math.cos(l)).toFixed(1),I=(h+M*Math.sin(l)).toFixed(1),B=(C+x*Math.cos(l)).toFixed(1),W=(h+x*Math.sin(l)).toFixed(1);if(j+=`<line x1="${R}" y1="${I}" x2="${B}" y2="${W}" stroke="#2e200c" stroke-width="${P}" stroke-linecap="round"/>`,d){let q=(C+138*Math.cos(l)).toFixed(1),Q=(h+138*Math.sin(l)+3.5).toFixed(1);V+=`<text x="${q}" y="${Q}" font-size="9" font-weight="800" fill="#1c1204">${s}</text>`}}for(let s=720;s<=795;s+=5){let p=s*1.33322;if(p>=g&&p<=f){let d=(m(p)-90)*(Math.PI/180),v=(C+143*Math.cos(d)).toFixed(1),M=(h+143*Math.sin(d)).toFixed(1),x=(C+148*Math.cos(d)).toFixed(1),P=(h+148*Math.sin(d)).toFixed(1);if(j+=`<line x1="${v}" y1="${M}" x2="${x}" y2="${P}" stroke="#7d6739" stroke-width="0.8"/>`,s%10===0){let R=(C+125*Math.cos(d)).toFixed(1),I=(h+125*Math.sin(d)+2.5).toFixed(1);V+=`<text x="${R}" y="${I}" font-size="7" font-weight="700" fill="#5e491c">${s}</text>`}}}let Z=u(n.storm||"STORMY"),D=u(n.rain||"RAIN"),N=u(n.change||"CHANGE"),O=u(n.fair||"FAIR"),K=u(n.very_dry||"VERY DRY"),G=u(n.falling||"FALLING"),_=u(n.steady||"STEADY"),T=u(n.rising||"RISING"),A=u(n.delta_3h||"\u0394 3 HOURS"),E=u(n.aneroid||"ANEROID BAROMETER"),F=u(n.compensated||"Compensated for Temperature");return`<svg role="img" aria-label="${u(`${n.aneroid||"ANEROID BAROMETER"}: ${a.toFixed(1)} hPa, \u03943h ${i>=0?"+":""}${i.toFixed(1)} hPa`)}" viewBox="0 0 400 400" class="vintage-dial-svg" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="${H}_bezel" cx="50%" cy="50%" r="50%">
        <stop offset="85%" stop-color="#4a3718" />
        <stop offset="92%" stop-color="#cfab56" />
        <stop offset="96%" stop-color="#fdf3a9" />
        <stop offset="98%" stop-color="#8a6721" />
        <stop offset="100%" stop-color="#2a1d08" />
      </radialGradient>
      <linearGradient id="${H}_brass" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d4af37" />
        <stop offset="25%" stop-color="#fff2a3" />
        <stop offset="50%" stop-color="#99731d" />
        <stop offset="75%" stop-color="#ffd966" />
        <stop offset="100%" stop-color="#5e440e" />
      </linearGradient>
      <radialGradient id="${H}_parchment" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fffdf5" />
        <stop offset="65%" stop-color="#f5eed7" />
        <stop offset="88%" stop-color="#e6dcbc" />
        <stop offset="100%" stop-color="#c4b48d" />
      </radialGradient>
      <linearGradient id="${H}_steel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1c2536" />
        <stop offset="50%" stop-color="#2b3b54" />
        <stop offset="100%" stop-color="#0f1622" />
      </linearGradient>
      <linearGradient id="${H}_gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#e5c158" />
        <stop offset="50%" stop-color="#fff5b8" />
        <stop offset="100%" stop-color="#9a741c" />
      </linearGradient>
      <filter id="${H}_shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
      </filter>
    </defs>

    <!-- Outer Brass Bezel -->
    <circle cx="200" cy="200" r="196" fill="url(#${H}_bezel)" stroke="#1a1103" stroke-width="2" />
    
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
    <circle cx="200" cy="200" r="176" fill="none" stroke="url(#${H}_brass)" stroke-width="8" />
    <circle cx="200" cy="200" r="172" fill="none" stroke="#2a1e09" stroke-width="1.5" />

    <!-- Parchment Dial Face -->
    <circle cx="200" cy="200" r="170" fill="url(#${H}_parchment)" />
    <circle cx="200" cy="200" r="170" fill="none" stroke="#8c7849" stroke-width="1" opacity="0.6" />
    <circle cx="200" cy="200" r="148" fill="none" stroke="#a08955" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.7" />
    <circle cx="200" cy="200" r="115" fill="none" stroke="#a08955" stroke-width="0.6" opacity="0.5" />

    <!-- Weather Condition Arc Labels -->
    <g font-family="'Cinzel', Georgia, serif" font-weight="800" text-anchor="middle" fill="#2d1f0e">
      <text transform="translate(110, 275) rotate(-45)" font-size="11" letter-spacing="1">${Z}</text>
      <text transform="translate(96, 185) rotate(-22)" font-size="11.5" letter-spacing="1.5">${D}</text>
      <text transform="translate(200, 94)" font-size="13" font-weight="900" letter-spacing="2.5" fill="#1f1406">${N}</text>
      <text transform="translate(304, 185) rotate(22)" font-size="11.5" letter-spacing="1.5">${O}</text>
      <text transform="translate(290, 275) rotate(45)" font-size="11" letter-spacing="1">${K}</text>
    </g>

    <!-- Center Inscription -->
    <g text-anchor="middle">
      <text x="200" y="145" font-family="'Cinzel', Georgia, serif" font-size="11" font-weight="bold" fill="#523d1c" letter-spacing="3">${E}</text>
      <path d="M 140 152 Q 200 156 260 152" fill="none" stroke="#7a5d2e" stroke-width="0.8" />
      <text x="200" y="166" font-family="'Playfair Display', Georgia, serif" font-style="italic" font-size="9" fill="#755a2f">${F}</text>
    </g>

    <!-- Sub-Dial: 3h Pressure Trend Indicator -->
    ${L?`
    <g class="v-subdial" transform="translate(200, 260)">
      <circle cx="0" cy="0" r="32" fill="#f4ebd0" stroke="#8a7346" stroke-width="1.2" />
      <circle cx="0" cy="0" r="30" fill="none" stroke="#b09b6c" stroke-width="0.5" stroke-dasharray="1.5 1.5" />
      <text x="-18" y="16" font-family="'Cinzel', Georgia, serif" font-size="6.5" font-weight="bold" fill="#8f2d18" text-anchor="middle">${G}</text>
      <text x="0" y="-19" font-family="'Cinzel', Georgia, serif" font-size="6.5" font-weight="bold" fill="#4d3b20" text-anchor="middle">${_}</text>
      <text x="18" y="16" font-family="'Cinzel', Georgia, serif" font-size="6.5" font-weight="bold" fill="#1b5e20" text-anchor="middle">${T}</text>
      <text x="0" y="11" font-family="sans-serif" font-size="6" fill="#7a6745" text-anchor="middle">${A}</text>
      <line x1="-24" y1="0" x2="-20" y2="0" stroke="#4a391e" stroke-width="0.8"/>
      <line x1="0" y1="-24" x2="0" y2="-20" stroke="#4a391e" stroke-width="0.8"/>
      <line x1="24" y1="0" x2="20" y2="0" stroke="#4a391e" stroke-width="0.8"/>
      <g class="v-needle-trend" style="transform-origin:0px 0px; transform:rotate(${z.toFixed(1)}deg);">
        <path d="M -1.5 6 L -0.6 -22 L 0.6 -22 L 1.5 6 Z" fill="#8f2d18" />
        <circle cx="0" cy="0" r="3" fill="#3a2a11" stroke="#ffd966" stroke-width="0.6"/>
      </g>
    </g>`:""}

    <!-- Scale Ticks & Numbers -->
    <g stroke-linecap="round">${j}</g>
    <g font-family="'Cinzel', Georgia, serif" font-size="8.5" font-weight="700" fill="#2e200c" text-anchor="middle">${V}</g>

    <!-- NEEDLE 1: Reference Marker (3 Hours Ago) - Gold/Brass -->
    <g class="v-needle-ref" style="transform-origin:200px 200px; transform:rotate(${k.toFixed(1)}deg);" filter="url(#${H}_shadow)">
      <path d="M 197 60 L 200 48 L 203 60 L 201 100 L 199 100 Z" fill="url(#${H}_gold)" stroke="#664d12" stroke-width="0.7"/>
      <circle cx="200" cy="54" r="2.2" fill="#ffeaa7"/>
      <circle cx="200" cy="245" r="7" fill="none" stroke="url(#${H}_gold)" stroke-width="1.8"/>
      <line x1="200" y1="200" x2="200" y2="238" stroke="url(#${H}_gold)" stroke-width="1.8"/>
    </g>

    <!-- NEEDLE 2: Main Active Pressure Needle - Blued Steel -->
    <g class="v-needle-main" style="transform-origin:200px 200px; transform:rotate(${S.toFixed(1)}deg);" filter="url(#${H}_shadow)">
      <path d="M 198.5 200 L 197 105 Q 194 92 195.5 82 Q 197 72 200 45 Q 203 72 204.5 82 Q 206 92 203 105 L 201.5 200 Z" fill="url(#${H}_steel)"/>
      <line x1="200" y1="52" x2="200" y2="190" stroke="#718ba8" stroke-width="0.8" opacity="0.6"/>
      <polygon points="200,80 203.5,88 200,96 196.5,88" fill="#d4af37" stroke="#332408" stroke-width="0.5"/>
      <circle cx="200" cy="88" r="1.2" fill="#1b2838"/>
      <path d="M 198 200 L 196.5 240 Q 192 250 200 256 Q 208 250 203.5 240 L 202 200 Z" fill="url(#${H}_steel)"/>
      <circle cx="200" cy="245" r="4.5" fill="#151d2a" stroke="#d4af37" stroke-width="0.8"/>
    </g>

    <!-- Central Brass Hub -->
    <g filter="url(#${H}_shadow)">
      <circle cx="200" cy="200" r="18" fill="url(#${H}_brass)" stroke="#3d2c0e" stroke-width="1.5"/>
      <circle cx="200" cy="200" r="15" fill="#a8842c" stroke="#523c10" stroke-width="1"/>
      <circle cx="200" cy="200" r="9" fill="url(#${H}_bezel)" stroke="#2b1c05" stroke-width="1"/>
      <circle cx="200" cy="200" r="5" fill="#fdf0a6"/>
      <line x1="197" y1="197" x2="203" y2="203" stroke="#523c10" stroke-width="1"/>
    </g>

    <!-- Glass Reflection -->
    <circle cx="200" cy="200" r="170" fill="none" opacity="0.3" pointer-events="none"/>
  </svg>`}function we(c,e=""){let t=c!=null&&!Number.isNaN(c),n=t?Math.max(0,Math.min(100,c)):0,r=44,a=60,o=60,i=2*Math.PI*r,g=i*.75,f=i-g,b=g*(n/100),y=i-b,m=-225,w=n<30?"#90CAF9":n<60?"#42A5F5":"#1565C0",S="pw"+ ++ae,k=t?`${n}%`:"\u2014",z=e?`${e}: ${k}`:`Precipitation: ${k}`;return`<svg role="img" aria-label="${u(z)}" viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <defs>
      <linearGradient id="${S}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${w}" stop-opacity="0.75"/>
        <stop offset="100%" stop-color="${w}" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <circle cx="${a}" cy="${o}" r="${r}" fill="none"
      stroke="rgba(255,255,255,0.20)" stroke-width="10"
      stroke-dasharray="${g.toFixed(2)} ${f.toFixed(2)}"
      stroke-linecap="round" transform="rotate(${m} ${a} ${o})"/>
    <circle cx="${a}" cy="${o}" r="${r}" fill="none"
      stroke="url(#${S})" stroke-width="10"
      stroke-dasharray="${b.toFixed(2)} ${y.toFixed(2)}"
      stroke-linecap="round" transform="rotate(${m} ${a} ${o})"
      style="transition:stroke-dasharray .9s ease"/>
    <text x="${a}" y="${o}" text-anchor="middle" dominant-baseline="central"
      fill="white" font-size="22" font-weight="900"
      font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">${k}</text>
  </svg>`}function ve(c,e,t){if(!c||c.length===0)return'<div class="tl-empty">\u2014 no trend data yet \u2014</div>';let n=t?28:34;function r(o){return`${String(o.getHours()).padStart(2,"0")}:${String(o.getMinutes()).padStart(2,"0")}`}return`<div class="tl-inner">${c.map((o,i)=>{let g=i===c.length-1,f=xe[o.state]||"partlycloudy",b=e[o.state]||o.state||"\u2014",y=b.split(/[,\s]+/)[0],m=r(o.t),w=o.isCurrent||g?" tl-current":"",S=re(f,`${m}: ${b}`),k=g?"":'<div class="tl-arrow">\u203A</div>';return`
      <div class="tl-step${w}">
        <div class="tl-icon" style="width:${n}px;height:${n}px">${S}</div>
        <div class="tl-lbl">${u(y)}</div>
        <div class="tl-time">${u(m)}</div>
      </div>
      ${k}`}).join("")}</div>`}function ke(c,e,t,n="hPa",r="precip %"){if(!c||c.length<2)return'<div class="hchart-empty">\u2014 no history data yet \u2014</div>';let a=560,o=t?150:200,i={top:22,right:16,bottom:38,left:56},g=a-i.left-i.right,f=o-i.top-i.bottom,b=t?11:13,y="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",m="hc"+ ++ae,w=c.filter(l=>l.p!=null),S=c.filter(l=>l.precip!=null);if(w.length>=4){let l=[...w].map(x=>x.p).sort((x,P)=>x-P),d=l[Math.floor(l.length*.25)],v=l[Math.floor(l.length*.75)],M=v-d;w=w.filter(x=>x.p>=d-3*M&&x.p<=v+3*M)}let k=980,z=1040;if(w.length){let l=w.map(x=>x.p),d=Math.min(...l),v=Math.max(...l),M=Math.max(2,(v-d)*.15);k=Math.floor(d-M),z=Math.ceil(v+M)}let L=c[0].t.getTime(),H=c[c.length-1].t.getTime(),C=H-L||1;function h(l){return i.left+(l.getTime()-L)/C*g}function j(l){return i.top+(1-(l-k)/(z-k))*f}function V(l){return i.top+(1-l/100)*f}function Z(l,d){return l.length?l.map((v,M)=>`${M===0?"M":"L"}${h(v.t).toFixed(1)},${d(M===0?l[0][d===j?"p":"precip"]:v[d===j?"p":"precip"]).toFixed(1)}`).join(" "):""}let D=w.map((l,d)=>`${d===0?"M":"L"}${h(l.t).toFixed(1)},${j(l.p).toFixed(1)}`).join(" "),N=S.map((l,d)=>`${d===0?"M":"L"}${h(l.t).toFixed(1)},${V(l.precip).toFixed(1)}`).join(" "),O=w.length?D+` L${h(w[w.length-1].t).toFixed(1)},${(i.top+f).toFixed(1)} L${h(w[0].t).toFixed(1)},${(i.top+f).toFixed(1)} Z`:"",K=t?3:4,G=Math.ceil((z-k)/(K-1)/5)*5,_=[];for(let l=Math.ceil(k/5)*5;l<=z;l+=G)_.push(l);let T=[0,25,50,75,100],A=[];{let l=new Date(L);l.setMinutes(0,0,0),l.setHours(l.getHours()+1);let d=new Date(l);for(;d.getTime()<=H;)d.getHours()%6===0&&A.push({t:new Date(d),label:`${String(d.getHours()).padStart(2,"0")}:00`}),d.setHours(d.getHours()+1)}let E=h(new Date(H)),F="";if(w.length){let l=w[w.length-1],d=h(l.t),v=j(l.p);F=`
      <circle cx="${d.toFixed(1)}" cy="${v.toFixed(1)}" r="5" fill="#90CAF9" stroke="#fff" stroke-width="1.5"/>
      <text x="${(d-8).toFixed(1)}" y="${(v+14).toFixed(1)}" text-anchor="middle"
        fill="#90CAF9" font-size="${b+2}" font-weight="800"
        font-family="${y}">${l.p.toFixed(1)}</text>`}let $="";if(S.length){let l=S[S.length-1],d=h(l.t),v=V(l.precip);$=`
      <circle cx="${d.toFixed(1)}" cy="${v.toFixed(1)}" r="4.5" fill="rgba(255,255,255,0.90)" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
      <text x="${(d-8).toFixed(1)}" y="${(v-10).toFixed(1)}" text-anchor="middle"
        fill="rgba(255,255,255,0.85)" font-size="${b+1}" font-weight="700"
        font-family="${y}">${l.precip.toFixed(0)}%</text>`}let s=S.length?N+` L${h(S[S.length-1].t).toFixed(1)},${(i.top+f).toFixed(1)} L${h(S[0].t).toFixed(1)},${(i.top+f).toFixed(1)} Z`:"",p="24-hour pressure and precipitation chart";if(w.length){let l=w.map(d=>d.p);p=`24-hour pressure and precipitation chart: pressure from ${Math.min(...l).toFixed(1)} to ${Math.max(...l).toFixed(1)} hPa`}return`<svg role="img" aria-label="${u(p)}" viewBox="0 0 ${a} ${o}" class="history-chart-svg" xmlns="http://www.w3.org/2000/svg"
    style="width:100%;height:100%;display:block;overflow:visible;cursor:crosshair">
    <defs>
      <linearGradient id="${m}_p" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="#90CAF9" stop-opacity="0.40"/>
        <stop offset="100%" stop-color="#90CAF9" stop-opacity="0.05"/>
      </linearGradient>
      <linearGradient id="${m}_pr" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="rgba(255,255,255,0.22)" stop-opacity="1"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.02)" stop-opacity="1"/>
      </linearGradient>
      <clipPath id="${m}_clip">
        <rect x="${i.left}" y="${i.top}" width="${g}" height="${f}"/>
      </clipPath>
    </defs>

    <!-- Horizontal grid lines (pressure ticks) -->
    ${_.map(l=>{let d=j(l).toFixed(1);return`<line x1="${i.left}" y1="${d}" x2="${i.left+g}" y2="${d}"
        stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-dasharray="4 5"/>`}).join("")}
    <!-- Vertical grid lines (time ticks) -->
    ${A.map(({t:l})=>{let d=h(l).toFixed(1);return`<line x1="${d}" y1="${i.top}" x2="${d}" y2="${i.top+f}"
        stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="2 5"/>`}).join("")}

    <g clip-path="url(#${m}_clip)">
      <!-- Precip area fill -->
      ${s?`<path d="${s}" fill="url(#${m}_pr)"/>`:""}
      <!-- Precip line: dashed white, visible on any background -->
      ${N?`<path d="${N}" fill="none" stroke="rgba(255,255,255,0.72)"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        stroke-dasharray="5 4"/>`:""}
      <!-- Pressure area fill -->
      ${O?`<path d="${O}" fill="url(#${m}_p)"/>`:""}
      <!-- Pressure line: solid, on top -->
      ${D?`<path d="${D}" fill="none" stroke="#90CAF9"
        stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>`:""}
      ${F}
      ${$}
    </g>

    <!-- Left Y-axis labels (pressure) -->
    ${_.map(l=>{let d=j(l);return d<i.top-4||d>i.top+f+4?"":`<text x="${i.left-7}" y="${d.toFixed(1)}" text-anchor="end"
        dominant-baseline="middle" fill="rgba(255,255,255,0.70)"
        font-size="${b}" font-family="${y}">${l}</text>`}).join("")}

    <!-- Right Y-axis labels (precip %) \u2014 positioned inside right edge -->
    ${T.map(l=>{let d=V(l);return d<i.top-4||d>i.top+f+4?"":`<text x="${(i.left+g-2).toFixed(1)}" y="${d.toFixed(1)}" text-anchor="end"
        dominant-baseline="middle" fill="rgba(255,255,255,0.45)"
        font-size="${b-2}" font-family="${y}">${l}%</text>`}).join("")}

    <!-- X-axis time labels -->
    ${A.map(({t:l,label:d})=>{let v=h(l);return v<i.left+6||v>i.left+g-6?"":`<text x="${v.toFixed(1)}" y="${(i.top+f+15).toFixed(1)}" text-anchor="middle"
        fill="rgba(255,255,255,0.55)" font-size="${b}"
        font-family="${y}">${d}</text>`}).join("")}

    <!-- Axis borders -->
    <line x1="${i.left}" y1="${i.top}" x2="${i.left}" y2="${i.top+f}"
      stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
    <line x1="${i.left}" y1="${i.top+f}" x2="${i.left+g}" y2="${i.top+f}"
      stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>

    <!-- Legend -->
    <circle cx="${i.left+7}" cy="${i.top-7}" r="4" fill="#90CAF9"/>
    <text x="${i.left+15}" y="${i.top-4}" fill="rgba(255,255,255,0.70)"
      font-size="${b}" font-family="${y}" dominant-baseline="middle">${u(n)}</text>
    <circle cx="${i.left+56}" cy="${i.top-7}" r="4" fill="rgba(255,255,255,0.80)"/>
    <text x="${i.left+64}" y="${i.top-4}" fill="rgba(255,255,255,0.60)"
      font-size="${b}" font-family="${y}" dominant-baseline="middle">${u(r)}</text>

    <!-- Interactive Scrub Cursor & Tooltip -->
    <g class="hchart-scrub-cursor" style="opacity:0; pointer-events:none; transition:opacity 0.15s ease-out;">
      <line class="hchart-scrub-line" x1="${i.left}" y1="${i.top}" x2="${i.left}" y2="${i.top+f}" stroke="#FFD54F" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle class="hchart-scrub-dot-halo" cx="${i.left}" cy="${i.top}" r="8" fill="rgba(255,213,79,0.3)"/>
      <circle class="hchart-scrub-dot" cx="${i.left}" cy="${i.top}" r="4.5" fill="#FFD54F" stroke="#ffffff" stroke-width="1.5"/>
      <g class="hchart-scrub-tip" transform="translate(${i.left+40}, ${i.top+10})">
        <rect x="-38" y="-11" width="76" height="22" rx="6" fill="#0f172a" stroke="#FFD54F" stroke-width="1" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"/>
        <text class="hchart-scrub-tip-txt" x="0" y="3.5" fill="#ffffff" font-size="${b+1}" font-weight="700" text-anchor="middle" font-family="${y}">1014.2 hPa</text>
      </g>
    </g>
  </svg>`}function te(c,e){if(c==null)return null;let t=typeof c=="number"?c:parseFloat(c);if(isNaN(t))return null;switch((e||"hpa").trim().toLowerCase()){case"hpa":case"mbar":return t;case"mmhg":return t*1.33322387415;case"inhg":return t*33.863886666667;case"psi":return t*68.947572932;case"pa":return t/100;case"kpa":return t*10;case"bar":return t*1e3;default:return t}}var ie={entity_zambretti:"sensor.zambretti_forecast",entity_sager:"sensor.sager_forecast",entity_6h:"sensor.zambretti_forecast_6h",entity_12h:"sensor.zambretti_forecast_12h",entity_24h:"sensor.zambretti_forecast_24h",entity_precip:"sensor.precipitation_probability"},Se={zambretti_forecast:"entity_zambretti",sager_forecast:"entity_sager",zambretti_forecast_6h:"entity_6h",zambretti_forecast_12h:"entity_12h",zambretti_forecast_24h:"entity_24h",precipitation_probability:"entity_precip",sea_level_pressure:"entity_pressure",forecast_confidence:"entity_confidence",snow_probability:"entity_snow",fog_probability:"entity_fog",forecast_accuracy_24h:"entity_accuracy",last_forecast_hit:"entity_last_hit",adaptive_damping:"entity_damping",pressure_falling_rapidly:"entity_alert_pressure",storm_warning:"entity_alert_storm",frost_risk:"entity_alert_frost",fog_risk:"entity_alert_fog"},ne=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config={},this._historyPoints=null,this._historyFetching=!1,this.shadowRoot.addEventListener("click",e=>{let t=e.target?.closest?.("[data-more-info]");t&&this._openMoreInfo(t.getAttribute("data-more-info"))}),this.shadowRoot.addEventListener("keydown",e=>{let t=e.target?.closest?.("[data-more-info]");!t||t.tagName==="BUTTON"||(e.key==="Enter"?(e.preventDefault(),this._openMoreInfo(t.getAttribute("data-more-info"))):e.key===" "&&e.preventDefault())}),this.shadowRoot.addEventListener("keyup",e=>{let t=e.target?.closest?.("[data-more-info]");t&&t.tagName!=="BUTTON"&&e.key===" "&&(e.preventDefault(),this._openMoreInfo(t.getAttribute("data-more-info")))})}_openMoreInfo(e){!e||!this._hass?.states?.[e]||this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}_moreInfoAttrs(e){return!e||!this._hass?.states?.[e]?"":`data-more-info="${u(e)}" role="button" tabindex="0"`}static async getConfigElement(){return await import(new URL("./zambretti-weather-card-editor.js?v=2.3.2",import.meta.url).href),document.createElement("zambretti-weather-card-editor")}static getStubConfig(e,t,n){let r={...ie},a=e?.entities;if(a&&typeof a=="object"){let i=Object.values(a).filter(g=>g&&g.platform==="zambretti_sager"&&typeof g.entity_id=="string"&&g.entity_id.startsWith("sensor."));if(i.length>0){let f=(i.find(b=>b.translation_key==="zambretti_forecast")||i[0]).device_id;for(let b of i){if(f&&b.device_id&&b.device_id!==f)continue;let y=Se[b.translation_key];y&&(r[y]=b.entity_id)}}}let o=Array.isArray(t)&&t.length>0?t:Array.isArray(n)&&n.length>0?n:e&&e.states?Object.keys(e.states):[];if(o.length>0){let i=(...g)=>o.find(f=>{if(typeof f!="string"||!f.startsWith("sensor."))return!1;let b=f.slice(7);return g.some(y=>b===y||b.endsWith(`_${y}`))});e?.states?.[r.entity_zambretti]||(r.entity_zambretti=i("zambretti_forecast","zambretti")||r.entity_zambretti),e?.states?.[r.entity_sager]||(r.entity_sager=i("sager_forecast","sager")||r.entity_sager),e?.states?.[r.entity_6h]||(r.entity_6h=i("zambretti_forecast_6h","forecast_6h")||r.entity_6h),e?.states?.[r.entity_12h]||(r.entity_12h=i("zambretti_forecast_12h","forecast_12h")||r.entity_12h),e?.states?.[r.entity_24h]||(r.entity_24h=i("zambretti_forecast_24h","forecast_24h")||r.entity_24h),e?.states?.[r.entity_precip]||(r.entity_precip=i("precipitation_probability","precip_probability")||r.entity_precip)}return{...r,entity_wind_speed:"",card_style:"modern",show_wind:!0,show_sager:!0,show_precip:!0,show_forecasts:!0,show_alerts:!0,show_metrics:!0,show_ledger:!0,show_trend:!1,show_history:!1,language:"auto",wind_unit:"m/s",compact:!1,auto_theme:!0,theme_alpha:100}}setConfig(e){if(!e||typeof e!="object")throw new Error("Invalid configuration");let t=this._config||{},n={...ie,entity_wind_speed:"",show_wind:!0,show_trend:!1,show_history:!1,language:"auto",wind_unit:"m/s",compact:!1,show_sager:!0,show_precip:!0,show_forecasts:!0,show_alerts:!0,show_metrics:!0,show_ledger:!0,auto_theme:!0,theme_alpha:e.theme_alpha??100,custom_bg:"linear-gradient(135deg,#1565C0 0%,#1976D2 100%)",...e};if(this._hass&&this._rendered){let r=new Set([...Object.keys(t),...Object.keys(n)]),a=!0;for(let o of r)if(!(o==="custom_bg"||o==="theme_alpha")&&t[o]!==n[o]){a=!1;break}if(a){this._config=n;let o=this._state(n.entity_zambretti),g=this._attr(n.entity_zambretti,"is_night",!1)&&(o==="settled_fine"||o==="fine_weather")?"night_clear":X[o]||"partlycloudy",f=this._computeThemeBg(g,n.card_style==="vintage"),b=this.shadowRoot.querySelector("ha-card");b&&(b.style.background=f),this._lastThemeBg=f;return}}if(this._rendered=!1,this._entitiesResolved=!1,(n.show_history!==t.show_history||n.show_trend!==t.show_trend)&&(this._historyPoints=null,this._timelineSteps=null),this._config=n,this._hass){let r=this._resolveEntities(this._hass);Object.keys(r).length>0&&(this._config={...this._config,...r}),this._entitiesResolved=!0,this._render()}}_resolveEntities(e){let t=e?.states||{},n=e?.entities,r={},a=this._config.entity_zambretti;if(!a||!t[a]){if(n&&typeof n=="object"){let y=Object.values(n).find(m=>m&&m.platform==="zambretti_sager"&&m.translation_key==="zambretti_forecast"&&t[m.entity_id]);y&&(a=y.entity_id)}(!a||!t[a])&&(a=Object.keys(t).find(y=>{if(!y.startsWith("sensor."))return!1;let m=y.slice(7);return m==="zambretti_forecast"||m.endsWith("_zambretti_forecast")||m.endsWith("_zambretti")}))}a&&(r.entity_zambretti=a);let o=a&&n&&typeof n=="object"?n[a]:null;if(o&&o.device_id){let y=o.device_id;for(let m of Object.values(n)){if(!m||m.platform!=="zambretti_sager"||m.device_id!==y)continue;let w=Se[m.translation_key];if(!w||w==="entity_zambretti")continue;let S=this._config[w],k=S&&n[S]?n[S].device_id:null;(!S||!t[S]||S===ie[w]&&k!==y)&&t[m.entity_id]&&(r[w]=m.entity_id)}}let i="";a&&(a.endsWith("_zambretti_forecast")?i=a.slice(0,-18):a.endsWith("_zambretti")?i=a.slice(0,-9):(a==="sensor.zambretti_forecast"||a==="sensor.zambretti")&&(i="sensor."));let g={entity_sager:["sager_forecast","sager"],entity_6h:["zambretti_forecast_6h","forecast_6h"],entity_12h:["zambretti_forecast_12h","forecast_12h"],entity_24h:["zambretti_forecast_24h","forecast_24h"],entity_precip:["precipitation_probability","precip_probability"],entity_pressure:["sea_level_pressure","pressure","barometric_pressure"],entity_confidence:["forecast_confidence"],entity_snow:["snow_probability"],entity_fog:["fog_probability"],entity_accuracy:["forecast_accuracy_24h"],entity_last_hit:["last_forecast_hit"],entity_damping:["adaptive_damping"]};for(let[y,m]of Object.entries(g)){if(r[y])continue;let w=this._config[y];if(w&&t[w]&&(!i||w.startsWith(i))){r[y]=w;continue}let S=null;if(i)for(let k of m){let z=`${i}${k}`;if(t[z]){S=z;break}}S||(S=Object.keys(t).find(k=>{if(!k.startsWith("sensor."))return!1;let z=k.slice(7);return m.some(L=>z===L||z.endsWith(`_${L}`))})),S&&(r[y]=S)}let f={entity_alert_pressure:["pressure_falling_rapidly"],entity_alert_storm:["storm_warning"],entity_alert_frost:["frost_risk"],entity_alert_fog:["fog_risk"]},b=i.startsWith("sensor.")?`binary_sensor.${i.slice(7)}`:"";for(let[y,m]of Object.entries(f)){if(r[y])continue;let w=this._config[y];if(w&&t[w]){r[y]=w;continue}let S=null;if(b)for(let k of m){let z=`${b}${k}`;if(t[z]){S=z;break}}S||(S=Object.keys(t).find(k=>{if(!k.startsWith("binary_sensor."))return!1;let z=k.slice(14);return m.some(L=>z===L||z.endsWith(`_${L}`))})),S&&(r[y]=S)}return r}set hass(e){let t=this._hass;if(this._hass=e,!this._entitiesResolved){let i=this._resolveEntities(e);Object.keys(i).length>0&&(this._config={...this._config,...i}),this._entitiesResolved=!0}let n=this._config.entity_zambretti,r=t?.states?.[n]?.state,a=e?.states?.[n]?.state,o=(r==="unavailable"||r==="unknown"||!r)&&a&&a!=="unavailable"&&a!=="unknown";if((this._config.show_history||this._config.show_trend)&&this._scheduleHistoryFetch(o),!this._rendered)this._render();else if(t&&e){let i=[this._config.entity_zambretti,this._config.entity_sager,this._config.entity_6h,this._config.entity_12h,this._config.entity_24h,this._config.entity_precip,this._config.entity_wind_speed,this._config.entity_pressure,this._config.entity_confidence,this._config.entity_snow,this._config.entity_fog,this._config.entity_accuracy,this._config.entity_last_hit,this._config.entity_damping,this._config.entity_alert_pressure,this._config.entity_alert_storm,this._config.entity_alert_frost,this._config.entity_alert_fog].filter(Boolean),g=(this._config.language==="auto"||!this._config.language)&&t.language!==e.language;(g||i.some(b=>t.states?.[b]!==e.states?.[b]))&&(g?(this._rendered=!1,this._render()):this._patch())}else this._patch()}_scheduleHistoryFetch(e=!1){if(this._historyFetching)return;let t=this._config;if(!t.show_history&&!t.show_trend)return;if(typeof document<"u"&&document.hidden){this._historyFetchPending=!0;return}let n=Date.now(),a=Array.isArray(this._historyPoints)&&this._historyPoints.length>=2||Array.isArray(this._timelineSteps)&&this._timelineSteps.length>0?300*1e3:15*1e3;!e&&this._historyFetchedAt&&n-this._historyFetchedAt<a||(this._historyFetching=!0,this._doFetchHistory().then(()=>{this._historyFetching=!1,this._historyFetchedAt=Date.now(),this._rendered&&(typeof document>"u"||!document.hidden)&&(this._config.show_history&&this._patchChart(),this._config.show_trend&&this._patchTimeline())}).catch(()=>{this._historyFetching=!1}))}async _doFetchHistory(){if(!this._hass)return;let e=this._config,t=new Date,n=e.entity_zambretti,r=e.entity_precip,a=this._attr(n,"pressure_sensor",null)||e.entity_pressure||null;if(!n&&!r&&!a)return;let o=e.show_history!==!1&&!!e.show_history,i=e.show_trend!==!1&&!!e.show_trend;if(!o&&!i)return;let g=i||!a&&o,f=o&&e.show_precip!==!1&&!!r,b=o&&!!a;if(!g&&!f&&!b)return;let y=new Date(t.getTime()-1440*60*1e3),m=new Date(t.getTime()-2880*60*1e3);try{let z=function(s){return Math.round(s.getTime()/(300*1e3))},L=function(s){return s.lu!=null?new Date(s.lu*1e3):s.last_updated?new Date(s.last_updated):new Date},H=function(s){return s.state??s.s??null},C=function(s){return s.attributes??s.a??{}},[w,S,k]=await Promise.all([g&&n?this._hass.callWS({type:"history/history_during_period",start_time:m.toISOString(),end_time:t.toISOString(),entity_ids:[n],minimal_response:!1,no_attributes:!1,significant_changes_only:!1}):Promise.resolve({}),f&&r?this._hass.callWS({type:"history/history_during_period",start_time:y.toISOString(),end_time:t.toISOString(),entity_ids:[r],minimal_response:!0,no_attributes:!0,significant_changes_only:!1}):Promise.resolve({}),b&&a?this._hass.callWS({type:"history/history_during_period",start_time:y.toISOString(),end_time:t.toISOString(),entity_ids:[a],minimal_response:!0,no_attributes:!0,significant_changes_only:!1}):Promise.resolve({})]),h=new Map,j=w[n]||[],V=y.getTime(),Z=this._attr(n,"pressure_hpa",null),D=Z!=null&&!isNaN(parseFloat(Z))?parseFloat(Z):NaN;if(a){let s=k[a]||[],p=this._attr(a,"unit_of_measurement","hPa"),l=this._state(a),d=te(l,p),v=0;!isNaN(D)&&d!=null&&!isNaN(d)&&(v=D-d);for(let x of s){let P=L(x);if(P.getTime()<V)continue;let R=z(P),I=H(x),B=te(I,p);h.has(R)||h.set(R,{t:P,p:null,precip:null}),B!=null&&!isNaN(B)&&(h.get(R).p=B+v)}let M=isNaN(D)?d!=null?d+v:null:D;if(M!=null&&!isNaN(M)){let x=z(t);h.has(x)||h.set(x,{t,p:null,precip:null}),h.get(x).p=M}}else{for(let s of j){let p=L(s);if(p.getTime()<V)continue;let l=z(p),d=C(s),v=parseFloat(d.pressure_hpa);h.has(l)||h.set(l,{t:p,p:null,precip:null}),isNaN(v)||(h.get(l).p=v)}if(!isNaN(D)){let s=z(t);h.has(s)||h.set(s,{t,p:null,precip:null}),h.get(s).p=D}}let N=[...h.keys()].sort((s,p)=>s-p),O=null;for(let s of N){let p=h.get(s);p.p!=null?O=p.p:O!=null&&(p.p=O)}let K=null;for(let s of N)if(h.get(s).p!=null){K=h.get(s).p;break}if(K!=null)for(let s of N){let p=h.get(s);if(p.p!=null)break;p.p=K}let _=(S[r]||[]).map(s=>({t:L(s),v:parseFloat(H(s))})).filter(s=>!isNaN(s.v)).sort((s,p)=>s.t-p.t),T=parseFloat(this._hass?.states?.[r]?.state);if(!isNaN(T)){let s=z(t);h.has(s)||h.set(s,{t,p:null,precip:null}),h.get(s).precip=T,_.push({t,v:T}),_.sort((p,l)=>p.t-l.t)}if(_.length){for(let{t:l,v:d}of _){if(l.getTime()<V)continue;let v=z(l);h.has(v)||h.set(v,{t:l,p:null,precip:null}),h.get(v).precip=d}N.length=0,N.push(...[...h.keys()].sort((l,d)=>l-d)),O=null;for(let l of N){let d=h.get(l);d.p!=null?O=d.p:O!=null&&(d.p=O)}if(K!=null)for(let l of N){let d=h.get(l);if(d.p!=null)break;d.p=K}let s=0,p=_[0].v;for(let l of N){let d=h.get(l).t.getTime();for(;s+1<_.length&&_[s+1].t.getTime()<=d;)s++;_[s].t.getTime()<=d&&(p=_[s].v),h.get(l).precip==null&&(h.get(l).precip=p)}}this._historyPoints=N.map(s=>h.get(s));let A=j.map(s=>({t:L(s),state:H(s)})).filter(s=>s.state&&s.state!=="unknown"&&s.state!=="unavailable").sort((s,p)=>s.t-p.t),E=[];for(let s of A){let p=E[E.length-1];if(!(p&&p.state===s.state)){if(p&&s.t.getTime()-p.t.getTime()<1800*1e3){p.state=s.state,p.t=s.t;continue}E.push({t:s.t,state:s.state})}}let F=E.slice(-7),$=this._hass.states[n]?.state;if($&&$!=="unknown"&&$!=="unavailable"){let s=F[F.length-1];!s||s.state!==$?F.push({t:new Date,state:$,isCurrent:!0}):(s.isCurrent=!0,s.t=new Date)}this._timelineSteps=F}catch{this._historyPoints=[],this._timelineSteps=[]}}_patchChart(){let e=this.shadowRoot?.querySelector(".history-chart-wrap");if(!e){this._rendered=!1,this._render();return}let t=!!this._config.compact;e.style.height=`${t?150:200}px`;let n=this._labels(),r=this._extras();e.innerHTML=ke(this._historyPoints,n,t,r.unitHpa||"hPa",`${this._precipLabel()} %`),this._setupHistoryScrubbing()}_setupHistoryScrubbing(){let e=this.shadowRoot?.querySelector(".history-chart-svg");if(!e||!Array.isArray(this._historyPoints)||this._historyPoints.length<2)return;let t=this._historyPoints.filter(_=>_.p!=null);if(t.length<2)return;let n=this._historyPoints.filter(_=>_.precip!=null),r=this.shadowRoot?.querySelector(".history-title"),a='<svg aria-hidden="true" viewBox="0 0 16 16" width="12" height="12" style="vertical-align:-1px;margin-right:4px;opacity:0.7"><polyline points="1,12 5,6 8,9 11,4 15,7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>24h',o=e.querySelector(".hchart-scrub-cursor"),i=e.querySelector(".hchart-scrub-line"),g=e.querySelector(".hchart-scrub-dot"),f=e.querySelector(".hchart-scrub-dot-halo"),b=e.querySelector(".hchart-scrub-tip"),y=e.querySelector(".hchart-scrub-tip-txt");if(!o||!i||!g||!b)return;if(t.length>=4){let _=[...t].map(F=>F.p).sort((F,$)=>F-$),T=_[Math.floor(_.length*.25)],A=_[Math.floor(_.length*.75)],E=A-T;t=t.filter(F=>F.p>=T-3*E&&F.p<=A+3*E)}if(t.length<2)return;let m=!!this._config.compact,w=560,S=m?150:200,k={top:22,right:16,bottom:38,left:56},z=w-k.left-k.right,L=S-k.top-k.bottom,H=t.map(_=>_.p),C=Math.min(...H),h=Math.max(...H),j=Math.max(2,(h-C)*.15),V=Math.floor(C-j),Z=Math.ceil(h+j),D=this._historyPoints[0].t.getTime(),N=this._historyPoints[this._historyPoints.length-1].t.getTime(),O=Math.max(N-D,1),K=_=>{let T=e.getBoundingClientRect(),A=_.touches?_.touches[0].clientX:_.clientX,F=Math.max(0,Math.min(1,(A-T.left)/T.width))*w,$=Math.max(k.left,Math.min(k.left+z,F)),s=D+($-k.left)/z*O,p=t[0],l=1/0;for(let W of t){let U=Math.abs(W.t.getTime()-s);U<l&&(l=U,p=W)}let d=k.top+(1-(p.p-V)/(Z-V))*L,v=k.left+(p.t.getTime()-D)/O*z;o.style.opacity="1",i.setAttribute("x1",v.toFixed(1)),i.setAttribute("x2",v.toFixed(1)),g.setAttribute("cx",v.toFixed(1)),g.setAttribute("cy",d.toFixed(1)),f&&(f.setAttribute("cx",v.toFixed(1)),f.setAttribute("cy",d.toFixed(1)));let M=Math.max(k.left+40,Math.min(k.left+z-40,v)),x=Math.max(k.top+10,d-18);b.setAttribute("transform",`translate(${M.toFixed(1)}, ${x.toFixed(1)})`),y&&(y.textContent=`${p.p.toFixed(1)} hPa`);let R=((new Date().getTime()-p.t.getTime())/(3600*1e3)).toFixed(1),I=p.t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),B="";if(n.length){let W=n[0],U=1/0;for(let q of n){let Q=Math.abs(q.t.getTime()-s);Q<U&&(U=Q,W=q)}W&&W.precip>0&&(B=` \xB7 \u{1F4A7} ${W.precip.toFixed(0)}%`)}r&&(r.innerHTML=`<span style="color:#FFD54F">\u23F1 ${I} (-${R}h): <b>${p.p.toFixed(1)} hPa</b>${B}</span>`)},G=()=>{o.style.opacity="0",r&&(r.innerHTML=a)};e.onmousemove=K,e.onmouseleave=G,e.ontouchmove=_=>{_.preventDefault(),K(_)},e.ontouchend=G}_patchTimeline(){let e=this.shadowRoot?.querySelector(".trend-timeline-wrap");if(!e){this._rendered=!1,this._render();return}let t=this._labels();e.innerHTML=ve(this._timelineSteps,t,!!this._config.compact)}connectedCallback(){this._visibilityHandler||(this._visibilityHandler=()=>{typeof document<"u"&&!document.hidden&&this._historyFetchPending&&(this._historyFetchPending=!1,this._scheduleHistoryFetch())}),typeof document<"u"&&(document.removeEventListener("visibilitychange",this._visibilityHandler),document.addEventListener("visibilitychange",this._visibilityHandler))}disconnectedCallback(){this._visibilityHandler&&typeof document<"u"&&document.removeEventListener("visibilitychange",this._visibilityHandler)}_state(e){return this._hass?.states?.[e]?.state??null}_attr(e,t,n){return this._hass?.states?.[e]?.attributes?.[t]??n}_isUnavailable(e){return e==null||e===""||e==="unavailable"||e==="unknown"}_localizeState(e,t,n=!1){if(this._isUnavailable(e)){if(!n)return"\u2014";let r=e==="unknown"?"unknown":"unavailable";return this._hass?.localize?.(`state.default.${r}`)||(r==="unknown"?"Unknown":"Unavailable")}return t[e]||e}_readPressureHpa(){let e=this._config,t=this._state(e.entity_zambretti);if(!this._isUnavailable(t)){let n=this._attr(e.entity_zambretti,"pressure_hpa",null);if(n!=null){let r=parseFloat(n);if(!Number.isNaN(r))return r}}if(e.entity_pressure){let n=this._state(e.entity_pressure);if(!this._isUnavailable(n)){let r=this._attr(e.entity_pressure,"unit_of_measurement","hPa");return te(n,r)}}return null}_readPrecipPct(){let e=this._state(this._config.entity_precip);if(this._isUnavailable(e))return null;let t=parseInt(e,10);return Number.isNaN(t)?null:Math.max(0,Math.min(100,t))}_labels(){return ge(this._config.language||"auto",this._hass?.language||"en")}_vintageLabels(){return _e(this._config.language||"auto",this._hass?.language||"en")}_precipLabel(){return he(this._config.language||"auto",this._hass?.language||"en")}_extras(){return pe(this._config.language||"auto",this._hass?.language||"en")}_readNum(e,t=null){if(!e)return null;let n=t!=null?this._attr(e,t,null):this._state(e);if(this._isUnavailable(n))return null;let r=parseFloat(n);return Number.isNaN(r)?null:r}_buildAlertsHtml(e){let t=this._config;if(t.show_alerts===!1)return"";let r=[{key:"storm",id:t.entity_alert_storm,icon:"\u26A1",label:e.alertStorm||"Storm"},{key:"pressure",id:t.entity_alert_pressure,icon:"\u{1F4C9}",label:e.alertPressureDrop||"Rapid Fall"},{key:"frost",id:t.entity_alert_frost,icon:"\u2744\uFE0F",label:e.alertFrost||"Frost"},{key:"fog",id:t.entity_alert_fog,icon:"\u{1F32B}\uFE0F",label:e.alertFog||"Fog"}].filter(a=>a.id&&this._state(a.id)==="on");return r.length?r.map(a=>`<button type="button" class="mi-btn alert-pill alert-${a.key}" data-more-info="${u(a.id)}" aria-label="${u(a.label)}"><span aria-hidden="true">${a.icon}</span><span>${u(a.label)}</span></button>`).join(""):""}_buildConfidenceHtml(e,t){if(this._config.show_metrics===!1||t)return"";let n=this._config,r=this._readNum(n.entity_confidence)??this._readNum(n.entity_zambretti,"confidence");if(r==null)return"";let a=Math.max(0,Math.min(100,Math.round(r)));return`<span class="confidence-badge ${a>=75?"conf-high":a>=50?"conf-mid":"conf-low"}" title="${u(e.confidence||"Confidence")}"><span aria-hidden="true">\u{1F6E1}</span> ${a}%</span>`}_buildMetricsHtml(e,t,n,r){if(this._config.show_metrics===!1||r)return"";let a=this._config,o=[],i=this._attr(a.entity_zambretti,"consensus_state",null),g=this._readNum(a.entity_zambretti,"model_divergence");if(i&&i!==n&&g!=null&&g>=30){let m=this._localizeState(i,e,!1);o.push(`<button type="button" class="mi-btn metric-pill metric-consensus" data-more-info="${u(a.entity_zambretti)}"><span aria-hidden="true">\u2696\uFE0F</span><span>${u(t.consensus||"Consensus")}: ${u(m)}</span></button>`)}let f=this._readNum(a.entity_snow);if(f!=null&&f>0){let m=a.entity_snow||a.entity_zambretti;o.push(`<button type="button" class="mi-btn metric-pill metric-snow" data-more-info="${u(m)}"><span aria-hidden="true">\u2744\uFE0F</span><span>${u(t.snow||"Snow")} ${Math.round(f)}%</span></button>`)}let b=this._readNum(a.entity_fog);if(b!=null&&b>=25){let m=a.entity_fog||a.entity_zambretti;o.push(`<button type="button" class="mi-btn metric-pill metric-fog" data-more-info="${u(m)}"><span aria-hidden="true">\u{1F32B}\uFE0F</span><span>${u(t.fog||"Fog")} ${Math.round(b)}%</span></button>`)}let y=this._readNum(a.entity_zambretti,"dew_point");return y!=null&&o.push(`<button type="button" class="mi-btn metric-pill metric-dew" data-more-info="${u(a.entity_zambretti)}"><span aria-hidden="true">\u{1F321}\uFE0F</span><span>${u(t.dewPoint||"Dew point")} ${y.toFixed(1)}\xB0C</span></button>`),o.join("")}_buildLedgerHtml(e){let t=this._config;if(t.show_ledger===!1)return"";let n=[],r=this._readNum(t.entity_accuracy);r!=null&&n.push(`<button type="button" class="mi-btn ledger-pill ledger-acc" data-more-info="${u(t.entity_accuracy)}"><span aria-hidden="true">\u{1F3AF}</span><span>${u(e.accuracy24h||"24h accuracy")}: <b>${Math.round(r)}%</b></span></button>`);let a=t.entity_last_hit?this._state(t.entity_last_hit):null;if(a==="hit"||a==="miss"){let g=a==="hit"?e.hit||"Hit":e.miss||"Miss",f=a==="hit"?"\u2713":"\u2715";n.push(`<button type="button" class="mi-btn ledger-pill ledger-hit-${a}" data-more-info="${u(t.entity_last_hit)}"><span aria-hidden="true">${f}</span><span>${u(g)}</span></button>`)}let o=this._readNum(t.entity_damping),i=this._readNum(t.entity_damping,"calibration_samples")??this._readNum(t.entity_accuracy,"calibration_samples");return o!=null&&i!=null&&i>0&&n.push(`<button type="button" class="mi-btn ledger-pill ledger-alpha" data-more-info="${u(t.entity_damping)}"><span aria-hidden="true">\u2699</span><span>\u03B1=${o.toFixed(2)}</span></button>`),n.join("")}_patchExtras(e,t,n,r){let a=this.shadowRoot;if(!a)return;let o=a.querySelector(".confidence-slot");o&&(o.innerHTML=this._buildConfidenceHtml(t,r));let i=this._buildAlertsHtml(t),g=a.querySelector(".alerts-slot");g&&(g.innerHTML=i,g.style.display=i?"":"none");let f=this._buildMetricsHtml(e,t,n,r),b=a.querySelector(".metrics-slot");b&&(b.innerHTML=f,b.style.display=f?"":"none");let y=this._buildLedgerHtml(t),m=a.querySelector(".ledger-slot");m&&(m.innerHTML=y,m.style.display=y?"":"none")}_computeThemeBg(e,t){let n=this._config;if(t&&!n.custom_bg)return"radial-gradient(circle at 50% 25%, #2d1f14 0%, #19110a 55%, #0d0805 100%)";let r=n.auto_theme!==!1,a=r?Ae(e).bg:n.custom_bg||ze.bg;return r?Te(a,n.theme_alpha):a}_render(){if(!this._hass)return;let e=this._config,t=this._labels(),n=this._extras(),r=!!e.compact,a=e.card_style==="vintage",o=e.card_style==="tile",i=this._state(e.entity_zambretti),g=this._isUnavailable(i),f=this._state(e.entity_sager),b=this._state(e.entity_6h),y=this._state(e.entity_12h),m=this._state(e.entity_24h),w=this._readPrecipPct(),S=w!=null?`${w}%`:"\u2014",k=this._attr(e.entity_zambretti,"is_night",!1),z=me(i,k),L=k&&(i==="settled_fine"||i==="fine_weather")?"night_clear":X[i]||"partlycloudy",H=e.show_wind!==!1,C=e.entity_wind_speed||e.entity_zambretti,h="";if(H){let x=e.entity_wind_speed?this._state(e.entity_wind_speed):g?null:this._attr(e.entity_zambretti,"wind_speed",null),P=this._attr(C,"unit_of_measurement","m/s"),R=g?null:this._attr(e.entity_zambretti,"wind_degrees",null),I=(g?null:this._attr(e.entity_zambretti,"wind_direction",null))||fe(R),B=be(x,e.wind_unit||"m/s",P,n),W=ye(I,n);h=B?W?`${W} ${B}`:B:W||""}let V={bg:this._computeThemeBg(L,a)},Z=this._localizeState(i,t,!0),D=this._localizeState(f,t,!1),N=re(z,Z),O=this._precipLabel(),K=e.show_precip!==!1,G=e.show_forecasts!==!1,_=e.show_sager!==!1,T=e.show_metrics!==!1,A=!!e.show_history,E=!!e.show_trend,F=this._buildAlertsHtml(n),$=this._buildConfidenceHtml(n,g),s=this._buildMetricsHtml(t,n,i,g),p=this._buildLedgerHtml(n),l=[{label:"6h",key:b,entityId:e.entity_6h},{label:"12h",key:y,entityId:e.entity_12h},{label:"24h",key:m,entityId:e.entity_24h}].map(x=>{let P=this._localizeState(x.key,t,!1),R=re(X[x.key]||"partlycloudy",`${x.label}: ${P}`),I=T&&!g?this._readNum(x.entityId,"predicted_pressure_hpa"):null,B=I!=null?`${I.toFixed(0)} hPa`:"";return`
      <div class="fc" ${this._moreInfoAttrs(x.entityId)}>
        <span class="fc-time">${u(x.label)}</span>
        <span class="fc-icon">${R}</span>
        <span class="fc-lbl">${u(P)}</span>
        ${T?`<span class="fc-press">${u(B)}</span>`:""}
      </div>`}).join(""),d=this._moreInfoAttrs(e.entity_pressure||e.entity_zambretti),v="";if(o){let x=this._readPressureHpa(),P=g?null:this._attr(e.entity_zambretti,"pressure_delta_3h",null),R=P!=null&&!Number.isNaN(parseFloat(P))?parseFloat(P):null,I=g?"\u2014":ee(this._attr(e.entity_zambretti,"trend","\u2192 Steady"),n),B=R==null?"#94a3b8":R>=1.4?"#4ade80":R<=-1.4?"#f87171":"#facc15",W=R==null?"#cbd5e1":R>=1.4?"#86efac":R<=-1.4?"#fca5a5":"#fef08a";v=`
        <div class="tile-container">
          <div class="tile-header-wrap">
            <div class="tile-icon-box" ${this._moreInfoAttrs(e.entity_zambretti)}>${N}</div>
            <div class="tile-text-group">
              <div class="tile-title-row">
                <div class="tile-title" ${this._moreInfoAttrs(e.entity_zambretti)}>${u(Z)}</div>
                <span class="confidence-slot">${$}</span>
              </div>
              ${_?`<div class="tile-subtitle" ${this._moreInfoAttrs(e.entity_sager)}>${u(D)}</div>`:""}
            </div>
            <div class="tile-trend-pill">
              <span class="tile-trend-dot" style="background:${B}"></span>
              <span class="tile-trend-text" style="color:${W}">${u(I)}</span>
            </div>
          </div>
          <div class="alerts-slot" style="${F?"":"display:none"}">${F}</div>
          <div class="metrics-slot" style="${s?"":"display:none"}">${s}</div>
          <div class="tile-bottom-chips">
            <div class="tile-chips-left">
              ${K?`<span class="tile-chip tile-chip-precip" ${this._moreInfoAttrs(e.entity_precip)}>\u{1F4A7} ${u(S)}</span>`:""}
              ${H&&h?`<span class="tile-chip tile-chip-wind" ${this._moreInfoAttrs(C)}>\u{1F4A8} ${u(h)}</span>`:""}
            </div>
            <span class="tile-chip tile-chip-pressure" ${d}>\u23F1 ${x!=null?`${x.toFixed(1)} ${u(n.unitHpa||"hPa")}`:"\u2014"}</span>
          </div>
          <div class="ledger-slot" style="${p?"":"display:none"}">${p}</div>
        </div>
      `}else if(a){let x=this._vintageLabels(),P=this._readPressureHpa(),R=g?null:this._attr(e.entity_zambretti,"pressure_3h_ago",null),I=g?null:this._attr(e.entity_zambretti,"pressure_delta_3h",null),B=I!=null&&!Number.isNaN(parseFloat(I))?parseFloat(I):null,W=P??1013.25,U=B??0,q=R!=null&&!Number.isNaN(parseFloat(R))?parseFloat(R):W-U,Q=g?"\u2014":ee(this._attr(e.entity_zambretti,"trend","\u2192 Steady"),n),J=Me(W,q,U,x,{showSubdial:e.show_subdial!==!1,compact:r}),He=B==null?"#cbd5e1":B>=1.4?"#86efac":B<=-1.4?"#fca5a5":"#fef08a";v=`
        <div class="vintage-container">
          <div class="vintage-dial-wrap" ${d}>${J}</div>
          <div class="vintage-readout">
            <div class="vintage-main-bar">
              <div class="vintage-forecast-title" ${this._moreInfoAttrs(e.entity_zambretti)}>${u(Z)}</div>
              ${_?`<div class="vintage-sager-sub" ${this._moreInfoAttrs(e.entity_sager)}><span class="vintage-badge">Sager</span> <span class="v-sager-lbl">${u(D)}</span> <span class="confidence-slot">${$}</span></div>`:`<div class="vintage-sager-sub"><span class="confidence-slot">${$}</span></div>`}
            </div>
            <div class="alerts-slot" style="${F?"":"display:none"}">${F}</div>
            <div class="metrics-slot" style="${s?"":"display:none"}">${s}</div>
            <div class="vintage-metrics-grid">
              <div class="vintage-metric-box" ${d}>
                <div class="vintage-metric-lbl">${u(x.current||"Current")}</div>
                <div class="vintage-metric-val v-p-hpa">${P!=null?`${P.toFixed(1)} <span style="font-size:0.75em;font-weight:400;color:#d4af37">hPa</span>`:"\u2014"}</div>
                <div class="vintage-metric-sub v-p-mm">${P!=null?(P*.750062).toFixed(1)+" mmHg":""}</div>
              </div>
              <div class="vintage-metric-box">
                <div class="vintage-metric-lbl">${u(x.trend||"Trend")} (3h)</div>
                <div class="vintage-metric-val v-trend-delta" style="color:${He}">${B!=null?(B>=0?"+":"")+B.toFixed(1)+" hPa":"\u2014"}</div>
                <div class="vintage-metric-sub v-trend-lbl">${u(Q)}</div>
              </div>
            </div>
          </div>
        </div>
        ${G?`<div class="cell forecast-row" style="border-top:1px solid rgba(212,175,55,0.20)">${l}</div>`:""}
        <div class="footer" style="border-top:1px solid rgba(212,175,55,0.20)">
          ${h?`<span class="footer-wind" ${this._moreInfoAttrs(C)}>\u{1F4A8} ${u(h)}</span>`:""}
          ${K?`<span class="footer-precip" ${this._moreInfoAttrs(e.entity_precip)}>\u{1F4A7} ${u(O)}: ${u(S)}</span>`:""}
        </div>
        <div class="ledger-slot" style="${p?"":"display:none"}">${p}</div>
      `}else v=`
        <div class="grid" style="grid-template-columns:${K?"1fr 1fr":"1fr"}">
          <div class="cell main-cell" ${this._moreInfoAttrs(e.entity_zambretti)}>
            <div class="main-icon">${N}</div>
            <div class="main-info">
              <div class="main-label">${u(Z)}</div>
              <div class="main-sub"><span>Zambretti</span><span class="confidence-slot">${$}</span></div>
            </div>
          </div>
          ${K?`
          <div class="cell precip-cell" ${this._moreInfoAttrs(e.entity_precip)}>
            <div class="precip-title">${u(O)}</div>
            <div class="precip-widget">${we(w,O)}</div>
          </div>`:""}
          ${G?`
          <div class="cell forecast-row">${l}</div>`:""}
        </div>
        <div class="alerts-slot" style="${F?"":"display:none"}">${F}</div>
        <div class="metrics-slot" style="${s?"":"display:none"}">${s}</div>
        <div class="footer">
          ${h?`<span class="footer-wind" ${this._moreInfoAttrs(C)}>\u{1F4A8} ${u(h)}</span>`:""}
          ${_?`
          <span class="footer-badge">Sager</span>
          <span class="footer-text" ${this._moreInfoAttrs(e.entity_sager)}>${u(D)}</span>`:""}
        </div>
        <div class="ledger-slot" style="${p?"":"display:none"}">${p}</div>
      `;this.shadowRoot.innerHTML=`
      <style>${this._css(V,r,K,a,o)}</style>
      <ha-card class="${g?"is-unavailable":""}">
        ${v}
        ${E?`
        <div class="trend-section">
          <div class="trend-title"><svg aria-hidden="true" viewBox="0 0 16 16" width="12" height="12" style="vertical-align:-1px;margin-right:4px;opacity:0.7"><circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="8" y1="4" x2="8" y2="8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="8" y1="8.5" x2="11" y2="10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>${u(this._vintageLabels().trend||"Trend")}</div>
          <div class="trend-timeline-wrap">${ve(this._timelineSteps,t,r)}</div>
        </div>`:""}
        ${A?`
        <div class="history-section">
          <div class="history-title"><svg aria-hidden="true" viewBox="0 0 16 16" width="12" height="12" style="vertical-align:-1px;margin-right:4px;opacity:0.7"><polyline points="1,12 5,6 8,9 11,4 15,7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>${u(n.h24Label||"24h")}</div>
          <div class="history-chart-wrap" style="height:${r?150:200}px">${ke(this._historyPoints,t,r,n.unitHpa||"hPa",`${this._precipLabel()} %`)}</div>
        </div>`:""}
      </ha-card>`;let M=this.shadowRoot.querySelector("ha-card");M&&(M.style.background=V.bg),A&&this._setupHistoryScrubbing(),this._lastIconKey=z,this._lastThemeBg=V.bg,this._lastPrecip=w,this._lastStyle=e.card_style,this._lastUnavail=g,this._rendered=!0}_patch(){if(!this._hass||!this._rendered)return;let e=this._config,t=this._labels(),n=this._extras(),r=this.shadowRoot,a=e.card_style==="vintage",o=e.card_style==="tile",i=this._state(e.entity_zambretti),g=this._isUnavailable(i),f=this._state(e.entity_sager),b=this._state(e.entity_6h),y=this._state(e.entity_12h),m=this._state(e.entity_24h),w=this._readPrecipPct(),S=w!=null?`${w}%`:"\u2014",k=this._attr(e.entity_zambretti,"is_night",!1),z=me(i,k),L=k&&(i==="settled_fine"||i==="fine_weather")?"night_clear":X[i]||"partlycloudy",H=this._computeThemeBg(L,a);if(z!==this._lastIconKey||H!==this._lastThemeBg||e.card_style!==this._lastStyle||g!==this._lastUnavail){this._rendered=!1,this._render();return}let C=this._localizeState(i,t,!0),h=this._localizeState(f,t,!1),j=r.querySelector(".main-label");j&&j.textContent!==C&&(j.textContent=C);let V=r.querySelector(".main-icon svg, .tile-icon-box svg");V&&V.getAttribute("aria-label")!==C&&V.setAttribute("aria-label",C);let Z=r.querySelector(".footer-text");Z&&Z.textContent!==h&&(Z.textContent=h);let D=e.show_wind!==!1,N="";if(D){let _=e.entity_wind_speed||e.entity_zambretti,T=e.entity_wind_speed?this._state(e.entity_wind_speed):g?null:this._attr(e.entity_zambretti,"wind_speed",null),A=this._attr(_,"unit_of_measurement","m/s"),E=g?null:this._attr(e.entity_zambretti,"wind_degrees",null),F=(g?null:this._attr(e.entity_zambretti,"wind_direction",null))||fe(E),$=be(T,e.wind_unit||"m/s",A,n),s=ye(F,n);N=$?s?`${s} ${$}`:$:s||""}let O=r.querySelector(".footer-wind");if(O){let _=N?`\u{1F4A8} ${N}`:"";O.textContent!==_&&(O.textContent=_),O.style.display=D&&N?"":"none"}if(o){let _=this._readPressureHpa(),T=g?null:this._attr(e.entity_zambretti,"pressure_delta_3h",null),A=T!=null&&!Number.isNaN(parseFloat(T))?parseFloat(T):null,E=g?"\u2014":ee(this._attr(e.entity_zambretti,"trend","\u2192 Steady"),n),F=A==null?"#94a3b8":A>=1.4?"#4ade80":A<=-1.4?"#f87171":"#facc15",$=A==null?"#cbd5e1":A>=1.4?"#86efac":A<=-1.4?"#fca5a5":"#fef08a",s=r.querySelector(".tile-title");s&&s.textContent!==C&&(s.textContent=C);let p=r.querySelector(".tile-subtitle");p&&p.textContent!==h&&(p.textContent=h);let l=r.querySelector(".tile-trend-dot");l&&(l.style.background=F);let d=r.querySelector(".tile-trend-text");d&&(d.textContent!==E&&(d.textContent=E),d.style.color=$);let v=r.querySelector(".tile-chip-precip");v&&(v.textContent=`\u{1F4A7} ${S}`);let M=r.querySelector(".tile-chip-wind");M&&(M.textContent=N?`\u{1F4A8} ${N}`:"",M.style.display=D&&N?"":"none");let x=r.querySelector(".tile-chip-pressure");x&&(x.textContent=`\u23F1 ${_!=null?`${_.toFixed(1)} ${n.unitHpa||"hPa"}`:"\u2014"}`)}if(a){let _=this._readPressureHpa(),T=g?null:this._attr(e.entity_zambretti,"pressure_3h_ago",null),A=g?null:this._attr(e.entity_zambretti,"pressure_delta_3h",null),E=A!=null&&!Number.isNaN(parseFloat(A))?parseFloat(A):null,F=_??1013.25,$=E??0,s=T!=null&&!Number.isNaN(parseFloat(T))?parseFloat(T):F-$,p=g?"\u2014":ee(this._attr(e.entity_zambretti,"trend","\u2192 Steady"),n),l=-120+(Math.max(960,Math.min(1060,F))-960)/100*240,d=-120+(Math.max(960,Math.min(1060,s))-960)/100*240,v=Math.max(-4,Math.min(4,$))/4*45,M=r.querySelector(".v-needle-main");M&&(M.style.transform=`rotate(${l.toFixed(1)}deg)`);let x=r.querySelector(".v-needle-ref");x&&(x.style.transform=`rotate(${d.toFixed(1)}deg)`);let P=r.querySelector(".v-needle-trend");P&&(P.style.transform=`rotate(${v.toFixed(1)}deg)`);let R=r.querySelector(".vintage-forecast-title");R&&R.textContent!==C&&(R.textContent=C);let I=r.querySelector(".v-sager-lbl");I&&I.textContent!==h&&(I.textContent=h);let B=r.querySelector(".v-p-hpa");B&&(B.innerHTML=_!=null?`${_.toFixed(1)} <span style="font-size:0.75em;font-weight:400;color:#d4af37">hPa</span>`:"\u2014");let W=r.querySelector(".v-p-mm");W&&(W.textContent=_!=null?`${(_*.750062).toFixed(1)} mmHg`:"");let U=r.querySelector(".v-trend-delta");U&&(U.textContent=E!=null?`${E>=0?"+":""}${E.toFixed(1)} hPa`:"\u2014",U.style.color=E==null?"#cbd5e1":E>=1.4?"#86efac":E<=-1.4?"#fca5a5":"#fef08a");let q=r.querySelector(".v-trend-lbl");q&&(q.textContent=p);let Q=this._precipLabel(),J=r.querySelector(".footer-precip");J&&(J.textContent=`\u{1F4A7} ${Q}: ${S}`)}let K=r.querySelectorAll(".fc-lbl"),G=[b,y,m];if(K.forEach((_,T)=>{let A=this._localizeState(G[T],t,!1);_.textContent!==A&&(_.textContent=A)}),e.show_metrics!==!1){let _=r.querySelectorAll(".fc-press"),T=[e.entity_6h,e.entity_12h,e.entity_24h];_.forEach((A,E)=>{let F=g?null:this._readNum(T[E],"predicted_pressure_hpa"),$=F!=null?`${F.toFixed(0)} hPa`:"";A.textContent!==$&&(A.textContent=$)})}if(this._patchExtras(t,n,i,g),w!==this._lastPrecip){let _=r.querySelector(".precip-widget");_&&(_.innerHTML=we(w,this._precipLabel())),this._lastPrecip=w}if(e.show_trend&&this._timelineSteps){let _=this._timelineSteps[this._timelineSteps.length-1];!g&&_&&_.state!==i&&(this._timelineSteps.forEach(T=>{T.isCurrent=!1}),this._timelineSteps.push({t:new Date,state:i,isCurrent:!0}),this._timelineSteps.length>8&&this._timelineSteps.shift(),this._patchTimeline())}e.show_history&&this._historyPoints&&this._historyPoints.length>=2&&r.querySelector(".hchart-empty")&&this._patchChart(),e.show_trend&&this._timelineSteps&&this._timelineSteps.length>0&&r.querySelector(".tl-empty")&&this._patchTimeline()}_css(e,t,n=!0,r=!1,a=!1){let o=t?.9:1,i=Math.round(72*o),g=(1.28*o).toFixed(2),f=(.86*o).toFixed(2),b=Math.round(44*o),y=(.9*o).toFixed(2),m=Math.round(118*o),w=(.86*o).toFixed(2);return`
      :host { display:block; container-type:inline-size; }
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
      .cell { padding:${t?"12px 10px":"16px 14px"}; }

      .main-cell {
        grid-column:1; grid-row:1;
        display:flex; align-items:center;
        gap:${t?10:13}px;
        border-right:1px solid rgba(255,255,255,0.12);
        border-bottom:1px solid rgba(255,255,255,0.12);
      }
      .main-icon {
        flex:0 0 ${i}px; width:${i}px; height:${i}px;
        filter:drop-shadow(0 2px 8px rgba(0,0,0,0.35));
      }
      .main-icon svg { width:100%; height:100%; }
      .main-info { flex:1; min-width:0; }
      .main-label {
        font-size:${g}rem; font-weight:700; line-height:1.25;
        letter-spacing:-0.01em; text-shadow:0 1px 6px rgba(0,0,0,0.35);
      }
      .main-sub {
        display:flex; align-items:center; gap:8px; flex-wrap:wrap;
        font-size:${f}rem; font-weight:600;
        letter-spacing:0.08em; text-transform:uppercase;
        opacity:0.78; margin-top:4px;
      }
      .tile-title-row {
        display:flex; align-items:center; flex-wrap:wrap; gap:6px; min-width:0;
      }
      .confidence-badge {
        display:inline-flex; align-items:center; gap:3px;
        font-size:${(.78*o).toFixed(2)}rem; font-weight:700;
        letter-spacing:0.02em; text-transform:none;
        padding:2px 8px; border-radius:999px;
        border:1px solid rgba(255,255,255,0.24);
        background:rgba(0,0,0,0.26); color:#f8fafc;
        white-space:nowrap; flex-shrink:0;
      }
      .confidence-badge.conf-high { border-color:rgba(134,239,172,0.5); color:#bbf7d0; }
      .confidence-badge.conf-mid  { border-color:rgba(253,224,71,0.5); color:#fef08a; }
      .confidence-badge.conf-low  { border-color:rgba(252,165,165,0.5); color:#fecaca; }

      .mi-btn {
        appearance:none; -webkit-appearance:none;
        font:inherit; color:inherit; background:transparent;
        border:none; margin:0; padding:0;
        cursor:pointer; min-block-size:24px;
      }
      .alerts-slot, .metrics-slot, .ledger-slot {
        display:flex; align-items:center; flex-wrap:wrap; gap:6px;
      }
      .alerts-slot {
        padding:${t?"6px 10px":"8px 14px"};
        background:rgba(127,29,29,0.28);
        border-top:1px solid rgba(248,113,113,0.25);
      }
      .metrics-slot {
        padding:${t?"5px 10px":"7px 14px"};
        background:rgba(0,0,0,0.12);
        border-top:1px solid rgba(255,255,255,0.08);
      }
      .ledger-slot {
        padding:${t?"5px 12px 7px":"7px 16px 9px"};
        background:rgba(0,0,0,0.26);
        border-top:1px solid rgba(255,255,255,0.08);
      }
      .tile-container .alerts-slot,
      .tile-container .metrics-slot,
      .tile-container .ledger-slot {
        background:transparent; border-top:none; padding:6px 0 0;
      }
      .vintage-readout .alerts-slot,
      .vintage-readout .metrics-slot {
        justify-content:center; border-top:none; background:transparent; padding:0;
      }
      .alert-pill, .metric-pill, .ledger-pill {
        display:inline-flex; align-items:center; gap:5px;
        font-size:${(.82*o).toFixed(2)}rem; font-weight:700; line-height:1.25;
        padding:4px 10px; border-radius:999px;
        border:1px solid rgba(255,255,255,0.22);
        background:rgba(0,0,0,0.34); color:#ffffff;
        white-space:nowrap;
      }
      .alert-pill.alert-storm,
      .alert-pill.alert-pressure {
        background:rgba(220,38,38,0.36); border-color:rgba(248,113,113,0.60); color:#fee2e2;
      }
      .alert-pill.alert-frost {
        background:rgba(14,165,233,0.32); border-color:rgba(125,211,252,0.55); color:#e0f2fe;
      }
      .alert-pill.alert-fog {
        background:rgba(100,116,139,0.42); border-color:rgba(203,213,225,0.50); color:#f1f5f9;
      }
      .metric-pill.metric-snow {
        background:rgba(56,189,248,0.20); border-color:rgba(125,211,252,0.38); color:#e0f2fe;
      }
      .metric-pill.metric-fog {
        background:rgba(148,163,184,0.22); border-color:rgba(203,213,225,0.38); color:#f1f5f9;
      }
      .metric-pill.metric-consensus {
        background:rgba(245,158,11,0.24); border-color:rgba(252,211,77,0.45); color:#fef3c7;
      }
      .ledger-pill {
        font-size:${(.8*o).toFixed(2)}rem; font-weight:600;
        background:rgba(255,255,255,0.08); border-color:rgba(255,255,255,0.16);
      }
      .ledger-pill.ledger-hit-hit {
        background:rgba(22,163,74,0.28); border-color:rgba(134,239,172,0.45); color:#dcfce7;
      }
      .ledger-pill.ledger-hit-miss {
        background:rgba(220,38,38,0.26); border-color:rgba(252,165,165,0.45); color:#fee2e2;
      }
      .fc-press {
        font-size:${(.8*o).toFixed(2)}rem; font-weight:600; font-family:monospace;
        color:rgba(255,255,255,0.68); margin-top:1px;
      }

      .precip-cell {
        grid-column:2; grid-row:1;
        display:flex; flex-direction:column;
        align-items:center; justify-content:center; gap:2px;
        border-bottom:1px solid rgba(255,255,255,0.12);
        padding:${t?"10px 6px":"12px 8px"};
      }
      .precip-title {
        font-size:${w}rem; font-weight:800;
        letter-spacing:0.12em; text-transform:uppercase;
        text-shadow:0 1px 4px rgba(0,0,0,0.35);
      }
      .precip-widget { width:${m}px; height:${m}px; }

      /* \u2500\u2500 Tile / Mushroom View Mode \u2500\u2500 */
      .tile-container {
        display:flex; flex-direction:column; justify-content:space-between;
        padding:${t?"14px 16px":"18px 20px"};
        box-sizing:border-box;
        background:transparent;
        border:none;
        border-radius:0;
        box-shadow:none;
        min-height:${t?"104px":"124px"};
      }
      .tile-header-wrap {
        display:flex; align-items:flex-start; justify-content:space-between;
        flex-wrap:wrap;
        gap:${t?"8px 10px":"10px 14px"};
      }
      .tile-icon-box {
        width:${t?"48px":"56px"}; height:${t?"48px":"56px"};
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
        flex:1 1 180px; min-width:0;
      }
      .tile-title {
        font-size:${(1.24*o).toFixed(2)}rem; font-weight:700;
        line-height:1.25; letter-spacing:-0.015em;
        color:#ffffff;
        text-shadow:0 1px 4px rgba(0,0,0,0.45);
        white-space:normal; overflow-wrap:break-word;
      }
      .tile-subtitle {
        font-size:${(.92*o).toFixed(2)}rem; font-weight:500;
        color:rgba(255,255,255,0.85); margin-top:3px;
        line-height:1.3;
        white-space:normal; overflow-wrap:break-word;
        text-shadow:0 1px 3px rgba(0,0,0,0.35);
      }
      .tile-trend-pill {
        font-size:${(.86*o).toFixed(2)}rem; font-weight:700;
        letter-spacing:0.02em; border-radius:20px;
        padding:5px 12px; border:1px solid rgba(255,255,255,0.20);
        background:rgba(0, 0, 0, 0.42);
        white-space:nowrap; flex-shrink:0;
        display:inline-flex; align-items:center; gap:6px;
        box-shadow:0 2px 6px rgba(0,0,0,0.20);
      }
      .tile-trend-dot {
        width:8px; height:8px; border-radius:50%; flex-shrink:0;
      }
      .tile-bottom-chips {
        display:flex; align-items:center; justify-content:space-between;
        margin-top:${t?10:14}px; padding-top:${t?8:10}px;
        border-top:1px solid rgba(255,255,255,0.12);
        gap:8px; flex-wrap:wrap;
      }
      .tile-chips-left {
        display:flex; align-items:center; gap:8px; flex-wrap:wrap;
      }
      .tile-chip {
        font-size:${(.88*o).toFixed(2)}rem; font-weight:700;
        padding:4px 11px; border-radius:12px;
        display:inline-flex; align-items:center; gap:5px;
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
      @container (max-width: 360px) {
        .tile-container {
          padding:12px 14px;
        }
        .tile-header-wrap {
          flex-wrap:wrap;
          gap:8px 10px;
        }
        .tile-text-group {
          flex:1 1 130px;
        }
        .tile-title,
        .tile-subtitle {
          white-space:normal;
          overflow:visible;
          text-overflow:clip;
        }
        .tile-chip {
          font-size:${(.82*o).toFixed(2)}rem;
          padding:3px 9px;
        }
      }

      /* \u2500\u2500 Vintage Barometer Mode \u2500\u2500 */
      .vintage-container {
        display:flex; flex-direction:column; align-items:center;
        padding:${t?"12px 10px 8px":"16px 14px 10px"};
        box-sizing:border-box;
      }
      .vintage-dial-wrap {
        position:relative;
        width:100%; max-width:${t?"280px":"330px"};
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
        width:100%; margin-top:${t?"10px":"14px"};
        display:flex; flex-direction:column; gap:10px;
      }
      .vintage-main-bar {
        background:linear-gradient(180deg, rgba(42, 30, 15, 0.90) 0%, rgba(20, 14, 7, 0.98) 100%);
        border:1px solid rgba(212, 175, 55, 0.40);
        border-radius:14px;
        padding:${t?"8px 10px":"10px 14px"};
        text-align:center;
        box-shadow:inset 0 1px 1px rgba(255, 235, 170, 0.25), 0 4px 16px rgba(0, 0, 0, 0.50);
      }
      .vintage-forecast-title {
        font-family:'Cinzel', Georgia, serif;
        font-size:${(1.26*o).toFixed(2)}rem; font-weight:800;
        color:#ffd966; letter-spacing:0.025em;
        text-shadow:0 2px 6px rgba(0,0,0,0.85), 0 0 12px rgba(255,217,102,0.25);
      }
      .vintage-sager-sub {
        font-size:${(.88*o).toFixed(2)}rem; font-weight:500;
        color:rgba(254, 243, 199, 0.85);
        margin-top:4px;
        display:flex; align-items:center; justify-content:center; gap:6px;
      }
      .vintage-badge {
        font-size:0.74rem; font-weight:800; letter-spacing:0.10em;
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
        font-size:${(.78*o).toFixed(2)}rem; font-weight:700;
        letter-spacing:0.10em; text-transform:uppercase;
        color:#d4af37; opacity:0.90;
      }
      .vintage-metric-val {
        font-size:${(1.14*o).toFixed(2)}rem; font-weight:800;
        color:#ffffff; margin-top:2px; font-family:monospace;
        text-shadow:0 1px 4px rgba(0,0,0,0.6);
      }
      .vintage-metric-sub {
        font-size:${(.84*o).toFixed(2)}rem; font-weight:600;
        color:rgba(254, 243, 199, 0.75); margin-top:2px;
      }

      .forecast-row {
        grid-column:1/-1; grid-row:2;
        display:grid; grid-template-columns:1fr 1fr 1fr; padding:0;
      }
      .fc {
        display:flex; flex-direction:column; align-items:center;
        padding:${t?"8px 4px 10px":"10px 6px 14px"};
        border-right:1px solid rgba(255,255,255,0.09); gap:3px;
      }
      .fc:last-child { border-right:none; }
      .fc-time {
        font-size:${(.9*o).toFixed(2)}rem; font-weight:800;
        letter-spacing:0.06em; text-transform:uppercase;
        color:rgba(255,255,255,0.95);
        background:rgba(255,255,255,0.15); border-radius:5px; padding:1px 7px;
      }
      .fc-icon {
        width:${b}px; height:${b}px;
        display:flex; align-items:center; justify-content:center; opacity:0.90;
      }
      .fc-icon svg { width:100%; height:100%; }
      .fc-lbl {
        font-size:${(1.06*o).toFixed(2)}rem; font-weight:700;
        text-align:center; line-height:1.25; color:#fff;
        text-shadow:0 1px 3px rgba(0,0,0,0.3);
      }

      .footer {
        display:flex; align-items:center; gap:10px; flex-wrap:wrap;
        padding:${t?"6px 12px 8px":"8px 16px 10px"};
        background:rgba(0,0,0,0.20);
        border-top:1px solid rgba(255,255,255,0.09);
      }
      .footer-wind {
        font-size:${(.84*o).toFixed(2)}rem; font-weight:600;
        opacity:0.90; letter-spacing:0.04em; white-space:nowrap;
      }
      .footer-badge {
        font-size:0.74rem; font-weight:700; letter-spacing:0.10em;
        text-transform:uppercase; background:rgba(255,255,255,0.16);
        border:1px solid rgba(255,255,255,0.28); border-radius:5px;
        padding:2px 8px; white-space:nowrap; flex-shrink:0;
      }
      .footer-text {
        font-size:${y}rem; font-weight:500; opacity:0.80; line-height:1.3;
      }

      /* \u2500\u2500 Trend timeline section \u2500\u2500 */
      .trend-section {
        padding:${t?"8px 10px 10px":"10px 14px 12px"};
        border-top:1px solid rgba(255,255,255,0.09);
        background:rgba(0,0,0,0.12);
      }
      .trend-title {
        font-size:${(.8*o).toFixed(2)}rem; font-weight:700;
        letter-spacing:0.10em; text-transform:uppercase;
        color:rgba(255,255,255,0.55); margin-bottom:${t?5:7}px;
      }
      .trend-timeline-wrap { width:100%; overflow-x:auto; }
      .tl-inner {
        display:flex; align-items:center; gap:0;
        min-width:max-content; padding-bottom:2px;
      }
      .tl-step {
        display:flex; flex-direction:column; align-items:center;
        gap:3px; padding:${t?"4px 7px":"5px 9px"};
        border-radius:10px;
        background:rgba(255,255,255,0.06);
        border:1px solid rgba(255,255,255,0.08);
        transition:background 0.3s;
        min-width:${t?64:74}px;
      }
      .tl-step.tl-current {
        background:rgba(255,255,255,0.20);
        border-color:rgba(255,255,255,0.35);
        box-shadow:0 0 10px rgba(255,255,255,0.12);
      }
      .tl-icon { flex-shrink:0; }
      .tl-icon svg { width:100%; height:100%; display:block; }
      .tl-lbl {
        font-size:${(.78*o).toFixed(2)}rem; font-weight:600;
        color:rgba(255,255,255,0.90); text-align:center;
        line-height:1.18; max-width:${t?78:90}px;
        white-space:normal; overflow-wrap:break-word;
        display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical;
        overflow:hidden;
      }
      .tl-current .tl-lbl { color:#fff; font-weight:700; }
      .tl-time {
        font-size:${(.72*o).toFixed(2)}rem; font-weight:500;
        color:rgba(255,255,255,0.50); letter-spacing:0.03em;
      }
      .tl-current .tl-time { color:rgba(255,255,255,0.80); }
      .tl-arrow {
        font-size:${t?"1.1rem":"1.3rem"}; color:rgba(255,255,255,0.30);
        padding:0 ${t?3:4}px; flex-shrink:0; user-select:none;
        align-self:center; margin-bottom:14px;
      }
      .tl-empty {
        font-size:0.75rem; color:rgba(255,255,255,0.35);
        font-style:italic; padding:8px 0;
      }

      /* \u2500\u2500 History chart section \u2500\u2500 */
      .history-section {
        padding:${t?"8px 0 0":"10px 0 0"};
        border-top:1px solid rgba(255,255,255,0.09);
        background:rgba(0,0,0,0.15);
        overflow:visible;
      }
      .history-title {
        font-size:${(.8*o).toFixed(2)}rem; font-weight:700;
        letter-spacing:0.10em; text-transform:uppercase;
        color:rgba(255,255,255,0.55);
        margin-bottom:${t?2:4}px;
        padding:0 ${t?"10px":"14px"};
      }
      .history-chart-wrap {
        width:100%;
        /* height is set inline per render to allow live updates */
      }
      .hchart-empty {
        display:flex; align-items:center; justify-content:center;
        height:${t?100:130}px;
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
    `}getCardSize(){let t=this._config?.card_style==="tile"?2:3;return this._config?.show_trend&&(t+=1),this._config?.show_history&&(t+=2),t}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}};customElements.get("zambretti-weather-card")||customElements.define("zambretti-weather-card",ne);window.customCards=window.customCards||[];window.customCards.some(c=>c.type==="zambretti-weather-card")||window.customCards.push({type:"zambretti-weather-card",name:"Zambretti & Sager Weather Card",description:"Weather forecasts (Modern iOS, Vintage Barometer, Compact Tile)",preview:!0,documentationURL:"https://github.com/meksspirt/zambretti_sager"});
