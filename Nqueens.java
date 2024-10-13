class Queens {
public static int n = 1, count = 0;
    public static int[] col;

    public static void main(String[] args) {
        int index = 0;
        while (n <= 12) {
            col = new int[n + 1];
            while (index <= n) { // just use the function once for each n
                queens(index); // i.e. just use queens(0);
                index++;
            }
            System.out.println("n = " + n + " # of solution(s) = " + count);
            count = 0;
            index = 0;
            n++;
        }
    }

    public static void queens(int i) {
        int index;
        if (promising(i)) {
            if (i == n) {
                count++;
            } else {
                for (index = 1; index <= n; index++) {
                    col[i + 1] = index;
                    queens(i + 1);
                }
            }
        }
    }

    static boolean promising(int i) {
        int index;
        boolean _switch;

        index = 1;
        _switch = true;
        while (index < i && _switch) {
            if (col[i] == col[index] || Math.abs(col[i] - col[index]) == (i - index)) {
                _switch = false;
            }
            index++;
        }
        return _switch;
    }
}
