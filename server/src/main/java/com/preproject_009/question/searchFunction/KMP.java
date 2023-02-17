package com.preproject_009.question.searchFunction;

public class KMP {
    public static int[] makeTable(String pattern) {
        int n = pattern.length();
        int[] table = new int[n];

        int index=0;
        for(int i=1; i<n; i++) {
            // 일치하는 문자가 발생했을 때(idx>0), 연속적으로 더 일치하지 않으면 index = table[idx-1]로 돌려준다.
            while(index>0 && pattern.charAt(i) != pattern.charAt(index)) {
                index = table[index-1];
            }

            if(pattern.charAt(i) == pattern.charAt(index)) {
                index += 1;
                table[i] = index;
            }
        }
        return table;
    }

    public static boolean kmp(String parent, String pattern) {
        int[] table = makeTable(pattern);

        int n1 = parent.length();
        int n2 = pattern.length();
        // int count = 0;
        boolean isContain = false;

        int index = 0; // 현재 대응되는 글자 수
        for(int i=0; i< n1; i++) {
            // idx번 글자와 짚더미의 해당 글자가 불일치할 경우,
            // 현재 대응된 글자의 수를 table[idx-1]번으로 줄인다.
            while(index>0 && parent.charAt(i) != pattern.charAt(index)) {
                index = table[index-1];
            }
            // 글자가 대응될 경우
            if(parent.charAt(i) == pattern.charAt(index)) {
                if(index == n2-1) {
                    //count++;
                    isContain = true;
                    index =table[index];
                }else {
                    index += 1;
                }
            }
        }
        // return count
        return isContain;
    }

}
