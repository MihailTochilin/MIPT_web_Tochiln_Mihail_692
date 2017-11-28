package main

import "unicode"

func RemoveEven(mass []int) []int {
    res := make([]int, 0)
    for _, el := range mass {
        if el % 2 == 1 {
            res = append(res, el)
        }
    }
    return res
}

func PowerGenerator(value int) func() int {
    step := 1
    return func() int {
        step *= value 
        return step
    }
}

func DifferentWordsCount(str string) int {
    var word = ""
    set := make(map[string]bool)
    var answer = 0
    for _, i := range (str + " ") {
        if unicode.IsLetter(rune(i)) {
            word += string(unicode.ToLower(rune(i)))
        } else if word != "" {
            if !set[word] {
                answer++
            }
            set[word] = true
            word = ""
        }
    }
    return answer
}