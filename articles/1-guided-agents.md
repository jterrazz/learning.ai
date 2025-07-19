# Guided Agents

> Guider des agents pour atteindre un but

Idée directice de ce chapitre: La solution n'est jamais de one shot, mais d'accompagner progressivement lia au résultat.

# GENERIC TITLE: NOW WHEN THE SIDE SWITCHES AND WE GO TO GUIDING AGENTS (Not yet autonomous)

Introduction

On vient de passer un level, sur le plan de l'intelligence, mais avant tout sur notre rôle dans la société. Moins d'exécution, plus de direction.

_Pour chacun insister sur le fait qu'on est es architectes et que notre rôle désormais c'est d'avoir la vision large. Pas l'implémentation. Cf container infra domaine: on a des interfaces, et note implémentation à la limite on s'en fous. Tant qu'on reste l'objectif métier. La c'est pareil mais encore plus explicite._

_Du coup: on rigole de dire que notre métier c'est de faire des prompts. Mais justement c'est un truc très profond: pcque faire des prompts c'est donner l'intention. C'est savoir quoi faire, c'est savoir comprendre le contexte._

=> PASSER EN MODE "JE DONNE MON INSTRUCTION, JE GUIDE, JE N'EXETURE RIEN, JE DIRIGE"
_Développer 10x avec l'IA in IdE pour voir le code_ => on devient plutôt reviewer +++++

_Développer 10x en mode dirigeant pour gérer une fleet de codeurs avec Claude Agent (pk pas le setup de la todo list, genre linear)_

Implémentation parallèle

- réflexion dev: prompt: instruction: intention. 

Exprimer son intention 

On devient tous des managers intermédiaires

Donner l'instruction c'est déléguer mais c'est avant tout trouver quoi savoir dire.

Travailler avec l'Ia c'est se challenger soit même.

Retrouver la valeur.

On ne enlève pas la réflexion, on enlève l'exécution. On se concentre sur la pensée, on on stream ça directement dans le résultat.

=> AUGMENTATION DU BITRATE DE TON CERVEAU A LA LIGNE ECRITE

## Appliquée au dev ça donne quoi

> Le secret des larges refactors, définir le plan avec l'ia, et de l'accompagner à sa bonne réélisation:
 - définir un plan c'est 

=> New experience
=> Build software faster

## Utiliserl es bons outils:

Introduction:
•⁠ ⁠l'intégration ton métier <=> IA <=> nous, c'est ça qui fait toute la différence.
=> Donc pour faire les bonnes propositions en fonction du bon CONTEXTE (ne jamais oublier que l'IA c'est de l'intelligence dans une Boite ajd, qui n'a accès qu'ç l'information qu'on lui donne)
=> Donc parfaitement adaptée (visuellement tout est fait pour voir rapidement les propositions de l'IA).
=> Il a un contexte global simplifié du projet, la capacité de se challenger lui même, d'explorer ce qu'il connait pas, de lancer des commandes, tout ça en autonomie (tu peux lui dire " fait passer @montest.test.ts en vert " par exemple, et il va run la cmd, trouver les imports, etc).

=> IMPORTANT: Un bon guide d'agent, c'est donc QQ qui comprends parfaitement la BONNE DOSE de context à passer, le bon modèle (cf le bon collaborateur) à appeler (en fonction de ses compétences, de sa rapidité, de son cout).

### Exemple cursor: Knows Your Codebase

1. Clone simple
2. Ça va faire l'indexing (cf screenshot settings) et rendre capable tous les trucs qu'on a dit avant
=> Finds context
=> Knows about the files
=> Can read any file
=> Knows to execute commands if needed to get more context

## Tab Tab Tab (Copilot like)
## Chat Included
## Edit in Natural Language (cmd K)
## Agent Mode (more Free / Large requests)
### Auto Connected to Lint Errors

---

## Useful setup (GENERAL IDEA: WE DON'T WANT AI TO BE ITSELF, WE WANT IT FOR NOW TO BE A CLONE, A SUPER SMART FAST YOU, THAT DOES WHAT YOU DID)
Give your persnality to AI

Use Cursor Rules:
I like For example the Given When Then Pattern => I apply it. to every test context using the mdc file
TODO: paste the code of my testing rule
•⁠ ⁠Jouer avec les Cursor Rules pour personnaliser un projet: exemple sur un de mes projets: https://github.com/jterrazz/fake-news-api/tree/main/.cursor/rules

## Easy examples

1. REAPPLIQUER DES IDEES DEJA FAITES, QUI N'ONT BESOIN PLUS QUE D'EXECUTION: **USE CASE REAPPLICATION DU HASH DU COMMIT**: "reapply the changes of this commit to this file"
2. MAKE PREDEFINED RULES APPLIED: Make the tests go green -> run the tests until they are green ()

## The importance of models used:

- Modèle: hyper important de savoir la personnalité de chaque modèle.
- AJD
    - o3 / grok4 -> des ingénieurs super smart (capable de faire des flows d'instructions très complexes, de comprendre des concepts complexes)
    - Gemini 2.5 Pro → Super fort en gros contexte et en recherches consentielles: rédaction d'articles avec de nombreux paragrapghs, compréhension très très large d'un repo, cout plus faible que les concurents.
    - Claude 4 Opus -> Une IA / grok4 : capables de fonctionner quasi en autonomies sur des taches et de trouver des solutions complexes par lui mêmes

## AI Is in a box, let it free

-⁠ ⁠Jouer avec les MCP (des API / documentations accessibles pour l'agent pour les services externes, par exemple AWS,pour qu'il dev basé sur du réel) (pour info, on verra au chapitre suivant les MCP, ce que c'est et pk ça ouvre l'iA au monde)
- More connexion in your tools.

## Mentality -> Very important, at this step, BE an Architect of Code, NOT a Vibe Coder

Personnalité de l'Ia: le but c'est vraiment d'avoir une extension de toi et pas de découvrir le code. Un peu comme un collègue avec qui tu bosses depuis 4 ans. Vous avez réussi à vous synchro. Et à la limite tu sais d'avance ce qu'il va produire

I strongly believe AI is only useful if we delegate maximum of brain tasks to it. Focusing on the important stuff

Mais LE PIEGE AJD: TROP FAIRE CONFIANCE A LA MACHINE, PAS AVOIR LA VISION DE CE QU4ON VEUT FAIRE, TROP FAIRE DE YOLO: On finit par perdre du temps et refaire le truc soit même. IL FAUT SE FOCUS SUR LES CHANGEMENTS QU4ON VEUT FAIRE SOIT MEME, COMME SI ON ECRIVAIT SUPER SUPER VITE MTN.

Le piège du vibe coding: ne pas guider mais le faire uniquement à partir du frontend par exemple. La non. Faut connaître les flows, les détails, la vision. Faut trouver le bon dosage de à quel point tu t'élèves, face à la difficulté de la tâche.

### Good Consequences of This

Ce truc te force à avoir du high quality code par défault dans le sens: termes des variables, nombre de testes que tu fais: car c'est comme de la review: tu te fies plus sur le test que sur le code.

### IDD: Intention Driven Development

IDD: intention based development, compare au TDD, **Intent-Driven Development**
=> Develoment must bring value: Like TDD, etc, etc, IDD goes back to the core need of development (cf parler de first principle de elon musk) => Bringing value to the product.
Une piste d'idée:
You setup custom kinda integration tests in your project, and let the AI vibe code it.
need-issou.intent.test.ts // or global integration tests

=> Trouver une comparaison avec le TDD (IDD intent driven design)
	=> Bien insister sur les test: on guide le projet, donc on définie notre besoin, donc c'est on peut définir des tests d'intégration, des gens de comportement de l'API; et après peu importe l'implémentation, tant que cet Itent est satisfait, l'IA choisit son implem et basta.

TODO Donner example

## Piège du pricing

=> Bien savoir choisir les modèles, use cases, en fonction de ce qu'on veut = la clé de pas partir sur des miliers de cout d'euro d'intelligence.

