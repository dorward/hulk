VAR dice_a = 0
VAR dice_b = 0

You're the lucky one.

The pirates in this part of space are well-known for their exotic religious beliefs.

Your crewmates are destined to spend the rest of their lives as slaves and victims of the crazed cultists of the god of pain.

You are not.

The inhuman raiders picked you to escape their torture and other vices.

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