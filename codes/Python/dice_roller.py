from random import randint
from typing import Tuple


def roll(n: int = 2) -> Tuple[str, int]:
    """Dice roller.

    Args:
        n (int): Number of dice.

    Returns:
        Tuple[str, int]: String representation of the dice and their
            sum.
    """
    faces = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685']
    dice = [randint(1, 6) for _ in range(n)]
    return " ".join(faces[die-1] for die in dice), sum(dice)


if __name__ == "__main__":
    while True:
        dice, sum_ = roll()
        print(f"{dice} -> {sum_}")
        if input("Continue? ").lower() not in "yes":
            break