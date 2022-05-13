EXTERNAL text_prompt(variable, message, next_knot)
LIST possible_names = (Aajz), (Acastian), (Acastus), (Agnathio), (Alexa), (Amice), (Amuto), (Anagar), (Andrus), (Apollon), (Arrven), (Astrix), (Bannus), (Barrgus), (Belarius), (Bhangleo), (Bitterchain), (Blitz), (Boreas), (Cainsil), (Caldimus), (Cassus), (Castivar), (Castus), (Caul), (Chronus), (Coldfire), (Cottle), (Cowl), (Crow), (Cyclas), (Cyclelos), (Dagged), (Danithor), (Darnath), (Diektrik), (Dolf), (Donatelus), (Dorrghun), (Dysorius), (Erasmus), (Erik), (Eustace), (Fernand), (Gaius), (Gann), (Garadon), (Garak), (Gatughan), (Ghol), (Ghork), (Ghorrean), (Gloom), (Gonk), (Gorrloch), (Grendel), (Groff), (Gunnar), (Haerana), (Hagen), (Hardfist), (Heisen), (Ironaxe), (Ishmael), (Jaghol), (Jago), (Javier), (Jawgor), (Jean), (Jones), (Jurgah), (Kaagos), (Kadena), (Kaed), (Kandakh), (Kantor), (Klayde), (Koen), (Korvaan), (Korvaedyn), (Kulghu), (Kyrin), (Laars), (Larz), (Lefo), (Leif), (Lexandro), (Lydus), (Lytanus), (Mandoth), (Mankle), (Marcus), (Marius), (Markov), (Marqol), (Matteo), (Mendoza), (Mirage), (Mithrha), (Mologhai), (Moradus), (Mordelai), (Moriar), (Morlaeo), (Morrelis), (Mylinnax), (Neabelle), (Nereus), (Nicodemus), (Nixorem), (Obidiah), (Ordaris), (Persophie), (Phase), (Polux), (Punker), (Raelyn), (Rafael), (Ramona), (Raneil), (Rauth), (Reszan), (Rox), (Saghari), (Sargo), (Seglei), (Selig), (Seraphan), (Shadow), (Shyrth), (Solaq), (Stoneshield), (Stormstrider), (Suberei), (Svard), (Swan), (Tarentus), (Terrek), (Thal), (Thunderhowl), (Tippet), (Titus), (Torvaec), (Traegus), (Trollbane), (Ulzcha), (Una), (Vaanes), (Varenus), (Varrox), (Vorg), (Vykus), (Vylkur), (Wardecors), (Wyrmslayer), (Xeriis), (Yesuberei), (Yonda), (Yvarin), (Zed)

VAR dice_a = 0
VAR dice_b = 0
VAR dice_dThree = 0

VAR attribute_skill = 0
VAR attribute_stamina = 0
VAR attribute_luck = 0
VAR char_name = ""

You're the lucky one.

The pirates in this part of space are well-known for their exotic religious beliefs.

Your crewmates are destined to spend the rest of their lives as slaves and victims of the crazed cultists of the god of pain.

You are not.

The inhuman raiders picked you to escape their torture and other vices.

* [Who am I, anyway?] -> character_gen_start

=== character_gen_start ===
-> character_gen_name

=== character_gen_name_prompt ===

Everyone needs a name. What is yours?
-> character_gen_name

=== character_gen_name ===

~ temp random_name_a = select_name()
~ temp random_name_b = select_name()
~ temp random_name_c = select_name()
~ text_prompt("char_name", "I know! It is", "character_gen_stats")

*  \ {random_name_a}
    ~ char_name = random_name_a
    -> character_gen_stats

*  \ {random_name_b}
    ~ char_name = random_name_b
    -> character_gen_stats
    
*  \ {random_name_c}
    ~ char_name = random_name_c
    -> character_gen_stats  

+ [None of these]
    -> character_gen_name


=== character_gen_stats ===

Hi, {char_name}

-> character_gen_skill

=== character_gen_skill ===
~ dice_dThree = RANDOM(1, 3)
~ attribute_skill = dice_dThree + 3

You have a skill of 1d3+3. You have rolled {dice_dThree} giving you a skill of {attribute_skill} #highlight skill

* [OK] -> character_gen_stamina


=== character_gen_stamina ===

~ dice_dThree = 0
~ dice_a = RANDOM(1, 6)
~ dice_b = RANDOM(1, 6)
~ attribute_stamina = dice_a + dice_b + 12

You have a stamina of 2d6+12. You have rolled {dice_a + dice_b} giving you a stamina of {attribute_stamina} #highlight stamina

* [OK] -> character_gen_luck

=== character_gen_luck ===

~ dice_dThree = 0
~ dice_a = RANDOM(1, 6)
~ dice_b = 0
~ attribute_luck = dice_a + 6

You have a luck of 1d6+6. You have rolled {dice_a} giving you a luck of {attribute_luck} #highlight stamina

* [OK] -> back_in_the_pod

=== back_in_the_pod ===
~ reset_dice()

Three days ago, they put you in an escape pod and launched it. You're lightyears from civilisation and have 30 minutes of oxygen remaining.

The corsairs gave you three days to contemplate death by asphyxiation. Now it is almost here.

* [Is this the end?] -> pod_thrusters

=== pod_thrusters ===

You feel a slight jerk as the escape pod's thrusters fire.

It has locked onto a spacecraft that you hadn't noticed.

Huge though it is, there is little light out here, and it doesn't seem to have any running lights on it.

Maybe it is abandoned?

Maybe it still has air?

…and water?

…and food?

You'll be docking soon, so you'll find out. 

 * [Wait] -> pod_docking
 
 === pod_docking ===
 
There is a loud clank, or perhaps a clunk, as the pod connects to the hull of the larger vessel. 

The airlock… doesn't open.

-> pod_choices

=== pod_choices ===

 * Press the airlock release control -> pod_button
 * Make use of the emergency toolkit that came with the pod -> pod_toolkit
 * Rip off the plasteele panel under the pod's control panel and use it as a crowbar -> pod_crowbar
 * -> pod_all_exhausted

=== pod_all_exhausted ===

Hope begins to fade. You are trapped in the escape pod right next to a huge spaceship. All that stands between you and it is a door you can't open. 

You have minutes of oxygen left.

Fin.

-> END

=== pod_button ===

The door panel emits an unhappy "blat" noise. It isn't working.

-> pod_choices

=== pod_toolkit ===
~ temp result = skill_check(7)
{
    - result == true:
        It opens!
        -> temp_end
    - else:
        Whatever is wrong with the airlock, it is beyond your ability to fix from the inside of this pod.
        -> pod_choices
}

=== pod_crowbar ===
~ temp result = skill_check(7)
{
    - result == true:
        Your muscles strain as you apply pressure to your improvised crowbar, but the door does open. 
        -> temp_end
    - else:
        They built these doors to withstand enormous pressure, your muscles aren't a match for it.
        -> pod_choices
}

=== temp_end ===

Fin. For now.
    -> END
    
=== function skill_check(target) ===
~ dice_a = RANDOM(1, 6)
~ dice_b = RANDOM(1, 6)
~ temp total = dice_a + dice_b
{
- total < target:
    ~ return false
- else:
    ~ return true
}

=== function reset_dice() ===
~ dice_a = 0
~ dice_b = 0
~ dice_dThree = 0

=== function select_name() ===
{
    - !possible_names: // "List is empty"
        ~ possible_names = LIST_ALL(possible_names)
}
    ~ temp selected = LIST_RANDOM(possible_names)
    ~ possible_names -= selected
    ~ return selected
    
==== function text_prompt(variable, message, next_knot) ===
    ~ return 1  
    