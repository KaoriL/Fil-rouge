const TITRES_IMAGES = [
    "Arkezone-01-Le dôme.jpg",
    "Astérix-03-Astérix et les Goths.jpg",
    "Astérix-06-Astérix et Cléopatre.jpg",
    "Astérix-08-Astérix chez les Bretons.jpg",
    "Astérix-12-Astérix aux jeux olympiques.jpg",
    "Astérix-15-La zizanie.jpg",
    "Astérix-21-Le cadeau de César.jpg",
    "Astérix-23-Obélix et compagnie.jpg",
    "Astérix-24-Astérix chez les belges.jpg",
    "Astérix-31-Astérix et Latraviata.jpg",
    "Astérix-33-Le ciel lui tombe sur la tête.jpg",
    "Astérix-35-Astérix chez les Pictes.jpg",
    "Astérix-36-Astérix, le papyrus de César.jpg",
    "Blacksad-01-Quelque part entre les ombres.jpg",
    "Blacksad-02-Arctic-Nation.jpg",
    "Blacksad-03-Ame rouge.jpg",
    "Blake et Mortimer-01-Le secret de lespadon Tome 1.jpg",
    "Blake et Mortimer-02-Le secret de lespadon Tome 2.jpg",
    "Blake et Mortimer-03-Le secret de lespadon Tome 3.jpg",
    "Blake et Mortimer-06-La marque jaune.jpg",
    "Blake et Mortimer-22-londe septimus.jpg",
    "Blueberry-01-Fort Navajo.jpg",
    "Blueberry-02-Lhomme à létoile dargent.jpg",
    "Blueberry-03-Le cheval de fer.jpg",
    "Blueberry-04-La mine de lallemand perdu.jpg",
    "Blueberry-05-Le spectre aux balles dor.jpg",
    "Boule et bill-07-Album 07.jpg",
    "Boule et bill-13-Album 13.jpg",
    "Boule et bill-25-22 vlà.jpg",
    "Boule et bill-26-Faut rigoler .jpg",
    "Boule et bill-27-Bwouf allo bill .jpg",
    "Cristal-01-Venu dailleurs.jpg",
    "Cristal-02-Les tueurs dun autre monde.jpg",
    "Cristal-03-Passeport pour langoisse.jpg",
    "Cristal-04-Sortilèges à Bahia.jpg",
    "Cristal-05-Le cobaye.jpg",
    "CRS = Détresse-02-3615 code bavure.jpg",
    "Cédric-11-Cygne détang.jpg",
    "Cédric-12-Terrain minets.jpg",
    "Cédric-13-Papa, je veux un cheval.jpg",
    "Cédric-14-Au pied, jai dit .jpg",
    "Cédric-15-Avis de tempête.jpg",
    "Cédric-16-Où sont les freins .jpg",
    "Cédric-17-Qui a éteint la lumière.jpg",
    "Cédric-18-Enfin seuls .jpg",
    "Cédric-19-On se calme .jpg",
    "Cédric-20-Jai fini .jpg",
    "Cédric-21-On rêvasse .jpg",
    "Cédric-22-Elle est moche .jpg",
    "Cédric-23-Je veux lépouser .jpg",
    "Cédric-24-Jai gagné .jpg",
    "Cédric-25-Quest-ce quil a .jpg",
    "Cédric-26-Graine de star.jpg",
    "Dad-01-Filles à papa.jpg",
    "Divers-00a-Le guide du jeune père.jpg",
    "Divers-00b-Bilbo le Hobbit.jpg",
    "Divers-00c-Le guide du jeune couple.jpg",
    "Divers-01-Catharsis.jpg",
    "Divers-01a-Berets verts - Vietnam Forces spéciales.jpg",
    "Divers-01b-Déesse blanche, déesse noire Tome 1.jpg",
    "Divers-02a-Déesse blanche, déesse noire Tome 2.jpg",
    "Elfes-01-Le crystal des Elfes bleus.jpg",
    "Elle sappelle Taxi-01-Une croisière en enfer.jpg",
    "Elle sappelle Taxi-02-Les dents du requin.jpg",
    "Finn-01-La forêt suspendue.jpg",
    "Game over-08-Cold case affaires glacées.jpg",
    "Garfield-46-Moi, gourmand .jpg",
    "Garfield-53-Chat déchire .jpg",
    "Gaston-01-Les archives de la gaffe (vOnd).jpg",
    "Gaston-02-Gaffes à gogo.jpg",
    "Gaston-03es-Edition spéciale 40e anniversaire 03.jpg",
    "Gaston-04es-Edition spéciale 40e anniversaire 04.jpg",
    "Gaston-06-Des gaffes et des dégats.jpg",
    "Gaston-06es-Edition spéciale 40e anniversaire 06.jpg",
    "Gaston-07-Un gaffeur sachant gaffer.jpg",
    "Gaston-08es-Edition spéciale 40e anniversaire 08.jpg",
    "Gaston-10-Le géant de la gaffe.jpg",
    "Gaston-10es-Edition spéciale 40e anniversaire 10.jpg",
    "Gaston-11-Le repos du gaffeur.jpg",
    "Gaston-12-Le gang des gaffeurs.jpg",
    "Gaston-13-Lagaffe mérite des baffes.jpg",
    "Gaston-14-La saga des gaffes.jpg",
    "Gaston-15-Gaffe à Lagaffe.jpg",
    "Gaston-ES01-La galerie des gaffes.jpg",
    "Gaston-R5-Le lourd passé de Lagaffe.jpg",
    "Gnomes de Troy-00-Gnomes de Troy.jpg",
    "Gnomes de Troy-04-Trop meugnon.jpg",
    "Goblins-01-Bêtes et méchants.jpg",
    "Goblins-02-En vert et contre tous.jpg",
    "Goblins-03-Sur la terre comme au ciel.jpg",
    "Goblins-04-La quête de la terre promise.jpg",
    "Goblins-05-La fleur au canon.jpg",
    "Goblins-06-Les imparfaits du passé.jpg",
    "Goblins-07-Mort et vif.jpg",
    "Goblins-08-Cthulhu, ça tangue.jpg",
    "Goblins-HS1-Morceaux choisis .jpg",
    "Harald le viking-00-Lintégrale.jpg",
    "Histoires de Schtroumpfs-15-Létrange réveil du schtroumpf paresseux.jpg",
    "IR-01-La voie fiscale.jpg",
    "IR-02-La stratégie Hagen.jpg",
    "IR-03-Blue ice.jpg",
    "IR-04-Narcocratie.jpg",
    "IR-05-Silicia Inc.jpg",
    "IR-06-Le corrupteur.jpg",
    "Joe bar team-01-Joe bar team Tome 1.jpg",
    "Joe bar team-02-Joe bar team Tome 2.jpg",
    "Joe bar team-03-Joe bar team Tome 3.jpg",
    "Joe bar team-04-Joe bar team Tome 4.jpg",
    "Joe bar team-05-Joe bar team Tome 5.jpg",
    "Joe bar team-06-Joe bar team Tome 6.jpg",
    "Joe bar team-07-Joe bar team Tome 7.jpg",
    "Joe bar team-08-Joe bar Team Tome 8.jpg",
    "Joe bar team-08-Joe bar Team Tome 8b.jpg",
    "Kaamelott-01-Larmée du Nécromant.jpg",
    "Kaamelott-02-Les sièges de transport.jpg",
    "Kaamelott-03-Lénigme du coffre.jpg",
    "Kaamelott-04-Perceval et le dragon dAirain.jpg",
    "Kaamelott-05-Le serpent géant du lac de lombre.jpg",
    "Kaamelott-06-Le duel des mages.jpg",
    "Kaamelott-07-Contre attaque en Carmélie.jpg",
    "Kid Lucky-01-Lapprenti cow-boy.jpg",
    "Kid Lucky-02-Lasso périlleux.jpg",
    "Kidpaddle-01-Jeux de vilains.jpg",
    "Kidpaddle-08-Paddle my name is kid paddle.jpg",
    "Kidpaddle-10-Dark, jadore .jpg",
    "Kidpaddle-12-Panik room.jpg",
    "Koh-Lanta-02-Tropico fun paradise.jpg",
    "Kran-01-Les runes de Gartagueul.jpg",
    "Kran-02-Le Walou Walou ancestral.jpg",
    "Kran-03-Gare aux garous.jpg",
    "Kran-04-Le grand tournoi.jpg",
    "Kran-05-Linvasion des envahisseurs.jpg",
    "Kwaïdan-01-Lesprit du lac.jpg",
    "La légende du changeling-01-Le mal-venu.jpg",
    "La quête de loiseau du temps-01-La conque de Ramor.jpg",
    "La quête de loiseau du temps-02-Le temple de loubli.jpg",
    "La quête de loiseau du temps-03-Le Rige.jpg",
    "La quête de loiseau du temps-04-Loeuf des ténèbres.jpg",
    "La quête de loiseau du temps-A01-(Avant la quête) Lami Javin.jpg",
    "La quête de loiseau du temps-A02-(Avant la quête) Le grimoire des dieux.jpg",
    "La quête de loiseau du temps-A03-(Avant la quête) La voie du Rige.jpg",
    "La quête de loiseau du temps-A04-(Avant la quête) Le chevalier Bragon.jpg",
    "La quête de loiseau du temps-A05-(Avant la quête) Lemprise.jpg",
    "Lanfeust de Troy-01-Livoire du Magohamoth.jpg",
    "Lanfeust de Troy-02-Thanos lincongru.jpg",
    "Lanfeust de Troy-03-Castel or-azur.jpg",
    "Lanfeust de Troy-04-Le paladin dEckmül.jpg",
    "Lanfeust de Troy-05-Le frisson de lharuspice.jpg",
    "Lanfeust de Troy-06-Cixi Impératrice.jpg",
    "Lanfeust de Troy-07-Les pétaures se cachent pour mourir.jpg",
    "Lanfeust de Troy-08-La bête fabuleuse.jpg",
    "Lanfeust des étoiles-01-Un, deux Troy.jpg",
    "Lanfeust des étoiles-02-Les tours de Meirrion.jpg",
    "Lanfeust des étoiles-03-Les sables dAbraxar.jpg",
    "Lanfeust des étoiles-04-Les buveurs de mondes.jpg",
    "Lanfeust des étoiles-05-La chevauchée des bactéries.jpg",
    "Lanfeust des étoiles-06-Le râle du flibustier.jpg",
    "Lanfeust des étoiles-07-Le secret des Dolphantes.jpg",
    "Lanfeust des étoiles-08-Le sang des comètes.jpg",
    "Lanfeust odyssey-01-Lénigme or-azur.jpg",
    "Lanfeust odyssey-02-Lénigme Or-Azur Tome 2.jpg",
    "Lanfeust odyssey-03-Le banni dEckmul.jpg",
    "Lanfeust odyssey-04-La grande traque.jpg",
    "Lanfeust odyssey-05-Le piège des sables.jpg",
    "Lanfeust odyssey-06-Le delta bilieux.jpg",
    "Lanfeust odyssey-07-La méphitique armada.jpg",
    "Largo Winch-01-Lhéritier.jpg",
    "Largo Winch-02-Le groupe W.jpg",
    "Largo Winch-03-OPA.jpg",
    "Largo Winch-04-Business blues.jpg",
    "Largo Winch-05-H.jpg",
    "Largo Winch-06-Dutch Connection.jpg",
    "Largo Winch-07-La forteresse de Makiling.jpg",
    "Largo Winch-08-Lheure du tigre.jpg",
    "Largo Winch-09-Voir Venise .jpg",
    "Largo Winch-10- et mourir.jpg",
    "Largo Winch-11-Golden gate.jpg",
    "Largo Winch-12-Shadow.jpg",
    "Largo Winch-13-Le prix de largent.jpg",
    "Largo Winch-14-La loi du dollar.jpg",
    "Largo Winch-15-Les trois yeux des gardiens du Tao.jpg",
    "Largo Winch-16-La voie et la vertu.jpg",
    "Largo Winch-17-Mer noire.jpg",
    "Largo Winch-18-Colère rouge.jpg",
    "Largo Winch-19-Chassé-croisé.jpg",
    "Largo Winch-20-20 secondes.jpg",
    "Largo Winch-21-Létoile du matin.jpg",
    "Le chant des Stryges-01-Ombres.jpg",
    "Le chant des Stryges-02-Pièges.jpg",
    "Le chant des Stryges-03-Saison 1 emprises.jpg",
    "Le chant dexcalibur-01-Le réveil de Merlin.jpg",
    "Le chant dexcalibur-02-Le Sidhe aux mille charmes.jpg",
    "Le chant dexcalibur-03-La griffe de Rome.jpg",
    "Le chant dexcalibur-04-La colère de Merlin.jpg",
    "Le chant dexcalibur-05-Ys la magnifique.jpg",
    "Le chant dexcalibur-06-Les gardiennes de Brocéliande.jpg",
    "Le chat-01-Le chat.jpg",
    "Le chat-11-Laffaire le chat.jpg",
    "Le donjon de Naheulbeuk-01-Première saison.jpg",
    "Le fayot-01-Moi msieur  Moi msieur .jpg",
    "Le fléau des dieux-01-Morituri te salutant.jpg",
    "Le grand pouvoir du Chninkel-01-Le commandement.jpg",
    "Le grand pouvoir du Chninkel-02-Le choisi.jpg",
    "Le grand pouvoir du Chninkel-03-Le jugement.jpg",
    "Le petit Rahan-01-t1.jpg",
    "Le petit Rahan-02-t2.jpg",
    "Le petit Rahan-03-t3.jpg",
    "Le petit Rahan-04-t4.jpg",
    "Le petit Spirou-01-Dis bonjour à la dame .jpg",
    "Le petit Spirou-02-Tu veux mon doigt .jpg",
    "Le petit Spirou-03-Mais  Quest-ce que tu fabriques .jpg",
    "Le petit Spirou-04-Cest pour ton bien .jpg",
    "Le petit Spirou-05-Merci qui .jpg",
    "Le petit Spirou-06-Noublie pas ta capuche .jpg",
    "Le petit Spirou-07-Demande à ton père .jpg",
    "Le petit Spirou-08-Tas quà tretenir .jpg",
    "Le petit Spirou-09-Cest pas de ton âge .jpg",
    "Le petit Spirou-10-Tu comprendras quand tu sras grand .jpg",
    "Le petit Spirou-11-Tu ne sras jamais grand .jpg",
    "Le petit Spirou-12-Cest du joli .jpg",
    "Le petit Spirou-13-Fais de beaux rêves .jpg",
    "Le petit Spirou-14-Bien fait pour toi .jpg",
    "Le petit Spirou-15-Tiens-toi droit .jpg",
    "Le petit Spirou-16-Tes gonflé .jpg",
    "Le petit Spirou-17-Tout le monde te regarde.jpg",
    "Le rédempteur-01-tome 1.jpg",
    "Le triangle secret hertz-01-Nuit et brouillard.jpg",
    "Le triangle secret hertz-02-Montespa.jpg",
    "Le triangle secret hertz-03-Le frère qui nexistait pas.jpg",
    "Le triangle secret hertz-04-lombre de laigle.jpg",
    "Le triangle secret hertz-05-La troisième mort de lempereur.jpg",
    "Le triangle secret INRI-01-Le suaire.jpg",
    "Le triangle secret INRI-02-La liste rouge.jpg",
    "Le triangle secret INRI-03-Le tombeau dorient.jpg",
    "Le triangle secret INRI-04-Résurrection.jpg",
    "Le triangle secret lacrima christi-01-Lalchimiste.jpg",
    "Le triangle secret Les gardiens du sang-01-Le crâne de Cagliostro.jpg",
    "Le triangle secret Les gardiens du sang-02-Deir el medineh.jpg",
    "Le triangle secret Les gardiens du sang-03-Le carnet de Cagliostro.jpg",
    "Le triangle secret Les gardiens du sang-04-Ordo ab chao.jpg",
    "Le triangle secret Les gardiens du sang-05-Acta est fabula.jpg",
    "Le triangle secret-01-Le testament du fou.jpg",
    "Le triangle secret-02-Le jeune homme au suaire.jpg",
    "Le triangle secret-03-De cendre et dor.jpg",
    "Le triangle secret-04-Lévangile oublié.jpg",
    "Le triangle secret-05-Linfame mensonge.jpg",
    "Le triangle secret-06-La parole perdue.jpg",
    "Le triangle secret-07-Limposteur.jpg",
    "Le vagabond des limbes-21-Les 13 transgressions.jpg",
    "Les aventures de Bédé-00-Léchelle de la terre.jpg",
    "Les aventures de Tintin-01-Reporter du petit vingtième au pays des soviets.jpg",
    "Les aventures de Tintin-03-Tintin en amérique(édition originale 1932).jpg",
    "Les aventures de Tintin-18-Laffaire tournesol.jpg",
    "Les aventures de Tintin-21-Les bijoux de la Castafiore.jpg",
    "Les blagues de Toto-01-Lécole des vannes.jpg",
    "Les blagues de Toto-05-Le maître blagueur.jpg",
    "Les blagues de Toto-08-Lélève dépasse le mètre.jpg",
    "Les blagues de Toto-10-LHistoire drôle.jpg",
    "Les blondes-02-Tome 2.jpg",
    "Les blondes-09-Tome 9.jpg",
    "Les blondes-10-Ca se fête .jpg",
    "Les blondes-11-Plus blondes que blondes .jpg",
    "Les blondes-12-Coucou qui cest .jpg",
    "Les blondes-HS3-Morceaux choisis .jpg",
    "Les conquérants de Troy-01-Exil à port-fleury.jpg",
    "Les femmes en blanc-04-Les jeunes filles opérent.jpg",
    "Les femmes en blanc-05-Jétais infirme hier.jpg",
    "Les femmes en blanc-06-Gai rire à tout prix.jpg",
    "Les femmes en blanc-08-Six foies neufs.jpg",
    "Les fondus-02-De la brocante.jpg",
    "Les foot furieux-03-Album 03.jpg",
    "Les grandes enquêtes des ptits philous-01-Bessin et compagnie.jpg",
    "Les informaticiens-02-Au boulot et que ca saute.jpg",
    "Les informaticiens-03-Mise à jour.jpg",
    "Les légendaires-01-La pierre de Jovénia.jpg",
    "Les légendaires-02-Le gardien.jpg",
    "Les légendaires-03-Frères ennemis.jpg",
    "Les légendaires-04-Le réveil du Kréa-Kaos.jpg",
    "Les légendaires-05-Coeur du passé.jpg",
    "Les légendaires-06-Main du futur.jpg",
    "Les légendaires-07-Aube et futur.jpg",
    "Les légendaires-08-Griffes et plumes.jpg",
    "Les légendaires-09-Lalystory.jpg",
    "Les légendaires-10-Le cycle dAnathos  La marque du destin.jpg",
    "Les légendaires-11-Versus inferno.jpg",
    "Les légendaires-12-Le cycle dAnathos  Renaissance.jpg",
    "Les légendaires-13-Sang royal.jpg",
    "Les légendaires-14-Lhéritage du mal.jpg",
    "Les légendaires-15-Amour mortel.jpg",
    "Les légendaires-16-Léternité ne dure quun temps.jpg",
    "Les légendaires-17-Lexode de kalandre.jpg",
    "Les légendaires-18-La fin de lhistoire.jpg",
    "Les naufragés dYthaq-01-Terra incognita.jpg",
    "Les naufragés dYthaq-02-Ophyde la déminée.jpg",
    "Les nombrils-01-Pour qui tu te prends .jpg",
    "Les nombrils-02-Sale temps pour les moches.jpg",
    "Les nombrils-03-Les liens de lamitié.jpg",
    "Les nombrils-04-Duel de belles.jpg",
    "Les nombrils-05-Un couple denfer.jpg",
    "Les nombrils-06-un été trop mortel.jpg",
    "Les quatre de baker street-01-Laffaire du rideau bleu.jpg",
    "Les quatre de baker street-02-Le dossier raboukine.jpg",
    "Les quatre de baker street-03-Le rossignol de Stepney.jpg",
    "Les rugbymen-03-On nest pas venus pour être là .jpg",
    "Les rugbymen-07-Le résultat, on sen fout  il faut gagner .jpg",
    "Les rugbymen-12-Aujourdhui, on laisse le cerveau au vestiaire .jpg",
    "Les simpson-05-Boing Boing bart .jpg",
    "Les simpson-12-Contre attaque.jpg",
    "Les écluses du ciel-01-La marque de Morgane.jpg",
    "Les écluses du ciel-02-Les chevaux de la nuit.jpg",
    "Les écluses du ciel-03-Gwen dArmor.jpg",
    "Les écluses du ciel-04-Avalon.jpg",
    "Les écluses du ciel-05-Le pays blanc.jpg",
    "Les écluses du ciel-06-Tombelaine.jpg",
    "Les écluses du ciel-07-Tiffen.jpg",
    "Litteul Kévin-01-Litteul Kévin T1.jpg",
    "Litteul Kévin-02-Litteul Kévin T2.jpg",
    "Litteul Kévin-03-Litteul Kévin T3.jpg",
    "Litteul Kévin-04-Litteul Kévin T4.jpg",
    "Litteul Kévin-05-Litteul Kévin T5.jpg",
    "Litteul Kévin-06-Litteul Kévin T6.jpg",
    "Litteul Kévin-07-Litteul Kévin T7.jpg",
    "Litteul Kévin-08-Litteul Kévin T8.jpg",
    "Litteul Kévin-09-Litteul Kévin T9.jpg",
    "Litteul Kévin-10-Litteul Kévin T10.jpg",
    "Lucky Luke-05-Cavalier seul.jpg",
    "Lucky Luke-110-La belle province.jpg",
    "Lucky Luke-46-Le fil qui chante.jpg",
    "Lucky Luke-49-Dalton city.jpg",
    "Lucky Luke-78-Le bandit manchot.jpg",
    "Lucky Luke-98-Lamnésie des Dalton.jpg",
    "Luuna-01-La nuit des totems.jpg",
    "Lélève ducobu-14-Premier de la classe (en commençant par la fin ).jpg",
    "Léonard-00-Compile de génie.jpg",
    "Léonard-01-Est un génie.jpg",
    "Léonard-22-Cadeau de génie.jpg",
    "Léonard-23-Poil au génie.jpg",
    "Léonard-34-Docteur génie et mister aie.jpg",
    "Léonard-41-Génie du stop.jpg",
    "Léonard-43-Super-génie.jpg",
    "Léonard-HS-Génie à la page.jpg",
    "Marlysa-01-Le masque.jpg",
    "Marlysa-02-Lombre de Dompour.jpg",
    "Marlysa-03-Lautre côté.jpg",
    "Marlysa-04-Bragal.jpg",
    "Marlysa-05-Le thaumaturge.jpg",
    "Marlysa-06-La femme-vie.jpg",
    "Marlysa-07-Le Waltras.jpg",
    "Marlysa-08-Le Waltras - Episode 2.jpg",
    "Marlysa-09-Retour à Tolden.jpg",
    "Marlysa-10-Tatrin de Tolden.jpg",
    "Marlysa-11-La métamorphose.jpg",
    "Marlysa-12-Lordre noir.jpg",
    "Marlysa-13-Majesté.jpg",
    "Marlysa-14-Soeurs de sang.jpg",
    "Marlysa-15-La cité des Rinults.jpg",
    "Marsu kids-01-Sortie de loeuf.jpg",
    "Marsupilami-00-Capturez un Marsupilami .jpg",
    "Marsupilami-01-La queue du Marsupilami.jpg",
    "Marsupilami-02-Le bébé du bout du monde.jpg",
    "Marsupilami-03-Mars le noir.jpg",
    "Marsupilami-04-Le pollen du monte Urticando.jpg",
    "Marsupilami-05-Baby Prinz.jpg",
    "Marsupilami-06-Fordlandia.jpg",
    "Marsupilami-07-Lor de Boavista.jpg",
    "Marsupilami-08-Le temple de Boavista.jpg",
    "Marsupilami-09-Le papillon des cimes.jpg",
    "Marsupilami-10-Rififi en Palombie.jpg",
    "Marsupilami-11-Houba banana.jpg",
    "Marsupilami-12-Trafic à Jollywood.jpg",
    "Marsupilami-13-Le défilé du jaguar.jpg",
    "Marsupilami-14-Un fils en or.jpg",
    "Marsupilami-15-Cest quoi ce cirque .jpg",
    "Marsupilami-16-Tous en piste.jpg",
    "Marsupilami-17-Lorchidée des Chahutas.jpg",
    "Marsupilami-18-Robinson académy.jpg",
    "Marsupilami-19-Magie blanche.jpg",
    "Marsupilami-20-Viva Palombia .jpg",
    "Marsupilami-21-Red monster.jpg",
    "Marsupilami-22-Chiquito paradiso.jpg",
    "Marsupilami-23-Croc vert.jpg",
    "Marsupilami-24-Opération Attila.jpg",
    "Mélusine-06-Farfadets et korrigans.jpg",
    "Métropoles-01-Les pierres de Rome.jpg",
    "Pacush blues-01-Premières mesures.jpg",
    "Peter Pan-01-Londres.jpg",
    "Peter Pan-02-Opikanoba.jpg",
    "Peter Pan-03-Tempête.jpg",
    "Peter Pan-04-Mains rouges.jpg",
    "Peter Pan-05-Crochet.jpg",
    "Peter Pan-06-Destins.jpg",
    "Pierre tombal-04-Des os pilants.jpg",
    "Pierre tombal-09-Voyage de nos.jpg",
    "Private liberty-01-Léchelle de kent.jpg",
    "Private liberty-02-La serrure et la clenche.jpg",
    "Rahan fils des âges farouches-00-Le mariage de Rahan.jpg",
    "Rahan fils des âges farouches-01-Comme aurait fait Craô.jpg",
    "Rahan fils des âges farouches-02-Les longues crinières.jpg",
    "Rahan fils des âges farouches-03-Le clan sauvage.jpg",
    "Rahan fils des âges farouches-04-Les chasseurs de foudre.jpg",
    "Rahan fils des âges farouches-05-Les hommes sans cheveux.jpg",
    "Rahan fils des âges farouches-06-Le maître des fauves.jpg",
    "Rahan fils des âges farouches-14-Lintégrale.jpg",
    "Soda-01-Un ange trépasse.jpg",
    "Soda-04-Dieu est mort ce soir.jpg",
    "Soda-09-Et délivre-nous du mal.jpg",
    "Spirou et Fantasio-00-Coeurs dacier.jpg",
    "Spirou et Fantasio-01-4 aventures de Spirou et Fantasio.jpg",
    "Spirou et Fantasio-02-Il y a un sorcier à Champignac.jpg",
    "Spirou et Fantasio-03-Les chapeaux noirs.jpg",
    "Spirou et Fantasio-04-Spirou et les héritiers.jpg",
    "Spirou et Fantasio-05-Les voleurs du marsupilami.jpg",
    "Spirou et Fantasio-06-La corne de rhinocéros.jpg",
    "Spirou et Fantasio-07-Le dictateur et le champignon.jpg",
    "Spirou et Fantasio-08-La mauvaise tête.jpg",
    "Spirou et Fantasio-09-Le repaire de la murène.jpg",
    "Spirou et Fantasio-10-Les pirates du silence.jpg",
    "Spirou et Fantasio-11-Le gorille à bonne mine.jpg",
    "Spirou et Fantasio-12-Le nid des marsupilamis.jpg",
    "Spirou et Fantasio-13-Le voyageur du mésozoïque.jpg",
    "Spirou et Fantasio-14-Le prisonnier du Bouddha.jpg",
    "Spirou et Fantasio-15-Z comme Zorglub.jpg",
    "Spirou et Fantasio-16-Lombre du Z.jpg",
    "Spirou et Fantasio-17-Spirou et les hommes-bulles.jpg",
    "Spirou et Fantasio-18-QRN sur Bretzelburg.jpg",
    "Spirou et Fantasio-19-Panade à Champignac.jpg",
    "Spirou et Fantasio-20-Le faiseur dor.jpg",
    "Spirou et Fantasio-21-Du glucose pour Noémie.jpg",
    "Spirou et Fantasio-22-Labbaye truquée.jpg",
    "Spirou et Fantasio-23-Tora torapa.jpg",
    "Spirou et Fantasio-24-Tembo tabou.jpg",
    "Spirou et Fantasio-25-Le gri-gri du Niokolo-Koba.jpg",
    "Spirou et Fantasio-26-Du cidre pour les étoiles.jpg",
    "Spirou et Fantasio-27-LAnkou.jpg",
    "Spirou et Fantasio-28-Kodo le tyran.jpg",
    "Spirou et Fantasio-29-Des haricots partout.jpg",
    "Spirou et Fantasio-30-La ceinture du grand froid.jpg",
    "Spirou et Fantasio-31-La boîte noire.jpg",
    "Spirou et Fantasio-32-Les faiseurs de silence.jpg",
    "Spirou et Fantasio-33-Virus.jpg",
    "Spirou et Fantasio-34-Aventure en Australie.jpg",
    "Spirou et Fantasio-35-Qui arrêtera Cyanure .jpg",
    "Spirou et Fantasio-36-Lhorloger de la comète.jpg",
    "Spirou et Fantasio-37-Le réveil du Z.jpg",
    "Spirou et Fantasio-38-La jeunesse de Spirou.jpg",
    "Spirou et Fantasio-39-A New York.jpg",
    "Spirou et Fantasio-40-La frousse aux trousses.jpg",
    "Spirou et Fantasio-41-La vallée des bannis.jpg",
    "Spirou et Fantasio-42-A Moscou.jpg",
    "Spirou et Fantasio-43-Vito la déveine.jpg",
    "Spirou et Fantasio-44-Le rayon noir.jpg",
    "Spirou et Fantasio-45-Luna fatale.jpg",
    "Spirou et Fantasio-46-Machine qui rêve.jpg",
    "Spirou et Fantasio-47-Paris sous-Seine.jpg",
    "Spirou et Fantasio-48-Lhomme qui ne voulait pas mourrir.jpg",
    "Spirou et Fantasio-49-A Tokyo.jpg",
    "Spirou et Fantasio-50-Aux sources du Z.jpg",
    "Spirou et Fantasio-51-Alerte aux zorkons.jpg",
    "Spirou et Fantasio-52-La face cachée du Z.jpg",
    "Spirou et Fantasio-53-Dans les griffes de la vipère.jpg",
    "Spirou et Fantasio-54-Le groom de Sniper Alley.jpg",
    "Spirou et Fantasio-55-La colère du Marsupilami.jpg",
    "Spirou et Fantasio-HS1-Lhéritage.jpg",
    "Spirou et Fantasio-HS2-Radar le robot.jpg",
    "Spirou-00-Connection.jpg",
    "Testar le robot-01-Destination Duralex.jpg",
    "Thorgal-07-Lenfant des étoiles.jpg",
    "Thorgal-09-Les archers.jpg",
    "Thorgal-17-La gardienne des clés.jpg",
    "Thorgal-18-Lépée-soleil.jpg",
    "Titeuf-01-Dieu, le sexe et les bretelles.jpg",
    "Titeuf-02-LAmour, cest pô propre .jpg",
    "Titeuf-03-Ca épate les filles .jpg",
    "Titeuf-04-Cest pô juste .jpg",
    "Titeuf-05-Et le derrière des choses.jpg",
    "Titeuf-06-Tchô, monde cruel.jpg",
    "Titeuf-07-Le miracle de la vie.jpg",
    "Titeuf-08-Lâchez-moi le slip.jpg",
    "Titeuf-09-La loi du préau.jpg",
    "Titeuf-10-Nadia se marie.jpg",
    "Titeuf-11-Mes meilleurs copains.jpg",
    "Titeuf-12-Le sens de la vie.jpg",
    "Titeuf-13-A la folie.jpg",
    "Titeuf-14-Bienvenue en adolescence.jpg",
    "Trolls de Troy-01-Histoire trolles.jpg",
    "Trolls de Troy-02-Le scalp du vénérable.jpg",
    "Trolls de Troy-03-Comme un vol de pétaures.jpg",
    "Trolls de Troy-04-Le feu occulte.jpg",
    "Trolls de Troy-05-Les maléfices de la thaumaturge.jpg",
    "Trolls de Troy-06-Trolls dans la brume.jpg",
    "Trolls de Troy-07-Plume de sage.jpg",
    "Trolls de Troy-08-Rockn Troll attitude.jpg",
    "Trolls de Troy-09-Les prisonniers du Darshan (I).jpg",
    "Trolls de Troy-10-Les prisonniers du Darshan (II).jpg",
    "Trolls de Troy-11-Trollympiades.jpg",
    "Trolls de Troy-12-Sang famille (I).jpg",
    "Trolls de Troy-13-La guerre des gloutons (II).jpg",
    "Trolls de Troy-14-Lhistoire de Waha.jpg",
    "Trolls de Troy-15-Boules de poils.jpg",
    "Trolls de Troy-16-Poils de trolls (II).jpg",
    "Trolls de Troy-17-La Trolle impromptue.jpg",
    "Trolls de Troy-18-Pröfy blues.jpg",
    "Trolls de Troy-19-Pas de nöl pour le père grommël.jpg",
    "Trolls de Troy-20-Lhéritage de Waha.jpg",
    "Trolls de Troy-21-Lor des trolls.jpg",
    "Universal war one-01-La genèse.jpg",
    "Universal war one-02-Le fruit de la connaissance.jpg",
    "XIII-01-Le jour du soleil noir.jpg",
    "XIII-02-Là où va lindien.jpg",
    "XIII-03-Toutes les larmes de lenfer.jpg",
    "XIII-04-Spads.jpg",
    "XIII-05-Rouge total.jpg",
    "XIII-06-Le dossier Jason Fly.jpg",
    "XIII-07-La nuit du 3 août.jpg",
    "XIII-08-Treize contre un.jpg",
    "XIII-09-Pour Maria.jpg",
    "XIII-10-El Cascador.jpg",
    "XIII-11-Trois montres dargent.jpg",
    "XIII-12-Le jugement.jpg",
    "XIII-13-The XIII mystery - lenquête.jpg",
    "XIII-14-Secret défense.jpg",
    "XIII-15-Lachez les chiens .jpg",
    "XIII-16-Opération Montecristo.jpg",
    "XIII-17-Lor de Maximilien.jpg",
    "XIII-18-La version irlandaise.jpg",
    "XIII-19-Le dernier round.jpg",
    "XIII-20-Le jour du Mayflower.jpg",
    "XIII-21-Lappat.jpg",
    "XIII-22-Retour à Greenfalls.jpg",
    "XIII-23-Le message du martyr.jpg",
    "XIII-24-Lhéritage de jason Mac Lane.jpg",
    "Yakari-03-Chez les castors.jpg",
];
