import java.util.Scanner;

public class tic_tac_toe {

    int hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9;

    public static void main(String[] args) {
        tic_tac_toe thisClass = new tic_tac_toe();
        var scanner = new Scanner(System.in);
        System.out.println("|       |       |       |");

        System.out.println("| hole1 | hole2 | hole3 |");
        System.out.println("-------------------------");
        System.out.println("| hole4 | hole5 | hole6 |");
        System.out.println("-------------------------");
        System.out.println("| hole7 | hole8 | hole9 |");

        System.out.println("|       |       |       |");
        boolean userXTurn = true;
        for (var i = 0; i <= 9; i++) {
            System.out.println((userXTurn ? "X's" : "O's") + " turn");
            int input = scanner.nextInt();
            if (input <= 9 && input >= 1) {
                boolean filled = thisClass.fillHole(input, userXTurn ? 1 : 2);
                if (filled) {
                    thisClass.PrintCurrentState();
                    userXTurn = !userXTurn;
                    int userWon = thisClass.checkIfWon();
                    if (userWon > 0) {
                        System.out.println("Congrats " + thisClass.getPlayerChar(userWon) + " for winning the game!");
                        return;

                    } else {
                        if (i == 8) {
                            System.out.println("No One Won ! Good Luck next time!");
                            return;
                        }
                    }
                } else {
                    System.out.println("This hole is already filled!");
                    i--;
                    thisClass.PrintCurrentState();
                }
            } else {
                System.out.println("You have entered a number out of range please enter a number from 1 to 9");
                i--; // decreasing i so the i ++ dosent affect this chance
            }
        }
    }

    private String getPlayerChar(int v) {
        return v == 1 ? "X" : "O";
    }

    private int checkIfWon() {
        // conditions
        if ((hole1 == hole2) && (hole2 == hole3) && (hole1 > 0)) {
            return hole1;
        } else if ((hole4 == hole5) && (hole5 == hole6) && (hole5 > 0)) {
            return hole4;
        } else if ((hole7 == hole8) && (hole8 == hole9) && (hole9 > 0)) {
            return hole7;
        } else if ((hole1 == hole4) && (hole4 == hole7) && (hole7 > 0)) {
            return hole7;
        } else if ((hole2 == hole5) && (hole5 == hole8) && (hole8 > 0)) {
            return hole8;
        } else if ((hole3 == hole6) && (hole6 == hole9) && (hole9 > 0)) {
            return hole9;
        } else if ((hole1 == hole5) && (hole5 == hole9) && (hole9 > 0)) {
            return hole9;
        } else if ((hole3 == hole5) && (hole5 == hole7) && (hole7 > 0)) {
            return hole7;
        } else
            return 0;
    }

    private void PrintCurrentState() {

        System.out.println("| " + (hole1 > 0 ? this.getPlayerChar(hole1) : "hole1") + " | "
                + (hole2 > 0 ? this.getPlayerChar(hole2) : "hole2") + " | "
                + (hole3 > 0 ? this.getPlayerChar(hole3) : "hole3") + " |");
        System.out.println("-------------------------");
        System.out.println("| " + (hole4 > 0 ? this.getPlayerChar(hole4) : "hole4") + " | "
                + (hole5 > 0 ? this.getPlayerChar(hole5) : "hole5") + " | "
                + (hole6 > 0 ? this.getPlayerChar(hole6) : "hole6") + " |");
        System.out.println("-------------------------");
        System.out.println("| " + (hole7 > 0 ? this.getPlayerChar(hole7) : "hole7") + " | "
                + (hole8 > 0 ? this.getPlayerChar(hole8) : "hole8") + " | "
                + (hole9 > 0 ? this.getPlayerChar(hole9) : "hole9") + " |");
    }

    private boolean fillHole(int holeNumber, int player) {
        if (holeNumber == 1) {
            if (hole1 == 0) {
                hole1 = player;
                return true;
            } else
                return false;
        } else if (holeNumber == 2) {
            if (hole2 == 0) {
                hole2 = player;
                return true;
            } else
                return false;
        } else if (holeNumber == 3) {
            if (hole3 == 0) {
                hole3 = player;
                return true;
            } else
                return false;
        } else if (holeNumber == 4) {
            if (hole4 == 0) {
                hole4 = player;
                return true;
            } else
                return false;
        } else if (holeNumber == 5) {
            if (hole5 == 0) {
                hole5 = player;
                return true;
            } else
                return false;
        } else if (holeNumber == 6) {
            if (hole6 == 0) {
                hole6 = player;
                return true;
            } else
                return false;
        } else if (holeNumber == 7) {
            if (hole7 == 0) {
                hole7 = player;
                return true;
            } else
                return false;
        } else if (holeNumber == 8) {
            if (hole8 == 0) {
                hole8 = player;
                return true;
            } else
                return false;
        } else if (holeNumber == 9) {
            if (hole9 == 0) {
                hole9 = player;
                return true;
            } else
                return false;
        } else {
            return false;
        }
    }

}
